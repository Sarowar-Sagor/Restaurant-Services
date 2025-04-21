
const MenuItem = ({ item }) => {
    const { name, price, recipe, image } = item;
    return (
        <div className="flex items-center gap-4 p-3">
            <img className="w-32 rounded-b-[180px] rounded-tr-[180px]" src={image} alt="" />
            <div>
                <p className="uppercase text-xl">{name}----------------</p>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">{price}</p>
            
        </div>
    );
};

export default MenuItem;