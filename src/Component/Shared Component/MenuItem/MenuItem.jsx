import {PropTypes} from "prop-types"

const MenuItem = ({item}) => {
    const {name, image, recipe, price } = item
    return (
        <div className="flex space-x-4 my-4">
            <img className="w-[120px] h-[104px]" style={{borderRadius: '0px 200px 200px 200px'}} src={image} alt="" />
            <div>
                <p className="uppercase">{name}</p>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
            
        </div>
    );
};
MenuItem.propTypes ={
    item: PropTypes.object
}

export default MenuItem;