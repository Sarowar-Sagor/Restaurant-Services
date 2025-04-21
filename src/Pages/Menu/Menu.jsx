import { Helmet } from "react-helmet";
import Cover from "../Shared/Cover/Cover";
import coverImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import drinkImg from "../../assets/menu/drinks.jpg";

import UseMenu from "../../Hooks/UseMenu";
import MenuCategory from "./MenuCategory";
import SectionTitle from "../../Components/SectionTitle";

const Menu = () => {

    const [menu] = UseMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    // const offered = menu.filter(item => item.category === 'offered');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>
            <Helmet>
                <title>Organic | Menu</title>
            </Helmet>
            <Cover img={coverImg} title={"our menu"}></Cover>

            <SectionTitle subHeading={"Don't miss"} heading={"Today's offer"}></SectionTitle>

            {/* <MenuCategory items={offered} title={"Offer"} coverImg={saladImg}></MenuCategory> */}
            <MenuCategory items={dessert} coverImg={dessertImg} title={"dessert"}></MenuCategory>
            <MenuCategory items={soup} coverImg={soupImg} title={"soup"}></MenuCategory>
            <MenuCategory items={salad} coverImg={saladImg} title={"salad"}></MenuCategory>
            <MenuCategory items={pizza} coverImg={pizzaImg} title={"pizza"}></MenuCategory>
            <MenuCategory items={drinks} coverImg={drinkImg} title={"drinks"}></MenuCategory>
         
        </div>
    );
};

export default Menu;