import Game from "./game";
import MainPage from "./mainPage.js";
import Instructions from "./instructions.js";

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

document.addEventListener('click', (e) => {
  //start button from home
  if (e.toElement.className === "start-btn-home") {
    document.querySelector('.instructions').style.display = "block";
    document.querySelector('.start-btn-home').style.display = "none";
    let canvas = document.getElementById('crazy-taxi');
    let ctx = canvas.getContext("2d");
    let instructions = new Instructions(ctx);
    requestAnimationFrame(gameloop);
    function gameloop() {
      instructions.update();
      requestAnimationFrame(gameloop);
    }
  }
  //start button from instructions
  if (e.toElement.className === "start-button") {
    let canvas = document.getElementById('crazy-taxi');
    let ctx = canvas.getContext("2d");
    let game = new Game(ctx);
    requestAnimationFrame(gameloop);
    function gameloop() {
      game.update();
      requestAnimationFrame(gameloop);
    }
  }
  //question icon for instructions
  if (e.toElement.className === "fas fa-question-circle") {
    document.querySelector('.instructions').style.display = "block";
    document.querySelector('.start-btn-home').style.display = "none";
    let canvas = document.getElementById('crazy-taxi');
    let ctx = canvas.getContext("2d");
    let instructions = new Instructions(ctx);
    requestAnimationFrame(gameloop);
    function gameloop() {
      instructions.update();
      requestAnimationFrame(gameloop);
    }
  }
  //home button
  if (e.toElement.className === "home") {
    let score = document.querySelector(".scorecount");
    score.parentNode.removeChild(score);
    document.querySelector('.start-btn-home').style.display = "block";
    let canvas = document.getElementById('crazy-taxi');
    let ctx = canvas.getContext("2d");
    let mainPage = new MainPage(ctx);
    requestAnimationFrame(gameloop);
    function gameloop() {
      mainPage.update();
      requestAnimationFrame(gameloop);
    }
  }
  //sound icon mute/unmute
  const els = document.getElementsByClassName("sound");
  if (e.toElement.className === "fas fa-volume-up") {
    let soundIcon = document.querySelector("#soundIcon");
    for (var j = 0; j < els.length; j++) {
      els[j].muted = true;
    }
    soundIcon.classList.remove("fa-volume-up");
    soundIcon.classList.add("fa-volume-mute");
    return;
  }
  if (e.toElement.className === "fas fa-volume-mute") {
    let soundIcon = document.querySelector("#soundIcon");
    for (var j = 0; j < els.length; j++) {
      els[j].muted = false;
    }
    soundIcon.classList.remove("fa-volume-mute");
    soundIcon.classList.add("fa-volume-up");
    return;
  }
  //play music and stop music
  if (e.toElement.className === "playMusic") {
    const musicArr = [
      "../dist/assets/sounds/cukurdayiz.mp3",
      "../dist/assets/sounds/heycan.wav"
    ]
    let selectedMusic = musicArr[Math.floor(Math.random() * 2)];
    let prevAudio = document.getElementById("cukurdayiz");
    if (prevAudio) {
      prevAudio.setAttribute("src", selectedMusic);
    } else {
      let audio = document.createElement("AUDIO");
      audio.setAttribute("src", selectedMusic);
      audio.setAttribute("class", "sound");
      audio.setAttribute("id", "cukurdayiz");
      document.body.appendChild(audio);
    }
    document.getElementById("cukurdayiz").play();
    document.getElementById("cukurdayiz").onended = function() {
      document.querySelector(".playMusic").click();
    }
    return;
  }
  if (e.toElement.className === "stopMusic") {
    document.getElementById("cukurdayiz").pause();
    return;
  }
});
