import React from 'react';
import Hero from './Hero';
import WhatWeDo from './WhatWeDo';
import Industries from './Industries';
import TinyGlobal from './TinyGlobal';
import WhyYadata from './Values';
import useScrollReveal from '../hooks/useScrollReveal';

const LandingPage = () => {
    useScrollReveal();

    return (
        <div className="bg-yadata-navy overflow-hidden">
            {/* Block 1: Hero (Navy) */}
            <section className="bg-yadata-navy">
                <Hero />
            </section>

            {/* Block 2: What We Do (Charcoal) */}
            <section className="bg-yadata-charcoal reveal">
                <WhatWeDo />
            </section>

            {/* Block 3: Industries (Light Steel) - High Contrast Block */}
            <section className="bg-yadata-light-steel text-yadata-navy reveal">
                <Industries />
            </section>

            {/* Block 4: TinyGlobal (Navy) */}
            <section className="bg-yadata-navy reveal">
                <TinyGlobal />
            </section>

            {/* Block 5: Why Yadata (Charcoal) */}
            <section className="bg-yadata-charcoal reveal">
                <WhyYadata />
            </section>
        </div>
    );
};

export default LandingPage;
