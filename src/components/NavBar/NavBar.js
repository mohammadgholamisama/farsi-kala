import React from 'react'
import './NavBar.css'
import { FaAngleDown } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav className='nav-bar position-sticky d-none d-lg-flex'>
            <div className="container-xl d-flex align-items-center justify-content-between">
                <div className="navbar-menu">
                    <ul className='navbar-menu-ul d-flex'>
                        <li>
                            <NavLink to="/" className='navbar-menu-link'>
                                صفحه اصلی
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/all-products" className='navbar-menu-link'>
                                لیست تمام محصولات
                            </NavLink>
                        </li>
                        <li className='position-relative li-sub'>
                            <div className='navbar-menu-link'>
                                صفحات آماده شده <FaAngleDown className='navbar-menu-icon' />
                            </div>
                            <div className="navbar-sub-menu">
                                <ul>
                                    <li>
                                        <Link to='/'>صفحه اصلی</Link>
                                    </li>
                                    <li>
                                        <NavLink to='/product/1'>مشاهده نمونه محصول</NavLink>
                                    </li>
                                    <li>
                                        <Link to='/all-products'>لیست تمام محصولات</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <Link to="/" className='navbar-menu-link'>
                                وبلاگ
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className='navbar-menu-link'>
                                درباره ما
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className='navbar-menu-link'>
                                تماس با ما
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-info">
                    <h5 className='navbar-info-text'>ارسال رایگان برای سفارش های بالا 200 هزار تومان</h5>
                </div>
            </div>
        </nav>
    )
}
