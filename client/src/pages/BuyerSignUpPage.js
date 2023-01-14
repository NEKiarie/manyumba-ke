import React from "react";
import { FaUserAlt, FaUserCircle } from "react-icons/fa";
import { MdLockOutline, MdOutlineRadioButtonChecked } from "react-icons/md";

const BuyerSignUpPage = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 mt-39 text-center">
      <div className="mt-5 bg-white rounded-tl-[50px] rounded-br-[50px] shadow-2xl flex w-2/3 max-w-4xl">
        <div className="w-3/5 p-5 items-center justify-center">
          <div className="text-left font-bold text-2xl">
            Manyumba<span className="text-violet-700">.ke</span>
          </div>
          <div className="py-10">
            <h2 className="text-3xl font-bold text-gray-700">Buyer Sign Up</h2>
            <h2 className="text-xl semi-bold text-gray-700">
              Buy your desired property anywhere, anytime!
            </h2>
            <div className="border-2 w-10 bg-violet-800 border-violet-800 inline-block mb-2"></div>
            <div className=" flex justify-center my-2">
              <FaUserCircle className="text-4xl" />
            </div>
            <p className="text-gray-400">Create an Account</p>
            <div className="flex flex-col items-center">
              <div className="bg-white w-64 p-2 flex items-center mb-4">
                <FaUserAlt className="text-gray-800 m-2" />
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter your First name"
                  className="bg-white outline-none text-sm flex-1"
                />
              </div>
              <div className="bg-white w-64 p-2 flex items-center mb-4">
                <FaUserAlt className="text-gray-800 m-2" />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter your Last name"
                  className="bg-white outline-none text-sm flex-1"
                />
              </div>
              <div className="bg-white w-64 p-2 flex items-center mb-4">
                <FaUserAlt className="text-gray-800 m-2" />
                <input
                  type="text"
                  name="username"
                  placeholder="Create your Username"
                  className="bg-white outline-none text-sm flex-1"
                />
              </div>
              <div className="bg-white w-64 p-2 flex items-center">
                <MdLockOutline className="text-gray-800 m-2" />
                <input
                  type="password"
                  name="password"
                  placeholder="Create your Password"
                  className="bg-white outline-none text-sm flex-1"
                />
              </div>
              <div className="bg-white w-64 p-2 flex items-center mb-2">
                <MdLockOutline className="text-gray-800 m-2" />
                <input
                  type="password"
                  name="password"
                  placeholder="Confirm your Password"
                  className="bg-white outline-none text-sm flex-1"
                />
              </div>
              <button
                
                className="border-2 border-violet-800 text-violet-800 rounded-full px-12 py-2 inline-block font-semibold
                 hover:bg-violet-800 hover:text-white mb-2"
              >
                Create Your Account
              </button>
              <label className="font-semibold text-gray-800">Existing User? <a href="/" className="border-2 rounded-full inline-block px-9 font-semibold border-violet-800
               text-violet-800  hover:bg-violet-800 hover:text-white mt-2">Login</a></label>
            </div>
          </div>
        </div>
        {/*SignIn Section */}
        <div className="w-2/5 bg-violet-700 text-white rounded-br-[50px] py-36 px-12">
          <h2 className="text-3xl font-bold mb-2">Hello, Seller!</h2>
          <div className="border-2 w-10 bg-white inline-block mb-2"></div>
          <p className="mb-10">
            Do you have a property you want to sell? Let us help you out!.
          </p>
          <a
            href="/seller"
            className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-violet-800"
          >
            Get Started
          </a>
        </div>
        {/*SignUp Section */}
      </div>
    </main>
  );
};

export default BuyerSignUpPage;
