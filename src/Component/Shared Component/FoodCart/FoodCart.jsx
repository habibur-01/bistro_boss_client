import {PropTypes} from "prop-types"

const FoodCart = ({ items }) => {
    const { name, recipe, image, price } = items
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl ">
                <div className="relative">
                    <figure><img className="object-cover" src={image} alt="Shoes" /></figure>
                    <p className="absolute top-4 right-4 bg-[#151515] text-white py-2 px-3 text-sm rounded-sm">${price}</p>
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title ">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Add to cart</button>
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