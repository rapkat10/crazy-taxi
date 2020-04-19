/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _road__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./road */ \"./src/road.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _game_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game_controls */ \"./src/game_controls.js\");\n/* harmony import */ var _otherTaxi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./otherTaxi */ \"./src/otherTaxi.js\");\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utilities */ \"./src/utilities.js\");\n/* harmony import */ var _gameOverPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gameOverPage */ \"./src/gameOverPage.js\");\n/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./score */ \"./src/score.js\");\n/* harmony import */ var _instructions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./instructions */ \"./src/instructions.js\");\n\n\n\n\n\n\n\n\n\nclass Game {\n  \n  constructor(ctx) {\n    this.ctx = ctx;\n    this.road = new _road__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this);\n    this.playerTaxi = new _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this);\n    this.score = new _score__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this);\n\n    new _game_controls__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        road: this.road,\n        playerTaxi: this.playerTaxi\n    });\n\n    this.otherTaxis = [];\n    setInterval(() => this.createTaxis(), 3000);\n\n    this.gameOver = false;\n  }\n\n  createTaxis() {\n    if (this.gameOver) return;\n    let otherTaxi = new _otherTaxi__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this);\n    this.otherTaxis.push(otherTaxi);\n  }\n\n  playAgain(e) {\n    if (e.keyCode !== 13) return;\n    this.otherTaxis = [];\n    this.road.speed = 0;\n    this.playerTaxi.resetPosition();\n    this.gameOver = false;\n    document.querySelector(\".playAgain\").style.display = \"none\";\n    document.querySelector(\".home\").style.display = \"none\";\n    let score = document.querySelector(\".scorecount\");\n    if (score) {\n      score.parentNode.removeChild(score);\n    }\n    document.onkeydown = null;\n  }\n\n  questionMarkListener() {\n    document.addEventListener('click', (e) => {\n      if (e.toElement.className === \"fas fa-question-circle\") {\n        this.gameOver = true;\n        document.querySelector('.instructions').style.display = \"block\";\n        document.querySelector('.start-btn-home').style.display = \"none\";\n        let music = document.querySelector(\".playMusic\");\n        let audio = document.getElementById(\"cukurdayiz\");\n        if (!audio) {\n          music.click();\n        } else {\n          if (audio.paused) {\n            music.click();\n          }\n        }\n\n        let check = document.querySelector(\".speedcount\");\n        if (check) {\n          check.parentNode.removeChild(check);\n        }\n        let score = document.querySelector(\".scorecount\");\n        if (score) {\n          score.style.display = \"none\"\n          score.parentNode.removeChild(score);\n        }\n        let canvas = document.getElementById('crazy-taxi');\n        let ctx = canvas.getContext(\"2d\");\n        let instructions = new _instructions__WEBPACK_IMPORTED_MODULE_7__[\"default\"](ctx);\n        requestAnimationFrame(gameloop);\n\n        function gameloop() {\n          instructions.update();\n          requestAnimationFrame(gameloop);\n        }\n      }\n    });\n  }\n\n  update() {\n    document.querySelector('.start-btn-home').style.display = \"none\";\n    document.querySelector('.instructions').style.display = \"none\";\n    if (this.gameOver) return;\n    document.querySelector(\".playAgain\").style.display = \"none\";\n    document.querySelector(\".home\").style.display = \"none\";\n\n    this.questionMarkListener();\n    this.road.update();\n    this.playerTaxi.update();\n    this.otherTaxis.forEach(taxi => {\n      taxi.update();\n    });\n\n    if (Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[\"isCollided\"])(this.playerTaxi, this.otherTaxis)) {\n      const scoreDiv = document.querySelector(\".scoreDiv\");\n      let score = document.createElement(\"P\");\n      score.setAttribute(\"class\", \"scorecount\");\n      score.innerHTML = this.score.score;\n      scoreDiv.appendChild(score);\n\n      document.getElementById(\"crash\").play();\n      this.gameOver = true;\n      let gameOverPage = new _gameOverPage__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this);\n      requestAnimationFrame(gameloop);\n      function gameloop() {\n        gameOverPage.update();\n        requestAnimationFrame(gameloop);\n      }\n      document.onkeydown = e => this.playAgain(e);\n      this.score.update(this.gameOver);\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/gameOverPage.js":
/*!*****************************!*\
  !*** ./src/gameOverPage.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MainPage; });\nclass MainPage {\n\n  constructor(game) {\n    this.game = game;\n    this.ctx = this.game.ctx;\n    this.gameOver = new Image;\n    this.gameOver.src = \"./dist/assets/images/gameover.png\";\n  }\n\n  update() {\n    this.ctx.drawImage(this.gameOver, 0, 0);\n    document.querySelector(\".playAgain\").style.display = \"block\";\n    document.querySelector(\".home\").style.display = \"block\";\n\n    let check = document.querySelector(\".speedcount\");\n    if (check) {\n      check.parentNode.removeChild(check);\n    }\n    const canvasDiv = document.querySelector(\".canvas-div\");\n    let speed = document.createElement(\"P\");\n    speed.setAttribute(\"class\", \"speedcount\");\n    speed.innerHTML = `Speed: ${this.game.road.speed * 10}/MPH`;\n    canvasDiv.appendChild(speed);\n  }\n}\n\n//# sourceURL=webpack:///./src/gameOverPage.js?");

/***/ }),

/***/ "./src/game_controls.js":
/*!******************************!*\
  !*** ./src/game_controls.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameControls; });\n/* harmony import */ var _swipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./swipe */ \"./src/swipe.js\");\n\nclass GameControls {\n\n  constructor(options) {\n    this.road = options.road;\n    this.playerTaxi = options.playerTaxi;\n    this.controls();\n    Object(_swipe__WEBPACK_IMPORTED_MODULE_0__[\"swipeListener\"])(options);\n  }\n\n  controls() {\n    document.addEventListener(\"keydown\", (e) => {\n      switch(e.keyCode) {\n        case 37: //left\n          this.playerTaxi.moveLeft();\n          break;\n        case 38: //up\n          this.road.speedUp();\n          break;\n        case 39: //right\n          this.playerTaxi.moveRight();\n          break;\n        case 40: //down\n          this.road.slowDown();\n          break;\n        case 32: //spacebar\n          let jumpSound = document.getElementById(\"jump\");\n          jumpSound.play();\n          this.playerTaxi.jump();\n          break;\n        default:\n          break;\n      }\n    })\n  }\n}\n\n//# sourceURL=webpack:///./src/game_controls.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mainPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainPage.js */ \"./src/mainPage.js\");\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities */ \"./src/utilities.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  let canvas = document.getElementById('crazy-taxi');\n  let ctx = canvas.getContext(\"2d\");\n  let mainPage = new _mainPage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n  requestAnimationFrame(gameloop);\n  function gameloop() {\n    mainPage.update();\n    requestAnimationFrame(gameloop);\n  }\n});\n\nObject(_utilities__WEBPACK_IMPORTED_MODULE_1__[\"clickListener\"])();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/instructions.js":
/*!*****************************!*\
  !*** ./src/instructions.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Instructions; });\nclass Instructions {\n\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.instructions = new Image;\n    this.instructions.src = \"./dist/assets/images/instructions.jpg\";\n  }\n\n  update() {\n    this.ctx.drawImage(this.instructions, 0, 0);\n    document.querySelector('.instructions').style.display = \"block\";\n    document.querySelector('.start-btn-home').style.display = \"none\";\n    document.querySelector(\".playAgain\").style.display = \"none\";\n    document.querySelector(\".home\").style.display = \"none\";\n\n    if (document.querySelector('.instructions').attributes.style) {\n      const istrue = document.querySelector('.instructions').attributes.style.value === \"display: block;\";\n      let check = document.querySelector(\".speedcount\");\n      if (check) {\n        if (istrue) {\n          check.parentNode.removeChild(check);\n        }\n      }\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/instructions.js?");

/***/ }),

/***/ "./src/mainPage.js":
/*!*************************!*\
  !*** ./src/mainPage.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MainPage; });\n/* harmony import */ var _instructions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instructions */ \"./src/instructions.js\");\n\nclass MainPage {\n\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.mainPage = new Image;\n    this.mainPage.src = \"./dist/assets/images/mainPage.jpg\";\n  }\n\n  questionMarkListener() {\n    document.addEventListener('click', (e) => {\n      if (e.toElement.className === \"fas fa-question-circle\") {\n        this.gameOver = true;\n        document.querySelector('.instructions').style.display = \"block\";\n        document.querySelector('.start-btn-home').style.display = \"none\";\n        let music = document.querySelector(\".playMusic\");\n        let audio = document.getElementById(\"cukurdayiz\");\n        if (!audio) {\n          music.click();\n        } else {\n          if (audio.paused) {\n            music.click();\n          }\n        }\n\n        let check = document.querySelector(\".speedcount\");\n        if (check) {\n          check.parentNode.removeChild(check);\n        }\n        let score = document.querySelector(\".scorecount\");\n        if (score) {\n          score.style.display = \"none\"\n          score.parentNode.removeChild(score);\n        }\n        let canvas = document.getElementById('crazy-taxi');\n        let ctx = canvas.getContext(\"2d\");\n        let instructions = new _instructions__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n        requestAnimationFrame(gameloop);\n\n        function gameloop() {\n          instructions.update();\n          requestAnimationFrame(gameloop);\n        }\n      }\n    });\n  }\n\n  update() {\n    this.questionMarkListener();\n    this.ctx.drawImage(this.mainPage, 0, 0);\n    let check = document.querySelector(\".speedcount\");\n    if (check) {\n      check.parentNode.removeChild(check);\n    }\n    document.querySelector(\".playAgain\").style.display = \"none\";\n    document.querySelector(\".home\").style.display = \"none\";\n    document.querySelector('.start-btn-home').style.display = \"block\";\n  }\n}\n\n\n//# sourceURL=webpack:///./src/mainPage.js?");

/***/ }),

/***/ "./src/otherTaxi.js":
/*!**************************!*\
  !*** ./src/otherTaxi.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return OtherTaxi; });\nclass OtherTaxi {\n\n  constructor(game) {\n    this.game = game;\n    this.ctx = this.game.ctx;\n\n    this.taxi1 = new Image;\n    this.taxi1.src = \"./dist/assets/images/othertaxi1.png\";\n    this.taxi2 = new Image;\n    this.taxi2.src = \"./dist/assets/images/othertaxi2.png\";\n    this.taxi3 = new Image;\n    this.taxi3.src = \"./dist/assets/images/othertaxi3.png\";\n    this.taxi4 = new Image;\n    this.taxi4.src = \"./dist/assets/images/othertaxi4.png\";\n    this.taxi = [this.taxi1, this.taxi2, this.taxi3, this.taxi4][Math.floor(Math.random() * 4)];\n    this.positionX = [85, 130, 178][Math.floor(Math.random() * 3)];\n    if (this.game.road.speed === 0) {\n      this.positionY = [70, 60, 50, 40, 30][Math.floor(Math.random() * 5)];\n    } else {\n      this.positionY = 0;\n    }\n  }\n\n  update() {\n    this.ctx.drawImage(this.taxi, this.positionX, this.positionY);\n    if (this.game.road.speed === 0) {\n      this.positionY -= 0.5;\n    } else {\n      this.positionY += this.game.road.speed / 3;\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/otherTaxi.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PlayerTaxi; });\nclass PlayerTaxi {\n\n  constructor(game) {\n    this.game = game;\n    this.ctx = this.game.ctx;\n    this.positionX = 130;\n    this.positionY = 120;\n    this.jumped = false;\n\n    this.taxi = new Image;\n    this.taxi.src = \"./dist/assets/images/playerTaxi.png\";\n\n  }\n\n  moveLeft() {\n    if (this.positionX === 130) {\n      this.positionX = 85;\n    }else if (this.positionX === 85) {\n      this.positionX = 85;\n    } else {\n      this.positionX = 130;\n    }\n  }\n\n  moveRight() {\n    if (this.positionX === 130) {\n      this.positionX = 178;\n    } else if (this.positionX === 178) {\n      this.positionX = 178;\n    } else {\n      this.positionX = 130;\n    }\n  }\n\n  resetPosition() {\n    this.positionX = 130;\n    this.positionY = 120;\n  }\n\n  jump() {\n    this.jumped = true;\n    this.positionY = 80;\n    setTimeout(() => {\n      this.positionY = 120;\n      this.jumped = false;\n    }, 2000)\n  }\n\n  update() {\n    this.ctx.drawImage(this.taxi, this.positionX, this.positionY);\n  }\n\n}\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/road.js":
/*!*********************!*\
  !*** ./src/road.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Road; });\nclass Road {\n\n  constructor(game) {\n    this.game = game;\n    this.ctx = this.game.ctx;\n    this.yOffSet = -150;\n    this.road = new Image;\n    this.road.src = \"./dist/assets/images/backgroundRoad.png\";\n\n    this.sceneLeft = new Image;\n    this.sceneLeft.src = \"./dist/assets/images/scene1_left.png\";\n    this.sceneRight = new Image;\n    this.sceneRight.src = \"./dist/assets/images/scene1_right.png\";\n\n    this.speed = 0;\n  }\n\n  updateMPH() {\n    let check = document.querySelector(\".speedcount\");\n    if (check) {\n      check.parentNode.removeChild(check);\n    }\n    const canvasDiv = document.querySelector(\".canvas-div\");\n    let speed;\n    speed = document.createElement(\"P\");\n    speed.setAttribute(\"class\", \"speedcount\");\n    speed.innerHTML = `Speed: ${this.speed * 10}/MPH`;\n    canvasDiv.appendChild(speed);\n  }\n\n  speedUp() {\n    if (this.speed >= 10) {\n      this.speed = 10;\n    } else {\n      this.speed += 0.5;\n    }\n    this.updateMPH();\n  }\n\n  slowDown() {\n    if (this.speed <= 0) {\n      this.speed = 0;\n    } else {\n      this.speed -= 0.5;\n    }\n    this.updateMPH();\n  }\n\n  checkSpeed() {\n    if (this.speed === 0) {\n      this.speed = 1;\n    }\n    this.updateMPH();\n  }\n\n  update() {\n    this.updateMPH();\n    if (this.speed === 0) {\n      setTimeout(() => {\n        this.checkSpeed();\n      }, 10000);\n    }\n\n    if (this.yOffSet >= 0) this.yOffSet = -150;\n    this.ctx.drawImage(this.road, 0, this.yOffSet);\n    this.ctx.drawImage(this.road, 0, this.yOffSet + 150);\n    this.ctx.drawImage(this.road, 0, this.yOffSet + 300);\n\n    this.ctx.drawImage(this.sceneRight, 218, this.yOffSet);\n    this.ctx.drawImage(this.sceneRight, 218, this.yOffSet + 150);\n    this.ctx.drawImage(this.sceneRight, 218, this.yOffSet + 300);\n    \n    this.ctx.drawImage(this.sceneLeft, -19, this.yOffSet);\n    this.ctx.drawImage(this.sceneLeft, -19, this.yOffSet + 150);\n    this.ctx.drawImage(this.sceneLeft, -19, this.yOffSet + 300);\n\n    if (this.speed >= 10) {\n      this.speed = 10;\n    }\n    this.yOffSet += this.speed;\n    this.game.score.update();\n  }\n}\n\n//# sourceURL=webpack:///./src/road.js?");

/***/ }),

/***/ "./src/score.js":
/*!**********************!*\
  !*** ./src/score.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Score; });\nclass Score {\n\n  constructor(game) {\n    this.game = game;\n    this.ctx = this.game.ctx;\n    this.score = 0;\n  }\n\n  update(gameOver) {\n    if (gameOver) {\n      this.score = 0;\n      let score = document.querySelector(\".scorecount\");\n      if (score) {\n        score.parentNode.removeChild(score);\n      }\n      return;\n    } else {\n      const scoreDiv = document.querySelector(\".scoreDiv\");\n      const check = document.querySelector(\".scorecount\");\n      let score;\n      if (!check) {\n        score = document.createElement(\"P\");\n        score.setAttribute(\"class\", \"scorecount\");\n        this.score = 0\n        score.innerHTML = this.score;\n        if (score) {\n          setInterval(() => {\n            this.score += 1;\n            score.innerHTML = this.score;\n          }, 100);\n        }\n        scoreDiv.appendChild(score);\n      }\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/score.js?");

/***/ }),

/***/ "./src/swipe.js":
/*!**********************!*\
  !*** ./src/swipe.js ***!
  \**********************/
/*! exports provided: swipeListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"swipeListener\", function() { return swipeListener; });\n\nconst swipeListener = (options) => {\n  const road = options.road;\n  const playerTaxi = options.playerTaxi;\n\n  var touchstartX = 0;\n  var touchstartY = 0;\n  var touchendX = 0;\n  var touchendY = 0;\n\n  var gesuredZone = document.getElementById('canvas-div-id');\n\n  gesuredZone.addEventListener('touchstart', function (event) {\n    touchstartX = event.screenX;\n    touchstartY = event.screenY;\n  }, false);\n\n  gesuredZone.addEventListener('touchend', function (event) {\n    touchendX = event.screenX;\n    touchendY = event.screenY;\n    handleGesure();\n  }, false);\n\n  function handleGesure() {\n    var swiped = 'swiped: ';\n    if (touchendX < touchstartX) {\n      alert(swiped + 'left!');\n    }\n    if (touchendX > touchstartX) {\n      alert(swiped + 'right!');\n    }\n    if (touchendY < touchstartY) {\n      alert(swiped + 'down!');\n    }\n    if (touchendY > touchstartY) {\n      alert(swiped + 'left!');\n    }\n    if (touchendY == touchstartY) {\n      alert('tap!');\n    }\n  }\n\n\n//--------------------------------------------------------------------------------\n  // document.addEventListener('touchstart', handleTouchStart, false);\n  // document.addEventListener('touchmove', handleTouchMove, false);\n\n\n  // var xDown = null;\n  // var yDown = null;\n\n  // function getTouches(evt) {\n  //   return evt.touches || // browser API\n  //     evt.originalEvent.touches; // jQuery\n  // }\n\n  // function handleTouchStart(evt) {\n  //   const firstTouch = getTouches(evt)[0];\n  //   xDown = firstTouch.clientX;\n  //   yDown = firstTouch.clientY;\n  // };\n\n  // function handleTouchMove(evt) {\n  //   if (!xDown || !yDown) {\n  //     return;\n  //   }\n\n  //   var xUp = evt.touches[0].clientX;\n  //   var yUp = evt.touches[0].clientY;\n\n  //   var xDiff = xDown - xUp;\n  //   var yDiff = yDown - yUp;\n\n  //   if (Math.abs(xDiff) > Math.abs(yDiff)) {\n  //     /*most significant*/\n  //     if (xDiff > 0) {\n  //       /* left swipe */\n  //       playerTaxi.moveLeft();\n  //     } else {\n  //       /* right swipe */\n  //       playerTaxi.moveRight();\n  //     }\n  //   } else {\n  //     if (yDiff > 0) {\n  //       /* up swipe */\n  //       this.road.speedUp();\n  //     } else {\n  //       /* down swipe */\n  //       road.slowDown();\n  //     }\n  //   }\n  //   /* reset values */\n  //   xDown = null;\n  //   yDown = null;\n  // };\n}\n\n//# sourceURL=webpack:///./src/swipe.js?");

/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/*! exports provided: isCollided, clickListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isCollided\", function() { return isCollided; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clickListener\", function() { return clickListener; });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _mainPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainPage.js */ \"./src/mainPage.js\");\n/* harmony import */ var _instructions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instructions.js */ \"./src/instructions.js\");\n\n\n\n\nconst isCollided = (playerTaxi, otherTaxis) => {\n  let result = false;\n  if (otherTaxis.length > 0) {\n    otherTaxis.forEach(otherTaxi => {\n      if (!result) {\n        if (otherTaxi.positionX === playerTaxi.positionX) {\n          if (otherTaxi.positionY > 105) {\n            if (otherTaxi.positionY < 138) {\n              if (!playerTaxi.jumped) {\n                result = true;\n              }\n            }\n          }\n        }\n      }\n    });\n  }\n  return result;\n}\n\nconst clickListener = () => {\n  document.addEventListener('click', (e) => {\n    //start button from home\n    if (e.toElement.className === \"start-btn-home\") {\n      document.querySelector('.instructions').style.display = \"block\";\n      document.querySelector('.start-btn-home').style.display = \"none\";\n      let music = document.querySelector(\".playMusic\");\n      let audio = document.getElementById(\"cukurdayiz\");\n      if (!audio) {\n        music.click();\n      } else {\n        if (audio.paused) {\n          music.click();\n        }\n      }\n      let check = document.querySelector(\".speedcount\");\n      if (check) {\n        check.parentNode.removeChild(check);\n      }\n      let canvas = document.getElementById('crazy-taxi');\n      let ctx = canvas.getContext(\"2d\");\n      let instructions = new _instructions_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](ctx);\n      requestAnimationFrame(gameloop);\n\n      function gameloop() {\n        instructions.update();\n        requestAnimationFrame(gameloop);\n      }\n    }\n    //start button from instructions\n    if (e.toElement.className === \"start-button\" || \n        e.toElement.className === \"start-button-p\") {\n      let score = document.querySelector(\".scorecount\");\n      if (score) {\n        score.style.display = \"none\"\n        score.parentNode.removeChild(score);\n      }\n      let canvas = document.getElementById('crazy-taxi');\n      let ctx = canvas.getContext(\"2d\");\n      let game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n      requestAnimationFrame(gameloop);\n\n      function gameloop() {\n        game.update();\n        requestAnimationFrame(gameloop);\n      }\n    }\n    //home button\n    if (e.toElement.className === \"home\") {\n      let score = document.querySelector(\".scorecount\");\n      if (score) {\n        score.parentNode.removeChild(score);\n      }\n      let check = document.querySelector(\".speedcount\");\n      if (check) {\n        check.parentNode.removeChild(check);\n      }\n      document.querySelector('.start-btn-home').style.display = \"block\";\n      let canvas = document.getElementById('crazy-taxi');\n      let ctx = canvas.getContext(\"2d\");\n      let mainPage = new _mainPage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx);\n      requestAnimationFrame(gameloop);\n\n      function gameloop() {\n        mainPage.update();\n        requestAnimationFrame(gameloop);\n      }\n    }\n    //sound icon mute/unmute\n    const els = document.getElementsByClassName(\"sound\");\n    if (e.toElement.className === \"fas fa-volume-up\") {\n      let soundIcon = document.querySelector(\"#soundIcon\");\n      for (var j = 0; j < els.length; j++) {\n        els[j].muted = true;\n      }\n      soundIcon.classList.remove(\"fa-volume-up\");\n      soundIcon.classList.add(\"fa-volume-mute\");\n      return;\n    }\n    if (e.toElement.className === \"fas fa-volume-mute\") {\n      let soundIcon = document.querySelector(\"#soundIcon\");\n      for (var j = 0; j < els.length; j++) {\n        els[j].muted = false;\n      }\n      soundIcon.classList.remove(\"fa-volume-mute\");\n      soundIcon.classList.add(\"fa-volume-up\");\n      return;\n    }\n    //play music and stop music\n    if (e.toElement.className === \"playMusic\") {\n      const musicArr = [\n        \"./dist/assets/sounds/cukurdayiz.mp3\",\n        \"./dist/assets/sounds/heycan.wav\",\n        \"./dist/assets/sounds/adanali.wav\",\n        \"./dist/assets/sounds/crazyfrog.wav\",\n        \"./dist/assets/sounds/eyvallah.wav\",\n        \"./dist/assets/sounds/farkvar.wav\",\n        \"./dist/assets/sounds/fast5.wav\",\n        \"./dist/assets/sounds/karakol.wav\",\n        \"./dist/assets/sounds/mj.wav\",\n        \"./dist/assets/sounds/mozart.wav\",\n        \"./dist/assets/sounds/tokyodrift.wav\"\n      ]\n      let selectedMusic = musicArr[Math.floor(Math.random() * 11)];\n      let prevAudio = document.getElementById(\"cukurdayiz\");\n      if (prevAudio) {\n        prevAudio.setAttribute(\"src\", selectedMusic);\n      } else {\n        let audio = document.createElement(\"AUDIO\");\n        audio.setAttribute(\"src\", selectedMusic);\n        audio.setAttribute(\"class\", \"sound\");\n        audio.setAttribute(\"id\", \"cukurdayiz\");\n        document.body.appendChild(audio);\n      }\n      document.getElementById(\"cukurdayiz\").play();\n      document.getElementById(\"cukurdayiz\").onended = function () {\n        document.querySelector(\".playMusic\").click();\n      }\n      return;\n    }\n    if (e.toElement.className === \"stopMusic\") {\n      document.getElementById(\"cukurdayiz\").pause();\n      return;\n    }\n  });\n};\n\n//# sourceURL=webpack:///./src/utilities.js?");

/***/ })

/******/ });