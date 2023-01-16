import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaUserAlt, FaUserCircle } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { HouseContext } from "../components/HouseContext";

const LoginPage = () => {
  const [formData, setFormData ] = useState({
    username: "",
    password: ""
  })
  const [errors, setErrors] = useState([])
  const { setUser } = useContext(HouseContext)
  const navigate = useNavigate()

  //when a user types
  const handleChange = (evnt) => {
    const { target } = evnt
    if(errors.length > 0){
      setErrors("")
    }    
    setFormData(currentFormData => {
      return {
        ...currentFormData,
        [target.name]: target.value
      }
    })
  };

  //send user data to the server

  const sendLogins = (formData) =>{
    axios.post("/auth/signin",formData)
    .then(response => {
      setUser(response.data)
      setFormData({
        username: "",
        password: ""
      })
      //redirect to home
      console.log("redirecting....")
      navigate("/home")
      
    })
    .catch(error => {
      console.log("something went wrong")
      console.log(error)
    })

  }

  //when user clicks login btn
 const handleClick = (event) => {
    //Check if values are empty
    if(!formData.username || !formData.password){
      setErrors(currentErrors => {
        return [
          ...currentErrors,
          "Please fill the username and Password"
        ]
      })
      
    }
    // if(!/A-Za-z+/.test(formData.username)){
    //   setErrors([...errors,"Username should have atleast one lowercase and uppercase letter"])      
    // }
    // if(!/0-9+/.test(formData.username)){
    //   setErrors([...errors,"Username should have atleast one number"])      
    // }
    // if(!/0-9+/.test(formData.password)){
    //   setErrors([...errors,"Password should have atleast one number"])      
    // }
    // if(!/a-z+/.test(formData.password)){
    //   setErrors([...errors,"Password should have atleast one lowercase letter"])      
    // }
    // if(!/A-Z+/.test(formData.password)){
    //   setErrors([...errors,"Password should have atleast one uppercase letter"])      
    // }
    // if(!/0-9+/.test(formData.password)){
    //   setErrors([...errors,"Password should have atleast one number"])      
    // }
    // if(!/[!@#$%^&*]/.test(formData.password)){
    //   setErrors([...errors,"Password should have atleast one symbol"])      
    // }
    // if(!/[a-z]{8,}/.test(formData.password)){
    //   setErrors([...errors,"Password should have atleast 8 characters"])      
    // }
    
    //check if password is more than
    if(!errors.length){
      sendLogins(formData)
    } 
    
 }
 
 
  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 mt-40 text-center">
      <div className="mt-5 bg-white rounded-tl-[50px] rounded-br-[50px] shadow-2xl flex w-2/3 max-w-4xl">
        <div className="w-3/5 p-5 items-center justify-center">
          <div className="text-left font-bold text-2xl">
            Manyumba<span className="text-violet-700">.ke</span>
          </div>
          <div className="py-10">
            <h2 className="text-3xl font-bold text-gray-700">Login</h2>
            <h2 className="text-xl semi-bold text-gray-700">
              Welcome to Manyumba.ke
            </h2>
            <div className="border-2 w-10 bg-violet-800 border-violet-800 inline-block mb-2"></div>
            <div className=" flex justify-center my-2">
              <FaUserCircle className="text-4xl" />
            </div>
            <p className="text-gray-400">Enter your details</p>
            <div className="flex flex-col items-center">
              <div className="bg-white w-64 p-2 flex items-center mb-4">
                <FaUserAlt className="text-gray-800 m-2" />
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Username"
                  className="bg-white outline-none text-sm flex-1"
                />
              </div>
              <div className="bg-white w-64 p-2 flex items-center">
                <MdLockOutline className="text-gray-800 m-2" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="bg-white outline-none text-sm flex-1"
                />
              </div>

              <div className="flex justify-between w-64 mb-5 mt-5">
                <label className="flex items-center text-xs">
                  <input type="checkbox" name="remember" className="mr-1" />
                  Remember me
                </label>
                <a href="#" className="text-xs">
                  Forgot Password?
                </a>
              </div>
              {
                !!errors.length 
                && 
                <ul className="flex flex-col text-red-500 text-base font-semibold italic mb-5 mt-5">
                  {errors.map((error,index) => <li key={index}>{error}</li>)}                  
                </ul>
                
              }               
             
              <button
                className="border-2 border-violet-800 text-violet-800 rounded-full px-12 py-2 inline-block font-semibold
                 hover:bg-violet-800 hover:text-white"
                 onClick = {handleClick}
              >
                Log In
              </button>
            </div>
          </div>
        </div>
        {/*SignIn Section */}
        <div className="w-2/5 bg-violet-700 text-white rounded-br-[50px] py-36 px-12">
          <h2 className="text-3xl font-bold mb-2">Hello, Investor!</h2>
          <div className="border-2 w-10 bg-white inline-block mb-2"></div>
          <p className="mb-10">
            Do you have an Account? <br />
            Fill up personal information and get started with us.
          </p>
          <a
            href="/buyer/signup"
            className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-violet-800"
          >
            Sign Up
          </a>
        </div>
        {/*SignUp Section */}
      </div>
    </main>
  );
};

export default LoginPage;
