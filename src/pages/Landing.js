import React from "react";
import Footer from "../components/Footer";
import "../styles/Landing.css";
import logo from "../assets/images/512.png";
import TypeAnimation from "react-type-animation";

function Landing(props) {
  const handlePageChange = (e) => {
    props.setPage("About Me");
  };

  return (
    <div
      id="landing"
      className="scroll-snap d-flex flex-column"
      onMouseEnter={handlePageChange}
    >
      <div className="center">
        <img src={logo} alt="avatar" className="photo mb-2" />

        <TypeAnimation
          cursor={true}
          sequence={["", 500, "", 2000]}
          wrapper="h1"
          repeat={6}
        />
        <h5>Software Developer</h5>
        <Footer />
      </div>
    </div>
  );
}

export default Landing;
