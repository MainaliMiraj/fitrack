"use client";
import React from "react";
import { useState } from "react";
import { Exercises } from "../../../data/Exercises";

const SearchExercise = () => {
  const [searchData, setSearchData] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  console.log(searchData);

  const filterExercises = Exercises.filter((exercise) =>
    exercise.toLowerCase().includes(searchData.toLowerCase())
  );
  return (
    <div className="flex gap-4 w-full items-center flex-col relative">
      <input
        type="text"
        placeholder="What are we doing today?"
        className="w-2/3 border border-black p-3"
        onChange={(e) => {
          setSearchData(e.target.value);
        }}
        onClick={() => setIsClicked(true)}
        onBlur={() => setIsClicked(false)}
      />
      {isClicked && (
        <div className="w-2/3 border border-black mt-1 flex-col transition-all duration-300">
          {filterExercises.map((exercise, index) => (
            <div
              key={index}
              className="p-2 hover:bg-customGreen hover:text-white"
            >
              {exercise}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchExercise;
