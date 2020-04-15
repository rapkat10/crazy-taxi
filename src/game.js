import Road from "./road";
import PlayerTaxi from "./player";
import GameControls from "./game_controls";
import OtherTaxi from "./otherTaxi";

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
  }

  createTaxis() {
    let otherTaxi = new OtherTaxi(this);
    this.otherTaxis.push(otherTaxi);
  }

  update() {
    this.road.update();
    this.playerTaxi.update();
    this.otherTaxis.forEach(taxi => {
      taxi.update();
    })
  }

}
