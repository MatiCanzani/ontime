import React from "react";
import corona from "../../images/logo_corona.png";
import cambio from "../../images/logo_cambio.png";
import sass from "../../images/logo_sass.png";
import chandon from "../../images/logo_chandon.png";
import iqos from "../../images/logo_iqos.png";
import "./works.scss";
import Video from "./Video";
const Works = () => {
  return (
    <section id="works">
      <h2> Works </h2>
      <div className="logos-container">
        <img className="brand-logo" src={corona} alt="Corona" />;
        <img className="brand-logo" src={cambio} alt="Cambio" />;
        <img className="brand-logo" src={chandon} alt="Chandon" />;
        <img className="brand-logo" src={sass} alt="sass" />;
        <img className="brand-logo" src={iqos} alt="iqos" />;
      </div>
        <Video
          videoSrcURL="https://res.cloudinary.com/mcanzani/video/upload/v1675958079/Ontime%20Assets/B289F7C9-EA24-470D-A76D-A1DFA099896D_2_1_pubq1z.mp4"
          videoTitle="Official Music Video on YouTube"
          videoHeight={450}
          videoWidth={900}
        />
        <Video
          videoSrcURL="https://res.cloudinary.com/mcanzani/video/upload/v1675956657/Ontime%20Assets/Chandon_Extra_2_-_4K_kxynkd.mp4"
          videoTitle="Official Music Video on YouTube"
          videoHeight={600}
          videoWidth={330}
        />
    </section>
  );
};

export default Works;
