import React, { useContext } from "react";

//import motion for Animation
import { motion } from "framer-motion";

//import context
import { HouseContext } from "./HouseContext";

//import components
import House from "./House";

//import link
import { Link } from "react-router-dom";

//import icons
import { ImSpinner2 } from "react-icons/im";

const HouseList = () => {
  const { loading, properties } = useContext(HouseContext); 
  

  // //if loading true
  // if (loading) {
  //   return (
  //     <ImSpinner2 className="mx-auto animate-spin text-violet-700 text-4xl mt-[200px]" />
  //   );
  // }
  // if (houses.length < 1) {
  //   return (
  //     <div className="text-center text-3xl text-gray-400 mt-48">
  //       {" "}
  //       Sorry, nothing found
  //     </div>
  //   );
  // }


  return (
    <section className="mb-20">
      <div className="container mx-auto mt-20 ">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {properties.slice(1).map((property, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              key={index}
            >
              <Link to={`/property/${property.id}`} key={property.id}>
                <House property={property} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HouseList;