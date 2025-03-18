import React from "react";
import Image from '../../assets/Image11.png';
const MyOrder = () => {
  const orders = [
    {
      title: "Don't Make Me Think",
      author: "Steve Krug",
      price: "Rs. 1500",
      originalPrice: "Rs. 2000",
      date: "May 21",
      image: "/dont-make-me-think.jpg",
    },
    {
      title: "React Material-UI",
      author: "Cookbook",
      price: "Rs. 780",
      originalPrice: "Rs. 1000",
      date: "April 06",
      image: "/react-material-ui.jpg",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex items-center justify-between  pb-4">
        <h2 className="text-2xl mt-[100px] font-semibold">My Order</h2>
       
      </div>
      <div className="mt-6 space-y-4">
        {orders.map((order, index) => (
          <div
            key={index}
            className="flex items-center border-[#E4E4E4] h-[150px] w-[1022px] border-[1px] rounded-lg p-4 "
          >
            <img
              src={Image}
              alt={order.title}
              className="w-24 h-32 object-cover "
            />
            <div className="ml-6 flex-1">
              <h3 className="text-lg font-semibold">{order.title}</h3>
              <p className="text-gray-500">by {order.author}</p>
              <div className="mt-2 flex items-center space-x-2">
                <span className="text-xl font-bold">{order.price}</span>
                <span className="text-gray-400 line-through">
                  {order.originalPrice}
                </span>
              </div>
            </div>
            <p className="text-green-600 font-medium">
              ● 
            </p>
            <p className="text-black font-medium mr-[145px]">Order Placed on {order.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrder;
