import Footer from './Footer';

const Founder = () => {
    return (
        <section id="founder" className="min-h-screen bg-yadata-navy text-white relative overflow-hidden flex flex-col">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-yadata-blue/5 rounded-full blur-3xl opacity-30"></div>

            <div className="flex-1 flex flex-col justify-center pt-32 pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* Photo Side */}
                        <div className="lg:w-1/3 flex justify-center">
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-gradient-to-tr from-yadata-blue to-yadata-cyan rounded-full opacity-20 group-hover:opacity-40 transition-opacity blur-xl"></div>
                                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                                    <img
                                        src={lucasPhoto}
                                        alt="Lucas Arruda"
                                        className="w-full h-full object-cover transition-all duration-700"
                                    />
                                </div>
                                <div className="absolute -bottom-4 -right-4 bg-yadata-blue text-white px-6 py-2 rounded-full font-bold text-sm shadow-xl">
                                    Founder & MD
                                </div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="lg:w-2/3">
                            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-yadata-cyan mb-4">The Founder</h2>
                            <h3 className="text-4xl md:text-5xl font-black mb-8">Lucas Arruda</h3>

                            <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-medium">
                                <p>
                                    Lucas Arruda is an Australian technology founder and infrastructure builder focused on designing integrated systems for trade and commerce.
                                </p>
                                <p>
                                    He is the Founder and Managing Director of Yadata Pty Ltd, where he leads the development of infrastructure-grade digital platforms that connect commercial, logistics, and regulatory workflows into unified execution environments.
                                </p>
                                <p className="italic border-l-2 border-yadata-blue pl-6 py-1 text-white/90">
                                    Lucas specialises in enterprise systems architecture, operational workflow design, and cloud-based platform infrastructure. His work centres on solving structural inefficiencies across industries by embedding technology directly into real-world operational processes.
                                </p>
                                <p>
                                    Through Yadata’s flagship platform, TinyGlobal, he is developing a unified trade execution infrastructure designed to support modern supply chain and trade environments. His approach prioritises durable system design, integration depth, and long-term scalability over surface-level applications.
                                </p>
                                <p>
                                    Lucas operates with a builder’s mindset — focused on creating foundational platforms that serve as operational backbones for industries rather than standalone tools.
                                </p>
                                <p>
                                    His long-term vision is to establish Australian-origin infrastructure platforms that scale globally and redefine how trade and digital commerce systems are executed.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </section>
    );
};

export default Founder;
