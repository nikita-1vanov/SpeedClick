"use strict";
import { app } from "./app.js";
import { Selectors } from "../elem/selectors.js";

export class CoordinatesService {
  WINDOW_WIDTH = window.innerWidth;
  WINDOW_HIGHT = window.innerHeight;
  selectors = new Selectors();

  getRandomCoordinate(limit) {
    return `${Math.abs(Math.floor(Math.random() * limit) - 350)}px`;
  }

  setNewСoordinatesForSpeedButton() {
    app.selectors.speedButtonBlockSelector.setStyle(
      "top",
      this.getRandomCoordinate(this.WINDOW_HIGHT)
    );

    app.selectors.speedButtonBlockSelector.setStyle(
      "left",
      this.getRandomCoordinate(this.WINDOW_WIDTH)
    );
  }
}
