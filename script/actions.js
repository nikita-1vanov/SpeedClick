"use strict";
import { Template } from "./template.js";
import { footerBlockSelector, mainBlockSelector } from "./selector.js";

const WINDOW_WIDTH = window.innerWidth;
const WINDOW_HIGHT = window.innerHeight;
const MAX_COUNT_CLICK = 10;
const TIME_LIST = [];

let countClick = 0;

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
    addElement(
      Template.SPEED_BUTTON_HTML(MAX_COUNT_CLICK, countClick),
      mainBlockSelector
    );

    if (document.querySelector(".best_result") === null) {
      document.querySelector(".count_click").style["text-align"] = "right";
    } else {
      document.querySelector(".trash").style.display = "none";
    }

    setNewСoordinatesForSpeedButton();
    const missClickHtmlBlock = document.createElement("script");
    missClickHtmlBlock.setAttribute("type", "module");
    missClickHtmlBlock.innerHTML = Template.SCRIPT_MISS_CLICK;
    document.body.appendChild(missClickHtmlBlock);
  }, 3000);
}

function clickProcessing() {
  if (document.querySelector(".best_result") !== null) {
    document.querySelector(".trash").style.display = "display";
  }
  countClick++;
  document.querySelector(".count_click").innerText = `
    Click: ${MAX_COUNT_CLICK - countClick}/${MAX_COUNT_CLICK}
  `;
  setNewСoordinatesForSpeedButton();
  saveClickTime();

  if (countClick === MAX_COUNT_CLICK) {
    if (document.querySelector(".best_result") !== null) {
      document.querySelector(".trash").style.display = "block";
    }
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

export function missProcessing(event, num) {
  const button = document.querySelector("button");
  if (!button.contains(event.target)) {
    const missText = document.createElement("div");
    missText.className = `miss-text-${num}`;
    missText.innerText = "Miss";
    missText.style.left = event.pageX + "px";
    missText.style.top = event.pageY - 25 + "px";

    setNewСoordinatesForSpeedButton();

    document.body.appendChild(missText);
    setTimeout(() => {
      document.body.removeChild(missText);
    }, 700);
  }
}

export function deleteBestResult() {
  const button = document.querySelector(".trash");
  const tooltip = document.querySelector(".tooltip");

  button.addEventListener("mouseenter", (event) => {
    tooltip.style.display = "block";
  });

  button.addEventListener("mouseleave", () => {
    tooltip.style.display = "none";
  });

  button.addEventListener("dblclick", () => {
    document.querySelector(".best_result").remove();
    footerBlockSelector.style["justify-content"] = "right";
    localStorage.removeItem("bestResult");
  });
}

window.clickProcessing = clickProcessing;
window.startGame = startGame;
