class Mecha {
  constructor() {
    this.node = document.createElement("img");
    this.node.className = "mecha";
    this.node.src = "./images/mecha.png";

    gameBoxNode.append(this.node);

    this.x = 70;
    this.y = 50;
    this.h = 150;
    this.w = 100;

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;

    this.jumpSpeed = 100;
    this.bigger = 30;
  }

  up() {
    if (this.y < 0) {
      return;
    }

    this.y -= this.jumpSpeed;
    this.node.style.top = `${this.y}px`;
  }

  down() {
    if (this.y > 600) {
      return;
    }

    this.y += this.jumpSpeed;
    this.node.style.top = `${this.y}px`;
  }

  right() {
    if (this.x > 1000) {
      return;
    }

    this.x += this.jumpSpeed;
    this.node.style.left = `${this.x}px`;
  }

  left() {
    if (this.x < 0) {
      return;
    }

    this.x -= this.jumpSpeed;
    this.node.style.left = `${this.x}px`;
  }

  growing() {
    this.h += this.bigger;
    this.w += this.bigger;
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
  }
}
