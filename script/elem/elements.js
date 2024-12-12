"use strict";
export class WebElement {
  constructor(locator) {
    this.locator = locator;
  }

  addElement(temp) {
    this.locator.innerHTML = temp;
    return this;
  }

  addEventListener(type, callbackFunc) {
    this.locator.addEventListener(type, callbackFunc);
    return this;
  }

  appendElement(elem) {
    this.locator.appendChild(elem);
    return this;
  }

  delete() {
    this.locator.remove();
    return this;
  }

  removeElement(elem) {
    this.locator.removeChild(elem);
    return this;
  }

  setAttribute(key, value) {
    this.locator.setAttribute(key, value);
    return this;
  }

  setClass(name) {
    this.locator.className = name;
    return this;
  }

  setStyle(key, value) {
    this.locator.style[key] = value;
    return this;
  }

  setText(text) {
    this.locator.innerText = text;
    return this;
  }
}
