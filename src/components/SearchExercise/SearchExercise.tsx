"use client";
import React from "react";
import { useState } from "react";

const SearchExercise = () => {
  const [searchData, setSearchData] = useState("");
  console.log(searchData)
  return (
    <div className="flex gap-4 w-full items-center justify-center">
      <input
        type="text"
        placeholder="What are we doing today?"
        className="w-2/3 border border-black p-3"
        onChange={(e) => {
          setSearchData(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchExercise;
