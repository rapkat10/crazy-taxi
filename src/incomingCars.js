

export default class IncomingCars {

  constructor(game) {
    this.game = game;
    this.ctx = this.game.ctx;

    this.car1 = new Image;
    this.car1.src = "../dist/assets/images/incomingcar1.png";
    this.car2 = new Image;
    this.car2.src = "../dist/assets/images/incomingcar2.png";
    this.car = [this.car1, this.car2][Math.floor(Math.random() * 2)];
    this.Xpos = [85, 130, 178][Math.floor(Math.random() * 3)];
    if (this.game.road.speed === 0) {
      this.Ypos = [90, 80, 70, 60, 50, 40, 30][Math.floor(Math.random() * 7)];
    } else {
      this.Ypos = 0;
    }
  }

  update() {
    this.ctx.drawImage(this.car, this.Xpos, this.Ypos);
    

    if (this.game.road.speed === 0) {
      this.Ypos -= 0.5;
    } else {
      this.Ypos += this.game.road.speed / 3;
    }
  }
}