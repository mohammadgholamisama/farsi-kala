import React from 'react'
import { useState, useEffect } from 'react';
import { FaAngleLeft } from 'react-icons/fa'
import { BsFillBasket2Fill } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import './AmazingOffer.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Link } from 'react-router-dom'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// redux
import { fetchProducts } from '../../../Redux/reducers/amazingProductsReducer';
import { useDispatch, useSelector } from 'react-redux';

export default function AmazingOffer() {

    const [slidesPerView, setSlidesPerView] = useState(4);
    const [amaingProducts, setAmaingProducts] = useState([]);

    const dispatch = useDispatch()
    const allAmazingProducts = useSelector(state => state.products.amazingProducts)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    useEffect(() => {
        let amazingStatus = allAmazingProducts.filter(p => p.status === 'amazing')
        amazingStatus && setAmaingProducts(amazingStatus)
    }, [allAmazingProducts])


    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 600) {
                setSlidesPerView(1);
            } else if (window.innerWidth <= 960) {
                setSlidesPerView(2);
            } else if (window.innerWidth <= 1280) {
                setSlidesPerView(3);
            } else {
                setSlidesPerView(4);
            }
        }
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='amazing-offer-page'>
            <div className="container-xl">
                <div className="amazing-offer">
                    <div className="amazing-offer-right">
                        <img src="/images/amazing-offer/logo.png" alt="logo" />
                        <Link to="/">نمایش همه <FaAngleLeft /></Link>
                    </div>
                    <Swiper
                        modules={[Navigation, Pagination, A11y, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={slidesPerView}
                        navigation
                        loop
                        autoplay={{
                            delay: 2000,
                            pauseOnMouseEnter: true,
                            disableOnInteraction: false
                        }}
                    >
                        {amaingProducts && amaingProducts.map(product => (
                            <SwiperSlide className='amazing-slide-item' key={product.id}>
                                <Link to={`/product/${product.id}`} className='amazing-slide-item-link'>
                                    <img src={product.img} alt="amazig-product" />
                                    <div className="amazing-slide-item-info">
                                        <p>{product.title}</p>
                                        <span>{product.price.toLocaleString()}</span>
                                    </div>
                                    <div className="amazing-slide-item-info-btn">
                                        <span>قیمت قبلی {product.oldPrice.toLocaleString()}</span>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="amazing-offer-banner">
                    <div className="row d-flex align-items-center">
                        <div className="amazing-offer-banner-left col-12 col-lg-4 text-center ">
                            <BsFillBasket2Fill className='amazing-offer-banner-icon' />
                            <span className='amazing-offer-banner-text me-3 mt-3 mt-lg-0'>شگفت انگیز سوپرمارکتی</span>
                        </div>
                        <div className="col-12 col-lg-5 mt-4 mt-lg-0">
                            <div className='row amazing-offer-banner-ul justify-content-lg-between'>
                                <div className='col-4 col-lg-4 col-xl-2 mt-2 mt-lg-0 text-center'>
                                    <Link>
                                        <img className='amazing-offer-banner-img' src="/images/amazing-offer/offer-banner1.jpg" alt="img" />
                                    </Link>
                                </div>
                                <div className='col-4 col-lg-4 col-xl-2 mt-2 mt-lg-0 text-center'>
                                    <Link>
                                        <img className='amazing-offer-banner-img' src="/images/amazing-offer/offer-banner2.jpg" alt="img" />
                                    </Link>
                                </div>
                                <div className='col-4 col-lg-4 col-xl-2 mt-2 mt-lg-0 text-center'>
                                    <Link>
                                        <img className='amazing-offer-banner-img' src="/images/amazing-offer/offer-banner3.jpg" alt="img" />
                                    </Link>
                                </div>
                                <div className='col-4 col-lg-4 col-xl-2 mt-2 mt-lg-0 text-center'>
                                    <Link>
                                        <img className='amazing-offer-banner-img' src="/images/amazing-offer/offer-banner4.jpg" alt="img" />
                                    </Link>
                                </div>
                                <div className='col-4 col-lg-4 col-xl-2 mt-2 mt-lg-0 text-center'>
                                    <Link>
                                        <img className='amazing-offer-banner-img' src="/images/amazing-offer/offer-banner5.jpg" alt="img" />
                                    </Link>
                                </div>
                                <div className='col-4 col-lg-4 col-xl-2 mt-2 mt-lg-0 text-center'>
                                    <Link>
                                        <img className='amazing-offer-banner-img' src="/images/amazing-offer/offer-banner6.jpg" alt="img" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="amazing-offer-banner-btn col-12 col-lg-3 text-center text-lg-start mt-4 mt-lg-0">
                            <button>بیش از 90 کالا  <AiOutlineArrowLeft className='amazing-offer-banner-btn-icon' /></button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
