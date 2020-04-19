
export const swipeListener = (options) => {
  const road = options.road;
  const playerTaxi = options.playerTaxi;

  let touchstartX;
  let touchstartY;
  let touchendX;
  let touchendY;

  let swipeZone = document.getElementById('canvas-div-id');

  swipeZone.addEventListener('touchstart',  (e) => {
    touchstartX = e.screenX;
    touchstartY = e.screenY;
  }, false);

  swipeZone.addEventListener('touchend', (e) => {
    touchendX = e.screenX;
    touchendY = e.screenY;
    handleGesure();
  }, false);

  function handleGesure() {
    let swiped = 'swiped: ';
    if (touchendX < touchstartX) {
      alert(swiped + 'left!');
      return;
    }
    if (touchendX > touchstartX) {
      alert(swiped + 'right!');
      return;
    }
    if (touchendY < touchstartY) {
      alert(swiped + 'down!');
      return;
    }
    if (touchendY > touchstartY) {
      alert(swiped + 'left!');
      return;
    }
    if (touchendY == touchstartY) {
      alert('tap!');
      return;
    }
  }


//--------------------------------------------------------------------------------
  // document.addEventListener('touchstart', handleTouchStart, false);
  // document.addEventListener('touchmove', handleTouchMove, false);


  // let xDown = null;
  // let yDown = null;

  // function getTouches(evt) {
  //   return evt.touches || // browser API
  //     evt.originalEvent.touches; // jQuery
  // }

  // function handleTouchStart(evt) {
  //   const firstTouch = getTouches(evt)[0];
  //   xDown = firstTouch.clientX;
  //   yDown = firstTouch.clientY;
  // };

  // function handleTouchMove(evt) {
  //   if (!xDown || !yDown) {
  //     return;
  //   }

  //   let xUp = evt.touches[0].clientX;
  //   let yUp = evt.touches[0].clientY;

  //   let xDiff = xDown - xUp;
  //   let yDiff = yDown - yUp;

  //   if (Math.abs(xDiff) > Math.abs(yDiff)) {
  //     /*most significant*/
  //     if (xDiff > 0) {
  //       /* left swipe */
  //       playerTaxi.moveLeft();
  //     } else {
  //       /* right swipe */
  //       playerTaxi.moveRight();
  //     }
  //   } else {
  //     if (yDiff > 0) {
  //       /* up swipe */
  //       this.road.speedUp();
  //     } else {
  //       /* down swipe */
  //       road.slowDown();
  //     }
  //   }
  //   /* reset values */
  //   xDown = null;
  //   yDown = null;
  // };
}