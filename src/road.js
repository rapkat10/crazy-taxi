export default class Road {

  constructor(game) {
    this.game = game;
    this.ctx = this.game.ctx;
    this.yOffSet = -150;
    this.road = new Image;
    this.road.src = "../dist/assets/images/backgroundRoad.png";

    this.sceneLeft = new Image;
    this.sceneLeft.src = "../dist/assets/images/scene1_left.png";
    this.sceneRight = new Image;
    this.sceneRight.src = "../dist/assets/images/scene1_right.png";

    this.speed = 0;
  }

  speedUp() {
    if (this.speed >= 10) {
      this.speed = 10;
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

  }

  update() {
    setTimeout(() => {
      this.speed += 0.5;
    }, 10000)

    if (this.yOffSet >= 0) this.yOffSet = -150;
    this.ctx.drawImage(this.road, 0, this.yOffSet);
    this.ctx.drawImage(this.road, 0, this.yOffSet + 150);
    this.ctx.drawImage(this.road, 0, this.yOffSet + 300);

    this.ctx.drawImage(this.sceneRight, 218, this.yOffSet);
    this.ctx.drawImage(this.sceneRight, 218, this.yOffSet + 150);
    this.ctx.drawImage(this.sceneRight, 218, this.yOffSet + 300);
    
    this.ctx.drawImage(this.sceneLeft, -19, this.yOffSet);
    this.ctx.drawImage(this.sceneLeft, -19, this.yOffSet + 150);
    this.ctx.drawImage(this.sceneLeft, -19, this.yOffSet + 300);

    this.yOffSet += this.speed;
    this.game.score.update();
  }

}