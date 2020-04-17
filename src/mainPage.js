
export default class MainPage {

  constructor(ctx) {
    this.ctx = ctx;
    this.mainPage = new Image;
    this.mainPage.src = "../dist/assets/images/mainPage.jpg";
  }

  update() {
    this.ctx.drawImage(this.mainPage, 0, 0);
    document.querySelector(".playAgain").style.display = "none";
    document.querySelector(".home").style.display = "none";
    document.querySelector('.start-btn-home').style.display = "block";
  }
}
