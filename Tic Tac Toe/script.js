let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset-button");
let newgame = document.querySelector("#newgamee");

// NEW GAME BUTTON FUNCTION

newgame.addEventListener("click", () => {
  let contain = document.querySelector("#cont");
  let showWinner = document.querySelector("#showWinner");
  let minimsg = document.querySelector("#mini-msg");

  if (contain.classList.contains("cont2")) {
    boxes.forEach((box) => {
      box.innerText = "";
      box.disabled = false;
      showWinner.style.display = "none";
      resetButton.style.visibility = "visible";
      contain.classList.replace("cont2", "container");
      contain.classList.replace("cont2", "container");
      showWinner.classList.replace("heyWinner", "hola");
    });
  } else {
    resetButton.style.visibility = "visible";
  }
});
// RESET BUTTON FUNCTIONS

resetButton.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
});

// WIN CHANCES ARRAY

let turnO = true; //player O = True
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

// WINNER MESSAGE FUNCTION

const showMessage = (x) => {
  let divinshowWinner = document.querySelector("#mini-msg");
  let showWinner = document.querySelector("#showWinner");
  let container = document.querySelector("#cont");

  for (box of boxes) {
    box.disabled = true;
  }

  divinshowWinner.innerText = `Winner is ${x}`;
  container.classList.replace("container", "cont2");
  showWinner.classList.replace("hola", "heyWinner");
  resetButton.getAttribute("class");
  resetButton.setAttribute("class", "hide");
};

// PUTTING X AND O IN BOXES

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkwinner();
  });
});

// CHECKING WINNER CONDITION AND CALLING MSG FUNCTION

const checkwinner = () => {
  for (let pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        let x = pos1val;
        showMessage(x);
      }
    }
  }
};
