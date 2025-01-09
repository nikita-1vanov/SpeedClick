"use strict";
import { WebElement } from "./elements.js";

export class Selectors {
  get speedButtonBlockSelector() {
    return new WebElement(document.querySelector(".main__speed-button-block"));
  }

  get bestResultSelector() {
    return new WebElement(document.querySelector(".footer__best-result-block"));
  }

  get bodySelector() {
    return new WebElement(document.querySelector("body"));
  }

  get countClicks() {
    return new WebElement(document.querySelector(".main__count-clicks"));
  }

  create(elem) {
    return new WebElement(document.createElement(elem));
  }

  get errorMessageSelector() {
    return new WebElement(document.querySelector(".modal__error-message"));
  }

  get footerBlockSelector() {
    return new WebElement(document.querySelector("footer"));
  }

  get iconSettingsSelector() {
    return new WebElement(document.querySelector(".header__settings-img"));
  }

  get inputSettingsSelector() {
    return new WebElement(document.querySelector(".modal__input"));
  }

  get mainBlockSelector() {
    return new WebElement(document.querySelector("main"));
  }

  get modalSettingsSelector() {
    return new WebElement(document.querySelector(".modal__block"));
  }

  get timerSelector() {
    return new WebElement(document.querySelector(".main__timer"));
  }

  get tooltipSelector() {
    return new WebElement(
      document.querySelector(".footer__best-result-tooltip")
    );
  }

  get trashImageSelector() {
    return new WebElement(document.querySelector(".footer__best-result-img"));
  }
}
