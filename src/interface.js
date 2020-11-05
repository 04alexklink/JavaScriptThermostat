currentTemp = document.getElementById('temperature');
PSMStatus = document.getElementById('power-saving-status');
tempUp = document.getElementById('temp-up');
tempDown = document.getElementById('temp-down');
resetTemp = document.getElementById('reset-temp');
turnPSMOff = document.getElementById('PSM-off');
turnPSMOn = document.getElementById('PSM-on');

var thermostat = new Thermostat();
currentTemp.innerHTML = `${thermostat.getCurrentTemperature()}`;
PSMStatus.innerHTML = `Power Saving Mode: On`;

tempUp.addEventListener('click', function() {
    thermostat.tempUp();
    updateTemperature();   
  });

tempDown.addEventListener('click', function() {
  thermostat.tempDown();
  updateTemperature();
});

function updateTemperature() {
  currentTemp.innerHTML = `${thermostat.getCurrentTemperature()}`;
}