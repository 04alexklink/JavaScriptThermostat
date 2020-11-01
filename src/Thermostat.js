class Thermostat {
  constructor() {
    this.temperature = 20;
  }

  getCurrentTemperature() {
    return this.temperature;
  }

  tempUp() {
    this.temperature += 1;
  }

  tempDown() {
    this.temperature -= 1;
  }
}