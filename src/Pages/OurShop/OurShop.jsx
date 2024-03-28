import CoverHeader from "../../Component/Shared Component/CoverHeader/CoverHeader";
import shopBg from "../../assets/shop/banner2.jpg"

const OurShop = () => {
    return (
        <div>
            <CoverHeader img={shopBg} title={'Our Shop'} subTitle={'Would you like to try a dish'}></CoverHeader>
            
        </div>
    );
};

export default OurShop;