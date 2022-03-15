import React from 'react'
import './LiveAuction.css'

const LiveAuction = () => {
  return (
    <div className='container mt-5'>
      <div className='row d-flex'>
        <p className='heading1 text-start'>Live Auctions</p>
      </div>
      <div className='row auction-list-container'>
        <div className='col-sm-3'>
          <div className='auction-single-div'>

          </div>
        </div>
        <div className='col-sm-3'>
          <div className='auction-single-div'>

          </div>
        </div>
        <div className='col-sm-3'>
          <div className='auction-single-div'>

          </div>
        </div>
        <div className='col-sm-3'>
          <div className='auction-single-div'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default LiveAuction