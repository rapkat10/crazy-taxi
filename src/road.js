export default class Road {

  constructor(game) {
    this.game = game;
    this.ctx = this.game.ctx;
    this.yOffSet = -150;
    this.road = new Image;
    this.road.src = "../dist/assets/images/backgroundRoad.png";
    this.speed = 0;
  }

  speedUp() {
    if (this.speed >= 5) {
      this.speed = 5;
    } else {
      this.speed += 0.5;
    }
  }

  slowDown() {
    if (this.speed <= 0) {
      this.speed = 0;
    } else {
      this.speed -= 0.5;
    }
    // if (this.speed > 5) {
    //   this.speed -= 5;
    // } else {
    //   this.speed = 0;
    // }
  }

  update() {
    if (this.yOffSet >= 0) this.yOffSet = -150;
    this.ctx.drawImage(this.road, 0, this.yOffSet);
    this.ctx.drawImage(this.road, 0, this.yOffSet + 150);
    this.ctx.drawImage(this.road, 0, this.yOffSet + 300);
    this.yOffSet += this.speed;
  }

}