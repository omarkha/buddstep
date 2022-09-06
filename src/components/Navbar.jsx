import React from "react";
import { Link } from "react-router-dom";
import logo from "../media/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar-expand-lg navbar-dark bg-dark">
      <div className="navbar container">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-bs-controls="navbarTogglerDemo03"
          aria-bs-expanded="false"
          aria-bs-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <Link to="/" className="navbar-brand">
          <img src={logo} id="brandlogo" />
          Area51 Music
        </Link>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="aboutSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="contactSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="ticketsSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
              >
                Get Your Ticket
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="aboutSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link"
              >
                Events
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
