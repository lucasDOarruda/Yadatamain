import React from 'react';
import Footer from './Footer';

const Hero = ({ onNext }) => {
    return (
        <section className="hero relative overflow-hidden bg-yadata-navy w-full">
            {/* Background Dot Grid */}
            <div className="absolute inset-0 bg-dot-grid opacity-20"></div>

            {/* Abstract Flow Lines (Right Side) */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-10 pointer-events-none hidden lg:block">
                <svg viewBox="0 0 800 600" className="w-full h-full">
                    <defs>
                        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="50%" stopColor="white" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                    </defs>
                    {/* Animated Path 1 */}
                    <path d="M0,100 Q200,50 400,100 T800,100" fill="none" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="200 800">
                        <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="15s" repeatCount="indefinite" />
                    </path>
                    {/* Animated Path 2 */}
                    <path d="M0,300 Q200,350 400,300 T800,300" fill="none" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="300 700">
                        <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="20s" repeatCount="indefinite" />
                    </path>
                    {/* Animated Path 3 */}
                    <path d="M0,500 Q200,450 400,500 T800,500" fill="none" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="150 850">
                        <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="12s" repeatCount="indefinite" />
                    </path>
                </svg>
            </div>

            <div className="flex-1 flex items-center w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
                    <div className="reveal active">
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm bg-yadata-steel/10 border border-yadata-steel/20 mb-8">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-yadata-steel">Operational Technology for Trade</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
                            Building the <br />
                            <span className="text-yadata-steel">System Behind</span> <br />
                            Your Business.
                        </h1>

                        <p className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed max-w-xl font-light">
                            We design and build custom software, platforms, and operational systems that power imports, exports, logistics, and modern startups.
                        </p>

                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                            <button 
                                onClick={onNext}
                                className="premium-button bg-white text-yadata-navy px-10 py-5 rounded-sm font-bold text-sm uppercase tracking-widest"
                            >
                                Explore Our Platforms
                            </button>
                            <button
                                onClick={() => window.dispatchEvent(new Event('openPartnerModal'))}
                                className="premium-button bg-transparent text-white border border-white/10 hover:border-white/20 px-10 py-5 rounded-sm font-bold text-sm uppercase tracking-widest text-center"
                            >
                                Partner With Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </section>
    );
};

export default Hero;
