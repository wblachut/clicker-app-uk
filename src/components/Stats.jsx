import React from "react";
import { connect } from "react-redux";

const Stats = (props) => {
  return (
    <>
      <section className="stats left">
        {/* Stats: <br /> */}
        <p className="trees-counter">Total trees: {props.count} </p>
        <p className="trees-counter">Total clicks: </p>
        <p className="trees-counter">Trees per s: </p>
        <p className="trees-counter">Workforce hired: </p>
        <p className="trees-counter">Items unlocked: </p>
        <p className="trees-counter">Achievements unlocked: </p>
        <p className="trees-counter">Tree lvl: </p>
        <p className="trees-counter">Golden leaves earned: </p>
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
    treesPerSec: state.treesPerSec,

  };
};

export default connect(mapStateToProps)(Stats);
