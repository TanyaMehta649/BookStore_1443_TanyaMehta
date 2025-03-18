import Image from '../../assets/Image11.png';

export interface Book {
  
    id: number;
    title: string;
    author: string;
    price: number;
    originalPrice: number;
    image: string;
    outOfStock: boolean;
    rating: number;
    reviews: number;
  };
  

export const books:Book[]= [
  {
    id: 1,
    title: "Don't Make Me Think",
    author: "Steve Krug",
    price: 1500,
    originalPrice: 2000,
    image: Image,
    outOfStock: false,
    rating: 4.5,
    reviews: 120,
  },
  {
    id: 2,
    title: "React Material-UI",
    author: "Steve Krug",
    price: 1500,
    originalPrice: 2000,
    image: Image,
    outOfStock: false,
    rating: 4.5,
    reviews: 120,
  },
  {
    id: 3,
    title: "SharePoint Framework ",
    author: "Steve Krug",
    price: 1500,
    originalPrice: 2000,
    image: Image,
    outOfStock: false,
    rating: 4.5,
    reviews: 120,
  },

  {
    id: 4,
    title: "UX For Dummies",
    author: "Steve Krug",
    price: 1500,
    originalPrice: 2000,
    image: Image,
    outOfStock: true,
    rating: 4.0,
    reviews: 80,
  },
  {
    id: 5,
    title: "UX Design",
    author: "Steve Krug",
    price: 1500,
    originalPrice: 2000,
    image: Image,
    outOfStock: true,
    rating: 4.0,
    reviews: 80,
  },
  {
    id: 6,
    title: "Group Discussion",
    author: "Steve Krug",
    price: 1500,
    originalPrice: 2000,
    image: Image,
    outOfStock: true,
    rating: 4.0,
    reviews: 80,
  },
  {
    id: 7,
    title: "Lean UX",
    author: "Steve Krug",
    price: 1500,
    originalPrice: 2000,
    image: Image,
    outOfStock: true,
    rating: 4.0,
    reviews: 80,
  },
  {
    id: 8,
    title: "The Design of EveryDay Things",
    author: "Steve Krug",
    price: 1500,
    originalPrice: 2000,
    image: Image,
    outOfStock: true,
    rating: 4.0,
    reviews: 80,
  },
  {
    id: 9,
    title: "Don't Make Me Think",
    author: "Steve Krug",
    price: 1500,
    originalPrice: 2000,
    image: Image,
    outOfStock: true,
    rating: 4.0,
    reviews: 80,
  },
  
  {
    id: 10,
    title: "The Alchemist",
    author: "Steve Krug",
    price: 1500,
    originalPrice: 2000,
    image: Image,
    outOfStock: true,
    rating: 4.0,
    reviews: 80,
  },
  {
    id: 11,
    title: "SharePoint Framework",
    author: "Steve Krug",
    price: 1500,
    originalPrice: 2000,
    image: Image,
    outOfStock: true,
    rating: 4.0,
    reviews: 80,
  },
  {
    id: 12,
    title: "UX For Dummies",
    author: "Steve Krug",
    price: 1500,
    originalPrice: 2000,
    image: Image,
    outOfStock: true,
    rating: 4.0,
    reviews: 80,
  },
];