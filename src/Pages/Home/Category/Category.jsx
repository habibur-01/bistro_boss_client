
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

import slide1 from "../../../assets/home/slide1.jpg"
import slide2 from "../../../assets/home/slide2.jpg"
import slide3 from "../../../assets/home/slide3.jpg"
import slide4 from "../../../assets/home/slide4.jpg"
import slide5 from "../../../assets/home/slide5.jpg"
import SectionTitle from "../../../Component/Shared Component/SectionTitle/SectionTitle"

const Category = () => {
    return (
        <div>
            <SectionTitle
                heading={'Order Online'}
                subHeading={"From 11:00 am to 10:00 pm"}>

            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper my-24 "
            >
                
                <SwiperSlide className='mb-6'>
                    <img src={slide1} className='w-full h-full object-cover' alt="" />
                    <h3 className='text-4xl uppercase -mt-20 text-white text-center'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide className='mb-6'>
                    <img src={slide2} className='w-full h-full object-cover' alt="" />
                    <h3 className='text-4xl uppercase -mt-20  text-white text-center'>Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide className='mb-6'>
                    <img src={slide3} className='w-full h-full object-cover' alt="" />
                    <h3 className='text-4xl uppercase -mt-20  text-white text-center'>Deserts</h3>
                </SwiperSlide>
                <SwiperSlide className='mb-6'>
                    <img src={slide4} className='w-full h-full object-cover' alt="" />
                    <h3 className='text-4xl uppercase -mt-20  text-white text-center'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide className='mb-6'>
                    <img src={slide5} className='w-full h-full object-cover' alt="" />
                    <h3 className='text-4xl uppercase -mt-20  text-white text-center'>Salads</h3>
                </SwiperSlide>
            

            </Swiper>
        </div>
    );
};

export default Category;