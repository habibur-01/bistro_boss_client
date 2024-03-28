import { Helmet } from "react-helmet-async";
import CoverHeader from "../../Component/Shared Component/CoverHeader/CoverHeader";
import menuImg from "../../assets/menu/banner3.jpg"
import useMenu from "../../hooks/useMenu/useMenu"
import SectionTitle from "../../Component/Shared Component/SectionTitle/SectionTitle"
import MenuCategory from "./MenuCategory/MenuCategory";
import dessertBg from "../../assets/menu/dessert-bg.jpeg"
import PizzaBg from "../../assets/menu/pizza-bg.jpg"
import saladBg from "../../assets/menu/salad-bg.jpg"
import soupBg from "../../assets/menu/soup-bg.jpg"

const Menu = () => {
    const [menu] = useMenu()
    const dessert = menu?.filter(item => item.category === 'dessert')
    const soup = menu?.filter(item => item.category === 'soup')
    const salad = menu?.filter(item => item.category === 'salad')
    const pizza = menu?.filter(item => item.category === 'pizza')
    const offered = menu?.filter(item => item.category === 'offered')
    // const drinks = menu?.filter(item => item.category === 'drinks')

    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <div>
                <CoverHeader img={menuImg} title={'Our Menu'} subTitle={'Would You Like To Try A Dish'}></CoverHeader>
            </div>
            <div className="mt-20">
               <SectionTitle heading={`Today's Offer`} subHeading={`Don't miss`}></SectionTitle>
            </div>
            <MenuCategory items={offered}></MenuCategory>
            {/* desserts item */}
            <MenuCategory items={dessert} title={'dessert'} img={dessertBg} subTitle={`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}></MenuCategory>
            <MenuCategory items={pizza} title={'pizza'} img={PizzaBg} subTitle={`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}></MenuCategory>
            <MenuCategory items={salad} title={'salad'} img={saladBg} subTitle={`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}></MenuCategory>
            <MenuCategory items={soup} title={'soup'} img={soupBg} subTitle={`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}></MenuCategory>


        </div>
    );
};

export default Menu;