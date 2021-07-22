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
  
  // FUNCTIONS
  function getYear() {
  year.textContent = new Date().getFullYear()
  }
})()