import React from "react";
import { FaUserAlt, FaHome, FaEnvelope } from "react-icons/fa";

const BuyerLoginPage = () => {
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
              <div className="bg-white w-64 p-2 flex items-center mb-4">
                <FaHome className="text-gray-800 m-2" />
                <input
                  type="text"
                  name="type"
                  placeholder="Enter your Property Type"
                  className="bg-white outline-none text-sm flex-1"
                />
              </div>

              <div className="bg-white w-64 p-2 flex items-center mb-4">
                <FaUserAlt className="text-gray-800 m-2" />
                <input
                  type="text"
                  name="county"
                  placeholder="Enter Your County Name"
                  className="bg-white outline-none text-sm flex-1"
                />
              </div>

              <div className="bg-white w-64 p-2 flex items-center mb-4">
                <FaUserAlt className="text-gray-800 m-2" />
                <input
                  type="text"
                  name="location"
                  placeholder="Enter Your Location Name"
                  className="bg-white outline-none text-sm flex-1"
                />
              </div>

              <div className="bg-white w-64 p-2 flex items-center mb-4">
                <FaUserAlt className="text-gray-800 m-2" />
                <input
                  type=""
                  name="baths"
                  placeholder="Enter the Number of Bathrooms"
                  className="bg-white outline-none text-sm flex-1"
                />
              </div>

              <div className="bg-white w-64 p-2 flex items-center mb-4">
                <FaUserAlt className="text-gray-800 m-2" />
                <input
                  type=""
                  name="beds"
                  placeholder="Enter the Number of Bedrooms"
                  className="bg-white outline-none text-sm flex-1"
                />
              </div>

              <div className="bg-white w-64 p-2 flex items-center mb-4">
                <FaUserAlt className="text-gray-800 m-2" />
                <input
                  type=""
                  name="size"
                  placeholder="Enter the size of Property"
                  className="bg-white outline-none text-sm flex-1"
                />
              </div>

              <div className="bg-white w-64 p-2 flex items-center mb-4">
                <FaUserAlt className="text-gray-800 m-2" />
                <input
                  type=""
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
