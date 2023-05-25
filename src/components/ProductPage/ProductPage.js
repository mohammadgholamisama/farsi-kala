import React, { useEffect, useState } from 'react'
import './ProductPage.css'
import { Link, useParams } from 'react-router-dom'
// Components
import Breadcrumb from './Breadcrumb/Breadcrumb'
import ProductPageGallery from './ProductPageGallery/ProductPageGallery'
import ProductInfo from './ProductInfo/ProductInfo'
import Comments from './Comments/Comments'
import Toast from '../Toast/Toast'
// Librarys
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async'
// Icons
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
// Redux
import { fetchProducts } from '../../Redux/reducers/amazingProductsReducer'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../../Redux/reducers/userBasketReducer'

export default function ProductPage() {

    const params = useParams()
    const dispatch = useDispatch()
    const allAmazingProducts = useSelector(state => state.products.amazingProducts)

    // Number of products
    const [countProduct, setCountProduct] = useState(1)

    // Product Datas
    const [product, setProduct] = useState(null)
    const [productImages, setProductImages] = useState([])
    const [productSpecifications, setProductSpecifications] = useState([])
    const [productOptions1, setProductOptions1] = useState([])
    const [productOptions2, setProductOptions2] = useState([])

    // Select Tag Handel
    const [selectValue1, setSelectValue1] = useState("یک گزینه را انتخاب کنید")
    const [selectValue2, setSelectValue2] = useState("یک گزینه را انتخاب کنید")

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    useEffect(() => {
        let mainProduct = allAmazingProducts.filter(product => product.id === +params.productID)
        setProduct(mainProduct[0])

    }, [allAmazingProducts, params.productID])

    useEffect(() => {
        if (product) {
            let images = product.otherImage.split(',')
            let specifications = product.productSpec.split(',')

            if (product.options1) {
                let options1 = product.options1.split(',')
                setProductOptions1(options1)
            }
            if (product.options2) {
                let options2 = product.options2.split(',')
                setProductOptions2(options2)
            }
            setProductImages(images)
            setProductSpecifications(specifications)
        }
    }, [product])

    // User Product Count Handel
    const plustProductCount = () => countProduct < 5 ? setCountProduct(prev => prev + 1) : setCountProduct(5)
    const minusProductCount = () => countProduct >= 2 ? setCountProduct(prev => prev - 1) : setCountProduct(1)

    function addProductToBasket() {
        dispatch(addProduct({
            id: product.id,
            title: product.title,
            img: product.img,
            price: product.price,
            count: countProduct,
            select1: product.selector1title,
            select2: product.selector2title,
            option1: selectValue1,
            option2: selectValue2,
        }))

        // Toast Handler
        toast.success('به سبد خرید اضافه شد', {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 900,
            pauseOnHover: false,
            theme: "dark",
        });
    }
    return (
        <>
            {product && (
                <>
                    <Helmet>
                        <link rel="icon" href="fav.png" />
                        <meta name="description" content={`فارسی کالا , ${product.title}`} />
                        <title>{product.title}</title>
                    </Helmet>
                    <section className='product-page'>
                        <div className="container-xl">
                            <Breadcrumb group={product.grouping} title={product.title} />
                            <div className="product-page-header">
                                <div className="row">

                                    <div className="product-page-header-gallery col-md-4">
                                        <ProductPageGallery images={productImages} />
                                    </div>

                                    <div className="product-page-header-info col-md-4">
                                        <h3 className="product-page-header-info-title">{product.title}</h3>
                                        <div className="product-page-header-info-tabel">
                                            <div>
                                                <p>شناسه : <span>N/A</span> </p>
                                            </div>
                                            <div>
                                                <p>دسته : <Link to="/">{product.grouping}</Link> </p>
                                            </div>
                                        </div>
                                        <ul className="product-page-header-info-ul pe-4">
                                            {productSpecifications && productSpecifications.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="product-page-header-buy col-lg-4 mb-4">
                                        <div className="product-page-header-buy-box">
                                            <h6 className="product-page-header-buy-price">{product.price.toLocaleString()}</h6>
                                            {product.selector1title && (
                                                <div className="product-page-header-buy-select">
                                                    <label className='product-page-header-buy-label' htmlFor="label1">{product.selector1title}</label>
                                                    <select id="label1" onChange={(e) => setSelectValue1(e.target.value)}>
                                                        <option value="یک گزینه را انتخاب کنید">یک گزینه را انتخاب کنید</option>
                                                        {productOptions1 && productOptions1.map((option, index) => (
                                                            <option value={option} key={index}>{option}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            )

                                            }
                                            {product.selector2title && (
                                                <div className="product-page-header-buy-select">
                                                    <label className='product-page-header-buy-label' htmlFor="label2">{product.selector2title}</label>
                                                    <select id="label2" onChange={(e) => setSelectValue2(e.target.value)}>
                                                        <option value="یک گزینه را انتخاب کنید">یک گزینه را انتخاب کنید</option>
                                                        {productOptions2 && productOptions2.map((option, index) => (
                                                            <option value={option} key={index}>{option}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            )
                                            }
                                            <div className="product-page-header-buying">
                                                <div className="product-page-header-buying-handler">
                                                    <button onClick={plustProductCount}><AiOutlinePlus /></button>
                                                    <input type="number" name="quantity" min='1' max='10' value={countProduct} onChange={() => countProduct} />
                                                    <button onClick={minusProductCount}><AiOutlineMinus /></button>
                                                </div>
                                                <button
                                                    className='product-page-header-buy-add-btn'
                                                    onClick={addProductToBasket}
                                                    disabled={
                                                        (typeof product.selector1title !== 'undefined' && selectValue1 === 'یک گزینه را انتخاب کنید') ||
                                                        (typeof product.selector2title !== 'undefined' && selectValue2 === 'یک گزینه را انتخاب کنید')
                                                    }
                                                >
                                                    افزودن به سبد خرید
                                                </button>
                                            </div>
                                            {selectValue1 === 'یک گزینه را انتخاب کنید' || selectValue2 === 'یک گزینه را انتخاب کنید' ? (
                                                <p className='is-true-add-btn mb-3 text-danger'>
                                                    ابتدا ( {product.selector1title}  {product.selector2title && ' , ' + product.selector2title} ) را انتخاب نمایید.
                                                </p>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-attributes d-flex justify-content-evenly row">
                                <div className="product-attribute-box d-flex align-items-center flex-column flex-lg-row col-10 col-lg-5">
                                    <img src="/images/product-page/1.png" alt="product-attribute-img" />
                                    <div className="product-attribute-box-2 text-center text-lg-end py-2 py-lg-0">
                                        <h6 className='product-attribute-title'>تحویل رایگان</h6>
                                        <p className='product-attribute-text'>با رعایت پروتکل های بهداشتی</p>
                                    </div>
                                </div>
                                <div className="product-attribute-box  d-flex align-items-center col-10 col-lg-6 my-3 my-lg-0">
                                    <div className="product-attribute-box-2">
                                        <h6 className='product-attribute-title'>جشنواره کامنت میلیونی!</h6>
                                        <p className='product-attribute-text'>از ۲۱ تا ۲۹ هر ماه با ثبت نظر در صفحات کالاهای مختلف برنده یکی از ۱۰ جایزه ۵ میلیون تومانی فارسی کالا شو.</p>
                                    </div>
                                </div>
                            </div>

                            <ProductInfo product={product} productExplanation={product.explanation} />

                            <Comments productTitle={product.title} />
                        </div>
                        <Toast></Toast>
                    </section>
                </>
            )}

        </>
    )
}
