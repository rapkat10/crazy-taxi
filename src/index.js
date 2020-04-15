import Game from "./game";

document.addEventListener('DOMContentLoaded', () => {
  let canvas = document.getElementById('crazy-taxi');
  let ctx = canvas.getContext("2d");

  let game = new Game(ctx);

  requestAnimationFrame(gameloop);

  function gameloop() {

    game.update();
    requestAnimationFrame(gameloop);
  }
});