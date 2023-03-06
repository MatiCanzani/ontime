import React from "react";
import "./styles.scss"
const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__content">
        <h2>What we do</h2>
        <h3>
          An advertising agency, developing strategy, production and
          implementation.
        </h3>
      </div>
      <div className="about__content">
        <h2>How we do it?</h2>
        <h3>
          Creating original and real stories, focused on high quality production
          resources to optimize results.
        </h3>
      </div>
      <div className="about__content">
        ;<h2>Our resources</h2>
        <h3>Branding</h3>
        <h3>Visual Marketing Strategy</h3>
        <h3>Art direction and creativity</h3>
        <h3>Film and photography production</h3>
        <h3>Social Media Management</h3>
        <h3>Pay Ads Management</h3>
      </div>
    </section>
  );
};

export default About;
