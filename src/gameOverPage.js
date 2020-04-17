export default class MainPage {

  constructor(game) {
    this.game = game;
    this.ctx = this.game.ctx;
    this.gameOver = new Image;
    this.gameOver.src = "../dist/assets/images/gameover.png";
  }

  update() {
    this.ctx.drawImage(this.gameOver, 0, 0);
    document.querySelector(".playAgain").style.display = "block";
    document.querySelector(".home").style.display = "block";

    let check = document.querySelector(".speedcount");
    if (check) {
      check.parentNode.removeChild(check);
    }
    const canvasDiv = document.querySelector(".canvas-div");
    let speed = document.createElement("P");
    speed.setAttribute("class", "speedcount");
    speed.innerHTML = `Speed: ${this.game.road.speed * 10}/MPH`;
    canvasDiv.appendChild(speed);
  }
}