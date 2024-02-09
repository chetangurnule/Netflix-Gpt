import React from "react";
import useFetch from "../customHooks/useFetch";
const VideoBackground = ({ movie }) => {
  if (!movie) return;
  const { id } = movie;
  const { data, error } = useFetch(`/movie/${id}/videos`);
  if (!data) return;
  const trailerObj = data?.results?.find((obj) => obj.type === "Trailer");
  const key = trailerObj?.key;
  return (
    <div className="w-full aspect-video ">
      <div
        className="w-full aspect-video"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          background: "rgba(0, 0, 0, 0.2)",
        }}
      ></div>

      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>

      <div className="relative -top-36 w-full h-36 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default VideoBackground;
