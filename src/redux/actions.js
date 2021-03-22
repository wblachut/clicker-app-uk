export const incrementCount = (multiplier) => {
  return {
    type: 'INCREMENT_COUNT',
    multiplier
   }
}

export const incrementClicks = () => {
  return {
    type: 'INCREMENT_CLICKS',
   }
}

export const incrementMultiplier = () => {
  return {
    type: 'INCREMENT_MULTI',
   }
}

export const incrementHelpers = () => {
  return {
    type: 'INCREMENT_HELPERS',
   }
}

export const lvlUp = (lvl) => {
  return {
    type: 'LVL_UP',
    lvl
   }
}

export const addGold = () => {
  return {
    type: 'ADD_GOLD',
   }
}

export const spendGold = () => {
  return {
    type: 'SPEND_GOLD',
   }
}

export const unlockAchievement = () => {
  return {
    // type: 'UNLOCK_ACHIEVEMENT',
    type: 'ADD_ACHIEVEMENT',
   }
}

export const clearProgress = () => {
  return {
    type: 'CLEAR_PROGRESS',
   }
}

// export { incrementCount, unlockAchievement }