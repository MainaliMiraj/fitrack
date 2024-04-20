"use client";
import React, { useState } from "react";

const BmiCalculator = () => {
  const [height, setHeight] = useState<number | "">("");
  const [weight, setWeight] = useState<number | "">("");
  const [bmiResult, setBmiResult] = useState<number | null>(null);

  function calculateBMI(): void {
    if (typeof height === "number" && typeof weight === "number") {
      const bmi = weight / ((height / 100) * (height / 100));
      setBmiResult(bmi);
    } else {
      console.error("Invalid height or weight");
    }
  }

  function getBmiMessage(bmi: number): string {
    if (bmi < 18.5) {
      return `You are underweight. Consider strength training exercises at least 3 times a week and have enough protein (Your weight in kg * 1.2) gm.`;
    } else if (bmi < 25) {
      return "Your weight is normal. Keep up your health and eat healthy food and exercise regularly.";
    } else if (bmi < 30) {
      return "You are overweight. Please check your daily calorie intake and try to consume 300-400 fewer calories than your maintenance calorie.";
    } else {
      return "You are obese. Please consult a dietitian about your weight loss journey for your healthy life.";
    }
  }

  return (
    <div className="bg-gradient-to-b from-customGreen to-green-700 h-2/3 lg:h-full w-full lg:w-2/4 m-4 p-4 rounded-lg">
      <div className="text-white font-cbold text-3xl">Calculate your BMI</div>
      <div className="flex bg-transparent  h-2/3 flex-col items-center justify-center shadow-lg gap-y-6 w-full p-5  ">
        <div>
          <span className="px-2 text-white">Height:</span>
          <input
            type="number"
            className="p-1.5"
            placeholder="in Cm"
            value={height === "" ? "" : height}
            onChange={(e) =>
              setHeight(e.target.value === "" ? "" : Number(e.target.value))
            }
          ></input>
        </div>

        <div>
          <span className="px-2 text-white">Weight:</span>
          <input
            type="number"
            className="p-1.5"
            placeholder="in Kg"
            value={weight === "" ? "" : weight}
            onChange={(e) =>
              setWeight(e.target.value === "" ? "" : Number(e.target.value))
            }
          ></input>
        </div>

        <button
          className="w-2/5 bg-customGreen hover:bg-customGreenSecondary active:scale-105 p-2 rounded-lg text-white"
          onClick={calculateBMI}
        >
          Calculate your BMI
        </button>
      </div>
      {bmiResult !== null && (
        <div
          className={`text-white ${
            bmiResult !== null && (bmiResult < 18.5 || bmiResult >= 25)
              ? "text-red-500"
              : "text-green-500"
          }`}
        >
          {getBmiMessage(bmiResult)}
        </div>
      )}
    </div>
  );
};

export default BmiCalculator;
