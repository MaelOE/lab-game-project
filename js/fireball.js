class Fireball {
  constructor(XPos, YPos) {
    this.node = document.createElement("img");
    this.node.className = "fireball";
    this.node.src = "./images/fireball.png";

    gameBoxNode.append(this.node);

    this.x = XPos;
    this.y = YPos;
    this.h = 100;
    this.w = 100;

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;

    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;

    this.speed = 20;
  }

  automaticMovement() {
    this.y -= this.speed;
    this.node.style.top = `${this.y}px`;
  }
}
