describe("Thermostat", function() {

  it("should start at 20 degrees", function() {
    thermostat = new Thermostat();
    result = thermostat.temperature();
    expect(result).toEqual(20);
  });

  it("should be able to increase temperature", function() {
    thermostat = new Thermostat();
    thermostat.upTemperature();
    result = thermostat.temperature();
    expect(result).toEqual(21);
  });

  it("should be able to increase temperature", function() {
    thermostat = new Thermostat();
    thermostat.downTemperature();
    result = thermostat.temperature();
    expect(result).toEqual(19);
  });

  it("should have a minimum temperature of 10 degrees", function() {
    thermostat = new Thermostat();
    for(i = 0; i < 10; i++ ) {
      thermostat.downTemperature();
    }
    expect(function() {thermostat.downTemperature();}).toThrow(new Error("Think of the chafing"))
  });

  it("should have max temperature of 25 degrees when power saving mode is on", function() {
    thermostat = new Thermostat();
    for(i = 0; i < 5; i++) {
      thermostat.upTemperature();
    }
    expect(function() {thermostat.upTemperature();}).toThrow(new Error("Think of the polar bears"))
  });

  it("should have max temperature of 32 degrees when power saving mode is off", function() {
    thermostat = new Thermostat();
    thermostat.switchPowerSaving();
    for(i = 0; i < 12; i++) {
      thermostat.upTemperature();
    }
    expect(function() {thermostat.upTemperature();}).toThrow(new Error("Think of the orphans"))
  });

  it("should be able to reset temperature", function() {
    thermostat = new Thermostat();
    thermostat.upTemperature();
    thermostat.resetTemperature();
    result = thermostat.temperature();
    expect(result).toEqual(20);
  });

  it("should return low usage when temperature is less than 18", function() {
    thermostat = new Thermostat();
    for(i = 0; i < 4; i++) {
      thermostat.downTemperature();
    };
    result = thermostat.checkEnergyUsage();
    expect(result).toEqual("low-usage");
  });

  it("should return medium usage when temperature is greather than 18 but less than 25", function() {
    thermostat = new Thermostat();
    result = thermostat.checkEnergyUsage();
    expect(result).toEqual("medium-usage");
  });

  it("should return high usage when temperature is greather than than 25", function() {
    thermostat = new Thermostat();
    thermostat.switchPowerSaving();
    for(i = 0; i < 6; i++) {
      thermostat.upTemperature();
    };
    result = thermostat.checkEnergyUsage();
    expect(result).toEqual("high-usage");
  });

  it("should actually bloody reset when the reset is called", function() {
    thermostat = new Thermostat();
    for(i = 0; i < 5; i++) {
      thermostat.upTemperature();
    }
    thermostat.resetTemperature();
    result = thermostat.temperature();
    expect(result).toEqual(20);
  });

});
