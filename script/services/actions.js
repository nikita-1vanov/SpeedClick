"use strict";
import { app } from "./app.js";

export class ActionService {
  addBestResultPage(result) {
    app.selectors.mainBlockSelector.addElement(
      app.template.BEST_RESULT_BLOCK_HTML(result)
    );
  }

  addFooterWithBestResult(bestResult) {
    app.selectors.footerBlockSelector.addElement(
      app.template.FOOTER_WITH_BEST_RESULT_HTML(bestResult)
    );

    this.deleteBestResult();
    app.selectors.footerBlockSelector.setStyle("display", "flex");
    app.selectors.footerBlockSelector.setStyle(
      "justify-content",
      "space-between"
    );
  }

  addFooterWithoutBestResult() {
    app.selectors.footerBlockSelector.addElement(
      app.template.FOOTER_GITHUB_LINK_HTML
    );
  }

  addMissClickScript() {
    const missClickHtmlBlock = app.selectors.create("script");
    missClickHtmlBlock
      .setAttribute("type", "module")
      .addElement(app.template.SCRIPT_MISS_CLICK);
    app.selectors.bodySelector.appendElement(missClickHtmlBlock.locator);
  }

  addMissClickText(event) {
    const missTextElement = app.selectors.create("div");
    return missTextElement
      .setClass(`miss-text`)
      .setText("Miss")
      .setStyle("left", `${event.pageX}px`)
      .setStyle("top", `${event.pageY - 25}px`);
  }

  addResultPage(result) {
    app.selectors.mainBlockSelector.addElement(
      app.template.RESULT_BLOCK_HTML(result)
    );
  }

  addSpeedButton(maxCountClick, countClick) {
    app.selectors.mainBlockSelector.addElement(
      app.template.SPEED_BUTTON_HTML(maxCountClick, countClick)
    );
  }

  addStartButton() {
    app.selectors.mainBlockSelector.addElement(app.template.START_BUTTON_HTML);
  }

  addTimerInMain() {
    app.selectors.mainBlockSelector.addElement(app.template.TIMER_BLOCK_HTML);
  }

  changeBestResultOnLocalStorage(time) {
    let currentBestResult = app.bestResultLocalStorage.getValue();
    if (Number(currentBestResult) > time) {
      return currentBestResult;
    } else {
      return app.bestResultLocalStorage.setValue(time);
    }
  }

  changeClickCounter(maxCountClick, countClick) {
    app.selectors.countClicks.setText(`
    Click: ${maxCountClick - countClick}/${maxCountClick}
  `);
  }

  changeFooterWhenSpeedButtonBlock() {
    if (app.selectors.bestResultSelector.locator === null) {
      app.selectors.countClicks.setStyle("text-align", "right");
    } else {
      app.selectors.trashImageSelector.setStyle("display", "none");
    }
  }

  changeTimer(value, delay) {
    setTimeout(() => {
      app.selectors.startTimeSelector.setText(value);
    }, delay);
  }

  deleteBestResult() {
    app.selectors.trashImageSelector.addEventListener("mouseenter", () => {
      app.selectors.tooltipSelector.setStyle("display", "block");
    });

    app.selectors.trashImageSelector.addEventListener("mouseleave", () => {
      app.selectors.tooltipSelector.setStyle("display", "none");
    });

    app.selectors.trashImageSelector.addEventListener("dblclick", () => {
      app.bestResultLocalStorage.delValue();
      app.selectors.bestResultSelector.delete();
      app.selectors.footerBlockSelector.setStyle("justify-content", "right");
    });
  }

  hideTrashImage() {
    if (app.selectors.bestResultSelector.locator !== null) {
      app.selectors.trashImageSelector.setStyle("display", "none");
    }
  }
}
