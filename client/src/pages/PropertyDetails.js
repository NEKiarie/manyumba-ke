import React, { useContext, useEffect, useState } from "react";

import wretch from "wretch";
import { useParams } from "react-router-dom";
import { RiMapPinLine } from "react-icons/ri";

//import icons
import { ImSpinner2 } from "react-icons/im";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { HouseContext } from "../components/HouseContext";
import { usernameCheck } from "../utils/validators";

const PropertyDetails = () => {
  const { loading, properties, user, setSellerProperties, setProperties, setAlertMessagge } = useContext(HouseContext)
  let { id, type } = useParams();
  id = Number(id)  

  if (loading.properties) {
    return (
      <ImSpinner2 className="mx-auto animate-spin text-violet-700 text-4xl mt-[200px]" />
    );
  }

  const property = properties.find(property => property.id === id) 
  const newLocal = "bg-green-500";
  const handleDelist = (property) => {

  }

  const handleEnlist = (property) => {
    wretch(`/properties/${property.id}`)
    .patch({property_id: property.id, for_sale: true})
    .notFound(error => { 
      setAlertMessagge({
        type: "failed",
        show: true,
        title: "Property Update",
        body: "The property was NOT Found and therefore the Update Failed"
      })
     })
    .unauthorized(error => { 
        setAlertMessagge({
          type: "failed",
          show: true,
          title: "Property Update",
          body: "The are not Authorised to put up the property for Sale"
        })
     })
    .error(418, error => {
      setAlertMessagge({
        type: "failed",
        show: true,
        title: "Property Update",
        body: "The update failed with a 418 error message"
      })
     })
    .res(response => {
      updateProperties(response.data)
      setAlertMessagge({
        type: "success",
        show: true,
        title: "Property Update",
        body: "The property was Enlisted successfully and is now on sale"
      })
    })
    .catch(error => {
      setAlertMessagge({
        type: "failed",
        show: true,
        title: "Property Update",
        body: "Something went wrong"
      })
     })

  }

  const updateProperties = (updatedProperty) => {
    setProperties(currentList => {
      return currentList.map(property => {
        return property.id === updatedProperty.id ? updatedProperty : property
      })
    })
  }
  

  return (
    <section className="bg-white">
      <Header />
      <div className="container mx-auto min-h-[800px] mb-14">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="mb-4 lg:mb-0 flex gap-x-1 ">
            {/* <h2 className="text-2xl font-semibold">{property.type_id}</h2> */}
            <RiMapPinLine className="dropdown-icon-primary" />
            <h3 className="text-lg mb-4 font-semibold">{property.address}</h3>
          </div>
          <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
            <div className="bg-green-500 text-white px-3 rounded-full">
              {property.type.description}
            </div>
            <div className="bg-violet-500 text-white px-3 rounded-full">
              {property.location.county}
            </div>
          </div>
          <div className="text-3xl font-semibold text-violet-500">
            Ksh {property.price}
          </div>
        </div>
        <div className="flex flex-col item-start gap-8 lg:flex-row">
          <div className="max-w-[768px]">
            <div className="mb-8">
              <img
                src={property.image_url}
                alt=""
                className="rounded-tl-[90px] rounded-br-[90px] rounded-tr-[10px] rounded-bl-[10px] "
              />
            </div>
            <div className="flex gap-x-6 text-violet-700 mb-6">
              <div className="flex gap-x-2 items-center">
                <BiBed className="text-2xl" />
                <div>{property.beds}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiBath className="text-2xl" />
                <div>{property.baths}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiArea className="text-2xl" />
                <div>{property.size}</div>
              </div>
            </div>
            <div>{property.description}</div>
          </div>
          <div className={`flex-1 bg-white-100 w-full mb-8 border ${type == "seller" ? "border-gray-300" : ""} rounded-lg px-6 py-8`}>
          {
            type !== "seller" &&<div className="flex items-center gap-x-4 mb-8">
              <div className="w-20 h-20">
                <img src={property.size} alt="" />
              </div>
              <div>
              <a href="https://www.paypal.com/signin?returnUri=https%3A%2F%2Fwww.paypal.com%2Fmyaccount%2Ftransfer&state=%2Fhomepage%3Ffrom%3DSUM-QuickLink" target="_blank" className="border border-violet-700
                 text-violet-700 hover:border-violet-800 
                hover:text-violet-500 rounded p-4 text-sm w-full transition">
                  Make your Payment
                </a>
              </div>
            </div>
          }
            {type !== "seller" && <form className="flex flex-col gap-y-4" onSubmit={(event) => event.preventDefault()}>
              {/* <input
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
                type="text"
                placeholder="Name"
              />
              <input
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
                type="text"
                placeholder="Phone"
              />
              <input
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
                type="text"
                placeholder="Email"
              />
              <textarea
                className="border border-gray-300 focus:border-violet-700 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-400"
                placeholder="Message"
                defaultValue="Hello I am Interested in [Modern apartment]"
              ></textarea> */}
              {/* <button className="bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition">
                  Send Message
                </button> */}
              <div className="flex gap-4 mt-2">
                
              </div>
                </form>
                }
            {type === "seller" && 
            <div className="flex flex-col items-center space-x-2 lg:flex-row">
              <button className="bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition" onClick={(event) => handleEnlist(property)} disabled={property.for_sale}>
                Enlist
              </button>                
              <button className="border border-violet-700 text-violet-700 hover:border-violet-800 hover:text-violet-500 rounded p-4 text-sm w-full transition" onClick={(evnt) => handleDelist(property)}>
                Delist
              </button>
            </div>
            }

          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default PropertyDetails;
