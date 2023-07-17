import React from 'react';
import BannerImg from '../../assets/images/hero-banner.png'
import { Link } from 'react-scroll'

const Banner = () => {
    return (
        <section className="section Banner" id="home" aria-label="Banner">
            <div className="container">
                <div className="Banner-content" data-aos="fade-right"    data-aos-offset="300" data-aos-easing="ease-in-sine">

                    <p className="Banner-subtitle">Ads Expert Pro Agency</p>
                    <h1 className="h1 Banner-title">Welcome to Ads Expert Pro Agency</h1>
                    <p className="Banner-text">
                        Ads Expert Pro is a trusted digital marketing agency offering tailored strategies and captivating web solutions to elevate your brand&apos;s online presence. With our expertise and commitment to results, we empower businesses to thrive in the competitive digital landscape.
                    </p>
                    <Link to="contact" spy={true} smooth={true} duration={700} className="btn btn-primary" data-nav-link>Get Started</Link>
                </div>

                <figure className="Banner-banner" data-aos="zoom-in">
                    <img src={BannerImg} width="720" height="673" alt="Banner banner" className="w-100" />
                </figure>

            </div>
        </section>
    );
};

export default Banner;