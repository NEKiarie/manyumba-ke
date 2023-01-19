import React,{ useState, useEffect} from "react";
import axios from "axios"
import { RiMapPinLine } from 'react-icons/ri'

//import icons
import { BiBed, BiBath, BiArea } from "react-icons/bi";

const House = ({property}) => {
  const { image_url, type, location, address, beds, baths, size, price, for_sale, description} = property;
  

  return (
    <div
      className="bg-white shadow-1 p-5 rounded-lg rounded-tl-[70px] w-full max-w-[352px] mx-auto cursor-pointer
    hover:shadow-2xl transition mt-9"
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
          <div>{size} sq ft</div>
        </div>
      </div>
      <div className="text-lg font-semibold text-violet-600 mb-4 ">Ksh {price}</div>
      {for_sale && 
      <div className="text-lg font-semibold text-violet-600 mb-4 ">
        <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-indigo-700 rounded">For Sale</span>
      </div>
      }
    </div>
  );
};

export default House;
// [
//   {
//     "id": 1,
//     "is_sold": false,
//     "seller": {
//       "id": 2,
//       "first_name": "George",
//       "last_name": "Muturi",
//       "user_name": "george_muturi",
//       "email_address": "George_Muturi@gmail.com",
//       "phone_number": "+254 717 123 451"
//     },
//     "property": {
//       "id": 9,
//       "address": "Lavington",
//       "beds": 2,
//       "baths": 4.0,
//       "size": "100 by 100",
//       "image_url": "https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//       "notes": "Quia voluptatem aliquid qui.",
//       "fore_closure": false,
//       "price": "3,738,539",
//       "description": "Ratione expedita atque. Iste sint similique. Quo repudiandae cum."
//     }
//   }
// ]