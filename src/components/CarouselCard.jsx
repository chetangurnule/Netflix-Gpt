import { useState } from "react";
import { MovieCard } from "./index.js";

const CarouselCard = ({ data }) => {
  const { id, genre_ids, poster_path, title } = data;

  return (
    <div className="">
      <MovieCard
        id={id}
        genreIds={genre_ids}
        image={poster_path}
        title={title}
      />
    </div>
  );
};

export default CarouselCard;
