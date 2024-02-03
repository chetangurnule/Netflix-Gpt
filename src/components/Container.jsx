import React from "react";

const Container = ({ children }) => {
  return (
    <div className="w-[90%]  mx-auto flex border border-blue-900 overflow-x-scroll">
      {children}
    </div>
  );
};

export default Container;
