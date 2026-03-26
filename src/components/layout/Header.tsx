import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/images/logo_dark.png';
import wideLogo from '../../assets/images/asset_5.svg';

const NAV_ITEMS = [
    { name: 'Home',     href: '/',          scroll: false },
    { name: 'About',    href: '/#about',    scroll: true  },
    { name: 'Programs', href: '/#features', scroll: true  },
    { name: 'Research', href: '/#research', scroll: true  },
    { name: 'Events',   href: '/#events',   scroll: true  },
    { name: 'Partners', href: '/#partners', scroll: true  },
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollNav = (e: React.MouseEvent, hash: string) => {
        e.preventDefault();
        setIsMenuOpen(false);
        const el = document.querySelector(hash);
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3 glass shadow-sm' : 'py-6 bg-transparent'}`}>
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center group">
                        <img src={logo}     alt="YRIF" className="h-10 w-auto object-contain transition-transform group-hover:scale-105 md:hidden" />
                        <img src={wideLogo} alt="YRIF" className="hidden md:block h-10 w-auto object-contain transition-transform group-hover:scale-105" />
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center space-x-1">
                        {NAV_ITEMS.map(({ name, href, scroll }) =>
                            scroll ? (
                                <a
                                    key={name}
                                    href={href}
                                    onClick={(e) => handleScrollNav(e, href.substring(1))}
                                    className="px-4 py-2 text-sm font-medium text-text-primary hover:text-brand-teal relative group transition-colors"
                                >
                                    {name}
                                    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center opacity-70" />
                                </a>
                            ) : (
                                <Link
                                    key={name}
                                    to={href}
                                    className="px-4 py-2 text-sm font-medium text-text-primary hover:text-brand-teal relative group transition-colors"
                                >
                                    {name}
                                    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center opacity-70" />
                                </Link>
                            )
                        )}
                    </nav>

                    {/* Desktop CTAs */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a
                            href="/login"
                            className="px-5 py-2.5 text-sm font-semibold text-brand-navy hover:text-brand-teal transition-colors"
                        >
                            Login
                        </a>
                        <a
                            href="/register"
                            className="bg-brand-navy hover:bg-brand-teal text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg shadow-brand-navy/20 transform hover:-translate-y-0.5"
                        >
                            Join YRIF
                        </a>
                    </div>

                    {/* Mobile menu toggle */}
                    <button
                        className="md:hidden text-brand-navy hover:text-brand-teal transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/20">
                        <div className="flex flex-col space-y-4">
                            {NAV_ITEMS.map(({ name, href, scroll }) =>
                                scroll ? (
                                    <a
                                        key={name}
                                        href={href}
                                        onClick={(e) => handleScrollNav(e, href.substring(1))}
                                        className="text-lg font-medium text-brand-navy hover:text-brand-teal hover:pl-2 transition-all"
                                    >
                                        {name}
                                    </a>
                                ) : (
                                    <Link
                                        key={name}
                                        to={href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-lg font-medium text-brand-navy hover:text-brand-teal hover:pl-2 transition-all"
                                    >
                                        {name}
                                    </Link>
                                )
                            )}
                            <div className="pt-2 flex flex-col gap-2">
                                <a
                                    href="/login"
                                    className="block text-center px-4 py-2.5 text-sm font-semibold border border-brand-navy text-brand-navy rounded-xl hover:bg-gray-50"
                                >
                                    Login
                                </a>
                                <a
                                    href="/register"
                                    className="block text-center bg-brand-navy text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-brand-teal transition-colors"
                                >
                                    Join YRIF
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
