import React from 'react'
import './SiteList.css'
import { Link } from 'react-router-dom'

export default function SiteList() {
    return (
        <div className='site-list'>
            <div className="container-xl">
                <ul className='site-list-ul'>
                    <li>
                        <Link to='/all-products' className='site-list-link'>
                            <img src="/images/site-list/1.png" alt="shop img" />
                            <span className='site-list-link-text'>فارسی کالا</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/all-products' className='site-list-link'>
                            <img src="/images/site-list/2.png" alt="shop img" />
                            <span className='site-list-link-text'>فارسی استایل</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/all-products' className='site-list-link'>
                            <img src="/images/site-list/3.png" alt="shop img" />
                            <span className='site-list-link-text'>فارسی پی</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/all-products' className='site-list-link'>
                            <img src="/images/site-list/4.png" alt="shop img" />
                            <span className='site-list-link-text'>فارسی کالا مهر</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/all-products' className='site-list-link'>
                            <img src="/images/site-list/5.png" alt="shop img" />
                            <span className='site-list-link-text'>ماموریت ها</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/all-products' className='site-list-link'>
                            <img src="/images/site-list/6.png" alt="shop img" />
                            <span className='site-list-link-text'>فارسی پلاس</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/all-products' className='site-list-link'>
                            <img src="/images/site-list/7.png" alt="shop img" />
                            <span className='site-list-link-text'>فارسی کلاب</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/all-products' className='site-list-link'>
                            <img src="/images/site-list/8.png" alt="shop img" />
                            <span className='site-list-link-text'>بیشتر</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
