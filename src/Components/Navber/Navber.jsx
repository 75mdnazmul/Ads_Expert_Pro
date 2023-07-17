import React from 'react';
import { Link } from 'react-scroll'

const Navber = () => {
    return (
        <div>
            <header className="header" data-header>
                <div className="container">

                    
                    <Link to="home" spy={true} smooth={true} duration={700} ><a className="logo" data-aos="zoom-in">AdsExpertPro</a></Link>

                    <nav className="navbar container" data-navbar>
                        <ul className="navbar-list">

                            <li data-aos="fade-left">
                                <Link to="home" spy={true} smooth={true} duration={700} className="navbar-link" data-nav-link>Home</Link>
                            </li>

                            <li data-aos="fade-left">
                                <Link to="service" spy={true} smooth={true} duration={700} className="navbar-link" data-nav-link>Services</Link>
                            </li>

                            <li data-aos="fade-left">
                                <Link to="project" spy={true} smooth={true} duration={700} className="navbar-link" data-nav-link>Project</Link>
                            </li>

                            <li data-aos="fade-left">
                                <Link to="about" spy={true} smooth={true} duration={700} className="navbar-link" data-nav-link>About Us</Link>
                            </li>

                            <li data-aos="fade-left">
                                <Link to="blog" spy={true} smooth={true} duration={700} className="navbar-link" data-nav-link>Blog</Link>
                            </li>

                            <li data-aos="fade-left">
                                <Link to="contact" spy={true} smooth={true} duration={700} className="navbar-link" data-nav-link>Contact Us</Link>
                            </li>

                            <li data-aos="fade-left">
                                <Link to="contact" spy={true} smooth={true} duration={700} className="btn btn-primary" data-nav-link>Get Started</Link>
                            </li>

                        </ul>
                    </nav>

                    <button className="nav-toggle-btn" aria-label="Toggle menu" data-nav-toggler>
                        <ion-icon name="menu-outline" className="open"></ion-icon>
                        <ion-icon name="close-outline" className="close"></ion-icon>
                    </button>

                </div>
            </header>

        </div>
    );
};

export default Navber;