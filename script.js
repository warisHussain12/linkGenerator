const quoteText = document.getElementById("quote_link"),
quoteBtn = document.querySelector("button"),
authorName = document.querySelector(".name"),
speechBtn = document.querySelector(".speech"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter"),
synth = speechSynthesis;

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading...";
    // fetch("http://api.quotable.io/random").then(response => response.json()).then(result => {
        quoteText.innerText = "https://www.salesmonitor.com/"+generateString(9);
        // authorName.innerText = result.author;
        quoteBtn.classList.remove("loading");
        quoteBtn.innerText = "New Link";
    // });
}

// speechBtn.addEventListener("click", ()=>{
//     if(!quoteBtn.classList.contains("loading")){
//         let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
//         synth.speak(utterance);
//         setInterval(()=>{
//             !synth.speaking ? speechBtn.classList.remove("active") : speechBtn.classList.add("active");
//         }, 10);
//     }
// });

// copyBtn.addEventListener("click", ()=>{
//     navigator.clipboard.writeText(quoteText.innerText);
// });

// twitterBtn.addEventListener("click", ()=>{
//     let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
//     window.open(tweetUrl, "_blank");
// });

quoteBtn.addEventListener("click", randomQuote);
