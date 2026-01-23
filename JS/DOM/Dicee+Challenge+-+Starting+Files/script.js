let randomNumber1 = Math.ceil(Math.random() * 6);
let randomNumber2 = Math.ceil(Math.random() * 6);

document.querySelector(".img1").src = `./images/dice${randomNumber1}.png`;
document.querySelector(".img2").src = `./images/dice${randomNumber2}.png`;

if (randomNumber1 === randomNumber2) document.querySelector("h1").textContent = "It's A DRAW!";
else if (randomNumber1 < randomNumber2) document.querySelector("h1").textContent = "Player2 WON";
else document.querySelector("h1").textContent = "Player1 WON";