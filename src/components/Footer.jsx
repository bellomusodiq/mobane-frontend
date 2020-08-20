import React from 'react';
import './Footer.css';


const Footer = props => (
    <div className="Footer">
        <h2>Copyright Mobane2020. All rights reserved.</h2>
        <div>
            <a className="Facebook" href="https://web.facebook.com/mobanefoods/" style={{ color: '#5361E4' }}>
                <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/mobanefoods/" className="Instagram">
                <i className="fab fa-instagram" style={{ color: '#AA188C' }}></i>
            </a>
            <a href="https://twitter.com/MobaneFoods" className="Twitter">
                <i className="fab fa-twitter" style={{ color: '#058AF4' }}></i>
            </a>
        </div>
    </div>
)


export default Footer;