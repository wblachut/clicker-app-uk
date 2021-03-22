import React from "react";
import { connect } from "react-redux";
import { incrementCount, lvlUp } from "../redux/actions";
import { treeIcons } from "../JSON/tree-icons";
import Stats from './Stats'

const Clicker = (props) => {
  const { count, multiplier, lvl, incrementCount, lvlUp } = props;
  const onBtnClick = () => {
    incrementCount();
    handleLvlUp(count);
  };

  const handleLvlUp = (count) => {
    const treshold = 10 * 2 ** (lvl - 1);
    if (count >= treshold - 1) {
      lvlUp(lvl);
      console.log("lvl UP to:", lvl + 1);
    }
  };

  return (
    <div className="clicker-box-wrapper">
      <section className="clicker-box left fixed white-text">
        <div className="counter-wrapper">
          <p className="counter-title txt">
            Trees Planted: <br />
            <span className="trees-counter"> {props.count} </span>
          </p>
          <button
          // pulse
            className="click-btn circle btn-floating white waves-effect waves-dark"
            onClick={onBtnClick}>
            <img
              alt="click-tree-icon"
              className="click-icon"
              src={treeIcons[lvl - 1]}
            />
          </button>
          <p>
            <span className="lvl-txt ">Lvl.</span>
            <span className="trees-counter"> {props.lvl} </span>
          </p>
          <p className="trees-per-click"> trees planted per click: {multiplier}</p>
        </div>
        <div className="others-wrapper hide-on-small-only">
          <Stats />
          {/* <hr className="white" />
          <p className="stats left">
            <p className="trees-counter">Total trees: {props.count} </p>
            <p className="trees-counter">Total clicks:  </p>
            <p className="trees-counter">Trees per s: </p>
            <p className="trees-counter">Workforce hired: </p>
            <p className="trees-counter">Items unlocked: </p>
            <p className="trees-counter">Achievements unlocked: </p>
            <p className="trees-counter">Tree lvl: </p>
            <p className="trees-counter">Golden leaves earned: </p>
          </p> */}
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
    lvl: state.lvl,
    multiplier: state.multiplier
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCount: (mulitplier) => {
      dispatch(incrementCount(mulitplier));
    },
    lvlUp: (lvl) => {
      dispatch(lvlUp(lvl));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Clicker);
