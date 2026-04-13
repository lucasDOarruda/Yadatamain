import React from 'react';
import logo from '../assets/images/moving_things_logo.png';
import screen1 from '../assets/images/moving_things_mobile_1.png';
import screen2 from '../assets/images/moving_things_mobile_2.png';

const MovingThings = () => {
    return (
        <section id="moving-things" className="py-24 bg-yadata-charcoal relative overflow-hidden text-white border-t border-white/5">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left: Content (Simplified) */}
                    <div className="lg:w-1/2">
                        <div className="inline-flex items-center space-x-3 px-3 py-1 bg-purple-500/10 border border-purple-500/20 mb-8">
                            <img src={logo} alt="MT" className="w-5 h-5 rounded-sm" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-400">Yadata Platform</span>
                        </div>

                        <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-8">
                            Moving<span className="text-purple-500 font-black">Things</span>
                        </h2>

                        <p className="text-lg text-gray-400 mb-12 max-w-xl font-light leading-relaxed">
                            Australia's premium removalist network. A unified marketplace connecting clients with verified moving professionals and independent removalists.
                        </p>

                        <div className="grid grid-cols-2 gap-8 mb-12">
                            <div>
                                <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-3">Removalists</h4>
                                <p className="text-gray-500 text-sm font-light">Direct quoting & automated scheduling.</p>
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-3">Clients</h4>
                                <p className="text-gray-500 text-sm font-light">Verified movers & escrow protection.</p>
                            </div>
                        </div>

                        <a 
                            href="https://www.movingthings.com.au/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-4 bg-white text-black px-8 py-4 rounded-sm font-bold text-[10px] uppercase tracking-widest hover:bg-purple-50 transition-all group"
                        >
                            <span>Visit Platform</span>
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </div>

                    {/* Right: Side-by-Side Mobile Screens */}
                    <div className="lg:w-1/2 flex justify-center items-center gap-4 sm:gap-8">
                        {/* Screen 1 */}
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-purple-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <img 
                                src={screen1} 
                                alt="Marketplace Screen" 
                                className="w-40 md:w-56 h-auto rounded-[2rem] border border-white/10 shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        {/* Screen 2 */}
                        <div className="relative group mt-12">
                            <div className="absolute -inset-4 bg-purple-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <img 
                                src={screen2} 
                                alt="Messaging Screen" 
                                className="w-40 md:w-56 h-auto rounded-[2rem] border border-white/10 shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MovingThings;
