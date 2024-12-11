export class TimerService {
  TIME_LIST = [];

  saveClickTime() {
    const time = new Date().getTime();
    this.TIME_LIST.push(time);
  }

  getAverageClickPerSecond() {
    const lastItemIndex = this.TIME_LIST.length - 1;
    let sum = 0;

    for (let i = lastItemIndex; i > 0; i--) {
      const res = this.TIME_LIST[i] - this.TIME_LIST[i - 1];
      sum += res;
    }

    return (1000 / (sum / this.TIME_LIST.length)).toFixed(2);
  }
}
