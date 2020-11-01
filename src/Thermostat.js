class Thermostat {
  constructor() {
    this.MINIMUM_TEMPERATURE = 10;
    this.temperature = 20;
    this.powerSavingModeOn = true;
  }
  getCurrentTemperature() {
    return this.temperature;
  }
  tempUp() {
    this.temperature += 1;
  }
  tempDown() {
    if (this._isMinimumTemperature()) {
      return;
    }
    this.temperature -= 1;
  }
  _isMinimumTemperature() {
    return (this.temperature === this.MINIMUM_TEMPERATURE);
  }
  _isPowerSavingModeOn() {
    return this.powerSavingModeOn;
  }
}