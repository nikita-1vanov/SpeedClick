"use strict";
import { Template } from "./template.js";
import { mainBlockSelector } from "./selector.js";

const WINDOW_WIDTH = window.innerWidth;
const WINDOW_HIGHT = window.innerHeight;
const MAX_COUNT_CLICK = 4;
const TIME_LIST = [];

export function addElement(child, parrent) {
  parrent.innerHTML = child;
}

function changeBestResultOnLocalStorage(time) {
  let currentBestResult = localStorage.getItem("bestResult");

  if (Number(currentBestResult) < time) {
    localStorage.setItem("bestResult", time);
    currentBestResult = localStorage.getItem("bestResult");
  }

  return currentBestResult;
}

function getAverageClickPerSecond(times) {
  const lastItemIndex = TIME_LIST.length - 1;
  let sum = 0;

  for (let i = lastItemIndex; i > 0; i--) {
    const res = times[i] - times[i - 1];
    sum += res;
  }

  return (1000 / (sum / times.length)).toFixed(2);
}

function getRandomNumber(limit) {
  return `${Math.abs(Math.floor(Math.random() * limit) + 1 - 350)}px`;
}

function saveClickTime() {
  const time = new Date().getTime();
  TIME_LIST.push(time);
}

function setNewСoordinatesForSpeedButton() {
  document.querySelector(".absolute").style.top = getRandomNumber(WINDOW_HIGHT);
  document.querySelector(".absolute").style.left =
    getRandomNumber(WINDOW_WIDTH);
}

export function startGame() {
  mainBlockSelector.firstElementChild.remove();
  addElement(Template.TIMER_BLOCK_HTML, mainBlockSelector);

  const startTimeSelector = document.querySelector(".start_time");

  setTimeout(() => {
    startTimeSelector.innerText = 2;
  }, 1000);

  setTimeout(() => {
    startTimeSelector.innerText = 1;
  }, 2000);

  setTimeout(() => {
    mainBlockSelector.firstElementChild.remove();
    addElement(Template.SPEED_BUTTON_HTML, mainBlockSelector);
  }, 3000);
}

let countClick = 1;

function clickProcessing() {
  countClick++;
  setNewСoordinatesForSpeedButton();
  saveClickTime();

  if (countClick > MAX_COUNT_CLICK) {
    const averageClickPerSecond = getAverageClickPerSecond(TIME_LIST);
    const bestResult = changeBestResultOnLocalStorage(averageClickPerSecond);
    const BEST_RESULT_BLOCK_HTML = Template.BEST_RESULT_BLOCK_HTML(bestResult);
    const RESULT_BLOCK_HTML = Template.RESULT_BLOCK_HTML(averageClickPerSecond);
    mainBlockSelector.firstElementChild.remove();

    if (bestResult <= averageClickPerSecond) {
      addElement(BEST_RESULT_BLOCK_HTML, mainBlockSelector);
    } else {
      addElement(RESULT_BLOCK_HTML, mainBlockSelector);
    }
  }
}

window.clickProcessing = clickProcessing;
window.startGame = startGame;
