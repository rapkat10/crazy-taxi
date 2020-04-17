import Road from "./road";
import PlayerTaxi from "./player";
import GameControls from "./game_controls";
import OtherTaxi from "./otherTaxi";
import { isCollided } from "./utilities";
import GameOverPage from "./gameOverPage";
import Score from "./score";
import Instructions from "./instructions"

export default class Game {
  
  constructor(ctx) {
    this.ctx = ctx;
    this.road = new Road(this);
    this.playerTaxi = new PlayerTaxi(this);
    this.score = new Score(this);

    new GameControls({
        road: this.road,
        playerTaxi: this.playerTaxi
    });

    this.otherTaxis = [];
    setInterval(() => this.createTaxis(), 3000);

    this.gameOver = false;
  }

  createTaxis() {
    if (this.gameOver) return;
    let otherTaxi = new OtherTaxi(this);
    this.otherTaxis.push(otherTaxi);
  }

  playAgain(e) {
    if (e.keyCode !== 13) return;
    this.otherTaxis = [];
    this.road.speed = 0;
    this.playerTaxi.resetPosition();
    this.gameOver = false;
    document.querySelector(".playAgain").style.display = "none";
    document.querySelector(".home").style.display = "none";
    let score = document.querySelector(".scorecount");
    if (score) {
      score.parentNode.removeChild(score);
    }
    document.onkeydown = null;
  }

  questionMarkListener() {
    document.addEventListener('click', (e) => {
      if (e.toElement.className === "fas fa-question-circle") {
        this.gameOver = true;
        document.querySelector('.instructions').style.display = "block";
        document.querySelector('.start-btn-home').style.display = "none";
        let music = document.querySelector(".playMusic");
        let audio = document.getElementById("cukurdayiz");
        if (!audio) {
          music.click();
        } else {
          if (audio.paused) {
            music.click();
          }
        }

        let check = document.querySelector(".speedcount");
        if (check) {
          check.parentNode.removeChild(check);
        }
        let score = document.querySelector(".scorecount");
        if (score) {
          score.style.display = "none"
          score.parentNode.removeChild(score);
        }
        let canvas = document.getElementById('crazy-taxi');
        let ctx = canvas.getContext("2d");
        let instructions = new Instructions(ctx);
        requestAnimationFrame(gameloop);

        function gameloop() {
          instructions.update();
          requestAnimationFrame(gameloop);
        }
      }
    });
  }

  update() {
    document.querySelector('.start-btn-home').style.display = "none";
    document.querySelector('.instructions').style.display = "none";
    if (this.gameOver) return;
    document.querySelector(".playAgain").style.display = "none";
    document.querySelector(".home").style.display = "none";

    this.questionMarkListener();
    this.road.update();
    this.playerTaxi.update();
    this.otherTaxis.forEach(taxi => {
      taxi.update();
    });

    if (isCollided(this.playerTaxi, this.otherTaxis)) {
      const canvasDiv = document.querySelector(".canvas-div");
      let score = document.createElement("P");
      score.setAttribute("class", "scorecount");
      score.innerHTML = this.score.score;
      canvasDiv.appendChild(score);

      document.getElementById("crash").play();
      this.gameOver = true;
      let gameOverPage = new GameOverPage(this);
      requestAnimationFrame(gameloop);
      function gameloop() {
        gameOverPage.update();
        requestAnimationFrame(gameloop);
      }
      document.onkeydown = e => this.playAgain(e);
      this.score.update(this.gameOver);
    }
  }
}
