import React from 'react'
import { Link } from 'react-router-dom'
import './LiveAuction.css'

import NftCard from './NftCard'

const LiveAuction = () => {
  return (
    <div className='container mt-5 pb-5'>
      <div className='row d-flex'>
        <div className='col-6 pl-0'>
          <p className='heading1 text-start'>Live Auctions</p>
        </div>
        <div className='col-6 d-flex justify-content-end'>
          <Link to={'/explore-auctions'}>
            <p className='heading2 text-start'>Explore More</p>
          </Link>
        </div>
      </div>
      <div className='row auction-list-container'>
        <NftCard image={'/images/ape1.png'} />
        <NftCard image={'/images/ape2.png'}/>
        <NftCard image={'/images/ape3.png'}/>
        <NftCard image={'/images/ape4.png'}/>

      </div>
    </div>
  )
}

export default LiveAuction