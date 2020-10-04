import React, { Component } from 'react'  
import {Carousel} from 'react-bootstrap'; 
import Pool from '../assets/images/pool.png'
import Boxing from '../assets/images/boxing.png'
import Cycle from '../assets/images/cycle.png'
import Basketball from '../assets/images/basketball.png'
import Weights from '../assets/images/weights.png'

class FacilityCarousel extends Component {  
    render() {  
        return (  
            <div className="container">
                <div className="facilitySection">
                    <h1 className="smHeader text-center">FACILITY FEATURES</h1>
                    <Carousel className='col'>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={Pool}
                            alt="First slide"
                            />
                            <Carousel.Caption className="carouselCaption">
                                <h3>Olympic Size Swimming Pools</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={Cycle}
                            alt="Third slide"
                            />

                        <Carousel.Caption className="carouselCaption">
                            <h3>Cycle Studio</h3>
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={Weights}
                            alt="Third slide"
                            />

                        <Carousel.Caption className="carouselCaption">
                            <h3>Premium Strength and Cardio Equipment</h3>
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={Basketball}
                            alt="Third slide"
                            />

                        <Carousel.Caption className="carouselCaption">
                            <h3>Full Indoor Basketball Court</h3>
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={Boxing}
                            alt="Third slide"
                            />

                        <Carousel.Caption className="carouselCaption">
                            <h3>Boxing Studio</h3>
                        </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel> 

                </div>
            </div> 
        );
    }  
}  


export default FacilityCarousel;