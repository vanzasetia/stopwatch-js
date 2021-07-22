'use strict';
(function () {
  // ELEMENTS
  const themeToggle = document.querySelector('.js-themeToggle')
  const minutesDOM = document.querySelector('.js-minutesDOM')
  const secondsDOM = document.querySelector('.js-secondsDOM')
  const milisecondsDOM = document.querySelector('.js-milisecondsDOM')
  const startBtn = document.querySelector('.js-startBtn')
  const pauseBtn = document.querySelector('.js-pauseBtn')
  const resetBtn = document.querySelector('.js-resetBtn')
  const year = document.querySelector('.js-year')
  
  // VARIABLES
  let stopwatchStart = false
  let miliseconds = 0
  let seconds = 0
  let minutes = 0
  let milisecondsTimer
  
  // ADD EVENT LISTENERS
  document.addEventListener('DOMContentLoaded', getYear)
  startBtn.addEventListener('click', startStopwatch)
  pauseBtn.addEventListener('click', pauseStopwatch)
  resetBtn.addEventListener('click', resetStopwatch)
  themeToggle.addEventListener('click', toggleDark)
  
  // FUNCTIONS
  function toggleDark() {
    document.body.classList.toggle('dark')
  }
  
  function startStopwatch() {
    if (!stopwatchStart) {
      stopwatchStart = true
      countUp()
    }
  
    startBtn.disabled = true
    pauseBtn.disabled = false
    resetBtn.disabled = false
  }
  
  function countUp() {
    milisecondsCount()
  }
  
  function milisecondsCount() {
    milisecondsDOM.textContent = addZero(miliseconds)
    miliseconds++
    milisecondsTimer = setTimeout(countUp, 10)
  
    if (miliseconds > 99) {
      miliseconds = 0
      seconds++
      secondsDOM.textContent = addZero(seconds)
    }
  
    if (seconds > 59) {
      seconds = 0
      secondsDOM.textContent = addZero(seconds)
      minutes++
      minutesDOM.textContent = addZero(minutes)
    }
  }
  
  function addZero(number) {
    if (number < 10) {
      return `0${number}`
    } else {
      return number
    }
  }
  
  function pauseStopwatch() {
    clearTimeout(milisecondsTimer)
    stopwatchStart = false
  
    startBtn.disabled = false
    pauseBtn.disabled = true
  }
  
  function resetStopwatch() {
    clearTimeout(milisecondsTimer)
    stopwatchStart = false
  
    miliseconds = 0
    seconds = 0
    minutes = 0
  
    milisecondsDOM.textContent = addZero(miliseconds)
    secondsDOM.textContent = addZero(seconds)
    minutesDOM.textContent = addZero(minutes)
  
    startBtn.disabled = false
    pauseBtn.disabled = true
    resetBtn.disabled = true
  }
  
  function getYear() {
  year.textContent = new Date().getFullYear()
  }
})()
