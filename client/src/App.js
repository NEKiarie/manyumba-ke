import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import BuyerSignUpPage from "./pages/BuyerSignUpPage";
import SellerLoginPage from "./pages/SellerLoginPage";
import SellerSignUpPage from "./pages/SellerSignUpPage";
import HomePage from "./pages/HomePage";
import BuyerLoginPage from "./pages/BuyerLoginPage";
import SellerPage from "./pages/SellerPage";
import SellerPropertyDetails from "./components/SellerPropertyDetails";


const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/seller/page" element={<SellerPage />} />
        <Route path="/seller/page/2" element={<SellerPropertyDetails/>} />
        <Route path="/buyer" element={<BuyerLoginPage/>} />
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
