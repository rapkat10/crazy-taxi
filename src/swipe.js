
export const swipeListener = (options) => {
  debugger;
  document.addEventListener('touchstart', handleTouchStart, false);
  document.addEventListener('touchmove', handleTouchMove, false);

  const road = options.road;
  const playerTaxi = options.playerTaxi;

  var xDown = null;
  var yDown = null;

  function getTouches(evt) {
    return evt.touches || // browser API
      evt.originalEvent.touches; // jQuery
  }

  function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  };

  function handleTouchMove(evt) {
    if (!xDown || !yDown) {
      return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        /* left swipe */
        playerTaxi.moveLeft();
      } else {
        /* right swipe */
        playerTaxi.moveRight();
      }
    } else {
      if (yDiff > 0) {
        /* up swipe */
        this.road.speedUp();
      } else {
        /* down swipe */
        road.slowDown();
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  };
}