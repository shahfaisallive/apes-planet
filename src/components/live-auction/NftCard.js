import React from 'react'

const NftCard = ({image}) => {
    return (
        <div className='col-sm-3'>
            <div className='row nft-single-div'>
                <div className='col-12'>
                    <div className='row'>
                        <img className='nft-ape-img' src={image} alt='auction-ape' />
                    </div>
                    <div className='row d-flex mt-2'>
                        <div className='col-9 pl-1'>
                            <p className='nft-card-txt1'>Ape Warrior #2371</p>
                        </div>
                        <div className='col-3'>
                            <button className='nft-card-btn1'>BSC</button>
                        </div>
                    </div>
                    <div className='row d-flex'>
                        <div className='col-2 pl-1'>
                            <img src={'/images/man.png'} alt='man' className='nft-card-owner-img' />
                        </div>
                        <div className='col-5 nft-info-box pt-1 pl-2'>
                            <p className='nft-card-txt2'>Creator</p>
                            <p className='nft-card-txt3'>SalvadorDali</p>
                        </div>
                        <div className='col-5 nft-info-box justify-content-end pt-1 pl-1'>
                            <p className='nft-card-txt2 text-right'>Current Bid</p>
                            <p className='nft-card-txt3 text-right'>4.89 ETH</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NftCard