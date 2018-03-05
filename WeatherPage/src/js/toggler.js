$("#toggle").change(function() {
    if ($("#toggle")[0].checked) {
        $('#nowTemp').html(Math.round(((nowTemp - 32) * 5) / 9) + "&deg C"); //assign temprature in C to html
        $('#nowWind').html('<span class="fa fa-compass"></span>' + Math.round(nowWind * 1.6) + ' km') //assign windspeen in km to html
        $('#todWind').html('<span class="fa fa-compass"></span>' + Math.round(todWind * 1.6) + ' km'); //set today windspeed to html
        $('#todTempMin').html('<span class="fa fa-thermometer-quarter"></span>' + Math.round((((todTempMin - 32) * 5) / 9)) + '&deg C'); //set today min to html
        $('#todTempMax').html('<span class="fa fa-thermometer-three-quarters"></span>' + Math.round((((todTempMax - 32) * 5) / 9)) + '&deg C'); // set today max to html
        $('#tomWind').html('<span class="fa fa-compass"></span>' + Math.round(tomWind * 1.6) + ' km'); //set tomorrows windspeed to html
        $('#tomTempMin').html('<span class="fa fa-thermometer-quarter"></span>' + Math.round(((tomTempMin - 32) * 5) / 9) + '&deg C') //assign tomorrow min to html
        $('#tomTempMax').html('<span class="fa fa-thermometer-three-quarters"></span>' + Math.round(((tomTempMax - 32) * 5) / 9) + '&deg C') //assign tomorrows max to html
    } else {
        $('#nowTemp').html(Math.round(nowTemp) + "&deg F"); //assign temprature in C to html
        $('#nowWind').html('<span class="fa fa-compass"></span>' + Math.round(nowWind) + ' mph') //assign windspeen in km to html
        $('#todWind').html('<span class="fa fa-compass"></span>' + Math.round(todWind) + ' mph'); //set today windspeed to html
        $('#todTempMin').html('<span class="fa fa-thermometer-quarter"></span>' + Math.round(todTempMin) + '&deg F'); //set today min to html
        $('#todTempMax').html('<span class="fa fa-thermometer-three-quarters"></span>' + Math.round(todTempMax) + '&deg F'); // set today max to html
        $('#tomWind').html('<span class="fa fa-compass"></span>' + Math.round(tomWind) + ' mph'); //set tomorrows windspeed to html
        $('#tomTempMin').html('<span class="fa fa-thermometer-quarter"></span>' + Math.round(tomTempMin) + '&deg F') //assign tomorrow min to html
        $('#tomTempMax').html('<span class="fa fa-thermometer-three-quarters"></span>' + Math.round(tomTempMax) + '&deg F') //assign tomorrows max to html                    
    }
});