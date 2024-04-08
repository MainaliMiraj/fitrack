"use client";
import React, { useState } from "react";

const BmiCalculator = () => {
  const [height, setHeight] = useState<number | "">("");
  const [weight, setWeight] = useState<number | "">("");

  function calculateBMI(): void {
    if (typeof height === "number" && typeof weight === "number") {
      const bmi = weight / ((height / 100) * (height / 100));
      console.log("BMI:", bmi);
    } else {
      console.error("Invalid height or weight");
    }
  }

  return (
    <div className="bg-gradient-to-b from-customGreen to-green-700 h-2/3 w-2/4 m-4 p-4 rounded-lg">
      <div className="text-white font-bold text-3xl">Calculate your BMI</div>
      <div className="flex bg-transparent  h-2/3 flex-col items-center justify-center shadow-lg gap-y-6 w-full p-5  ">
        <div>
          <span>Height:</span>
          <input
            type="text"
            className="p-1.5"
            placeholder="in Cm"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
          ></input>
        </div>

        <div>
          <span>Weight:</span>
          <input
            type="text"
            className="p-1.5"
            placeholder="in Kg"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
          ></input>
        </div>

        <button
          className="w-2/5 bg-customGreen hover:bg-customGreenSecondary active:scale-105 p-2 rounded-lg text-white"
          onClick={calculateBMI}
        >
          Calculate your BMI
        </button>
      </div>
    </div>
  );
};

export default BmiCalculator;
