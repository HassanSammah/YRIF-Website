import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';
import logo from '../../assets/images/logo_dark.png';

const Footer = () => {
    return (
        <footer id="contact" className="bg-brand-navy text-white pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div>
                        <img src={logo} alt="YRIF" className="h-12 mb-6 brightness-0 invert" />
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                            Empowering Tanzanian youth to participate in research, innovation, and
                            knowledge generation aligned with national development priorities.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com/yriftz" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-brand-teal transition-colors"><Facebook size={20} /></a>
                            <a href="https://twitter.com/yriftz" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-brand-teal transition-colors"><Twitter size={20} /></a>
                            <a href="https://linkedin.com/company/yriftz" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-brand-teal transition-colors"><Linkedin size={20} /></a>
                            <a href="https://youtube.com/@yriftz" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-brand-teal transition-colors"><Youtube size={20} /></a>
                        </div>
                    </div>

                    {/* Organization */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Organization</h4>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li><a href="/#about"    className="hover:text-brand-teal transition-colors">About Us</a></li>
                            <li><a href="/#partners" className="hover:text-brand-teal transition-colors">Our Partners</a></li>
                            <li><a href="/#news"     className="hover:text-brand-teal transition-colors">News & Updates</a></li>
                            <li><a href="/contact"   className="hover:text-brand-teal transition-colors">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Platform links → main YRIF app */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Platform</h4>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li><a href="/dashboard"        className="hover:text-brand-teal transition-colors">Research Portal</a></li>
                            <li><a href="/research/submit"  className="hover:text-brand-teal transition-colors">Submit Paper</a></li>
                            <li><a href="/competitions"     className="hover:text-brand-teal transition-colors">Innovation Grants</a></li>
                            <li><a href="/mentors"          className="hover:text-brand-teal transition-colors">Mentorship Program</a></li>
                            <li><a href="/resources"        className="hover:text-brand-teal transition-colors">Library</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li className="flex items-start space-x-3">
                                <MapPin size={18} className="text-brand-teal mt-0.5 flex-shrink-0" />
                                <span>Dar es Salaam, Tanzania</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={18} className="text-brand-teal flex-shrink-0" />
                                <span>+255 XXX XXX XXX</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={18} className="text-brand-teal flex-shrink-0" />
                                <a href="mailto:info@yriftz.org" className="hover:text-brand-teal transition-colors">
                                    info@yriftz.org
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Youth Research & Innovation Foundation. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="/contact" className="hover:text-brand-teal">Privacy Policy</a>
                        <a href="/contact" className="hover:text-brand-teal">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
