import React from 'react'
import './Footer.css'



const Footer = () => {
  return (
    <div className='footer-wrapper container-fluid d-flex'>
      <div className='row container'>
        <div className='col-md-4 pl-0'>
          <img src={'/images/logo.png'} alt="logo" className='ft-logo' />
          <p className='ft-txt1 mt-2 mr-5'>Lorem ipsum dolor sit amet,consectetur adipisicing elit. Quis non, fugit totam vel laboriosam vitae.</p>
        </div>

        <div className='col-md-5'>
          <div className='row mt-5'>
            <div className='col-4'>
              <p className='ft-heading'>My Account</p>
              <a href='/' className='ft-link'><p className='ft-txt1-link'>Authors</p></a>
              <a href='/' className='ft-link'><p className='ft-txt1-link'>Collections</p></a>
              <a href='/' className='ft-link'><p className='ft-txt1-link'>Auther Profile</p></a>
              <a href='/' className='ft-link'><p className='ft-txt1-link'>Create Item</p></a>
            </div>

            <div className='col-4'>
              <p className='ft-heading'>Resources</p>
              <a href='/' className='ft-link'><p className='ft-txt1-link'>Help & Support</p></a>
              <a href='/' className='ft-link'><p className='ft-txt1-link'>Live Auctions</p></a>
              <a href='/' className='ft-link'><p className='ft-txt1-link'>Item Details</p></a>
              <a href='/' className='ft-link'><p className='ft-txt1-link'>Activity</p></a>
            </div>

            <div className='col-4'>
              <p className='ft-heading'>Company</p>
              <a href='/' className='ft-link'><p className='ft-txt1-link'>Explore</p></a>
              <a href='/' className='ft-link'><p className='ft-txt1-link'>Contact Us</p></a>
              <a href='/' className='ft-link'><p className='ft-txt1-link'>Our Blog</p></a>
              <a href='/' className='ft-link'><p className='ft-txt1-link'>FAQ</p></a>
            </div>
          </div>
        </div>

        <div className='col-md-3'>
          <div className='row mt-5'>
            <div className='col-12'>
              <p className='ft-heading'>Subscribe Us</p>
              <div className='d-flex'>
                <input type='text' className='ft-input' placeholder='info@yourgmail.com'></input>
                <button className='ft-input-btn'><img src="https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/24/ffffff/external-send-user-interface-kmg-design-detailed-outline-kmg-design.png" alt='icon' /></button>
              </div>
              <div className='d-flex justify-content-between mt-5'>
                <a href='/'>
                  <img src="https://img.icons8.com/ios-filled/32/ffffff/facebook--v1.png" alt='social-icon' className='ft-social-icon' />
                </a>
                <a href='/'>
                  <img src="https://img.icons8.com/ios-filled/32/ffffff/twitter-squared.png" alt='social-icon' className='ft-social-icon' />
                </a>
                <a href='/'>
                  <img src="https://img.icons8.com/ios-filled/32/ffffff/telegram-app.png" alt='social-icon' className='ft-social-icon' />
                </a>
                <a href='/'>
                  <img src="https://img.icons8.com/ios-filled/32/ffffff/youtube-play.png" alt='social-icon' className='ft-social-icon' />
                </a>
                <a href='/'>
                  <img src="https://img.icons8.com/ios-filled/32/ffffff/tiktok--v1.png" alt='social-icon' className='ft-social-icon' />
                </a>
                <a href='/'>
                  <img src="https://img.icons8.com/ios-filled/32/ffffff/discord--v1.png" alt='social-icon' className='ft-social-icon' />
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer