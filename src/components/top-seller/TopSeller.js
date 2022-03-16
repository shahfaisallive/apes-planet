import React from 'react'
import './TopSeller.css'

import SellerItem from './SellerItem'

const TopSeller = () => {
    return (
        <div className='container pb-5'>
            <div className='row d-flex'>
                <p className='heading1 text-start'>Top Seller</p>
            </div>

            <div className='d-flex seller-items-container'>
                <SellerItem />
                <SellerItem />
                <SellerItem />
                <SellerItem />
                <SellerItem />
                <SellerItem />
                <SellerItem />
                <SellerItem />
                <SellerItem />

            </div>
        </div>
    )
}

export default TopSeller