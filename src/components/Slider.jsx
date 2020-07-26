import React, { Fragment } from 'react';
import './Slider.css';
import { useRef } from 'react';
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Image from '../assets/images/adult-african-blur-813940@2x.png';



const Slider = props => {

    const sliderRef = useRef(null);
    const [counter, changeCounter] = useState(0);

    const slideImage = movement => {
        if (movement === 'next') {
            let childrenWidth = sliderRef.current.children[0].clientWidth;
            console.log(childrenWidth)
            sliderRef.current.style.scro = `translateX(-1000px)`;
            // changeCounter(counter + 1);
        }
    }
    return (
        <div className="">
            <h1 className="What" style={{ textAlign: 'center', marginTop: 100 }}>What Our Customer Say</h1>
            <Carousel>
                <Carousel.Item>
                    <div className="SliderItem">
                        <img src={Image} alt="" className="SliderImage"/>
                        <h3 className="Name">Milda Ogunsanya</h3>
                        <p><i>London</i></p>
                        <p className="Content">
                        These guys handle your business like it is theirs. They go over and beyond to make sure you are satisfied. no cutting corners and no false services!
                        </p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="SliderItem">
                        <img src={Image} alt="" className="SliderImage"/>
                        <h3 className="Name">Milda Ogunsanya</h3>
                        <p><i>London</i></p>
                        <p className="Content">
                        These guys handle your business like it is theirs. They go over and beyond to make sure you are satisfied. no cutting corners and no false services!
                        </p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="SliderItem">
                        <img src={Image} alt="" className="SliderImage"/>
                        <h3 className="Name">Milda Ogunsanya</h3>
                        <p><i>London</i></p>
                        <p className="Content">
                        These guys handle your business like it is theirs. They go over and beyond to make sure you are satisfied. no cutting corners and no false services!
                        </p>
                    </div>
                </Carousel.Item>
            </Carousel >
        </div>
    )
}


export default Slider;
