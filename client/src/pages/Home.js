import React, { useState, useContext } from "react";
import { HouseContext } from "../components/HouseContext";

import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import FeaturedProperty from './FeaturedProperty';



const Home = () => {
  const { loading, properties, user, sellerProperties, sellerListedProperties, saleProperties } = useContext(HouseContext);
  const [currentTab, setCurrentTab ] = useState("PropertiesOnSale")
  const changeCurrentTab = (tab) => {
    setCurrentTab(tab)
  }
  
  return <div className='min-h-auto bg-white'>
    <Header />
    <Banner />
    <FeaturedProperty
      loading={loading}
      properties={properties.slice(1)}
      user={user}
      belongsTo="buyer"
      currentTab = {currentTab}
      changeCurrentTab ={changeCurrentTab} 
    />
    <Footer />
  </div>;
};

export default Home;
