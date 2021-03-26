export const dirtyIntervalClear = () => {
  for (let i = 0; i < 1000; i++) {
    window.clearInterval(i);
  }
};