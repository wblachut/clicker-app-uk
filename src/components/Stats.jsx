import React from "react";
import { connect } from "react-redux";

const Stats = (props) => {
  return (
    <>
      <section className="stats left">
        {/* Stats: */}
        <p className="stats-counter">Total trees: {props.count} </p>
        {/* <a class="btn tooltipped" data-position="bottom" data-delay="50" data-tooltip="I am a tooltip">Hover me!</a> */}
        <p className="stats-counter">Total clicks: {props.clicks}</p>
        <p className="stats-counter">Trees per s: {props.treesPerSec}</p>
        <p className="stats-counter">Workforce hired: {props.planters}</p>
        <p className="stats-counter">Items unlocked: {props.itemsCount}</p>
        <p className="stats-counter">Achievements unlocked: {props.achieveCount}</p>
        <p className="stats-counter">Tree lvl: to be implemented</p>
        <p className="stats-counter">Golden leaves earned: {props.goldTotal}</p>
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
    lvl: state.lvl,
    multiplier: state.multiplier,
    gold: state.gold,
    planters: state.planters,
    clicks: state.clicks,
    goldTotal: state.goldTotal,
    achieveCount: state.achieveCount,
    itemsCount: state.itemsCount,
    treesPerSec: state.treesPerSec,
  };
};

export default connect(mapStateToProps)(Stats);
