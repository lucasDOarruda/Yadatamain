import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll Lock
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const scrollToSection = (e, id) => {
        setIsMenuOpen(false);
        if (isHome) {
            e.preventDefault();
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const navLinks = [
        { name: 'About', path: '/#about', id: 'about' },
        { name: 'Flagship', path: '/#flagship', id: 'flagship' },
        { name: 'Vision', path: '/#vision', id: 'vision' },
    ];

    return (
        <>
            <nav className={`fixed top-0 w-full z-[70] transition-all duration-500 ${isScrolled || isMenuOpen
                ? 'py-3 bg-[#3f424f]/60 backdrop-blur-xl border-b border-white/10 shadow-2xl'
                : 'py-6 bg-transparent'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <Link to="/" onClick={() => setIsMenuOpen(false)} className="group flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 group-hover:border-yadata-steel transition-colors">
                                    <img src="/logo.png" alt="YADATA Logo" className="w-full h-full object-cover" />
                                </div>
                                <span className="text-xl font-bold tracking-tight text-white">
                                    YADATA <span className="text-yadata-steel font-medium group-hover:text-yadata-blue transition-colors">GROUP</span>
                                </span>
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:block">
                            <div className="flex items-center space-x-8">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        onClick={(e) => scrollToSection(e, link.id)}
                                        className="relative text-gray-400 hover:text-white text-sm font-medium transition-colors group"
                                    >
                                        {link.name}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yadata-blue transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                ))}
                                <Link
                                    to="/founder"
                                    className={`text-sm font-medium transition-colors ${location.pathname === '/founder' ? 'text-white' : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    The Founder
                                </Link>
                                <a
                                    href="mailto:contactYadata@gmail.com"
                                    className="premium-button bg-white text-yadata-navy px-6 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-gray-100"
                                >
                                    Partner With Us
                                </a>
                            </div>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-white p-2 focus:outline-none z-[80]"
                                aria-label="Toggle menu"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {isMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16m-7 6h7" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Better Mobile Menu Overlay (Full Screen Router-like feel) */}
            <div className={`fixed inset-0 z-[60] bg-yadata-navy/98 backdrop-blur-3xl transition-all duration-500 md:hidden flex flex-col items-center justify-center ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}>
                <div className="w-full max-w-xs mx-auto flex flex-col space-y-8">
                    {navLinks.map((link, idx) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={(e) => scrollToSection(e, link.id)}
                            className={`text-3xl font-bold tracking-[0.1em] text-white transition-all duration-500 delay-[${idx * 100}ms] ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                }`}
                        >
                            <span className="text-yadata-steel text-sm mr-4 font-mono">0{idx + 1}</span>
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/founder"
                        onClick={() => setIsMenuOpen(false)}
                        className={`text-3xl font-bold tracking-[0.1em] text-white transition-all duration-500 delay-[300ms] ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}
                    >
                        <span className="text-yadata-steel text-sm mr-4 font-mono">04</span>
                        Founder
                    </Link>
                    <div className={`pt-8 transition-all duration-500 delay-[400ms] ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                        <a
                            href="mailto:contactYadata@gmail.com"
                            className="inline-block bg-white text-yadata-navy px-10 py-4 rounded-sm text-sm font-bold uppercase tracking-[0.3em] shadow-2xl hover:bg-yadata-steel transition-colors"
                        >
                            Partner With Us
                        </a>
                    </div>
                </div>

                {/* Decorative Pattern in Menu */}
                <div className="absolute inset-0 bg-dot-grid opacity-5 pointer-events-none"></div>
            </div>
        </>
    );
};

export default Navbar;
