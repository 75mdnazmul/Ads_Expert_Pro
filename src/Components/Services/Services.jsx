import React from 'react';
import { FaSearchengin } from "react-icons/fa";
import serviceImg1 from '../../assets/images/service-1.webp'
import serviceImg2 from '../../assets/images/service-2.webp'
import serviceImg3 from '../../assets/images/service-3.webp'
import serviceImg4 from '../../assets/images/service-4.webp'
import serviceImg5 from '../../assets/images/service-5.webp'
import serviceImg6 from '../../assets/images/service-6.webp'

const Services = () => {
    return (
        <section className="section service" id="service" aria-label="service">
            <div className="container">

                <h2 className="h2 section-title" data-aos="zoom-in">We Provide</h2>

                <p className="section-text" data-aos="fade-left">
                    With our expertise and commitment to results, we empower businesses to thrive in the competitive digital landscape.
                </p>

                <ul className="grid-list">

                    <li>
                        <div className="service-card" data-aos="flip-left">

                            <div className="card-icon">
                                <img src={serviceImg1} alt="" style={{ width: '200px', height: '100px' }} />
                            </div>

                            <h3 className="h3">
                                <a href="#" className="card-title">Social Media Marketing (SMM)</a>
                            </h3>

                            <p className="card-text">
                                We create execute social media strategies that connect with your targeted audience, amplify brand awareness, drive meaningful engagement and conversions.
                            </p>

                        </div>
                    </li>

                    <li>
                        <div className="service-card" data-aos="flip-left">

                            <div className="card-icon">
                                <img src={serviceImg2} alt="" style={{ width: '100px', height: '100px' }} />
                            </div>

                            <h3 className="h3">
                                <a href="#" className="card-title">Search Engine Marketing (SEM)</a>
                            </h3>

                            <p className="card-text">
                                We use SEM techniques to optimize your website and content, boosting search rankings and driving valuable organic traffic in your website.
                            </p>

                        </div>
                    </li>

                    <li>
                        <div className="service-card" data-aos="flip-left">

                            <div className="card-icon">
                                <img src={serviceImg3} alt="" style={{ width: '100px', height: '100px' }} />
                            </div>

                            <h3 className="h3">
                                <a href="#" className="card-title">Shopify Store Design & Dropshipping</a>
                            </h3>

                            <p className="card-text">
                                We help you create beautiful online stores on Shopify and set up dropshipping so you can sell products without inventory hassle.
                            </p>

                        </div>
                    </li>

                    <li>
                        <div className="service-card" data-aos="flip-right">

                            <div className="card-icon">
                                <img src={serviceImg4} alt="" style={{ width: '100px', height: '100px' }} />
                            </div>

                            <h3 className="h3">
                                <a href="#" className="card-title">Wordpress</a>
                            </h3>

                            <p className="card-text">
                                We can create your website using WordPress, a user-friendly platform that makes it simple to build and manage your site without any coding knowledge.
                            </p>

                        </div>
                    </li>


                    <li>
                        <div className="service-card" data-aos="flip-right">

                            <div className="card-icon">
                                <img src={serviceImg5} alt="" style={{ width: '100px', height: '100px' }} />
                            </div>

                            <h3 className="h3">
                                <a href="#" className="card-title"> Web Development</a>
                            </h3>

                            <p className="card-text">
                                We create custom websites that look great and work smoothly, tailored to your business needs and goals.
                            </p>

                        </div>
                    </li>

                    <li>
                        <div className="service-card" data-aos="flip-right">

                            <div className="card-icon">
                                <img src={serviceImg6} alt="" style={{ width: '200px', height: '100px' }} />
                            </div>

                            <h3 className="h3">
                                <a href="#" className="card-title">Web Design</a>
                            </h3>

                            <p className="card-text">
                                We design attractive websites that are easy to use, making your online presence visually appealing and engaging for visitors.
                            </p>
                        </div>
                    </li>

                </ul>

            </div>
        </section>
    );
};

export default Services;