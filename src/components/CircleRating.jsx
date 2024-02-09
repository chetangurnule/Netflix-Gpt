import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircleRating = ({ rating }) => {
  return (
    <div className="circleRating w-12 h-12 lg:w-16 lg:h-16">
      <CircularProgressbar
        value={rating}
        maxValue={10}
        text={rating}
        styles={buildStyles({
          pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
        })}
      />
    </div>
  );
};

export default CircleRating;
