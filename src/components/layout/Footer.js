import React from 'react'
import "./Main.css";
function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col s16 m6 foot">
                            <h5>About Us</h5>
                            <p>Birdview Travels is a thresh dynamic travel agency, media, communications and lifestyle group
                                of businesses whose way of life is creating advantages with strategic communications intelligence
                            </p>
                    </div>
                    <div className="col s12 m6 foot">
                    <h5>Contact</h5>
                    <ul>
                        <li className='list'>
                           Phone: +37258654123
                        </li>
                        <li className='list'>
                           Email: birdviewou@gmail.com
                        </li>
                        <li className='list'>
                          Working Hours: Mon- Fri: +37258654123
                        </li>
                    </ul>
                    </div>
                </div>

                <div className="center copywrite">
                    copywrite (c) 2020 BirdView Travels
                </div>
            </div>
        </div>
    )
}

export default Footer
