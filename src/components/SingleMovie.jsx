import { useState } from "react";
import config from "../config/config";
import { useSelector } from "react-redux";
import { Icon, CircleRating, VideoPopup, Cast } from "./index";
import { useParams } from "react-router-dom";
import useFetch from "../customHooks/useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const SingleMovie = ({ movie, isLoading }) => {
  const {
    id,
    title,
    overview,
    genres,
    backdrop_path,
    vote_average,
    poster_path,
    release_date,
    runtime,
    tagline,
    status,
  } = movie;

  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState("");
  const { movieId } = useParams();
  const { data: videosData, isLoading: videosLoading } = useFetch(
    `/movie/${movieId}/videos`
  );
  const { data: credits, isLoading: creditsLoading } = useFetch(
    `/movie/${movieId}/credits`
  );

  const movieTrailer = videosData?.results?.find(
    (movie) => movie.type === "Trailer"
  );

  const director = credits?.crew?.filter((crew) => {
    if (crew.department === "Directing") return crew;
  });

  const writer = credits?.crew?.filter((crew) => {
    if (crew.department === "Writing") return crew;
  });

  const toHoursandMins = (mins) => {
    const hr = Math.floor(mins / 60);
    const minutes = Math.floor(mins % 60);
    return `${hr}h ${minutes > 0 ? `${minutes}m` : ""}`;
  };

  const { imageUrl } = config;
  const movieGenres = useSelector((state) => state.genres.genres);
  const genresName = genres?.map((genre) => movieGenres[genre.id]);

  const skeleton = () => {
    return (
      <div className="skItem w-full h-full rounded-md shadow-lg bg-gray-100 pb-5">
        <div className="w-full h-32 bg-gray-300 rounded-md  animate-pulse"></div>
        <div className="h-4 mt-2 w-28 bg-gray-300 animate-pulse"></div>
        <div className="h-4 mt-2 w-24 bg-gray-300 animate-pulse"></div>
      </div>
    );
  };

  return isLoading && creditsLoading ? (
    <div className="reltative w-full h-full">
      <div className="skeleton relative w-full h-[550px] bg-blue-950 mt-16">
        <div className="detailsBanner bg-blue-950 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-10 z-20 w-full h-full flex">
          <div className="left skeleton hidden md:block md:w-[35%] lg:w-[30%] h-full shadow-md bg-slate-950 rounded-md"></div>
          <div className="right w-full md:w-[65%] lg:w-[70%] h-full ml-5 p-2">
            <div className="row skeleton w-full  h-7 rounded-md my-5 bg-slate-950"></div>
            <div className="row skeleton w-full  h-7 rounded-md my-5 bg-slate-950"></div>
            <div className="row skeleton w-full  h-7 rounded-md my-5 bg-slate-950"></div>
            <div className="row skeleton w-full  h-7 rounded-md my-5 bg-slate-950"></div>
            <div className="row skeleton w-full  h-7 rounded-md my-5 bg-slate-950"></div>
            <div className="row skeleton w-full  h-7 rounded-md my-5 bg-slate-950"></div>
            <div className="row skeleton w-full  h-7 rounded-md my-5 bg-slate-950"></div>
            <div className="row skeleton w-full  h-7 rounded-md my-5 bg-slate-950"></div>
          </div>
        </div>
      </div>
      <div className="cast flex gap-5 overflow-hidden overflow-x-scroll py-5 rounded-md mt-5">
        {skeleton()}
        {skeleton()}
        {skeleton()}
        {skeleton()}
        {skeleton()}
        {skeleton()}
        {skeleton()}
        {skeleton()}
      </div>
    </div>
  ) : (
    <div className="relative singleMovie w-full h-full">
      <div className="backgroundImage relative mt-16 w-full h-[550px]">
        <img
          src={imageUrl + backdrop_path}
          alt={title + "backdrop_path"}
          className="w-full h-full object-cover object-center"
        />
        <div className="backgroundHider absolute top-0 w-full h-[550px] bg-blue-950 z-10 bg-opacity-70"></div>
        <div className="upperContainer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:p-10 z-20 w-full h-[550px] flex">
          <div className="posterImage hidden md:block md:w-[35%] lg:w-[30%] h-full shadow-md rounded-xl overflow-hidden">
            <img
              src={imageUrl + poster_path}
              alt={title + "poster_path"}
              className="w-full h-full object-cover object-center rounded-xl"
            />
          </div>
          <div className="content w-full md:w-[65%] lg:w-[70%] h-full ml-5 p-2">
            <div className="title">
              <h1 className="text-white text-2xl lg:text-4xl font-bold">{`${title} (${release_date?.slice(
                0,
                4
              )})`}</h1>
            </div>
            <div className="tagline">
              <p className="text-white font-semibold">{tagline}</p>
            </div>
            <div className="genres mt-5">
              {genresName &&
                genresName.map((genre, i) => (
                  <span
                    key={genre + i}
                    className="text-white bg-pink-900 rounded-lg px-2 py-1 mr-2"
                  >
                    {genre}
                  </span>
                ))}
            </div>
            <div className="rating-play flex flex-wrap gap-5 items-center mt-5">
              <CircleRating rating={vote_average?.toFixed(1)} />
              <Icon />
              <div
                className="playbtn flex items-center cursor-pointer text-white hover:text-slate-600 font-semibold px-2 py-1 rounded-md bg-opacity-30"
                onClick={() => {
                  setShow(true);
                  setVideoId(movieTrailer.key);
                }}
              >
                <FontAwesomeIcon icon={faPlay} className="text-xl mr-2" />
                Watch Trailer
              </div>
            </div>
            <div className="description mt-5 ">
              <h1 className="text-white text-2xl font-bold hidden sm:block">
                Overview
              </h1>
              <p className="text-white font-medium hidden sm:block">
                {overview?.slice(0, 80) + "...."}
              </p>
            </div>
            <div className="status-releaseDate-runtime text-white font-bold mt-5 flex gap-5">
              <div className="status ">
                Status:{" "}
                <span className="  text-slate-400 font-semibold ml-1">
                  {status}
                </span>
              </div>
              <div className="releaseDate">
                Release Date:{" "}
                <span className=" text-slate-400 font-semibold ml-1">
                  {release_date}
                </span>
              </div>
              <div className="runtime">
                Runtime:{" "}
                <span className=" text-slate-400 font-semibold ml-1">
                  {toHoursandMins(runtime)}
                </span>
              </div>
            </div>
            <div className="director text-white font-bold mt-5">
              Director:{" "}
              <span className="ml-1 font-semibold text-slate-400">
                {director?.map((obj, i) => {
                  if (i === director.length - 1) {
                    return obj.name;
                  } else {
                    return obj.name + ", ";
                  }
                })}
              </span>
            </div>
            <div className="writer text-white font-bold mt-5">
              Writer:{" "}
              <span className="ml-1 font-semibold text-slate-400">
                {writer?.map((obj, i) => {
                  if (i === writer.length - 1) {
                    return obj.name;
                  } else {
                    return obj.name + ", ";
                  }
                })}
              </span>
            </div>
          </div>
        </div>
        <VideoPopup
          show={show}
          setShow={setShow}
          videoId={videoId}
          setVideoId={setVideoId}
        />
      </div>

      <div className="cast">
        <Cast data={credits?.cast} isLoading={creditsLoading} />
      </div>
    </div>
  );
};

export default SingleMovie;
