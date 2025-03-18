
import React from "react";
import order from '../../assets/orderplaced.png'

const OrderPlaced: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
    
      <div className="bg-white rounded-lg w-[600px] text-center p-8 mt-10 ">
        <img src={order} alt="Order Placed" className="mx-auto mb-4" />
        <p className="text-gray-600">
          Hurray!! Your order is confirmed.
          <br />
          The order ID is <span className="font-semibold">#123456</span>. Save the order ID for further communication.
        </p>

      
        <div className="mt-6 p-4 w-[750px] ml-[-70px]">
          <table className="w-full text-sm text-center border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Email Us</th>
                <th className="border border-gray-300 px-4 py-2">Contact Us</th>
                <th className="border border-gray-300 px-4 py-2">Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">admin@bookstore.com</td>
                <td className="border border-gray-300 px-4 py-2">+91 8163475881</td>
                <td className="border border-gray-300 px-4 py-2">
                  42, 14th Main, 15th Cross, Sector 4, <br />
                  HSR Layout, Bangalore 560034
                </td>
              </tr>
            </tbody>
          </table>
        </div>

     
        <button className="bg-[#3371B5] text-white px-6 py-2 rounded-lg mt-6 hover:bg-[#3371B5]">
          CONTINUE SHOPPING
        </button>
      </div>
    </div>
  );
};

export default OrderPlaced;

