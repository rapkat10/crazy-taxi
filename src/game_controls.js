import { swipeListener } from "./swipe";
export default class GameControls {

  constructor(options) {
    this.road = options.road;
    this.playerTaxi = options.playerTaxi;
    this.controls();
    swipeListener(options);
  }

  controls() {
    document.addEventListener("keydown", (e) => {
      switch(e.keyCode) {
        case 37: //left
          this.playerTaxi.moveLeft();
          break;
        case 38: //up
          this.road.speedUp();
          break;
        case 39: //right
          this.playerTaxi.moveRight();
          break;
        case 40: //down
          this.road.slowDown();
          break;
        case 32: //spacebar
          document.getElementById("jump").play();
          this.playerTaxi.jump();
          break;
        default:
          break;
      }
    })
  }
}