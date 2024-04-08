import Image from "next/image";
import React from "react";
import Logo from "/public/brand_logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="fixed w-full h-24 shadow-xl bg-slate-100">
        <div className="flex justify-between items-center h-full w-full px-5 2xl:px-16">
          <Link href="/">
            {" "}
            <Image src={Logo} alt="brand_logo" height={80} width={80}></Image>
          </Link>

          <div className="flex items-center px-4 space-x-8">
            <ul className="flex space-x-6">
              <Link href="/exercise" className="hover:text-customGreen">
                <li>Exercises</li>
              </Link>
              <Link href="/exercise" className="hover:text-customGreen">
                <li>Fitness Blog</li>
              </Link>
            </ul>
            <button className="bg-customGreen px-4 py-2 text-white rounded-md transform active:scale-105 hover:bg-customGreenSeconday">
              Sign in
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
