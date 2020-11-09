'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();      
  });

  describe('#getCurrentTemperature', function() {
    it('is 20 degrees when initialised', function() {
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });
  });
  
  describe('#tempUp', function() {
    it('increases the temperature', function() {
      thermostat.tempUp();
      expect(thermostat.getCurrentTemperature()).toEqual(21);      
    });
    describe('PSM is on', function() {
      it('has max temp of 25 when PSM on', function() {
        for(let i=0; i<7; i++) {
          thermostat.tempUp();
        }
        expect(thermostat.getCurrentTemperature()).toEqual(25);
      });
    });
    describe('PSM is off', function() {
      it('has max temp of 32 when PSM off', function() {
        thermostat.powerSavingModeOff();
        for(let i=0; i<13; i++) {
          thermostat.tempUp();
        }
        expect(thermostat.getCurrentTemperature()).toEqual(32);
      });
    });
  });

  describe('#tempDown', function() {
    it('decreases the temperature', function() {
      thermostat.tempDown();
      expect(thermostat.getCurrentTemperature()).toEqual(19);
    });
    it('has minimum temp of 10 degrees', function() {
      for(let i = 0; i <11; i ++) {
        thermostat.tempDown();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(10);
    });
  });
  
  describe('#_isPowerSavingModeOn', function() {
    it('has powersave mode on when initialised', function() {
    expect(thermostat._isPowerSavingModeOn()).toBe(true);
    });
  });
  
  describe('#powerSavingModeOff', function() {
    it('turns PSM off', function() {
      thermostat.powerSavingModeOff();
      expect(thermostat._isPowerSavingModeOn()).toBe(false);
    });
  });
  
  describe('#powerSavingModeOn', function() {
    it('turns PSM back on', function() {
      thermostat.powerSavingModeOff();
      thermostat.powerSavingModeOn();
      expect(thermostat._isPowerSavingModeOn()).toBe(true);
    });
    it('resets temp to PSM On Max if temp above this value' , function() {
      thermostat.powerSavingModeOff();
      for(let i=0; i < 8; i++) {
        thermostat.tempUp();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(28);
      thermostat.powerSavingModeOn();
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });
  describe('#resetTemperature', function() {
    it('resets temp to default temperature', function() {
      thermostat.tempUp();
      thermostat.tempUp();
      thermostat.resetTemperature();
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });
  });
  describe('displaying energy usage levels', function() {
    describe('when temp below 18', function() {
      it('displays low-usage', function() { 
        for(let i = 0; i < 3; i++) {
          thermostat.tempDown();
        }
        expect(thermostat.displayUsage()).toEqual('low-usage');
      });
    });
    describe('when temp 18 to <=25', function() {
      it('displays medium-usage', function() {
        expect(thermostat.displayUsage()).toEqual('medium-usage');
      });
    });
    describe('when temp above 25', function() {
      it('displays high-usage', function() {
        thermostat.powerSavingModeOff();
        for(let i = 0; i < 6; i ++) {
          thermostat.tempUp();
        }
        expect(thermostat.displayUsage()).toEqual('high-usage');
      });
    });
  });
});