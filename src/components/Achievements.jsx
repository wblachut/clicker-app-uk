import React from "react";
import { connect } from "react-redux";
import pine from "../icons/pine-white.svg";
import whiteLeaf from "../icons/maple-white.svg";
import shovel from "../icons/shovel.svg";

const Achievements = ({ achievements }) => {
  return (
    <div className="achieve-container right row">
      <h5 className="center">Achievements</h5>
      <p>here you can find your achievements</p>
      <div className="achivmts-display col m8 offset-m2 row">
        {achievements.map(
          (achivmt) =>
            achivmt.isUnlocked && (
              <div
                className="achivmt row valign-wrapper card left-align"
                key={achivmt.id}>
                <div className="achivmt-main col s10 m12">
                  {achivmt.type === "count" && (
                    <span className="achivmt-require badge teal darken-4 white-text">
                      {" "}
                      {`${achivmt.require}`}{" "}
                      <img
                        className="achivmt-icon"
                        alt="white-pine"
                        src={pine}
                      />
                    </span>
                  )}
                  {achivmt.type === "planters" && (
                    <span className="achivmt-require badge pink darken-4 white-text">
                      {" "}
                      {`${achivmt.require}`}{" "}
                      <i className="material-icons white-text achivmt-icon ">
                        face
                      </i>
                    </span>
                  )}
                  {achivmt.type === "itemsCount" && (
                    <span className="achivmt-require badge brown darken-2 white-text">
                      {" "}
                      {`${achivmt.require}`}{" "}
                      <img
                        className="achivmt-icon"
                        alt="shovel-icon"
                        src={shovel}
                      />
                    </span>
                  )}
                  {achivmt.type === "clicks" && (
                    <span className="achivmt-require badge teal lighten-1 white-text">
                      {" "}
                      {`${achivmt.require}`}{" "}
                      <i className="material-icons white-text achivmt-icon">
                        near_me
                      </i>
                    </span>
                  )}
                  {achivmt.type === "goldTotal" && (
                    <span className="achivmt-require badge yellow darken-4 white-text">
                      {" "}
                      {`${achivmt.require}`}{" "}
                      <img
                        className="achivmt-icon"
                        alt="golden-leaf"
                        src={whiteLeaf}
                      />
                    </span>
                  )}
                  <p className="achivmt-name card-title">{achivmt.name}</p>
                  <hr />
                  <p className="achivmt-description s5 m3">
                    {achivmt.description}
                  </p>
                </div>
                <div
                  className="achivmt-img circle col s2 m2"
                  style={{
                    backgroundImage: `url(${achivmt.image})`
                  }}></div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    achievements: state.achievements
  };
};

export default connect(mapStateToProps)(Achievements);
