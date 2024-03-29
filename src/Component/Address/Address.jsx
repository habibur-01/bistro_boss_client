import PropTypes from "prop-types"

const Address = ({ icon, title, titleContent, openTime }) => {
    return (
        <div>
            <div className="border-[1px] mb-20 mt-8 pb-6">
                <div className="bg-[#D1A054] flex justify-center items-center h-16">
                    {icon}
                </div>
                <div className="bg-slate-300 w-3/4 m-auto h-72 flex flex-col justify-center items-center">
                    <h2 className="text-2xl uppercase mb-2">{title}</h2>
                    <p className="text-base">{titleContent}</p>
                    <p className="text-base">{openTime}</p>
                </div>
            </div>

        </div>
    );
};
Address.propTypes={
    icon: PropTypes.any, 
    title: PropTypes.string, 
    titleContent: PropTypes.string, 
    openTime: PropTypes.any
}

export default Address;