import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../components/Login/login";
import Signup from "../components/Signin/Signup";
import Dashboard from "../components/Dashboard/Dashboard";
import BookContainer from "../components/BookContainer/BookContainer";
import ForgotPassword from "../components/ForgotPassword/ForgotPassword";
import BookInformation from "../components/BookInformation/BookInformation";
import BookWishlist from "../components/LoginWishlist/LoginWishlist";
import LoginWishlist from "../components/LoginWishlist/LoginWishlist";
import MyWishlist from "../components/MyWishlist/MyWishlist";
import OrderPlaced from "../components/OrderPlaced/OrderPlaced";
import MyCart from "../components/MyCart/MyCart";
import Profile from "../components/Profile/Profile";
import MyOrder from "../components/MyOrder/MyOrder";

const route = createBrowserRouter([
  {
    path: "",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "books", 
        element: <BookContainer />,
      },
      {
        path: "books/:id",
        element: <BookInformation/>
      },
      {
        path:"wishlist",
        element: <LoginWishlist/>
      },
      {
        path:"orderplaced",
        element: <OrderPlaced/>
      }
,
{
  path:"profile",
  element: <Profile/>
}

,
{
  path:"mywishlist",
  element: <MyWishlist/>
},
{
  path:"mycart",
  element: <MyCart/>
},
{
  path:"myorder",
  element: <MyOrder/>
}
    ],
  },
]);

const RoutingModule: React.FC = () => {
  return <RouterProvider router={route} />;
};

export default RoutingModule;
