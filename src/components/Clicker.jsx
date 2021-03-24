import React from "react";
import { connect } from "react-redux";
import {
  incrementCount,
  addGold,
  lvlUp,
  addAchievement
} from "../redux/actions";
import { treeIcons } from "../JSON/tree-icons";
import Materialize from "materialize-css";

const Clicker = (props) => {
  const {
    count,
    factor,
    lvl,
    onIncrementCount,
    onLvlUp,
    onAddGold,
    treesPerSec,
  } = props;
  const onBtnClick = () => {
    onIncrementCount(factor);
    handleLvlUp(count);
    handleAchievements();
    // console.log(props);
  };

  const handleLvlUp = (count) => {
    const treshold = 10 * 2 ** (lvl - 1);
    if (count >= treshold - 1) {
      onLvlUp(lvl);
      console.log("lvl UP to:", lvl + 1);
      onAddGold();
      Materialize.toast("Level up!", 4000, "rounded");
      // Materialize.toast('<span class="white-text">I am toast content</span>', 2000) // 4000 is the duration of the toast
    }
  };

  const handleAutoClisker = (treesPerSec) => {
    if (treesPerSec === 0) 
    setTimeout(() => {
      onIncrementCount(treesPerSec);
      // handleAutoClisker(treesPerSec)
    }, 5000);
    
  };

  const handleAchievements = () => {
    // console.log('Achevement Check');
    // achievmt.some(achievmt => !achievmt.isUnlocked {
    // let type = achievmt.type
    // achievmt.required >= props[type] ? achievmt.isUnlocked = "true"
    // onAddGold();
    // forEach achievmt => achievmt.isUnlocked ? addAchievement();
    // })
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
          src={treeIcons[lvl - 1] || treeIcons[ - 1]}
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
  factor: state.factor,
  treesPerSec: state.treesPerSec,
  achievements: state.achievements
});

const mapDispatchToProps = (dispatch) => ({
  onIncrementCount: (factor) => dispatch(incrementCount(factor)),
  onLvlUp: (lvl) => dispatch(lvlUp(lvl)),
  onAddGold: () => dispatch(addGold()),
  onAddAchievement: () => dispatch(addAchievement())
});

export default connect(mapStateToProps, mapDispatchToProps)(Clicker);
