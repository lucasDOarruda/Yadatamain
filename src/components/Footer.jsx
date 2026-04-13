import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-yadata-navy pt-20 pb-10 border-t border-white/5 text-gray-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-2">
                        <Link to="/" className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10">
                                <img src="/logo.png" alt="YADATA Logo" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-white">
                                YADATA <span className="text-yadata-steel font-medium">GROUP</span>
                            </span>
                        </Link>
                        <p className="max-w-md text-lg italic font-light">
                            Building the digital infrastructure that powers the next generation of global trade and commerce ecosystems.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Platforms</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a href="https://tinyglobalop.com" className="hover:text-white transition-colors">TinyGlobal</a></li>
                            <li><a href="https://www.movingthings.com.au/" className="hover:text-white transition-colors">MovingThings</a></li>
                            <li><a href="http://spinncircle.com/" className="hover:text-white transition-colors">Spinn Circle</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Company</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link to="/#about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/founder" className="hover:text-white transition-colors">The Founder</Link></li>
                            <li><Link to="/#vision" className="hover:text-white transition-colors">Vision</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-yadata-steel">
                    <p>© {new Date().getFullYear()} Yadata Pty Ltd. All Rights Reserved.</p>
                    <p>Australian-Origin Infrastructure</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
