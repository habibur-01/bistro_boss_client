import SectionTitle from "../../../Component/Shared Component/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { RiDoubleQuotesL } from "react-icons/ri";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Testimonials = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    // console.log(reviews)
    return (
        <div className="my-20">
            <div >
                <SectionTitle heading={'Testimonials'} subHeading={'What Our Clients Say'}></SectionTitle>
            </div>
            <div className="m-10">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews.map(review => <SwiperSlide key={review._id}>
                            <div className="m-20 text-center">
                                <div className="flex justify-center">
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />
                                </div>
                                <div className="flex justify-center my-6">
                                    <RiDoubleQuotesL size={70}/>
                                </div>
                                <p>{review.details}</p>
                                <h3 className="text-2xl text-[#CD9003]">{review.name}</h3>
                            </div>

                        </SwiperSlide>)
                    }


                </Swiper>
            </div>

        </div>
    );
};

export default Testimonials;