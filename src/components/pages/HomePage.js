import React, { useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import SignUpForm from "../SignUpForm";
import musicwave from "../../media/musicwave.png";
import bg1 from "../../media/buddstep.jpg";
import tongue from "../../media/tongue.png";
import banner from "../../media/banner.png";
import carpet from "../../media/background_15.png";
import spaceship from "../../media/desert.png";
import alien2 from "../../media/alien2.png";
import logo from "../../media/logo.png";
const HomePage = () => {
  return (
    <div className="homepage">
      <Parallax strength={-161.8} bgImage={musicwave}>
        <div className="container">
          <section className="intro">
            <div className="col-md-12">
              <h1 className="display-1 text-warning" data-aos="fade-left">
                Area51 Music
              </h1>
              <div className="row">
                <img className="col-md-4" src={logo} id="logo" />
                <div className="col-md-5">
                  <h5 className="text-light">
                    Get Lit within the Dubstep zone!
                  </h5>
                  <h3>Get Your Tickets for the Upcoming Festival</h3>
                </div>
              </div>

              <div>
                <div className="" data-aos="fade-right"></div>
              </div>
            </div>
            <h6 className="display-1 text-light headline">
              Remember how amazing it felt the first time you've been to an
              awesome festival?
            </h6>
          </section>
        </div>
      </Parallax>

      <Parallax strength={300} bgImage={carpet}>
        <div className="container">
          <img src={banner} id="banner" />
          <section className="intro-copy">
            <p className="text-light h5">
              There's only so much space in the ship though and a lot of people
              will arrive.
              <br />
              <br />
              So are you ready for the Area51 experience? get your tickets
              today!
              <br />
              <br />
              <br />
              <br />
              <h3 className="display-6 text-warning">
                Let us shine a light that levitates you onto our alien
                spaceship. and you Feel the ecstasy like waves of pleasure
                rippling through you.
                <br />
                <br />
                We're Excited to See you in the Area51 Zone!
              </h3>
            </p>
          </section>

          <section className="salesform">
            <div>
              <h3>Blow off some steam. Release your inhibition. Get Lit.</h3>
            </div>
            <SignUpForm />
          </section>
        </div>
      </Parallax>
      <Parallax strength={-300} bgImage={spaceship}>
        <section className="aliensection">
          <img id="alien" src={alien2} data-aos="fade-down" />
        </section>
      </Parallax>
    </div>
  );
};

export default HomePage;
