"use strict";
import { ActionService } from "./actions.js";
import { CoordinatesService } from "./coordinates.js";
import { LocalStorageService } from "./storage.js";
import { Selectors } from "../elem/selectors.js";
import { TimerService } from "./timer.js";
import { Template } from "../elem/templates.js";

class App {
  actions = new ActionService();
  bestResultLocalStorage = new LocalStorageService("bestResult");
  coordinates = new CoordinatesService();
  maxCountClicksLocalStorage = new LocalStorageService("maxCountClicks");
  selectors = new Selectors();
  template = new Template();
  timer = new TimerService();
}

export const app = new App();
