$(document).ready(function() {
  console.log("JQ workings");
  $("#toggle").attr("disabled", true);
  var posLat;
  var posLong;
  var sUrl = "https://crossorigin.me/https://api.darksky.net/forecast/";
  var encKey = "o=Fo=>ADn>nprsDCE?ror==s=qAns>qC";
  var apiLink = "";

  var skycons = new Skycons({"color":"black"});

  skycons.add("clear-day", Skycons.CLEAR_DAY);
  skycons.add("clear-night", Skycons.CLEAR_NIGHT)
  skycons.play();

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      posLat = position.coords.latitude;
      posLong = position.coords.longitude;

      apiLink =
        sUrl +
        decrypt(encKey) +
        "/" +
        posLat +
        "," +
        posLong +
        "?exclude=alerts,flags,units=ca";

      //Tempcode
      console.log(posLat);
      console.log(posLong);
      //End of tempcode

      //getWeatherData(apiLink);
    });
  }

  function getWeatherData(apiLink) {
    //console.log(Date.now());
    
    $.getJSON(apiLink, function(forecast) {
      console.log(forecast);

      var d = new Date();
      console.log(d.getTime());
      
      //timizone
      var tzSplit = forecast.timezone.split("/");
      $("#cuCity").html("City: " + tzSplit[1]);
      //time
      $("#cuTime").html("Time: "+forecast.currently.time);
      //temprature
      $("#cuTemp").html("Temprature: " + forecast.currently.temperature + " F");
      //apparentTemperature
      $("#cuTempA").html("Feels like: " + forecast.currently.apparentTemperature + " F");
      //summary
      $("#cuSummary").html("Summary: " + forecast.currently.summary);
      //icon
      $("#cuIcon").html("Icon: " + forecast.currently.icon);
      //precipIntensity
      $("#cuPrecipInt").html("Precipitation Intensity: " + forecast.currently.precipIntensity);
      //precipProbability
      $("#cuPrecipProb").html("Chances of rain: " + forecast.currently.precipProbability);
      //humidity
      $("#cuHum").html("Humidity: " + forecast.currently.humidity);
      //windSpeed
      $("#cuWindSpeed").html("Windspeed: " + forecast.currently.windSpeed);
      //windBearing
      $("#cuWindBear").html("Bearing: " + forecast.currently.windBearing);
      //cloudcover
      $("#cuCloudCover").html("Cloud Cover: " + forecast.currently.cloudCover);
      //pressure
      $("#cuPressure").html("Pressure: " + forecast.currently.pressure);

      $("#ldng1").html("");
      $("#toggle").attr("disabled", false);
    });
  }

  //Change to fahrenthiet
  $("#toggle").change(function() {
    if ($("#toggle")[0].checked) {
      console.log("Celsius");
    } else {
      console.log("Fahrentheit");
    }
  });

  //Dycryption function
  function decrypt(key) {
    var keyLen = key.length;
    var oLetter = "";
    var nPos = 0;
    var nLetter = "";
    var nKey = "";

    for (i = 0; i < keyLen; i++) {
      oLetter = key[i];
      nPos = key.codePointAt(i) - 13;
      nLetter = String.fromCharCode(nPos);
      nKey = nKey + nLetter;
    }
    return nKey;
  }
  //skycons

});