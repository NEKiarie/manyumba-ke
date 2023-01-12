import React,{ useState, useEffect} from "react";
import axios from "axios"
import { RiMapPinLine } from 'react-icons/ri'

//import icons
import { BiBed, BiBath, BiArea } from "react-icons/bi";

const House = ({ property }) => {
  const [location, setLocation] = useState({})
  const [type, setType] = useState({})
  const { image_url, type_id, location_id, address, beds, baths, size, price } =
    property;
    
    //fetch a particular location
    useEffect(() => {
      axios.get(`/locations/${location_id}`,{
        "Content-Type": "application/json"
      })        
      .then((response) => {        
        setLocation(response.data)
      })    

    },[location_id])

    //fetch a particular type
    useEffect(() => {
      axios.get(`/types/${type_id}`,{
        "Content-Type": "application/json"
      })        
      .then((response) => {        
        setType(response.data)
      })    

    },[type_id])
    

  return (
    <div
      className="bg-white shadow-1 p-5 rounded-lg rounded-tl-[70px] w-full max-w-[352px] mx-auto cursor-pointer
    hover:shadow-2xl transition"
    >
      <img
        className="mb-9 rounded-tl-[70px] rounded-br-[70px]"
        src={image_url}
        alt=""
      />
      <div className="mb-4 flex gap-x-2 text-sm">
        <div className="bg-green-500 rounded-full text-white px-3">{type.description}</div>
        <div className="bg-violet-500 rounded-full text-white px-3">
          {location.county}
        </div>
      </div>
      <div className="text-lg font-semibold max-w-[260px] flex">
      <RiMapPinLine className="dropdown-icon-primary" />{address}</div>
      <div className="flex gap-x-4 my-4">
        <div className="flex items-center text-gray-600 gap-1">
          <div className="text-[20px]">
            <BiBed />
          </div>
          <div>{beds}</div>
        </div>
        <div className="flex items-center text-gray-600 gap-1">
          <div className="text-[20px]">
            <BiBath />
          </div>
          <div>{baths}</div>
        </div>
        <div className="flex items-center text-gray-600 gap-1">
          <div className="text-[20px]">
            <BiArea />
          </div>
          <div>{size}</div>
        </div>
      </div>
      <div className="text-lg font-semibold text-violet-600 mb-4 ">Ksh {price}</div>
    </div>
  );
};

export default House;
