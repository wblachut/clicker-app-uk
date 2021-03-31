import React from "react";
import { connect } from "react-redux";
import { dirtyIntervalClear } from "../files/helpers";
import { clearProgress, changeTreeIcons } from "../redux/actions";
import leaf from "../icons/maple-leaf.svg";

const Home = (props) => {

  const {
    count,
    lvl,
    items,
    achievements,
    treeIcons,
    onClearProgress,
    onChangeTreeIcons
  } = props;

  const handleDirtyArraysClear = (items, achievements) => {
    items.forEach((item) => {
      item.isOwned = false;
    });
    achievements.forEach((achmt) => {
      achmt.isUnlocked = false;
    });
  };

  return (
    <div className="home-container right row">
      <h5 className="home-title center">Home</h5>
      <div className="home-content-wrapper  col m8 offset-m2">
        {count === 0 && (
          <div className="gray-text">
            <p>Go on!</p>
            Plant your 1st tree with <b className="teal-text">PlanTree!</b>
            <p>
              {" "}
              Click the pulsating button with a sapling on it to plant a tree.
            </p>
          </div>
        )}
        {count < 100 && count > 0 && (
          <>
            <p className="center">Further Instructions</p>
            <div className="center justify">
              <p>
                <b className="teal-text">
                  Congratulations you have planted your 1st tree!{" "}
                </b>
              </p>
              <p>
                If you plant enought trees you will level up and unlock new
                content. The clicker tree will grow up with you as you advance.
                <span className="hide-on-small-only">
                  You can measure your progress by following stats - under the
                  clicker button.
                </span>
              </p>
              <p>
                On higher levels you will be able to purchase helpers, planters
                and new tree icons in the shop tab. To pay in shop you need
                golden leaves
                <img className="text-icon" src={leaf} alt="golden-leaf" />.
              </p>
              <p>
                {" "}
                Following the price you can find require amount of trees
                planted to make item purchesabile. Once you click on the shop
                item and you have enought golden leaves it will turn golden what
                means it is owned.
              </p>
              <p>
                Golden leves can be obtained by leveling up and reaching new
                achievements. Achievements are unlocked by reaching certain
                milestones, and can be found in achievements tab.{" "}
              </p>
              <p>
                {" "}
                You have already unlocked your first achievement by planting
                your first tree!{" "}
              </p>
            </div>
            <p>
              <b className="teal-text darken-2">Good Luck with planting!</b>
            </p>
          </>
        )}
        {count > 100 && (
          <div>
            <p className="grey-text darken-2">
              So far you have planted{" "}
              <b className="teal-text darken-2">{count}</b> trees and reached{" "}
              <b className="teal-text darken-2">{lvl}th</b> lvl.
            </p>
            <br />
            <p> 1. On higher levels you obtain more golden leaves per level.</p>
            <p>2. You always obtain 2 leaves from unlocking achievements.</p>
            <p>3. Every point in workforce generetes 1 tree per 5 seconds.</p>
            <p>4. If you want to start anew, pres RESSET PROGRESS button.</p>
            <p>
              5. Enjoy yoursef and plant some trees, track progress with stats.
            </p>
          </div>
        )}
        <button
          className="reset-btn waves-effect waves-light btn"
          onClick={() => {
            handleDirtyArraysClear(items, achievements);
            dirtyIntervalClear(10000);
            onChangeTreeIcons(treeIcons.slice(0, 10));
            onClearProgress();
          }}>
          RESET PROGRESS
        </button>{" "}
        <br /> <br />
        <div>
          Icons made by{" "}
          <a href="https://www.freepik.com" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.count,
  lvl: state.lvl,
  gold: state.gold,
  achievements: state.achievements,
  items: state.items,
  treeIcons: state.treeIcons,
  itemsCount: state.itemsCount
});

const mapDispatchToProps = (dispatch) => ({
  onChangeTreeIcons: (treeIcon) => dispatch(changeTreeIcons(treeIcon)),
  onClearProgress: () => dispatch(clearProgress())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
