import React, { useState, useContext } from "react";
import { HouseContext } from "../components/HouseContext";
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import FeaturedProperty from './FeaturedProperty';



const Seller = () => {
  const { loading, properties, user, sellerProperties, sellerListedProperties } = useContext(HouseContext);

  const [currentTab, setCurrentTab ] = useState("AddedProperties")
  const changeCurrentTab = (tab) => {
    setCurrentTab(tab)
  }
  
  let displayProperties = []  
  if (currentTab === "AddedProperties"){
      displayProperties = sellerProperties.slice(1)     
  }else if(currentTab === "ListedProperties"){
      displayProperties = sellerListedProperties.slice(1)      
  }
  return <div className='min-h-auto bg-white'>
    <Header />
    <Banner />
    <FeaturedProperty
       loading={loading}
       properties={displayProperties}
       user={user}
       belongsTo="seller"
       currentTab = {currentTab}
       changeCurrentTab ={changeCurrentTab}
    />
    <Footer />
  </div>;
};

export default Seller;
