import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function Navbar(props) {
    const [scrolled, setScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('Top Stories'); 
    
    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleItemClick = (itemName) => {
        setActiveItem(itemName); 
        setMenuOpen(false); 
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="nav-title-tabs">
                    <Link to="/" className="nav-title">Ghost Stories</Link>
                    <ul className={`nav-tabs ${menuOpen ? "open" : ""}`}>
                        <li
                            className={`nav-item ${activeItem === 'Top Stories' ? 'active' : ''}`}
                            onMouseEnter={toggleDropdown}
                            onMouseLeave={toggleDropdown}
                            onClick={() => handleItemClick('Top Stories')}
                        >
                            <Link to="/">Top Stories</Link>
                            <i className="fa-solid fa-caret-down dropdown"></i>
                            {dropdownOpen && (
                                <div className={`dropdown-menu  ${scrolled ? 'scrolled' : ''} ${menuOpen ? "open" : ""}`}>
                                    <a href="#blog-0">Story 1</a>
                                    <a href="#blog-1">Story 2</a>
                                    <a href="#blog-2">Story 3</a>
                                    <a href="#blog-3">Story 4</a>
                                </div>
                            )}
                        </li>
                        <li
                            className={`nav-item ${activeItem === 'Experiences' ? 'active' : ''}`}
                            onClick={() => handleItemClick('Experiences')}
                        >
                            <Link to="/experiences">Experiences</Link>
                        </li>
                        <li
                            className={`nav-item ${activeItem === 'About' ? 'active' : ''}`}
                            onClick={() => handleItemClick('About')}
                        >
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </div>

                <div className='nav-menu' onClick={toggleMenu}>
                    <i className="fa-solid fa-bars nav-menu-icon"></i>
                </div>

                <div className='nav-search'>
                    <input type="text" placeholder='Search' className='search-box' />
                    <div className='search-icon'>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
            </div>
        </>
    );
}

