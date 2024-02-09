import React from "react";
import { VideoBackground, VideoTitle } from "../components";
import useFetch from "../customHooks/useFetch";

const MainContainer = () => {
  const { data, isLoading, error } = useFetch("/movie/now_playing");
  if (!data) return;
  const randomMovie =
    data?.results?.[Math.floor(Math.random() * data.results?.length + 1)];

  return isLoading ? (
    <>
      <div className="skeleton w-full h-[600px] bg-slate-950">
        <div className=" w-[40%] absolute top-[20%] sm:top-[30%] left-10 hidden sm:block  z-20 ">
          <div className="skeleton bg-slate-700 img  w-16 h-16 md:w-32 md:h-32 rounded-full"></div>
          <div className="skeleton bg-slate-700 title w-32 h-5  mt-5 rounded-lg"></div>
          <div className="buttons mt-3 md:mt-5 flex">
            <div className="skeleton bg-slate-700 btn-1  w-16 h-5 px-4 py-4 rounded-lg mr-3"></div>
            <div className="skeleton bg-slate-700 btn-2  w-20 h-5 px-4 py-4 rounded-lg mr-3"></div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div className="w-full aspect-video">
      <VideoTitle movie={randomMovie} isLoading={isLoading} />
      <VideoBackground movie={randomMovie} isLoading={isLoading} />
    </div>
  );
};

export default MainContainer;
