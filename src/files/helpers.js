export const dirtyIntervalClear = () => {
  for (let i = 0; i < 100; i++) {
    window.clearInterval(i);
  }
};