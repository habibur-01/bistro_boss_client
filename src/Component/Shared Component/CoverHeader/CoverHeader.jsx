import { PropTypes } from "prop-types";



const CoverHeader = ({img , title, subTitle}) => {
    return (
        <div className="hero min-h-[700px]" style={{ backgroundImage: `url('${img}')` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                    <p className="mb-5 uppercase">{subTitle}</p>
                    
                </div>
            </div>
        </div>
    );
};
CoverHeader.propTypes ={
    title: PropTypes.string,
    subTitle: PropTypes.string,
    img: PropTypes.image
}

export default CoverHeader;