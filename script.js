const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quotBtn = document.querySelector("button"),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter");

function randomQuote() {
   quotBtn.classList.add("loading");
   quotBtn.innerText = "Loading Quote...";
   // fetching random quotes/data from the API and parsing it into JavaScript object
   fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
   quoteText.innerText = result.content;
   authorName.innerText = result.author;
   quotBtn.innerText = "New Quote";
   quotBtn.classList.remove("loading");

   });
}

soundBtn.addEventListener("click", ()=> {
   // the SpeechSynthesisUtterance is a web api that represents a speech request.
   let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}` );
   speechSynthesis.speak(utterance); //speak method of SpeechSynthesis is speaks the utternance
});

copyBtn.addEventListener("click", ()=> {
   // copying the quote text on copyBtn click
   // writeText() property writes the specified text string to the system clipboard.
   navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener("click", ()=> {
   let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
   window.open(tweetUrl, "_blank"); // opening a new twitter tab with passing quote in the url
})
quotBtn.addEventListener("click", randomQuote);
