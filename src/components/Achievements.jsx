import React from "react";
import achivmts from "../JSON/achievements.json";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome } from "@fortawesome/free-solid-svg-icons";

const Achievements = () => {
  return (
    <div className="achieve-container right row">
      <h5 className="center">Achievements
      </h5>
      <p>here you can find your achievements</p>
      <div className="achivmts-display col m10 offset-m1">
        {achivmts.map((achivmt) => (
          (achivmt.isUnlocked === "true" &&
          <div className="achivmt row valign-wrapper card" key={achivmt.id}>
            <div
              className="achivmt-img circle col s2 m1 offset-m1"
              style={{
                backgroundImage: `url(${achivmt.image})`
              }}></div>
            {/* <img src={achivmt.image} alt={achivmt.name} className="circle" /> */}
            <div className="achivmt-main col s5 m3 offset-m1">
            <p className="achivmt-name">{achivmt.name}</p>
            <p className="achivmt-price">{achivmt.require}</p>
            </div>
            <p className="achivmt-description s5 m3 push-m1">{achivmt.description}</p>
          </div>)
        ))}
      </div>
    </div>
  );
};

export default Achievements;
