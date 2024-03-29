import {PropTypes} from "prop-types"
import useAuth from "../../../hooks/useAuth/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { axiosSecure } from "../../../API/AxiosSecure/AxiosSecure";
import toast from "react-hot-toast";
import useCart from "../../../hooks/useCart/useCart";

const FoodCart = ({ items }) => {
    const { name, recipe, image, price } = items
    const {user} = useAuth()
    const navigate = useNavigate()
    const location =useLocation()
    const [, refetch] = useCart()
    // console.log(user)

    const handleAddToCart = (food) => {
        const {_id, name, image, price} = food
       if(user && user?.email){
           const cartItem={
            menuId: _id,
            email: user?.email,
            name,
            image,
            price
        }
        axiosSecure.post("/carts", cartItem)
        .then(result=>{
            console.log(result.data)
            if(result.data.acknowledged===true){
                toast('food add to cart successfully')
                refetch()
            }
        })

       }else{
        Swal.fire({
            title: "You Are Not Logged In",
            text: "Please log in for add to cart",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Log in!"
          }).then((result) => {
            if (result.isConfirmed) {
                navigate("/login", {state: {from:location}})
            }
          }); 
       }

    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl ">
                <div className="relative">
                    <figure><img className="object-cover" src={image} alt="Shoes" /></figure>
                    <p className="absolute top-4 right-4 bg-[#151515] text-white py-2 px-3 text-sm rounded-sm">${price}</p>
                </div>
                <div className="card-body flex flex-col items-center text-center">
                    <h2 className="card-title ">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button onClick={()=>handleAddToCart(items)} className="btn btn-primary hover:btn-ghost">Add to cart</button>
                    </div>
                </div>
            </div>

        </div>
    );
};
FoodCart.propTypes ={
    items: PropTypes.object
}

export default FoodCart;