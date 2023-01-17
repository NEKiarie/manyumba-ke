import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

//import data
//import { housesData } from "../data";

//create context
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [locations, setLocations] = useState([]);
  const [selectedCounty, setSelectedCounty] = useState(null);
  const [user, setUser] = useState(null);
  const [selectedType, setSelectedType] = useState({
    id: 0,
    description: ""
  });
  const [types, setTypes] = useState([]);
  const [properties, setProperties] = useState([]); 
  const [loading, setLoading] = useState({
    locations: true,
    properties: true,
    types: true
  });


  //fetch all locations

  useEffect(() => {
    const locations = axios.get("/locations",{
      "Content-Type": "application/json"
    })    
    .then((response) => {
      const locations = ["Location (any)", ...response.data];
      setLocations(locations)
      setLoading(currentStatus => {
        return {
          ...currentStatus,
          locations: false
        }
      })
    })

  }, [])


    //fetch all properties

    useEffect(() => {
      axios.get("/properties",{
        "Content-Type": "application/json"
      })      
      .then((response) => {
        const properties = ["Location (any)", ...response.data];
        setProperties(properties)
        setLoading(currentStatus => {
          return {
            ...currentStatus,
            properties: false
          }
        })
      })
      
  
    }, [])

   //Fetching types

    useEffect(() => {
      const locations = axios.get("/types",{
        "Content-Type": "application/json"
      })    
      .then((response) => {
        const types = ["Type (any)", ...response.data];
        setTypes(types)
        setLoading(currentStatus => {
          return {
            ...currentStatus,
            types: false
          }
        })
      })
  
    }, [])
    // console.log("in HouseContext js")
    // console.log(properties)
    // console.log(locations)
    // console.log("ending housecountext js")
//   const handleClick = () => {
//     //console.log(country, property, price)

//     //set loading
//     setLoading(true);

//     //create a function that checks if the string includes '(any)'
//     const isDefault = (str) => {
//       return str.split(" ").includes("(any)");
//     };




  return (
    <HouseContext.Provider
      value={{
        selectedCounty,
        setSelectedCounty,
        selectedType,
        setSelectedType,
        types,
        properties,
        setProperties,       
        loading,
        setLoading,
        setUser,
        user,
        
        // handleClick,
        
        locations
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;