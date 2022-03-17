import React from 'react'

// Importing landing page components
import Header from '../header/Header'
import LiveAuction from '../live-auction/LiveAuction'
import TopSeller from '../top-seller/TopSeller'
import TodaysPicks from '../todays-picks/TodaysPicks'
import PopCollections from '../popular-collections/PopCollections'
import CreateSell from '../create-and-sell/CreateSell'

const LandingPage = () => {
  return (
    <>
      {/* Background Items */}
      <img src='/images/bg-item1.png' className='bg-item1' alt='bg-item' />
      <img src='/images/bg-item2.png' className='bg-item2' alt='bg-item' />

      {/* Landing Page Components */}
      <Header />
      <LiveAuction />
      <TopSeller />
      <TodaysPicks />
      <PopCollections />
      <CreateSell />
    </>
  )
}

export default LandingPage