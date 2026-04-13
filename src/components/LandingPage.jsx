import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import CoreCapabilities from './CoreCapabilities';
import Platforms from './Platforms';
import InsightButtons from './InsightButtons';
import Vision from './Vision';
import useScrollReveal from '../hooks/useScrollReveal';

import PartnerWithUs from './PartnerWithUs';

const LandingPage = () => {
    useScrollReveal();
    const [currentStep, setCurrentStep] = useState(0);

    const steps = [
        { id: 'hero', component: <Hero onNext={() => setCurrentStep(1)} /> },
        { id: 'capabilities', component: <CoreCapabilities onNext={() => setCurrentStep(2)} onBack={() => setCurrentStep(0)} /> },
        { id: 'platforms', component: <Platforms onNext={() => setCurrentStep(3)} onBack={() => setCurrentStep(1)} /> },
        { id: 'vision', component: <Vision onBack={() => setCurrentStep(2)} /> }
    ];

    useEffect(() => {
        const handleJump = (e) => {
            if (e.detail && typeof e.detail.step === 'number') {
                setCurrentStep(e.detail.step);
            }
        };

        window.addEventListener('jumpToStep', handleJump);

        return () => {
            window.removeEventListener('jumpToStep', handleJump);
        };
    }, []);

    // Scroll to top on step change
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, [currentStep]);

    return (
        <div className="bg-yadata-navy min-h-screen relative overflow-hidden">
            {/* Main Stage */}
            <div 
                className="flex transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1) h-full"
                style={{ transform: `translateX(-${currentStep * 100}vw)`, width: `${steps.length * 100}vw`, display: 'flex' }}
            >
                {steps.map((step, index) => (
                    <div 
                        key={step.id} 
                        className="flex-shrink-0 min-h-screen relative"
                        style={{ width: '100vw' }}
                    >
                        {/* Step Indicator */}
                        <div className="absolute top-32 left-8 z-50 flex items-center space-x-4">
                            <div className="flex space-x-1">
                                {steps.map((_, i) => (
                                    <div 
                                        key={i} 
                                        className={`w-8 h-1 transition-all duration-500 ${i === currentStep ? 'bg-white' : 'bg-white/10'}`}
                                    ></div>
                                ))}
                            </div>
                            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                                Step 0{currentStep + 1}
                            </span>
                        </div>

                        <div className="pt-20 lg:pt-0 h-full">
                            {step.component}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default LandingPage;
