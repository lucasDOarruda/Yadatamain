import Footer from './Footer';

const Vision = ({ onBack }) => {
    const values = [
        'Community before corporate hype',
        'Fair operational systems',
        'Low-cost accessible technology',
        'Real logistics and operational expertise',
        'Transparency in platform decisions',
        'Sustainable growth over aggressive monetisation',
        'Supporting workers, clients, neighbours, and local communities',
    ];

    return (
        <section id="vision" className="bg-yadata-navy text-white relative">

            {/* Hero */}
            <div className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-yadata-blue/10 rounded-full blur-[140px] pointer-events-none" />
                <div className="relative z-10 max-w-4xl mx-auto">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-yadata-cyan mb-6">Vision</p>
                    <h1 className="text-4xl md:text-6xl font-black leading-tight mb-8">
                        Our Vision
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
                        We believe technology should support communities —<br className="hidden md:block" /> not exploit them.
                    </p>
                </div>
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20">
                    <span className="text-[9px] uppercase tracking-widest font-bold">Scroll</span>
                    <div className="w-px h-8 bg-white/20" />
                </div>
            </div>

            {/* Body */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-24">

                {/* About */}
                <div className="grid md:grid-cols-2 gap-16 items-start border-t border-white/5 pt-24">
                    <div>
                        <p className="text-[9px] font-black uppercase tracking-[0.25em] text-yadata-steel mb-4">About Yadata</p>
                        <h2 className="text-3xl font-black leading-tight">
                            Built from real-world experience.
                        </h2>
                    </div>
                    <div className="space-y-5 text-gray-400 font-light leading-relaxed">
                        <p>
                            At Yadata, our goal is to build practical, low-cost platforms that solve real operational and social problems — without unnecessary complexity, subscriptions, or corporate overhead.
                        </p>
                        <p>
                            Our background comes from real-world logistics, removals, operations management, and technology implementation — not just theory. We understand the daily challenges faced by workers, small businesses, pet owners, and local communities because we've worked directly inside those industries.
                        </p>
                        <p>
                            We position ourselves as <span className="text-white font-medium">operational and technology mediators</span> — helping people and businesses find smarter, fairer, and more sustainable solutions without overpaying for hype-driven software or bloated systems.
                        </p>
                    </div>
                </div>

                {/* Platforms */}
                <div className="border-t border-white/5 pt-24">
                    <p className="text-[9px] font-black uppercase tracking-[0.25em] text-yadata-steel mb-12">Flagship Community Platforms</p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 border border-purple-500/15 bg-purple-500/5 rounded-sm">
                            <h3 className="text-xl font-bold mb-3">
                                Moving<span className="text-purple-400">Things</span>
                            </h3>
                            <p className="text-gray-400 font-light leading-relaxed text-sm">
                                A community-driven moving and logistics platform designed to keep costs low for clients while allowing movers to keep most of their earnings.
                            </p>
                        </div>
                        <div className="p-8 border border-amber-400/15 bg-amber-400/5 rounded-sm">
                            <h3 className="text-xl font-bold mb-3">
                                <span className="text-amber-400">Neighbour</span>Paws
                            </h3>
                            <p className="text-gray-400 font-light leading-relaxed text-sm">
                                A community-focused platform helping neighbours and pet owners reduce noise complaints, improve pet wellbeing, and create safer local environments.
                            </p>
                        </div>
                    </div>
                    <p className="text-gray-500 text-sm font-light mt-8 leading-relaxed">
                        Both platforms are intentionally designed to remain <span className="text-white">affordable and accessible</span>. The goal is sustainability — not excessive monetisation. We believe the people using a platform every day should also help shape its future — through user voting and transparent discussion.
                    </p>
                </div>

                {/* Values */}
                <div className="border-t border-white/5 pt-24">
                    <p className="text-[9px] font-black uppercase tracking-[0.25em] text-yadata-steel mb-12">What We Stand For</p>
                    <div className="space-y-0">
                        {values.map((v, i) => (
                            <div key={i} className="flex items-center gap-6 py-4 border-b border-white/5 group">
                                <span className="text-[9px] font-mono text-white/20 w-5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                                <span className="text-white/60 group-hover:text-white transition-colors text-sm font-light">{v}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Philosophy */}
                <div className="border-t border-white/5 pt-24 text-center">
                    <p className="text-[9px] font-black uppercase tracking-[0.25em] text-yadata-steel mb-12">Our Philosophy</p>
                    <div className="space-y-4">
                        <p className="text-2xl md:text-3xl font-black text-white/80">Less algorithm. <span className="text-white">More freedom.</span></p>
                        <p className="text-2xl md:text-3xl font-black text-white/80">Less hype. <span className="text-white">More practical solutions.</span></p>
                        <p className="text-lg text-gray-500 font-light mt-8">Built <em>with</em> the community — not just <em>for</em> the community.</p>
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-start items-center border-t border-white/5 pt-12">
                    <button onClick={onBack} className="flex items-center space-x-3 text-white/30 hover:text-white transition-colors group">
                        <span className="group-hover:-translate-x-1 transition-transform">←</span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Back</span>
                    </button>
                </div>
            </div>

            <Footer />
        </section>
    );
};

export default Vision;
