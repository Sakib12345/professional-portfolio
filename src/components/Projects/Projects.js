import React from 'react';
import './Project.css';
import filmy from '../../images/filmy.PNG'
import heroRide from '../../images/hero-ride.PNG'
import easyExpress from '../../images/easy-express.PNG'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Projects = () => {
    return (
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
            <div className="container">
                <div className="row">

                    <div className="col-md-12 col-sm-6 col-12 col-lg-4 ">
                        <a style={{ textDecoration: 'none', color: 'black' }} href="https://filmy-32c70.web.app/">
                            <div className="card">
                                <img className="image" style={{ marginBottom: '15px' }} src={filmy} alt="" />
                                <h4>Filmy - A Multimedia Solution</h4>
                                <p>This a single page application.This web solution provides you - Motion Graphics, Video Editing and Cinematography service.
                                To order a service you have to be created an account or logged in.
                                Admin Panel (Make new service, make new Admin, Delete Service)
                            </p>
                                <div className="row">
                                    <div className="col-md-4 col-sm-4 col-4">
                                        <div className="small-card">
                                            <p>React JS</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4  col-sm-4 col-4">
                                        <div className="small-card">
                                            <p>Node JS</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4  col-sm-4 col-4">
                                        <div className="small-card">
                                            <p>Express JS</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-4 col-4">
                                        <div className="small-card">
                                            <p>MongoDB</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-4 col-4">
                                        <div className="small-card">
                                            <p>Firebase</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-4 col-4">
                                        <div className="small-card">
                                            <p>Heroku</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-md-12 col-sm-6 col-12 col-lg-4">
                        <div className="card">
                            <img className="image" style={{ marginBottom: '15px' }} src={easyExpress} alt="" />
                            <h4>Easy Express - An e-Commerce</h4>
                            <p>This a single page application.Responsive for desktop and mobile screen.User can order and checkout their preferable products.
                            Admin can upload and delete products.
                            </p>
                            <div className="row">
                                <div className="col-md-4 col-sm-4 col-4">
                                    <div className="small-card">
                                        <p>React JS</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-4">
                                    <div className="small-card">
                                        <p>Bootstrap</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-4">
                                    <div className="small-card">
                                        <p>Node JS</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-4">
                                    <div className="small-card">
                                        <p>Express JS</p>
                                    </div>
                                </div>
                                <div className="col-md-4  col-sm-4 col-4">
                                    <div className="small-card">
                                        <p>MongoDB</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-4">
                                    <div className="small-card">
                                        <p>Firebase</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-4">
                                    <div className="small-card">
                                        <p>Heroku</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-sm-6 col-12 col-lg-4">
                        <div className="card">
                            <img className="image" src={heroRide} style={{ marginBottom: '15px' }} alt="" />
                            <h4>Hero Ride</h4>
                            <p>This a single page application.Hero Ride is a simple ride sharing app with google map.User must have to create his/her account using their google account or random sign up system.Logged In user can choose their vehicle for transportation and select their location and destination.
                            </p>
                            <div className="row">
                                <div className="col-md-4 col-sm-4 col-4">
                                    <div className="small-card">
                                        <p>React JS</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-4">
                                    <div className="small-card">
                                        <p>Firebase</p>
                                    </div>
                                </div>
                                <div className="col-md-4  col-sm-4 col-4">
                                    <div className="small-card">
                                        <p>Bootstrap</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Projects;