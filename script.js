const quoteContainer = document.getElementById('quote-container'); //html  ID
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

//loading new quote
function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function complete(){
    loader.hidden = true;
    quoteContainer.hidden = false;
}
//show new quotes
function newQuote() {
    loading();
    //pick a quote from awway
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    //check or null author text
    if (!quote.author) {
        authorText.textContent = 'Uknown';
    } else {
        authorText.textContent = quote.author; 
    }
    //style long or short quotes 
    if (quote.text.length > 50) {
        quoteText.classList.add('long-quote');
    } else{
        quoteText.classList.remove('long-quote');
    }
    //set quote and hide loader
    complete();
    quoteText.textContent = quote.text;

}

//let apiQuotes = []; //this will b e the array with all possible quotes
/* async function getQuotes(){
    const apiURL = 'https://type.fit/api/quotes'; 
    try {
        const response = await fetch(apiURL); //this variable will not be populated until a quote is fetched 
        //it would be undefined if we didn't wait for a quote to be fetched
        apiQuotes = await response.json(); //turning the quote from a some numbers into a JSON object 
        newQuote();
    } catch (error) {
        
    }
}
*/
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}
newQuoteBtn.addEventListener('click', newQuote); 
twitterBtn.addEventListener('click', tweetQuote);
//getQuotes();

newQuote();
