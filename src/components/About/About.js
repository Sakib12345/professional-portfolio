import React from 'react';
import { Link } from 'react-scroll';
import Image from '../../images/sakib.png';
import './About.css';

const About = () => {
    return (
        <div className="about-section">
            <h1 style={{ fontWeight: '700' }}>Md Sakib Al Islam</h1>
            <h2 style={{ marginTop: '20px' }}>Full Stack Web Developer</h2>
            <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
            >
                <div className='img-profile'>
                    <img style={{ marginTop: '20px' }} src={Image} alt="" />
                </div>
                <p style={{ marginTop: '20px', fontSize: '18px', color: 'gray' }}>I am an enthusiastic and self-motivated full stack web developer with excellent knowledge and experience.
                I have already developed more than 20 projects using HTML5, CSS3, Bootstrap, JavaScript and React JS. I have also knowledge with working experience in full-stack development using Express JS, MongoDB, Firebase, Heroku. I can take on challenges in a new environment to develop new skills. I can take the level of accuracy concerning the quality of the work with attention in detail.

            </p>
                <Link to="/contact">
                    <button className="contactBtn">Hire Me</button>
                </Link>
            </div>
        </div>
    );
};

export default About;