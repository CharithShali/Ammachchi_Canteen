import React, { useState } from "react";
import "./Navbar.css";
import logo from 'E:/Gobee 036/6th semi notes/Software Engineerong/Project files/ammachi/src/images/ammachi_logo2.png';
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
                <ul className={click ? "nav-menu1 active" : "nav-menu1"}>
                    <h1 className="nav-item1" style={{ fontWeight: 'bold', fontSize: '20px' }}>
                      Hello Leela
                    </h1>
                    <li className='nav-item1'>
                        <a href='#order' onClick={closeMenu}>Check Order</a>
                    </li>
                    <li className='nav-item1'>
                        <a href='#logout' onClick={closeMenu}>Logout</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default SellerNavbar;
