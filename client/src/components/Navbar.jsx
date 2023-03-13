import React, { useState } from 'react'
import '../stylesheets/navbar.css'
import Search from './Search'
const Navbar = () => {

    const [icon, setIcon] = useState(true)

    const changeIcon = () => {
        setIcon(!icon);
    }

    return (
        <div className='navbar'>
            <div className='logo'>
                <h3><span>SHOP</span>KART</h3>
            </div>
            <div className={icon ? 'nav-items active' : 'nav-items'}>
                <ul>
                    <li>HOME</li>
                    <li><Search /> </li>
                    {/* <li>ABOUT</li> */}
                    <li>PRODUCTS</li>
                    {/* <li>PAGES</li> */}
                    <li>Hello User <i class="fa-solid fa-hand"></i></li>
                </ul>
            </div>
            <div className={icon ? 'nav-button active' : 'nav-button'}>
                <button type="button" className="btn btn-danger btn-sm">Login</button>
                <button type="button" className="btn btn-danger btn-sm">Cart</button>
            </div>
            <div className='hamburgur' onClick={changeIcon}>
                <div className={ icon ? 'lines up' : 'lines up active'} ></div>
                <div className={ icon ? 'lines mid' : 'lines mid active'}></div>
                <div className={ icon ? 'lines down' : 'lines down active'}></div>
            </div>
        </div> 
    )
}

export default Navbar