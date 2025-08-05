class Kenny {
  constructor() {
    this.node = document.createElement("img");
    this.node.className = "kenny";
    this.node.src = "./images/kenny.png";

    gameBoxNode.append(this.node);

    this.x = Math.floor(Math.random() * 7) * 100;
    this.y = Math.floor(Math.random() * 7) * 100;
    this.h = 100;
    this.w = 100;

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;

    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
  }
}
