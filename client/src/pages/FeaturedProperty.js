import React from "react";
import { ImSpinner2 } from "react-icons/im";

//import context
import Messages from "../components/Messages";
import Modal from "./AddProperty";
import HouseList from "../components/HouseList";
import Tabs from "../utils/Tabs";
import Alert from "../utils/Alert";

const FeaturedProperty = (props) => {
  const {loading, properties, belongsTo, currentTab, changeCurrentTab, setShowModal, showModal, setAlertMessagge, alertMessagge,toggleAlert, handleClick} = props

  if (loading.types && loading.locations && loading.properties) {
    return (
      <ImSpinner2 className="mx-auto animate-spin text-violet-700 text-4xl mt-[200px]" />
    );
  }  

  return (
    <section className="mb-2">
      <div className="mx-auto">
        <div className="container mx-auto mt-20 ">
          <Modal showModal={showModal} setShowModal={setShowModal} setAlertMessagge={setAlertMessagge} handleClick={handleClick}/>
         {alertMessagge.show && <Alert title={alertMessagge.title} type={alertMessagge.type} body={alertMessagge.body} toggleAlert={toggleAlert}/> }
        {
          belongsTo === "seller" &&
          <div className="flex flex-row">
            <button
            className=" order-last bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(true)} >
              Add a New Property
            </button>
          </div>  
        }     
         {belongsTo === "seller" && <Tabs  changeCurrentTab = {changeCurrentTab}/>}   
          <div>
            {currentTab !== "messages" && <HouseList loading={loading} properties={properties} belongsTo={"seller"} meta={currentTab}/>}
            {/* {currentTab === "messages" && <Messages />} */}
          </div>              
        </div>           
      </div>
    </section>
  );
};

export default FeaturedProperty;
