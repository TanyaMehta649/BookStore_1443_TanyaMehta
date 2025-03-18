
import React, { useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import Image from '../../assets/Image11.png';

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  oldPrice: number;
  image: string;
}

const Wishlist: React.FC = () => {
  const [wishlist, setWishlist] = useState<Book[]>([
    {
      id: 1,
      title: "Don't Make Me Think",
      author: "Steve Krug",
      price: 1500,
      oldPrice: 2000,
      image: "/assets/dont-make-me-think.jpg",
    },
    {
      id: 2,
      title: "React Material-UI",
      author: "Cookbook",
      price: 780,
      oldPrice: 1400,
      image: "/assets/react-material-ui.jpg",
    },
  ]);

  const removeFromWishlist = (id: number) => {
    setWishlist(wishlist.filter((book) => book.id !== id));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-10">
      <h2 className="text-lg text-gray-600 mt-[50px] mr-[1000px] bg-white mb-[20px]">Home / My Wishlist</h2>
      <div className=" w-6xl bg-[#F5F5F5] py-6 px-4 border-b border-gray-400">
        <div className="max-w mx-auto">
          <h1 className="text-2xl font-bold mt-2">My Wishlist ({wishlist.length})</h1>
        </div>
      </div>
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-b-lg p-6 border border-[#E4E4E4]">
        {wishlist.length > 0 ? (
          <ul className="space-y-4">
            {wishlist.map((book, index) => (
              <>
                <li
                  key={book.id}
                  className="flex items-center justify-between bg-white p-4   w-full"
                >
                  <img src={Image} alt={book.title} className="w-16 h-24 object-cover" />

                  <div className="flex-1 ml-4">
                    <h3 className="font-bold text-lg text-gray-800">{book.title}</h3>
                    <p className="text-sm text-gray-600">by {book.author}</p>
                    <p className="text-red-500 font-semibold">
                      Rs. {book.price} <span className="text-gray-400 line-through">Rs. {book.oldPrice}</span>
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromWishlist(book.id)}
                    className="text-gray-500 hover:text-red-500 text-xl"
                  >
                    <DeleteOutlined />
                  </button>
                </li>
                {index < wishlist.length - 1 && <hr className=" border-gray-400 w-full" />}
              </>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500 mt-4">Your wishlist is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Wishlist;