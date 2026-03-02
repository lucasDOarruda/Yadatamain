import React from 'react';

const WhyYadata = () => {
    const reasons = [
        {
            title: "Operational Experience",
            text: "Built by someone inside logistics execution. We understand the friction of real-world operations.",
            icon: (
                <div className="text-yadata-emerald/80 group-hover:text-yadata-emerald group-hover:scale-110 transition-all duration-300">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
            )
        },
        {
            title: "Infrastructure Architecture",
            text: "Systems structured for scale and longevity, not just quick fixes. Built with long-term system thinking.",
            icon: (
                <div className="text-yadata-emerald/80 group-hover:text-yadata-emerald group-hover:scale-110 transition-all duration-300">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                </div>
            ),
            stagger: true
        },
        {
            title: "Startup Friendly",
            text: "Flexible, high-speed builds for early-stage businesses needing to move from spreadsheets to systems.",
            icon: (
                <div className="text-yadata-emerald/80 group-hover:text-yadata-emerald group-hover:scale-110 transition-all duration-300">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
            )
        }
    ];

    return (
        <section id="why-yadata" className="py-24 bg-yadata-navy relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-yadata-steel mb-4">Why Yadata</h2>
                    <h3 className="text-4xl font-bold text-white">Visual Differentiation by Design</h3>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-start">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className={`premium-card p-10 bg-yadata-charcoal/40 rounded-sm border border-white/5 hover:border-yadata-steel/30 transition-all duration-500 ${reason.stagger ? 'md:mt-12' : ''}`}
                        >
                            <div className="text-3xl mb-6">{reason.icon}</div>
                            <h4 className="text-xl font-bold text-white mb-4">{reason.title}</h4>
                            <p className="text-gray-400 leading-relaxed font-light text-sm">
                                {reason.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const Vision = () => {
    return (
        <section id="vision" className="py-24 bg-yadata-navy text-white text-center relative overflow-hidden">
            {/* Visual depth elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-gradient from-yadata-blue/20 via-transparent to-transparent opacity-30 pointer-events-none"></div>

            <div className="max-w-5xl mx-auto px-4 relative z-10">
                <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-yadata-cyan mb-8">Vision</h2>
                <p className="text-3xl md:text-6xl font-black leading-tight mb-12">
                    To become the Australian-origin infrastructure group powering the next generation of global trade.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-yadata-blue to-yadata-cyan mx-auto mb-16"></div>

                <div className="bg-white/5 border border-white/10 p-12 rounded-[3.5rem] backdrop-blur-md inline-block max-w-2xl">
                    <h3 className="text-xl font-bold text-yadata-cyan mb-4">Strategic Positioning</h3>
                    <p className="text-2xl italic text-gray-300 leading-relaxed">
                        "Yadata Pty Ltd is a digital infrastructure group building execution platforms for trade and commerce industries."
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WhyYadata;
