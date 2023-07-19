import React from 'react';
import { Link } from 'react-scroll'
import './ToggleButton'
import { FaArrowUp, FaBars } from 'react-icons/fa';

const Navber = () => {
    return (
        <div>
            <header className="header" data-header>
                <div className="container">

                    <Link to="home" spy={true} smooth={true} duration={700} ><img src="Ads-Expert-Pro-logo.webp" alt="" className="logo" data-aos="zoom-in" /></Link>

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
                        <FaBars name="menu-outline" className="open"></FaBars>
                        <FaBars name="close-outline" className="close"></FaBars>
                    </button>

                </div>
            </header>
            {/* =========================== BACK TO TOP ==================================*/}

            <a href="#top" aria-label="back to top" data-back-top-btn className="back-top-btn">
                <span><FaArrowUp name="chevron-up" aria-hidden="true"></FaArrowUp></span>
            </a>

        </div>
    );
};

export default Navber;