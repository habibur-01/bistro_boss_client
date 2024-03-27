import { Outlet } from "react-router-dom";
import Footer from "../Component/Shared Component/Footer/Footer";
import Navbar from "../Component/Shared Component/Navbar/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;