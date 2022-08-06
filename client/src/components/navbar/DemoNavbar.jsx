import logo from '../../images/ammachi_logo2.png';
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {

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
                <ul className={click ? "nav-menu2 active" : "nav-menu2"}>
                    <li className='nav-item2'>
                        <a href='#home' onClick={closeMenu}>Home</a>
                    </li>
                    <li className='nav-item2'>
                        <a href='#menu' onClick={closeMenu}>Menu</a>
                    </li>
                    <li className='nav-item2'>
                        <a href='#about' onClick={closeMenu}>About</a>
                    </li>
                    <li className='nav-item2'>
                        <a href='#contact' onClick={closeMenu}>Contact</a>
                    </li>
                    <li className='nav-item2'>
                        <a href='login' onClick={closeMenu}>Login</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
