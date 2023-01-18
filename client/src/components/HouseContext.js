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
  const [sellerProperties, setSellerProperties] = useState([]);
  const [sellerListedProperties, setListedSellerProperties] = useState([]);
  const [loading, setLoading] = useState({
    locations: true,
    properties: true,
    types: true,
    sellerProperties: true,
    sellerListedProperties: true
  });
  const [ formSignUpData, setFormSignUpData ] = useState({
    first_name: "",
    last_name: "",
    user_name: "",
    avatar_url: "",
    email_address: "",
    phone_number: "+254...",
    location: "",
    password: "",
    confirm_password:""
  })
  

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
    
    //fetch all properties for a specific seller
    useEffect(() => {
      if(user){
        axios.get(`/properties/sellers/${user.id}`,{
          "Content-Type": "application/json"
        })      
        .then((response) => {
          const properties = ["Location (any)", ...response.data];
          console.log("seller properties are: ")
          console.log(properties)
          setSellerProperties(properties)
          setLoading(currentStatus => {
            return {
              ...currentStatus,
              sellerProperties: false
            }
          })
        })
      }  
  
    }, [user])

    //fetch all properties for a specific seller that are listed
    useEffect(() => {
      if(user){
        axios.get(`/listedproperties/sellers/${user.id}`,{
          "Content-Type": "application/json"
        })      
        .then((response) => {
          const properties = ["Location (any)",...response.data];
          console.log("seller properties that are marked to be sold: ")
          console.log(properties)
          setListedSellerProperties(properties)
          setLoading(currentStatus => {
            return {
              ...currentStatus,
              sellerListedProperties: false
            }
          })
        })
      }  
  
    }, [user])
    

//   const handleClick = () => {
//     //console.log(country, property, price)

//     //set loading
//     setLoading(true);

//     //create a function that checks if the string includes '(any)'
//     const isDefault = (str) => {
//       return str.split(" ").includes("(any)");
//     };

const handleChange = (event, fn) => {
  const {target} = event
  fn(currentState => {
    return {
      ...currentState,
      [target.name]: target.value
    }
  })
}




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
        handleChange,
        
        // handleClick,
        
        locations,
        setFormSignUpData,
        formSignUpData,
        sellerProperties,
        sellerListedProperties,
        setListedSellerProperties
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;