$(document).ready(function(){
	var apiLink;		
	var lat1;
	var long1;
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position){
			lat1 = position.coords.latitude;
			long1 = position.coords.longitude;
			$("#lat").html(lat1);
			$("#long").html(long1);
			var fLink = "https://api.darksky.net/forecast/";
			var secretKey = decrypt("b09b0147a1acef7682ebe00f0d4af1d6");
			apiLink = fLink+secretKey+"/"+lat1+","+long1;
			//$("#link").html(apiLink);
			$("#dsApi").attr("src",apiLink);
		});	
	};

	var invocation = new XMLHttpRequest();
	var url = apiLink
	
	$("#change").on("click", function(){
		$.getJSON(apiLink,function(forecast){
			console.log(forecast);
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