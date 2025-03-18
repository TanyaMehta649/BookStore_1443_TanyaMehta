import React from "react";

const ForgotPassword: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-white">
      <h2 className="font-bold text-2xl mt-[100px]">Forgot Your Password?</h2>
      <div className="w-[1366px] h-[768px] flex items-center justify-center">
        <div className="bg-white  rounded-lg w-[424px] p-8 text-center border border-[#E4E4E4]">
          <p className="text-gray-600 text-sm mb-4">
            Enter your email address and we'll send you <br/> a link to reset your password.
          </p>
          <div className="text-left mb-4">
            <label className="text-sm font-medium">Email Id</label>
            <input
              type="email"
              className="w-full mt-1 p-2 border border-[#E2E2E2] rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              
            />
          </div>
          <button className="w-full bg-[#A03037] text-white py-2 rounded-md hover:bg-red-800 transition">
            Reset Password
          </button>
        </div>
      </div>
      <div className=" w-[424px] mt-[-120px] border rounded-b-md bg-[#E4E4E4] font-bold border-[#E4E4E4] text-black py-2 ml-[0px] text-center h-[100px] ">
  CREATE ACCOUNT
</div>
    </div>
    
  );
};

export default ForgotPassword;
