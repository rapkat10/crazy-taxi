
export default class OtherTaxi {

  constructor(game) {
    this.game = game;
    this.ctx = this.game.ctx;

    this.taxi1 = new Image;
    this.taxi1.src = "../dist/assets/images/othertaxi1.png";
    this.taxi2 = new Image;
    this.taxi2.src = "../dist/assets/images/othertaxi2.png";
    this.taxi = [this.taxi1, this.taxi2][Math.floor(Math.random() * 2)];
    this.positionX = [85, 130, 178][Math.floor(Math.random() * 3)];
    if (this.game.road.speed === 0) {
      this.positionY = [90, 80, 70, 60, 50, 40, 30][Math.floor(Math.random() * 7)];
    } else {
      this.positionY = 0;
    }
  }

  update() {
    this.ctx.drawImage(this.taxi, this.positionX, this.positionY);
    

    if (this.game.road.speed === 0) {
      this.positionY -= 0.5;
    } else {
      this.positionY += this.game.road.speed / 3;
    }
  }
}