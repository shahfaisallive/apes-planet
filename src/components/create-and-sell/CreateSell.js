import React from 'react'
import { Link } from 'react-router-dom'
import './CreateSell.css'


const CreateSell = () => {
    return (
        <div className='container pb-5 mt-4 pl-0 pr-0'>
            <div className='row d-flex'>
                <div className='col-6'>
                    <p className='heading3 text-start'>Create And Sell Your NFTs</p>
                </div>
                <div className='col-6 d-flex justify-content-end'>
                    <Link to={'/explore-auctions'}>
                        <p className='heading2 text-start'>Explore More</p>
                    </Link>
                </div>
            </div>

            <div className='row d-flex justify-content-between mt-3'>
                <div className='col-3'>
                    <img src={'/images/shield.png'} alt='shield-img' className='shield-img' />
                    <p className='cs-txt1 mt-2'>Set Up Your Wallet</p>
                    <p className='cs-txt2'>Wallet that is functional for NFT purchasing. You may have a Coinbase account at this point, but very few are actually set up to buy an NFT.</p>
                </div>
                <div className='col-3'>
                    <img src={'/images/shield.png'} alt='shield-img' className='shield-img' />
                    <p className='cs-txt1 mt-2'>Create Your Collection</p>
                    <p className='cs-txt2'>Setting up your NFT collection and creating NFTs on NFTs is easy! This guide explains how to set up your first collection</p>
                </div>
                <div className='col-3'>
                    <img src={'/images/shield.png'} alt='shield-img' className='shield-img' />
                    <p className='cs-txt1 mt-2'>Set Up Your Wallet</p>
                    <p className='cs-txt2'>Sed ut perspiciatis un de omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.</p>
                </div>
                <div className='col-3'>
                    <img src={'/images/shield.png'} alt='shield-img' className='shield-img' />
                    <p className='cs-txt1 mt-2'>Set Up Your Wallet</p>
                    <p className='cs-txt2'>Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs!</p>
                </div>
            </div>
        </div>
    )
}

export default CreateSell