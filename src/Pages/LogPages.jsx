import { faFacebook, faGithub, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './LogPages.css'


const LogPages = () => {
    const [isActive , setIsActive] = useState(false)

    const handleActive = () =>{
        setIsActive(true)
    }
    const handleRemoveActive = () => {
        setIsActive(false)
    }

  return (
    <div className='LogPages'>
        <div className= {isActive ? 'container active' : 'container'}>
            <div className="signUp formContainer">
                <form>
                    <h2>Create New Account</h2>
                        <div className="socialIcons">
                            <Link to= '#' > <FontAwesomeIcon icon={faGoogle} /></Link>
                            <Link to= '#' ><FontAwesomeIcon icon={faFacebook} /></Link>
                            <Link to = '#'><FontAwesomeIcon icon={faGithub} /></Link>
                            <Link to= '#' ><FontAwesomeIcon icon={faLinkedin} /></Link>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder='Name' />
                        <input type="email" placeholder='Email' />
                        <input type="password" placeholder='Password' />
                        <button>Sign Up</button>
                </form>
            </div>
            <div className="logIn formContainer">
                <form>
                    <h2>Log In</h2>
                        <div className="socialIcons">
                            <Link to= '#' > <FontAwesomeIcon icon={faGoogle} /></Link>
                            <Link to= '#' ><FontAwesomeIcon icon={faFacebook} /></Link>
                            <Link to = '#'><FontAwesomeIcon icon={faGithub} /></Link>
                            <Link to= '#' ><FontAwesomeIcon icon={faLinkedin} /></Link>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="email" placeholder='Email' />
                        <input type="password" placeholder='Password' />
                        <Link to = '#'>Forget Your Password?</Link>
                        <button>Log In</button>
                </form>
            </div>
            <div className="toggleContainer">
                <div className="toggle">
                    <div className="toggleLeft togglePannel">
                        <h2>Welcolme Back!</h2>
                        <p>Enter your personal details to use all of site features</p>
                        <button className='hidden' onClick={handleRemoveActive}>Log In</button>
                    </div>
                    <div className="toggleRight togglePannel">
                        <h2>Hello, Friend!</h2>
                        <p>Register with your personal details to use all of site features</p>
                        <button className='hidden' onClick={handleActive}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LogPages