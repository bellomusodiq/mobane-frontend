import React from 'react';
import './Carousel.css';
import bannerImage from '../assets/images/3446658@2x.png';


const Carousel = props => {

    return (
        <div style={{backgroundImage: bannerImage}} className="Carousel">
            <h1>Exporting Africa to you one</h1>
            <h1>Ingredient at a time</h1>
            <br/>
            <br/>
            <p>We handle your business like it is ours. We go over and beyond to make sure</p>
            <p>you are satified. No cutting corners and no false services!</p>
            <a className="btn-" href="#ContactUs">Contact Us</a>
        </div>
    )
}


export default Carousel;