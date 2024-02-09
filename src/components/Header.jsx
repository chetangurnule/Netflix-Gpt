import React from "react";
import { useState, useEffect } from "react";
import netflixLogo from "../assets/netflix-logo.png";
import { useDispatch, useSelector } from "react-redux";
import { FaBell } from "react-icons/fa";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
import UserLogo from "../assets/user-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import useBrowse from "../customHooks/useBrowse";
import { addGenres } from "../utils/GenresSlice";
import useFetch from "../customHooks/useFetch";

const Header = () => {
  const data = useSelector((state) => state.user);
  const [scrolled, setScrolled] = useState(false);
  const [searchIconClicked, setSearchIconClicked] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleDropdown = () => {
    setToggle(!toggle);
  };

  // useBrowse hook to check user is signed in or not
  useBrowse();

  // get the genres and store it in the
  let genres = {};
  const { data: genresData } = useFetch("/genre/movie/list");

  if (genresData.genres) {
    genresData.genres.map((genre) => (genres[genre.id] = genre.name));
    dispatch(addGenres(genres));
  }

  const handleSearchIconClicked = () => {
    setSearchIconClicked(!searchIconClicked);
  };

  const OnSignOutClicked = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  // logic to change bg color on scroll
  const onScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // Add scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && searchText.length > 0) {
      navigate(`../search/${searchText}`);
      setTimeout(() => {
        setSearchIconClicked(false);
      }, 1000);
    }
  };

  return (
    <div
      className={`fixed top-0 w-full z-50  transition-bgColor duration-500 
      } ${data ? "bg-black bg-opacity-90" : ""} ${
        data ? (scrolled ? " bg-slate-900" : "") : ""
      }`}
    >
      <nav className=" flex justify-between items-center w-[90%] mx-auto">
        <div className="left-nav flex items-center">
          <div className=" logo w-24 py-3 sm:py-0 sm:w-40 sm:mr-10">
            <img
              src={netflixLogo}
              alt="logo"
              className="w-full cursor-pointer"
              onClick={() => navigate("/browse")}
            />
          </div>
        </div>
        <div className="right-nav ">
          {data && (
            <div className="flex items-center justify-between gap-5">
              <div className="search-icon">
                {searchIconClicked ? (
                  <div
                    className={`inputBox flex item-center border border-white px-2 py-1 bg-black opacity-50 gap-3 ${
                      searchIconClicked ? "w-[250px]" : ""
                    } transition-width duration-500`}
                  >
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="text-white text-2xl cursor-pointer w-[10%]"
                      onClick={handleSearchIconClicked}
                    />
                    <input
                      type="text"
                      placeholder="Search By Titles"
                      className="bg-black text-white focus:border-transparent focus:outline-none w-[50%] sm:w-[90%]"
                      onChange={(event) => setSearchText(event.target.value)}
                      onKeyUp={searchQueryHandler}
                    />
                  </div>
                ) : (
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="text-white text-2xl cursor-pointer"
                    onClick={handleSearchIconClicked}
                  />
                )}
              </div>
              <div className="children text-white hidden sm:block">
                <p className="cursor-pointer">Children</p>
              </div>
              <div className="notification hidden sm:block">
                <FaBell className="text-white cursor-pointer" />
              </div>
              <div className="signout flex items-center gap-1">
                <div className="user-logo">
                  <img
                    src={UserLogo}
                    alt="user logo"
                    className="cursor-pointer rounded-lg"
                  />
                </div>
                <div className="arrow-sign">
                  <MdArrowDropDown
                    className={`text-3xl text-white cursor-pointer transition-transform ${
                      toggle ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <div
                  className="mainDiv absolute top-4 cursor-pointer w-20 h-12"
                  onMouseEnter={toggleDropdown}
                  onMouseLeave={toggleDropdown}
                >
                  {toggle && (
                    <div className=" relative w-[100px]  dropDown bg-white bg-opacity-60 mt-[45px] text-black shadow-lg rounded-md">
                      <div className=" w-15 h-15cursor-pointer absolute -top-5">
                        <MdArrowDropUp className="text-white text-3xl" />
                      </div>
                      <p
                        className="hover:underline cursor-pointer px-3 py-2 text-center"
                        onClick={OnSignOutClicked}
                      >
                        Sign out
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
