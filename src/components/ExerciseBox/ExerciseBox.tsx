import React from "react";
import { Exercises } from "../../../data/Exercises";

const ExerciseGrid = () => {
  return (
    <div className="flex flex-wrap justify-center gap-5 mt-4 w-full">
      {Exercises.map((exercise, index) => (
        <div
          key={index}
          className="w-1/3 p-4 rounded-md text-center bg-customGreen hover:bg-customGreenSecondary text-white cursor-pointer"
        >
          {exercise}
        </div>
      ))}
    </div>
  );
};

export default ExerciseGrid;
