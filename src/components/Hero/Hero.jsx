import React from "react";
import "./styles.scss"
import logo from "../../images/otc-logo.png";

const Hero = () => {

  return (
    <section>
      <div className="hero-cntr">
        <img className="logo" src={logo} alt="On Time Creative" />
        <h1>on time creative </h1>
        <h2>a Branding and Advertising agency</h2>
      </div>
    </section>
  );
};

export default Hero;
