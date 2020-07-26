import React from 'react';
import './Header.css';



const Header = props => (
    <div className="Header">
        <div className="Logo">Mobane foods</div>
        <div className="NavItems">
            <a href="#Home">Home</a>
            <a href="#OurProducts">Our Products</a>
            <a href="#ContactUs">Contact Us</a>
        </div>
    </div>
)


export default Header;