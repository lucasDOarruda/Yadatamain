import React, { useEffect } from 'react';

const ATTConsultingModal = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!isOpen) return null;

    const services = [
        {
            title: "ATT Readiness Assessment",
            description: "We review your supply chain governance, trade controls, record keeping, and risk frameworks to identify gaps against ABF Trusted Trader requirements."
        },
        {
            title: "ATT Implementation & Documentation",
            description: "We build operational procedures, SOPs, risk registers and internal controls required for accreditation."
        },
        {
            title: "Digital Compliance via TinyGlobalOp",
            description: (
                <>
                    <p className="mb-2">Clients use the TinyGlobalOp platform to:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Track compliance controls</li>
                        <li>Manage supply chain security evidence</li>
                        <li>Monitor trade performance and risk</li>
                        <li>Centralise documentation and audit trails</li>
                        <li>Maintain ongoing ATT obligations</li>
                    </ul>
                </>
            )
        },
        {
            title: "ABF Engagement Support",
            description: "We guide organisations through application submission, validation preparation, and site visit readiness, including continuous improvement post-accreditation."
        }
    ];

    return (
        <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[100] p-4 transition-opacity duration-300"
            onClick={onClose}
        >
            <div
                className="bg-[#0b1b2f] max-w-3xl w-full rounded-2xl p-6 md:p-10 border border-white/10 relative max-h-[90vh] overflow-y-auto animate-fade-in"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors p-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <h3 className="text-3xl font-bold text-white mb-8">
                    What We Deliver
                </h3>

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                    {services.map((service, index) => (
                        <div key={index} className="mb-6">
                            <h4 className="text-blue-400 font-semibold text-lg mb-2">
                                {service.title}
                            </h4>
                            <div className="text-white/70 text-sm md:text-base leading-relaxed">
                                {service.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-fade-in {
                    animation: fade-in 0.3s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default ATTConsultingModal;
