
import React, { useState } from "react";
import BookCard from "../BookCard/BookCard";
import { Pagination } from 'antd';
import { books } from '../BookCard/Books';

const BookContainer = () => {
  return (
    <div className="p-[100px]">
      <span className="text-[25px] flex items-center space-x-2 ml-[100px] mt-[30px] sm:ml-[20px] sm:text-[20px]">Books</span>
      <span className="text-[12px] flex items-center space-x-2 text-[#9D9D9D] ml-[170px] mt-[-24px]  sm:ml-[40px] sm:mt-[-10px]">({books.length} items)</span>
      <div className="relative w-[161px] ml-[83%] bg-[#FFFFFF] -mt-8 sm:ml-[60%] md:ml-[75%]">
        <select className="w-[161px] h-[30px] text-[12px] mb-10 border border-gray-300 rounded-xs py-1 pl-2 text-gray-700 focus:outline-none focus:ring-2 z-0">
          <option value="relevance">Sort by relevance</option>
          <option value="price">Sort by price</option>
          <option value="rating">Sort by rating</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ml-[100px] sm:ml-[20px]">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      <div className="mt-[80px] flex justify-center items-center">
        <Pagination defaultCurrent={6} total={500} />
      </div>
    </div>
  );
};

export default BookContainer;

