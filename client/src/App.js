import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import BuyerSignUpPage from "./pages/BuyerSignUpPage";
import SellerLoginPage from "./pages/SellerLoginPage";
import SellerSignUpPage from "./pages/SellerSignUpPage";
import HomePage from "./pages/HomePage";
import BuyerLoginPage from "./pages/BuyerLoginPage";
import LoginPage from "./pages/LoginPage";
import SellerPage from "./pages/SellerPage";
import SellerPropertyDetails from "./components/SellerPropertyDetails";
import ProtectedRoute from "./utils/ProtectedRoute";
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// const initialOptions = {
//   "client-id": "test",
//   currency: "USD",
//   intent: "capture",
//   "data-client-token": "abc123xyz==",
// };


const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
       {/* <PayPalScriptProvider deferloading={true}options={{ "client-id": "test" }}>
            <PayPalButtons style={{ layout: "horizontal" }} />
        </PayPalScriptProvider> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/seller/page" element={<SellerPage />} />        
        <Route path="/buyer" element={<BuyerLoginPage/>} />
        <Route path="/buyer/signup" element={<BuyerSignUpPage />} />
        <Route path="/seller" element={<SellerLoginPage/>} />
        <Route path="/seller/signup" element={<SellerSignUpPage/>} /> 
        <Route element = {< ProtectedRoute /> }>
          <Route path="/seller/page/2" element={<SellerPropertyDetails/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
        </Route>
      </Routes>
    
    </div>
  );
};

export default App;
