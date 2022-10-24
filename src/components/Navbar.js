import React from "react";
import "../styles/Navbar.css";
import logo from "../assets/images/sitelogo.png";

function navbar(props) {
  const handlePageChange = (e) => {
    const { target } = e;
    const pageName = target.name;

    props.setPage(pageName);
  };

  return (
    <nav className="navbar fixed-top navbar-expand-md navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#landing">
          <img
            src={logo}
            alt=""
            width="40"
            height="40"
            className="d-inline-block"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse text-center"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav ms-auto">
            <a
              name="About Me"
              className={props.page === "About Me" ? "active" : "nav-link"}
              href="#about-me"
              onClick={handlePageChange}
            >
              About Me
            </a>
            <a
              name="Portfolio"
              className={props.page === "Portfolio" ? "active" : "nav-link"}
              href="#projects"
              onClick={handlePageChange}
            >
              Portfolio
            </a>
            <a
              name="Resume"
              className={props.page === "Resume" ? "active" : "nav-link"}
              href="#resume"
              onClick={handlePageChange}
            >
              Resume
            </a>
            <a
              name="Contact Me"
              className={props.page === "Contact" ? "active" : "nav-link"}
              href="#contact-me"
              onClick={handlePageChange}
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default navbar;
