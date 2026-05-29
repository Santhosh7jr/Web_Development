document.getElementsByTagName("li")[2].innerHTML = "Hey!";
document.querySelector("ul li a").style.color = "red";
document.querySelector("button").style.backgroundColor = "yellow";
document.querySelector("button").classList.toggle("invisible");

console.log(document.querySelector("h1").textContent);
console.log(document.querySelector("a").getAttribute("href"));

document.querySelector("a").setAttribute("href", "https://www.youtube.com");