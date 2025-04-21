import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import slide1 from '../../assets/home/slide1.jpg';
import slide2 from '../../assets/home/slide2.jpg';
import slide3 from '../../assets/home/slide3.jpg';
import slide4 from '../../assets/home/slide4.jpg';
import slide5 from '../../assets/home/slide5.jpg';
import SectionTitle from '../../Components/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle heading={"From 8:00 AM to 5:00 PM"} subHeading={"Order online"}>
            </SectionTitle>
            <Swiper
                autoplay={1000}
                slidesPerView={4}
                spaceBetween={20}
                // grabCursor={true}
                effect='coverflow'
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                coverflowEffect={{
                    rotate: 30,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[Pagination, EffectCoverflow]}
                className="mySwiper mb-4"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <p className='text-3xl uppercase text-center'>Salads</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <p className='text-3xl uppercase text-center'>pizza</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <p className='text-3xl uppercase text-center'>soup</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <p className='text-3xl uppercase text-center'>deserts</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <p className='text-2xl uppercase text-center'>Salads</p>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;