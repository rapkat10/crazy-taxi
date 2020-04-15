import Road from "./road";
import PlayerCar from "./player";
import GameControls from "./game_controls";
import IncomingCars from "./incomingCars";

export default class Game {
  
  constructor(ctx) {
    this.ctx = ctx;
    this.road = new Road(this);
    this.playerCar = new PlayerCar(this);

    new GameControls({
        road: this.road,
        playerCar: this.playerCar
    });

    this.incomingCars = [];
    setInterval(() => this.createCars(), 2500);
  }

  createCars() {
    let incomingCar = new IncomingCars(this);
    this.incomingCars.push(incomingCar);
  }

  update() {
    this.road.update();
    this.playerCar.update();

    this.incomingCars.forEach(car => {
      car.update();
    })
  }

}
