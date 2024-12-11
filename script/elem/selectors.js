"use strict"
import { WebElement } from "./elements.js";

export class Selectors {
  get absoluteSelector() {
    return new WebElement(document.querySelector(".absolute"));
  }

  get bestResultSelector() {
    return new WebElement(document.querySelector(".best_result"));
  }

  get countClicks() {
    return new WebElement(document.querySelector(".count_clicks"));
  }

  get startTimeSelector() {
    return new WebElement(document.querySelector(".start_time"));
  }

  get footerBlockSelector() {
    return new WebElement(document.querySelector("footer"));
  }

  get mainBlockSelector() {
    return new WebElement(document.querySelector("main"));
  }
}
