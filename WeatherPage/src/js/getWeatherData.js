//wGet darksky object and set weather variables
module.exports = function(apiLink) {

    $.getJSON(apiLink, function(forecast) {
        localStorage.icon = forecast.currently.icon;
        //console.log(forecast);

        //Set all weather variables default values
        window.nowSum = forecast.currently.summary;
        window.nowTemp = forecast.currently.temperature;
        window.nowWind = forecast.currently.windSpeed;
        window.nowIcon = forecast.currently.icon;

        window.todSum = forecast.daily.data[0].summary;
        window.todWind = forecast.daily.data[0].windSpeed;
        window.todTempMin = forecast.daily.data[0].temperatureMin;
        window.todTempMax = forecast.daily.data[0].temperatureMax;

        window.tomSum = forecast.daily.data[1].summary;
        window.tomWind = forecast.daily.data[1].windSpeed;
        window.tomTempMin = forecast.daily.data[1].temperatureMin;
        window.tomTempMax = forecast.daily.data[1].temperatureMax;

        $('#city').html(forecast.timezone.split("/")[1] + ", " + forecast.timezone.split("/")[0]) //Set Timezone

        $("#nowSum").html(nowSum); //Set current Summary
        $('#nowTemp').html(Math.round(((nowTemp - 32) * 5) / 9) + "&deg C"); //assign temprature in C to html
        $('#nowWind').html('<span class="fa fa-compass"></span>' + Math.round(nowWind * 1.6) + ' km') //assign windspeen in km to html

        $('#todSum').html(todSum); //set today sumary to html
        $('#todWind').html('<span class="fa fa-compass"></span>' + Math.round(todWind * 1.6) + ' km'); //set today windspeed to html
        $('#todTempMin').html('<span class="fa fa-thermometer-quarter"></span>' + Math.round((((todTempMin - 32) * 5) / 9)) + '&deg C'); //set today min to html
        $('#todTempMax').html('<span class="fa fa-thermometer-three-quarters"></span>' + Math.round((((todTempMax - 32) * 5) / 9)) + '&deg C'); // set today max to html

        $('#tomSum').html(tomSum); //set tomorrows summary tohtml
        $('#tomWind').html('<span class="fa fa-compass"></span>' + Math.round(tomWind * 1.6) + ' km'); //set tomorrows windspeed to html
        $('#tomTempMin').html('<span class="fa fa-thermometer-quarter"></span>' + Math.round(((tomTempMin - 32) * 5) / 9) + '&deg C') //assign tomorrow min to html
        $('#tomTempMax').html('<span class="fa fa-thermometer-three-quarters"></span>' + Math.round(((tomTempMax - 32) * 5) / 9) + '&deg C') //assign tomorrows max to html

        $("#loading").hide(); //hide loading 
        $("#toggle").attr("display", "block"); //enable toggle button
        $("#weather").show(); //show weather div

        const determineIcon = require('./determineIcon');
        //console.log(nowIcon);
        Promise.resolve(determineIcon(nowIcon))
            .then(function() {
                require('../wi/TweenMax');
                require('../wi/script.js');
            });

    });
}