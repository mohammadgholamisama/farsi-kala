import './SliderHome.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function SliderHome() {
    return (
        <div className='home-slide-banner d-none d-sm-block'>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{
                    delay: 2000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false
                }}

            >
                <SwiperSlide className='slide'>
                    <img src="/images/slid1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img src="/images/slid2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img src="/images/slid3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img src="/images/slid4.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
