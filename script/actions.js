"use strict";
import { Template } from "./elem/templates.js";
import { app } from "./app.js";

const MAX_COUNT_CLICK = 2;

let countClick = 0;

// export function addElement(child, parrent) {
//   parrent.innerHTML = child;
// }

// //=================ПОДУМАТЬ//================//================

// function changeBestResultOnLocalStorage(time) {
//   let currentBestResult =
//     app.bestResultLocalStorage.getValue();

//   if (Number(currentBestResult) > time) {
//     return currentBestResult;
//   } else {
//     return app.bestResultLocalStorage.setValue(time);
//   }
// }
// //================//================//================//================

export function startGame() {
  app.selectors.mainBlockSelector.addElement(app.template.TIMER_BLOCK_HTML);

  setTimeout(() => {
    app.selectors.startTimeSelector.setText(2);
  }, 1000);

  setTimeout(() => {
    app.selectors.startTimeSelector.setText(1);
  }, 2000);

  setTimeout(() => {
    app.selectors.mainBlockSelector.addElement(
      app.template.SPEED_BUTTON_HTML(MAX_COUNT_CLICK, countClick)
    );

    if (app.selectors.bestResultSelector === null) {
      app.selectors.countClicks.style["text-align"] = "right";
    } else {
      document.querySelector(".trash").style.display = "none";
    }

    app.coordinates.setNewСoordinatesForSpeedButton();
    const missClickHtmlBlock = document.createElement("script");
    missClickHtmlBlock.setAttribute("type", "module");
    missClickHtmlBlock.innerHTML = app.template.SCRIPT_MISS_CLICK;
    document.body.appendChild(missClickHtmlBlock);
  }, 3000);
}

// function clickProcessing() {
//   if (app.selectors.bestResultSelector !== null) {
//     document.querySelector(".trash").style.display = "display";
//   }
//   countClick++;

//   app.selectors.countClicks.innerText = `
//     Click: ${MAX_COUNT_CLICK - countClick}/${MAX_COUNT_CLICK}
//   `;
//   app.coordinates.setNewСoordinatesForSpeedButton();
//   app.timer.saveClickTime();

//   if (countClick === MAX_COUNT_CLICK) {
//     if (app.selectors.bestResultSelector !== null) {
//       document.querySelector(".trash").style.display = "block";
//     }
//     const averageClickPerSecond = app.timer.getAverageClickPerSecond();
//     const bestResult = changeBestResultOnLocalStorage(averageClickPerSecond);
//     const BEST_RESULT_BLOCK_HTML = app.template.BEST_RESULT_BLOCK_HTML(bestResult);
//     const RESULT_BLOCK_HTML = app.template.RESULT_BLOCK_HTML(averageClickPerSecond);
//     app.selectors.mainBlockSelector.firstElementChild.remove();

//     if (bestResult <= averageClickPerSecond) {
//       addElement(BEST_RESULT_BLOCK_HTML, app.selectors.mainBlockSelector);
//     } else {
//       addElement(RESULT_BLOCK_HTML, app.selectors.mainBlockSelector);
//     }
//   }
// }

// export function missProcessing(event, num) {
//   const button = document.querySelector("button");
//   if (!button.contains(event.target)) {
//     const missText = document.createElement("div");
//     missText.className = `miss-text-${num}`;
//     missText.innerText = "Miss";
//     missText.style.left = event.pageX + "px";
//     missText.style.top = event.pageY - 25 + "px";

//     app.coordinates.setNewСoordinatesForSpeedButton();

//     document.body.appendChild(missText);
//     setTimeout(() => {
//       document.body.removeChild(missText);
//     }, 700);
//   }
// }

// export function deleteBestResult() {
//   const button = document.querySelector(".trash");
//   const tooltip = document.querySelector(".tooltip");

//   button.addEventListener("mouseenter", (event) => {
//     tooltip.style.display = "block";
//   });

//   button.addEventListener("mouseleave", () => {
//     tooltip.style.display = "none";
//   });

//   button.addEventListener("dblclick", () => {
//     app.selectors.bestResultSelector.remove();
//     app.selectors.footerBlockSelector.style["justify-content"] = "right";
//     localStorage.removeItem("bestResult");
//   });
// }

// window.clickProcessing = clickProcessing;
window.startGame = startGame;
