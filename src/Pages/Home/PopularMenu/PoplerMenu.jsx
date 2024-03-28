import { useEffect, useState } from "react";
import SectionTitle from "../../../Component/Shared Component/SectionTitle/SectionTitle";
import MenuItem from "../../../Component/Shared Component/MenuItem/MenuItem";


const PoplerMenu = () => {
    const [menu, setMenu] = useState([])

    useEffect(()=> {
        fetch('/menu.json')
        .then(res=> res.json())
        .then(data => {
            setMenu(data)
            const popularItem = data.filter(item => item.category === 'popular')
            setMenu(popularItem)
        })
    },[])
    console.log(menu)

    return (
        <div>
            <SectionTitle
            heading={'From Our Menu'}
            subHeading={'Popular Items'}
            >  
            </SectionTitle>
            <div className="grid md:grid-cols-2 gape-4 my-24">
                {
                    menu?.map(item => <MenuItem key={item.id} item={item} ></MenuItem>)
                }
            </div>
            
        </div>
    );
};

export default PoplerMenu;