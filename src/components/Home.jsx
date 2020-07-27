import React, { useState, useEffect } from 'react';
import './Home.css';
import Product from './Product';
import Banner from './Banner';
import Slider from './Slider';
import Contact from './Contact';
import Socials from './Socials';
import Loading from './Loading';
import axios from 'axios';
import { BASE_URL } from '../CONFIG.js';


const Home = props => {

    const [products, changeProducts] = useState([]);
    const [loading, changeLoading] = useState(false);
    const [error, changeError] = useState(false);
    const [productUrl, changeProductUrl] = useState(null);

    const fetchProducts = (aUrl = null) => {
        changeLoading(true);
        changeError(false);
        let url = BASE_URL + '/api/products/';
        if (aUrl) {
            url = aUrl;
        }
        axios.get(url)
            .then(res => {
                changeLoading(false);
                changeError(false);
                let newProducts = products;
                for (let product of res.data.results) {
                    newProducts.push(product);
                }
                changeProducts(res.data.results);
                changeProductUrl(res.data.next);
            })
            .catch(err => {
                changeLoading(false);
                changeError(true);
            })
    }

    useEffect(() => fetchProducts(null), [])

    let productList;

    if (loading) {
        productList = <Loading />
    }

    console.log(products)
    if (products.length > 0) {
        productList = products.map(product => (
            <Product key={product.id} title={product.title} image={product.image}
            aka={product.aka} />
        ))
    }

    return (
        <div className="Home">
            <p id="OurProducts">
                Our Products
            </p>
            <div className="Products" style={{ marginBottom: 100 }} >
                {productList}
            </div>
            {productUrl ? <div className="LoadMoreContainer">
                <button onClick={() => {
                    if (productUrl) {
                        fetchProducts(productUrl);
                    }
                }}
                    className="LoadMore">Load More</button>
            </div> : null}
            <Banner />
            <Slider />
            <Contact />
            <Socials />
        </div>
    )
}



export default Home;