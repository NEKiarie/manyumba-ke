import React, {useState, useContext} from "react";
import axios from "axios";
import { ImSpinner2 } from "react-icons/im";
import { FaUserAlt, FaUserCircle, FaMobileAlt} from "react-icons/fa";
import { MdLockOutline, MdEmail, MdOutlineLocationOn } from "react-icons/md";
import { HouseContext } from "../components/HouseContext";
import { nameCheck, usernameCheck, emailAddressCheck, phoneNumberCheck, passwordCheck, passedAllChecks } from "../utils/validators";


const BuyerSignUpPage = () => {
  const { locations, loading, handleChange, formSignUpData, setFormSignUpData } = useContext(HouseContext) 
  const [errors, setErrors] = useState({
    firstName: [],
    lastName: [],
    userName: [],
    emailAddress: [],
    phoneNumber: [],
    password: [],
    confirmPassword: []
  })
  
  //if data is not ready show a spinner
  if(loading.locations) return <ImSpinner2 className="mx-auto animate-spin text-violet-700 text-4xl mt-[200px]" />;

  //loop thru data options
  const dataListOptions = locations.slice(1).map(location => { 
    return (
      <option key= {location.id} value={location.id} >
        {`${location.name}, ${location.county}`}
      </option>
    )
  })

  //handle Submit
  const handleSubmit = (event) => {
    event.preventDefault()
    const firstNameErrors = nameCheck(formSignUpData.first_name)
    const lastNameErrors = nameCheck(formSignUpData.last_name)
    const userNameErrors = usernameCheck(formSignUpData.user_name)
    const emailErrors = emailAddressCheck(formSignUpData.email_address)
    const phoneAddress = phoneNumberCheck(formSignUpData.phone_number)
    const {password, confirmPassword} = passwordCheck(formSignUpData.password, formSignUpData.confirm_password)
    if(!passedAllChecks){
      setErrors({
        firstName: firstNameErrors,
        lastName: lastNameErrors,
        userName: userNameErrors,
        emailAddress: emailErrors,
        phoneNumber: phoneAddress,
        password: password,
        confirmPassword: confirmPassword
      })
    } else {
      console.log("sending all data")
      axios.post("/users",formSignUpData)
      .then(response => console.log(response.data))
      .catch(error => {
        console.log("something went wrong")
        console.log(error.message)
      })

    }
    


  }

  const generateLis = (arr) => {
    return arr.map((error, index) => <li key={index}>{error}</li>)
  }

  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 mt-39 text-center">
      <div className="mt-5 bg-white rounded-tl-[50px] rounded-br-[50px] shadow-2xl flex w-2/3 max-w-4xl">
        <div className="w-3/5 p-5 items-center justify-center">
          <div className="text-left font-bold text-2xl">
            Manyumba<span className="text-violet-700">.ke</span>
          </div>
          <div className="py-10">
            <h2 className="text-3xl font-bold text-gray-700">Buyer Sign Up</h2>
            <h2 className="text-xl semi-bold text-gray-700">
              Buy your desired property anywhere, anytime!
            </h2>
            <div className="border-2 w-10 bg-violet-800 border-violet-800 inline-block mb-2"></div>
            <div className=" flex justify-center my-2">
              <FaUserCircle className="text-4xl" />
            </div>
            <p className="text-gray-400">Create an Account</p>
            <div className="flex flex-col items-center">

              {/* div for firstname */}
              <div className="flex flex-col items-center mb-2">     
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 my-2" htmlFor="inline-full-name">
                  First Name
                </label>         
                <div className="bg-white w-64 px-2 flex items-center">
                  <FaUserAlt className="text-gray-800 m-2" />
                  <input
                    type="text"
                    name="first_name"
                    placeholder="Enter your First name"
                    className="bg-gray-100 outline-none text-sm flex-1"
                    onChange ={(event) => handleChange(event, setFormSignUpData)}
                  />                
                </div>                
                {Boolean(errors.firstName.length) && <ul className="text-red-500 text-sm bold">{generateLis(errors.firstName)}</ul>}
                
              </div>
              
              

              {/* div for lastname */}
              <div className="flex flex-col items-center mb-2">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 my-2" htmlFor="inline-full-name">
                  Last Name
                </label>
                <div className="bg-white w-64 px-2 flex items-center">
                  <FaUserAlt className="text-gray-800 m-2" />
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Enter your Last name"
                    className="bg-gray-100 outline-none text-sm flex-1"
                    onChange ={(event) => handleChange(event, setFormSignUpData)}
                  />
                </div>
                {Boolean(errors.lastName.length) && <ul className="text-red-500 text-sm bold">{generateLis(errors.lastName)}</ul>}
              </div>
              

              {/* div for username */}
              <div className="flex flex-col items-center mb-2">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 my-2" htmlFor="inline-full-name">
                  User Name
                </label>
                <div className="bg-white w-64 px-2 flex items-center">
                  <FaUserAlt className="text-gray-800 m-2" />
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Create your Username"
                    className="bg-gray-100 outline-none text-sm flex-1"
                    onChange ={(event) => handleChange(event, setFormSignUpData)}
                  />
                </div>
                {Boolean(errors.userName.length) && <ul className="text-red-500 text-sm bold">{generateLis(errors.userName)}</ul>}
              </div>
              

                {/* Avatar pic */}
              <div className="flex flex-col items-center mb-2">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 my-2" htmlFor="inline-full-name">
                  Profile Pic
                </label>
                <div className="bg-white w-64 px-2 flex items-center">
                  <FaUserAlt className="text-gray-800 m-2" />
                  <input
                    type="text"
                    name="avatar_url"
                    placeholder="Paste a link of "
                    className="bg-white outline-none text-sm flex-1"
                    onChange ={(event) => handleChange(event, setFormSignUpData)}
                  />                 
                </div>
              </div>
              

              {/* div for email address */}
              <div className="flex flex-col items-center mb-2">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 my-2" htmlFor="inline-full-name">
                  Email address
                </label>
                <div className="bg-white w-64 px-2 flex items-center">
                  <MdEmail className="text-gray-800 m-2" />
                  <input
                    type="email"
                    name="email_address"
                    placeholder="Enter your Email Address"
                    className="bg-white outline-none text-sm flex-1"
                    onChange ={(event) => handleChange(event, setFormSignUpData)}
                  />
                </div> 
                {Boolean(errors.emailAddress.length) && <ul className="text-red-500 text-sm bold">{generateLis(errors.emailAddress)}</ul>}
              </div>

              {/* div for phonenumber */}
              <div className="flex flex-col items-center mb-2">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 my-2" htmlFor="inline-full-name">
                  Phone Number
                </label>
                <div className="bg-white w-64 px-2 flex items-center">
                  <FaMobileAlt className="text-gray-800 m-2" />
                  <input
                    type="text"
                    name="phone_number"
                    placeholder="Enter your Phone number"
                    className="bg-white outline-none text-sm flex-1"
                    onChange ={(event) => handleChange(event, setFormSignUpData)}
                  />
                </div>
                {Boolean(errors.phoneNumber.length) && <ul className="text-red-500 text-sm bold">{generateLis(errors.phoneNumber)}</ul>}
              
              </div>

                {/* div for location */}
              <div className="flex flex-col items-center mb-2">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 my-2" htmlFor="inline-full-name">
                  Location
                </label>
                <div className="bg-white w-64 px-2 flex items-center">
                <MdOutlineLocationOn className="text-gray-800 m-2" />
                <input 
                  placeholder="Enter Location"
                  list="location" 
                  id="location-input" 
                  name="location" />
                  <datalist id="location">
                      {dataListOptions}
                  </datalist>
                </div>
              </div>
              

              <div className="flex flex-col items-center mb-2">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 my-2" htmlFor="inline-full-name">
                  Password
                </label>
                <div className="bg-white w-64 px-2 flex items-center">
                <MdLockOutline className="text-gray-800 m-2" />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your Password"
                  className="bg-white outline-none text-sm flex-1"
                  onChange ={(event) => handleChange(event, setFormSignUpData)}
                />
                </div>
                {Boolean(errors.password.length) && <ul className="text-red-500 text-sm bold">{generateLis(errors.password)}</ul>}
                
              </div>

              <div className="flex flex-col items-center mb-2">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 my-2" htmlFor="inline-full-name">
                  Confirm Password
                </label>
                <div className="bg-white w-64 px-2 flex items-center">
                <MdLockOutline className="text-gray-800 m-2" />
                <input
                  type="password"
                  name="confirm_password"
                  placeholder="Confirm your Password"
                  className="bg-white outline-none text-sm flex-1"
                  onChange ={(event) => handleChange(event, setFormSignUpData)}
                />
                </div>
                {Boolean(errors.confirmPassword.length) && <ul className="text-red-500 text-sm bold">{generateLis(errors.confirmPassword)}</ul>}
               
              </div>
              <button
                className="border-2 border-violet-800 text-violet-800 rounded-full px-12 py-2 inline-block font-semibold
                 hover:bg-violet-800 hover:text-white mb-2"
                 onClick={handleSubmit}
              >
                Create Your Account
              </button>
              <label className="font-semibold text-gray-800">
                Existing User?{" "}
                <a
                  href="/buyer"
                  className="border-2 rounded-full inline-block px-9 font-semibold border-violet-800
               text-violet-800  hover:bg-violet-800 hover:text-white mt-2"
                >
                  Login
                </a>
              </label>
            </div>
          </div>
        </div>
        {/*SignIn Section */}
        <div className="w-2/5 bg-violet-700 text-white rounded-br-[50px] rounded-tl-[50px]  py-36 px-12">
          <div className="border-2 w-10 bg-white inline-block mb-2"></div>
        </div>
        {/*SignUp Section */}
      </div>
    </main>
  );
};

export default BuyerSignUpPage;
