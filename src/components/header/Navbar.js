import React from 'react'
import { NavLink } from 'react-bootstrap'
import './Navbar.css'
import { ReactComponent as SearchIcon } from '../../media/nav-search.svg'
import { ReactComponent as WalletIcon } from '../../media/wallet.svg'


const Navbar = () => {
    return (
        <nav className="container-fluid d-flex justify-content-center navbar navbar-expand-lg navbar-light fixed-top">
            <div className='container '>
                <NavLink className="navbar-brand" id="brand-title" to="/"><img alt="logo" src={"/images/logo.png"} className='logo-img'></img></NavLink>
                <button className="navbar-toggler toggle-btn" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mt-3">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="#"><p className='text_one '>Home</p></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " to="#"><p className='text_one' >Explore</p></NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="#"><p className='text_one ' >Activity</p></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " to="#"><p className='text_one' >Community</p></NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="#"><p className='text_one '>Page</p></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " to="#"><p className='text_one'>Contact</p></NavLink>
                        </li>
                    </ul>
                    <ul className='navbar-nav nav-connect-div'>
                        <li className='nav-item'>
                            <SearchIcon className='search-icon' />
                        </li>
                        <li className='nav-item'>
                            <button className='wallet-connect-btn'>
                                {/* <WalletIcon /> */}
                                <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/ffffff/external-wallet-interface-kiranshastry-solid-kiranshastry-1.png" alt='wallet-icon' className='wallet-icon' />
                                Wallet connect
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
