import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faStore, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
// import { incrementCount, lvlUp } from "../redux/actions";
import { Link } from "react-router-dom";
import leaf from "../icons/maple-leaf.svg";
// import pine from "../icons/pine-white.svg";
// import { github } from "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => {
  return (
    <div className="navbar-fixed">
      <nav className="nav-wrapper teal darken-4 row">
        <Link to="/" className="logo col s4 m2">
          Tree Planter{" "}
        </Link>
        <ul id="nav-mobile" className="right">
          <li className="golden-leaf hide-on-small-only">
            <img className="nav-icon" src={leaf} alt="golden-leaf" />
              <span className="nav-gold-count"> {props.gols} </span>
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
