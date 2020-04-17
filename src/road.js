export default class Road {

  constructor(game) {
    this.game = game;
    this.ctx = this.game.ctx;
    this.yOffSet = -150;
    this.road = new Image;
    this.road.src = "./dist/assets/images/backgroundRoad.png";

    this.sceneLeft = new Image;
    this.sceneLeft.src = "./dist/assets/images/scene1_left.png";
    this.sceneRight = new Image;
    this.sceneRight.src = "./dist/assets/images/scene1_right.png";

    this.speed = 0;
  }

  updateMPH() {
    let check = document.querySelector(".speedcount");
    if (check) {
      check.parentNode.removeChild(check);
    }
    const canvasDiv = document.querySelector(".canvas-div");
    let speed;
    speed = document.createElement("P");
    speed.setAttribute("class", "speedcount");
    speed.innerHTML = `Speed: ${this.speed * 10}/MPH`;
    canvasDiv.appendChild(speed);
  }

  speedUp() {
    if (this.speed >= 10) {
      this.speed = 10;
    } else {
      this.speed += 0.5;
    }
    this.updateMPH();
  }

  slowDown() {
    if (this.speed <= 0) {
      this.speed = 0;
    } else {
      this.speed -= 0.5;
    }
    this.updateMPH();
  }

  checkSpeed() {
    if (this.speed === 0) {
      this.speed = 1;
    }
    this.updateMPH();
  }

  update() {
    this.updateMPH();
    if (this.speed === 0) {
      setTimeout(() => {
        this.checkSpeed();
      }, 10000);
    }

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

    if (this.speed >= 10) {
      this.speed = 10;
    }
    this.yOffSet += this.speed;
    this.game.score.update();
  }
}