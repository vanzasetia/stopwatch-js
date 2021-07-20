// DOM ELEMENTS
const themeToggle = document.querySelector('.js-themeToggle')
const minutesNumber = document.querySelector('.js-minutesNumber')
const secondsNumber = document.querySelector('.js-secondsNumber')
const milisecondsNumber = document.querySelector('.js-milisecondsNumber')
const startBtn = document.querySelector('.js-startBtn')
const stopBtn = document.querySelector('.js-stopBtn')
const resetBtn = document.querySelector('.js-resetBtn')
const currentYear = document.querySelector('.js-currentYear')

// VARIABLES
let timerOn = false
let miliseconds = 0
let seconds = 0
let minutes = 0
let milisecondsTimer
let secondsTimer
let minutesTimer

// ADD EVENT LISTENERS
document.addEventListener('DOMContentLoaded', getYear)
startBtn.addEventListener('click', startStopwatch)


// FUNCTIONS
function getYear() {
  currentYear.textContent = new Date().getFullYear()
}

function startStopwatch() {
  if(!timerOn) {
    timerOn = true
    countUp()
  }
}

function countUp() {
  milisecondsCount()
}

function milisecondsCount() {
  milisecondsNumber.textContent = addZero(miliseconds)
  miliseconds++
  milisecondsTimer = setTimeout(countUp, 10);
  
  if (miliseconds > 99) {
    miliseconds = 0
    seconds++
    secondsNumber.textContent = addZero(seconds)
  }
  
  if (seconds > 59) {
    seconds = 0
    secondsNumber.textContent = addZero(seconds)
    minutes++
    minutesNumber.textContent = addZero(minutes)
  }
}

function addZero(number) {
  if (number < 10) {
    return `0${number}`
  } else {
    return number
  }
}