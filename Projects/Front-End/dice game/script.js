let button = document.querySelector("button");
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");

button.addEventListener("click", () => {
  let box1Number = Math.floor(Math.random() * 6) + 1;
  let box2Number = Math.floor(Math.random() * 6) + 1;

  if (box1Number > box2Number) {
    document.querySelector("h1").innerHTML = "<span>PLAYER1</span> WON THE GAME";
  } else if (box1Number < box2Number) {
    document.querySelector("h1").innerHTML = "<span>PLAYER2</span> WON THE GAME";
  } else {
    document.querySelector("h1").innerHTML = "MATCH IS ENDED WITH THE <span>DRAW!</span>";
  }

  if (box1Number == 6 || box2Number == 6) {
    return;
  }

  box1.innerHTML = "";
  box2.innerHTML = "";
  box1.classList.remove("oneToFour");
  box2.classList.remove("oneToFour");

  for (let i = 0; i < box1Number; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("circles");
    box1.appendChild(newDiv);
  }

  if (box1Number == 5) {
    box1.children[2].style.gridArea = "2/1/3/3";
  } else if (box1Number < 5) {
    box1.classList.add("oneToFour");
  }

  for (let i = 0; i < box2Number; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("circles");
    box2.appendChild(newDiv);
  }

  if (box2Number == 5) {
    box2.children[2].style.gridArea = "2/1/3/3";
  } else if (box2Number < 5) {
    box2.classList.add("oneToFour");
  }
});