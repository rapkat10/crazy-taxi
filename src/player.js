export default class PlayerTaxi {

  constructor(game) {
    this.game = game;
    this.ctx = this.game.ctx;
    this.positionX = 130;
    this.positionY = 120;
    this.jumped = false;

    this.taxi = new Image;
    this.taxi.src = "../dist/assets/images/playerTaxi.png";

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

  resetPosition() {
    this.positionX = 130;
    this.positionY = 120;
  }

  jump() {
    this.jumped = true;
    this.positionY = 80;
    setTimeout(() => {
      this.positionY = 120;
      this.jumped = false;
    }, 2000)
  }

  update() {
    this.ctx.drawImage(this.taxi, this.positionX, this.positionY);
  }

}