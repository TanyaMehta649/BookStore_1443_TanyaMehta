
import React, { useState } from "react";
import Image from "../../assets/Image11.png";
import { MapPin } from "lucide-react";

const MyCart = () => {
  const [showCustomerDetails, setShowCustomerDetails] = useState(false);
  const [selectedAddressType, setSelectedAddressType] = useState(""); // Radio button state
  const [showOrderSummary, setShowOrderSummary] = useState(false);

  return (
    <div className="flex flex-col items-center p-6 bg-white min-h-screen">
      <div className="w-[774px] h-[251px] bg-white border border-gray-300 p-4 mt-[80px]">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">My cart (1)</h2>
          <div className="relative inline-block">
            <select className="border px-10 py-2 rounded text-sm appearance-none">
              <option>Use current location</option>
            </select>
            <MapPin className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#8F2B2F]" size={18} />
          </div>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <img src={Image} alt="Book Cover" className="w-20 h-28 object-cover" />
          <div>
            <h3 className="text-lg font-semibold">Don't Make Me Think</h3>
            <p className="text-sm text-gray-600">by Steve Krug</p>
            <p className="text-lg font-bold text-black-600">
              Rs. 1500 <span className="text-gray-400 line-through">2000</span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-[-10px] ml-[100px]">
          <button className="w-8 h-8 border rounded-full flex items-center border-gray-300 justify-center">-</button>
          <span className="w-11 h-8 border flex items-center border-gray-300 justify-center">1</span>
          <button className="w-8 h-8 border rounded-full flex items-center border-gray-300 justify-center">+</button>
          <button className="text-black-600 ml-4">Remove</button>
        </div>
        <div className="mt-4 flex justify-end">
          <button className="bg-[#3371B5] text-white px-4 py-2 h-[35px] w-[151px] mt-[-80px]">PLACE ORDER</button>
        </div>
      </div>

      <div
  className="w-[774px] bg-white border border-gray-300 p-4 mt-4 cursor-pointer"
  onClick={() => setShowCustomerDetails(true)}
>
  <h2 className="text-[18px] font-semibold">
    {showCustomerDetails ? "Customer Details" : "Address Details"}
  </h2>


        {showCustomerDetails && (
          <div className="mt-4">
            <div className="grid grid-cols-2 gap-4 mb-4 mt-2">
              <div>
                <label className="block text-black text-sm font-medium">Full Name</label>
                <input type="text" className="border p-2  w-full" />
              </div>
              <div>
                <label className="block text-black text-sm font-medium">Mobile Number</label>
                <input type="text" className="border p-2  w-full" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-black text-sm font-medium">Address</label>
              <textarea className="border p-2  w-full"></textarea>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-black text-sm font-medium">City/Town</label>
                <input type="text" className="border p-2  w-full" />
              </div>
              <div>
                <label className="block text-black text-sm font-medium">State</label>
                <input type="text" className="border p-2  w-full" />
              </div>
            </div>
            <div className="flex gap-4 mb-4">
              {["Home", "Work", "Other"].map((type) => (
                <label key={type} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="addressType"
                    value={type}
                    checked={selectedAddressType === type}
                    onChange={() => setSelectedAddressType(type)}
                    className="hidden"
                  />
                  <span
                    className={`w-4 h-4 border-2 border-gray-400 rounded-full flex items-center justify-center ${
                      selectedAddressType === type ? "border-[#A03037]" : ""
                    }`}
                  >
                    {selectedAddressType === type && (
                      <span className="w-2 h-2 bg-[#A03037] rounded-full"></span>
                    )}
                  </span>
                  <span className="ml-2">{type}</span>
                </label>
              ))}
            </div>
            <button className="bg-[#3371B5] text-white h-[35px] w-[150px] px-4 py-2 mx-auto block">
              CONTINUE
            </button>
          </div>
        )}
      </div>

      <div 
  className="w-[774px] bg-white border border-gray-300 p-4 mt-4 cursor-pointer"
  onClick={() => setShowOrderSummary(!showOrderSummary)}
>
  <h2 className="text-lg font-semibold">Order Summary</h2>

  {showOrderSummary && (
    <div className="mt-4">
      <div className="flex items-center gap-4">
        <img src={Image} alt="Book Cover" className="w-20 h-28 object-cover" />
        <div>
          <h3 className="text-lg font-semibold">Don't Make Me Think</h3>
          <p className="text-sm text-gray-600">by Steve Krug</p>
          <p className="text-lg font-bold text-black-600">
            Rs. 1500 <span className="text-gray-400 line-through">2000</span>
          </p>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <button className="bg-[#3371B5] text-white px-4 py-2 h-[35px] w-[150px]">CHECKOUT</button>
      </div>
    </div>
  )}
</div>
    </div>
  );
};

export default MyCart;
