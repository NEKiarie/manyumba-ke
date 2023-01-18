import React, { useState, useContext } from "react";

//import icons
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

//import headless ui
import { Menu } from "@headlessui/react";

//import house context
import { HouseContext } from "./HouseContext";

const PropertyDropdown = () => {
  const { selectedType, setSelectedType, types } = useContext(HouseContext);
  // console.log(properties);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiHome5Line className="dropdown-icon-primary" />
        <div>
        <div className="text-[13px]">Select your Type</div>
          <div className="text-[15px] font-medium leading-tight">
            {selectedType.description}
          </div>
         
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" key={1} />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" key={2} />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {types.map((type, index) => {
          return ( 
            <Menu.Item
              onClick={() => setSelectedType(type)}
              className="cursor-pointer hover: text-violet-700 transition"
              as="li"
              key={type.id ? type.id : Math.random() + 1}
            >
              {type.description}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;