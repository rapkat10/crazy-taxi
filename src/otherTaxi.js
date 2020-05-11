export default class OtherTaxi {

  constructor(game) {
    this.game = game;
    this.ctx = this.game.ctx;

    this.taxi1 = new Image;
    this.taxi1.src = "./dist/assets/images/othertaxi1.png";
    this.taxi2 = new Image;
    this.taxi2.src = "./dist/assets/images/othertaxi2.png";
    this.taxi3 = new Image;
    this.taxi3.src = "./dist/assets/images/othertaxi3.png";
    this.taxi4 = new Image;
    this.taxi4.src = "./dist/assets/images/othertaxi4.png";
    this.taxi = [this.taxi1, this.taxi2, this.taxi3, this.taxi4][Math.floor(Math.random() * 4)];
    this.positionX = [85, 130, 178][Math.floor(Math.random() * 3)];
    if (this.game.road.speed === 0) {
      this.positionY = [60, 50, 40, 30][Math.floor(Math.random() * 4)];
    } else {
      this.positionY = 0;
    }
  }



  update() {
    this.ctx.drawImage(this.taxi, this.positionX, this.positionY);
    if (!this.game.playerTaxi.jumped) {
      if (this.game.road.speed === 0) {
        this.positionY -= 0.5;
      } else {
        this.positionY += this.game.road.speed / 3;
      }
    } else {
      if (this.positionX === this.game.playerTaxi.positionX && this.positionY >= 80) {
        this.positionY = 140;
      }
    }
  }
}