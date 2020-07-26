import React from 'react';
import './Home.css';
import Product from './Product';
import Banner from './Banner';
import Slider from './Slider';
import Contact from './Contact';
import Socials from './Socials';
import Footer from './Footer';


const Home = props => {

    return (
        <div className="Home">
            <p id="OurProducts">
                Our Products
            </p>
            <div className="Products">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
            <div className="LoadMoreContainer">
                <button className="LoadMore">Load More</button>
            </div>
            <Banner />
            <Slider />
            <Contact />
            <Socials />
        </div>
    )
}



export default Home;