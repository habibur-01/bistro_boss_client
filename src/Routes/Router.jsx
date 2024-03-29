import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/OurMenue/Menu";
import OurShop from "../Pages/OurShop/OurShop";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import LogIn from "../Pages/Log in/LogIn";
import Signup from "../Pages/SignUp/SignUp";
import ContactUs from "../Pages/ContactUs/ContactUs";
import PrivateRoute from "../Component/PrivateRouTe/PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage/>,
      children:[
        {
            path: "/",
            element: <Home/>,
        },
        {
          path: "/menu",
          element: <Menu></Menu>
        },
        {
          path:"/shop/:category",
          element: <OurShop/>
        },
        {
          path: "/login",
          element: <LogIn/>
        },
        {
          path: "/signup",
          element: <Signup/>
        },
        {
          path: "/contact",
          element: <ContactUs/>
        },
        
      ]
    },
    {
      
        path: "/dashboard",
        element:<PrivateRoute><Dashboard/></PrivateRoute>,
        children:[
          {
            path: "cart",
            element: <Cart/>
          }
        ]
      
    }
  ]);

  export default router;