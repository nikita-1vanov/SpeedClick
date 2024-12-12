"use strict";

export class Template {
  BEST_RESULT_BLOCK_HTML(speed) {
    return `
    <div class="final">
      <img src="img/done.png" alt="" />
      <div>
        Сongratulations!
      </div>
      <div class="sub_text">
        A new record: ${speed} click/s
      </div>
      ${this.RESET_LINK_HTML}
    </div>
  `;
  }

  get FOOTER_GITHUB_LINK_HTML() {
    return `
      <a href='https://github.com/nikita-1vanov/SpeedClick'>
        github
      </a>
    `;
  }

  FOOTER_WITH_BEST_RESULT_HTML(result) {
    return `
    <div class="best_result">
      <div>
        Best result: ${result}
      </div>
      <img class="trash" src="./img/basket.png"></img>
      <div class="tooltip">
        Double click to delete
      </div>
    </div>
    ${this.FOOTER_GITHUB_LINK_HTML}`;
  }

  get RESET_LINK_HTML() {
    return `
      <a onclick="location.reload()">
        Run again
      </a>`;
  }

  RESULT_BLOCK_HTML(speed) {
    return `
    <div class="final">
      <img src="img/sad.png" alt="" />
      <div>
        You can better!
      </div>
      <div class="sub_text">
        Result: ${speed} click/s
      </div>
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
    <div class="absolute">
      <button class="button speed_button" onclick="clickProcessing()">
        Click
      </button>
    </div>
    <div class="count_clicks">
      Click: ${allCountClick - currenCountClick}/${allCountClick}
    </div>
  `;
  }

  get START_BUTTON_HTML() {
    return `
    <button class="button start_button" onclick=startGame()>
      GO
    </button>
  `;
  }

  get TIMER_BLOCK_HTML() {
    return `
    <div class="timer">
      <div class="start_time">
        3
      </div>
      <div class="sub_text">
        Click on circle!
      </div>
    </div>
  `;
  }
}
