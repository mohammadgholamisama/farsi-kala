import React from 'react'
import './ProductInfo.css'
import { BiPlusMedical } from 'react-icons/bi'

export default function ProductInfo({ product }) {
    return (
        <section className='product-info'>
            <div className="row">
                <div className="col-12 col-md-8">
                    <h5 className="product-feature-title">ویژگی های محصول :</h5>
                    <table className='product-feature-table'>
                        <tbody>
                            <tr>
                                <th>{product && product.selector1title}</th>
                                <td>{product && product.options1}</td>
                            </tr>
                            {product.selector2title && (
                                <tr>
                                    <th>{product && product.selector2title}</th>
                                    <td>{product && product.options2}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    {product.explanation && (
                        <div className="prodct-info-box">
                            <h5 className="product-feature-title mt-4">توضیحات :</h5>
                            <p className='product-info-text'>
                                {product && product.explanation}
                            </p>
                        </div>
                    )}

                </div>
                <div className="col-12 col-md-4">
                    <div className="advantages-site">
                        <h4 className='advantages-site-title'>مزایای خرید از فارسی کالا</h4>
                        <ul>
                            <li> <BiPlusMedical className='advantages-site-icon' /> پشتیبانی کمتر از 24 ساعت</li>
                            <li> <BiPlusMedical className='advantages-site-icon' /> امکان تحویل اکسپرس</li>
                            <li> <BiPlusMedical className='advantages-site-icon' /> ۷ روز هفته ۲۴ ساعته</li>
                            <li> <BiPlusMedical className='advantages-site-icon' /> تضمین کیفیت کالا</li>
                        </ul>
                    </div>
                    <div className="add-to-cart-box d-flex mt-2">
                        <button className='product-page-header-buy-add-btn p-3 w-100'>اطلاعات بیشتر</button>
                    </div>
                </div>
            </div>
        </section>
    )
}