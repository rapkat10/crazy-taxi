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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _road__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./road */ \"./src/road.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _game_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game_controls */ \"./src/game_controls.js\");\n/* harmony import */ var _otherTaxi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./otherTaxi */ \"./src/otherTaxi.js\");\n\n\n\n\n\nclass Game {\n  \n  constructor(ctx) {\n    this.ctx = ctx;\n    this.road = new _road__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this);\n    this.playerTaxi = new _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this);\n\n    new _game_controls__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        road: this.road,\n        playerTaxi: this.playerTaxi\n    });\n\n    this.otherTaxis = [];\n    setInterval(() => this.createCars(), 2500);\n  }\n\n  createCars() {\n    let otherTaxi = new _otherTaxi__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this);\n    this.otherTaxis.push(otherTaxi);\n  }\n\n  update() {\n    this.road.update();\n    this.playerTaxi.update();\n\n    this.otherTaxis.forEach(taxi => {\n      taxi.update();\n    })\n  }\n\n}\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_controls.js":
/*!******************************!*\
  !*** ./src/game_controls.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameControls; });\n\nclass GameControls {\n\n  constructor(options) {\n    this.road = options.road;\n    this.playerTaxi = options.playerTaxi;\n\n    this.init();\n  }\n\n  init() {\n    document.addEventListener(\"keydown\", (e) => {\n      switch(e.keyCode) {\n        case 37: //left\n          this.playerTaxi.moveLeft();\n          break;\n        case 38: //up\n          this.road.speedUp();\n          break;\n        case 39: //right\n          this.playerTaxi.moveRight();\n          break;\n        case 40: //down\n          this.road.slowDown();\n          break;\n        case 32: //spacebar\n          this.playerTaxi.jump();\n          break;\n        default:\n          break;\n      }\n    })\n  }\n}\n\n//# sourceURL=webpack:///./src/game_controls.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  let canvas = document.getElementById('crazy-taxi');\n  let ctx = canvas.getContext(\"2d\");\n\n  let game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n\n  requestAnimationFrame(gameloop);\n\n  function gameloop() {\n\n    game.update();\n    requestAnimationFrame(gameloop);\n  }\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/otherTaxi.js":
/*!**************************!*\
  !*** ./src/otherTaxi.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return OtherTaxi; });\n\nclass OtherTaxi {\n\n  constructor(game) {\n    this.game = game;\n    this.ctx = this.game.ctx;\n\n    this.taxi1 = new Image;\n    this.taxi1.src = \"../dist/assets/images/othertaxi1.png\";\n    this.taxi2 = new Image;\n    this.taxi2.src = \"../dist/assets/images/othertaxi2.png\";\n    this.taxi = [this.taxi1, this.taxi2][Math.floor(Math.random() * 2)];\n    this.Xpos = [85, 130, 178][Math.floor(Math.random() * 3)];\n    if (this.game.road.speed === 0) {\n      this.Ypos = [90, 80, 70, 60, 50, 40, 30][Math.floor(Math.random() * 7)];\n    } else {\n      this.Ypos = 0;\n    }\n  }\n\n  update() {\n    this.ctx.drawImage(this.taxi, this.Xpos, this.Ypos);\n    \n\n    if (this.game.road.speed === 0) {\n      this.Ypos -= 0.5;\n    } else {\n      this.Ypos += this.game.road.speed / 3;\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/otherTaxi.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PlayerTaxi; });\n\nclass PlayerTaxi {\n\n  constructor(game) {\n    this.game = game;\n    this.ctx = this.game.ctx;\n    this.positionX = 130;\n    this.postionY = 120;\n\n    this.taxi = new Image;\n    this.taxi.src = \"../dist/assets/images/playerTaxi.png\";\n\n  }\n\n  moveLeft() {\n    if (this.positionX === 130) {\n      this.positionX = 85;\n    }else if (this.positionX === 85) {\n      this.positionX = 85;\n    } else {\n      this.positionX = 130;\n    }\n  }\n\n  moveRight() {\n    if (this.positionX === 130) {\n      this.positionX = 178;\n    } else if (this.positionX === 178) {\n      this.positionX = 178;\n    } else {\n      this.positionX = 130;\n    }\n  }\n\n  jump() {\n    this.postionY = 80;\n    setTimeout(() => {\n      this.postionY = 120;\n    }, 2000)\n  }\n\n  update() {\n    this.ctx.drawImage(this.taxi, this.positionX, this.postionY);\n  }\n\n}\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/road.js":
/*!*********************!*\
  !*** ./src/road.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Road; });\n\n\nclass Road {\n\n  constructor(game) {\n    this.game = game;\n    this.ctx = this.game.ctx;\n    this.yOffSet = -150;\n    this.road = new Image;\n    this.road.src = \"../dist/assets/images/backgroundRoad.png\";\n    this.speed = 0;\n\n  }\n\n  speedUp() {\n    if (this.speed >= 5) {\n      this.speed = 5;\n    } else {\n      this.speed += 0.5;\n    }\n  }\n\n  slowDown() {\n    if(this.speed <= 0) {\n      this.speed = 0;\n    }else {\n      this.speed -= 5;\n    }\n  }\n\n  update() {\n    if (this.yOffSet >= 0) this.yOffSet = -150;\n\n    this.ctx.drawImage(this.road, 0, this.yOffSet);\n    this.ctx.drawImage(this.road, 0, this.yOffSet + 150);\n    this.ctx.drawImage(this.road, 0, this.yOffSet + 300);\n\n    this.yOffSet += this.speed;\n  }\n\n}\n\n//# sourceURL=webpack:///./src/road.js?");

/***/ })

/******/ });