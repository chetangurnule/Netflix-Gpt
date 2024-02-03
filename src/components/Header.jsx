import React from "react";
import { useState, useEffect } from "react";
import { Container } from "./index";
import netflixLogo from "../assets/netflix-logo.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { FaBell } from "react-icons/fa";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
import { addUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import UserLogo from "../assets/user-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const data = useSelector((state) => state.user);
  const [scrolled, setScrolled] = useState(false);
  const [searchIconClicked, setSearchIconClicked] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setToggle(!toggle);
  };

  const handleClearSearch = () => {
    setSearchText("");
  };

  const handleSearchIconClicked = () => {
    setSearchIconClicked(!searchIconClicked);
  };

  const OnSignOutClicked = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { displayName, email, uid } = user;
        dispatch(addUser({ displayName, email, uid }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return (
    <div
      className={`fixed top-0 w-full z-10  transition-bgColor duration-500 ${
        data ? "bg-black bg-opacity-90" : ""
      } ${data ? (scrolled ? " bg-slate-900" : "") : ""}`}
    >
      <nav className=" flex justify-between items-center w-[90%] mx-auto">
        <div className="left-nav flex items-center">
          <div className=" logo w-20 md:w-32 lg:w-40 mr-10">
            <img src={netflixLogo} alt="logo" className="w-full" />
          </div>
          {data && (
            <div className="ul-list hidden lg:block">
              <ul className="text-white flex gap-8">
                <li className=" cursor-pointer hover:text-slate-400">Home</li>
                <li className=" cursor-pointer hover:text-slate-400">
                  Tv Shows
                </li>
                <li className=" cursor-pointer hover:text-slate-400">Movies</li>
                <li className=" cursor-pointer hover:text-slate-400">
                  New and Popular
                </li>
                <li className=" cursor-pointer hover:text-slate-400">
                  Trending
                </li>
              </ul>
            </div>
          )}
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
                      placeholder="Titles, people, genres"
                      className="bg-black text-white focus:border-transparent focus:outline-none  w-[90%]"
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
              <div className="children text-white">
                <p className="cursor-pointer">Children</p>
              </div>
              <div className="notification">
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
