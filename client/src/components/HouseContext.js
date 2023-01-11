import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

//import data
import { housesData } from "../data";

//create context
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [locations, setLocations] = useState([])
  const [houses, setHouses] = useState(housesData);
  const [selectedCounty, setSelectedCounty] = useState(null);
  const [countries, setCountries] = useState([]);
  const [selectedType, setSelectedType] = useState({
    id: 0,
    description: ""
  });
  const [types, setTypes] = useState([]);
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price range(any)");
  const [loading, setLoading] = useState(false);


  //fetch all locations

  useEffect(() => {
    const locations = axios.get("/locations",{
      "Content-Type": "application/json"
    })    
    .then((response) => {
      const locations = ["Location (any)", ...response.data];
      setLocations(locations)
    })

  }, [])


    //fetch all properties

    useEffect(() => {
      const properties = axios.get("/properties",{
        "Content-Type": "application/json"
      })    
      .then((response) => {
        const properties = ["Location (any)", ...response.data];
        setProperties(properties)
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
      })
  
    }, [])
  
    //console.log(properties)
    //console.log(locations)

  //return all countries
  // useEffect(() => {
  //   const allCountries = houses.map((house) => {
  //     return house.country;
  //   });

  //   //Remove duplicates
  //   const uniqueCountries = ["Location (any)", ...new Set(allCountries)];

  //   // console.log(uniqueCountries)

  //   //set countries state
  //   setCountries(uniqueCountries);
  // }, []);

  //return all properties
  // useEffect(() => {
  //   const allProperties = houses.map((house) => {
  //     return house.type;
  //   });

  //   //Remove duplicates
  //   const uniqueProperties = ["Location (any)", ...new Set(allProperties)];

  //   // console.log(uniqueProperties)

  //   //set properties state
  //   setProperties(uniqueProperties);
  // }, []);

  const handleClick = () => {
    //console.log(country, property, price)

    //set loading
    setLoading(true);

    //create a function that checks if the string includes '(any)'
    const isDefault = (str) => {
      return str.split(" ").includes("(any)");
    };


    //get first value of price and parse it to number
    const minPrice = parseInt(price.split(" ")[0]);

    //get the second value of price which is the maximum price and parse it to number
    const maxPrice = parseInt(price.split(" ")[2]);
    //console.log(maxPrice)

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);

      //if all values are selected
      if (
        (house,
        county === county &&
          house.type === property &&
          housePrice >= minPrice &&
          housePrice <= maxPrice)
      ) {
        return house;
      }

      //if all values are default
      if((isDefault(county) && isDefault(property) && isDefault(price))) {
        return house;
      }

      //if country is not default
      if(!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.county === county;
      }

      //if property is not default
      if(!isDefault(property) && isDefault(country) && isDefault(price)) {
        return house.type === property;
      }

      //if price is not default
      if(!isDefault(price) && isDefault(country) && isDefault(property)) {
        if(housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
      }
    }

    //if country & property is not default
    if(!isDefault(country) && !isDefault(property) && isDefault(price)) {
      return house.country === country && house.type === property;
    }

    //if country & price is not default
    if(!isDefault(country) && isDefault(property) && !isDefault(price)) {
      if(housePrice >= minPrice && housePrice <= maxPrice) {
        return house.country === country;
    }
  }
   //property and price is default
   if(isDefault(country) && !isDefault(property) && isDefault(price)) {
    if (housePrice >= minPrice && housePrice <= maxPrice) {
      return house.type === property;
   }
  }
});

    setTimeout(() => {
      return newHouses.length < 1 ? setHouses([]) : setHouses(newHouses);
      setLoading(false);
    }, 1000)
  };

  return (
    <HouseContext.Provider
      value={{
        selectedCounty,
        setSelectedCounty,
        countries,
        selectedType,
        setSelectedType,
        types,
        properties,
        price,
        setPrice,
        houses,
        loading,
        handleClick,
        loading,
        locations
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
