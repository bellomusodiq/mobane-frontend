import React from 'react';
import './Carousel.css';
import bannerImage from '../assets/images/3446658@2x.png';


const Carousel = props => {

    return (
        <div style={{backgroundImage: bannerImage}} className="Carousel">
            <h1>Mobane Foods is your one stop online shop for all foods West African.</h1>
            <br/>
            <br/>
            <p>We specialize in the distribution and exportation of West African food, trust us and we’d bring Africa right to you.</p>
            <a className="btn-" href="#ContactUs">Contact Us</a>
        </div>
    )
}


export default Carousel;