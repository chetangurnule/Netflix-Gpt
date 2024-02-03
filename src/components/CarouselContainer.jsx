import React from "react";
import { Carousel } from "./index";
import useFetch from "../customHooks/useFetch";

const CarouselContainer = ({ data }) => {
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
    <div className="bg-slate-900 h-auto">
      <div className="relative carousels -mt-40 pl-12">
        <Carousel mediaData={nowPlayingData} title={"Now Playing"} />
        <Carousel mediaData={popularData.results} title={"Popular"} />
        <Carousel mediaData={topRatedData.results} title={"Top Rated"} />
        <Carousel mediaData={upcomingData.results} title={"Upcoming"} />
      </div>
    </div>
  );
};

export default CarouselContainer;
