class Thermostat {
  constructor() {
    this.MINIMUM_TEMPERATURE = 10;
    this.temperature = 20;
  }
  getCurrentTemperature() {
    return this.temperature;
  }
  tempUp() {
    this.temperature += 1;
  }
  tempDown() {
    if(this.temperature > this.MINIMUM_TEMPERATURE) {
    this.temperature -= 1;
    }
  }
}