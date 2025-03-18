
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { books } from "../BookCard/Books";
import Img from "../../assets/Image11.png";

const BookInformation: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const book = books.find((book) => book.id === parseInt(id || "0"));

  const [quantity, setQuantity] = useState<number>(0);

  if (!book) {
    return <div className="text-center mt-10 text-lg">Book not found.</div>;
  }


  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  
  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 0));
  };


  const handleAddToCart = () => {
    setQuantity(1); 
  };

  return (
    <div className="p-8 flex lg:flex-row gap-10 ">
      
      <div className="flex flex-col items-center mt-[80px]">
        <div className="flex gap-4">
          <div className="flex flex-col">
            <img src={book.image} alt="thumb-1" className="w-12 h-16 border rounded cursor-pointer mb-2" />
            <img src={Img} alt="thumb-2" className="w-12 h-16 border rounded cursor-pointer" />
          </div>

          <div className="w-60 h-80 border border-gray-400 flex justify-center items-center">
            <img src={book.image} alt={book.title} className="w-48 h-64 object-cover" />
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          {quantity === 0 ? (
            <button
              className="bg-[#A03037] text-white px-6 py-2 rounded h-[42px] w-[110px] text-[10px] hover:bg-[#A03037] transition"
              onClick={handleAddToCart}
            >
              ADD TO BAG
            </button>
          ) : (
            <div className="flex items-center  rounded-md p-2">
              <button
                onClick={decreaseQuantity}
                className="w-8 h-8 bg-[#FAFAFA] border-[#DBDBDB] border-[1px] text-black font-bold rounded-full flex justify-center items-center text-lg"
              >
                −
              </button>
              <div className="w-10 h-8 flex justify-center items-center bg-white border mx-2 rounded-md">
                {quantity}
              </div>
              <button
                onClick={increaseQuantity}
                className="w-8 h-8 bg-[#FAFAFA] border-[#DBDBDB] border-[1px] text-black font-bold rounded-full flex justify-center items-center text-lg"
              >
                +
              </button>
            </div>
          )}
          <button className="bg-gray-700 text-white px-6 py-2 rounded h-[42px] w-[110px] text-[10px] hover:bg-gray-800 transition">
            ♥ WISHLIST
          </button>
        </div>
      </div>

 
      <div className="flex-1 mt-[80px] ">
        <h1 className="text-2xl font-semibold">{book.title}</h1>
        <p className="text-gray-500">by {book.author}</p>

       
        <div className="flex items-center mt-2">
          <span className="bg-[#388E3C] text-white px-2 py-1 rounded text-sm">{book.rating} ★</span>
          <span className="text-gray-500 text-sm ml-2">({book.reviews})</span>
        </div>

    
        <div className="mt-2">
          <span className="text-black text-lg font-semibold">Rs. {book.price}</span>
          <span className="text-gray-500 line-through ml-2">Rs. {book.originalPrice}</span>
        </div>
        <hr className="border-t border-gray-300 my-2" />


        <div className="mt-4">
          <h3 className="text-lg font-medium">Book Detail</h3>
          <p className="text-gray-600 text-sm mt-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy nibh
            euismod tincidunt ut laoreet dolore magna aliquam erat, sed diam voluptua. At vero eos at accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          </p>
        </div>

        <hr className="border-t border-gray-300 my-2 mt-[40px]" />
        <h3 className="text-lg font-medium">Customer Feedback</h3>
        <div className="mt-6 bg-[#F5F5F5] p-4 rounded-md">
          <div className="flex items-center gap-2 mt-2">
            <span className="text-gray-500">Overall rating</span>
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <span key={index} className="text-gray-500 text-lg cursor-pointer">★</span>
              ))}
            </div>
          </div>
          <textarea
            placeholder="Write your review"
            className="w-full mt-3 p-2 rounded-md bg-white"
          />
          <div className="flex justify-end">
            <button className="bg-[#3371B5] text-white px-4 py-2 rounded mt-3 hover:bg-[#3371B5] transition">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookInformation;

