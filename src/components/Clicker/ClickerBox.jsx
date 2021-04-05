import React from "react";
import { connect } from "react-redux";
import Stats from "../Stats/Stats";
import Clicker from "./Clicker";
import PropTypes from "prop-types";

const ClickerBox = (props) => {
  return (
    <div className="clicker-box-wrapper">
      <section className="clicker-box left fixed white-text">
        <div className="counter-wrapper">
          <p className="counter-title txt">
            Trees Planted: <br />
            <span className="trees-counter"> {props.count} </span>
          </p>
          <Clicker />
          <p>
            <span className="lvl-txt ">Lvl.</span>
            <span className="trees-counter"> {props.lvl} </span>
          </p>
          <p className="trees-per-click">
            {" "}
            trees planted per click: {props.factor}
          </p>
        </div>
        <div className="stats-wrapper hide-on-small-only">
          <hr />
          <Stats />
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
    lvl: state.lvl,
    factor: state.factor
  };
};

export default connect(mapStateToProps)(ClickerBox);

ClickerBox.prototype = {
  count: PropTypes.number.isRequired,
  lvl: PropTypes.number.isRequired,
  factor: PropTypes.number.isRequired,
};
