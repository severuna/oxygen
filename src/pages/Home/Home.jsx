import React from 'react';
import './Home.css';
import Banner from './Banner/Banner';
import AboutSection from './sections/AboutSection/AboutSection';

const Home = () => {
    return (
        <div className='home column'>
            <Banner />
            <AboutSection />
        </div>
    );
};

export default Home;