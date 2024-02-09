import React from "react";
import ReactPlayer from "react-player/youtube";

const VideoPopup = ({ show, setShow, videoId, setVideoId }) => {
  const hidePopup = () => {
    setShow(false);
    setVideoId(null);
  };
  return (
    <div
      className={`videoPopup  w-[60%] h-[70%] bg-slate-950 absolute top-1/2 left-1/2 transition -translate-x-1/2 -translate-y-1/2 z-30 ${
        show ? "block" : "hidden"
      }`}
    >
      <div className="videoPlayer w-full h-full">
        <span
          className="closeBtn absolute right-0  -top-7 text-xl text-white font-semibold cursor-pointer"
          onClick={hidePopup}
        >
          Close
        </span>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default VideoPopup;
