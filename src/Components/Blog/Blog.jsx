import React from 'react';
import blogImg1 from "../../assets/images/blog-1.jpg"
import blogImg2 from "../../assets/images/blog-2.jpg"
import blogImg3 from "../../assets/images/blog-3.jpg"
import blogImg4 from "../../assets/images/blog-4.jpg"
import blogImg5 from "../../assets/images/blog-5.jpg"

const Blog = () => {
    return (
        <section className="section blog" id="blog" aria-label="blog">
            <div className="container">

                <h2 className="h2 section-title">Latest Articles Updated Weekly</h2>

                <p className="section-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna
                    aliqua.
                </p>

                <ul className="grid-list">

                    <li>
                        <div className="blog-card">

                            <figure className="card-banner img-holder" style={{"--width": 860, "--height": 646}}>
                                <img src={blogImg1} width="860" height="646" loading="lazy"
                                    alt="How to Become a Successful Entry Level UX Designer" className="img-cover"/>
                            </figure>

                            <div className="card-content">

                                <time className="time" dateTime="2022-06-16">June 16, 2022</time>

                                <h3 className="h3">
                                    <a href="#" className="card-title">How to Become a Successful Entry Level UX Designer</a>
                                </h3>

                            </div>

                        </div>
                    </li>

                    <li>
                        <div className="blog-card grid">

                            <figure className="card-banner img-holder" style={{"--width": 860, "--height": 646}}>
                                <img src={blogImg2} width="860" height="646" loading="lazy"
                                    alt="2022 Local SEO Success: The Year of Everywhere" className="img-cover"/>
                            </figure>

                            <div className="card-content">

                                <time className="time" dateTime="2022-06-16">June 16, 2022</time>

                                <h3 className="h3">
                                    <a href="#" className="card-title">2022 Local SEO Success: The Year of Everywhere</a>
                                </h3>

                            </div>

                        </div>
                    </li>

                    <li>
                        <div className="blog-card grid">

                            <figure className="card-banner img-holder" style={{"--width": 860, "--height": 646}}>
                                <img src={blogImg3} width="860" height="646" loading="lazy"
                                    alt="The Guide to Running a Client Discovery Process" className="img-cover"/>
                            </figure>

                            <div className="card-content">

                                <time className="time" dateTime="2022-06-16">June 16, 2022</time>

                                <h3 className="h3">
                                    <a href="#" className="card-title">The Guide to Running a Client Discovery Process</a>
                                </h3>

                            </div>

                        </div>
                    </li>

                    <li>
                        <div className="blog-card grid">

                            <figure className="card-banner img-holder" style={{"--width": 860, "--height": 646}}>
                                <img src={blogImg4} width="860" height="646" loading="lazy"
                                    alt="3 Ways to Get Client Approval for Scope Changes" className="img-cover"/>
                            </figure>

                            <div className="card-content">

                                <time className="time" dateTime="2022-06-16">June 16, 2022</time>

                                <h3 className="h3">
                                    <a href="#" className="card-title">3 Ways to Get Client Approval for Scope Changes</a>
                                </h3>

                            </div>

                        </div>
                    </li>

                    <li>
                        <div className="blog-card grid">

                            <figure className="card-banner img-holder" style={{"--width": 860, "--height": 646}}>
                                <img src={blogImg5} width="860" height="646" loading="lazy"
                                    alt="Top 21 Must-Read Blogs For Creative Agencies" className="img-cover"/>
                            </figure>

                            <div className="card-content">

                                <time className="time" dateTime="2022-06-16">June 16, 2022</time>

                                <h3 className="h3">
                                    <a href="#" className="card-title">Top 21 Must-Read Blogs For Creative Agencies</a>
                                </h3>

                            </div>

                        </div>
                    </li>

                </ul>

            </div>
        </section>
    );
};

export default Blog;