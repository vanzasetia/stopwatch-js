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

// ADD EVENT LISTENERS
document.addEventListener('DOMContentLoaded', getYear)
startBtn.addEventListener('click', startStopwatch)
stopBtn.addEventListener('click', stopStopwatch)
resetBtn.addEventListener('click', resetStopwatch)
themeToggle.addEventListener('click', toggleDark)


// FUNCTIONS

// TOGGLE DARK THEME
function toggleDark() {
  document.body.classList.toggle('dark')
}

// Get Current Year
function getYear() {
  currentYear.textContent = new Date().getFullYear()
}

// Reset Stopwatch
function resetStopwatch() {
  clearTimeout(milisecondsTimer)
  timerOn = false
  
  miliseconds = 0
  seconds = 0
  minutes = 0
  
  milisecondsNumber.textContent = addZero(miliseconds)
  secondsNumber.textContent = addZero(seconds)
  minutesNumber.textContent = addZero(minutes)
  
  startBtn.disabled = false
  stopBtn.disabled = true
  resetBtn.disabled = true
}

// Stop Stopwatch
function stopStopwatch() {
  clearTimeout(milisecondsTimer)
  timerOn = false
  
  startBtn.disabled = false
  stopBtn.disabled = true
}

// Start Stopwatch 
function startStopwatch() {
  if(!timerOn) {
    timerOn = true
    countUp()
  }
  
  startBtn.disabled = true
  stopBtn.disabled = false
  resetBtn.disabled = false
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