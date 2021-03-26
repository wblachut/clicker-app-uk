export const dirtyIntervalClear = (ids) => {
  for (let i = 0; i < ids; i++) {
    window.clearInterval(i);
  }
};