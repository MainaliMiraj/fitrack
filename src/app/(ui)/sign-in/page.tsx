"use client";

import Link from "next/link";
import React, { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    console.log("Signing in with:", email, password);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-slate-100">
      <div className="max-w-md w-full p-6 bg-white rounded shadow-lg h-280">
        <h2 className="text-2xl mb-4">Sign In</h2>
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
        <button
          className="bg-customGreen hover:bg-customGreenSecondary text-white font-bold py-2 px-4 rounded w-full"
          onClick={handleSignIn}
        >
          Sign In
        </button>
        <Link href="/forgot-password">
          <span className="flex items-center justify-center mt-2 cursor-pointer hover:underline hover:text-blue-700">
            Forgot Password?
          </span>
        </Link>

        <div className="flex items-center justify-center py-3 gap-1">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up">
            <span className="text-blue-700 hover:transition duration-300 ease-in-out border-b-2 border-transparent hover:border-blue-500">
              Sign Up
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
