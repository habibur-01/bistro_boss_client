import SectionTitle from "../../../Component/Shared Component/SectionTitle/SectionTitle";
import MenuItem from "../../../Component/Shared Component/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu/useMenu";


const PopularMenu = () => {
    const [ menu ]   = useMenu()

    const popularItem = menu.filter(item => item.category === 'popular')
   
    // console.log(menu)

    return (
        <div>
            <SectionTitle
            heading={'From Our Menu'}
            subHeading={'Popular Items'}
            >  
            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-6 my-24">
                {
                    popularItem?.map(item => <MenuItem key={item._id} item={item} ></MenuItem>)
                }
            </div>
            
        </div>
    );
};

export default PopularMenu;