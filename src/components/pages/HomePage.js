import React, { useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import SignUpForm from "../SignUpForm";
import musicwave from "../../media/musicwave.png";
import bg1 from "../../media/buddstep.jpg";
import tongue from "../../media/tongue.png";
import banner from "../../media/banner.png";
import carpet from "../../media/background_18.png";

import alien2 from "../../media/alien2.png";
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
              <div>
                <div data-aos="fade-right">
                  <h5 className="text-warning">
                    Get Lit within the Dubstep zone!
                  </h5>
                  <h3 className="display-3 text-light">
                    Music Festival operated by Shay Media Corps
                  </h3>
                </div>
                <img src={alien2} data-aos="fade-down" />
              </div>
            </div>
          </section>
        </div>
      </Parallax>
      <Parallax strength={-100} bgImage={carpet}>
        <div className="container">
          <section className="intro-copy">
            <h1 className="display-1 text-light">
              Remember how amazing it felt the first time you've been to an
              awesome festival?
            </h1>

            <p className="text-light h5">
              <br />
              <br />
              There's only so much space in the ship though and a lot of people
              will arrive.
              <br />
              <br />
              So are you ready for Area51? get your tickets today!
              <br />
              <br />
              <h3 className="display-6 text-warning">
                Come join us in Area51 and you will be levitated by the sickest
                UFO in the milkyway!
              </h3>
            </p>
          </section>
          <img src={banner} id="banner" />

          <section className="salesform">
            <SignUpForm />
          </section>
        </div>
      </Parallax>
    </div>
  );
};

export default HomePage;
