import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  incrementCount,
  incrementClicks,
  addGold,
  lvlUp,
  addAchievement
} from "../redux/actions";
import { treeIcons } from "../files/tree-icons";
import { dirtyIntervalClear } from "../files/helpers";
import Materialize from "materialize-css";

const Clicker = (props) => {
  const {
    count,
    factor,
    lvl,
    treesPerSec,
    achievements,
    planters,
    itemsCount,
    goldTotal,
    onIncrementCount,
    onIncrementClicks,
    onLvlUp,
    onAddGold,
    onAddAchievement
  } = props;

  useEffect(() => {
    if (count === 0) return;
    handleLvlUp(count);
    handleAchievements();
  }, [count]);

  useEffect(() => {
    handleAutoClisker(treesPerSec);
  }, [treesPerSec]);

  const onBtnClick = () => {
    onIncrementCount(factor);
    onIncrementClicks();
  };

  const handleLvlUp = (count) => {
    const treshold = 10 * 2 ** (lvl - 1);
    if (count >= treshold - 1) {
      onLvlUp(lvl);
      console.log("lvl UP to:", lvl + 1);
      onAddGold();
      // Materialize.toast("Level up!", 4000, "rounded");
    }
  };

  function handleAutoClisker(treesPerSec) {
    if (treesPerSec === 0) return;
    dirtyIntervalClear();
    // Materialize.Toast.removeAll();
    const TIME_NORMAL = 5000;
    const timestamp = TIME_NORMAL / treesPerSec;
    const interval = window.setInterval(() => {
      onIncrementCount(1);
    }, timestamp);
    return interval;
  }

  const handleAchievements = () => {
    if (!achievements) return;
    achievements.forEach((achievmt) => {
      if (achievmt.isUnlocked === true) return;
      if (props[achievmt.type] >= achievmt.require) {
        achievmt.isUnlocked = true;
        onAddGold();
        onAddAchievement(achievements);
      }
    });
  };

  const handleClickerIcon = (lvl) => {
    const clickerIcon = treeIcons[lvl - 1] || treeIcons[-1];
    return clickerIcon
  };

  return (
    <React.Fragment>
      <button
        // pulse
        className="click-btn circle pulse btn-floating white"
        onClick={onBtnClick}>
        <img
          alt="click-tree-icon"
          className="clicker-img"
          src={treeIcons[lvl - 1] || treeIcons[-1]}
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
  achievements: state.achievements
});

const mapDispatchToProps = (dispatch) => ({
  onIncrementCount: (factor) => dispatch(incrementCount(factor)),
  onIncrementClicks: () => dispatch(incrementClicks()),
  onLvlUp: (lvl) => dispatch(lvlUp(lvl)),
  onAddGold: () => dispatch(addGold()),
  onAddAchievement: (achievements) => dispatch(addAchievement(achievements))
});

export default connect(mapStateToProps, mapDispatchToProps)(Clicker);
