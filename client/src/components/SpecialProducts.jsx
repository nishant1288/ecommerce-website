import React from 'react'
import { productItem } from '../data/productItem'
import SpecialProductItem from './SpecialProductItem'
import "../stylesheets/specialproducts.css"


const SpecialProducts = () => {
  return (
    <div className='specialproducts'>
        {
          productItem.map((value, index) => {
            return(
                <SpecialProductItem key = {index}
                heading = {value.heading} 
                imgSrc ={require(`../assets/Product-images/${value.imgSrc}`)} />
            )
          } )
          }
    </div>
  )
}

export default SpecialProducts