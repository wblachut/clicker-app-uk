import React, { useEffect } from "react";
import { connect } from "react-redux";
import whiteLeaf from "../icons/maple-white.svg";
import shovel from "../icons/shovel.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
// import $ from 'jquery'

const Stats = (props) => {
  // useEffect(() => {
  // document.querySelectorAll(".tooltipped").tooltip({ delay: 50 });
  // }, []);

  // $(document).ready(function(){
  //   $('.tooltipped').tooltip({delay: 50});
  // });

  return (
    <React.Fragment>
      <section className="stats left">
        {/* <a class="btn tooltipped" data-position="bottom" data-delay="50" data-tooltip="I am a tooltip">Hover me!</a> */}
        {/* data-tooltip="Total Clicks" */}
        {/* data-tooltip="Workforce Hired" */}
        {/* data-tooltip="Items unlocked" */}
        {/* data-tooltip="Achievements unlocked" */}
        {/* data-tooltip="Golden leaves earned" */}
        {props.clicks !== 0 && (
          <p
            className="stats-counter tooltipped valign-wrapper"
            data-position="right"
            data-delay="50"
            data-tooltip="Total Clicks">
            <i className="material-icons white-text stats-icon"> near_me </i>
            {props.clicks} <div className="stats-info"> Total Clicks </div>
          </p>
        )}
        {props.treesPerSec !== 0 && (
          <p className="stats-counter valign-wrapper">
            <i className="material-icons white-text stats-icon">face</i>{" "}
            {props.treesPerSec}{" "}
            <div className="stats-info"> Workforce helping </div>
          </p>
        )}
        {props.itemsCount !== 0 && (
          <p className="stats-counter valign-wrapper">
            <img className="nav-icon" alt="shovel-icon" src={shovel} />{" "}
            {props.itemsCount} <div className="stats-info">Shop Items purchased</div>
          </p>
        )}
        {props.achieveCount !== 0 && (
          <p className="stats-counter valign-wrapper">
            <FontAwesomeIcon icon={faTrophy} className="stats-icon" />
            {props.achieveCount} <div className="stats-info"> Achievements Unlocked </div>
          </p>
        )}
        {props.goldTotal !== 0 && (
          <p className="stats-counter valign-wrapper">
            <img className="nav-icon" alt="golden-leaf" src={whiteLeaf} />
            {props.goldTotal} <div className="stats-info"> Golden Leaves gathered</div>
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
