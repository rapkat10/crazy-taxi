

export default class PlayerCar {

  constructor(game) {
    this.game = game;
    this.ctx = this.game.ctx;
    this.positionX = 130;
    this.postionY = 120;

    this.car = new Image;
    this.car.src = "../dist/assets/images/playerCar.png";

  }

  moveLeft() {
    if (this.positionX === 130) {
      this.positionX = 85;
    }else if (this.positionX === 85) {
      this.positionX = 85;
    } else {
      this.positionX = 130;
    }
  }

  moveRight() {
    if (this.positionX === 130) {
      this.positionX = 178;
    } else if (this.positionX === 178) {
      this.positionX = 178;
    } else {
      this.positionX = 130;
    }
  }

  jump() {
    this.postionY = 80;
    setTimeout(() => {
      this.postionY = 120;
    }, 2000)
  }

  update() {
    this.ctx.drawImage(this.car, this.positionX, this.postionY);
  }

}