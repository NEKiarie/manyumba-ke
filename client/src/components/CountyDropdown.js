import React, { useState, useEffect, useContext } from "react";

//import icons
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

//import headless ui
import { Menu } from "@headlessui/react";

//import house context
import { HouseContext } from "./HouseContext";

const CountyDropdown = () => {
const { selectedCounty,
  setSelectedCounty, 
    //countries,
   locations } = useContext(HouseContext);    
  const { county } = locations

  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as="div" className="dropdown relative" >
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"       
      >
        <RiMapPinLine className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{county}</div>
          <div className="text-[13px]">{!selectedCounty ? "Select your County" : selectedCounty}</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {locations.map((property, index) => {  
              
          return (
            <Menu.Item
              onClick={() => {                
                setSelectedCounty(county)
              }}
              className="cursor-pointer hover: text-violet-700 transition"
              as="li"
              key={property.id ? property.id : Math.random() + 1}
            >
              {county}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default CountyDropdown;