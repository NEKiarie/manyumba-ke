import React, { useState, useContext } from "react";
import axios from "axios";
import { HouseContext } from "../components/HouseContext";
import {
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

const SellerPropertyDetails = () => {
  const [formData, setFormData] = useState({
    type: 1,
    county: 1,
    location: 1,
    baths: "",
    beds: "",
    size: "",
    price: "",
    imageUrl: "",
  });
  const [errors, setErrors] = useState([]);
  const [alertMessage, setAlertMessage] = useState({
    type: "",
    show: false,
    title: "",
    body: "",
  });
  const { types, locations, loading, user, setProperties } =
    useContext(HouseContext);
  const uniqueCounties = [
    ...new Set(locations.slice(1).map(({ county }) => county)),
  ];

  if (loading.types && loading.location) {
    return (
      <ImSpinner2 className="mx-auto animate-spin text-violet-700 text-4xl mt-[200px]" />
    );
  }

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = () => {
    const newPropertyLocation = locations[Number(formData.location)];
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
      description: formData.description
    };

    axios
      .post("/properties", new_property)
      .then((response) => {
        setProperties((currentProperties) => {
          return [...currentProperties, response.data];
        });
        setAlertMessage({
          type: "success",
          show: true,
          title: "Property Creation",
          body: "The property was added successfully in the database",
        });
        setFormData({
          type: 1,
          county: 1,
          location: 1,
          baths: "",
          beds: "",
          size: "",
          price: "",
          imageUrl: "",
        });
      })
      .catch((error) => {
        console.log("something went wrong");
        console.log(error.message);
        setAlertMessage({
          type: "failed",
          show: true,
          title: "Property Creation",
          body: "The property was NOT added successfully in the database",
        });
      });
  };
  const toggleAlert = (show) => {
    setAlertMessage({
      ...alertMessage,
      show: show,
    });
  };

  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 mt-3 mb-6 text-center">
      <div className="mt-5 bg-white rounded-tl-[50px] rounded-br-[50px] shadow-2xl flex w-2/3 max-w-4xl">
        <div className="w-2/5 bg-violet-700 text-white rounded-br-[50px] rounded-tl-[50px] py-36 px-12"></div>
        <div className="w-3/5 p-5 items-center justify-center">
          <div className="text-left font-bold text-2xl mb-8">
            Manyumba<span className="text-violet-700">.ke</span>
          </div>
          {alertMessage.show && (
            <Alert
              type={alertMessage.type}
              toggleAlert={toggleAlert}
              title={alertMessage.title}
              body={alertMessage.body}
            />
          )}
          <div className="py-10">
            <h2 className="text-3xl font-bold text-gray-700">Hello</h2>
            <h2 className="text-xl semi-bold text-gray-700">
              Welcome to Manyumba.ke
            </h2>
            <div className="border-2 w-10 bg-violet-800 border-violet-800 inline-block mb-2"></div>
            <div className=" flex justify-center my-2">
              <FaHome className="text-4xl" />
            </div>
            <p className="text-gray-400">Enter Your Property Details!</p>

            <div className="flex flex-col items-center">
              <span>Select Property type </span>
              <div className="bg-white w-64 p-2 flex items-center mb-4">
                <FaHome className="text-gray-800 m-2 text-2xl" />
                {/* <label>Select Your Property type</label> */}
                <select
                  name="type"
                  id="type"
                  className="bg-white outline-none text-m flex-1"
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
              </div>

              <span>Select County property is located </span>
              <div className="bg-white w-64 p-2 flex items-center mb-4">
                <FaMapMarkedAlt className="text-gray-800 m-2 text-2xl" />
                <select
                  name="county"
                  id="county"
                  className="bg-white outline-none text-m flex-1"
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
              </div>

              <span>Select Location of the property </span>
              <div className="bg-white w-64 p-2 flex items-center mb-4">
                <FaMapMarkedAlt className="text-gray-800 m-2 text-2xl" />
                <select
                  name="location"
                  id="location"
                  className="bg-white outline-none text-m flex-1"
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
              </div>

              <span>Number of Bathrooms</span>
              <div className="bg-white w-64 p-2 flex items-center mb-4">
                <FaBath className="text-gray-800 m-2 text-2xl" />
                <input
                  type="number"
                  name="baths"
                  placeholder="Enter the Number of Bathrooms"
                  className="bg-white outline-none text-m flex-1"
                  onChange={handleChange}
                />
              </div>

              <span>Number of Bedrooms</span>
              <div className="bg-white w-64 p-2 flex items-center mb-4">
                <FaBed className="text-gray-800 m-2 text-2xl" />
                <input
                  type="number"
                  name="beds"
                  placeholder="Enter the Number of Bedrooms"
                  className="bg-white outline-none text-m flex-1"
                  onChange={handleChange}
                />
              </div>

              <span>Size of the property</span>
              <div className="bg-white w-64 p-2 flex items-center mb-4">
                <FaRssSquare className="text-gray-800 m-2 text-2xl" />
                <input
                  type="text"
                  name="size"
                  placeholder="Enter the size of Property"
                  className="bg-white outline-none text-m flex-1"
                  onChange={handleChange}
                />
              </div>

              <span>Price of the property</span>
              <div className="bg-white w-64 p-2 flex items-center mb-4">
                <FaDollarSign className="text-gray-800 m-2 text-2xl" />
                <input
                  type="number"
                  name="price"
                  placeholder="Enter the Price"
                  className="bg-white outline-none text-m flex-1"
                  onChange={handleChange}
                />
              </div>

              <span>Image Url of the property</span>
              <div className="bg-white w-64 p-2 flex items-center mb-4">
                <FaImage className="text-gray-800 m-2 text-2xl" />
                <input
                  type="text"
                  name="imageUrl"
                  placeholder="Enter the ImageUrl"
                  className="bg-white outline-none text-m flex-1"
                  onChange={handleChange}
                />
              </div>

              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Add Your Property Description
              </label>
              <textarea
               type="text"
               name="description"
               onChange={handleChange}

                rows="4"
                class="block p-2.5 w-full text-l outline-none text-gray-900 mb-4 bg-gray-50 
                rounded-lg border border-gray-400 dark:bg-gray-700
                 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                  dark:focus:border-blue-500"
                placeholder="Write your Property Description here..."
              ></textarea>

              <button
                className="border-2 border-violet-800 text-violet-800 rounded-full px-12 py-2 inline-block font-semibold
                 hover:bg-violet-800 hover:text-white"
                onClick={handleClick}
              >
                Save Your Details
              </button>
            </div>
          </div>
        </div>
        {/*SignIn Section */}

        {/*SignUp Section */}
      </div>
    </main>
  );
};

export default SellerPropertyDetails;
