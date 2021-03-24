import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="home-container right">
      <h5 className="center">Home</h5>
      <p className="counter-title txt">
        Trees Planted: <br />
        <span className="trees-counter"> {} </span>
      </p>
      <p className="counter-title txt">
        Helpers: <br />
        <span className="trees-counter"> {} </span>
      </p>
      <p className="counter-title txt">
        Planters: <br />
        <span className="trees-counter"> {} </span>
      </p>
      <p className="counter-title txt">
        Trees: <br />
        <span className="trees-counter"> {} </span>
      </p>
      {/* <blockquote className="teal">
      This is an example quotation that uses the blockquote tag.
    </blockquote> */}
      <button className="waves-effect waves-light btn" >RESET PROGRESS</button>
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
  );
};

export default Home;
