import { FaCreditCard, FaHome, FaList, FaPhone, FaShoppingBag, FaUsers } from "react-icons/fa";
import { FaCartFlatbedSuitcase, FaCartShopping } from "react-icons/fa6";
import { MdOutlineMenuBook } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useAxiosSecure from "../API/AxiosSecure/AxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth/useAuth";
import { useEffect, useState } from "react";



const Dashboard = () => {
    // #TODO:Admin from database
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const [isAdmin, setIsAdmin] = useState(false)
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    useEffect(() => {
        const filterUser = users.find(data => data.email === user.email)
        // console.log(filterUser)
        if (filterUser?.role === 'admin') {
            setIsAdmin(true)
        }
    }, [users, user.email])
    return (
        <div className="flex">
            <div className="w-64 bg-orange-400 min-h-screen">
                <ul className="menu">

                    {
                        isAdmin=== true ? <>
                            <li><NavLink to={'/dashboard/adminHome'}><FaHome />Admin Home</NavLink></li>
                            <li><NavLink to={'/dashboard/addItem'}><FaCartShopping />Add Items</NavLink></li>
                            <li><NavLink to={'/dashboard/manageItems'}><FaList />Manage Items</NavLink></li>
                            <li><NavLink to={'/dashboard/allUsers'}><FaUsers />All Users</NavLink></li>
                        </> :
                            <>
                                <li><NavLink to={'/dashboard/userHome'}><FaHome />User Home</NavLink></li>
                                <li><NavLink to={'/dashboard/cart'}><FaCartShopping />My Cart</NavLink></li>
                                <li><NavLink to={'/dashboard/paymenthistory'}><FaCreditCard />Payment History</NavLink></li>
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