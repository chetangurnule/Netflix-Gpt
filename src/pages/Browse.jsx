import React from "react";
import {
  Header,
  MainContainer,
  CarouselContainer,
  Footer,
} from "../components";
import useFetch from "../customHooks/useFetch";

const Browse = () => {
  const {
    data: nowPlayingData,
    isLoading: nowPlayingIsLoading,
    error: nowPlayingError,
  } = useFetch("/movie/now_playing");

  return (
    <div className="browse w-full h-screen bg-slate-500">
      <Header />
      <MainContainer data={nowPlayingData} />
      <CarouselContainer data={nowPlayingData} />
      <Footer />
    </div>
  );
};

export default Browse;
