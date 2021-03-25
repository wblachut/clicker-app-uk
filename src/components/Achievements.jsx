import React from "react";
import { connect } from "react-redux";
import pine from '../icons/pine-white.svg'

const Achievements = ({ achievements }) => {
  return (
    <div className="achieve-container right row">
      <h5 className="center">Achievements
      </h5>
      <p>here you can find your achievements</p>
      <div className="achivmts-display col m10 offset-m1 row">
        {achievements.map((achivmt) => (
          (achivmt.isUnlocked &&
          <div className="achivmt row valign-wrapper card left-align" key={achivmt.id}>
            {/* <img src={achivmt.image} alt={achivmt.name} className="circle" /> */}
            <div className="achivmt-main col s9 m9">
            <span className="achivmt-require badge teal darken-4 white-text">{`${achivmt.require} `}
             <img className="tree-icon" alt="white-pine" src={pine} />
             </span>
              <p className="achivmt-name  card-title">{achivmt.name}</p>
            <hr/>
            <p className="achivmt-description s5 m4">{achivmt.description}</p>
            </div>
            <div
              className="achivmt-img circle col s2 m1 pull-m1"
              style={{
                backgroundImage: `url(${achivmt.image})`
              }}></div>
          </div>)
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    achievements: state.achievements,
  };
};

export default connect(mapStateToProps)(Achievements);

