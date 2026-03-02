import React from 'react';

const WhatWeDo = () => {
    const services = [
        {
            name: "Custom web applications", icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            name: "Internal supply chain systems", icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            )
        },
        {
            name: "Import/export workflow tools", icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
            )
        },
        {
            name: "Client & operator dashboards", icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 3.055A9.003 9.003 0 0120.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
            )
        },
        {
            name: "Compliance & documentation", icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            )
        },
        {
            name: "Startup MVP platforms", icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        },
        {
            name: "Professional websites", icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h18" />
                </svg>
            )
        }
    ];

    return (
        <section id="services" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-dot-grid opacity-10"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-yadata-steel mb-4">What We Do</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                            Custom Software & Platforms <br />
                            <span className="text-yadata-steel font-lightitalic">Built for Execution</span>
                        </h3>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-xl">
                            Every system we build is designed around operational efficiency, automation, and long-term scalability. We don't just build apps; we build operational systems.
                        </p>
                    </div>
                    <div className="bg-yadata-navy/30 border border-white/5 p-8 md:p-12 rounded-sm backdrop-blur-sm">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            {services.map((service, index) => (
                                <li key={index} className="flex items-center space-x-4 text-gray-300 group">
                                    <div className="flex-shrink-0 text-yadata-cyan opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                                        {service.icon}
                                    </div>
                                    <span className="text-base font-light tracking-wide group-hover:text-white transition-colors">{service.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
