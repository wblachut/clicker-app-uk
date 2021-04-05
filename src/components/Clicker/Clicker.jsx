import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  incrementCount,
  incrementClicks,
  addGold,
  lvlUp,
  addAchievement
} from "../../components/App/actions";
import {
  onBtnClick,
  handleAchievements,
  handleAutoClisker,
  handleClickerIcon,
  handleLvlUp
} from "./index";
import './Clicker.scss'
import PropTypes from "prop-types";

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
    onAddAchievement
  } = props;

  const [interval, setInterval] = useState(null);

  useEffect(() => {
    if (count === 0) return;
    handleLvlUp(count, lvl, 10, 2, onLvlUp, onAddGold);
    handleAchievements(props, achievements, onAddGold, onAddAchievement);
  }, [count]);

  useEffect(() => {
    handleAutoClisker(treesPerSec, interval, onIncrementCount, setInterval);
  }, [treesPerSec]);

  return (
    <React.Fragment>
      <button
        className="click-btn circle pulse btn-floating white"
        onClick={() => onBtnClick(onIncrementCount, onIncrementClicks, factor)}>
        <img
          alt="click-tree-icon"
          className="clicker-img"
          src={handleClickerIcon(lvl, treeIcons)}
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

Clicker.prototype = {
  count: PropTypes.number.isRequired,
  lvl: PropTypes.number.isRequired,
  factor: PropTypes.number.isRequired,
  gold: PropTypes.number.isRequired,
  itemsCount: PropTypes.number.isRequired,
  goldTotal: PropTypes.number.isRequired,
  treesPerSec: PropTypes.number.isRequired,
  achievements: PropTypes.object.isRequired,
  treeIcons: PropTypes.array.isRequired,
  onIncrementCount: PropTypes.func.isRequired,
  onIncrementClicks: PropTypes.func.isRequired,
  onLvlUp: PropTypes.func.isRequired,
  onAddGold: PropTypes.func.isRequired,
  onAddAchievement: PropTypes.func.isRequired
};
