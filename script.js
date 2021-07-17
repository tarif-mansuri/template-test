const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

function newQuote(){
    //pick a random quote from response
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
    authorText.textContent = quote.author;
    quoteText.textContent = quote.text;
}
//Get quotes from API
async function getQuotes(){
    const apiUrl = 'https://type.fit/api/quotes';
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    }catch(error){
        //Handle the error here
    }
}
getQuotes();