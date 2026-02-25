import React from 'react';
import Hero from './Hero';
import About from './About';
import TinyGlobal from './TinyGlobal';
import SpinnCircle from './SpinnCircle';
import WhyYadata, { Vision } from './Values';

const LandingPage = () => {
    return (
        <>
            <Hero />
            <About />
            <TinyGlobal />
            <SpinnCircle />
            <WhyYadata />
            <Vision />
        </>
    );
};

export default LandingPage;
