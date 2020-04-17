export default class Instructions {

  constructor(ctx) {
    this.ctx = ctx;
    this.instructions = new Image;
    this.instructions.src = "../dist/assets/images/instructions.jpg";
  }

  update() {
    this.ctx.drawImage(this.instructions, 0, 0);
    document.querySelector('.instructions').style.display = "block";
    document.querySelector('.start-btn-home').style.display = "none";
    document.querySelector(".playAgain").style.display = "none";
    document.querySelector(".home").style.display = "none";

    if (document.querySelector('.instructions').attributes.style) {
      const istrue = document.querySelector('.instructions').attributes.style.value === "display: block;";
      let check = document.querySelector(".speedcount");
      if (check) {
        if (istrue) {
          check.parentNode.removeChild(check);
        }
      }
    }
  }
}
