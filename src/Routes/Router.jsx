import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/OurMenue/Menu";
import OurShop from "../Pages/OurShop/OurShop";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
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
          path:"/shop",
          element: <OurShop/>
        }
      ]
    },
  ]);

  export default router;