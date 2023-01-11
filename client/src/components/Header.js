import React from "react";

import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="py-6 mb-12">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}

        <Link to="/">
        <h1 className="text-4xl lg:text-[60px] font-semibold leading-none mb-2">Manyumba-
            <span className="text-violet-700">ke</span>
          </h1>
        </Link>


        {/* Buttons */}

        <div className="flex items-center gap-6">
        <Link className="hover:text-violet-900 transition text-[20px]" to="">
            My profile
          </Link>
          <Link
            className="bg-violet-700 hover: bg-violet-800 text-white px-8 py-3 rounded-lg transition"
            to=""
          >
            Log out
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
