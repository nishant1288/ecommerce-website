import React from 'react'
import "../stylesheets/footer.css"
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-heading'>
                <h1>Special Offer All Branded Bags Are Flat 50% Discount</h1>
            </div>
            <div className='mid-footer-section'>
                <div className='links'>
                    <b>Useful Links</b><br></br>
                    <p>Home</p>
                    <p>About</p>
                    <p>Blogs</p>
                    <p>Contact</p>
                    <p>Support</p>
                    <p>News and Media</p>
                    <p>Careers</p>
                </div>

                <div className='information'>
                    <b>Terms and Conditions</b><br></br>
                    <p>Delivery Terms</p>
                    <p>Order Tracking</p>
                    <p>Returns Policy</p>
                    <p>Privacy Policy</p>
                    <p>FAQ</p>
                    <p>The Shop</p>
                </div>

                <div className='address'>
                    <b>Address</b><br></br>
                    <p>Maharashtra, India</p>
                    <p>Nariman Point</p>
                    <p>+91 98674949111</p>
                    <p>shopkart@gmail.com</p>
                </div>
            </div>

            <div className='footer-last-section'>
                <div className='footer-line'>
                    <p>@2023 ShopKart. All rights reserved</p>
                </div>
                <div className='social-icons'>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-square-twitter"></i>
                </div>
            </div>
        </div>
    )
}

export default Footer