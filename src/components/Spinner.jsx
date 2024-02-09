import React, { useState, useEffect } from "react";

const Spinner = ({ initialState = false }) => {
  return (
    <div
      className={`flex justify-center items-center w-full ${
        initialState ? "h-screen" : ""
      }`}
    >
      {
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
      }
    </div>
  );
};

export default Spinner;
