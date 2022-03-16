import React from 'react'
import { Link } from 'react-router-dom'
import './TodaysPicks.css'

import NftCard from './NftCard'

const TodaysPicks = () => {
    return (
        <div className='container pb-5 pl-0'>
            <div className='row d-flex'>
                <div className='col-6'>
                    <p className='heading1 text-start'>Today's Picks</p>
                </div>
                <div className='col-6 d-flex justify-content-end'>
                    <Link to={'/explore-auctions'}>
                        <p className='heading2 text-start'>Explore More</p>
                    </Link>
                </div>
            </div>

            <div className='row d-flex'>
                <NftCard image={'/images/ape4.png'} />
                <NftCard image={'/images/ape5.png'} />
                <NftCard image={'/images/ape6.png'} />
                <NftCard image={'/images/ape7.png'} />
                <NftCard image={'/images/ape8.png'} />
                <NftCard image={'/images/ape2.png'} />
                <NftCard image={'/images/ape1.png'} />
                <NftCard image={'/images/ape3.png'} />
            </div>
            <div className='row d-flex justify-content-center mt-5'>
                <button className='loadmore-btn'>Load More</button>
            </div>
        </div>
    )
}

export default TodaysPicks