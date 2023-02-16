import React from "react";
const Video = ({ videoWidth, videoHeight, videoSrcURL, videoTitle, ...props }) => (
  <div className="video">
    <video width = { videoWidth } height = { videoHeight } controls controlsList = "nodownload noremoteplayback noplaybackrate foobar">
      <source src={videoSrcURL} type="video/mp4"/>
    </video>
  </div>
);
export default Video;


