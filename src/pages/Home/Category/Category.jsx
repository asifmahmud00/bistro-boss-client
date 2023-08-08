import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SecctionTitle from '../../../components/SectionTitle/SecctionTitle';


const Category = () => {
    return (
        <section>
            <SecctionTitle
                subHeading={"From 11.00 am to 10.00 pm"}
                heading={"Order Online"}>


            </SecctionTitle>
            <Swiper
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                className='mySwiper mb-20'
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className='text-4xl uppercase text-center text-white -mt-16'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className='text-4xl uppercase text-center text-white -mt-16'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className='text-4xl uppercase text-center text-white -mt-16'>Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className='text-4xl uppercase text-center text-white -mt-16'>Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className='text-4xl uppercase text-center text-white -mt-16'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className='text-4xl uppercase text-center text-white -mt-16'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className='text-4xl uppercase text-center text-white -mt-16'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className='text-4xl uppercase text-center text-white -mt-16'>Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className='text-4xl uppercase text-center text-white -mt-16'>Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className='text-4xl uppercase text-center text-white -mt-16'>Salads</h3>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;