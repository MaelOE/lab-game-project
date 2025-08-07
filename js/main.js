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
let mechaObj;
let kennyObj;

let volcanoArr = [];
let fireballs = [];
let heartArr = [];
let kennyArr = [];

let count = 0;

let loopTimeOut = null;

const starterSound = new Audio("sounds/starter.mp3");
const loopSound = new Audio("sounds/loop.mp3");
const killKenny = new Audio("sounds/kenny.mp3");
const eatingKenny = new Audio("sounds/eating-kenny.wav");
const voice = new Audio("sounds/voice.wav");
const life = new Audio("sounds/life.wav");
const endscreen = new Audio("sounds/end.wav");

//* GLOBAL GAME FUNCTIONS
function startGame() {
  //1. hide the start game screen
  startScreenNode.style.display = "none";
  //2. show the game screen
  gameScreenNode.style.display = "flex";
  //3. add an inital element to the game
  mechaObj = new Mecha();

  //.4 start the game loop(interval)
  const myInterval = setInterval(gameInterval, Math.round(1000 / 60));
  const kennyInterval = setInterval(spawnKenny, 7000);
  //5. we start any other interval that we may need
  setTimeout(spawnVolcano, 2000);
  spawnHeart();
  loopSound.loop = true;
  loopTimeOut = setTimeout(loopPlay, 9500);
}

function gameInterval() {
  for (let i = fireballs.length - 1; i >= 0; i--) {
    const b = fireballs[i];
    if (checkCollision(mechaObj, b)) {
      life.play();
      const lostHeart = heartArr.pop();
      if (lostHeart) {
        lostHeart.node.remove();
      }
      fireballs.splice(i, 1);
      b.node.remove();
    }
  }
  eatKenny();

  if (heartArr.length === 0) {
    gameOver();
  }
}

function loopPlay() {
  loopSound.play();
}

function eatKenny() {
  for (let i = 0; i < kennyArr.length; i++) {
    let k = kennyArr[i];
    if (checkCollision(mechaObj, k)) {
      killKenny.play();
      setTimeout(() => {
        eatingKenny.play();
      }, 2000);
      mechaObj.growing();
      k.node.src = "./images/deadkenny.png";
      kennyArr.splice(i, 1);
      count++;
      let score = document.querySelector(".top-left");
      score.innerHTML = `${count}`;
      let result = document.querySelector(".top-center");
      if (count === 1) {
        result.innerHTML = `You ate 1 Kenny !`;
      } else {
        result.innerHTML = `You ate ${count} Kennys !`;
      }
    }
  }
}

function spawnKenny() {
  kennyObj = new Kenny();
  kennyArr.push(kennyObj);
}

function spawnHeart() {
  let XPos = 650;
  for (let i = 0; i < 3; i++) {
    let heart = new Heart(XPos + i * 120);
    heartArr.push(heart);
  }
}

function spawnVolcano() {
  let XPos = 100;

  let volcanoOne = new Volcano("bottom", XPos);
  volcanoArr.push(volcanoOne);
  const ballOne = setInterval(() => {
    volcanoOne.throwBall();
  }, 2000);

  let volcanoBis = new Volcano("bottom", XPos + 250);
  volcanoArr.push(volcanoBis);
  const ballBis = setInterval(() => {
    volcanoBis.throwBall();
  }, 3000);

  let volcanoTwo = new Volcano("bottom", XPos + 500);
  volcanoArr.push(volcanoTwo);
  const ballTwo = setInterval(() => {
    volcanoTwo.throwBall();
  }, 5000);

  let volcanoThree = new Volcano("bottom", XPos + 750);
  volcanoArr.push(volcanoThree);
  const ballThree = setInterval(() => {
    volcanoThree.throwBall();
  }, 6000);

  let volcanoFour = new Volcano("bottom", XPos + 1000);
  volcanoArr.push(volcanoFour);
  const ballFour = setInterval(() => {
    volcanoFour.throwBall();
  }, 2000);
}

function gameOver() {
  gameScreenNode.style.display = "none";

  gameOverScreenNode.style.display = "flex";

  mechaObj = null;

  loopSound.pause();
  loopSound.loop = false;
  clearTimeout(loopTimeOut);

  voice.play();
  setInterval(() => {
    endscreen.play();
  }, 2500);
}

function checkCollision(element1, element2) {
  if (
    element1.x < element2.x + element2.w &&
    element1.x + element1.w > element2.x &&
    element1.y < element2.y + element2.h &&
    element1.y + element1.h > element2.y
  ) {
    return true;
  } else {
    return false;
  }
}

//* EVENT LISTENERS

// Planning of the game (which elements, properties and actions)
startBtnNode.addEventListener("click", () => {
  starterSound.play();
  startGame();
});

document.addEventListener("keydown", (event) => {
  if (event.code === "Space" || event.code === "ArrowUp") {
    mechaObj.up();
  } else if (event.code === "ArrowDown") {
    mechaObj.down();
  } else if (event.code === "ArrowRight") {
    mechaObj.right();
  } else if (event.code === "ArrowLeft") {
    mechaObj.left();
  }
});
