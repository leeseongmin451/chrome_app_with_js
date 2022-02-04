// Quotes and authors list
const quotes = [
    {
        quote: "Be yourself; everyone else is already taken.", 
        author: "Oscar Wilde", 
    }, 
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", 
        author: "Albert Einstein", 
    }, 
    {
        quote: "So many books, so little time.", 
        author: "Frank Zappa", 
    }, 
    {
        quote: "A room without books is like a body without a soul.", 
        author: "Marcus Tullius Cicero", 
    }, 
    {
        quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.", 
        author: "Dr. Seuss", 
    }, 
    {
        quote: "You only live once, but if you do it right, once is enough.", 
        author: "Mae West", 
    }, 
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.", 
        author: "Robert Frost", 
    }, 
    {
        quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.", 
        author: "J.K. Rowling, Harry Potter and the Goblet of Fire", 
    }, 
    {
        quote: "If you tell the truth, you don't have to remember anything.", 
        author: "Mark Twain", 
    }, 
    {
        quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.", 
        author: "Mahatma Gandhi", 
    }, 
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;