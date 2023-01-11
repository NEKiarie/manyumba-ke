import React from "react";
import { RiMapPinLine } from 'react-icons/ri'

//import icons
import { BiBed, BiBath, BiArea } from "react-icons/bi";

const House = ({ property }) => {
  const { imageUrl, type_id, location_id, address, beds, baths, size, price } =
    property;

  return (
    <div
      className="bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer
    hover:shadow-2xl transition"
    >
      <img
        className="mb-8 rounded-tl-[90px] rounded-br-[90px]"
        src={imageUrl}
        alt=""
      />
      <div className="mb-4 flex gap-x-2 text-sm">
        <div className="bg-green-500 rounded-full text-white px-3">{type_id}</div>
        <div className="bg-violet-500 rounded-full text-white px-3">
          {location_id}
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
      <div className="text-lg font-semibold text-violet-600 mb-4 ">{price}</div>
    </div>
  );
};

export default House;
