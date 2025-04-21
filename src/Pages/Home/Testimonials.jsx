import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../Components/SectionTitle";
import { Navigation } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";

import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect( () => {
        fetch("https://restaurant-server-sigma.vercel.app/reviews")
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <SectionTitle heading={"What Our Client Say"} subHeading={"Testimonials"}></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="flex flex-col items-center mx-20 my-6">
                            <Rating style={{maxWidth: 200}} value={review.rating} readOnly>
                            </Rating>
                            <FaQuoteLeft className="mt-4 text-3xl"></FaQuoteLeft>
                            <p className="my-5">{review.details}</p>
                        <h2 className="text-2xl text-orange-600">{review.name}</h2>
                        </div>
                        
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;