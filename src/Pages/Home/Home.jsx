import { Helmet } from "react-helmet-async";
import Banner from "./Banener/Banner";
import Category from "./Category/Category";
import FeaturedItem from "./FeaturedItem/FeaturedItem";
import PoplerMenu from "./PopularMenu/PoplerMenu";
import Testimonials from "./Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PoplerMenu></PoplerMenu>
            <FeaturedItem></FeaturedItem>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;