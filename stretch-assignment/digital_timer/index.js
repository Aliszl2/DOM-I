let intervalDisplay = window.setInterval(cb, 10);
let cumulatedSecondTens = 0;
let cumulatedSeconds = 0;
let cumulatedmsHundred = 0;
let cumulatedmsTens = 0;
const secondTens = document.getElementById("secondTens");
const seconds = document.getElementById("secondOnes");
const msHundreds = document.getElementById("msHundreds");
const msTens = document.getElementById("msTens");
const timer = document.querySelectorAll(".digits div");
function cb() {
  cumulatedmsTens += 1;
  if (cumulatedmsTens === 10) {
    incrementmsHundreds();
  }
  if (cumulatedmsHundred === 10) {
    incrementSeconds();
  }
  if (cumulatedSeconds === 10) {
    incrementTens();
    timer.forEach(item => (item.style.color = "red"));
  }
  secondTens.textContent = cumulatedSecondTens;
  seconds.textContent = cumulatedSeconds;
  msHundreds.textContent = cumulatedmsHundred;
  msTens.textContent = cumulatedmsTens;
}
function stop() {
  window.clearInterval(intervalDisplay);
}
function incrementmsHundreds() {
  cumulatedmsTens = 0;
  cumulatedmsHundred += 1;
}
function incrementSeconds() {
  cumulatedmsHundred = 0;
  cumulatedSeconds += 1;
}
function incrementTens() {
  cumulatedSeconds = 0;
  cumulatedSecondTens = 1;
  stop();
}
console.log(timer);

// const msTens = document.querySelector(".digit #msTens ");
// console.log(msTens);
// msTens.textContent = 0;

// const msTens = document.querySelector(".digit #msTens ");
// console.log(msTens);
// const msHundreds = document.querySelector(".digit #msHundreds ");
// console.log(msHundreds);
// const secondOnes = document.querySelector(".digit #secondOnes ");
// console.log(secondOnes);
// const secondTens = document.querySelector(".digit #secondTens ");
// console.log(secondTens);
