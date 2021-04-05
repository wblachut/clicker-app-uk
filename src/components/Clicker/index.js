import Materialize from "materialize-css";


export const onBtnClick = (onIncrementCount, onIncrementClicks, factor) => {
  onIncrementCount(factor);
  onIncrementClicks();
};

export const handleLvlUp = (count, lvl,  baseVal, multiplier, onLvlUp, onAddGold) => {
  const threshold = getThreshold(lvl, baseVal, multiplier);
  if (count >= threshold) {
    onLvlUp(lvl);
    onAddGold(Math.floor(lvl / 3));
    Materialize.toast({ html: "Level up!", displayLength: 1000 });
  }
};

function getThreshold(lvl, baseVal, multiplier) {
  return baseVal * multiplier ** (lvl - 1);
}

export const handleAutoClisker = (treesPerSec, interval, onIncrementCount, setInterval)=> {
  if (treesPerSec === 0) return;
  if (interval) clearInterval(interval);
  const TIME_NORMAL = 5000;
  const timestamp = TIME_NORMAL / treesPerSec;
  const newInterval = window.setInterval(() => {
    onIncrementCount(1);
  }, timestamp);
  setInterval(newInterval);
}

export const handleAchievements = (props, achievements, onAddGold, onAddAchievement) => {
  if (!achievements) return;
  achievements.forEach((achievmt) => {
    if (achievmt.isUnlocked) return;
    if (props[achievmt.type] >= achievmt.require) {
      achievmt.isUnlocked = true;
      onAddGold(2);
      onAddAchievement(achievements);
      Materialize.toast({
        html: "New achievement unlocked!",
        displayLength: 1000
      });
    }
  });
};

export const handleClickerIcon = (lvl, treeIcons) => {
  return treeIcons[lvl - 1] || treeIcons[treeIcons.length - 1];
};