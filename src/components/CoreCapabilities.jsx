import React, { useState } from 'react';
import attIllustration from '../assets/images/att_consulting.png';
import ATTConsultingModal from './ATTConsultingModal';

const CoreCapabilities = ({ onNext, onBack }) => {
    const [showATTModal, setShowATTModal] = useState(false);

    const softwareServices = [
        "Custom web applications",
        "Internal supply chain systems",
        "Import/export workflow tools",
        "Client & operator dashboards",
        "Compliance & documentation",
        "Startup MVP platforms",
        "Professional websites"
    ];

    return (
        <section id="capabilities" className="min-h-screen py-24 bg-yadata-navy text-white relative overflow-hidden flex flex-col justify-center">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-yadata-steel mb-4">Core Capabilities</h2>
                    <h3 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                        Building the System <br />
                        <span className="text-white/40">Behind Your Business.</span>
                    </h3>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-stretch mb-16">
                    {/* Left: Custom Software */}
                    <div className="bg-yadata-charcoal/40 border border-white/5 p-8 md:p-12 rounded-sm backdrop-blur-sm flex flex-col justify-between group hover:border-yadata-steel/20 transition-all duration-500">
                        <div>
                            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm bg-yadata-steel/10 border border-yadata-steel/20 mb-8">
                                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-yadata-steel">Development</span>
                            </div>
                            <h4 className="text-2xl font-bold mb-4">Custom Software & <span className="text-yadata-steel">Platforms</span></h4>
                            <p className="text-gray-400 font-light leading-relaxed mb-8 text-base">
                                We design and build high-performance operational systems tailored for trade, logistics, and fast-moving startups.
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                                {softwareServices.map((service, i) => (
                                    <li key={i} className="flex items-center space-x-3 text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                                        <span className="w-1 h-1 rounded-full bg-yadata-steel/40"></span>
                                        <span className="font-light tracking-wide">{service}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <button 
                            onClick={() => window.dispatchEvent(new Event('openPartnerModal'))}
                            className="w-full sm:w-auto px-8 py-4 bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-yadata-steel hover:text-white transition-all text-center"
                        >
                            Start a Project
                        </button>
                    </div>

                    {/* Right: ATT Consulting */}
                    <div className="bg-yadata-charcoal/40 border border-white/5 p-8 md:p-12 rounded-sm backdrop-blur-sm flex flex-col justify-between group hover:border-blue-500/20 transition-all duration-500">
                        <div>
                            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm bg-blue-500/10 border border-blue-500/20 mb-8">
                                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-400">Compliance</span>
                            </div>
                            <h4 className="text-2xl font-bold mb-4 text-white">Become an <span className="text-blue-400">Accredited Trusted Trader</span></h4>
                            <p className="text-gray-400 font-light leading-relaxed mb-8 text-base">
                                End-to-end consulting for ABF alignment—leveraging the TinyGlobal infrastructure for seamless compliance.
                            </p>
                            
                            <div className="relative group/img overflow-hidden rounded-sm border border-white/5 mb-8">
                                <img 
                                    src={attIllustration} 
                                    alt="ATT Dashboard" 
                                    className="w-full h-auto grayscale-[0.5] group-hover/img:grayscale-0 transition-all duration-700"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button 
                                onClick={() => setShowATTModal(true)}
                                className="flex-1 px-8 py-4 bg-blue-600/20 text-blue-400 border border-blue-400/20 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-blue-600 hover:text-white transition-all text-center"
                            >
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>

                {/* Navigation Row */}
                <div className="flex justify-between items-center max-w-4xl mx-auto border-t border-white/5 pt-12">
                    <button onClick={onBack} className="flex items-center space-x-4 text-white/40 hover:text-white transition-colors group">
                        <span className="text-lg group-hover:-translate-x-1 transition-transform">←</span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Back</span>
                    </button>
                    <button onClick={onNext} className="flex items-center space-x-4 text-yadata-steel hover:text-white transition-colors group">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Next: Ecosystem Platforms</span>
                        <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </div>
            </div>

            <ATTConsultingModal
                isOpen={showATTModal}
                onClose={() => setShowATTModal(false)}
            />
        </section>
    );
};

export default CoreCapabilities;
