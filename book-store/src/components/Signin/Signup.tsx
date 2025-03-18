 
import React, { useState } from "react";

import onlineshopping from "../../assets/onlineshopping.jpg";
import { useNavigate } from "react-router-dom";
import { signupApiCall } from "../../Services/UserService/UserService";
import toast from "react-hot-toast";

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
  });

  const [fullNameError, setFullNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;

    setFullNameError("");
    setEmailError("");
    setPasswordError("");
    setPhoneError("");

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&]).{8,}$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!formData.fullName.trim()) {
      setFullNameError("Full Name is required");
      valid = false;
    } else if (formData.fullName.trim().length < 3) {
      setFullNameError("Full Name must be at least 3 characters long");
      valid = false;
    }

    if (!formData.email.length) {
      setEmailError("Email is required");
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      setEmailError("Enter a valid email address");
      valid = false;
    }

    if (!formData.password.length) {
      setPasswordError("Password is required");
      valid = false;
    } else if (!passwordRegex.test(formData.password)) {
      setPasswordError(
        "Password must contain at least one uppercase letter, one number, and one special character"
      );
      valid = false;
    }

    if (!formData.phone.length) {
      setPhoneError("Mobile no. is required");
      valid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      setPhoneError("Please provide a valid IND phone number");
      valid = false;
    }

    if (valid) {
      signupApiCall(formData)
        .then((res) => {
          if (res?.success && res.result) {
            localStorage.setItem("fullName", formData.fullName);
            console.log("User signed up successfully:", res);
            toast.success("Signup Successful");
            setTimeout(() => navigate("/"), 2000);
          } else {
            toast.error(res?.message || "Signup failed! Try again.");
          }
        })
        .catch((err) => {
          console.error("Signup failed:", err);
        });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-300">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-[624px] h-[425px]">
        <div className="w-1/2 flex flex-col items-center justify-center p-8 bg-gray-100">
          <img
            src={onlineshopping}
            alt="Online Book Shopping"
            className="w-[245px] h-[245px] mt-[85px] ml-[-10px]"
          />
        </div>

        <div className="w-[389px] p-8 absolute top-[-32px] left-[50%] transform -translate-x-1/2 bg-white shadow-lg z-10 mt-24 ml-40 h-[425px] flex flex-col justify-center rounded-lg">
          <div className="flex justify-between mb-4">
            <button
              onClick={() => navigate("/")}
              className="text-[25px] font-semibold text-gray-400 hover:text-black transition-all"
            >
              LOGIN
            </button>
            <button className="text-[25px] font-bold text-black border-b-2 border-red-500">
              SIGNUP
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <span className="block text-gray-700 text-sm font-medium">Full Name</span>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded h-[35px] focus:outline-none focus:border-red-500"
              />
              {fullNameError && <p className="text-red-500 text-sm">{fullNameError}</p>}
            </div>

            <div className="mb-3">
              <span className="block text-gray-700 text-sm font-medium">Email Id</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded h-[35px] focus:outline-none focus:border-red-500"
              />
              {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
            </div>

            <div className="mb-3">
              <span className="block text-gray-700 text-sm font-medium">Password</span>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded h-[35px] focus:outline-none focus:border-red-500"
              />
              {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
            </div>

            <div className="mb-3">
              <span className="block text-gray-700 text-sm font-medium">Mobile Number</span>
              <input
  type="tel"
  name="phone"  
  value={formData.phone}
  onChange={handleChange}
  required
  className="w-full p-2 border border-gray-300 rounded h-[35px] focus:outline-none focus:border-red-500"
/>
       
              {phoneError && <p className="text-red-500 text-sm">{phoneError}</p>}
            </div>

            <button
              type="submit"
              className="p-1 text-white bg-[#A03037] rounded hover:bg-[#A03037] h-[37px] w-[325px]"
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
