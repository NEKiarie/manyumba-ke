import React from "react";
import { ImSpinner2 } from "react-icons/im";

//import context
import Messages from "../components/Messages";
import HouseList from "../components/HouseList";
import Tabs from "../utils/Tabs";

const FeaturedProperty = (props) => {
  const {loading, properties, belongsTo, currentTab, changeCurrentTab} = props

  if (loading.sellerProperties && loading.types && loading.locations && loading.sellerListedProperties) {
    return (
      <ImSpinner2 className="mx-auto animate-spin text-violet-700 text-4xl mt-[200px]" />
    );
  }  

  return (
    <section className="mb-2">
      <div className="mx-auto">
        <div className="container mx-auto mt-20 ">                  
         {belongsTo === "seller" && <Tabs  changeCurrentTab = {changeCurrentTab}/>}   
          <div>
            {currentTab !== "messages" && <HouseList loading={loading} properties={properties} belongsTo={"seller"} meta={currentTab}/>}
            {currentTab === "messages" && <Messages />}
          </div>              
        </div>           
      </div>
    </section>
  );
};

export default FeaturedProperty;
