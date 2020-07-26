import React from 'react';
import './Product.css';
import Image from '../assets/images/food.jpeg';


const Product = props => (
    <div className="Product">
        <img src={Image} alt="img" />
        <div>
            <p>Food Name</p>
            <p>(also known name)</p>
        </div>
    </div>
)

export default Product;