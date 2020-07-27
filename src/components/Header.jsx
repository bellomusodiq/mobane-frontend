import React from 'react';
import './Header.css';
import Logo from '../assets/images/mobanee.png';



const Header = props => (
    <div className="Header">
        <div className="Logo">
            <img src={Logo} height='70px' alt="logo" srcset=""/>
        </div>
        <div className="NavItems">
            <a href="#Home">Home</a>
            <a href="#OurProducts">Our Products</a>
            <a href="#ContactUs">Contact Us</a>
        </div>
    </div>
)


export default Header;