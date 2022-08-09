import React, { useState } from "react";
import "./Navbar.css";
import logo from '../../images/ammachi_logo2.png';
import { FaBars, FaTimes } from 'react-icons/fa'

const SellerNavbar = () => {
  const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <p className='logo'>
                    <img src={logo} alt='logo' />
                </p>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu3 active" : "nav-menu3"}>
                
                    <li className='nav-item3'>
                        <a href='#menu' onClick={closeMenu}>Food Menu</a>
                    </li>
                    <li className='nav-item3'>
                        <a href='#manage' onClick={closeMenu}>Orders</a>
                    </li>
                    <li className='nav-item3'>
                        <a href='/sellerlogin' onClick={closeMenu}>Logout</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default SellerNavbar;
