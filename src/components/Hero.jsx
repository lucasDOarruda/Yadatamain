import React from 'react';

const Hero = () => {
    return (
        <section className="relative min-height-[90vh] flex items-center pt-20 overflow-hidden bg-yadata-navy">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-yadata-blue/10 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-yadata-cyan/5 rounded-full blur-3xl opacity-30"></div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-yadata-blue/10 border border-yadata-blue/20 mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yadata-blue opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-yadata-blue"></span>
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-widest text-yadata-blue">Digital Infrastructure Group</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                        Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Unified Infrastructure</span> for Global Trade
                    </h1>

                    <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                        Yadata Pty Ltd is a technology holding company developing scalable platforms across logistics execution and digital ecosystems.
                    </p>

                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                        <button className="bg-white text-yadata-navy hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-transform hover:-translate-y-1 shadow-xl">
                            Explore Our Platforms
                        </button>
                        <a
                            href="mailto:lucas.arrudamiles@icloud.com"
                            className="bg-transparent text-white border border-white/20 hover:bg-white/5 px-8 py-4 rounded-lg font-bold text-lg transition-all text-center"
                        >
                            Partner With Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
