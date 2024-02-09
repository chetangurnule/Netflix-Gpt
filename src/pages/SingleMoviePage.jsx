import React from "react";
import useFetch from "../customHooks/useFetch";
import { useParams } from "react-router-dom";
import { Header, Footer, SingleMovie } from "../components";

const SingleMoviePage = () => {
  const { movieId } = useParams();
  const { data, isLoading, error } = useFetch(`/movie/${movieId}`);
  return (
    <div className="singleMovie">
      <Header />
      <SingleMovie movie={data} isLoading={isLoading} />
      <Footer />
    </div>
  );
};
export default SingleMoviePage;
