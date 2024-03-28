import { PropTypes } from "prop-types";
import MenuItem from "../../../Component/Shared Component/MenuItem/MenuItem";
import CoverHeader from "../../../Component/Shared Component/CoverHeader/CoverHeader";


const MenuCategory = ({ items, img, title, subTitle }) => {
    return (
        <div>
            <div>
                {
                    title && <CoverHeader img={img} title={title} subTitle={subTitle}></CoverHeader>
                }
            </div>
            <div className="grid md:grid-cols-2 gap-20 mt-24 mb-10">
                {
                    items?.map(item => <MenuItem key={item._id} item={item} ></MenuItem>)
                }
            </div>
            <div className="flex justify-center">
                <button className="btn btn-outline text-black border-0 border-b-4 mb-20 uppercase">Order Your Favourite Food</button>
            </div>
        </div>
    );
};
MenuCategory.propTypes = {
    items: PropTypes.array,
    img: PropTypes.any,
    title: PropTypes.string,
    subTitle: PropTypes.string,
}

export default MenuCategory;