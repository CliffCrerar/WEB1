//JS for Quote generator
var rNump = -1;
var usedIndex = [];
var QuoteArray = [
		{
			quote: "Loosers try their best, winners go home and fuck the prom queen.", 
			author: "John Mason, played by Sean Connery"
		},
		{
			quote: "I hated every minute of training, but I said, Don't quit. Suffer now and live the rest of your life as a champion.", 
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
			quote: "You either die a hero or live long enough to see yourself become the villain.", 
			author: "Harvey Dent aka. two faced Harvey, played by Aaron Eckhart"
		},
		{
			quote: "What does not kill you makes you stranger.", 
			author: "The Joker, played by Heath Ledger"
		},
		{
			quote: "The man who passes the sentence should swing the sword.", 
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
			quote: "It's only after we have lost everything that we are free to do anything.", 
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
			quote: "The only rules that really matter are these, what a man can do and what a man can't do.", 
			author: "Captain Jack Sparrow, played by Johnny Depp"
		},
		{
			quote: "A quotation at the right moment is like bread in a famine.", 
			author: "Talmud"
		},
		{
			quote: "A ship is safe in harbor, but that's not what ships are for.", 
			author: "William Shedd"
		},
		{
			quote: "Experience tells you what to do, confidence allows you to do it.", 
			author: "Stan Smith"
		},
		{
			quote: "I failed my way to success.", 
			author: "Thomas Edison"
		},
		{
			quote: "Don't fear failure.  Not failure, but low aim, is the crime. In great attempts it is glorious even to fail.", 
			author: "Bruce Lee"
		},
		{
			quote: "A goal is not always meant to be reached, it often serves simply as something to aim at.", 
			author: "Bruce Lee"
		},
		{
			quote: "A quick temper will make a fool of you soon enough.", 
			author: "Bruce Lee"
		},
		{
			quote: "Knowing is not enough, you must apply, willing is not enough, you must do.", 
			author: "Bruce Lee"
		},
		{
			quote: "Be the change you want to see in the world.", 
			author: "Mahatma Ghandi"
		},
		{
			quote: "To improve is to change. To be perfect is to change often.", 
			author: "Winston Churchill"
		},
		{
			quote: "Don't feel stupid if you don't like what everyone else pretends to love.", 
			author: "Emma Watson"
		},
		{
			quote: "In the practice of tolerance, ones enemies are the best teachers.", 
			author: "The Dalai Lama"
		},
		
	]
		
function randomNumber() {
	var rNum = Math.random()	
	var arrNum = Math.floor(rNum*(QuoteArray.length))
	
	if(arrNum == rNump) {		
		while(arrNum == rNump){
			rNum = Math.random();
			arrNum = Math.floor(rNum*(QuoteArray.length));	
		}
	}			
	rNump = arrNum;	
	return arrNum;
}

function prepTweet(quote, author) {
	var tQuote = quote;
	var twitterApi = "https://twitter.com/intent/tweet?text="
	var spaceSearch = tQuote.search(" ");

	if(author.search(",") != -1) {
		var tAuthor = author.slice(0,author.search(","));
	}
	else{
		var tAuthor = author;
	};	
	while(spaceSearch > 0) {
		tQuote = tQuote.replace(" ","+");
		spaceSearch = tQuote.search(" ");
	}		
	spaceSearch = tAuthor.search(" ");
	while(spaceSearch > 0) {
		tAuthor = tAuthor.replace(" ","+");
		spaceSearch = tAuthor.search(" ");
	}	
	tweetHref =twitterApi+"'"+ tQuote+"'+-"+tAuthor
	return tweetHref;	
}

function ChangeQuote(){

	var num = randomNumber();
	
	if (QuoteArray.length == usedIndex.length) {
		document.getElementById("randQuote").innerHTML = "You have seen all my qoutes, thanks for playing";
		document.getElementById("randAuth").innerHTML = '';
	} else { 
		if (usedIndex.indexOf(num) != -1) {
			while (usedIndex.indexOf(num) != -1) {
				num = randomNumber();
			}
		}
	usedIndex.push(num);	
	document.getElementById("randQuote").innerHTML = QuoteArray[num].quote;
	document.getElementById("randAuth").innerHTML = QuoteArray[num].author;
	document.getElementById("tweet1").setAttribute("href",prepTweet(QuoteArray[num].quote,QuoteArray[num].author));
	}
}