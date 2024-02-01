import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import ContactUS from "./components/ContactUs.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import Error from "./components/Error.jsx";
// import Grocery from "./components/Grocery.jsx";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
/*
 *App
 **Header
 ***Logo
 ***Nav-item
 **Body
 ***RestaurentContainer
 ***RestaurentCard
 ****img
 ****name of res,star rating,cuisine,delivery time
 **Footer
 ***Copyright
 ***Links
 ***Address
 ***Contact
 */

 const Grocery=lazy(()=>import('./components/Grocery.jsx'));

 const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const router=createBrowserRouter([
  {
    path:'/',
    element:<AppLayout />,
    children: [
      {
        path:'/',
        element:<Body />,
      },
      {
        path:'/about',
        element:<About />,
      },
      {
        path:'/contactUs',
        element:<ContactUS />,
      },
      {
        path:'/restaurants/:resId',
        element:<RestaurantMenu />
      },
      {
        path:'/grocery',
        element:<Suspense fallback={<h1>Component loading.....</h1>}><Grocery/></Suspense>
      }
    ],
    errorElement: <Error />
  },
  
])



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
