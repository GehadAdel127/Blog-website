import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import icon from '../Images/icon.png';
import './Header.css';

const Header = () => {
    const [isActive, setIsActive] = useState('/');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleActive = (link) => {
        setIsActive(link);
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='header'>
            <div className="headico">
                <h2>Untitled UI</h2>
                <img src={icon} alt="icon_image" />
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} size="2x" />
            </div>
            <div className={`links ${isMenuOpen ? 'open' : ''}`}>
                <Link to="/" className={isActive === '/' ? 'active' : ''} onClick={() => handleActive('/')}>Home</Link>
                <Link to="/about" className={isActive === '/about' ? 'active' : ''} onClick={() => handleActive('/about')}>About</Link>
                <Link to="/blogs" className={isActive === '/blogs' ? 'active' : ''} onClick={() => handleActive('/blogs')}>Blogs</Link>
                <Link to="/create" className={isActive === '/create' ? 'active' : ''} onClick={() => handleActive('/create')}>Create</Link>
                <Link to="/contact" className={isActive === '/contact' ? 'active' : ''} onClick={() => handleActive('/contact')}>Contact</Link>
            </div>
            <div className="logBtns">
                <button><Link to="/login" className='logIn'>Log in</Link></button>
            </div>
        </div>
    );
};

export default Header;
