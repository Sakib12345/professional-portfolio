import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
import { NavLinks } from './NavbarElement';
import { FaBars } from 'react-icons/fa';


const Navbar = ({toggle}) => {
    return (
        <div className='nav'>
            <div className='navbarContainer'>
                <div className='navLogo'>
                    <h2>Sakib</h2>
                </div>
                <div className='navMobileIcon' onClick={toggle}>
                    <FaBars />
                </div>
                <div className='navMenu'>
                    <div className='navItems'>
                        <NavLinks >
                            <Link to='about' style={{color:'white' , textDecoration:'none'}}>About</Link>
                        </NavLinks>
                    </div>
                    <div className='navItems'>
                        <NavLinks to='projects'>Projects</NavLinks>
                    </div>
                    <div className='navItems'>
                        <NavLinks to='skills'>Skills</NavLinks>
                    </div>
                    <div className='navItems'>
                        <NavLinks to='contact'>Contact</NavLinks>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;