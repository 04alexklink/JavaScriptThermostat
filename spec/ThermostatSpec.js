'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();      
  });

  it('has a temp of 20 degrees when initialised', function() {
    expect(thermostat.temperature).toEqual(20);
  })
})