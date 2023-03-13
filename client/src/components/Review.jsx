import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import "owl.carousel/dist/assets/owl.carousel.min.css"
import "owl.carousel/dist/assets/owl.theme.default.min.css"
import "../stylesheets/review.css"
import { customerReview } from '../data/customerReview'

const Review = () => {
    return (
        <div className='review'>
            <div className='review-info'>
                <b>REVIEWS</b>
                <h3>What Customer Says?</h3>
                <p>Have a look at what our Customer says...</p>
            </div>

            <OwlCarousel
                className='owl-theme'
                items='2'
                autoplay
                nav
                dots={false}
                loop
            >

                {
                    customerReview.map((value, index) => {
                        return (
                            <div className='item' key={index}>
                                <div className='customer-review'>
                                    <p>
                                        {value.review}
                                    </p>
                                </div>

                                <div className='customerImage-name'>
                                    <img src={ require(`../assets/Customer-images/${value.imgPic}`)} alt='formal' />
                                    <div className='customer-detail'>
                                        <b>{value.customerName}</b>
                                        <p>{value.customerLocation}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </OwlCarousel>

        </div>
    )
}

export default Review