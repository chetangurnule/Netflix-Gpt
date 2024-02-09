import React from "react";
import { Carousel } from "./index";
import useFetch from "../customHooks/useFetch";

const CarouselContainer = ({ data, isLoading }) => {
  const nowPlayingData = data.results;
  const {
    data: popularData,
    isLoading: popularIsLoading,
    error: popularError,
  } = useFetch("/movie/popular");

  const {
    data: topRatedData,
    isLoading: topRatedIsLoading,
    error: topRatedError,
  } = useFetch("/movie/top_rated");

  const {
    data: upcomingData,
    isLoading: upcomingIsLoading,
    error: upcomingError,
  } = useFetch("/movie/upcoming");

  return (
    <div className="bg-slate-900">
      <div className="relative carousels -mt-40">
        <Carousel
          mediaData={nowPlayingData}
          title={"Now Playing"}
          isLoading={isLoading}
        />
        <Carousel
          mediaData={popularData.results}
          title={"Popular"}
          isLoading={popularIsLoading}
        />
        <Carousel
          mediaData={topRatedData.results}
          title={"Top Rated"}
          isLoading={topRatedIsLoading}
        />
        <Carousel
          mediaData={upcomingData.results}
          title={"Upcoming"}
          isLoading={upcomingIsLoading}
        />
      </div>
    </div>
  );
};

export default CarouselContainer;
