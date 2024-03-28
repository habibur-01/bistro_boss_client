import Banner from "./Banener/Banner";
import Category from "./Category/Category";
import FeaturedItem from "./FeaturedItem/FeaturedItem";
import PoplerMenu from "./PopularMenu/PoplerMenu";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PoplerMenu></PoplerMenu>
            <FeaturedItem></FeaturedItem>
        </div>
    );
};

export default Home;