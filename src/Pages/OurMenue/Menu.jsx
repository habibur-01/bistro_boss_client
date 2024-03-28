import { Helmet } from "react-helmet-async";
import CoverHeader from "../../Component/Shared Component/CoverHeader/CoverHeader";
import menuImg from "../../assets/menu/banner3.jpg"

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <div>
                <CoverHeader img={menuImg} title={'Our Menu'} subTitle={'Would You Like To Try A Dish'}></CoverHeader>
            </div>

        </div>
    );
};

export default Menu;