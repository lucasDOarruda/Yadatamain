import React from 'react';

const TinyGlobal = () => {
    const layers = [
        { layer: "Commercial", function: "Order & contract coordination" },
        { layer: "Logistics", function: "Freight execution & tracking" },
        { layer: "Regulatory", function: "Customs & documentation" },
        { layer: "Communication", function: "Real-time collaboration" }
    ];

    const features = [
        "Shipment execution",
        "Freight coordination",
        "Customs & regulatory documentation",
        "Client–operator collaboration",
        "Trade data visibility",
        "Predictive logistics intelligence (AI modules)"
    ];

    return (
        <section id="flagship" className="py-24 bg-white text-yadata-navy">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-block px-3 py-1 rounded-full bg-yadata-blue/10 text-yadata-blue text-xs font-bold uppercase tracking-widest mb-4">
                        Our Flagship Platform
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black mb-6">TinyGlobal</h2>
                    <p className="text-xl md:text-2xl font-medium max-w-4xl mx-auto leading-relaxed text-gray-700 italic border-l-4 border-yadata-blue pl-6 py-2">
                        "TinyGlobal is a unified trade execution infrastructure connecting commercial, logistics, and regulatory workflows."
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="bg-yadata-navy text-white p-8 md:p-12 rounded-[2rem] shadow-2xl overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-yadata-blue/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>

                        <h3 className="text-2xl font-bold mb-8 relative z-10">Unified Operational Layer</h3>
                        <div className="space-y-4 relative z-10">
                            {layers.map((item, index) => (
                                <div key={index} className="grid grid-cols-3 gap-4 py-4 border-b border-white/10 last:border-0 hover:bg-white/5 transition-colors px-4 -mx-4 rounded-xl">
                                    <span className="font-bold text-yadata-cyan">{item.layer}</span>
                                    <span className="col-span-2 text-gray-400">{item.function}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100">
                            <h4 className="text-xl font-bold mb-6 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-yadata-navy text-white flex items-center justify-center mr-3 text-sm">✓</span>
                                Core Integrations
                            </h4>
                            <ul className="grid sm:grid-cols-2 gap-4">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex items-start space-x-2 text-gray-600 font-medium italic">
                                        <span className="text-yadata-blue mt-1">•</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="p-6 bg-yadata-blue/5 rounded-2xl border border-yadata-blue/10">
                                <h5 className="font-bold text-yadata-navy mb-2">Target Market</h5>
                                <p className="text-sm text-gray-600">Freight forwarders, Customs brokers, 3PL operators, SME import/export, Global carriers.</p>
                            </div>
                            <div className="p-6 bg-yadata-navy rounded-2xl border border-white/5">
                                <h5 className="font-bold text-white mb-2">Strategic Vision</h5>
                                <p className="text-sm text-gray-400 italic">"The infrastructure layer that powers modern trade execution globally."</p>
                            </div>
                        </div>

                        <div className="pt-4 text-center lg:text-left">
                            <a href="https://tinyglobalop.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-yadata-blue font-bold text-lg hover:underline transition-all">
                                Visit tinyglobalop.com <span className="ml-2">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TinyGlobal;
