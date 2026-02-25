import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    const scrollToSection = (e, id) => {
        if (isHome) {
            e.preventDefault();
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <nav className="fixed top-0 w-full z-50 bg-yadata-navy/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center">
                        <Link to="/" className="text-2xl font-bold tracking-wider text-white">
                            🌐 YADATA <span className="text-yadata-blue font-light">GROUP</span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link
                                to="/#about"
                                onClick={(e) => scrollToSection(e, 'about')}
                                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                            >
                                About
                            </Link>
                            <Link
                                to="/#flagship"
                                onClick={(e) => scrollToSection(e, 'flagship')}
                                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                            >
                                Flagship
                            </Link>
                            <Link
                                to="/#vision"
                                onClick={(e) => scrollToSection(e, 'vision')}
                                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                            >
                                Vision
                            </Link>
                            <Link
                                to="/founder"
                                className={`${location.pathname === '/founder' ? 'text-yadata-cyan' : 'text-gray-300'} hover:text-white px-3 py-2 text-sm font-medium transition-colors`}
                            >
                                The Founder
                            </Link>
                            <a
                                href="mailto:lucas.arrudamiles@icloud.com"
                                className="bg-yadata-blue hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-semibold transition-all shadow-lg shadow-blue-500/20"
                            >
                                Partner With Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
