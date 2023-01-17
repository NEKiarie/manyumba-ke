import React, {useState, useContext} from "react";
import axios from "axios";
import { HouseContext } from "../components/HouseContext";
import {
  FaUserAlt,
  FaBath,
  FaHome,
  FaBed,
  FaMapMarkedAlt,
  FaRssSquare,
  FaDollarSign,
  FaImage,
} from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";
import Alert from "../utils/Alert";

const BuyerLoginPage = () => {
  const [formData, setFormData ] = useState({
    type: 1,
    county: 1,
    location: 1,
    baths: "",
    beds: "",
    size: "",
    price: "",
    imageUrl: ""

  })
  const [errors, setErrors] = useState([])
  const [alertMessagge, setAlertMessagge] = useState({
    type: "",
    show: false,
    title: "",
    body: ""
  })
  const { types, locations, loading, user, setProperties } = useContext(HouseContext) 
  const uniqueCounties = [...new Set(locations.slice(1).map(({county}) => county))]
  
  
  if(loading.types && loading.location){
    return (
      <ImSpinner2 className="mx-auto animate-spin text-violet-700 text-4xl mt-[200px]" />
    );
  }

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  };

  const handleClick = () => {
    const newPropertyLocation = locations[Number(formData.location)] 
    const new_property = {
      type_id: formData.type,
      address: `${newPropertyLocation.county}, ${newPropertyLocation.name}`,
      location_id: formData.location,
      price: formData.price,
      beds: formData.beds,
      baths: formData.baths,
      size: formData.size,
      image_url: formData.imageUrl,
      notes: "Very good properties with ample size",
      fore_closure: false,
      seller_id: user.id,
      description: "Some text here or something describing the property"
    };
    
    axios.post("/properties", new_property)
    .then(response =>{ 
      setProperties(currentProperties => {
        return [
          ...currentProperties,
          response.data
        ]
      })
      setAlertMessagge({
        type: "success",
        show: true,
        title: "Property Creation",
        body: "The property was added successfully in the database"
      })

    })
    .catch(error => {
      console.log("something went wrong")
      console.log(error.message)
      setAlertMessagge({
        type: "failed",
        show: true,
        title: "Property Creation",
        body: "The property was NOT added successfully in the database"
      })
    })
    
  };
  const toggleAlert = (show) => {
    setAlertMessagge({
      ...alertMessagge,
      show: show
    })
  }

  
  return (
   
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 mt-1 mb-6 text-center">
    <div className="mt-5 bg-white rounded-tl-[50px] rounded-br-[50px] shadow-2xl flex w-2/3 max-w-4xl">
      <div className="w-1/5 bg-violet-700 text-white rounded-br-[50px] rounded-tl-[50px]  py-36 px-12"></div>
      <div className="w-3/5 p-5 items-center justify-center">
        <div className="text-left font-bold text-2xl mb-8">
          Manyumba<span className="text-violet-700">.ke</span>
        </div>
        {alertMessagge.show && <Alert type={alertMessagge.type} toggleAlert={toggleAlert} title={alertMessagge.title} body={alertMessagge.body} />}
        <form class="w-full max-w-lg">
          <div class="flex flex-wrap mx-3 mb-6">
            {/* Property Type select */}
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <FaHome className="text-xl" />
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Property Type
              </label>
              <div class="relative">
                <select
                  class="block appearance-none w-full
                   bg-gray-200 border border-gray-200 text-gray-700 
                   py-3 px-4 pr-8 rounded leading-tight focus:outline-none
                    focus:bg-white focus:border-gray-500"
                  id="type"
                  name="type"
                  onChange={handleChange}
                >
                  {types.slice(1).map(({ id, description }) => {
                    return (
                      <option key={id} value={id}>
                        {description}
                      </option>
                    );
                  })}
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* County select */}

            <div class="w-full md:w-1/2 px-3">
              <FaMapMarkedAlt className="text-xl" />
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                County
              </label>
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="county"
                  name="county"
                  onChange={handleChange}
                >
                  {uniqueCounties.map((county, index) => {
                    return (
                      <option key={index} value={county}>
                        {county}
                      </option>
                    );
                  })}
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Location Select */}

          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-4">
            <FaMapMarkedAlt className="text-xl" />
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Location
            </label>
            <div class="relative">
              <select
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="location"
                name="location"
                onChange={handleChange}
              >
                {locations.slice(1).map(({ name, id }, index) => {
                  return (
                    <option key={id} value={id}>
                      {name}
                    </option>
                  );
                })}
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Number of Bathrooms */}

          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <FaBath className="text-xl" />
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-city"
              >
                Bathrooms
              </label>
              <input
                class="appearance-none block w-full bg-gray-200
              text-gray-700 border border-gray-200 rounded py-3 px-4 
                leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="baths"
                type="number"
                onChange={handleChange}
                placeholder="Bathrooms"
              />
            </div>

            {/* Number of Bedrooms */}
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <FaBed className="text-xl" />
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-city"
              >
                Bedrooms
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded 
               py-3 px-4 leading-tight focus:outline-none focus:bg-white
               focus:border-gray-500"
                id="beds"
                type="number"
                onChange={handleChange}
                placeholder="Bedrooms"
              />
            </div>

            {/* Size of Property */}
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-4">
              <FaRssSquare className="text-xl" />
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-city"
              >
                Size
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded 
               py-3 px-4 leading-tight focus:outline-none focus:bg-white
               focus:border-gray-500"
                id="size"
                type="text"
                onChange={handleChange}
                placeholder="Size"
              />
            </div>

            {/* Property Price */}
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <FaDollarSign className="text-xl" />
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-city"
              >
                Price
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded 
               py-3 px-4 leading-tight focus:outline-none focus:bg-white
               focus:border-gray-500"
                id="price"
                type="number"
                onChange={handleChange}
                placeholder="Price"
              />
            </div>

            {/* imageUrl */}
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <FaImage className="text-xl" />
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-city"
              >
                Property Image
              </label>

              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded 
               py-3 px-4 leading-tight focus:outline-none focus:bg-white
               focus:border-gray-500"
                id="imageUrl"
                type="text"
                onChange={handleChange}
                placeholder="Image"
              />
            </div>
          </div>
        </form>
        <button
          className="border-2 mt-8 border-violet-800 text-violet-800 rounded-full px-12 py-2 inline-block font-semibold
               hover:bg-violet-800 hover:text-white"
          onClick={handleClick}
        >
          Save Your Details
        </button>
      </div>
    </div>
  </main>
  );
};

export default BuyerLoginPage;
