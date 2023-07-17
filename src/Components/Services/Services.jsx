import React from 'react';

const Services = () => {
    return (
        <section className="section service" id="service" aria-label="service">
            <div className="container">

                <h2 className="h2 section-title">We Provide</h2>

                <p className="section-text">
                    With our expertise and commitment to results, we empower businesses to thrive in the competitive digital landscape.
                </p>

                <ul className="grid-list">

                    <li>
                        <div className="service-card">

                            <div className="card-icon" style={{ backgroundColor: "#13c4a1" }}>
                                <ion-icon name="chatbox"></ion-icon>
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
                        <div className="service-card">

                            <div className="card-icon" style={{ backgroundColor: "#6610f2" }}>
                                <ion-icon name="desktop"></ion-icon>
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
                        <div className="service-card">

                            <div className="card-icon" style={{ backgroundColor: '#fc3549' }}>
                                <ion-icon name="phone-portrait"></ion-icon>
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
                        <div className="service-card">

                            <div className="card-icon" style={{ backgroundColor: "#ffb700" }}>
                                <ion-icon name="bulb"></ion-icon>
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
                        <div className="service-card">

                            <div className="card-icon" style={{ backgroundColor: "#00d280" }}>
                                <ion-icon name="archive"></ion-icon>
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
                        <div className="service-card">

                            <div className="card-icon" style={{ backgroundColor: "#ff612f" }}>
                                <ion-icon name="build"></ion-icon>
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