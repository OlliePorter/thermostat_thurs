function Thermostat() {
  this._defaultTemp = 20;
  this._temperature = this._defaultTemp;
  this._powerSaving = true;
  this._minimumTemp = 10;
  this._maximumLpTemp = 25;
  this._maximumHpTemp = 32;
};

Thermostat.prototype.temperature = function() {
  return this._temperature;
};

Thermostat.prototype.upTemperature = function() {
  if(this._powerSaving) {
    if(this._temperature >= this._maximumLpTemp) {
      throw new Error("Think of the polar bears")
    } else {
      this._temperature += 1;
    };
  } else {
    if (this._temperature >= this._maximumHpTemp) {
      throw new Error("Think of the orphans")
    } else {
      this._temperature += 1;
    };
  };

};

Thermostat.prototype.downTemperature = function() {
  if (this._temperature <= this._minimumTemp){
    throw new Error("Think of the chafing");
  } else {
  this._temperature -= 1;};
};

Thermostat.prototype.switchPowerSaving= function() {
  this._powerSaving = !this._powerSaving;
};

Thermostat.prototype.resetTemperature= function() {
  this._temperature = this._defaultTemp;
};

Thermostat.prototype.checkEnergyUsage = function() {
  if (this._temperature < 18) {
    return "low-usage";
  } else if (this._temperature < 25 && this._temperature > 18 ) {
    return "medium-usage";
  } else {
    return "high-usage";
  };
};
