import React from 'react'
import './Header.css'
import { Carousel } from 'react-responsive-carousel'

const Header = () => {
    return (
        <div className='container'>
            {/* <Carousel showArrows={true}>
                <div>
                    <img src={"/images/demopic.jpg"} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={"/images/demopic.jpg"} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={"/images/demopic.jpg"} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel> */}
            <div className='row d-flex'>
                <div className='col-6 pt-5 pl-3 header-left'>
                    <p className='header-txt1 mt-5'>Apes Planet</p>
                    <p className='header-txt4'>is an entire unique</p>
                    <span className='d-flex'>
                        <p className='header-txt2'>NFT Fighting Game</p>
                        <p className='header-txt4 mt-2 ml-2'>based in</p>
                    </span>
                    <p className='header-txt3'>Solana Blockchain</p>

                    <button className='header-btn'>
                        <img src="https://img.icons8.com/material-rounded/24/ffffff/rocket.png" alt='wallet-icon' className='wallet-icon' />
                        Explore
                    </button>
                </div>
                <div className='col-6 header-right'>
                    <img className='header-demo-img' src={'/images/header-demo.png'} alt='headerpic' />
                </div>
            </div>
        </div>
    )
}

export default Header