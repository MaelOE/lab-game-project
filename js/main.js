//* GLOBAL DOM ELEMENTS

// screens
const startScreenNode = document.querySelector("#start-screen");
const gameScreenNode = document.querySelector("#game-screen");
const gameOverScreenNode = document.querySelector("#game-over-screen");

// buttons
const startBtnNode = document.querySelector("#start-btn");

// game box
const gameBoxNode = document.querySelector("#game-box");

//* GLOBAL GAME VARIABLES

//* GLOBAL GAME FUNCTIONS
function startGame() {
  //1. hide the start game screen
  startScreenNode.style.display = "none";
  //2. show the game screen
  gameScreenNode.style.display = "flex";
}

//3. add an inital element to the game

//* EVENT LISTENERS

// Planning of the game (which elements, properties and actions)
startBtnNode.addEventListener("click", startGame);
