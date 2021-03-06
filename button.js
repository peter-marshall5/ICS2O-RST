// Handles loading of images and button events

const images = {}
const buttons = {}

class ImageLoader {
  constructor (url, name) {
    images[name] = this
    this.url = url
    this.name = name
    this.img = new Image()
    this.onclick = null
  }

  load () {
    this.img.src = this.url
  }
}

class Button {
  constructor (url, name, x, y, width, height) {
    this.name = name
    this.img = new ImageLoader(url, name)
    this.x = x
    this.y = y
    this.w = width
    this.h = height
    this.hidden = false
  }

  checkClick (x, y) {
    if (this.hidden) {
      return false
    }
    const coordMap = {
      start: window.rawConvertCoords(this.x, this.y),
      size: window.rawConvertCoords(this.w, this.h)
    }
    const center = (window.getCwidth() / 2) - (coordMap.size.x / 2)
    console.log(coordMap, center)
    if (center + coordMap.start.x < x &&
      center + coordMap.start.x + coordMap.size.x > x &&
      coordMap.start.y < y &&
      coordMap.start.y + coordMap.size.y > y) {
      return true
    }
    return false
  }

  draw () {
    if (this.hidden) {
      return
    }
    window.drawButton(this)
  }
}

function loadImages () {
  for (const i in images) {
    images[i].load()
  }
}

function disableButtons () {
  for (const i in buttons) {
    buttons[i].hidden = true
  }
}

function enableButtons () {
  for (const i in buttons) {
    buttons[i].hidden = false
  }
}

buttons.freeplay = new Button('assets/images/endless.png', 'freeplay', 0, 90, 100, 23)
buttons.firstTo10 = new Button('assets/images/first_to_10.png', 'firstTo10', 0, 118, 100, 23)
buttons.bot = new Button('assets/images/play_against_bot.png', 'bot', 0, 146, 100, 23)
loadImages()

window.disableButtons = disableButtons
window.enableButtons = enableButtons
window.buttons = buttons
