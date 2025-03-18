import React, { useState } from "react";
import  onlineshopping from '../../assets/onlineshopping.jpg';
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
    const navigate=useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    mobileNumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-300">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-[624px] h-[391px] ">
        
        <div className="w-1/2  flex flex-col items-center justify-center p-8 bg-gray-100">
          <img
            src={onlineshopping}
            alt="Online Book Shopping"
            className="w-[245px] h-[245px] mt-[85px] ml-[-10px]" 
          />
          <h2 className="text-xl font-semibold mt-8"></h2>
        </div>

        
        <div className="w-[389px]  p-8 absolute top-[-30px] left-[50%] transform -translate-x-1/2 bg-white shadow-lg z-10 mt-24 ml-40 h-[425px]  flex flex-col justify-center   rounded-lg ">
          <div className="flex justify-between mb-4">
            
<button
              onClick={() => navigate("/")} 
              className="text-[25px] font-bold   text-black border-b-2 border-red-500 hover:text-black transition-all"
            >
              LOGIN
            </button>
             
             <button
              onClick={() => navigate("/signup")} 
              className="text-[25px]  font-semibold text-gray-400 hover:text-black transition-all"
            >
              SIGNUP
            </button>


          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
            <span className="h-[13px] w-[35px]">Email Id</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-1 border border-gray-300 rounded h-[35px] ocus:outline-none focus:border-red-500"
              />
            </div>
            <div className="mb-4 relative">
            <span className="h-[13px] w-[35px]">Password</span>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-1 border border-gray-300 rounded h-[35px] focus:outline-none focus:border-red-500"
              />
            </div>

            
        
            <button
              type="submit"        onClick={() => navigate("/dashboard/books")}
              className=" p-1 text-white bg-[#A03037] rounded hover:bg-[#A03037] h-[37px] w-[325px]"
            >
              Login
            </button>

            <div className="mb-4 relative">
            <div className="flex items-center my-4">
              <div className="w-full border-b border-gray-300"></div>
              <span className="px-4 text-gray-500 text-sm">OR</span>
              <div className="w-full border-b border-gray-300"></div>
            </div>
            </div>

            <div className="flex gap-3 ml-[40px] ">
              <button
                type="submit"
                className="h-[37px] w-[126px] p-3 2 text-white bg-gray-300 rounded hover:bg-blue-500 flex items-center justify-center"
              >
                Facebook
              </button>

              <button
                type="submit"
                className="w-[119px] h-[37px] text-[16px] p-3 2 text-white bg-gray-600 rounded hover:bg-blue-500 flex items-center justify-center"
              >
                Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;