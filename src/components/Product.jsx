import React from 'react';
import './Product.css';
import Image from '../assets/images/food.jpeg';


const Product = props => (
    <div className="Product">
        <img src={props.image} alt="img" />
        <div>
            <p>{props.title}</p>
            <p>({props.aka})</p>
        </div>
    </div>
)

export default Product;