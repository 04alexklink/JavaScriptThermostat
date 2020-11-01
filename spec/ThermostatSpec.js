'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();      
  });

  it('has a temp of 20 degrees when initialised', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  })
  it('increases temperature with tempUp()', function() {
    thermostat.tempUp();
    expect(thermostat.getCurrentTemperature()).toEqual(21);      
  })
  it('decreases temperature with tempDown()', function() {
    thermostat.tempDown();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  })
  it('has minimum temp of 10 degrees', function() {
    for(let i = 0; i <11; i ++) {
      thermostat.tempDown();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  })
})