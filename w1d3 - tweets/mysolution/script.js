let jsonurl = "https://kea-alt-del.dk/twitter/api/?count=50";
let tweets = [];
let display = document.querySelector("section");
let template = document.querySelector("template");
document.addEventListener("DOMContentLoaded", getTweet);

async function getTweet() {
  let datajson = await fetch(jsonurl);
  tweets = await datajson.json();
  tweets = tweets.statuses;
  console.log(tweets);

  showTweets();
}

function showTweets() {
  tweets.forEach(tweet => {
    console.log(tweet);

    let klon = template.cloneNode(true).content;
    console.log(klon);
    klon.querySelector(".text").innerHTML = tweet.text;
    display.appendChild(klon);
  });
}
