describe("Thermostat", function() {

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  var increaseTempBy = function(num) {
    for(i = 0; i < num; i++ ) {
      thermostat.upTemperature();
    }
  };

  var decreaseTempBy = function(num) {
    for(i = 0; i < num; i++ ) {
      thermostat.downTemperature();
    }
  };

  it("should start at 20 degrees", function() {
    thermostat = new Thermostat();
    result = thermostat.temperature();
    expect(result).toEqual(20);
  });

  it("should be able to increase temperature", function() {
    increaseTempBy(1);
    result = thermostat.temperature();
    expect(result).toEqual(21);
  });

  it("should be able to increase temperature", function() {
    decreaseTempBy(1);
    result = thermostat.temperature();
    expect(result).toEqual(19);
  });

  it("should have a minimum temperature of 10 degrees", function() {
    decreaseTempBy(10);
    expect(function() {thermostat.downTemperature();}).toThrow(new Error("Think of the chafing"))
  });

  it("should have max temperature of 25 degrees when power saving mode is on", function() {
    increaseTempBy(5);
    expect(function() {thermostat.upTemperature();}).toThrow(new Error("Think of the polar bears"))
  });

  it("should have max temperature of 32 degrees when power saving mode is off", function() {
    thermostat.switchPowerSaving();
    increaseTempBy(12);
    expect(function() {thermostat.upTemperature();}).toThrow(new Error("Think of the orphans"))
  });

  it("should be able to reset temperature", function() {
    thermostat.upTemperature();
    thermostat.resetTemperature();
    result = thermostat.temperature();
    expect(result).toEqual(20);
  });

  it("should return low usage when temperature is less than 18", function() {
    decreaseTempBy(4);
    result = thermostat.checkEnergyUsage();
    expect(result).toEqual("low-usage");
  });

  it("should return medium usage when temperature is greather than 18 but less than 25", function() {
    result = thermostat.checkEnergyUsage();
    expect(result).toEqual("medium-usage");
  });

  it("should return high usage when temperature is greather than than 25", function() {
    thermostat.switchPowerSaving();
    increaseTempBy(6);
    result = thermostat.checkEnergyUsage();
    expect(result).toEqual("high-usage");
  });

  it("should actually bloody reset when the reset is called", function() {
    increaseTempBy(5);
    thermostat.resetTemperature();
    result = thermostat.temperature();
    expect(result).toEqual(20);
  });

});
