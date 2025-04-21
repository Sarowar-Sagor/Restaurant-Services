import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import MenuItem from "../Shared/MenuItem";
import UseMenu from "../../Hooks/UseMenu";

const PopularMenu = () => {
    
    const [menu] = UseMenu();
    const popularItems = menu.filter(item => item.category === 'popular')
  
    return (
        <div>
            <SectionTitle heading={"From Our Menu"} subHeading={"Popular Items"}></SectionTitle>
            <div className="grid md:grid-cols-2 gap-4 my-3">
                {
                    popularItems.map(item => <MenuItem item={item} key={item._id}></MenuItem>)
                }
            </div>
            <div className="text-center">
                <button className="btn btn-ghost border-0 border-b-4 border-orange-600 mt-3">View Full Menu</button>
            </div>
            
        </div>
    );
};

export default PopularMenu;