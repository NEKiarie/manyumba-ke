import React from "react";
import { FaUserAlt, FaUserCircle, FaEnvelope } from "react-icons/fa";

const BuyerLoginPage = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 mt-3 mb-20 text-center">
      <div className="mt-5 bg-white rounded-tl-[50px] rounded-br-[50px] shadow-2xl flex w-2/3 max-w-4xl">
        <div className="w-3/5 p-5 items-center justify-center">
          <div className="py-10">
            <h2 className="text-3xl font-bold text-gray-700">Hello</h2>
            <h2 className="text-xl semi-bold text-gray-700">
              Welcome to Manyumba.ke
            </h2>
            <div className="border-2 w-10 bg-violet-800 border-violet-800 inline-block mb-2"></div>
            <div className=" flex justify-center my-2">
              <FaUserCircle className="text-4xl" />
            </div>
            <p className="text-gray-400">Lets get you Started!</p>
            <div className="flex flex-col items-center">
              <div className="bg-white w-64 p-2 flex items-center mb-4">
                <FaUserAlt className="text-gray-800 m-2" />
                <input
                  type="text"
                  name="firstname"
                  placeholder="Enter your First Name"
                  className="bg-white outline-none text-sm flex-1"
                />
              </div>

              <div className="bg-white w-64 p-2 flex items-center mb-4">
                <FaUserAlt className="text-gray-800 m-2" />
                <input
                  type="text"
                  name="lastname"
                  placeholder="Enter Your Last Name"
                  className="bg-white outline-none text-sm flex-1"
                />
              </div>

              <div className="bg-white w-64 p-2 flex items-center mb-4">
                <FaEnvelope className="text-gray-800 m-2" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email Address"
                  className="bg-white outline-none text-sm flex-1"
                />
              </div>

              <a
                href="/seller/page/2"
                className="border-2 border-violet-800 text-violet-800 rounded-full px-12 py-2 inline-block font-semibold
                 hover:bg-violet-800 hover:text-white"
              >
                Next
              </a>
            </div>
          </div>
        </div>
        {/*SignIn Section */}
        <div className="w-2/5 bg-violet-700 text-white rounded-br-[50px] rounded-tl-[50px]  py-36 px-12">
          <h2 className="text-3xl font-bold mb-2">Add a Photo.</h2>
          <div className="border-2 w-10 bg-white inline-block mb-2"></div>
          <p className="mb-10">
           ################
          </p>
          <button className="border-2 mb-4 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-violet-800">
            Upload Your Photo
          </button>
        </div>
        {/*SignUp Section */}
      </div>
    </main>
  );
};

export default BuyerLoginPage;
