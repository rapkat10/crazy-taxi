import MainPage from "./mainPage.js";
import { clickListener } from "./utilities";

document.addEventListener('DOMContentLoaded', () => {
  let canvas = document.getElementById('crazy-taxi');
  let ctx = canvas.getContext("2d");
  let mainPage = new MainPage(ctx);
  requestAnimationFrame(gameloop);
  function gameloop() {
    mainPage.update();
    requestAnimationFrame(gameloop);
  }
});

clickListener();
