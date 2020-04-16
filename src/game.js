import Road from "./road";
import PlayerTaxi from "./player";
import GameControls from "./game_controls";
import OtherTaxi from "./otherTaxi";
import isCollided from "./utilities";

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

    this.paused = false;

  }

  createTaxis() {
    if (this.paused) return;
    let otherTaxi = new OtherTaxi(this);
    this.otherTaxis.push(otherTaxi);
  }

  playAgain(e) {
    if (e.keyCode !== 13) {
      return;
    }

    this.otherTaxis = [];
    this.road.speed = 0;
    this.playerTaxi.resetPosition();
    this.paused = false;
    // let tryAgain = document.querySelector("");
    // tryAgain.style.display = "";
    document.onkeydown = null;

  }

  update() {
    if (this.paused) return;
    this.road.update();
    this.playerTaxi.update();

    this.otherTaxis.forEach(taxi => {
      taxi.update();
    });

    if (isCollided(this.playerTaxi, this.otherTaxis)) {
      this.paused = true;
      // let tryAgain = document.querySelector("");
      // tryAgain.style.display = "";
      document.onkeydown = e => this.playAgain(e);
    }

  }

}
