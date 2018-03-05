//wGet darksky object and set weather variables
function getWeatherData(apiLink) {
    $.getJSON(apiLink, function(forecast) {
        //console.log(forecast);

        //Set all weather variables default values
        const nowSum = forecast.currently.summary;
        const nowTemp = forecast.currently.temperature;
        const nowWind = forecast.currently.windSpeed;
        const nowIcon = forecast.currently.icon;

        const todSum = forecast.daily.data[0].summary;
        const todWind = forecast.daily.data[0].windSpeed;
        const todTempMin = forecast.daily.data[0].temperatureMin;
        const todTempMax = forecast.daily.data[0].temperatureMax;

        const tomSum = forecast.daily.data[1].summary;
        const tomWind = forecast.daily.data[1].windSpeed;
        const tomTempMin = forecast.daily.data[1].temperatureMin;
        const tomTempMax = forecast.daily.data[1].temperatureMax;

        //skycons.add("canvas", Skycons[nowIcon.split("-").join("_").toUpperCase()]); //Set Wqeather icon
        //skycons.play(); //start icon animation

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
        $("#toggle").attr("disabled", false); //enable toggle button
        $("#weather").show() //show weather div

    });
}