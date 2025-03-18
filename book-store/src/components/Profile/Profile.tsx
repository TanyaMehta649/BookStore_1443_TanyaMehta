
import React, { useState } from "react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isWorkEditing, setIsWorkEditing] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white ">
      <h2 className="text-2xl font-semibold mb-4">User Profile</h2>

   
      <div className="mb-6 relative">
        <h3 className="text-xl font-medium inline-block">Personal Details</h3>
        <div className="inline-block ml-4">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="text-red-600 hover:underline mr-2"
          >
            {isEditing ? "Cancel" : "Edit"}
          </button>
          {isEditing && (
            <button className="bg-[#3371B5] ml-[240px] text-white py-1 px-3 rounded-sm hover:bg-[#3371B5]">
              Save
            </button>
          )}
        </div>

        <div className="mt-2">
          <label className="block text-sm font-medium">Full Name</label>
          <input 
            type="text" 
            className=" p-2  rounded-sm mt-1 border-[#E2E2E2] border-[2px] w-[511px] h-[45px] bg-gray-100" 
            readOnly={!isEditing} 
          />
        </div>
        <div className="mt-2">
          <label className="block text-sm font-medium">Email ID</label>
          <input 
            type="email" 
            className="w-[511px] h-[45px] p-2 border-[#E2E2E2] border-[2px] rounded-sm mt-1 bg-gray-100" 
            readOnly={!isEditing} 
          />
        </div>
        <div className="mt-2">
          <label className="block text-sm font-medium">Password</label>
          <input 
            type="password" 
            className="w-[511px] h-[45px] p-2 border-[#E2E2E2] border-[2px] rounded-sm mt-1 bg-gray-100" 
            readOnly={!isEditing} 
          />
        </div>
        <div className="mt-2">
          <label className="block text-sm font-medium">Mobile Number</label>
          <input 
            type="text" 
            className="w-[511px] h-[45px] p-2 border-[#E2E2E2] border-[2px] rounded-sm mt-1 bg-gray-100" 
            readOnly={!isEditing} 
          />
        </div>
      </div>

    
      <div className="mb-6 relative">
        <h3 className="text-xl font-medium inline-block">Address Details</h3>
        <button className="ml-[220px] bg-white text-[#A03037] border-[#8F2B2F] border-[2px] py-1 px-3 rounded-sm ">
          Add New Address
        </button>
      </div>

   
      <div>
        <h3 className="text-xl font-medium inline-block">Work</h3>
        <div className="inline-block ml-4">
          <button
            onClick={() => setIsWorkEditing(!isWorkEditing)}
            className="text-red-600 hover:underline mr-2"
          >
            {isWorkEditing ? "Cancel" : "Edit"}
          </button>
          {isWorkEditing && (
            <button className="bg-[#3371B5] ml-[333px] text-white py-1 px-3 rounded-sm hover:bg-[#3371B5]">
              Save
            </button>
          )}
        </div>

        <div className="mt-2">
          <label className="block text-sm font-medium">Address</label>
          <textarea 
            className="w-[512px] h-[82px] p-2 border-[#E2E2E2] border-[2px] rounded-sm mt-1 bg-gray-100" 
            readOnly={!isWorkEditing}
          ></textarea>
        </div>
        <div className="mt-2 grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">City/Town</label>
            <input type="text" className="h-[45px] w-[251px] p-2 border-[#E2E2E2] border-[2px] rounded-sm mt-1 bg-gray-100" readOnly={!isWorkEditing} />
          </div>
          <div>
            <label className="block text-sm font-medium ml-[-170px]">State</label>
            <input type="text" className="h-[45px] w-[251px] ml-[-170px] p-2 border-[#E2E2E2] border-[2px] rounded-sm mt-1 bg-gray-100" readOnly={!isWorkEditing} />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium">Type</label>
          <div className="flex gap-4 mt-1">
            <label className="flex items-center gap-1">
              <input type="radio" className="accent-red-800" readOnly={!isWorkEditing} /> Home
            </label>
            <label className="flex items-center gap-1">
              <input type="radio" className="accent-red-800" readOnly={!isWorkEditing} /> Work
            </label>
            <label className="flex items-center gap-1 ">
              <input type="radio" className="accent-red-800" readOnly={!isWorkEditing} /> Other
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
