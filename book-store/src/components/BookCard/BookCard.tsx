
import React from "react";
import './Books';
import { useNavigate } from "react-router-dom";

interface BookProps {
  book: {
    id: number;
    title: string;
    author: string;
    price: number;
    image: string;
    outOfStock: boolean;
  };
}

const BookCard: React.FC<BookProps> = ({ book }) => {
  const navigate = useNavigate();
  return (
    <div className="p-2">
      <div 
        className="w-[233px] h-[275px]  bg-gray-300 border-[2px] border-[#F5F5F5] shadow-md hover:shadow-2xl rounded-sm flex flex-col items-center transition-shadow duration-300 ease-in-out cursor-pointer"
        onClick={() => navigate(`/dashboard/books/${book.id}`)}
      >
        <div className="w-full h-[170px] sm:h-[200px] md:h-[220px] lg:h-[240px] bg-[#F5F5F5] flex justify-center items-center shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <img src={book.image} alt={book.title} className="w-[105px] h-[135px] object-cover" />
        </div>

        <div className="bg-white w-full p-3">
          <h3 className="text-[14px]  font-semibold text-left">{book.title}</h3>
          <p className="text-gray-500 text-[10px] ">{book.author}</p>
          <div className="flex flex-col justify-between w-full">
            <div>
              <span className="text-white text-[9px]  rounded-xs bg-[#388E3C] p-[3px]">4.5★</span>
            </div>
            <span className="text-gray-500 text-[10px]  ml-[30px] mt-[-18px]">(20)</span>
            <div className="mt-[1px]">
              
              <span className="text-black text-[12px] font-bold ">₹{book.price}</span>
              <span className="text-gray-500 text-[12px]  line-through">₹2000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
