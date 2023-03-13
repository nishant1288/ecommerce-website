import React from 'react'
import "../stylesheets/deals.css"
import { dealsData } from '../data/dealsData'
const Deals = () => {
    return (
        <div className='deals'>
            <h2>Deals of the Day !</h2>
            <div className='deals-section'>
                {
                    dealsData.map((value, index) => {
                        return (
                            <div className='cards' key={index}>
                                <img src={require(`../assets/Product-images/${value.imgName}`)} alt={`${value.imgName}`} />
                                <p>{value.textLine}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Deals