import React from 'react'
import './Breadcrumb.css'
import { Link } from 'react-router-dom'

export default function Breadcrumb({ group, title }) {
    return (
        <div className='breadcrumb-box'>
            <Link className='breadcrumb-link' to="/">خانه</Link>
            <Link className='breadcrumb-link' to="/all-products">{group}</Link>
            <span className='breadcrumb-text'>{title}</span>
        </div>
    )
}
