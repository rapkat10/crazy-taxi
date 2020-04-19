export default class Score {

  constructor(game) {
    this.game = game;
    this.ctx = this.game.ctx;
    this.score = 0;
  }

  update(gameOver) {
    if (gameOver) {
      this.score = 0;
      let score = document.querySelector(".scorecount");
      if (score) {
        score.parentNode.removeChild(score);
      }
      return;
    } else {
      const scoreDiv = document.querySelector(".scoreDiv");
      const check = document.querySelector(".scorecount");
      let score;
      if (!check) {
        score = document.createElement("P");
        score.setAttribute("class", "scorecount");
        this.score = 0
        score.innerHTML = this.score;
        if (score) {
          setInterval(() => {
            this.score += 1;
            score.innerHTML = this.score;
          }, 100);
        }
        scoreDiv.appendChild(score);
      }
    }
  }
}