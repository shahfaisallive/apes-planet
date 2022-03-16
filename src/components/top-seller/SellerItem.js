import React from 'react'
import './TopSeller.css'

const SellerItem = () => {
  return (
    <div className='seller-item-div'>
        <img className='seller-item-img' src={'/images/seller-item.png'} alt="seller-item" />
        <p className='seller-item-txt1 text-center mt-3'>Weapon 01</p>
        <p className='seller-item-txt2 text-center'>21.32 ETH</p>
    </div>
  )
}

export default SellerItem