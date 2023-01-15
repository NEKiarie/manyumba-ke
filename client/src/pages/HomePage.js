import React from "react";
import { FaUserAlt, FaUserCircle } from "react-icons/fa";
import { MdLockOutline, MdOutlineRadioButtonChecked } from "react-icons/md";

const BuyerLoginPage = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 mt-40 text-center">
      <div className="mt-5 bg-white rounded-tl-[50px] rounded-br-[50px] shadow-2xl flex w-2/3 max-w-4xl">
        <div className="w-3/5 p-5 items-center justify-center">
          <div className="text-left font-bold text-2xl">
            Manyumba<span className="text-violet-700">.ke</span>
          </div>
          <div className="py-10">
            <h2 className="text-3xl font-bold text-gray-700">
              {" "}
              Welcome to Manyumba.ke
            </h2>
            <div className="border-2 w-10 bg-violet-800 border-violet-800 inline-block mb-2"></div>
            <div className=" flex justify-center my-2">
              <FaUserCircle className="text-4xl" />
            </div>
            <p className="text-gray-400">Continue As:</p>
            <div className="flex flex-col items-center justify-center">
              <div className="bg-white w-64 p-2 items-center mb-4">
                <a href="#"
                  className="border-2 border-violet-800 text-violet-800 rounded-full px-12 py-2 inline-block font-semibold
                 hover:bg-violet-800 hover:text-white"
                >
                  Admin
                </a>
              </div>
              <div className="bg-white w-64 p-2 items-center">
                <a href="/buyer"
                  className="border-2 border-violet-800 text-violet-800 rounded-full px-12 py-2 inline-block font-semibold
                 hover:bg-violet-800 hover:text-white"
                >
                  Buyer
                </a>
              </div>
              <div className="bg-white w-64 p-2 items-center">
                <a href="/seller"
                  className="border-2 border-violet-800 text-violet-800 rounded-full px-12 py-2 inline-block font-semibold
                 hover:bg-violet-800 hover:text-white"
                >
                  Seller
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*SignIn Section */}
        <div className="w-2/5 bg-violet-700 text-white rounded-br-[50px] rounded-tl-[50px]  py-36 px-12">
          <h2 className="text-3xl font-bold mb-2">Hello,there</h2>
          <div className="border-2 w-10 bg-white inline-block mb-2"></div>
          <p className="mb-10">
           Discover most suitable property, we got you Covered!
          </p>
        </div>
        {/*SignUp Section */}
      </div>
    </main>
  );
};

export default BuyerLoginPage;
