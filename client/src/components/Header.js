import React,{ useContext } from "react";
import { HouseContext } from "./HouseContext";
import { useNavigate } from "react-router-dom";


import { Link } from "react-router-dom";


const Header = () => {
  const { setUser } = useContext(HouseContext)
  const navigate = useNavigate()

 const handleClick = () => {
   setUser(null)
   navigate("/")
 }


  return (
    <header className="py-6 mb-12">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}

        <Link to="/home">
        <h1 className="text-4xl lg:text-[60px] font-semibold leading-none mb-2">Manyumba
            <span className="text-violet-800">.ke</span>
          </h1>
        </Link>


        {/* Buttons */}

        <div className="flex items-center gap-6">
        {/* <Link className="hover:text-violet-800 transition text-[20px]" to="">
           My profile
          </Link> */}
          <button onClick={handleClick}
            className="bg-violet-800 hover:bg-violet-900 text-white px-8 py-3 rounded-lg transition"
          >
            Log out
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
