class Volcano {
  constructor(type, XPos) {
    this.node = document.createElement("img");
    this.node.className = "volcano";

    if (type === "bottom") {
      this.node.src = "./images/volcano.png";
    }

    gameBoxNode.append(this.node);

    this.x = XPos;
    this.y = 700;
    this.h = 100;
    this.w = 100;

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;

    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
    this.type = type;
  }
  throwBall() {
    const throwingBall = new Fireball(this.x, this.y);
    fireballs.push(throwingBall);
    const movingBallInterval = setInterval(() => {
      throwingBall.automaticMovement();
    }, 40);
  }
}
