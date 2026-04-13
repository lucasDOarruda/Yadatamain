import React, { useState, useEffect } from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
    useEffect(() => {
        if (isOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[100] p-4 animate-fade-in"
            onClick={onClose}
        >
            <div 
                className="bg-yadata-navy border border-white/10 max-w-4xl w-full rounded-sm p-8 md:p-12 relative max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    onClick={onClose}
                    className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h3 className="text-3xl font-bold mb-10 text-white tracking-tight">{title}</h3>
                {children}
            </div>
            <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fade-in {
                    animation: fade-in 0.3s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

const InsightButtons = () => {
    const [activeModal, setActiveModal] = useState(null);

    const industries = [
        { title: "Freight Forwarders", desc: "Operational visibility and automation tools for global logistics coordination." },
        { title: "Customs & Trade", desc: "Documentation and compliance workflow systems to streamline regulatory processes." },
        { title: "3PL Operators", desc: "Inventory and execution dashboards designed for real-world warehouse operations." }
    ];

    const values = [
        { title: "Operational Experience", desc: "Built by someone inside logistics execution. We understand the friction of real-world operations." },
        { title: "Infrastructure Architecture", desc: "Systems structured for scale and longevity, not just quick fixes. Built with long-term system thinking." },
        { title: "Startup Friendly", desc: "Flexible, high-speed builds for early-stage businesses needing to move from spreadsheets to systems." }
    ];

    return (
        <section className="py-12 bg-yadata-charcoal/20 border-t border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                    <button 
                        onClick={() => setActiveModal('operational')}
                        className="group w-full md:w-auto px-10 py-6 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 transition-all flex items-center justify-between gap-12"
                    >
                        <div className="text-left">
                            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-yadata-steel mb-1 block">Logistics Reality</span>
                            <span className="text-sm font-bold text-white uppercase tracking-widest">Operational Reality</span>
                        </div>
                        <span className="text-yadata-steel group-hover:translate-x-1 transition-transform">→</span>
                    </button>

                    <button 
                        onClick={() => setActiveModal('visual')}
                        className="group w-full md:w-auto px-10 py-6 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 transition-all flex items-center justify-between gap-12"
                    >
                        <div className="text-left">
                            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-yadata-emerald mb-1 block">Design Vision</span>
                            <span className="text-sm font-bold text-white uppercase tracking-widest">Visual Differentiation</span>
                        </div>
                        <span className="text-yadata-emerald group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </div>
            </div>

            {/* Modal: Operational Reality */}
            <Modal 
                isOpen={activeModal === 'operational'} 
                onClose={() => setActiveModal(null)} 
                title="Operational Reality of Global Trade"
            >
                <div className="grid md:grid-cols-3 gap-8">
                    {industries.map((item, i) => (
                        <div key={i} className="p-8 bg-white/5 border border-white/5 rounded-sm">
                            <h4 className="text-xl font-bold mb-4 text-yadata-steel">{item.title}</h4>
                            <p className="text-gray-400 text-sm font-light leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Modal>

            {/* Modal: Visual Differentiation */}
            <Modal 
                isOpen={activeModal === 'visual'} 
                onClose={() => setActiveModal(null)} 
                title="Visual Differentiation by Design"
            >
                <div className="grid md:grid-cols-3 gap-8">
                    {values.map((item, i) => (
                        <div key={i} className="p-8 bg-white/5 border border-white/5 rounded-sm">
                            <h4 className="text-xl font-bold mb-4 text-yadata-emerald">{item.title}</h4>
                            <p className="text-gray-400 text-sm font-light leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Modal>
        </section>
    );
};

export default InsightButtons;
