import React, { useState } from 'react';
import attIllustration from '../assets/images/att_consulting.png';
import ATTConsultingModal from './ATTConsultingModal';

const ATTConsulting = () => {
    const [showATTModal, setShowATTModal] = useState(false);

    return (
        <section id="att-consulting" className="py-24 relative overflow-hidden bg-yadata-navy text-white">
            {/* Subtle Gradient Backdrop */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-yadata-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Premium Icon Container */}
                    <div className="order-2 lg:order-1 flex flex-col items-start">
                        <div className="w-28 h-28 rounded-full bg-blue-500/10 border border-blue-400/20 flex items-center justify-center mb-8 hover:scale-105 transition-transform duration-300 group relative">
                            <div className="absolute inset-0 bg-blue-400/5 blur-xl rounded-full group-hover:bg-blue-400/10 transition-colors"></div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-12 h-12 text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.4)]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <div className="hidden lg:block w-px h-24 bg-gradient-to-b from-blue-400/20 to-transparent ml-14"></div>
                    </div>

                    {/* Right: Content */}
                    <div className="order-1 lg:order-2">
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm bg-yadata-cyan/10 border border-yadata-cyan/20 mb-8">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-yadata-cyan">ATT Consulting Services</span>
                        </div>

                        <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6 max-w-xl">
                            Become an <span className="text-blue-400">Accredited Trusted Trader</span>
                        </h2>

                        <p className="text-xl text-white/70 mb-10 max-w-xl font-light leading-relaxed">
                            End-to-end ATT consulting with Australian Border Force alignment — powered by the TinyGlobalOp platform.
                        </p>


                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                            <button
                                onClick={() => setShowATTModal(true)}
                                className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition"
                            >
                                Learn More
                            </button>
                            <button
                                onClick={() => window.dispatchEvent(new Event('openPartnerModal'))}
                                className="premium-button bg-transparent text-white border border-white/10 hover:border-white/20 px-10 py-5 rounded-sm font-bold text-sm uppercase tracking-widest text-center"
                            >
                                Partner With Us
                            </button>
                        </div>

                        {/* Square Image Preview */}
                        {/* Full Image Preview - No Crop */}
                        <div className="mt-12 group max-w-4xl">
                            <div className="relative inline-block p-1 bg-gradient-to-br from-blue-400/20 to-transparent rounded-2xl shadow-[0_0_40px_rgba(96,165,250,0.2)]">
                                <div className="absolute inset-0 bg-blue-400/5 blur-2xl rounded-2xl transition-opacity group-hover:opacity-100 opacity-60"></div>
                                <img
                                    src={attIllustration}
                                    alt="ATT Consulting Preview"
                                    className="relative z-10 w-full max-w-[800px] h-auto rounded-2xl border-2 border-white/5 hover:scale-[1.005] transition-transform duration-500 shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ATTConsultingModal
                isOpen={showATTModal}
                onClose={() => setShowATTModal(false)}
            />

            <style jsx>{`
                /* Keep any needed styles here if any, otherwise can be empty or removed if no scoped styles left */
            `}</style>
        </section>
    );
};

export default ATTConsulting;
