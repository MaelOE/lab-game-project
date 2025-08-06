class Heart {
  constructor(XPos) {
    this.node = document.createElement("img");
    this.node.className = "heart";
    this.node.src = "./images/heart.png";
    gameBoxNode.append(this.node);

    this.x = XPos;
    this.y = 0;
    this.h = 100;
    this.w = 100;

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;

    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
  }
}
