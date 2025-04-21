import { Link } from "react-router-dom";
import Cover from "../Shared/Cover/Cover";
import MenuItem from "../Shared/MenuItem";

const MenuCategory = ({ items, coverImg, title }) => {
    return (
        <div>
            <Cover img={coverImg} title={title}></Cover>

            <div className="grid md:grid-cols-2 gap-4 my-3">
                {
                    items.map(item => <MenuItem item={item} key={item._id}></MenuItem>)
                }
            </div>
            <Link className="flex mb-3 justify-center" to={`/order/${title}`}>
                <button className="btn border-0 border-b-4 border-orange-600 mt-3">Order Now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;