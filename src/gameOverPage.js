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
  }
}