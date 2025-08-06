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

let gameIntervalId = null;

//* GLOBAL GAME FUNCTIONS
function startGame() {
  //1. hide the start game screen
  startScreenNode.style.display = "none";
  //2. show the game screen
  gameScreenNode.style.display = "flex";
  //3. add an inital element to the game
  mechaObj = new Mecha();

  //.4 start the game loop(interval)
  setInterval(gameInterval, Math.round(1000 / 60));
  setInterval(spawnKenny, 7000);
  //5. we start any other interval that we may need
  setTimeout(spawnVolcano, 2000);
  spawnHeart();
}

function gameInterval() {
  for (let i = fireballs.length - 1; i >= 0; i--) {
    const b = fireballs[i];
    if (checkCollision(mechaObj, b)) {
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

function eatKenny() {
  if (kennyObj === undefined) {
    return;
  }
  for (let i = kennyArr.length - 1; i >= 0; i--) {
    const k = kennyArr[i];
    if (checkCollision(mechaObj, k)) {
      mechaObj.growing();
      k.node.src = "./images/deadkenny.png";
      const removeKenny = kennyArr.splice(k, 1);
      k = undefined;
      let;
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
  clearInterval(gameIntervalId);

  gameScreenNode.style.display = "none";

  gameOverScreenNode.style.display = "flex";
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
startBtnNode.addEventListener("click", startGame);
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
