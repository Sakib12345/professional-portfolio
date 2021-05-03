import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { NavLinks } from './NavbarElement';
import { FaBars } from 'react-icons/fa';


const Navbar = ({ toggle }) => {
    return (
        <div className='nav'>
            <div className='navbarContainer'>
                <div className='navLogo'>
                        <Link to='/' style={{  color: 'white', textDecoration: 'none' }}>SAKIB</Link>
                </div>
                <div className='navMobileIcon' onClick={toggle}>
                    <FaBars />
                </div>
                <div className='navMenu'>
                    <div className='navItems'>
                        <NavLinks >
                            <Link to='/about' style={{ color: 'white', textDecoration: 'none' }}>About</Link>
                        </NavLinks>
                    </div>
                    <div className='navItems'>
                        <NavLinks >
                            <Link to='/projects' style={{ color: 'white', textDecoration: 'none' }}>Projects</Link>
                        </NavLinks>
                    </div>
                    <div className='navItems'>
                        <NavLinks >
                            <Link to='/skills' style={{ color: 'white', textDecoration: 'none' }}>Skills</Link>
                        </NavLinks>
                    </div>
                    <div className='navItems'>
                        <NavLinks >
                            <Link to='/contact' style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
                        </NavLinks>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;