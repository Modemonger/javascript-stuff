'use strict'

let root = document.getElementById("root");
let createbuttondiv = document.createElement("div");

const insult = 'https://evilinsult.com/generate_insult.php?lang=en&type=json';

const chuck = "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random";

const reddit = "https://meme-api.herokuapp.com/gimme/ProgrammerHumor";

let jokediv = document.createElement("div");
jokediv.id = "jokes";
jokediv.style.display = "none";
let joke = document.getElementById("jokes");

let createbuttonjoke = document.createElement("button");
createbuttonjoke.type = "button";
createbuttonjoke.id = "joke";
createbuttonjoke.textContent = "Get insulted"

let createbuttonchuck = document.createElement("button");
createbuttonchuck.type = "button";
createbuttonchuck.id = "chuck";
createbuttonchuck.textContent = "Get Chuck joke"

let easteregg = document.createElement("button");
easteregg.type = "button";
easteregg.id = "easteregg";

easteregg.addEventListener("click", openInNewTab);
easteregg.textContent = "DON'T CLICK ME OR ELSE......";

const image = document.createElement('img');
image.setAttribute("class", "background");

let textspace = document.createElement("q");
      textspace.style = "font-style: italic; font-size: 20px; color: white;"
      textspace.id = "quote"

let chuckimg = document.createElement("img");
chuckimg.style.display = "none";

createbuttondiv.id = "buttons";

jokediv.append(
    chuckimg,
    textspace,
    image
);
createbuttondiv.append(
    createbuttonchuck,
    createbuttonjoke,
    easteregg
);
root.append(
    createbuttondiv,
    jokediv
);

createbuttonchuck.addEventListener("click", function(){jokes(chuck), meme(reddit)});
createbuttonjoke.addEventListener("click", function(){insults(insult), meme(reddit)});


const jokes = async (jokeUrl) => {
    try {
        const jokeRes = await fetch(jokeUrl, {
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
                "x-rapidapi-key": "e25e15e377mshbdc2f1f43ad7020p196503jsn0139ebd5be49"
            }
        });
        const data = await jokeRes.json();
        jokediv.style.display = "flex";
        textspace.innerText = data.value; 
        chuckimg.style.display = "block";
        chuckimg.src = data.icon_url;
    } catch(error){
        console.log(error);
    }
};

const insults = async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        chuckimg.style.display = "none";

        jokediv.style.display = "flex";
        textspace.innerText = data.insult;   
    } catch(error){
        console.log(error);
    }
};

const meme = async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        image.src = data.url;
    } catch(error){
        console.log(error);
    }
};

function openInNewTab() {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '_blank').focus();
   }