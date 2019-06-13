var thermostat = new Thermostat();
var opts = {
  angle: -0.2, // The span of the gauge arc
  lineWidth: 0.2, // The line thickness
  radiusScale: 1, // Relative radius
  pointer: {
    length: 0.6, // // Relative to gauge radius
    strokeWidth: 0.035, // The thickness
    color: '#000000' // Fill color
  },
  limitMax: false,     // If false, max value increases automatically if value > maxValue
  limitMin: false,     // If true, the min value of the gauge will be fixed
  // colorStart: '#6FADCF',   // Colors
  // colorStop: '#8FC0DA',    // just experiment with them
  strokeColor: '#E0E0E0',  // to see which ones work best for you
  generateGradient: true,
  highDpiSupport: true,     // High resolution support
  percentColors: [[0.0, "#a9d70b" ], [0.50, "#f9c802"], [1.0, "#ff0000"]]
};

$(document).ready(function(){

  var target = document.getElementById('gauge'); // your canvas element
  var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
  gauge.maxValue = 32; // set max gauge value
  gauge.setMinValue(10);  // Prefer setter over gauge.minValue = 0
  gauge.animationSpeed = 32; // set animation speed (32 is default value)
  gauge.set(thermostat.temperature()); // set actual value

  $('#temp-display').text(thermostat.temperature());

  $("#button.increase").on('click', function(){
    thermostat.upTemperature();
    $('#temp-display').text(thermostat.temperature());
    gauge.set(thermostat.temperature());
  });

  $(".decrease").on('click', function(){
    thermostat.downTemperature();
    $('#temp-display').text(thermostat.temperature());
    gauge.set(thermostat.temperature());
  });

  $("body > div > label > input[type=checkbox]").on('click', function() {
    thermostat.switchPowerSaving();
  })

  $("#reset").on('click', function() {
    thermostat.resetTemperature();
    $('#temp-display').text(thermostat.temperature());
    gauge.set(thermostat.temperature());
  });

  $.get("http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=c1eb59d423c260388ba9b4cbc0a7feb2", function(weatherResponse) {
   $('#weather').text("Temperature outside:" + Math.round(weatherResponse.main.temp - 273.15) + " degrees");
   var iconcode = weatherResponse.weather[0].icon;
   var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
   $('#weather-icon').attr('src', iconurl);
  })

});
