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
import Materialize from "materialize-css";

const Clicker = (props) => {
  const {
    count,
    factor,
    lvl,
    onIncrementCount,
    onIncrementClicks,
    onLvlUp,
    onAddGold,
    treesPerSec,
    achievements,
    onAddAchievement
  } = props;

  useEffect(() => {
    handleLvlUp(count);
    handleAchievements();
  }, [count]);

  useEffect(() => {
    handleAutoClisker(treesPerSec);
  }, [treesPerSec]);

  const onBtnClick = () => {
    onIncrementCount(factor);
    onIncrementClicks();
    // handleLvlUp(count);
    // handleAchievements();
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
    const timestamp = TIME_NORMAL / treesPerSec
    const interval = window.setInterval(() => {
      onIncrementCount(1);
      // handleLvlUp(count);
      // handleAchievements();
    }, timestamp);
    return interval;
  }

  const handleAchievements = () => {
    // console.log('Achevement Check', achievements);
    achievements.forEach(achievmt => {
      if (achievmt.isUnlocked === true) return
      if (props[achievmt.type] >= achievmt.require) {
        achievmt.isUnlocked = true;
        onAddGold();
        onAddAchievement();
      }
    })
    // let type = achievmt.type
    //   achievements.find(achievmt => (achievmt.require >= props[achievmt.type]) {
    //   achievmt.required >= props[type] ? achievmt.isUnlocked = "true"
    //   onAddGold();
    // })
  };

  const dirtyIntervalClear = () => {
    for (let i = 0; i < 100; i++) {
      window.clearInterval(i);
    }
  };

  return (
    <React.Fragment>
      <button
        // pulse
        className="click-btn circle btn-floating white"
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
  interval: state.interval,
  factor: state.factor,
  treesPerSec: state.treesPerSec,
  achievements: state.achievements
});

const mapDispatchToProps = (dispatch) => ({
  onIncrementCount: (factor) => dispatch(incrementCount(factor)),
  onIncrementClicks: () => dispatch(incrementClicks()),
  onLvlUp: (lvl) => dispatch(lvlUp(lvl)),
  onAddGold: () => dispatch(addGold()),
  onAddAchievement: () => dispatch(addAchievement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Clicker);
