import {
  Header,
  MainContainer,
  CarouselContainer,
  Footer,
} from "../components";
import useFetch from "../customHooks/useFetch";
import { useDispatch } from "react-redux";
import { addGenres } from "../utils/GenresSlice";
import { useEffect } from "react";
import useBrowse from "../customHooks/useBrowse";

const Browse = () => {
  const {
    data: nowPlayingData,
    isLoading: nowPlayingIsLoading,
    error: nowPlayingError,
  } = useFetch("/movie/now_playing");

  // calling of useBrowse hook
  useBrowse(true);

  return (
    <div className="browse w-full bg-slate-500">
      <Header />
      <MainContainer data={nowPlayingData} isLoading={nowPlayingIsLoading} />
      <CarouselContainer
        data={nowPlayingData}
        isLoading={nowPlayingIsLoading}
      />
      <Footer />
    </div>
  );
};

export default Browse;
