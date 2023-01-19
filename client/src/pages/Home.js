import React, { useState, useContext } from "react";
import { HouseContext } from "../components/HouseContext";

import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import FeaturedProperty from './FeaturedProperty';



const Home = () => {
  const {setShowModal, loading, properties, user, currentTab, setCurrentTab,toggleAlert, showModal, handleAlert, alertMessagge } = useContext(HouseContext);
  
  const changeCurrentTab = (tab) => {
    setCurrentTab(tab)
  }
  const propertiesForSale = properties.slice(1).filter(property => property.for_sale)
  return <div className='min-h-auto bg-white'>
    {/* <Header /> */}
    <Banner />
    <FeaturedProperty
      loading={loading}
      properties={propertiesForSale}
      user={user}
      belongsTo="buyer"
      currentTab = {currentTab}
      changeCurrentTab ={changeCurrentTab}  
      setShowModal={setShowModal}
      showModal={showModal}
      setAlertMessagge = {handleAlert}
      alertMessagge ={alertMessagge}
      toggleAlert ={toggleAlert}
    />
    <Footer />
  </div>;
};

export default Home;
