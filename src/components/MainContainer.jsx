import React from "react";
import { VideoBackground, VideoTitle } from "../components";

const MainContainer = ({ data }) => {
  const nowPlayingMovies = data?.results;
  if (!nowPlayingMovies) return;
  const randomMovie =
    nowPlayingMovies[Math.floor(Math.random() * nowPlayingMovies?.length + 1)];
  return (
    <div className="w-full">
      <VideoTitle movie={randomMovie} />
      <VideoBackground movie={randomMovie} />
    </div>
  );
};

export default MainContainer;
