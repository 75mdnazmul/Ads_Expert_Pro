import React from 'react';
import BannerImg from '../../assets/images/hero-banner.png'

const Banner = () => {
    return (
        <section className="section Banner" id="home" aria-label="Banner">
            <div className="container">
                <div className="Banner-content">

                    <p className="Banner-subtitle">Ads Expert Pro Agency</p>
                    <h1 className="h1 Banner-title">Welcome to Ads Expert Pro Agency</h1>
                    <p className="Banner-text">
                        Ads Expert Pro is a trusted digital marketing agency offering tailored strategies and captivating web solutions to elevate your brand&apos;s online presence. With our expertise and commitment to results, we empower businesses to thrive in the competitive digital landscape.
                    </p>
                    <a href="#" className="btn btn-primary">Get Started</a>
                </div>

                <figure className="Banner-banner">
                    <img src={BannerImg} width="720" height="673" alt="Banner banner" className="w-100" />
                </figure>

            </div>
        </section>
    );
};

export default Banner;