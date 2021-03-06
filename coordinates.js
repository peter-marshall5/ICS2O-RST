// The game runs on a 400x225 coordinate system
// It stays in a 16:9 aspect ratio
// and scales to the user's screen

function convertCoords (x, y) {
  return { x: x / 400 * window.canvas.width, y: y / 225 * window.canvas.height }
}

// Convert without screen DPI
function rawConvertCoords (x, y) {
  return { x: x / 400 * window.getCwidth(), y: y / 225 * window.getCheight() }
}

function reverseConvertCoords (x, y) {
  return { x: x / window.getCwidth() * 400, y: y / window.getCheight() * 225 }
}

function random (min, max) {
  // Difference between minimum and maximum values
  const delta = max - min
  return Math.floor(Math.random() * delta) + min
}

window.convertCoords = convertCoords
window.rawConvertCoords = rawConvertCoords
window.reverseConvertCoords = reverseConvertCoords
window.random = random
