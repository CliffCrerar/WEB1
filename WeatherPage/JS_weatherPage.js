$(document).ready(function(){
    console.log("JQ workings")

    var posLat;
    var posLong;
    var sUrl = 'https://crossorigin.me/https://api.darksky.net/forecast/';
    var encKey = 'o=Fo=>ADn>nprsDCE?ror==s=qAns>qC';
    var apiLink = '';

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
            posLat = position.coords.latitude;
            posLong = position.coords.longitude;
            
            $("#lat").html(posLat);
            $("#long").html(posLong);

            apiLink = sUrl+decrypt(encKey)+'/'+posLat+','+posLong

            //Tempcode           
            console.log(posLat);
            console.log(posLong);
            //End of tempcode            
            
            $.getJSON(apiLink,function(forecast){
                console.log(forecast);
                //timizone
                var tzSplit = forecast.timezone.split("/")
                $("#cuCity").html("City: "+tzSplit[1]);
                //time
                $("#cuTime").html("Time: "+forecast.currently.time);
                //temprature
                $("#cuTemp").html("Temprature: "+forecast.currently.temperature+" F")
                //apparentTemperature
                $("#cuTempA").html("Feels like: "+forecast.currently.apparentTemperature+" F")
                //summary
                $("#cuSummary").html("Summary: "+forecast.currently.summary);
                //icon
                $("#cuIcon").html("Icon: "+forecast.currently.icon);
                //precipIntensity
                //precipProbability
                //humidity
                //windSpeed
                //windBearing
                //visibility
                //cloudcover
                //pressure
                $("#ldng1").html("");
            });
        });
    }   

    //Dycryption function
	function decrypt(key) {
		var keyLen = key.length;
		var oLetter = '';
		var nPos = 0;
		var nLetter = '';
		var nKey = ''
						
		for (i = 0; i < keyLen; i++) {
			oLetter = key[i];
			nPos = key.codePointAt(i)-13;
			nLetter = String.fromCharCode(nPos)
			nKey = nKey + nLetter;
		}
		return nKey
	}
});