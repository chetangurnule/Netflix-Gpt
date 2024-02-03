import React from "react";
import netflixLogo from "../assets/netflix-logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and copyright */}
          <div className="col-span-2 lg:col-span-1 flex items-center">
            <img src={netflixLogo} alt="Netflix Logo" className="h-8" />
            <span className="ml-2 text-sm">All rights reserved</span>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="text-sm">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Browse</a>
              </li>
              <li>
                <a href="#">TV Shows</a>
              </li>
              <li>
                <a href="#">Movies</a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Information</h4>
            <ul className="text-sm">
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Cookie Preferences</a>
              </li>
              <li>
                <a href="#">Corporate Information</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <ul className="text-sm flex space-x-4">
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">YouTube</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
