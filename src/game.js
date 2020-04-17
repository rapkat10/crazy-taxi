import Road from "./road";
import PlayerTaxi from "./player";
import GameControls from "./game_controls";
import OtherTaxi from "./otherTaxi";
import isCollided from "./utilities";
import GameOverPage from "./gameOverPage";

export default class Game {
  
  constructor(ctx) {
    this.ctx = ctx;
    this.road = new Road(this);
    this.playerTaxi = new PlayerTaxi(this);

    new GameControls({
        road: this.road,
        playerTaxi: this.playerTaxi
    });

    this.otherTaxis = [];
    setInterval(() => this.createTaxis(), 3000);

    this.gameOver = false;
  }

  createTaxis() {
    if (this.gameOver) return;
    let otherTaxi = new OtherTaxi(this);
    this.otherTaxis.push(otherTaxi);
  }

  playAgain(e) {
    if (e.keyCode !== 13) return;
    this.otherTaxis = [];
    this.road.speed = 0;
    this.playerTaxi.resetPosition();
    this.gameOver = false;
    document.querySelector(".playAgain").style.display = "none";
    document.querySelector(".home").style.display = "none";
    document.onkeydown = null;
  }

  update() {
    document.querySelector('.start-btn-home').style.display = "none";
    document.querySelector('.instructions').style.display = "none";
    if (this.gameOver) return;

    document.querySelector(".playAgain").style.display = "none";
    document.querySelector(".home").style.display = "none";

    this.road.update();
    this.playerTaxi.update();

    this.otherTaxis.forEach(taxi => {
      taxi.update();
    });

    if (isCollided(this.playerTaxi, this.otherTaxis)) {
      document.getElementById("crash").play();
      this.gameOver = true;
      let gameOverPage = new GameOverPage(this.ctx);
      requestAnimationFrame(gameloop);
      function gameloop() {
        gameOverPage.update();
        requestAnimationFrame(gameloop);
      }
      document.onkeydown = e => this.playAgain(e);
    }

  }

}
