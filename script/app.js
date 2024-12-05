"use strict";
import { Template } from "./template.js";
import { addElement } from "./actions.js";
import { footerBlockSelector, mainBlockSelector } from "./selector.js";

const BEST_RESULT = localStorage.getItem("bestResult");

if (BEST_RESULT) {
  addElement(
    Template.FOOTER_WITH_BEST_RESULT_HTML(BEST_RESULT),
    footerBlockSelector
  );
  footerBlockSelector.style.display = "flex";
  footerBlockSelector.style["justify-content"] = "space-between";
} else {
  addElement(Template.FOOTER_GITHUB_LINK_HTML, footerBlockSelector);
}

mainBlockSelector.firstElementChild.remove();
addElement(Template.START_BUTTON_HTML, mainBlockSelector);
