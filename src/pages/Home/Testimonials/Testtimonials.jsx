import SecctionTitle from "../../../components/SectionTitle/SecctionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testtimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className="my-20">
            <SecctionTitle
                subHeading="What our clinets say"
                heading={"Testimonials"}
            ></SecctionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review =>
                        <SwiperSlide
                            key={review._id}>
                            <div className="flex flex-col items-center mx-24 my-16">

                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />

                                <p className="py-8">{review.details}</p>
                                <h3 className="text-2xl text-orange-700">{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testtimonials;