import React from 'react';
import './Socials.css';


const Socials = props => (
    <div className="Socials">
        <a className="Facebook" style={{color: '#5361E4'}}>
            <i className="fab fa-facebook-f"></i>
        </a>
        <a className="Instagram">
            <i className="fab fa-instagram" style={{color: '#AA188C'}}></i>
        </a>
        <a className="Twitter">
            <i className="fab fa-twitter" style={{color: '#058AF4'}}></i>
        </a>
    </div>
)

export default Socials;