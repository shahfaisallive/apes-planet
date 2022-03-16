import React from 'react'

// Importing landing page components
import Header from '../header/Header'
import LiveAuction from '../live-auction/LiveAuction'
import TopSeller from '../top-seller/TopSeller'
import TodaysPicks from '../todays-picks/TodaysPicks'

const LandingPage = () => {
  return (
    <>
      <Header />
      <LiveAuction />
      <TopSeller />
      <TodaysPicks />
    </>
  )
}

export default LandingPage