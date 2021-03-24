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
const quotes = ({quoteNum:1,
    quote: 'Nice to meet you Rose Tyler; Run for you life',
    source: 'The 9th Doctor',
    citation: 'Doctor Who',
    year:2005},
  {quoteNum:2,
    quote:"People don't understand time. It's not what you think it is. … People assume that time is a strict progression of cause to effect... but actually, from a non-linear, non-subjective viewpoint, it's more like a big ball of wibbly-wobbly... timey-wimey... stuff.",
    source:'The 10th Doctor',
    citation:'Doctor Who',
    year:2007},
  {quoteNum:3,
    quote:'Everybody lives, Rose. Just this once...Everybody lives!!',
    source:'The 9th Doctor',
    citation:'Doctor Who',
    year:2005},
  {quoteNum:4,
    quote:"Planet Earth. This is where I was born. And this is where I died. The first nineteen years of my life, nothing happened. Nothing at all, not ever. And then I met a man called the Doctor. A man who could change his face. And he took me away from home in his magical machine. He showed me the whole of time and space. I thought it would never end. … Well, that's what I thought. But then came the Army of Ghosts. Then came Torchwood and the war. That's when it all ended. This is the story of how I died.",
    source:'Rose Tyler',
    citation:"Doctor Who",
    year:2006},
  {quoteNum:5,
    quote:"I travelled across the world. From the ruins of New York, to the fusion mills of China, right across the radiation pits of Europe. And everywhere I went I saw people just like you, living as slaves! But if Martha Jones became a legend then that's wrong, because my name isn't important. There's someone else. The man who sent me out there, the man who told me to walk the Earth. And his name is The Doctor. He has saved your lives so many times and you never even knew he was there. He never stops. He never stays. He never asks to be thanked. But I've seen him, I know him... I love him... And I know what he can do.",
    source:'Martha Jones',
    citation:'Doctor Who',
    year:2007})


/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);