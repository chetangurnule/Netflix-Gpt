import config from "../config/config";
import React from "react";

const CarouselCard = ({ image, title }) => {
  const { imageUrl } = config;
  return (
    <div className="w-60 h-32 rounded-md shadow-md cursor-pointer">
      <div className="img h-full w-full">
        <img
          src={imageUrl + image}
          alt={`${title} image`}
          className=" w-full h-full rounded-md object-cover object-top"
        />
      </div>
    </div>
  );
};

export default CarouselCard;
