"use strict";
import { TOTAL_COUNT_CLICK, COUNT_CLICK } from "../main.js";

export class Template {
  ACCUARACY_RESULT_HTML(result) {
    return `
    <div class="main__sub-text">
      Miss click: ${TOTAL_COUNT_CLICK - COUNT_CLICK} (${result}%)
    </div>
    `;
  }

  BEST_RESULT_BLOCK_HTML(speed, missClickPercent) {
    return `
    <div class="final">
      <img src="img/done.png" alt="" />
      <div>
        Сongratulations!
      </div>
      <div class="main__sub-text">
        A new record: ${speed} click/s
      </div>
      ${this.ACCUARACY_RESULT_HTML(missClickPercent)}
      ${this.RESET_LINK_HTML}
    </div>
  `;
  }

  get FOOTER_GITHUB_LINK_HTML() {
    return `
      <div class="footer__github-block">
        <img class="footer__git-img" src="./img/github.png">
        <a class="footer__github-link" href='https://github.com/nikita-1vanov/SpeedClick'>
          1.0.0
        </a>
      </div>
    `;
  }

  FOOTER_WITH_BEST_RESULT_HTML(result) {
    return `
    <div class="footer__best-result-block">
      <div>
        Best result: ${result}
      </div>
      <img class="footer__best-result-img" src="./img/basket.png"></img>
      <div class="footer__best-result-tooltip">
        Double click to delete
      </div>
    </div>
    ${this.FOOTER_GITHUB_LINK_HTML}`;
  }

  get RESET_LINK_HTML() {
    return `
      <a class="main__reset-link" onclick="location.reload()">
        Run again
      </a>`;
  }

  RESULT_BLOCK_HTML(speed, missClickPercent) {
    return `
    <div class="final">
      <img src="img/sad.png" alt="" />
      <div>
        You can better!
      </div>
      <div class="main__sub-text">
        Speed: ${speed} click/s
      </div>
      ${this.ACCUARACY_RESULT_HTML(missClickPercent)}
      ${this.RESET_LINK_HTML}
    </div>
  `;
  }

  get SCRIPT_MISS_CLICK() {
    return ` 
    let count = 1;
    document.body.addEventListener("click", (event) => missProcessing(event, count));
    count++
  `;
  }

  SPEED_BUTTON_HTML(allCountClick, currenCountClick) {
    return `
    <div class="main__speed-button-block">
      <button class="main__speed-button" onclick="clickProcessing()">
        Click
      </button>
    </div>
    <div class="main__count-clicks">
      Click: ${allCountClick - currenCountClick}/${allCountClick}
    </div>
  `;
  }

  get START_BUTTON_HTML() {
    return `
    <button class="main__start-button" onclick=startGame()>
      GO
    </button>
  `;
  }

  get TIMER_BLOCK_HTML() {
    return `
    <div>
      <div class="main__timer">
        3
      </div>
      <div class="main__sub-text">
        Click on circle!
      </div>
    </div>
  `;
  }
}
