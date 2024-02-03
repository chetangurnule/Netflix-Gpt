import React from "react";
import { CarouselCard } from "./index";

const Carousel = ({ mediaData, title }) => {
  return (
    <div className="carousel py-8">
      <h1 className="text-white text-3xl font-bold mb-5">{title}</h1>
      <div className="flex overflow-hidden overflow-x-scroll">
        <div className="flex gap-3">
          {mediaData?.map((obj) => (
            <CarouselCard
              image={obj.poster_path}
              title={obj.title}
              key={obj.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
