import React, { useState } from "react";
import config from "../config/config";
import { useSelector } from "react-redux";
import { BiPlay, BiPlus, BiHeart } from "react-icons/bi";
import { MdArrowDropDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Poster from "../assets/no-poster.png";

const MovieCard = ({ id, image, title }) => {
  const { imageUrl } = config;
  const navigate = useNavigate();
  const [onImageLoad, setOnImageLoad] = useState(false);
  const movieImage = image ? imageUrl + image : Poster;
  return (
    <>
      <img
        src={movieImage}
        alt={`${title} image`}
        className=" w-full h-full rounded-md object-cover object-top hidden"
        onLoad={() => setOnImageLoad(true)}
      />
      {!onImageLoad ? (
        <div className="skeleton bg-blue-950 w-44 h-64 rounded-md"></div>
      ) : (
        <div
          className={`w-44 h-64 cursor-pointer`}
          onClick={() => {
            navigate(`/movie/${id}`);
          }}
        >
          <div className="img h-full w-full rounded-md bg-blue-950">
            <img
              src={movieImage}
              alt={`${title} image`}
              className=" w-full h-full rounded-md object-cover object-top"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default MovieCard;
