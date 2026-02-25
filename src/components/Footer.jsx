import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-yadata-navy pt-20 pb-10 border-t border-white/5 text-gray-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-2">
                        <span className="text-2xl font-bold tracking-wider text-white mb-6 block">
                            🌐 YADATA <span className="text-yadata-blue font-light">GROUP</span>
                        </span>
                        <p className="max-w-md text-lg italic">
                            Building the digital infrastructure that powers the next generation of global trade and commerce ecosystems.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-6">Platforms</h4>
                        <ul className="space-y-4">
                            <li><a href="https://tinyglobalop.com" className="hover:text-yadata-cyan transition-colors">TinyGlobal</a></li>
                            <li><a href="http://spinncircle.com/" className="hover:text-yadata-cyan transition-colors">Spinn Circle</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><Link to="/#about" className="hover:text-yadata-cyan transition-colors">About Us</Link></li>
                            <li><Link to="/founder" className="hover:text-yadata-cyan transition-colors">The Founder</Link></li>
                            <li><Link to="/#vision" className="hover:text-yadata-cyan transition-colors">Vision</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium uppercase tracking-widest">
                    <p>© {new Date().getFullYear()} Yadata Pty Ltd. All Rights Reserved.</p>
                    <p>Australian-Origin Infrastructure</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
