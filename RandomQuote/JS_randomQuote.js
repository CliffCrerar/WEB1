//JS for Quote generator
var rNump = -1;
var usedIndex = [];
var QuoteArray = [
		{
			quote: "Loosers try their best, winners go home and fuck the prom queen.", 
			author: "John Mason, played by Sean Connery"
		},
		{
			quote: "I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.", 
			author: "Muhammad Ali"
		},
		{
			quote: "They watch, then they hate, then they copy.",
			author: "Millionaire Sayings"
		},
		{
			quote: "Education is the most powerful, weapon you can use to change the world.", 
			author: "Nelson Mandela"
		},
		{
			quote: "You either die a hero, or live long enough to see yourself become the villian.", 
			author: "Harvey Dent(tow faced Harvey), played by Aaron Eckhart"
		},
		{
			quote: "What does not kill you makes you stranger.", 
			author: "The Joker, played by Heath Ledger"
		},
		{
			quote: "The man who passes the sentence, should swing the sword.", 
			author: "Eddard Stark, played by Sean Bean"
		},
		{
			quote: "The things I do for love.", 
			author: "Jaime Lannister, played by Nikolaj Coster-Waldau"
		},
		{
			quote: "Chaos isn't a pit. Chaos is a ladder. Many who try to climb it fail and never get to try again.", 
			author: "Peter Baelish, played by Aiden Gillen"
		},
		{
			quote: "So many men, they risk so little, then they die. I am willing to risk everything to get what I want.", 
			author: "Peter Baelish, played by Aiden Gillen"
		},
		{
			quote: "Know your strengths, use them wisely and one man can be worth ten thousand.", 
			author: "Peter Baelish, played by Aiden Gillen"
		},
		{
			quote: "We buy things we don't need, with money we don't have to impress people we don't like.", 
			author: "Tyler Durden, played by Brad Pitt \\ Edward Norton"
		},
		{
			quote: "Its only after we have lost everything that we are free to do anything.", 
			author: "Tyler Durden, played by Brad Pitt \\ Edward Norton"
		},
		{
			quote: "A man that doesn't spend time with his family, can never be a real man.", 
			author: "Vito Corleone, played by Marlon Brando"
		},
		{
			quote: "Train yourself to let go of everything you fear to lose.", 
			author: "Yoda, played by Frank Oz \\ Tom Kane"
		},
		{
			quote: "Death is a natural part of life. Rejoice for those around you who transform into the Force.", 
			author: "Yoda, played by Frank Oz \\ Tom Kane"
		},
		{
			quote: "We don't play golf because we are good at it, we play golf because its awesome.", 
			author: "Cliff Crerar"
		},
		{
			quote: "The only rules that really matter are these\; what a man can do and what a man can't do.", 
			author: "Captain Jack Sparrow, played by Johnny Depp"
		}/*,
		{
			quote: "Qoute 18", 
			author: "Author"
		},
		{
			quote: "Qoute 19", 
			author: "Author"
		},
		{
			quote: "Qoute 20", 
			author: "Author"
		},
		{
			quote: "Qoute 21", 
			author: "Author"
		},
		{
			quote: "Qoute 22", 
			author: "Author"
		},
		{
			quote: "Qoute 23", 
			author: "Author"
		},
		{
			quote: "Qoute 24", 
			author: "Author"
		},
		{
			quote: "Qoute 25", 
			author: "Author"
		},
		{
			quote: "Qoute 26", 
			author: "Author"
		},
		{
			quote: "Qoute 27", 
			author: "Author"
		},
		{
			quote: "Qoute 28", 
			author: "Author"
		},
		{
			quote: "Qoute 29", 
			author: "Author"
		},
		{
			quote: "Qoute 30", 
			author: "Author"
		},
		{
			quote: "Qoute 31", 
			author: "Author"
		},
		{
			quote: "Qoute 32", 
			author: "Author"
		},
		{
			quote: "Qoute 33", 
			author: "Author"
		},
		{
			quote: "Qoute 34", 
			author: "Author"
		},
		{
			quote: "Qoute 35", 
			author: "Author"
		},
		{
			quote: "Qoute 36", 
			author: "Author"
		},
		{
			quote: "Qoute 37", 
			author: "Author"
		},
		{
			quote: "Qoute 38", 
			author: "Author"
		},
		{
			quote: "Qoute 39", 
			author: "Author"
		},
		{
			quote: "Qoute 40", 
			author: "Author"
		},
		{
			quote: "Qoute 41", 
			author: "Author"
		},
		{
			quote: "Qoute 42", 
			author: "Author"
		},
		{
			quote: "Qoute 43", 
			author: "Author"
		},
		{
			quote: "Qoute 44", 
			author: "Author"
		},
		{
			quote: "Qoute 45", 
			author: "Author"
		},
		{
			quote: "Qoute 46", 
			author: "Author"
		},
		{
			quote: "Qoute 47", 
			author: "Author"
		},
		{
			quote: "Qoute 48", 
			author: "Author"
		},
		{
			quote: "Qoute 49", 
			author: "Author"
		}*/
		
	]
		
function randomNumber() {
	var rNum = Math.random()	
	var arrNum = Math.floor(rNum*(QuoteArray.length))
	if(arrNum == rNump) {		
		while(arrNum == rNump){
			var i = 0;
			i++;
			console.log("i1: "+i);
			rNum = Math.random();
			arrNum = Math.floor(rNum*(QuoteArray.length));	
		}
	}			
	rNump = arrNum;	
	return arrNum;
}

function prepTweet(quote, author) {
	
	var tQuote = quote;
	var tAuthor = author;
	var spaceSearch = tQuote.search(" ");
	var twitterApi = "https://twitter.com/intent/tweet?text="
	
	console.log(spaceSearch);

	while(spaceSearch > 0) {
		tQuote = tQuote.replace(" ","+");
		spaceSearch = tQuote.search(" ");
		console.log(spaceSearch);
	}
	
	spaceSearch = tAuthor.search(" ");
	console.log(spaceSearch);
	var it = 0
	while(spaceSearch > 0) {
		tAuthor = tAuthor.replace(" ","+");
		spaceSearch = tAuthor.search(" ");
		console.log(spaceSearch);
	}	
	tweetHref =twitterApi+"'"+ tQuote+"'+--"+tAuthor
	return tweetHref;	
}
		
function ChangeQuote(){
	console.log('Array length: '+QuoteArray.length)
	console.log('Array length: '+usedIndex.length)
	
	var num = randomNumber(); console.log("INITIAL NUMBER: "+num);
	console.log(usedIndex.indexOf(num));
	
	if (QuoteArray.length == usedIndex.length) {
		document.getElementById("randQuote").innerHTML = "You have seen all my qoutes, thanks for playing";
		document.getElementById("randAuth").innerHTML = '';
	} else { 
		if (usedIndex.indexOf(num) != -1) {
			while (usedIndex.indexOf(num) != -1) {
				var i = 0;
				i++;
				console.log("i2: "+i);
				num = randomNumber();
			}
		}
		console.log(usedIndex.indexOf(num));
		console.log("Number pushed to usedIndex :"+num);
		usedIndex.push(num);	
		document.getElementById("randQuote").innerHTML = QuoteArray[num].quote;
		document.getElementById("randAuth").innerHTML = QuoteArray[num].author;
		console.log("Generate Quote Button Clicked.");
		console.log("Prepare Tweet");
		console.log(prepTweet(QuoteArray[num].quote,QuoteArray[num].author));
		document.getElementById("tweet1").setAttribute("href",prepTweet(QuoteArray[num].quote,QuoteArray[num].author));
	}
}



/*
var q = "This is a new qoute by a function 1 2 3"
var a = "Thisi is a author"

function addQuote(q,a) {
	QuoteArray.push({
		qoute: q,
		quote: a
	})
}*/