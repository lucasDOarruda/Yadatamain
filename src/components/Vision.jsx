import Footer from './Footer';

const Vision = ({ onBack }) => {
    return (
        <section id="vision" className="min-h-screen bg-yadata-navy text-white text-center relative overflow-hidden flex flex-col">
            {/* Visual depth elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-gradient from-yadata-blue/20 via-transparent to-transparent opacity-30 pointer-events-none"></div>

            <div className="flex-1 flex flex-col justify-center items-center py-24">
                <div className="max-w-5xl mx-auto px-4 relative z-10 w-full">
                    <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-yadata-cyan mb-8">Vision</h2>
                    <p className="text-3xl md:text-6xl font-black leading-tight mb-12">
                        To become the Australian-origin infrastructure group powering the next generation of global trade.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-yadata-blue to-yadata-cyan mx-auto mb-16"></div>

                    <div className="bg-white/5 border border-white/10 p-12 rounded-[3.5rem] backdrop-blur-md inline-block max-w-2xl mb-16">
                        <h3 className="text-xl font-bold text-yadata-cyan mb-4">Strategic Positioning</h3>
                        <p className="text-2xl italic text-gray-300 leading-relaxed">
                            "Yadata Pty Ltd is a digital infrastructure group building execution platforms for trade and commerce industries."
                        </p>
                    </div>

                    {/* Navigation Row */}
                    <div className="max-w-4xl mx-auto border-t border-white/5 pt-12 flex justify-start">
                        <button onClick={onBack} className="flex items-center space-x-4 text-white/40 hover:text-white transition-colors group">
                            <span className="text-lg group-hover:-translate-x-1 transition-transform">←</span>
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Back</span>
                        </button>
                    </div>
                </div>
            </div>
            
            <Footer />
        </section>
    );
};

export default Vision;
