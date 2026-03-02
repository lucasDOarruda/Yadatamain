import React from 'react';

const Industries = () => {
    const industries = [
        {
            title: "Freight Forwarders",
            description: "Operational visibility and automation tools for global logistics coordination.",
            icon: (
                <div className="relative">
                    <svg className="w-10 h-10 text-yadata-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    <div className="absolute inset-0 bg-yadata-orange/10 rounded-full blur-xl group-hover:bg-yadata-orange/20 transition-all duration-500"></div>
                </div>
            )
        },
        {
            title: "Customs & Trade",
            description: "Documentation and compliance workflow systems to streamline regulatory processes.",
            icon: (
                <div className="relative">
                    <svg className="w-10 h-10 text-yadata-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div className="absolute inset-0 bg-yadata-orange/10 rounded-full blur-xl group-hover:bg-yadata-orange/20 transition-all duration-500"></div>
                </div>
            )
        },
        {
            title: "3PL Operators",
            description: "Inventory and execution dashboards designed for real-world warehouse operations.",
            icon: (
                <div className="relative">
                    <svg className="w-10 h-10 text-yadata-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    <div className="absolute inset-0 bg-yadata-orange/10 rounded-full blur-xl group-hover:bg-yadata-orange/20 transition-all duration-500"></div>
                </div>
            )
        }
    ];

    return (
        <section id="industries" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-yadata-steel mb-4">Built for Supply Chain & Trade</h2>
                    <h3 className="text-4xl font-bold text-yadata-navy max-w-2xl">
                        We understand the operational reality of global trade.
                    </h3>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {industries.map((item, index) => (
                        <div key={index} className="premium-card p-10 bg-white shadow-sm border border-yadata-navy/5 rounded-sm group relative overflow-hidden">
                            <div className="absolute left-0 top-0 w-1 h-full bg-yadata-steel opacity-10 group-hover:opacity-100 group-hover:bg-yadata-blue transition-all duration-300"></div>
                            <div className="text-4xl mb-6">{item.icon}</div>
                            <h4 className="text-xl font-bold text-yadata-navy mb-4 group-hover:text-yadata-steel transition-colors">
                                {item.title}
                            </h4>
                            <p className="text-gray-500 leading-relaxed font-light">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Industries;
