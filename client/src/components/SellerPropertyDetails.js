import React, {useState, useContext} from "react";
import axios from "axios";
import { HouseContext } from "../components/HouseContext";
import { FaUserAlt, FaHome, FaEnvelope } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";

const BuyerLoginPage = () => {
  const { types, locations, loading } = useContext(HouseContext)
  console.log(types, locations)
  const uniqueCounties = [...new Set(locations.slice(1).map(({county}) => county))]
  
  
  if(loading.types && loading.location){
    return (
      <ImSpinner2 className="mx-auto animate-spin text-violet-700 text-4xl mt-[200px]" />
    );
  }

  
  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 mt-3 mb-6 text-center">
      <div className="mt-5 bg-white rounded-tl-[50px] rounded-br-[50px] shadow-2xl flex w-2/3 max-w-4xl">
        <div className="w-3/5 p-5 items-center justify-center">
          <div className="text-left font-bold text-2xl">
            Manyumba<span className="text-violet-700">.ke</span>
          </div>
          <div className="py-10">
            <h2 className="text-3xl font-bold text-gray-700">Hello</h2>
            <h2 className="text-xl semi-bold text-gray-700">
              Welcome to Manyumba.ke
            </h2>
            <div className="border-2 w-10 bg-violet-800 border-violet-800 inline-block mb-2"></div>
            <div className=" flex justify-center my-2">
              <FaHome className="text-4xl" />
            </div>
            <p className="text-gray-400">Enter Your Property Details!</p>
            <div className="flex flex-col items-center">
              <span>Select Property type </span>
              <div className="bg-white w-64 p-2 flex items-center mb-4">
                <FaHome className="text-gray-800 m-2" />
                {/* <label>Select Your Property type</label> */}
                <select name="type" id="type" className="bg-white outline-none text-sm flex-1">                    
                    {types.slice(1).map(({id, description}) => {
                      return <option key ={id}value={id}>{description}</option>
                    })}
                </select>               
              </div>
              <span>Select County property is located </span>
              <div className="bg-white w-64 p-2 flex items-center mb-4">
                <FaUserAlt className="text-gray-800 m-2" />
                <select name="type" id="type" className="bg-white outline-none text-sm flex-1">                    
                    {uniqueCounties.map((county,index) => {
                      return <option key ={index}value={county}>{county}</option>
                    })}
                </select>
              </div>
              <span>Select Location of the property </span>
              <div className="bg-white w-64 p-2 flex items-center mb-4">
                <FaUserAlt className="text-gray-800 m-2" />
                <select name="type" id="type" className="bg-white outline-none text-sm flex-1">                    
                    {locations.slice(1).map(({name, id},index) => {
                      return <option key ={id}value={id}>{name}</option>
                    })}
                </select>
              </div>
              <span>Number of baths</span>
              <div className="bg-white w-64 p-2 flex items-center mb-4">
                <FaUserAlt className="text-gray-800 m-2" />
                <input
                  type="number"
                  name="baths"
                  placeholder="Enter the Number of Bathrooms"
                  className="bg-white outline-none text-sm flex-1"
                />
              </div>
              <span>Number of beds</span>
              <div className="bg-white w-64 p-2 flex items-center mb-4">
                <FaUserAlt className="text-gray-800 m-2" />
                <input
                  type="number"
                  name="beds"
                  placeholder="Enter the Number of Bedrooms"
                  className="bg-white outline-none text-sm flex-1"
                />
              </div>
              <span>Size of the property</span>
              <div className="bg-white w-64 p-2 flex items-center mb-4">
                <FaUserAlt className="text-gray-800 m-2" />
                <input
                  type="text"
                  name="size"
                  placeholder="Enter the size of Property"
                  className="bg-white outline-none text-sm flex-1"
                />
              </div>
              <span>Price of the property</span>
              <div className="bg-white w-64 p-2 flex items-center mb-4">
                <FaUserAlt className="text-gray-800 m-2" />
                <input
                  type="number"
                  name="price"
                  placeholder="Enter the Price"
                  className="bg-white outline-none text-sm flex-1"
                />
              </div>

              <button
                className="border-2 border-violet-800 text-violet-800 rounded-full px-12 py-2 inline-block font-semibold
                 hover:bg-violet-800 hover:text-white"
              >
                Save Your Details
              </button>
            </div>
          </div>
        </div>
        {/*SignIn Section */}
        <div className="w-2/5 bg-violet-700 text-white rounded-br-[50px] rounded-tl-[50px]  py-36 px-12">
          <h2 className="text-3xl font-bold mb-2">Add Your Property Photo</h2>
          <div className="border-2 w-10 bg-white inline-block mb-2"></div>
          <p className="mb-10">
            ###########
          </p>

          <button className="border-2 mb-4 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-violet-800">
            Upload Your Photo
          </button>

          <a
            href="/seller/page"
            className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-violet-800"
          >
            Back
          </a>
        </div>
        {/*SignUp Section */}
      </div>
    </main>
  );
};

export default BuyerLoginPage;
