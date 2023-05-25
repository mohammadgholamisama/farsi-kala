import React, { useEffect, useState } from 'react'
import './AllProductsPage.css'
import { BiSortDown } from 'react-icons/bi'
import { AiFillStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../Redux/reducers/amazingProductsReducer'
import { Helmet } from 'react-helmet-async'

export default function AllProductsPage() {

    const dispatch = useDispatch()
    const allProducts = useSelector(state => state.products.amazingProducts)
    const [products, setProducts] = useState([])

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    useEffect(() => {
        allProducts && setProducts(allProducts)
    }, [allProducts])

    // Filter Product Handler
    const filterHandler = (event) => {
        let filterBtnsInfo = document.querySelectorAll('.products-filter-li')
        filterBtnsInfo.forEach(btn => {
            btn.classList.remove('active-filter')
        });
        event.target.classList.add('active-filter')

        let tagValue = event.target.getAttribute('value')
        if (tagValue === 'Final') {
            setProducts(allProducts)
        }
        if (tagValue === 'Expensive' && products) {
            let expensive = [...allProducts].sort((a, b) => a.price - b.price)
            expensive && setProducts(expensive.reverse())
        }
        if (tagValue === 'Inexpensive') {
            let inexpensive = [...allProducts].sort((a, b) => a.price - b.price)
            inexpensive && setProducts(inexpensive)
        }
    }
    return (
        <>
            <Helmet>
                <title>تمام محصولات</title>
                <meta name="description" content="فارسی کالا" />
            </Helmet>
            <section className='all-products-page pt-5'>
                <div className="container-xxl">

                    <div className="products-filter-box">
                        <BiSortDown className='products-filter-icon' />
                        <span className='products-filter-icon-title'>دسته بندی کالا ها:</span>
                        <ul className='products-filter-ul d-flex me-1'>
                            <li className='products-filter-li ms-1 ms-md-3 active-filter' value='Final' onClick={(event) => filterHandler(event)}>آخرین محصولات</li>
                            <li className='products-filter-li ms-1 ms-md-3' value='Expensive' onClick={(event) => filterHandler(event)}>گران ترین</li>
                            <li className='products-filter-li ms-1 ms-md-3' value='Inexpensive' onClick={(event) => filterHandler(event)}>ارزان ترین</li>
                        </ul>
                    </div>

                    <div className="all-products row">
                        {products && products.map(product => (
                            <Link to={`/product/${product.id}`} className="product-page-box col-10 col-sm-6 col-md-4 col-lg-3" key={product.id}>
                                <div className="product-page-box-img text-center">
                                    <img src={product.img} alt="product-img" />
                                </div>
                                <div className="product-page-box-info p-3">
                                    <h3 className='product-page-box-info-title'>{
                                        product.title.length > 30 ? product.title.slice(0, 30) + ' ...' : product.title
                                    }</h3>
                                    <div className="d-flex justify-content-between mt-5">
                                        <p className='product-page-box-info-star'>
                                            {product.starRate}<AiFillStar className='product-page-box-info-star-icon' />
                                        </p>
                                        <p className='product-page-box-info-price'>{product.price.toLocaleString()}</p>
                                    </div>
                                    {product.oldPrice && (
                                        <p className='product-page-box-info-oldprice'>{product.oldPrice.toLocaleString()}</p>
                                    )}
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}
