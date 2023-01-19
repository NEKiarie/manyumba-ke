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
  const [saleProperties, setSaleProperties] = useState([]);
  const [loading, setLoading] = useState({
    locations: true,
    properties: true,
    types: true,
    sellerProperties: true,
    sellerListedProperties: true,
    saleProperties: true
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
    password_confirmation:""
  })
  const [showModal, setShowModal] = useState(true);
  const [alertMessagge, setAlertMessagge] = useState({
    type: "",
    show: false,
    title: "",
    body: ""
  })
  const [currentTab, setCurrentTab ] = useState("AddedProperties")
  const [formData, setFormData ] = useState({
    type: 1,
    county: 1,
    location: 1,
    baths: "",
    beds: "",
    size: "",
    price: "",
    imageUrl: ""

  })
  const [errors, setErrors] = useState([])  
  

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
    
    //fetch all properties for a specific seller including marked as for sale
    useEffect(() => {
      if(user){
        axios.get(`/properties/sellers/${user.id}`,{
          "Content-Type": "application/json"
        })      
        .then((response) => {
          const properties = ["Location (any)", ...response.data];
          //console.log("seller properties are: ")
          //console.log(properties)
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

    //fetch all properties for a specific seller that are listed to be sold
    useEffect(() => {
      if(user){
        axios.get(`/properties/listed/${user.id}`,{
          "Content-Type": "application/json"
        })      
        .then((response) => {
          const properties = ["Location (any)",...response.data];
          //console.log("seller properties that are marked to be sold: ")
          //console.log(properties)
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

    //fetch all properties for sale
    // useEffect(() => {
    //   axios.get("/properties/sale",{
    //     "Content-Type": "application/json"
    //   })      
    //   .then((response) => {
    //     const properties = ["Location (any)", ...response.data];
    //     setSaleProperties(properties)
    //     setLoading(currentStatus => {
    //       return {
    //         ...currentStatus,
    //         saleProperties: false
    //       }
    //     })
    //   })
      
  
    // }, [])
    


const handleChange = (event, fn) => {
  const {target} = event
  fn(currentState => {
    return {
      ...currentState,
      [target.name]: target.value
    }
  })
}

const handleAlert = (obj) => {
  setAlertMessagge(obj)
}

const toggleAlert = (show) => {
  setAlertMessagge({
    ...alertMessagge,
    show: show
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

        currentTab,
        setCurrentTab,

        locations,

        setFormSignUpData,
        formSignUpData,

        sellerProperties,
        sellerListedProperties,
        setSellerProperties,
        setListedSellerProperties,

        alertMessagge, 
        setAlertMessagge,

        formData,
        setFormData,

        handleAlert,
        toggleAlert,

        showModal, 
        setShowModal

      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;