import React, { useEffect, useState } from 'react'
import arrow from '../Images/up-arrow_icon-icons.com_73351.png'
import './ScrollButton.css'

const ScrollButton = () => {
    const [showButton, setShowButton] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop
            const clientHeight = document.documentElement.clientHeight
            if (scrollTop > clientHeight) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return (
        showButton && (
            <div className='ScrollBtn' onClick={handleClick}>
                <img src={arrow} alt="arrow" />
            </div>
        )
    )
}

export default ScrollButton