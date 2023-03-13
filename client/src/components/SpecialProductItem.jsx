import React from 'react'
import "../stylesheets/specialproductitem.css"

const SpecialProductItem = (props) => {
    return (
        <div className='specialproductitem'>
            <img src={props.imgSrc} alt='pic1' />
            <div className='left-div'>
                <h3>{props.heading}</h3>
                <button type="button" className="btn btn-outline-primary">Shop Now <i className="fa-solid fa-arrow-right-long"></i></button>
            </div>
        </div>
    )
}

export default SpecialProductItem