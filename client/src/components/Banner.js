import React from "react";

import BannerImage from "../assets/img/Banner.jpg";

import Search from "../components/Search";

const Banner = () => {
  return (
    <section className="h-full max-h-[750px] mb-2 xl:mb-24">
      <div className="flex flex-col lg:flex-row bg-violet-800">
        <div
          className="lg: ml-8 xl:ml-[110px] mt-8 flex flex-col items-center lg:items-start text-center lg:text-left justify-center
        flex-1 px-4 lg:px-0"
        >
          <h1 className="text-4xl lg:text-[58px] text-white font-semibold leading-none mb-6">
            <span className="text-white">Discover</span> Most Suitable Property.
          </h1>
          <p className="max-w-[480px] mb-8 text-white">
            Building a next-generation collaborative platform to connect Renters, Homeowners and Agents. Live the way you want. Beautiful homes, 
            incredible locations. Pricing that makes sense. </p>
            
        </div>
        {/* image */}
        <div className="hidden flex-1 lg:flex justify items-end m-20 rounded-tl-[90px] rounded-br-[90px] max-h-[750px]">
          <img className="rounded-br-[90px] rounded-tl-[90px] rounded-bl-[10px] rounded-tr-[10px]" src={BannerImage} alt="" />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;