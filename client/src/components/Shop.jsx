import React from 'react'
import "../stylesheets/shop.css"
import { shopData } from '../data/shopData'
const Shop = () => {
    return (
        <div className='shop'>
            <div className='shop-div'>
                <h2>Shop with us</h2>
                <p>Handpicked favourites just for you</p>
                <div className='shop-products'>
                    {
                        shopData.map((value, index) => {
                            return (
                                <div className='product' key={index}>
                                    <img src={require(`../assets/Product-images/${value.image}`)} alt={`${value.textLine}`} />
                                    <div className='shop-details'>
                                        <b>{value.textLine}</b>
                                        <div className='price'>
                                            <del>{value.originalPrice}</del>
                                            <b>{value.newPrice}</b>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Shop