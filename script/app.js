"use strict";
import { CoordinatesService } from "./services/coordinates.js";
import { Selectors } from "./elem/selectors.js";
// import { addElement, deleteBestResult } from "./actions.js";
import { LocalStorageService } from "./services/storage.js";
import { TimerService } from "./services/timer.js";
import { Template } from "./elem/templates.js";

class App {
  bestResultLocalStorage = new LocalStorageService("bestResult");
  coordinates = new CoordinatesService();
  selectors = new Selectors();
  timer = new TimerService();
  template = new Template();
}

export const app = new App();

const BEST_RESULT = app.bestResultLocalStorage.getValue();

if (BEST_RESULT) {
  app.selectors.footerBlockSelector.addElement(
    app.template.FOOTER_WITH_BEST_RESULT_HTML(BEST_RESULT)
  );

  app.selectors.footerBlockSelector.setStyle("display", "flex");
  app.selectors.footerBlockSelector.setStyle(
    "justify-content",
    "space-between"
  );

  // deleteBestResult();
} else {
  app.selectors.footerBlockSelector.addElement(app.template.FOOTER_GITHUB_LINK_HTML);
}

app.selectors.mainBlockSelector.addElement(app.template.START_BUTTON_HTML);
