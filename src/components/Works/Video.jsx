import React from "react";
const Video = ({ videoWidth, videoHeight, videoSrcURL, videoTitle }) => (
  <div className="video">
    <video
      width={videoWidth}
      height={videoHeight}
      controlsList="nodownload noremoteplayback noplaybackrate foobar"
      loading="lazy"
      autoPlay
    >
      <source src={videoSrcURL} type="video/mp4" />
    </video>
  </div>
);
export default Video;
