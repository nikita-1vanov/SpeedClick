"use strict";
import { app } from "./services/app.js";

let BEST_RESULT = app.bestResultLocalStorage.getValue();
let MAX_COUNT_CLICK = app.actions.getMaxCountClick();
export let COUNT_CLICK = 0;
export let TOTAL_COUNT_CLICK = 0;

app.actions.addStartButton();

BEST_RESULT
  ? app.actions.addFooterWithBestResult(BEST_RESULT)
  : app.actions.addFooterWithoutBestResult();

export function startGame() {
  app.actions.addTimerInMain();
  app.actions.changeTimer(2, 1000);
  app.actions.changeTimer(1, 2000);
  setTimeout(() => {
    app.actions.addSpeedButton(MAX_COUNT_CLICK, COUNT_CLICK);
    app.actions.changeFooterWhenSpeedButtonBlock();
    app.actions.hideIconSettings();
    app.coordinates.setNewСoordinatesForSpeedButton();
    app.actions.addMissClickScript();
  }, 3000);
}

function missProcessing(event) {
  const button = document.querySelector("button");
  if (!button.contains(event.target)) {
    TOTAL_COUNT_CLICK++;
    const missTextElement = app.actions.addMissClickText(event);
    app.coordinates.setNewСoordinatesForSpeedButton();

    app.selectors.bodySelector.appendElement(missTextElement.locator);
    setTimeout(() => {
      app.selectors.bodySelector.removeElement(missTextElement.locator);
    }, 700);
  }
}

function clickProcessing() {
  COUNT_CLICK++;
  TOTAL_COUNT_CLICK++;
  app.actions.changeClickCounter(MAX_COUNT_CLICK, COUNT_CLICK);

  app.coordinates.setNewСoordinatesForSpeedButton();
  app.timer.saveClickTime();

  if (COUNT_CLICK === MAX_COUNT_CLICK) {
    const missClickPercent = app.actions.getMissClickPercent(
      TOTAL_COUNT_CLICK,
      COUNT_CLICK
    );
    const averageClickPerSecond = app.timer.getAverageClickPerSecond();
    BEST_RESULT = app.actions.changeBestResultOnLocalStorage(
      averageClickPerSecond
    );

    if (BEST_RESULT <= averageClickPerSecond) {
      app.actions.addBestResultPage(BEST_RESULT, missClickPercent);
    } else {
      app.actions.addResultPage(averageClickPerSecond, missClickPercent);
    }
    app.selectors.trashImageSelector.setStyle("display", "block");
    app.selectors.iconSettingsSelector.setStyle("display", "block");
  }
}

function changeMaxCountClickLocalStorage() {
  const maxCountClicks = app.selectors.inputSettingsSelector.getValue();
  if (maxCountClicks === "") {
    app.selectors.errorMessageSelector.setText("The value must not be empty");
  } else if (maxCountClicks % 1 !== 0) {
    app.selectors.errorMessageSelector.setText("The value must be integer");
  } else if (Number(maxCountClicks) < 2 || Number(maxCountClicks) > 999) {
    app.selectors.errorMessageSelector.setText(
      "The value must be between 2 and 999"
    );
  } else {
    app.maxCountClicksLocalStorage.setValue(maxCountClicks);
    app.selectors.errorMessageSelector.setText("");
    location.reload();
  }
}

function setVisibilitySettingsModal(option) {
  app.selectors.errorMessageSelector.setText("");
  app.selectors.modalSettingsSelector.setStyle("display", option);
}

window.clickProcessing = clickProcessing;
window.changeMaxCountClickLocalStorage = changeMaxCountClickLocalStorage;
window.missProcessing = missProcessing;
window.setVisibilitySettingsModal = setVisibilitySettingsModal;
window.startGame = startGame;
