//JS for Quote generator
var rNump = -1;
var QuoteArray = [
		{
			quote: "Loosers try their best, winner go home and fuck the prom queen.", 
			author: "John Mason."
		},
		{
			quote: "I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.", 
			author: "Muhammad Ali"
		},
		{
			quote: "Insert Qoute2", 
			author: "Inser Author2"
		},
		{
			quote: "Insert Qoute3", 
			author: "Inser Author3"
		},
		{
			quote: "Insert Qoute4", 
			author: "Inser Author4"
		},
		{
			quote: "Insert Qoute5", 
			author: "Inser Author5"
		},
		{
			quote: "Insert Qoute6", 
			author: "Inser Author6"
		},
		{
			quote: "Insert Qoute7", 
			author: "Inser Author7"
		},
		{
			quote: "Insert Qoute8", 
			author: "Inser Author8"
		},
		{
			quote: "Insert Qoute9", 
			author: "Inser Author9"
		},
		{
			quote: "Insert Qoute10", 
			author: "Inser Author10"
		},
		{
			quote: "Insert Qoute11", 
			author: "Inser Author11"
		},
		{
			quote: "Insert Qoute12", 
			author: "Inser Author12"
		},
		{
			quote: "Insert Qoute13", 
			author: "Inser Author13"
		},
		{
			quote: "Insert Qoute14", 
			author: "Inser Author14"
		},
		{
			quote: "Insert Qoute15", 
			author: "Inser Author15"
		},
	]
		
function randomNumber() {
	var rNum = Math.random()	
	var arrNum = Math.floor(rNum*(QuoteArray.length))
	if(arrNum == rNump) {		
		while(arrNum == rNump){
			var i = 0;
			i++;
			console.log("i: "+i);
			rNum = Math.random();
			arrNum = Math.floor(rNum*(QuoteArray.length));	
		}
	}			
	rNump = arrNum;	
	return arrNum;
}
		
function ChangeQuote(){
	var num = randomNumber();
	console.log("RANDOM FUNCTION :"+num);
	document.getElementById("randQuote").innerHTML = QuoteArray[num].quote;
	document.getElementById("randAuth").innerHTML = QuoteArray[num].author;
	console.log("Generate Quote Button Clicked.");
}