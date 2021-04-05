export const dirtyIntervalClear = (intervalIDsNumber) => {
  for (let i = 1; i < intervalIDsNumber; i++) {
    window.clearInterval(i);
  }
};