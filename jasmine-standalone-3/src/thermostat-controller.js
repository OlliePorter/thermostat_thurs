var thermostat = new Thermostat();
$(document).ready(function(){


  $('#temp-display').text(thermostat.temperature());

  $(".increase").on('click', function(){
    thermostat.upTemperature();
    $('#temp-display').text(thermostat.temperature());
  });

  $(".decrease").on('click', function(){
    thermostat.downTemperature();
    $('#temp-display').text(thermostat.temperature());
  });

  $("body > div > label > input[type=checkbox]").on('click', function() {
    thermostat.switchPowerSaving();
  })

});
