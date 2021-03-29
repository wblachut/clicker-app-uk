import React from "react";
import { connect } from "react-redux";
import whiteLeaf from "../icons/maple-white.svg";
import shovel from "../icons/shovel.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

const Stats = (props) => {

  return (
    <React.Fragment>
      <section className="stats left">
        {props.clicks !== 0 && (
          <p
            className="stats-counter tooltipped valign-wrapper"
            data-position="right"
            data-delay="50"
            data-tooltip="Total Clicks">
            <i className="material-icons white-text stats-icon"> near_me </i>
            {props.clicks} <span className="stats-info"> Total Clicks </span>
          </p>
        )}
        {props.treesPerSec !== 0 && (
          <p className="stats-counter valign-wrapper">
            <i className="material-icons white-text stats-icon">face</i>{" "}
            {props.treesPerSec}{" "}
            <span className="stats-info"> Workforce helping </span>
          </p>
        )}
        {props.itemsCount !== 0 && (
          <p className="stats-counter valign-wrapper">
            <img className="nav-icon" alt="shovel-icon" src={shovel} />{" "}
            {props.itemsCount}{" "}
            <span className="stats-info">Shop Items purchased</span>
          </p>
        )}
        {props.achieveCount !== 0 && (
          <p className="stats-counter valign-wrapper">
            <FontAwesomeIcon icon={faTrophy} className="stats-icon" />
            {props.achieveCount}{" "}
            <span className="stats-info"> Achievements Unlocked </span>
          </p>
        )}
        {props.goldTotal !== 0 && (
          <p className="stats-counter valign-wrapper">
            <img className="nav-icon" alt="golden-leaf" src={whiteLeaf} />
            {props.goldTotal}{" "}
            <span className="stats-info"> Golden Leaves gathered</span>
          </p>
        )}
      </section>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
    lvl: state.lvl,
    multiplier: state.multiplier,
    gold: state.gold,
    clicks: state.clicks,
    goldTotal: state.goldTotal,
    achieveCount: state.achieveCount,
    itemsCount: state.itemsCount,
    treesPerSec: state.treesPerSec
  };
};

export default connect(mapStateToProps)(Stats);
