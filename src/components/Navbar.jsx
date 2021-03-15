import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <navbar className="navbar">
      <div className="header-row">
        <h1 className="col-sm-8">
          <span className="title">Pizza Baker </span>{" "}
        </h1>
        <a
          href="https://github.com/wblachut/react-project-battleships"
          className="gh-btn"
        >
          <FontAwesomeIcon icon={["fab", "github"]} className="gh-icon" />
        </a>
      </div>
    </navbar>
  );
};

export default Header;
