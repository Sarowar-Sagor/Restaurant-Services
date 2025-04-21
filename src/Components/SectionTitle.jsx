
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center my-3 w-5/12 mx-auto">
            <p className="text-yellow-500 text-xl mb-2">---{heading}---</p>
            <h2 className="text-3xl uppercase border-y-4 py-2">{subHeading}</h2>
        </div>
    );
};

export default SectionTitle;