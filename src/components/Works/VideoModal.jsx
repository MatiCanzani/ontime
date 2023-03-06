import React, { useState } from "react";
import Video from "./Video";
import { IoCloseSharp } from "@react-icons/all-files/io5/IoCloseSharp";

const VideoModal = ({ closeModal, videosrc }) => {
  console.log("videoUrl :>> ", videosrc);
  const [videoLoading, setVideoLoading] = useState(true);
  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  return (
    <section className="modal__bg">
      <div className="modal__align">
        <div className="modal__content">
          <IoCloseSharp
            className="modal__close"
            arial-label="Close modal"
            onClick={() => closeModal(false)}
          />
          <Video
            videoSrcURL={videosrc}
            videoTitle
            className="modal__video-style"
            onLoad={spinner}
            videoWidth="800"
            videoHeight="500"
          />
        </div>
      </div>
    </section>
  );
};
export default VideoModal;
