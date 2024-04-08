"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault();
    // Logic to handle forgot password submission (send email, etc.)
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md ">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Forgot Password
        </h2>
        {submitted ? (
          <p className="text-green-600 text-center mb-4">
            Instructions to reset your password have been sent to your email.
          </p>
        ) : (
          <>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-input mt-1 block w-full"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-customGreen text-white py-2 px-4 rounded-md hover:bg-customGreenSecondary focus:outline-none focus:bg-blue-600"
              >
                Submit
              </button>
            </form>
            <p className="text-center mt-4">
              Remember your password?{" "}
              <Link href="/sign-in">
                <span className="text-blue-500 hover:underline">Login</span>
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
