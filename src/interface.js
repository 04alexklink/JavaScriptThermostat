currentTemp = document.getElementById('temperature');
PSMStatus = document.getElementById('power-saving-status');
tempUp = document.getElementById('temp-up');
tempDown = document.getElementById('temp-down');
resetTemp = document.getElementById('reset-temp');
turnPSMOff = document.getElementById('PSM-off');
turnPSMOn = document.getElementById('PSM-on');


// AJAX request for London weather from an API. Loads to page by default:
localTemp = document.getElementById('local-temperature');
localCity = document.getElementById('city');
dropDownLocalCitySelection = document.getElementById('dropdown-current-city');
var weather;
function getLondonWeather() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', true);
  xhr.onload = function() {
    weather = JSON.parse(this.responseText);
    localTemp.innerHTML= `${weather.main.temp}`
    localCity.innerHTML= `London`
  }
  xhr.send();
};

getLondonWeather();

// get Local Weather for one of 4 cities available in a drop down menu through AJAX request to weather API:
dropDownLocalCitySelection.addEventListener('change', getLocalWeather); 

function getLocalWeather() {
  var city = dropDownLocalCitySelection.value;
  var xhr = new XMLHttpRequest();
  xhr.open('GET',`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric`, true);
  xhr.onload = function() {
    var weather = JSON.parse(this.responseText);
    localTemp.innerHTML= `${weather.main.temp}`;
    localCity.innerHTML= `${city}`;
  }
  xhr.send();
};

// get local weather for any city the user types in, sending AJAX request to weather API:
submittedLocalCitySelection = document.getElementById('submitted-select-city');
submittedLocalCitySelection.addEventListener('submit', function(e) {
  e.preventDefault();
  var city = document.getElementById('select-current-city').value;
  var xhr = new XMLHttpRequest();
  xhr.open('GET',`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric`, true);
  xhr.onload = function() {
    var weather = JSON.parse(this.responseText);
    localTemp.innerHTML= `${weather.main.temp}`;
    localCity.innerHTML= `${city}`;
  }
  xhr.send();
})

var thermostat = new Thermostat();
currentTemp.innerHTML = `${thermostat.getCurrentTemperature()}`;
currentTemp.className = `${thermostat.displayUsage()}`;
PSMStatus.innerHTML = `Power Saving Mode: On`;

tempUp.addEventListener('click', function() {
  thermostat.tempUp();
  updateTemperature();   
});

tempDown.addEventListener('click', function() {
  thermostat.tempDown();
  updateTemperature();
});

resetTemp.addEventListener('click', function() {
  thermostat.resetTemperature();
  updateTemperature();
});

turnPSMOff.addEventListener('click', function() {
  thermostat.powerSavingModeOff();
  PSMStatus.innerHTML = `Power Saving Mode: Off`;
});

turnPSMOn.addEventListener('click', function() {
  thermostat.powerSavingModeOn();
  updateTemperature();
  PSMStatus.innerHTML = `Power Saving Mode: On`;
});

function updateTemperature() {
  currentTemp.innerHTML = `${thermostat.getCurrentTemperature()}`;
  currentTemp.className = `${thermostat.displayUsage()}`;
};