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
			var secretKey = "b09b0147a1acef7682ebe00f0d4af1d6";
			apiLink = fLink+secretKey+"/"+lat1+","+long1;
			//$("#link").html(apiLink);
			$("#dsApi").attr("src",apiLink);
		});	
	};

	var invocation = new XMLHttpRequest();
	var url = apiLink
	
	function callOtherDomain(){
		if (invocation) {
			invocation.open("GET",url,true);
			invocation.onreadystatechange = handler;
			invocation.send();
		}
	}
		
	$("#change").on("click", function(){
		$.getJSON(apiLink,function(forecast){
			console.log(forecast);
		});
	});
	
});