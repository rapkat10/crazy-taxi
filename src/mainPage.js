import Instructions from "./instructions";
export default class MainPage {

  constructor(ctx) {
    this.ctx = ctx;
    this.mainPage = new Image;
    this.mainPage.src = "../dist/assets/images/mainPage.jpg";
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
    this.questionMarkListener();
    this.ctx.drawImage(this.mainPage, 0, 0);
    let check = document.querySelector(".speedcount");
    if (check) {
      check.parentNode.removeChild(check);
    }
    document.querySelector(".playAgain").style.display = "none";
    document.querySelector(".home").style.display = "none";
    document.querySelector('.start-btn-home').style.display = "block";
  }
}
