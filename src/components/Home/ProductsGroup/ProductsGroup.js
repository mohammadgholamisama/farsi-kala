import React from 'react'
import './ProductsGroup.css'
import { Link } from 'react-router-dom'

export default function ProductsGroup() {
    return (
        <div className='products-group'>
            <div className="container-xl">
                <h2 className='products-group-title text-center fs-2 mb-4'>دسته بندی فارسی کالا</h2>
                <div className="row justify-content-between">
                    <div className="col-6 col-md-4 col-lg-2 product-group-item">
                        <Link to="/" className="product-group-item-box">
                            <img src="/images/ProductsGroup/1.png" className='product-group-item-img' alt="group-image1" />
                            <span className='product-group-item-text'>موبایل</span>
                        </Link>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 product-group-item">
                        <Link to="/" className="product-group-item-box">
                            <img src="/images/ProductsGroup/2.jpg" className='product-group-item-img' alt="group-image2" />
                            <span className='product-group-item-text'>موبایل</span>
                        </Link>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 product-group-item">
                        <Link to="/" className="product-group-item-box">
                            <img src="/images/ProductsGroup/3.png" className='product-group-item-img' alt="group-image3" />
                            <span className='product-group-item-text'>موبایل</span>
                        </Link>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 product-group-item">
                        <Link to="/" className="product-group-item-box">
                            <img src="/images/ProductsGroup/4.jpg" className='product-group-item-img' alt="group-image4" />
                            <span className='product-group-item-text'>موبایل</span>
                        </Link>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 product-group-item">
                        <Link to="/" className="product-group-item-box">
                            <img src="/images/ProductsGroup/5.jpg" className='product-group-item-img' alt="group-image5" />
                            <span className='product-group-item-text'>موبایل</span>
                        </Link>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 product-group-item">
                        <Link to="/" className="product-group-item-box">
                            <img src="/images/ProductsGroup/6.png" className='product-group-item-img' alt="group-image6" />
                            <span className='product-group-item-text'>موبایل</span>
                        </Link>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 product-group-item">
                        <Link to="/" className="product-group-item-box">
                            <img src="/images/ProductsGroup/7.jpg" className='product-group-item-img' alt="group-image7" />
                            <span className='product-group-item-text'>موبایل</span>
                        </Link>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 product-group-item">
                        <Link to="/" className="product-group-item-box">
                            <img src="/images/ProductsGroup/8.jpg" className='product-group-item-img' alt="group-image8" />
                            <span className='product-group-item-text'>موبایل</span>
                        </Link>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 product-group-item">
                        <Link to="/" className="product-group-item-box">
                            <img src="/images/ProductsGroup/9.jpg" className='product-group-item-img' alt="group-image9" />
                            <span className='product-group-item-text'>موبایل</span>
                        </Link>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 product-group-item">
                        <Link to="/" className="product-group-item-box">
                            <img src="/images/ProductsGroup/10.jpg" className='product-group-item-img' alt="group-image10" />
                            <span className='product-group-item-text'>موبایل</span>
                        </Link>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 product-group-item">
                        <Link to="/" className="product-group-item-box">
                            <img src="/images/ProductsGroup/11.jpg" className='product-group-item-img' alt="group-image11" />
                            <span className='product-group-item-text'>موبایل</span>
                        </Link>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 product-group-item">
                        <Link to="/" className="product-group-item-box">
                            <img src="/images/ProductsGroup/12.jpg" className='product-group-item-img' alt="group-image12" />
                            <span className='product-group-item-text'>موبایل</span>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
