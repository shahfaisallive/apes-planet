import React from 'react'
import './TopSeller.css'

const SellerItem = ({image, name}) => {
  return (
    <div className='seller-item-div'>
        <img className='seller-item-img' src={image} alt="seller-item" />
        <p className='seller-item-txt1 text-center mt-3'>{name}</p>
        <p className='seller-item-txt2 text-center'>21.32 ETH</p>
    </div>
  )
}

export default SellerItem