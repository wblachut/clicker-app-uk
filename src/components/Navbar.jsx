import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faStore, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import leaf from "../icons/maple-leaf.svg";
// import { github } from "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => {
  return (
    <div className="navbar-fixed">
      <nav className="nav-wrapper teal darken-4 row">
        <Link to="/" className="logo col s4 m2">
          PlanTree{" "}
        </Link>
        <ul id="nav-mobile" className="right">
          <li className="golden-leaf valign-wrapper">
              <span className="nav-gold-count bold"> {props.gold} </span>
            <img className="nav-icon" src={leaf} alt="golden-leaf" />
          </li>
          <li>
            <Link to="/clicker-app-uk/">
              <FontAwesomeIcon icon={faHome} />
              <span className="nav-txt hide-on-small-only"> Home </span>
            </Link>
          </li>
          <li>
            <Link to="/clicker-app-uk/Shop">
              <FontAwesomeIcon icon={faStore} />
              <span className="nav-txt hide-on-small-only"> Shop </span>
            </Link>
          </li>
          <li>
            <Link to="/clicker-app-uk/Achievements">
              <FontAwesomeIcon icon={faTrophy} />
              <span className="nav-txt hide-on-small-only"> Achievements </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    gold: state.gold,
  };
};

export default connect(mapStateToProps)(Navbar);
