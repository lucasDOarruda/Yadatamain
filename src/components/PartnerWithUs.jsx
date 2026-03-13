import React, { useState } from 'react';

const PartnerWithUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

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
        
        // Optional: clear form after 'submit'
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <section id="partner" className="py-24 relative overflow-hidden bg-yadata-navy text-white">
            {/* Subtle Gradient Backdrop */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] bg-yadata-steel/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 reveal active">
                    <div className="inline-flex items-center justify-center space-x-2 px-3 py-1 rounded-sm bg-white/5 border border-white/10 mb-6">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-yadata-steel">Let's Connect</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Partner <span className="text-yadata-steel">With Us</span>
                    </h2>
                    
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Ready to transform your trade operations? Reach out to our team at <a href="mailto:contact@yadata.com.au" className="text-yadata-steel hover:text-white transition-colors border-b border-yadata-steel/30 hover:border-white">contact@yadata.com.au</a> or fill out the form below.
                    </p>
                </div>

                <div className="bg-[#1A1E2E] rounded-2xl p-8 md:p-12 border border-white/5 shadow-2xl reveal active">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Name Field */}
                            <div className="space-y-2">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Contact Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-[#131622] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yadata-steel/50 focus:border-transparent transition-all"
                                    placeholder="John Doe"
                                />
                            </div>

                            {/* Email Field */}
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-[#131622] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yadata-steel/50 focus:border-transparent transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        {/* Phone Field */}
                        <div className="space-y-2">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full bg-[#131622] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yadata-steel/50 focus:border-transparent transition-all"
                                placeholder="+61 400 000 000"
                            />
                        </div>

                        {/* Message Field */}
                        <div className="space-y-2">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300">Brief Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-[#131622] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yadata-steel/50 focus:border-transparent transition-all resize-none"
                                placeholder="How can we help you?"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4 text-center">
                            <button
                                type="submit"
                                className="premium-button bg-yadata-steel text-yadata-navy hover:bg-white px-10 py-4 rounded-sm font-bold text-sm uppercase tracking-widest w-full md:w-auto transition-colors"
                            >
                                Send Request
                            </button>
                            <p className="mt-4 text-xs text-gray-500">
                                This will open your default email client to send the request.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default PartnerWithUs;
