import { FaBook, FaRegUserCircle } from "react-icons/fa";
import { FaBookOpenReader, FaHouse } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import { MdOutlineDashboard } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthContext";

const Profile = () => {
    const { user, userSignOut } = useContext(AuthContext)
    // const[isTrue, setIsTrue] = useState(false)
    // console.log(user)

    const handleSingOut = () => {
        userSignOut()
            .then(result => {
                console.log(result.user)
            }).catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="border-2 p-4 rounded-md shadow-md w-[300px] menu-container z-20 opacity-100">
            <div className=" py-2 flex flex-row justify-around gap-6 items-center text-black">
                <div>

                    {
                        user ? <div className="h-16 w-16 rounded-full border-2 border-blue-500">
                            <img src={user?.photoURL} alt="user photo" className="w-full h-full object-cover rounded-full" />
                        </div> :
                            <FaRegUserCircle size={50} />}
                </div>
                <div className="space-y-2">
                    <h1 className="text-lg font-medium">{user ? user?.displayName : "User Name"}</h1> 
                    <h2>{user ? user?.email : "exampleuser123@gmail.com"}</h2>
                    
                    <Link to={"/dashboard/myprofile"}><button className="bg-[#646cff] p-3 mt-2 font-semibold text-white text-base">Edit profile</button></Link>
                </div>
            </div>
            <hr className="my-4" />
            <div className="flex flex-col gap-2 text-black md:hidden">
                <div className="inline-flex items-center gap-4">
                    <FaHouse />
                    <Link to={"/"}> Home</Link>
                </div>
                <div className="inline-flex items-center gap-4">
                    <FaBookOpenReader />
                    <Link to={"/contact"}> Contact us</Link>
                </div>
                <div className="inline-flex items-center gap-4">
                    <FaBook />
                    <Link to={"/menu"}> Our Menu</Link>
                </div>
                <div className="inline-flex items-center gap-4">
                    <MdOutlineDashboard />
                    <Link  to={"/dashboard"} > Dashboard</Link>
                </div>
                <div className="inline-flex items-center gap-4">
                    <MdOutlineDashboard />
                    <Link  to={"/shop/salad"} > Our Shop</Link>
                </div>
            </div>
            <hr className="my-4" />
            <div onClick={handleSingOut} className="inline-flex items-center text-black">
                <AiOutlineLogout />
                <button className="bg-white ml-2">Log out</button>
            </div>
        </div>
    );
};

export default Profile;