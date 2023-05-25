import React, { useEffect, useState } from 'react'
import './TopBar.css'
import { Link, NavLink } from 'react-router-dom'
import { BiUserCircle, BiBasket, BiRefresh, BiTrash } from 'react-icons/bi'
import { AiOutlineHeart, AiOutlineBars } from 'react-icons/ai'
import { FaAngleDown, FaWindowClose } from 'react-icons/fa'
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { BasketProducts } from '../../Redux/reducers/userBasketReducer'
import { removeProduct } from '../../Redux/reducers/userBasketReducer'
export default function TopBar() {

    const dispatch = useDispatch()
    const allBasketProducts = useSelector(state => state.userBasket)
    // Basket List Total
    const [basketTotal, setBasketTotal] = useState(0)
    // Mobile Menu Handler
    const [mobileMenuHandler, setMobileMenuHandler] = useState(false)
    const [activeSubMenu, setActiveSubMenu] = useState('mobile-menu-parent-sub')

    useEffect(() => {
        dispatch(BasketProducts)
    }, [dispatch])

    useEffect(() => {
        const basketProductsPrice = []
        allBasketProducts.map(item => basketProductsPrice.push(item.price * item.count))

        let sum = basketProductsPrice.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue
        }, 0)

        sum && setBasketTotal(sum.toLocaleString())
    }, [allBasketProducts])

    function removeProductInBasket(productID) {
        dispatch(removeProduct(productID))
        setBasketTotal(0)
    }

    // Mobile Menu 
    const activeSubMenuHandler = () => {
        activeSubMenu === 'mobile-menu-parent-sub' ? setActiveSubMenu('mobile-menu-parent-sub active') : setActiveSubMenu('mobile-menu-parent-sub')
    }
    const closeMobileMenu = () => {
        setMobileMenuHandler(false)
    }
    return (
        <>
            {/* Start Mobile Menu */}
            <div className="topbar-mobile d-flex">
                <div className={mobileMenuHandler ? 'topbar-mobile-body-left' : 'topbar-mobile-body-left d-none'} onClick={closeMobileMenu}></div>
                <div className={mobileMenuHandler ? 'topbar-mobile-menu active-menu' : 'topbar-mobile-menu'}>
                    <div className="mobile-menu-close">
                        <FaWindowClose className='mobile-menu-close-icon' onClick={closeMobileMenu} />
                    </div>
                    <div className="topbar-mobile-menu-search topbar-searching">
                        <input type="text" placeholder='جستجو . . .' />
                    </div>
                    <ul>
                        <li className='mobile-menu-li'>
                            <NavLink to='/' onClick={() => setMobileMenuHandler(false)}>صفحه اصلی</NavLink>
                        </li>
                        <li className='mobile-menu-li'>
                            <NavLink to='/all-products' onClick={() => setMobileMenuHandler(false)}>تمام محصولات</NavLink>
                        </li>
                        <li className={activeSubMenu} onClick={activeSubMenuHandler}>
                            <div className='mobile-menu-sub-parrent'>
                                صفحات آماده شده <FaAngleDown className='mobile-menu-sub-icon' />
                            </div>
                            <ul className='mobile-menu-sub'>
                                <li className='mobile-menu-li'>
                                    <Link to='/' onClick={closeMobileMenu}>صفحه اصلی</Link>
                                </li>
                                <li className='mobile-menu-li'>
                                    <Link to='/product/1' onClick={closeMobileMenu}>مشاهده نمونه محصول</Link>
                                </li>
                                <li className='mobile-menu-li'>
                                    <Link to='/all-products' onClick={closeMobileMenu}>لیست تمام محصولات</Link>
                                </li>
                            </ul>
                        </li>
                        <li className='mobile-menu-li'>
                            <Link to='/'>وبلاگ</Link>
                        </li>
                        <li className='mobile-menu-li'>
                            <Link to='/'>درباره ما</Link>
                        </li>
                        <li className='mobile-menu-li'>
                            <Link to='/'>تماس با ما</Link>
                        </li>
                    </ul>
                </div>
            </div>
            {/* End Mobile Menu */}

            <div className='topbar'>
                <div className="container-xl d-flex justify-content-between align-items-center">
                    <div className='topbar-btn d-block d-lg-none'>
                        <AiOutlineBars className='topbar-icon' onClick={() => setMobileMenuHandler(true)} />
                    </div>
                    <div className="topbar-right d-flex align-items-center">
                        <Link to='/' className="topbar-branding">
                            <img src="/images/banner.png" className='topbar-branding-img' alt='banner' />
                        </Link>
                        <div className="topbar-searching d-none d-lg-flex">
                            <input type="text" placeholder='جتسجو ...' />
                        </div>
                    </div>
                    <div className="topbar-left">
                        <ul className='topbar-left-ul d-flex'>
                            <li>
                                <div to="/" className='topbar-left-link'>
                                    <AiOutlineHeart className='topbar-icon d-none d-lg-flex' />
                                </div>
                            </li>
                            <li>
                                <div to="/" className='topbar-left-link'>
                                    <BiRefresh className='topbar-icon d-none d-lg-flex' />
                                </div>
                            </li>
                            <li>
                                <div to="/" className='topbar-left-link position-relative topbar-icon-user-basket'>
                                    <BiBasket className='topbar-icon' />

                                    <span className="topbar-user-basket-count">{allBasketProducts.length}</span>
                                    <div className="topbar-user-basket">
                                        {allBasketProducts && allBasketProducts.map(product => (
                                            <div className="topbar-user-basket-item row" key={product.id}>
                                                <div className="topbar-user-basket-img col-3">
                                                    <img src={product.img} alt="img" />
                                                </div>
                                                <div className="topbar-user-basket-info col-7 px-3">
                                                    <Link to='/'>
                                                        {product.title}
                                                    </Link>
                                                    <p>{product.count} × {product.price} تومان</p>
                                                    <p>{product.select1} : {product.option1} , {product.select2}  {product.option2}</p>
                                                </div>
                                                <div className="col-2 d-flex align-items-center justify-content-end">
                                                    <BiTrash className='topbar-user-basket-icon' onClick={() => removeProductInBasket(product.id)} />
                                                </div>
                                            </div>
                                        ))}
                                        <div className="topbar-user-basket-price-box">
                                            <span className='topbar-user-basket-price-title'>جمع کل سبد خرید :</span>
                                            <span className='topbar-user-basket-price'>{basketTotal}</span>
                                        </div>
                                        <div className="topbar-user-basket-btns">
                                            <button className='topbar-user-basket-show-basket'>مشاهده سبد خرید</button>
                                            <button className='topbar-user-basket-checkout'>تسویه حساب</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div to="/" className='topbar-left-link'>
                                    <BiUserCircle className='topbar-icon d-none d-lg-flex' />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
