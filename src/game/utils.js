export function intervalTimer() {
  let t = 0;

  return (time, interval) => {
    t += time;
    if (t >= interval) {
      t = 0;
      return true;
    }
  }
}