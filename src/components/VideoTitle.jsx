import config from "../config/config";
import React from "react";
import { FaInfoCircle, FaPlayCircle } from "react-icons/fa";

const VideoTitle = ({ movie }) => {
  if (!movie) return;
  const { title, poster_path } = movie;
  const imageUrl = config.imageUrl;
  return (
    <div className="videoTitle w-[40%] absolute top-[30%] left-10">
      <div className="img w-32 h-32 rounded-[50%] ">
        <img
          src={imageUrl + poster_path}
          alt={`${title + "poster"}`}
          className="w-full h-full rounded-[50%]"
        />
      </div>
      <div className="title text-white font-bold mt-2">
        <h1 className="text-3xl">{title}</h1>
      </div>
      <div className="buttons flex mt-5">
        <button className="flex item-center justify-center bg-white px-4 py-3 rounded-md text-black gap-2 mr-3 hover:bg-opacity-80">
          <FaPlayCircle className="text-2xl" />
          <span className="font-bold">Play</span>
        </button>
        <button className="flex item-center justify-center bg-black bg-opacity-50 px-4 py-3 rounded-md text-white gap-2 hover:bg-opacity-40">
          <FaInfoCircle className="text-2xl" />
          <span className="font-bold">More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
