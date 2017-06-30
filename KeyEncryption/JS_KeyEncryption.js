$(document).ready(function(){
	
	console.log("jQuery working");
	
	var sKey = 'b09b0147a1acef7682ebe00f0d4af1d6'
	
	//Set interface to encrypt this is the default state
	$("#encrypt").click(function(){
		console.log("clicked the encrypt button");
		$("label:first").html("Key to encrypt");
		$("body").css("background-color","rgb(150, 110, 150)");
		$("#encryption").html("Encrypt");
		$("label:last").html("Encrypted key");
	});
	
	//Set interface to decrypt
	$("#decrypt").click(function(){
		console.log("clicked the decrypt button");
		$("label:first").html("Key to decrypt");		
		$("body").css("background-color","rgb(100, 150, 100)");
		$("#encryption").html("Decrypt");
		$("label:last").html("Decrypted key");		
	});
	
	$("#encryption").click(function(){
		console.log("click1");
		//Change the style of the button
		$("#encryption").removeClass("btn-warning");
		$("#encryption").addClass("btn-success");
				
		console.log(sKey);
		$("#keyOut").val(encrypt($("#keyInput").val()));		
	});	
	
	//Encryption function
	function encrypt(key) {
		var keyLen = key.length;
		var oLetter = '';
		var nPos = 0;
		var nLetter = '';
		var nKey = ''
		
		console.log(keyLen);
				
		for (i = 0; i < keyLen; i++) {
			oLetter = key[i];
			nPos = key.codePointAt(i)+13;
			nLetter = String.fromCharCode(nPos)
			nKey = nKey + nLetter;
			
			console.log("i = "+i);
			console.log("Old Letter = "+oLetter);
			console.log("New UNICODE letter number = "+nPos);
			console.log("New UNICODE letter = "+nLetter);
			console.log("New Key = "+nKey);
		}
		return nKey
	}
	
	//Dycryption function
	function decrypt(key) {
		
	}

});

