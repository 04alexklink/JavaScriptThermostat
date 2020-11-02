class Thermostat {
  constructor() {
    this.MINIMUM_TEMPERATURE = 10;
    this.DEFAULT_TEMPERATURE = 20;
    this.temperature = this.DEFAULT_TEMPERATURE;
    this.powerSavingMode = true;
    this.MAX_TEMP_PSM_ON = 25;
    this.MAX_TEMP_PSM_OFF = 32;
    this.MEDIUM_USAGE_HIGHER_LIMIT = 25;
    this.LOWER_USAGE_HIGHER_LIMIT = 18;
    this.HIGH_USAGE_LOWER_LIMIT;
  }
  getCurrentTemperature() {
    return this.temperature;
  }
  tempUp() {
    if(this._isMaximumTemperature()) {
      return;
    }
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

  _isMaximumTemperature() {
    if(this._isPowerSavingModeOn()) {
      return (this.temperature === this.MAX_TEMP_PSM_ON);
    }
    return (this.temperature === this.MAX_TEMP_PSM_OFF);
  }
  _isPowerSavingModeOn() {
    return this.powerSavingMode;
  }

  powerSavingModeOff() {
    this.powerSavingMode = false;
  }
  resetToPSMOnMaxTemp() {
    if(this.temperature > this.MAX_TEMP_PSM_ON) {
      this.temperature = this.MAX_TEMP_PSM_ON
    }
  }
  powerSavingModeOn() {
    this.resetToPSMOnMaxTemp();
    this.powerSavingMode = true;
  }
  resetTemperature() {
    this.temperature = this.DEFAULT_TEMPERATURE;
  }

  displayUsage() {
    if(this.temperature <= this.LOWER_USAGE_HIGHER_LIMIT) {
      return 'low-usage';
    } else if
    (this.temperature <= this.MEDIUM_USAGE_HIGHER_LIMIT) {
      return 'medium-usage';
    } else {
      return 'high-usage';
    }
  }
}