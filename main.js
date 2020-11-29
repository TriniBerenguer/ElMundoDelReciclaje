const backgroundWidth = document.getElementById("background").offsetWidth
const move = 35
let leftValue = backgroundWidth/2
let numberOfElements = 10
let elementsFrecuency = 5000

function createElement() {
  const imageNumber = Math.round((Math.random() * 33) + 1)
  let element = document.createElement("div")
  element.className = "element"
  element.style.backgroundImage = 'url("img/' + imageNumber + '.png")'
  element.style.left = (Math.random() * (backgroundWidth - 100)) + "px"
  document.getElementById('background').appendChild(element)
}

document.onkeydown = function(e){
  if(e.key == 'ArrowRight' && leftValue < backgroundWidth - 86) {
    leftValue = leftValue + move
    document.getElementById('character').style.left = leftValue+"px"
  } else if(e.key == 'ArrowLeft' && leftValue > 0) {
    leftValue = leftValue - move
    document.getElementById('character').style.left = leftValue+"px"
  }
}

for (let i = 0; i < numberOfElements; i++) {
  setTimeout(() => { createElement() }, elementsFrecuency);
}