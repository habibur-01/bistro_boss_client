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
        }
      ]
    },
  ]);

  export default router;