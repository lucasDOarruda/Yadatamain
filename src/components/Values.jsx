import React from 'react';

const WhyYadata = () => {
    const reasons = [
        {
            id: "01",
            title: "Infrastructure Over Apps",
            text: "We build operational systems — not surface-level applications. Our platforms are the durable backbone of trade."
        },
        {
            id: "02",
            title: "Cross-Platform Architecture",
            text: "Shared components reduce cost, increase speed, and maintain mission-critical consistency across the portfolio."
        },
        {
            id: "03",
            title: "Long-Term Industrial Focus",
            text: "We prioritise durable industries: global trade, supply chain, and digital commerce ecosystems."
        }
    ];

    return (
        <section className="py-24 bg-white text-yadata-navy">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-black mb-16">Why Yadata?</h2>
                <div className="grid md:grid-cols-3 gap-12">
                    {reasons.map((reason, index) => (
                        <div key={index} className="relative p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-2xl transition-all duration-500 group border border-transparent hover:border-gray-100">
                            <span className="text-6xl font-black text-gray-200 group-hover:text-yadata-blue/20 absolute top-4 right-8 transition-colors">
                                {reason.id}
                            </span>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-4 pr-12">{reason.title}</h3>
                                <p className="text-gray-600 leading-relaxed font-medium">
                                    {reason.text}
                                </p>
                            </div>
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
