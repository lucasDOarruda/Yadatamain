import React from 'react';

const SpinnCircle = () => {
    const points = [
        "Digital engagement systems",
        "Platform-based network interactions",
        "Community-driven commerce"
    ];

    return (
        <section className="py-24 bg-yadata-slate relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-yadata-navy to-yadata-slate opacity-50"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="md:w-1/2">
                        <div className="w-24 h-24 bg-gradient-to-tr from-yadata-blue to-yadata-cyan rounded-3xl mb-8 flex items-center justify-center text-4xl shadow-2xl animate-pulse">
                            🌐
                        </div>
                        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-yadata-cyan mb-4">Portfolio Platform</h2>
                        <h3 className="text-4xl md:text-5xl font-black text-white mb-6">Spinn Circle</h3>
                        <p className="text-lg text-gray-300 mb-8 leading-relaxed italic">
                            Spinn Circle operates as a digital ecosystem platform within the Yadata portfolio. While TinyGlobal focuses on trade execution infrastructure, Spinn Circle supports the human side of commerce.
                        </p>
                        <div className="space-y-4">
                            {points.map((point, index) => (
                                <div key={index} className="flex items-center space-x-3 text-white">
                                    <div className="w-5 h-5 rounded-full border-2 border-yadata-cyan flex items-center justify-center p-1">
                                        <div className="w-full h-full bg-yadata-cyan rounded-full"></div>
                                    </div>
                                    <span className="text-lg font-medium">{point}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10">
                            <a href="http://spinncircle.com/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-yadata-cyan text-yadata-navy font-bold rounded-xl hover:bg-white transition-colors">
                                spinncircle.com
                            </a>
                        </div>
                    </div>

                    <div className="md:w-1/2 relative group">
                        <div className="absolute inset-0 bg-yadata-blue/20 blur-3xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-700"></div>
                        <div className="relative bg-yadata-navy/50 p-1 rounded-[2.5rem] border border-white/10 backdrop-blur-xl">
                            <div className="bg-yadata-navy/80 rounded-[2.4rem] p-12 text-center aspect-square flex flex-col justify-center border border-white/5">
                                <span className="text-8xl mb-6">🌀</span>
                                <span className="text-2xl font-bold text-white tracking-widest uppercase">Ecosystem Layer</span>
                                <div className="mt-8 flex justify-center space-x-2">
                                    <div className="w-2 h-2 rounded-full bg-yadata-cyan animate-bounce"></div>
                                    <div className="w-2 h-2 rounded-full bg-yadata-blue animate-bounce delay-100"></div>
                                    <div className="w-2 h-2 rounded-full bg-white animate-bounce delay-200"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpinnCircle;
