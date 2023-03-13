import React from 'react'
import '../stylesheets/carousel.css'
import carousel1 from '../assets/Carousel-images/carousel1.jpg'
import carousel2 from '../assets/Carousel-images/carousel2.jpg'
import carousel3 from '../assets/Carousel-images/carousel3.jpg'

const Carousel = () => {
    return (
        <div className='carousel'>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={carousel1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={carousel2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={carousel3} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <i className="fa-solid fa-caret-left"></i>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <i className="fa-solid fa-caret-right"></i>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <button type="button" className="btn btn-danger shop-btn">Shop Now </button>
        </div>
    )
}

export default Carousel