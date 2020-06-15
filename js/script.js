/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
//Array of objects, all of which contain quotes, a source, and a tag, and some have citations and years if that is known.
let quotes = [
    {
    quote : "You never know what worse luck your bad luck saved you from.",
    source : `Cormac Mccarthy`,
    citation : `No Country for Old Men`,
    year : 2005,
    tag : `insightful`
    },
    {
    quote : "Just because you’re paranoid doesn’t mean they aren’t after you.",
    source : "Joseph Heller",
    citation : "Catch-22",
    year : 1961,
    tag :  "insightful"
    },
    {
    quote : "Meaure what is important, don’t make important what you can measure.",
    source : "Robert McNamara",
    tag : "insightful"
    },
    {
    quote : "A day without sunshine is like, you know, night.",
    source : "Steve Martin",
    tag : "humor"
    },
    {
    quote : "The capacity for friendship is God's way of apologizing for our families.",
    source : "Jay McInerney", 
    citation : "The Last of the Savages",
    year: 1996,
    tag : "humor"
    },
    {
    quote : "Women don’t like me because I sleep standing up, like a horse.",
    source : "Eric Andre",
    tag : "humor"
    },
    {
    quote : "Do your thing and don't care if they like it.",
    source : "Tina Fey",
    citation : "Bossypants",
    year : 2011,
    tag : "inspirational"
    },
    {
    quote : "Wanting to be someone else is a waste of who you are.",
    source : "Marylin Monroe",
    tag : "inspirational"
    },
    {
    quote : "Our greatest glory is not in never falling, but in rising everytime we fall.",
    source : "Confucious",
    tag : "inspirational"
    }
];



/***
 * `getRandomQuote` function
***/
//function that uses a random number, between 0 and whatever the length of the array is - 1. this function is dynamic, and 
//doesn't need to change if we later add more quote objects.
function getRandomQuote() {
    var num = Math.floor(Math.random() * quotes.length);
    return quotes[num];
}


/***
 * `printQuote` function
***/
//print quote function uses our entire object returned by getRandomQuote. and builds a string. 
function printQuote() {
    let speak = getRandomQuote();
    let show = `<p class = "quote"> ${speak.quote} </p> <p class="source"> ${speak.source}`;
    //the next 3 conditionals check for existence of the property in the object. no else statement needed for any of them.
    if (speak.citation !== undefined){
        show += `<span class="citation">${speak.citation}</span>`
    }
    if (speak.year !== undefined) {
        show += `<span class="year">${speak.year}</span>`;
        }
    //added a line break html tag to make it look nice ->"<br>" which need not closing tag.
    if (speak.tag !== undefined) {
        show += `<br> <span class="tag">${speak.tag}</span>`;
    }
    show += `</p>`
    //below we inject our string into the html, and also change the background to a random color with each invoke of printQuote.
    document.getElementById('quote-box').innerHTML = show;
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
}

//function to invoke setInterval at 10 seconds. this is a seperate function so we can invoke it with a separate button. 
function keepQuoting(){
    setInterval(printQuote, 10000)
    };  

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
//added the 'on-forever' class id to a second button we created in the HTML. 
document.getElementById('on-forever').addEventListener("click", keepQuoting, false);