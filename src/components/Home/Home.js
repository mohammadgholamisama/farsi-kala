import React from 'react';
import { Helmet } from 'react-helmet-async';
import SliderHome from './SliderHome/SliderHome';
import SiteList from './SiteList/SiteList';
import AmazingOffer from './AmazingOffer/AmazingOffer';
import ProductsGroup from './ProductsGroup/ProductsGroup';

export default function Home() {
    return (
        <>
            <Helmet>
                <title>فارسی کالا</title>
                <meta name="description" content="فارسی کالا" />
            </Helmet>
            <SliderHome />
            <SiteList />
            <AmazingOffer />
            <ProductsGroup />
        </>
    );
}
