import React from 'react';
import Hero from '../components/Hero';
import Products from '../components/Products';
import About from '../components/About';
import FeaturedProjects from '../components/FeaturedProjects';

const Home = () => {
    return (
        <div className="page-home">
            <Hero />
            <FeaturedProjects />
            <Products />
            <About />
        </div>
    );
};

export default Home;
