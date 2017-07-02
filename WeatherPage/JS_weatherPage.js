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
            $("#encLink").html(apiLink);
            console.log(posLat);
            console.log(posLong);
            //End of tempcode            
            $("#ldng1").html("");
            $("button").removeAttr("disabled");
            var ds = apiLink;
            $("cuCity").html(forecast.timezone)
        });
    }

    //Temp button to test API function
    $("button:last").click(function(){
        $.getJSON(apiLink,function(forecast){
			console.log(forecast.timezone);
            console.log(forecast);
            $("#dsObject").html(JSON.stringify(forecast));
            $("#dsObjectPart").html(JSON.stringify(forecast.currently));
		});
    });

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