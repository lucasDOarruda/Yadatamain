import React from 'react';

const About = () => {
    const items = [
        { title: "Commercial workflows", icon: "📑" },
        { title: "Logistics execution", icon: "🚢" },
        { title: "Regulatory compliance", icon: "⚖️" },
        { title: "Digital commerce ecosystems", icon: "🌐" }
    ];

    return (
        <section id="about" className="py-24 bg-yadata-navy relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-yadata-blue mb-4">About Yadata</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                            Designing the backbone of modern industry.
                        </h3>
                        <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                            Yadata Pty Ltd is an Australian technology holding company focused on building operational infrastructure platforms.
                        </p>
                        <p className="text-lg text-gray-400 mb-10 leading-relaxed font-medium text-white/90">
                            Our approach is infrastructure-first — building the backbone that enables industries to operate more efficiently.
                        </p>
                    </div>

                    <div className="bg-yadata-slate/50 p-8 md:p-12 rounded-3xl border border-white/5 backdrop-blur-sm">
                        <h4 className="text-xl font-bold text-white mb-8">We design and operate systems that connect:</h4>
                        <div className="space-y-6">
                            {items.map((item, index) => (
                                <div key={index} className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-yadata-blue/30 transition-colors group">
                                    <div className="text-2xl w-12 h-12 flex items-center justify-center rounded-xl bg-yadata-navy border border-white/10 group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <span className="text-lg text-gray-200 font-medium">{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
