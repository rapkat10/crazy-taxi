export const swipeListener = (options) => {
  const road = options.road;
  const playerTaxi = options.playerTaxi;

  document.addEventListener('touchstart', handleTouchStart, false);
  document.addEventListener('touchmove', handleTouchMove, false);
  let xDown = null;
  let yDown = null;

  function getTouches(e) {
    return e.touches || // browser API
      e.originalEvent.touches; // jQuery
  }

  function handleTouchStart(e) {
    const firstTouch = getTouches(e)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  };

  function handleTouchMove(e) {
    if (!xDown || !yDown) {
      return;
    }

    let xUp = e.touches[0].clientX;
    let yUp = e.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff === 0) {
        this.road.speedUp();
      }
      if (xDiff > 0) {
        /* left swipe */
        playerTaxi.moveLeft();
      } else {
        /* right swipe */
        playerTaxi.moveRight();
      }
    } else {
      if(yDiff === 0) {
        this.road.speedUp();
      }
      if (yDiff > 0) {
        /* up swipe */
        this.road.speedUp();
      } else {
        /* down swipe */
        road.slowDown();
      }
    }
    
    xDown = null;
    yDown = null;
  };
}