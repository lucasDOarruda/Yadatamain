import React, { useState, useEffect } from 'react';

const PartnerWithUsModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    // Close on escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    // Prevent scrolling when modal is open
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

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Construct the mailto link
        const subject = encodeURIComponent(`Partnership Inquiry from ${formData.name}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Phone: ${formData.phone}\n` +
            `\nMessage:\n${formData.message}`
        );
        
        // Open default mail client
        window.location.href = `mailto:contact@yadata.com.au?subject=${subject}&body=${body}`;
        
        // Clear form and close modal
        setFormData({ name: '', email: '', phone: '', message: '' });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-yadata-navy/80 backdrop-blur-md transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative w-full max-w-2xl bg-[#1A1E2E] rounded-2xl border border-white/10 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">
                {/* Close Button */}
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors z-10"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Subtle Decorative Gradient */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-yadata-steel/10 rounded-full blur-[80px] pointer-events-none"></div>

                <div className="p-8 md:p-10 relative z-10">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center justify-center space-x-2 px-3 py-1 rounded-sm bg-white/5 border border-white/10 mb-4">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-yadata-steel">Let's Connect</span>
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
                            Partner <span className="text-yadata-steel">With Us</span>
                        </h2>
                        
                        <p className="text-sm text-gray-400 max-w-lg mx-auto font-light leading-relaxed">
                            Ready to transform your trade operations? Fill out the form below or email us directly at <a href="mailto:contact@yadata.com.au" className="text-yadata-steel hover:text-white transition-colors border-b border-yadata-steel/30 hover:border-white">contact@yadata.com.au</a>.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-5">
                            {/* Name Field */}
                            <div className="space-y-1.5">
                                <label htmlFor="name" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider">Contact Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-[#131622] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-yadata-steel focus:border-yadata-steel transition-all"
                                    placeholder="John Doe"
                                />
                            </div>

                            {/* Email Field */}
                            <div className="space-y-1.5">
                                <label htmlFor="email" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider">Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-[#131622] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-yadata-steel focus:border-yadata-steel transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        {/* Phone Field */}
                        <div className="space-y-1.5">
                            <label htmlFor="phone" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full bg-[#131622] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-yadata-steel focus:border-yadata-steel transition-all"
                                placeholder="+61 400 000 000"
                            />
                        </div>

                        {/* Message Field */}
                        <div className="space-y-1.5">
                            <label htmlFor="message" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider">Brief Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="3"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-[#131622] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-yadata-steel focus:border-yadata-steel transition-all resize-none"
                                placeholder="How can we help you?"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2 text-center">
                            <button
                                type="submit"
                                className="premium-button bg-yadata-steel text-yadata-navy hover:bg-white px-8 py-3.5 rounded-sm font-bold text-sm uppercase tracking-widest w-full transition-colors"
                            >
                                Send Request
                            </button>
                            <p className="mt-3 text-[11px] text-gray-500 uppercase tracking-widest">
                                Opens your default email client
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PartnerWithUsModal;
