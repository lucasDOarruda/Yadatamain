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
        "Predictive logistics intelligence"
    ];

    return (
        <section id="flagship" className="py-24 bg-yadata-navy text-white relative overflow-hidden">
            {/* Subtle Backdrop Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yadata-steel/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-yadata-steel mb-6">Our Flagship Platform</h2>
                    <div className="relative inline-block">
                        <h3 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">TinyGlobal</h3>
                        <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yadata-steel to-transparent overflow-hidden">
                            <div className="w-full h-full bg-white/20 animate-[shimmer_3s_infinite]"></div>
                        </div>
                    </div>
                    <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mt-10 font-light leading-relaxed">
                        TinyGlobal is our proprietary trade execution platform connecting commercial, logistics, and regulatory workflows. It reflects our long-term vision for unified supply chain infrastructure.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="bg-yadata-charcoal/30 border border-white/5 p-8 md:p-12 rounded-sm backdrop-blur-sm">
                        <h4 className="text-xl font-bold mb-8 text-yadata-steel">Unified Operational Layer</h4>
                        <div className="space-y-6">
                            {layers.map((item, index) => (
                                <div key={index} className="flex justify-between items-center py-4 border-b border-white/5 last:border-0">
                                    <span className="font-bold text-white tracking-wide">{item.layer}</span>
                                    <span className="text-gray-400 text-sm italic">{item.function}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-10">
                        <div className="grid sm:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center space-x-3 text-gray-300">
                                    <span className="w-1.5 h-1.5 bg-yadata-steel rounded-full"></span>
                                    <span className="text-sm font-light tracking-wide">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="p-8 bg-yadata-steel/5 border border-yadata-steel/10 rounded-sm">
                            <p className="text-gray-400 italic text-sm leading-relaxed">
                                "The infrastructure layer that powers modern trade execution globally. Built for those who move the world's goods."
                            </p>
                        </div>

                        <div className="flex justify-center lg:justify-start">
                            <a href="https://tinyglobalop.com" target="_blank" rel="noopener noreferrer" className="premium-button inline-flex items-center space-x-3 text-white border border-white/10 px-8 py-4 rounded-sm text-xs font-bold uppercase tracking-widest">
                                <span>Visit tinyglobalop.com</span>
                                <span className="text-lg">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TinyGlobal;
