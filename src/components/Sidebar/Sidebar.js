import React from 'react';
import { NavLinks } from '../Navbar/NavbarElement';
import { CloseBtn, Icon, SidebarContainer, SidebarWrapper } from './SidebarElements';
import './SIdebar.css'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseBtn />
            </Icon>
            <SidebarWrapper>
            <div className='sidebarMenu'>
                    <div className='navItems'>
                        <NavLinks to='about' onClick={toggle}>About</NavLinks>
                    </div>
                    <div className='navItems'>
                        <NavLinks to='projects' onClick={toggle}>Projects</NavLinks>
                    </div>
                    <div className='navItems'>
                        <NavLinks to='skills' onClick={toggle}>Skills</NavLinks>
                    </div>
                    <div className='navItems'>
                        <NavLinks to='contact' onClick={toggle}>Contact</NavLinks>
                    </div>
                </div>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;