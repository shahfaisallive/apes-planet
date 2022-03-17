import React from 'react'
import './TopSeller.css'
import Carousel from 'react-elastic-carousel'

import SellerItem from './SellerItem'

const TopSeller = () => {
    return (
        <div className='container pb-5'>
            <div className='row d-flex'>
                <p className='heading1 text-start'>Top Seller</p>
            </div>

            <div className='row pl-0'>
                <Carousel itemsToShow={9} showArrows={false}>
                    <SellerItem image={'/images/seller-item1.png'} name={'Weapon 01'} />
                    <SellerItem image={'/images/seller-item2.png'} name={'Weapon 02'} />
                    <SellerItem image={'/images/seller-item3.png'} name={'Weapon 03'} />
                    <SellerItem image={'/images/seller-item1.png'} name={'Weapon 04'} />
                    <SellerItem image={'/images/seller-item3.png'} name={'Weapon 05'} />
                    <SellerItem image={'/images/seller-item2.png'} name={'Weapon 06'} />
                    <SellerItem image={'/images/seller-item1.png'} name={'Weapon 03'} />
                    <SellerItem image={'/images/seller-item2.png'} name={'Weapon 03'} />
                    <SellerItem image={'/images/seller-item3.png'} name={'Weapon 02'} />
                    <SellerItem image={'/images/seller-item2.png'} name={'Weapon 03'} />
                    <SellerItem image={'/images/seller-item1.png'} name={'Weapon 05'} />
                    <SellerItem image={'/images/seller-item2.png'} name={'Weapon 05'} />
                    <SellerItem image={'/images/seller-item3.png'} name={'Weapon 06'} />
                    <SellerItem image={'/images/seller-item2.png'} name={'Weapon 07'} />
                    <SellerItem image={'/images/seller-item1.png'} name={'Weapon 08'} />
                    <SellerItem image={'/images/seller-item2.png'} name={'Weapon 03'} />
                    <SellerItem image={'/images/seller-item3.png'} name={'Weapon 02'} />
                    <SellerItem image={'/images/seller-item2.png'} name={'Weapon 01'} />
                </Carousel>
            </div>
        </div>
    )
}

export default TopSeller