const backgroundWidth = document.getElementById("background").offsetWidth
const character = document.getElementById('character')
const move = 40
let correctElements = ['1', '2', '3', '4', '5', '6']
let lifes = 3
let totalScore = 0
let leftValue = backgroundWidth/2
let elementsFrecuency = 5000

let intervalId

function backToMenu() {
  document.getElementById('menu').style.visibility = "visible"
  document.getElementById('score').style.visibility = "hidden"
  document.getElementById('lifes').style.visibility = "hidden"
  document.getElementById('gameFinish').style.visibility = "hidden"
  document.getElementById('gameOver').style.visibility = "hidden"
  totalScore = 0
  lifes = 3
  document.getElementById('score').innerText = "Puntaje: " + totalScore
  document.getElementById('lifes').innerText = "Vidas: " + lifes
}

function firstLevel() {
  document.getElementById('menu').style.visibility = "hidden"
  document.getElementById('score').style.visibility = "visible"
  document.getElementById('lifes').style.visibility = "visible"
  correctElements = ['1', '2', '3', '4', '5', '6']
  elementsFrecuency = 5000
  intervalId = window.setInterval(createElement, elementsFrecuency)
}

function secondLevel() {
  document.getElementById('menu').style.visibility = "hidden"
  document.getElementById('score').style.visibility = "visible"
  document.getElementById('lifes').style.visibility = "visible"
  correctElements = ['7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
  elementsFrecuency = 4000
  intervalId = window.setInterval(createElement, elementsFrecuency)
}

function thirdLevel() {
  document.getElementById('menu').style.visibility = "hidden"
  document.getElementById('score').style.visibility = "visible"
  document.getElementById('lifes').style.visibility = "visible"
  correctElements = ['21', '22', '23', '24', '25', '26', '27']
  elementsFrecuency = 3000
  intervalId = window.setInterval(createElement, elementsFrecuency)
}

function fourthLevel() {
  document.getElementById('menu').style.visibility = "hidden"
  document.getElementById('score').style.visibility = "visible"
  document.getElementById('lifes').style.visibility = "visible"
  correctElements = ['28', '29', '30', '31', '32', '33', '34']
  elementsFrecuency = 2000
  intervalId = window.setInterval(createElement, elementsFrecuency)
}

function createElement() {
  const imageNumber = Math.round((Math.random() * 33) + 1)
  let element = document.createElement("div")
  element.className = "element"
  element.id = imageNumber
  element.style.backgroundImage = 'url("img/' + imageNumber + '.png")'
  element.style.left = (Math.random() * (backgroundWidth - 100)) + "px"
  element.addEventListener("animationend", checkElementPosition)
  document.getElementById('background').appendChild(element)
}

function checkElementPosition(event) {
  let elementPosition = event.target.getBoundingClientRect()
  let characterPosition = character.getBoundingClientRect()
  if (elementPosition.left < characterPosition.right && elementPosition.right > characterPosition.left) {
    if (correctElements.includes(event.target.id)) {
      totalScore += 1
      document.getElementById('score').innerText = "Puntaje: " + totalScore
    } else {
      lifes -= 1
      document.getElementById('lifes').innerText = "Vidas: " + lifes
    }
    event.target.parentNode.removeChild(event.target)
  } else {
    if (correctElements.includes(event.target.id)) {
      lifes -= 1
      document.getElementById('lifes').innerText = "Vidas: " + lifes
    }
  }
  checkEndGame()
}

function checkEndGame() {
  if (totalScore >= 5) {
    clearInterval(intervalId)
    document.getElementById('gameFinish').style.visibility = "visible"
  } else if (lifes <= 0) {
    clearInterval(intervalId)
    document.getElementById('gameOver').style.visibility = "visible"
  }
}

document.onkeydown = function(e){
  if(e.key == 'ArrowRight' && leftValue < backgroundWidth - 86) {
    leftValue = leftValue + move
    character.style.left = leftValue + "px"
  } else if(e.key == 'ArrowLeft' && leftValue > 0) {
    leftValue = leftValue - move
    character.style.left = leftValue + "px"
  }
}
