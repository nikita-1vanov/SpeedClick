"use strict";

export class LocalStorageService {
  key = "";

  constructor(key) {
    this.key = key;
  }

  getValue() {
    return localStorage.getItem(this.key);
  }

  setValue(data) {
    localStorage.setItem(this.key, data);
    return data;
  }

  delValue() {
    localStorage.removeItem(this.key);
  }
}
