import React from 'react';
import Navber from '../Components/Navber/Navber';
import Banner from '../Components/Banner/Banner';
import Services from '../Components/Services/Services';
import Projects from '../Components/Projects/Projects';
import AboutUs from '../Components/AboutUs/AboutUs';
import AreYouReady from '../Components/AreYouReady/AreYouReady';
import ContactUs from '../Components/ContactUs/ContactUs';
import Blog from '../Components/Blog/Blog';
import Footer from '../Components/Footer/Footer';

const HomePage = () => {
    return (
        <div className=''> 
            <Navber/>
            <Banner/>
            <Services/>
            <Projects/>
            <AboutUs/>
            <AreYouReady/>
            <Blog/>
            <ContactUs/>
            <Footer/>
        </div>
    );
};

export default HomePage;