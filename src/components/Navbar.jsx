import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e, id) => {
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
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
            ? 'py-3 bg-yadata-navy/95 backdrop-blur-md border-b border-white/10 shadow-lg'
            : 'py-6 bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Link to="/" className="group flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 group-hover:border-yadata-steel transition-colors">
                                <img src="/logo.png" alt="YADATA Logo" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">
                                YADATA <span className="text-yadata-steel font-medium group-hover:text-yadata-blue transition-colors">GROUP</span>
                            </span>
                        </Link>
                    </div>

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

                    {/* Mobile Menu Toggle (Simplified for now) */}
                    <div className="md:hidden flex items-center">
                        <button className="text-white p-2">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
