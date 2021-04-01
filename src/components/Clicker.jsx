import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  incrementCount,
  incrementClicks,
  addGold,
  lvlUp,
  addAchievement
} from "../redux/actions";
import Materialize from "materialize-css";

const Clicker = (props) => {
  const {
    count,
    factor,
    lvl,
    treesPerSec,
    achievements,
    treeIcons,
    onIncrementCount,
    onIncrementClicks,
    onLvlUp,
    onAddGold,
    onAddAchievement,
  } = props;

  const [interval, setInterval] = useState(null)

  useEffect(() => {
    if (count === 0) return;
    handleLvlUp(count);
    handleAchievements();
  }, [count]);

  useEffect(() => {
    handleAutoClisker(treesPerSec);
    console.log('handleClicker');
  }, [treesPerSec]);

  const onBtnClick = () => {
    onIncrementCount(factor);
    onIncrementClicks();
  };

  const handleLvlUp = (count) => {
    const threshold = 10 * 2 ** (lvl - 1);
    if (count >= threshold) {
      onLvlUp(lvl);
      onAddGold(Math.floor(lvl / 3));
      Materialize.toast({ html: "Level up!", displayLength: 1000 });
    }
  };

  function handleAutoClisker(treesPerSec) {
    if (treesPerSec === 0) return;
    if (interval) clearInterval(interval);
    const TIME_NORMAL = 5000;
    const timestamp = TIME_NORMAL / treesPerSec;
    const newInterval = window.setInterval(() => {
      onIncrementCount(1);
    }, timestamp);
    setInterval(newInterval);
  }

  const handleAchievements = () => {
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

  const handleClickerIcon = (lvl) => {
    return treeIcons[lvl - 1] || treeIcons[treeIcons.length - 1];
  };

  return (
    <React.Fragment>
      <button
        className="click-btn circle pulse btn-floating white"
        onClick={onBtnClick}>
        <img
          alt="click-tree-icon"
          className="clicker-img"
          src={handleClickerIcon(lvl)}
        />
      </button>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  count: state.count,
  clicks: state.clicks,
  lvl: state.lvl,
  gold: state.gold,
  planters: state.planters,
  itemsCount: state.itemsCount,
  goldTotal: state.goldTotal,
  factor: state.factor,
  treesPerSec: state.treesPerSec,
  achievements: state.achievements,
  treeIcons: state.treeIcons
});

const mapDispatchToProps = (dispatch) => ({
  onIncrementCount: (factor) => dispatch(incrementCount(factor)),
  onIncrementClicks: () => dispatch(incrementClicks()),
  onLvlUp: (lvl) => dispatch(lvlUp(lvl)),
  onAddGold: (amount) => dispatch(addGold(amount)),
  onAddAchievement: (achievements) => dispatch(addAchievement(achievements))
});

export default connect(mapStateToProps, mapDispatchToProps)(Clicker);
