import config from "../config/config";
import React from "react";
import { FaInfoCircle, FaPlayCircle } from "react-icons/fa";

const VideoTitle = ({ movie, isLoading }) => {
  if (!movie) return;
  const { title, poster_path } = movie;
  const imageUrl = config.imageUrl;
  return (
    <div className="videoTitle w-[40%] absolute top-[20%] sm:top-[30%] left-10 hidden sm:block">
      <div className="img w-16 h-16 md:w-32 md:h-32 rounded-[50%] ">
        <img
          src={imageUrl + poster_path}
          alt={`${title + "poster"}`}
          className="w-full h-full rounded-[50%]"
        />
      </div>
      <div className="title text-white font-bold mt-2">
        <h1 className=" text-xl md:text-3xl">{title}</h1>
      </div>
      <div className="buttons flex mt-3 md:mt-5">
        <button className="flex item-center justify-center bg-white px-2 py-1 md:px-4 md:py-3 rounded-md text-black gap-2 mr-3 hover:bg-opacity-80">
          <FaPlayCircle className="text-xl md:text-2xl" />
          <span className="font-bold">Play</span>
        </button>
        <button className="flex item-center justify-center bg-black bg-opacity-50 px-2 py-1 md:px-4 md:py-3 rounded-md text-white gap-2 hover:bg-opacity-40">
          <FaInfoCircle className=" text-xl md:text-2xl" />
          <span className="font-bold w-auto">More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
