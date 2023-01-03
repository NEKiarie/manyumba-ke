import React from "react";

import { housesData } from "../data";

import { useParams } from "react-router-dom";

import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { Link } from "react-router-dom";

const PropertyDetails = () => {
  const { id } = useParams();

  const house = housesData.find((house) => {
    return house.id === parseInt(id);
  });

  const newLocal = "bg-green-500";
  return (
    <section>
      <div className="container mx-auto min-h-[800px] mb-14">
        <div>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <h2 className="text-2xl font-semibold">{house.name}</h2>
            <h3 className="text-lg mb-4">{house.address}</h3>
          </div>
          <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
            <div className="bg-green-500 text-white px-3 rounded full">
              {house.type}
            </div>
            <div className="bg-green-500 text-white px-3 rounded full">
              {house.country}
            </div>
          </div>

          <div className="text-3xl font-semibold text-violet-600">
            kshs {house.price}
          </div>
          <div className="max-w-[768px]">
            <div className="mb-8">
              <img src={house.imageLg} alt="" />
            </div>
          </div>
          <div className="flex gap-x-6 text-violet-700 mb-6">
            <div className="flex gap-x-2 items-center">
              <BiBed className="text-2xl" />
              <div>{house.bedrooms}</div>
            </div>
            <div className="flex gap-x-2 items-center">
              <BiBath className="text-2xl" />
              <div>{house.bathrooms}</div>
            </div>
            <div className="flex gap-x-2 items-center">
              <BiArea className="text-2xl" />
              <br></br>
              <div>{house.surface}</div>
            </div>
          </div>
          <div>{house.description}</div>
        </div>
        <div>
          {/* <img src={house.agent.image} alt='' /> */}
        </div>
      </div>
      ;
    </section>
  );
};

export default PropertyDetails;
