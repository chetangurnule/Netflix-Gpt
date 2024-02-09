import React from "react";
import netflixLogo from "../assets/netflix-logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto flex flex-col lg:flex-row justify-evenly items-center">
        <div className="flex items-center mb-8 lg:mb-0">
          <img src={netflixLogo} alt="Netflix Logo" className="h-8 mr-2" />
          <span className="text-sm font-semibold mr-4">
            All rights reserved
          </span>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-12">
          <div>
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Browse
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  TV Shows
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Movies
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Information</h4>
            <ul className="text-sm">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Cookie Preferences
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Corporate Information
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <ul className="text-sm flex gap-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
