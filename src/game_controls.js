

export default class GameControls {

  constructor(options) {
    this.road = options.road;
    this.playerCar = options.playerCar;

    this.init();
  }

  init() {
    document.addEventListener("keydown", (e) => {
      switch(e.keyCode) {
        case 37: //left
          this.playerCar.moveLeft();
          break;
        case 38: //up
          this.road.speedUp();
          break;
        case 39: //right
          this.playerCar.moveRight();
          break;
        case 40: //down
          this.road.slowDown();
          break;
        case 32: //spacebar
          this.playerCar.jump();
          break;
        default:
          break;
      }
    })
  }
}