import React, { useContext } from "react";

//import motion for Animation
import { motion } from "framer-motion";

// core version + navigation, pagination modules:
// import { Autoplay, Navigation, Pagination } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// // import Swiper and modules styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";


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
  if (loading.properties && loading.types && loading.locations) {
    return (
      <ImSpinner2 className="mx-auto animate-spin text-violet-700 text-4xl mt-[200px]" />
    );
  }
  if (properties.length < 1) {
    return (
      <div className="text-center text-3xl text-gray-400 mt-48">
        {" "}
        Sorry, nothing found
      </div>
    );
  }

  return (
    <section className="mb-20">
      {/* <Swiper
        slidesPerView={3}
        spaceBetween={1}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 9500,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      > */}
        <div className="container mx-auto mt-20 ">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
            {properties.slice(1).map((property, index) => (
              // <SwiperSlide key={index}>
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
              // </SwiperSlide>
            ))}
          </div>
        </div>
      {/* </Swiper> */}
    </section>
  );
};

export default HouseList;
