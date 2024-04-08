"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "/public/brand_logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <nav className="relative w-full shadow-xl bg-slate-100">
        <div className="flex justify-between items-center h-24 px-5 2xl:px-16">
          <Link href="/">
            <span>
              <Image src={Logo} alt="brand_logo" height={80} width={80} />
            </span>
          </Link>

          {/* Hamburger Icon */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-3xl text-customGreen">
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden absolute top-full right-0 mt-1 bg-slate-100 w-full ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col items-center">
              <li className="py-3 border-b border-gray-300 w-full text-center">
                <Link
                  href="/exercise"
                  className="hover:text-customGreen"
                  onClick={closeMenu}
                >
                  <span>Exercises</span>
                </Link>
              </li>
              <li className="py-3 border-b border-gray-300 w-full text-center">
                <Link
                  href="/fitness-blog"
                  className="hover:text-customGreen"
                  onClick={closeMenu}
                >
                  <span>Health & Fitness</span>
                </Link>
              </li>
              <li className="py-3 w-full text-center">
                <Link href="/sign-in" onClick={closeMenu}>
                  <span className="bg-customGreen text-white px-6 py-2 rounded-md inline-block">
                    Sign In
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <ul className="flex space-x-6">
              <li>
                <Link href="/exercise" className="hover:text-customGreen">
                  <span>Exercises</span>
                </Link>
              </li>
              <li>
                <Link href="/fitness-blog" className="hover:text-customGreen">
                  <span>Health & Fitness</span>
                </Link>
              </li>
            </ul>
            <button className="bg-customGreen px-10 py-2 text-white rounded-md transform active:scale-105 hover:bg-customGreenSecondary">
              <Link href="/sign-in">Sign In</Link>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
