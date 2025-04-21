import SectionTitle from "../../Components/SectionTitle";
import featureImage from "../../assets/home/featured.jpg";
import "./Featured.css";


const Featured = () => {
    return (
        <div className="backgroundImage">
            <SectionTitle subHeading={"From our menu"} heading={"Check it out"}></SectionTitle>
            <div className="flex justify-center items-center z-30 gap-6 px-16 py-7">
                <div className="flex-1">
                    <img src={featureImage} alt="" />
                </div>
                <div className="flex-1 bg-gray-50 bg-opacity-75 font-medium p-3">
                    <p>29 Aug 2025</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus enim accusamus quis blanditiis officia, sit dolorum, quibusdam corrupti laudantium nostrum obcaecati inventore porro reiciendis voluptatum esse quas consectetur vitae possimus!</p>
                    <button className="btn text-white bg-slate-500 hover:bg-black border-0 border-b-4 border-orange-600 mt-3">Order Now</button>
                </div>
            </div>

        </div>
    );
};

export default Featured;