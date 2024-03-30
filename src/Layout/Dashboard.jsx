import { FaCreditCard, FaHome, FaList, FaPhone, FaShoppingBag, FaUsers } from "react-icons/fa";
import { FaCartFlatbedSuitcase, FaCartShopping } from "react-icons/fa6";
import { MdOutlineMenuBook } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    // #TODO:Admin from database
    const isAdmin = true
    return (
        <div className="flex">
            <div className="w-64 bg-orange-400 min-h-screen">
                <ul className="menu">

                    {
                        isAdmin ? <>
                            <li><NavLink to={'/dashboard/adminHome'}><FaHome />Admin Home</NavLink></li>
                            <li><NavLink to={'/dashboard/addItem'}><FaCartShopping />Add Items</NavLink></li>
                            <li><NavLink to={'/dashboard/manageItems'}><FaList />Manage Items</NavLink></li>
                            <li><NavLink to={'/dashboard/allUsers'}><FaUsers />All Users</NavLink></li>
                        </> :
                            <>
                                <li><NavLink to={'/dashboard/userHome'}><FaHome />User Home</NavLink></li>
                                <li><NavLink to={'/dashboard/cart'}><FaCartShopping />My Cart</NavLink></li>
                                <li><NavLink to={'/dashboard/payment'}><FaCreditCard />Payment History</NavLink></li>
                                <li><NavLink to={'/dashboard/mybooking'}><FaCartFlatbedSuitcase />My Booking</NavLink></li>
                            </>
                    }
                </ul><hr />
                <ul className="menu">
                    <li><NavLink to={'/'}><FaHome /> Home</NavLink></li>
                    <li><NavLink to={'/menu'}><MdOutlineMenuBook />Our Menu</NavLink></li>
                    <li><NavLink to={'/shop/salad'}><FaShoppingBag />Our Shop</NavLink></li>
                    <li><NavLink to={'/contact'}><FaPhone />Contact us</NavLink></li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-32">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;