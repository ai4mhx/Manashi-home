import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, BookOpen, Wrench, Users, Home, ExternalLink } from 'lucide-react';
import logo from '../assets/favicon.png';

const Layout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { to: "/", label: "Home", icon: Home },
        { to: "/research", label: "Research", icon: Globe },
        { to: "/publications", label: "Publications", icon: BookOpen },
        { to: "/tools", label: "Tools", icon: Wrench },
        { to: "https://lcs2.in", label: "Our Lab", icon: Users, external: true },
        { to: "/join-us", label: "Join Us", icon: Users },
    ];

    const isActive = (path) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);
    };

    return (
        <div className="min-h-screen flex flex-col font-sans">
            {/* Navbar */}
            <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                                <img src={logo} alt="Manashi Logo" className="h-12 w-auto" />
                                <span className="text-3xl font-bold text-slate-900 tracking-tight font-logo [text-shadow:1px_0_0_currentColor]">Manashi</span>
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:ml-6 md:flex md:space-x-8">
                            {navLinks.map((link) => (
                                link.external ? (
                                    <a
                                        key={link.label}
                                        href={link.to}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-accent transition-colors"
                                    >
                                        {link.label}
                                        <ExternalLink className="h-3 w-3 ml-1" />
                                    </a>
                                ) : (
                                    <Link
                                        key={link.label}
                                        to={link.to}
                                        className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${isActive(link.to)
                                            ? 'border-accent text-primary'
                                            : 'border-transparent text-gray-500 hover:text-accent hover:border-gray-300'
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                )
                            ))}
                        </div>

                        {/* Mobile menu button */}
                        <div className="-mr-2 flex items-center md:hidden">
                            <button
                                onClick={toggleMenu}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent"
                            >
                                <span className="sr-only">Open main menu</span>
                                {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="pt-2 pb-3 space-y-1">
                            {navLinks.map((link) => (
                                link.external ? (
                                    <a
                                        key={link.label}
                                        href={link.to}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 flex items-center"
                                    >
                                        {link.label}
                                        <ExternalLink className="h-4 w-4 ml-2" />
                                    </a>
                                ) : (
                                    <Link
                                        key={link.label}
                                        to={link.to}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${isActive(link.to)
                                            ? 'bg-blue-50 border-accent text-accent'
                                            : 'border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300'
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                )
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            {/* Main Content */}
            <main className="flex-grow">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-200 mt-auto">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="md:flex md:items-center md:justify-between">
                        <div className="flex justify-center md:justify-start space-x-6 md:order-2">
                            <a href="https://lcs2.in" className="text-gray-400 hover:text-gray-500">
                                LCS2 Lab
                            </a>
                            <span className="text-gray-400">|</span>
                            <a href="/join-us" className="text-gray-400 hover:text-gray-500">
                                Join Us
                            </a>
                        </div>
                        <div className="mt-8 md:mt-0 md:order-1">
                            <p className="text-center md:text-left text-base text-gray-400">
                                &copy; {new Date().getFullYear()} Manashi. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
