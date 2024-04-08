"use client";

import React, { useState } from "react";
import Link from "next/link";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    console.log("Signing up with:", email, password);
  };

  const validatePassword = (password:any) => {
   
    return password.length >= 8;
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full p-6 bg-white rounded shadow-lg">
        <h2 className="text-2xl mb-4">Sign Up</h2>
        <div className="mb-4">
          <label className="block mb-2">Email:</label>
          <input
            className="border rounded w-full py-2 px-3"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password:</label>
          <input
            className="border rounded w-full py-2 px-3"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {!validatePassword(password) && (
          <p className="text-red-500 mb-4">
            Password must be at least 8 characters long.
          </p>
        )}
        <button
          className={`bg-customGreen hover:bg-customGreenSecondary text-white font-bold py-2 px-4 rounded w-full ${
            !validatePassword(password) ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleSignUp}
          disabled={!validatePassword(password)}
        >
          Sign Up
        </button>
        <div className="mt-2 flex justify-center gap-1 border-l-0">
          <span>Already have an account?</span>
          <Link href="/sign-in" className="hover:text-blue-700 hover:underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
