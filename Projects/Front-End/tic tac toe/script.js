
// my code
// let boxes1 = document.querySelectorAll(".mini-container .box");
// let flag;2
// for (let i = 0; i < boxes1.length; i++) {
//   flag = true;
//   boxes1[i].addEventListener("click", () => {
//     if (flag && boxes1[i].innerHTML.length == 0) {
//       boxes1[i].classList.add("elem");
//       boxes1[i].innerHTML = "⭕";
//       flag = false;
//     } else {
//       if (boxes1[i].innerHTML.length == 0) {
//         boxes1[i].classList.add("elem");
//         boxes1[i].innerHTML = "❌";
//         flag = true;
//       }
//     }

//     if (
//       boxes1[0].innerHTML == "⭕" &&
//       boxes1[1].innerHTML == "⭕" &&
//       boxes1[2].innerHTML == "⭕"
//     ) {
//       let scoreElement = document.querySelector(".player1 span");
//       scoreElement.innerHTML = parseInt(scoreElement.innerHTML) + 1;
//     } else if (
//       boxes1[0].innerHTML == "⭕" &&
//       boxes1[3].innerHTML == "⭕" &&
//       boxes1[6].innerHTML == "⭕"
//     ) {
//       let scoreElement = document.querySelector(".player1 span");
//       scoreElement.innerHTML = parseInt(scoreElement.innerHTML) + 1;
//     } else if (
//       boxes1[0].innerHTML == "⭕" &&
//       boxes1[4].innerHTML == "⭕" &&
//       boxes1[8].innerHTML == "⭕"
//     ) {
//       let scoreElement = document.querySelector(".player1 span");
//       scoreElement.innerHTML = parseInt(scoreElement.innerHTML) + 1;
//     } else if (
//       boxes1[1].innerHTML == "⭕" &&
//       boxes1[4].innerHTML == "⭕" &&
//       boxes1[7].innerHTML == "⭕"
//     ) {
//       let scoreElement = document.querySelector(".player1 span");
//       scoreElement.innerHTML = parseInt(scoreElement.innerHTML) + 1;
//     } else if (
//       boxes1[2].innerHTML == "⭕" &&
//       boxes1[5].innerHTML == "⭕" &&
//       boxes1[8].innerHTML == "⭕"
//     ) {
//       let scoreElement = document.querySelector(".player1 span");
//       scoreElement.innerHTML = parseInt(scoreElement.innerHTML) + 1;
//     } else if (
//       boxes1[2].innerHTML == "⭕" &&
//       boxes1[4].innerHTML == "⭕" &&
//       boxes1[6].innerHTML == "⭕"
//     ) {
//       let scoreElement = document.querySelector(".player1 span");
//       scoreElement.innerHTML = parseInt(scoreElement.innerHTML) + 1;
//     } else if (
//       boxes1[3].innerHTML == "⭕" &&
//       boxes1[4].innerHTML == "⭕" &&
//       boxes1[5].innerHTML == "⭕"
//     ) {
//       let scoreElement = document.querySelector(".player1 span");
//       scoreElement.innerHTML = parseInt(scoreElement.innerHTML) + 1;
//     } else if (
//       boxes1[6].innerHTML == "⭕" &&
//       boxes1[7].innerHTML == "⭕" &&
//       boxes1[8].innerHTML == "⭕"
//     ) {
//       let scoreElement = document.querySelector(".player1 span");
//       scoreElement.innerHTML = parseInt(scoreElement.innerHTML) + 1;
//     }
    
//     if (
//       boxes1[0].innerHTML == "❌" &&
//       boxes1[1].innerHTML == "❌" &&
//       boxes1[2].innerHTML == "❌"
//     ) {
//       let scoreElement = document.querySelector(".player2 span");
//       scoreElement.innerHTML = parseInt(scoreElement.innerHTML) + 1;
//     } else if (
//       boxes1[0].innerHTML == "❌" &&
//       boxes1[3].innerHTML == "❌" &&
//       boxes1[6].innerHTML == "❌"
//     ) {
//       let scoreElement = document.querySelector(".player2 span");
//       scoreElement.innerHTML = parseInt(scoreElement.innerHTML) + 1;
//     } else if (
//       boxes1[0].innerHTML == "❌" &&
//       boxes1[4].innerHTML == "❌" &&
//       boxes1[8].innerHTML == "❌"
//     ) {
//       let scoreElement = document.querySelector(".player2 span");
//       scoreElement.innerHTML = parseInt(scoreElement.innerHTML) + 1;
//     } else if (
//       boxes1[1].innerHTML == "❌" &&
//       boxes1[4].innerHTML == "❌" &&
//       boxes1[7].innerHTML == "❌"
//     ) {
//       let scoreElement = document.querySelector(".player2 span");
//       scoreElement.innerHTML = parseInt(scoreElement.innerHTML) + 1;
//     } else if (
//       boxes1[2].innerHTML == "❌" &&
//       boxes1[5].innerHTML == "❌" &&
//       boxes1[8].innerHTML == "❌"
//     ) {
//       let scoreElement = document.querySelector(".player2 span");
//       scoreElement.innerHTML = parseInt(scoreElement.innerHTML) + 1;
//     } else if (
//       boxes1[2].innerHTML == "❌" &&
//       boxes1[4].innerHTML == "❌" &&
//       boxes1[6].innerHTML == "❌"
//     ) {
//       let scoreElement = document.querySelector(".player2 span");
//       scoreElement.innerHTML = parseInt(scoreElement.innerHTML) + 1;
//     } else if (
//       boxes1[3].innerHTML == "❌" &&
//       boxes1[4].innerHTML == "❌" &&
//       boxes1[5].innerHTML == "❌"
//     ) {
//       let scoreElement = document.querySelector(".player2 span");
//       scoreElement.innerHTML = parseInt(scoreElement.innerHTML) + 1;
//     } else if (
//       boxes1[6].innerHTML == "❌" &&
//       boxes1[7].innerHTML == "❌" &&
//       boxes1[8].innerHTML == "❌"
//     ) {
//       let scoreElement = document.querySelector(".player2 span");
//       scoreElement.innerHTML = parseInt(scoreElement.innerHTML) + 1;
//     }
//   });
// }

// let restart = document
//   .querySelector(".restart")
//   .addEventListener("click", () => {
//     boxes1.forEach((element) => {
//       element.innerHTML = "";
//     });
//   });



//gpt code
let boxes1 = document.querySelectorAll(".mini-container .box");
let flag = true; // true -> Player 1 (⭕), false -> Player 2 (❌)
let restart = document.querySelector(".restart");


function checkWinner() {
  let winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]            // Diagonals
  ];

  for (let combination of winningCombinations) {
    let [a, b, c] = combination;

    if (
      boxes1[a].innerHTML &&
      boxes1[a].innerHTML === boxes1[b].innerHTML &&
      boxes1[a].innerHTML === boxes1[c].innerHTML
    )
    {
      setTimeout(() => {
        alert(`${boxes1[a].innerHTML} wins!`);
        updateScore(boxes1[a].innerHTML);
        resetBoard();
      }, 100);
      return;
    }
  }
}

function updateScore(winner) {
  if (winner === "⭕") {
    let scoreElement = document.querySelector(".player1 span");
    scoreElement.innerHTML = parseInt(scoreElement.innerHTML) + 1;
  } else if (winner === "❌") {
    let scoreElement = document.querySelector(".player2 span");
    scoreElement.innerHTML = parseInt(scoreElement.innerHTML) + 1;
  }
}

function resetBoard() {
  boxes1.forEach((box) => {
    box.innerHTML = "";
    box.classList.remove("elem");
  });
  flag = true; // Reset to Player 1 (⭕)
}

boxes1.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerHTML.length === 0) {
      box.classList.add("elem");
      box.innerHTML = flag ? "⭕" : "❌";
      flag = !flag;
      checkWinner(); // Check for a winner after every move
    }
  });
});

restart.addEventListener("click", resetBoard);
