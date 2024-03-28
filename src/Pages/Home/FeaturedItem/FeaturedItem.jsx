import SectionTitle from "../../../Component/Shared Component/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg"
import "./Featured.css"

const FeaturedItem = () => {
    return (
        <div className="featured-item pt-10 text-white  ">
            <SectionTitle heading={'Featured Item'} subHeading={'Check it out'}>

            </SectionTitle>
            <div className="md:flex  justify-center items-center px-16 py-16 ">
                <div>
                    <img src={featured} className="w-[648px] h-[400px] object-cover" alt="" />
                </div>
                <div className="ml-10 w-[604px] space-y-2">
                    <h3>March 20, 2023</h3>
                    <h3 className="uppercase">WHERE CAN I GET SOME?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4 text-yellow-500">Read More</button>
                </div>

            </div>

        </div>
    );
};

export default FeaturedItem;