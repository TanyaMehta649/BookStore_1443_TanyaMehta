import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { FaBookOpen } from "react-icons/fa"; 

const Navbar: React.FC = () => {
  return (
<nav style={{ backgroundColor: "#A03037" }} className="px-6 py-3 flex items-center justify-between shadow-md w-full max-w-[1366px] h-[50px] fixed z-[1000]">
      <div className="flex items-center gap-4">
      <FaBookOpen className="text-2xl text-white ml-[120px]" />

        <h1 className="text-white h-[26px] w-[91px] ">Bookstore</h1>


        <div className="relative flex items-center bg-white h-[33px] w-[490px] px-2 rounded">

          <svg
            className="w-5 h-5 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>

    
          <input
            type="text"
            placeholder="Search..."
            className="ml-2 w-full h-full bg-transparent focus:outline-none"
          />
        </div>
      </div>

   
      <div className="flex items-center gap-6 ">
      
        <div className="flex flex-col items-center text-white ml-[-200px]">
          <UserOutlined className="text-2xl cursor-pointer" />
          <Link to="/profile" className="text-sm font-medium hover:underline">
            Poonam
          </Link>
        </div>

       
        <div className="flex flex-col items-center text-white ml-[30px]">
          
          <ShoppingCartOutlined  className="text-2xl cursor-pointer"/>
          <Link to="/cart" className="text-sm font-medium hover:underline">
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
