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
  it('has powersave mode on when initialised', function() {
    expect(thermostat._isPowerSavingModeOn()).toBe(true);
  })
  it('can have PSM turned off', function() {
    thermostat.powerSavingModeOff();
    expect(thermostat._isPowerSavingModeOn()).toBe(false);
  })
  it('can have PSM turned back on', function() {
    thermostat.powerSavingModeOff();
    thermostat.powerSavingModeOn();
    expect(thermostat._isPowerSavingModeOn()).toBe(true);
  })
  it('has max temp of 25 when PSM on', function() {
    for(let i=0; i<7; i++) {
      thermostat.tempUp();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(25);
  })
  it('has max temp of 32 when PSM off', function() {
    thermostat.powerSavingModeOff();
    for(let i=0; i<13; i++) {
      thermostat.tempUp();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(32);
  })
  it('can have temperature reset to default', function() {
    thermostat.tempUp();
    thermostat.resetTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  })
})