import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import CoverHeader from "../../Component/Shared Component/CoverHeader/CoverHeader";
import shopBg from "../../assets/shop/banner2.jpg"
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../hooks/useMenu/useMenu";
import FoodCart from "../../Component/Shared Component/FoodCart/FoodCart";
import { useParams } from "react-router-dom";

const OurShop = () => {
    const categories = ['salad', 'pizza', 'dessert', 'drinks', 'soup']
    const {category} = useParams()
    const initalIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initalIndex);
    const [menu] = useMenu()
    // console.log(category)

    const dessert = menu?.filter(item => item.category === 'dessert')
    const soup = menu?.filter(item => item.category === 'soup')
    const salad = menu?.filter(item => item.category === 'salad')
    const pizza = menu?.filter(item => item.category === 'pizza')
    const drinks = menu?.filter(item => item.category === 'drinks')

    return (
        <div>
            <CoverHeader img={shopBg} title={'Our Shop'} subTitle={'Would you like to try a dish'}></CoverHeader>

            <div className="my-20">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drinks</Tab>
                        <Tab>Soups</Tab>
                    </TabList>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 mt-14" >
                            {
                                salad?.map(item => <FoodCart key={item._id} items={item}></FoodCart>)
                            }
                        </div>
                    </TabPanel >

                    <TabPanel>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 mt-14">
                            {
                                pizza?.map(item => <FoodCart key={item._id} items={item}></FoodCart>)
                            }
                        </div>

                    </TabPanel>
                    <TabPanel>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 mt-14">
                            {
                                dessert?.map(item => <FoodCart key={item._id} items={item}></FoodCart>)
                            }
                        </div>

                    </TabPanel>
                    <TabPanel>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 mt-14">
                            {
                                drinks?.map(item => <FoodCart key={item._id} items={item}></FoodCart>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel >

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 mt-14">
                            {
                                soup?.map(item => <FoodCart key={item._id} items={item}></FoodCart>)
                            }
                        </div>

                    </TabPanel>
                </Tabs>
            </div>

        </div >

    );
};

export default OurShop;