import React, { useState } from "react";
import corona from "../../images/logo_corona.png";
import cambio from "../../images/logo_cambio.png";
import sass from "../../images/logo_sass.png";
import chandon from "../../images/logo_chandon.png";
import iqos from "../../images/logo_iqos.png";
import "./works.scss";

const Works = () => {

  return (
    <section id="works">
      <h2> Companies trusting our work </h2>{" "}
      <div className="logos-container">
        <img
          className="brand-logo"
          src={corona}
          alt="Corona"
        />
        <img
          className="brand-logo"
          src={chandon}
          alt="Chandon"
        />
        <img className="brand-logo" src={sass} alt="sass" />
        <img className="brand-logo" src={cambio} alt="Cambio" />
        <img className="brand-logo" src={iqos} alt="iqos" />
      </div>
    </section>
  );
};

export default Works;
