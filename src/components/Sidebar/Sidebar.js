import React from 'react';
import { CloseBtn, Icon, SidebarContainer, SideBarLinks, SidebarWrapper } from './SidebarElements';
import './SIdebar.css'
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseBtn />
            </Icon>
            <SidebarWrapper>
                <div className='sidebarMenu'>
                    <div className='sidebarItems'>
                        <SideBarLinks >
                            <Link to='/about' style={{ color: 'white', textDecoration: 'none' }}>About</Link>
                        </SideBarLinks>
                    </div>
                    <div className='sidebarItems'>
                        <SideBarLinks to='/projects'>
                            <Link to='/projects' style={{ color: 'white', textDecoration: 'none' }}>Projects</Link>
                        </SideBarLinks>
                    </div>
                    <div className='sidebarItems'>
                        <SideBarLinks to='/skills'>
                            <Link to='/skills' style={{ color: 'white', textDecoration: 'none' }}>Skills</Link>
                        </SideBarLinks>
                    </div>
                    <div className='sidebarItems'>
                        <SideBarLinks to='contact'>
                            <Link to='/contact' style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
                        </SideBarLinks>
                    </div>
                </div>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;