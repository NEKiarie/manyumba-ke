import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import BuyerLoginPage from "./pages/BuyerLoginPage";
import BuyerSignUpPage from "./pages/BuyerSignUpPage";
import SellerLoginPage from "./pages/SellerLoginPage";
import SellerSignUpPage from "./pages/SellerSignUpPage";


const App = () => {
  return (
    <div className="max-w-[1440px] w-full mx-auto">
      <Routes>
        <Route path="/" element={<BuyerLoginPage />} />
        <Route path="/buyer/signup" element={<BuyerSignUpPage />} />
        <Route path="/seller" element={<SellerLoginPage/>} />
        <Route path="/seller/signup" element={<SellerSignUpPage/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
    </div>
  );
};

export default App;
