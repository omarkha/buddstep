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
      <Parallax strength={-300} bgImage={musicwave}>
        <div className="container">
          <section className="intro">
            <div className="col-md-12">
              <h1 className="display-1 text-warning">Area51 Music</h1>
              <div>
                <div>
                  <h5 className="text-warning">
                    Get Lit within the Dubstep zone!
                  </h5>
                  <h3 className="display-3 text-light">
                    Music Festival operated by Shay Media Corps
                  </h3>
                </div>
                <img src={alien2} />
              </div>
            </div>
          </section>
        </div>
      </Parallax>
      <Parallax strength={300} bgImage={carpet}>
        <div className="container">
          <img src={banner} id="banner" />
          <section className="intro-copy">
            <SignUpForm />
          </section>
        </div>
      </Parallax>
    </div>
  );
};

export default HomePage;
