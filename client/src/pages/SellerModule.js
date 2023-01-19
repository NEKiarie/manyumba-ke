import React, { useState, useContext } from "react";
import axios from "axios";
import { HouseContext } from "../components/HouseContext";
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import FeaturedProperty from './FeaturedProperty';



const Seller = () => {
  const {handleAlert, toggleAlert, loading, properties,setProperties, user, currentTab, setCurrentTab, alertMessagge, setAlertMessagge, formData, locations, setFormData, setShowModal, showModal} = useContext(HouseContext);

  const changeCurrentTab = (tab) => {
    setCurrentTab(tab)
  }



  const handleClick = () => {
    const newPropertyLocation = locations[Number(formData.location)] 
    const new_property = {
      type_id: formData.type,
      address: `${newPropertyLocation.county}, ${newPropertyLocation.name}`,
      location_id: formData.location,
      price: formData.price,
      beds: formData.beds,
      baths: formData.baths,
      size: formData.size,
      image_url: formData.imageUrl,
      notes: "Very good properties with ample size",
      for_sale: false,
      seller_id: user.id,
      description: formData.description
    };
      
    axios.post("/properties", new_property)
    .then(response =>{ 
      setProperties(currentProperties => {
        return [
          ...currentProperties,
          response.data
        ]
      })      
      setAlertMessagge({
        type: "success",
        show: true,
        title: "Property Creation",
        body: "The property was added successfully in the database"
      })
      setFormData({
        type: 1,
        county: 1,
        location: 1,
        baths: "",
        beds: "",
        size: "",
        price: "",
        imageUrl: "",
        description: ""    
      }) 
    })
    .catch(error => {
      console.log("something went wrong")
      console.log(error.message)
      setAlertMessagge({
        type: "failed",
        show: true,
        title: "Property Creation",
        body: "The property was NOT added successfully in the database"
      })
    })
      
  }; 
  const userId = user.id
  const arrayProperties = properties.slice(1) 
  const sellerProperties = arrayProperties.filter(property => property.seller.id === userId) 
  
  let displayProperties = []  
  if (currentTab === "AddedProperties"){
    //all properties for that user      
      displayProperties =  sellerProperties  
  }else if(currentTab === "ListedProperties"){
    //all properties listed for sale for that user
      displayProperties = sellerProperties.filter(property => property.for_sale)     
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
       setShowModal={setShowModal}
       showModal={showModal}
       setAlertMessagge = {handleAlert}
       alertMessagge ={alertMessagge}
       toggleAlert ={toggleAlert}
       handleClick = {handleClick}
    />
    <Footer />
  </div>;
};

export default Seller;
