import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
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
        <a class="navbar-brand" href="#">
          Area51 Music
        </a>
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
