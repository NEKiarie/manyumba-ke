import React from "react";
import { FaUserAlt, FaUserCircle } from "react-icons/fa";
import { MdLockOutline, MdOutlineRadioButtonChecked } from "react-icons/md";

const SellerLoginPage = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 mt-40 text-center">
      <div className="mt-5 bg-white rounded-tl-[50px] rounded-br-[50px] shadow-2xl flex w-2/3 max-w-4xl">
        <div className="w-3/5 p-5 items-center justify-center">
          <div className="text-left font-bold text-2xl">
            Manyumba<span className="text-violet-700">.ke</span>
          </div>
          <div className="py-10">
            <h2 className="text-3xl font-bold text-gray-700"> Seller Login</h2>
            <h2 className="text-xl semi-bold text-gray-700">
              Welcome to Manyumba.ke
            </h2>
            <div className="border-2 w-10 bg-violet-800 border-violet-800 inline-block mb-2"></div>
            <div className=" flex justify-center my-2">
              <FaUserCircle className="text-4xl" />
            </div>
            <p className="text-gray-400">Enter your details</p>
            <div className="flex flex-col items-center">
              <div className="bg-white w-64 p-2 flex items-center mb-4">
                <FaUserAlt className="text-gray-800 m-2" />
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="bg-white outline-none text-sm flex-1"
                />
              </div>
              <div className="bg-white w-64 p-2 flex items-center">
                <MdLockOutline className="text-gray-800 m-2" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="bg-white outline-none text-sm flex-1"
                />
              </div>

              <div className="flex justify-between w-64 mb-4 mt-5">
                {/* <label className="flex items-center text-xs">
                  <input type="checkbox" name="remember" className="mr-1" />
                  Remember me
                </label>
                <a href="#" className="text-xs">
                  Forgot Password?
                </a> */}
              </div>
              <button
                className="border-2 border-violet-800 text-violet-800 rounded-full px-12 py-2 inline-block font-semibold
                 hover:bg-violet-800 hover:text-white"
              >
                Log In
              </button>
            </div>
          </div>
        </div>
        {/*SignIn Section */}
        <div className="w-2/5 bg-violet-700 text-white rounded-br-[50px] rounded-tl-[50px]  py-36 px-12">
          <h2 className="text-3xl font-bold mb-2">Hello, Seller!</h2>
          <div className="border-2 w-10 bg-white inline-block mb-2"></div>
          <p className="mb-10">
            Don't have an Account? <br />
            We got you covered! Fill up personal information to get started.
          </p>
          <a
            href="/seller/signup"
            className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-violet-800"
          >
            Create An Account
          </a>
          <a
            href="/buyer"
            className="border-2 border-white mt-4 rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-violet-800"
          >
            Login as a Buyer
          </a>
        </div>
        {/*SignUp Section */}
      </div>
    </main>
  );
};

export default SellerLoginPage;
