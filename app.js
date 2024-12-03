"use strict";

const WINDOW_WIDTH = window.innerWidth;
const WINDOW_HIGHT = window.innerHeight;
const MAX_COUNT_CLICK = 7;
const TIME_LIST = [];

const speedButtonHtml =
  '<button class="button speed_button" onclick="clickProcessing()">Click</button>';
const resetTestHtml = '<a onclick="location.reload()">Run again</a>';

const startBlockSelector = document.querySelector(".start");
const finalBlockSelector = document.querySelector(".final");
const poligonBlockSelector = document.querySelector(".poligon");
const absoluteBlockSelector = document.querySelector(".absolute");
const startButtonSelector = document.querySelector(".start_button");
const startTimeSelector = document.querySelector(".start_time");
const timerBlockSelector = document.querySelector(".timer");
const footerBlockSelector = document.querySelector("footer");

const bestResult = localStorage.getItem("bestResult");
const bestResultHtml = `<div class="best_result">Best result: ${bestResult}</div>`;
const githubHtml = "<div>github</div>";

if (bestResult) {
  addElement(bestResultHtml, footerBlockSelector);
  footerBlockSelector.style.display = "flex";
  footerBlockSelector.style["justify-content"] = "space-between";
}

addElement(githubHtml, footerBlockSelector);

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

  return (1000 / (sum / times.length)).toFixed(2);
}

function changeBestResult(time) {
  let currentBestResult = localStorage.getItem("bestResult");

  if (Number(currentBestResult) < time) {
    localStorage.setItem("bestResult", time);
    currentBestResult = localStorage.getItem("bestResult");
  }

  return currentBestResult;
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
    const bestResult = changeBestResult(speedClickResult);
    const speedClickResultHtml = `
    <div>You can better!</div>
    <div class="sub_text">Result: ${speedClickResult} click/s</div>
    `;

    const newRecordHtml = `
    <img src="img/done.png" alt="" />
    <div>Сongratulations!</div>
    <div class="sub_text">A new record: ${bestResult} click/s</div>
    `;

    if (bestResult <= speedClickResult) {
      addElement(newRecordHtml, finalBlockSelector);
    } else {
      addElement(speedClickResultHtml, finalBlockSelector);
    }
    addElement(resetTestHtml, finalBlockSelector);
  }
}
