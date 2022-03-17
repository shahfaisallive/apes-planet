import React from 'react'
import { Link } from 'react-router-dom'
import './PopCollections.css'

const PopCollections = () => {
    return (
        <div className='container pb-5 mt-3 pl-0 pr-0'>
            <div className='row d-flex'>
                <div className='col-6'>
                    <p className='heading3 text-start'>Popular Collections</p>
                </div>
                <div className='col-6 d-flex justify-content-end'>
                    <Link to={'/explore-auctions'}>
                        <p className='heading2 text-start'>Explore More</p>
                    </Link>
                </div>
            </div>

            <div className='row d-flex justify-content-between mt-3'>
                <div className='col-3'>
                    <img src={'/images/collection1.png'} alt='collection-img' className='collection-img' /> 
                </div>
                <div className='col-3'>
                    <img src={'/images/collection2.png'} alt='collection-img' className='collection-img' /> 
                </div>
                <div className='col-3'>
                    <img src={'/images/collection3.png'} alt='collection-img' className='collection-img' /> 
                </div>
                <div className='col-3'>
                    <img src={'/images/collection4.png'} alt='collection-img' className='collection-img' /> 
                </div>
            </div>
        </div>
    )
}

export default PopCollections