import { useState, useRef } from "react";
import { CarouselCard } from "./index";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = ({ mediaData, title, isLoading }) => {
  const currentRef = useRef();
  const handleClick = (direction) => {
    const container = currentRef.current;
    let scrollAmount =
      direction === "left"
        ? container.scrollLeft - container.offsetWidth
        : container.scrollLeft + container.offsetWidth;
    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="carousels py-8">
      <h1 className="text-white text-3xl font-bold mb-5">{title}</h1>
      <div className=" relative flex">
        <div
          className="absolute leftCarousel bg-black top-1/2 transfrom -translate-y-1/2 w-12 h-[100px] rounded-tr-lg rounded-br-lg flex justify-center items-center cursor-pointer opacity-70 z-30"
          onClick={() => handleClick("left")}
        >
          <FaChevronLeft className="text-white text-2xl" />
        </div>
        <div
          className="absolute right-0 rightCarousel bg-black top-1/2 transfrom -translate-y-1/2 w-12 h-[100px] rounded-tl-lg rounded-bl-lg flex justify-center items-center cursor-pointer opacity-70 z-30"
          onClick={() => handleClick("right")}
        >
          <FaChevronRight className="text-white text-2xl" />
        </div>
        <div
          className="flex gap-3 overflow-hidden overflow-x-scroll"
          ref={currentRef}
        >
          {isLoading ? (
            <div className="flex">
              <div className="w-full h-64 flex gap-3">
                <div className="skeleton w-44 h-full rounded-md bg-blue-950"></div>
                <div className="skeleton w-44 h-full rounded-md bg-blue-950"></div>
                <div className="skeleton w-44 h-full rounded-md bg-blue-950"></div>
                <div className="skeleton w-44 h-full rounded-md bg-blue-950"></div>
                <div className="skeleton w-44 h-full rounded-md bg-blue-950"></div>
                <div className="skeleton w-44 h-full rounded-md bg-blue-950"></div>
                <div className="skeleton w-44 h-full rounded-md bg-blue-950"></div>
              </div>
            </div>
          ) : (
            mediaData?.map((obj) => <CarouselCard data={obj} key={obj.id} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
