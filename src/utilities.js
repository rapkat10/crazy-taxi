export default function isCollided(playerTaxi, otherTaxis) {
  let result = false;
  if (otherTaxis.length > 0) {
    otherTaxis.forEach(otherTaxi => {
      if (!result) {
        if (otherTaxi.positionX === playerTaxi.positionX) {
          if (otherTaxi.positionY > 105) {
            if (otherTaxi.positionY < 138) {
              if (!playerTaxi.jumped) {
                result = true;
              }
            }
          }
        }
      }
    });
  }
  return result;
}