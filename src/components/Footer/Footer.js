import React from 'react'
import './Footer.css'

import { FaAngleUp } from 'react-icons/fa'
import { BsWhatsapp, BsTelegram, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className="container-xl">

        <div className="footer-header">
          <div className="row align-items-center">
            <div className="footer-header-right col-12 col-lg-8">
              <div className="footer-header-right-top">
                <div className="footer-header-right-top-img text-center text-lg-end">
                  <img src="/images/footer/footer-logo.png" alt="footer img" />
                </div>
                <p className='text-center text-lg-end'>تلفن پشتیبانی: 12345678 - 021 | 123456789 - 021 | هفت روز هفته، ۲۴ ساعت شبانه‌روز پاسخگوی شما هستیم.</p>
              </div>
            </div>
            <div className="footer-header-left col-12 col-lg-4 text-center text-lg-start mt-4 mt-lg-0">
              <button className='go-to-up-site' onClick={() => window.scrollTo(0, 0)}>بازگشت به بالا <FaAngleUp /></button>
            </div>
            <div className="footer-icons mt-5 col-12">
              <ul className='footer-icons-ul'>
                <li>
                  <img src="/images/footer/1.svg" alt="footer svg" />
                  <span>تحویل سریع</span>
                </li>
                <li>
                  <img src="/images/footer/2.svg" alt="footer svg" />
                  <span>تحویل سریع</span>
                </li>
                <li>
                  <img src="/images/footer/3.svg" alt="footer svg" />
                  <span>تحویل سریع</span>
                </li>
                <li>
                  <img src="/images/footer/4.svg" alt="footer svg" />
                  <span>تحویل سریع</span>
                </li>
                <li>
                  <img src="/images/footer/5.svg" alt="footer svg" />
                  <span>تحویل سریع</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-lists">
          <div className="row">
            <div className="footer-list-box col-12 col-md-3 text-center text-lg-end">
              <h4 className="footer-list-title">با فارسی کالا</h4>
              <ul className='footer-list-ul mb-5 mb-lg-0'>
                <li>
                  <Link to="/" className='footer-list-link'>اتاق خبر فارسی کالا</Link>
                </li>
                <li>
                  <Link to="/" className='footer-list-link'>فروش در فارسی کالا</Link>
                </li>
                <li>
                  <Link to="/" className='footer-list-link'>فرصت های شغلی</Link>
                </li>
                <li>
                  <Link to="/" className='footer-list-link'>تماس با فارسی کالا</Link>
                </li>
                <li>
                  <Link to="/" className='footer-list-link'>درباره فارسی کالا</Link>
                </li>
              </ul>
            </div>
            <div className="footer-list-box col-12 col-md-3 text-center text-lg-end">
              <h4 className="footer-list-title">خدمات مشتریان</h4>
              <ul className='footer-list-ul mb-5 mb-lg-0'>
                <li>
                  <Link to="/" className='footer-list-link'>اتاق خبر فارسی کالا</Link>
                </li>
                <li>
                  <Link to="/" className='footer-list-link'>فروش در فارسی کالا</Link>
                </li>
                <li>
                  <Link to="/" className='footer-list-link'>فرصت های شغلی</Link>
                </li>
                <li>
                  <Link to="/" className='footer-list-link'>تماس با فارسی کالا</Link>
                </li>
                <li>
                  <Link to="/" className='footer-list-link'>درباره فارسی کالا</Link>
                </li>
              </ul>
            </div>
            <div className="footer-list-box col-12 col-md-3 text-center text-lg-end">
              <h4 className="footer-list-title">راهنمای خرید از فارسی کالا</h4>
              <ul className='footer-list-ul mb-5 mb-lg-0'>
                <li>
                  <Link to="/" className='footer-list-link'>اتاق خبر فارسی کالا</Link>
                </li>
                <li>
                  <Link to="/" className='footer-list-link'>فروش در فارسی کالا</Link>
                </li>
                <li>
                  <Link to="/" className='footer-list-link'>فرصت های شغلی</Link>
                </li>
                <li>
                  <Link to="/" className='footer-list-link'>تماس با فارسی کالا</Link>
                </li>
                <li>
                  <Link to="/" className='footer-list-link'>درباره فارسی کالا</Link>
                </li>
              </ul>
            </div>
            <div className="footer-list-box col-12 col-md-3 text-center text-lg-end">
              <h4 className="footer-list-title text-center">با ما همراه باشید</h4>
              <div className="footer-list-box-sosial d-flex justify-content-evenly">
                <a href="https://t.me/m155680" target='_blank' rel="noopener noreferrer">
                  <BsLinkedin className='footer-list-sosial-icon' />
                </a>
                <a href="https://t.me/m155680" target='_blank' rel="noopener noreferrer">
                  <BsTwitter className='footer-list-sosial-icon' />
                </a>
                <a href="https://t.me/m155680" target='_blank' rel="noopener noreferrer">
                  <BsInstagram className='footer-list-sosial-icon' />
                </a>
                <a href="https://t.me/m155680" target='_blank' rel="noopener noreferrer">
                  <BsTelegram className='footer-list-sosial-icon' />
                </a>
                <a href="https://t.me/m155680" target='_blank' rel="noopener noreferrer">
                  <BsWhatsapp className='footer-list-sosial-icon' />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center mt-5">
          <h6 className='footer-copyright-text'>استفاده از مطالب فروشگاه فارسی کالا فقط برای مقاصد غیرتجاری و با ذکر منبع بلامانع است. کلیه حقوق این سایت متعلق به شرکت فارسی کالا (فروشگاه آنلاین فارسی کالا) می‌باشد.</h6>
          <p className='footer-copyright-programmer'>کد نویسی شده توسط :  <a href="https://t.me/m155680" target='_blank' rel="noopener noreferrer">Mohammad Gholami</a></p>
        </div>
      </div>
    </footer>
  )
}
