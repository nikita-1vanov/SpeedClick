"use strict";

const WINDOW_WIDTH = window.innerWidth;
const WINDOW_HIGHT = window.innerHeight;
const MAX_COUNT_CLICK = 51;
const TIME_LIST = [];

const speedButtonHtml =
  '<button class="button speed_button" onclick="clickProcessing()"></button>';
const resetTestHtml = '<a href="/">Test again</a>';

const startBlockSelector = document.querySelector(".start");
const finalBlockSelector = document.querySelector(".final");
const poligonBlockSelector = document.querySelector(".poligon");
const absoluteBlockSelector = document.querySelector(".absolute");
const startButtonSelector = document.querySelector(".start_button");
const startTimeSelector = document.querySelector(".start_time");
const timerBlockSelector = document.querySelector(".timer");

function addElement(child, parrent) {
  const newElement = document.createElement("div");
  newElement.innerHTML = child;
  parrent.appendChild(newElement);
}

function getSpeedClick(times) {
  const lastItemIndex = TIME_LIST.length - 1;
  let sum = 0;

  for (let i = lastItemIndex; i > 0; i--) {
    const res = times[i] - times[i - 1];
    sum += res;
  }

  return 1000 / (sum / times.length);
}

function saveClickTime() {
  const time = new Date().getTime();
  TIME_LIST.push(time);
}

function setNewСoordinatesForSpeedButton() {
  absoluteBlockSelector.style.top = `${Math.abs(
    Math.floor(Math.random() * WINDOW_HIGHT) + 1 - 350
  )}px`;

  absoluteBlockSelector.style.left = `${Math.abs(
    Math.floor(Math.random() * WINDOW_WIDTH) + 1 - 350
  )}px`;
}

startButtonSelector.addEventListener("click", function () {
  startBlockSelector.classList.add("hide");
  timerBlockSelector.classList.remove("hide");

  setTimeout(() => {
    startTimeSelector.innerText = 2;
  }, 1000);

  setTimeout(() => {
    startTimeSelector.innerText = 1;
  }, 2000);

  setTimeout(() => {
    timerBlockSelector.classList.add("hide");
    addElement(speedButtonHtml, poligonBlockSelector);
  }, 3000);
});

let countClick = 1;

function clickProcessing() {
  countClick++;

  setNewСoordinatesForSpeedButton();
  saveClickTime();

  if (countClick > MAX_COUNT_CLICK) {
    poligonBlockSelector.classList.add("hide");
    finalBlockSelector.classList.remove("hide");

    const speedClickResult = getSpeedClick(TIME_LIST);
    const speedClickResultHtml = `<div class="sub_text">Your speed: ${speedClickResult.toFixed(
      2
    )} click/s</div>`;

    addElement(speedClickResultHtml, finalBlockSelector);
    addElement(resetTestHtml, finalBlockSelector);
  }
}
