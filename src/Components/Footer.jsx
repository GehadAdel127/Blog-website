import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import icon from '../Images/icon.png'
import './Footer.css'


const Footer = () => {
    return (
        <div className='Footer'>
            <hr />
            <div className="footerContent">
                <div className="right">
                    <h2>Ready to grow your business?</h2>
                    <p>Join over 4,000+ startups already growing with Untitled</p>
                </div>
                <div className="left">
                    <div className="input">
                        <input type="email" placeholder='Enter your email' />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="mainContent">
                <div className="logo">
                    <img src={icon} alt="icon" loading='lazy' />
                    <h2>Untitled UI</h2>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Resources</th>
                            <th>Social</th>
                            <th>Legal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Overview</td>
                            <td>Blog</td>
                            <td>Twitter</td>
                            <td>Terms</td>
                        </tr>
                        <tr>
                            <td>Features</td>
                            <td>Events</td>
                            <td>LinkedIn</td>
                            <td>Privacy</td>
                        </tr>
                        <tr>
                            <td>Tutorials</td>
                            <td>Help Center</td>
                            <td>GitHub</td>
                            <td>Licenses</td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <div className="rights">
                <p>© 2077 Untitled UI.All rights reserved.</p>
                <div className="icons">
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faGithub} />
                </div>
            </div>
        </div>
    )
}

export default Footer