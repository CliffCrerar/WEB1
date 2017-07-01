$(document).ready(function(){
	//var sKey = 'b09b0147a1acef7682ebe00f0d4af1d6'
	
	//Set interface to encrypt this is the default state
	$("#encrypt").click(function(){
		$("label:first").html("Key to encrypt");
		$("body").css("background-color","rgb(150, 110, 150)");
		$("#encryption").html("Encrypt");
		$("label:last").html("Encrypted key");
	});
	
	//Set interface to decrypt
	$("#decrypt").click(function(){
		$("label:first").html("Key to decrypt");		
		$("body").css("background-color","rgb(100, 150, 100)");
		$("#encryption").html("Decrypt");
		$("label:last").html("Decrypted key");		
	});
	
	//Encrypt or decrypt strings
	$("#encryption").click(function(){
		$("#encryption").removeClass("btn-warning");
		$("#encryption").addClass("btn-success");	
		//comment
		console.log($("#encryption").html());
		if ($("#encryption").html() == "Encrypt") {
			$("#keyOut").val(encrypt($("#keyInput").val()));
		}
		else {
			$("#keyOut").val(decrypt($("#keyInput").val()));
		}
	});	
	
	//Encryption function
	function encrypt(key) {
		var keyLen = key.length;
		var oLetter = '';
		var nPos = 0;
		var nLetter = '';
		var nKey = ''
						
		for (i = 0; i < keyLen; i++) {
			oLetter = key[i];
			nPos = key.codePointAt(i)+13;
			nLetter = String.fromCharCode(nPos)
			nKey = nKey + nLetter;
		}
		return nKey
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

