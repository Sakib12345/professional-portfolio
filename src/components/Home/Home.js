import React, {useState} from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle  = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
            <Navbar toggle={toggle}></Navbar>
        </div>
    );
};

export default Home;