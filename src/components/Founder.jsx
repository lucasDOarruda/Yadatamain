import React from 'react';
import lucasPhoto from '../assets/IMG_1420.JPG';
import Footer from './Footer';

const focusAreas = [
    'Logistics & operational systems',
    'Community-first platform design',
    'Workflow automation',
    'Marketplace infrastructure',
    'Supply chain and trade operations',
    'Low-cost scalable technology',
    'Social and operational applications',
    'Transparent governance models',
];

const Founder = () => {
    return (
        <section id="founder" className="bg-yadata-navy text-white relative">

            {/* Hero */}
            <div className="min-h-screen flex flex-col justify-center pt-28 pb-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yadata-blue/5 rounded-full blur-[140px] pointer-events-none" />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">

                        {/* Photo */}
                        <div className="lg:w-72 shrink-0 flex flex-col items-center lg:items-start gap-6">
                            <div className="relative group">
                                <div className="absolute -inset-3 bg-gradient-to-tr from-yadata-blue/20 to-yadata-cyan/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border border-white/10 shadow-2xl">
                                    <img
                                        src={lucasPhoto}
                                        alt="Lucas Arruda"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div>
                                <p className="text-[9px] font-black uppercase tracking-[0.25em] text-yadata-steel mb-1">The Founder</p>
                                <h1 className="text-3xl font-black">Lucas Arruda</h1>
                                <p className="text-yadata-cyan text-sm font-medium mt-1">Founder & Managing Director</p>
                            </div>
                        </div>

                        {/* Intro */}
                        <div className="flex-1 space-y-6 text-gray-300 font-light leading-relaxed">
                            <p className="text-lg md:text-xl text-white/80">
                                Lucas Arruda is an Australian technology founder, logistics operator, and community-focused builder creating practical digital infrastructure that supports real operational and social environments.
                            </p>
                            <p>
                                As the Founder and Managing Director of Yadata, Lucas combines hands-on experience in logistics, supply chain operations, removals, workforce coordination, and technology development to design platforms that solve everyday operational problems — without unnecessary complexity or inflated costs.
                            </p>
                            <p>
                                His background spans global logistics coordination, warehouse and transport operations, workflow management, and full-stack platform development — giving him a unique <span className="text-white">operational-first approach</span> to technology implementation.
                            </p>
                            <p>
                                Rather than building software purely around trends or hype, Lucas focuses on creating sustainable systems that improve transparency, accessibility, and community participation across industries.
                            </p>

                            {/* Quote */}
                            <blockquote className="border-l-2 border-yadata-blue pl-6 py-2 text-white/90 italic text-lg">
                                "Technology should reduce friction for people and businesses — not create more layers, subscriptions, and complexity."
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>

            {/* Platforms */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                <div className="border-t border-white/5 pt-20 mb-20">
                    <p className="text-[9px] font-black uppercase tracking-[0.25em] text-yadata-steel mb-10">Community Platforms</p>
                    <p className="text-gray-400 font-light leading-relaxed max-w-3xl mb-10">
                        Lucas leads the development of Yadata's community-driven platforms, with major financial and platform-impacting decisions intended to involve direct feedback and voting from platform users themselves.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-8 border border-purple-500/15 bg-purple-500/5 rounded-sm">
                            <h3 className="text-lg font-bold mb-3">
                                Moving<span className="text-purple-400">Things</span>
                            </h3>
                            <p className="text-gray-400 font-light text-sm leading-relaxed">
                                A low-cost moving and logistics marketplace designed to help movers retain more of their earnings while simplifying operational workflows for clients and operators.
                            </p>
                        </div>
                        <div className="p-8 border border-amber-400/15 bg-amber-400/5 rounded-sm">
                            <h3 className="text-lg font-bold mb-3">
                                <span className="text-amber-400">Neighbour</span>Paws
                            </h3>
                            <p className="text-gray-400 font-light text-sm leading-relaxed">
                                A social-community platform focused on improving relationships between neighbours and pet owners through preventative care, alerts, and local support systems.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Core Focus Areas */}
                <div className="border-t border-white/5 pt-20 mb-20">
                    <p className="text-[9px] font-black uppercase tracking-[0.25em] text-yadata-steel mb-10">Core Focus Areas</p>
                    <div className="grid sm:grid-cols-2 gap-0">
                        {focusAreas.map((area, i) => (
                            <div key={i} className="flex items-center gap-5 py-4 border-b border-white/5 group">
                                <span className="text-[9px] font-mono text-white/20 w-5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                                <span className="text-sm text-white/60 group-hover:text-white transition-colors font-light">{area}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Philosophy */}
                <div className="border-t border-white/5 pt-20 text-center">
                    <p className="text-[9px] font-black uppercase tracking-[0.25em] text-yadata-steel mb-10">Philosophy</p>
                    <div className="space-y-4">
                        <p className="text-2xl md:text-3xl font-black text-white/80">Less hype. <span className="text-white">More operational value.</span></p>
                        <p className="text-2xl md:text-3xl font-black text-white/80">Less corporate overhead. <span className="text-white">More community ownership.</span></p>
                        <p className="text-lg text-gray-500 font-light mt-6 italic">Built with the people using the platform every day.</p>
                    </div>
                </div>
            </div>

            <Footer />
        </section>
    );
};

export default Founder;
