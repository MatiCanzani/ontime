import React, { useState } from "react";
import corona from "../../images/logo_corona.png";
import cambio from "../../images/logo_cambio.png";
import sass from "../../images/logo_sass.png";
import chandon from "../../images/logo_chandon.png";
import iqos from "../../images/logo_iqos.png";
import VideoModal from "./VideoModal";
import "./works.scss";

const Works = () => {
  const [modal, setModal] = useState(false);
  const [videoUrl, setVideoUrl] = useState();

  const openModal = (url) => {
    console.log("url :>> ", url);
    setVideoUrl(url);
    setModal(true);
  };

  return (
    <section id="works">
      <h2> Companies trusting our work </h2>{" "}
      <div className="logos-container">
        <img
          onClick={() =>
            openModal(
              "https://res.cloudinary.com/mcanzani/video/upload/v1676584143/Ontime%20Assets/B289F7C9-EA24-470D-A76D-A1DFA099896D_2_1_cgqy5l.mov"
            )
          }
          className="brand-logo"
          src={corona}
          alt="Corona"
        />
        <img
          className="brand-logo"
          src={chandon}
          alt="Chandon"
          onClick={() =>
            openModal(
              "https://res.cloudinary.com/mcanzani/video/upload/v1675956657/Ontime%20Assets/Chandon_Extra_2_-_4K_kxynkd.mov"
            )
          }
        />
        ;
        <img className="brand-logo" src={sass} alt="sass" />;
        <img className="brand-logo" src={cambio} alt="Cambio" />
        <img className="brand-logo" src={iqos} alt="iqos" />;
      </div>
      {modal && videoUrl && (
        <VideoModal closeModal={setModal} videosrc={videoUrl} />
      )}
    </section>
  );
};

export default Works;
