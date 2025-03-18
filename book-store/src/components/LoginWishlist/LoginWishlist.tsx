import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Page1.svg";

const LoginWishlist: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-center">
      <h2 className="text-2xl font-bold text-gray-900">PLEASE LOG IN</h2>
      <p className="text-gray-500 mt-1">Login to view items in your wishlist.</p>
      <br />
      <br />
      <img src={logo} alt="Wishlist Icon" className="w-16 h-16 mx-auto" />
      <button
        onClick={() => navigate("/")}
        className="mt-4 px-6 py-2 border border-red-500 text-red-500 font-semibold rounded-lg hover:bg-red-500 hover:text-white transition"
      >
        LOGIN/SIGNUP
      </button>
    </div>
  );
};

export default LoginWishlist;
