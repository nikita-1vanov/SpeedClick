"use strict";

export const Template = {
  BEST_RESULT_BLOCK_HTML: (speed) => {
    return `
    <div class="final">
      <img src="img/done.png" alt="" />
      <div>Сongratulations!</div>
      <div class="sub_text">
        A new record: ${speed} click/s
      </div>
      ${Template.RESET_LINK_HTML}
    </div>
  `;
  },

  FOOTER_GITHUB_LINK_HTML: `
    <a href='https://github.com/nikita-1vanov/SpeedClick'>github</a>
  `,

  FOOTER_WITH_BEST_RESULT_HTML: (result) => {
    return `
    <div class="best_result">
      <div>Best result: ${result}</div><img class="trash" src="./img/basket.png"></img>
      <div class="tooltip">Double click to delete</div>
    </div>
    ${Template.FOOTER_GITHUB_LINK_HTML}`;
  },

  RESET_LINK_HTML: '<a onclick="location.reload()">Run again</a>',

  RESULT_BLOCK_HTML: (speed) => {
    return `
    <div class="final">
    <img src="img/sad.png" alt="" />
    <div>You can better!</div>
    <div class="sub_text">Result: ${speed} click/s</div>
    ${Template.RESET_LINK_HTML}
    </div>
  `;
  },

  SCRIPT_MISS_CLICK: ` 
    import { missProcessing } from './script/actions.js';
    let count = 1;
    document.body.addEventListener("click", (event) => missProcessing(event));
    count++
  `,

  SPEED_BUTTON_HTML: (allCountClick, currenCountClick) => {
    return `
    <div class="absolute">
      <button class="button speed_button" onclick="clickProcessing()">Click</button>
    </div>
    <div class="count_click">
      Click: ${allCountClick - currenCountClick}/${allCountClick}
    </div>
  `;
  },

  START_BUTTON_HTML: `
    <button class="button start_button" onclick=startGame()>GO</button>
  `,

  TIMER_BLOCK_HTML: `
    <div class="timer">
      <div class="start_time">3</div>
      <div class="sub_text">Click on circle!</div>
    </div>
  `,
};
