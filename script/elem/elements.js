"use strict"

export class WebElement {
    constructor(locator) {
        this.locator = locator;
    }

    addElement(temp) {
      this.locator.innerHTML = temp;
    }

    setStyle(key, value) {
      this.locator.style[key] = value
    }

    setText(text) {
      this.locator.innerText = text
    }
}