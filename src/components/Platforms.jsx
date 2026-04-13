import React from 'react';
import mtLogo from '../assets/images/moving_things_logo.png';
import mtScreen from '../assets/images/moving_things_mobile_1.png';
import tgLogo from '../assets/react.svg'; // Using react logo as placeholder if tg logo not found, or can use text

const Platforms = ({ onNext, onBack }) => {
    const platforms = [
        {
            id: 'tiny-global',
            tag: 'Our Flagship',
            name: 'TinyGlobal',
            accent: 'text-yadata-steel',
            bgAccent: 'bg-yadata-steel/5',
            borderAccent: 'border-white/5',
            description: 'Proprietary trade execution platform connecting commercial, logistics, and regulatory workflows.',
            features: [
                'Unified Operational Layer',
                'Freight & Supply Chain Execution',
                'Customs & Compliance Intelligence'
            ],
            link: 'https://tinyglobalop.com',
            image: null
        },
        {
            id: 'moving-things',
            tag: 'The Marketplace',
            name: 'MovingThings',
            accent: 'text-purple-500',
            bgAccent: 'bg-purple-500/5',
            borderAccent: 'border-purple-500/10',
            description: 'Premium removalist network & marketplace for verified professionals and moving clients.',
            features: [
                'Automated Quoting System',
                'Verified Removalist Network',
                'Escrow Payment Protection'
            ],
            link: 'https://www.movingthings.com.au/',
            image: mtScreen,
            logo: mtLogo
        }
    ];

    return (
        <section id="platforms" className="min-h-screen py-24 bg-yadata-navy text-white relative overflow-hidden flex flex-col justify-center">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[140px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-yadata-steel mb-4">Ecosystem Platforms</h2>
                    <h3 className="text-4xl md:text-5xl font-black tracking-tight">Built for <span className="text-white/40">Execution.</span></h3>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-stretch mb-16">
                    {platforms.map((platform) => (
                        <div 
                            key={platform.id} 
                            className={`group relative p-8 md:p-12 rounded-sm border ${platform.borderAccent} bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.04] flex flex-col justify-between overflow-hidden`}
                        >
                            {/* Inner Glow */}
                            <div className={`absolute -right-20 -bottom-20 w-64 h-64 ${platform.bgAccent} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

                            <div>
                                <div className="flex justify-between items-start mb-8">
                                    <div className="px-3 py-1 rounded-sm bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-[0.2em] text-gray-500">
                                        {platform.tag}
                                    </div>
                                    {platform.logo && <img src={platform.logo} alt="" className="w-8 h-8 rounded-sm opacity-60 group-hover:opacity-100 transition-opacity" />}
                                </div>

                                <h4 className="text-4xl font-bold mb-6 tracking-tight">
                                    {platform.name === 'MovingThings' ? (
                                        <>Moving<span className="text-purple-500">Things</span></>
                                    ) : platform.name}
                                </h4>

                                <p className="text-gray-400 text-lg font-light leading-relaxed mb-10 max-w-md">
                                    {platform.description}
                                </p>

                                <div className="space-y-4 mb-12">
                                    {platform.features.map((feature, i) => (
                                        <div key={i} className="flex items-center space-x-3 text-sm text-gray-300 font-light">
                                            <span className={`w-1 h-1 rounded-full ${platform.name === 'MovingThings' ? 'bg-purple-500' : 'bg-yadata-steel'}`}></span>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-between gap-8 pt-8 border-t border-white/5">
                                <a 
                                    href={platform.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="premium-button text-[10px] font-bold uppercase tracking-[0.2em] flex items-center space-x-3 hover:text-white transition-colors"
                                >
                                    <span>Enter Platform</span>
                                    <span>→</span>
                                </a>

                                {platform.image && (
                                    <div className="relative h-20 overflow-hidden rounded-lg group-hover:h-32 transition-all duration-500 hidden sm:block">
                                        <img 
                                            src={platform.image} 
                                            alt="" 
                                            className="w-24 md:w-32 h-auto opacity-40 group-hover:opacity-80 transition-all duration-500"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Row */}
                <div className="flex justify-between items-center max-w-4xl mx-auto border-t border-white/5 pt-12">
                    <button onClick={onBack} className="flex items-center space-x-4 text-white/40 hover:text-white transition-colors group">
                        <span className="text-lg group-hover:-translate-x-1 transition-transform">←</span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Back</span>
                    </button>
                    <button onClick={onNext} className="flex items-center space-x-4 text-yadata-cyan hover:text-white transition-colors group">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Next: Vision</span>
                        <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </div>
            </div>

            <style jsx>{`
                .premium-button {
                    position: relative;
                }
                .premium-button::after {
                    content: '';
                    position: absolute;
                    bottom: -2px;
                    left: 0;
                    width: 0;
                    height: 1px;
                    background: currentColor;
                    transition: width 0.3s ease;
                }
                .premium-button:hover::after {
                    width: 100%;
                }
            `}</style>
        </section>
    );
};

export default Platforms;
