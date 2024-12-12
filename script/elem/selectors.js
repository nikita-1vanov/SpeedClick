"use strict";
import { WebElement } from "./elements.js";

export class Selectors {
  get absoluteSelector() {
    return new WebElement(document.querySelector(".absolute"));
  }

  get bestResultSelector() {
    return new WebElement(document.querySelector(".best_result"));
  }

  get bodySelector() {
    return new WebElement(document.querySelector("body"));
  }

  get countClicks() {
    return new WebElement(document.querySelector(".count_clicks"));
  }

  create(elem) {
    return new WebElement(document.createElement(elem));
  }

  get footerBlockSelector() {
    return new WebElement(document.querySelector("footer"));
  }

  get mainBlockSelector() {
    return new WebElement(document.querySelector("main"));
  }

  get startTimeSelector() {
    return new WebElement(document.querySelector(".start_time"));
  }

  get tooltipSelector() {
    return new WebElement(document.querySelector(".tooltip"));
  }

  get trashImageSelector() {
    return new WebElement(document.querySelector(".trash"));
  }
}
