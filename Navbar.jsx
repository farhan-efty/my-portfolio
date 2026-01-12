import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Helper to check if link is active
    const isActive = (path) => {
        return location.pathname === path ? 'text-primary-600 dark:text-primary-400' : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400';
    };

    return (
        <nav className="fixed w-full z-50 glass-nav transition-all duration-300" id="navbar">
            <style>{`
                .glass-nav {
                    background: rgba(15, 23, 42, 0.8);
                    backdrop-filter: blur(12px);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                }
            `}</style>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white group">
                    Farhan<span className="text-primary-600 group-hover:text-primary-500 transition-colors">.</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <Link to="/" className={`nav-link text-sm font-medium transition-colors ${isActive('/')}`}>Home</Link>
                    <a href="/#about" className="nav-link text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
                    <Link to="/experience" className={`nav-link text-sm font-medium transition-colors ${isActive('/experience')}`}>Experience</Link>
                    <Link to="/skills" className={`nav-link text-sm font-medium transition-colors ${isActive('/skills')}`}>Skills</Link>
                    <Link to="/projects" className={`nav-link text-sm font-medium transition-colors ${isActive('/projects')}`}>Projects</Link>
                    <Link to="/leadership" className={`nav-link text-sm font-medium transition-colors ${isActive('/leadership')}`}>Leadership</Link>
                    <Link to="/education" className={`nav-link text-sm font-medium transition-colors ${isActive('/education')}`}>Education</Link>
                    <Link to="/contact" className={`nav-link text-sm font-medium transition-colors ${isActive('/contact')}`}>Contact</Link>
                    <a href="https://wa.me/8801521561607" target="_blank" rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold rounded-full transition-all shadow-lg shadow-primary-600/20 hover:shadow-primary-600/40 flex items-center gap-2">
                        <i className="fab fa-whatsapp text-lg"></i> Let's Talk
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl text-slate-900 dark:text-white focus:outline-none"
                    id="mobile-menu-btn"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <i className="fa-solid fa-bars"></i>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 absolute w-full ${isMobileMenuOpen ? '' : 'hidden'}`} id="mobile-menu">
                <div className="flex flex-col p-6 space-y-4">
                    <Link to="/" className="text-sm font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Home</Link>
                    <a href="/#about" className="text-sm font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors">About</a>
                    <Link to="/experience" className="text-sm font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Experience</Link>
                    <Link to="/skills" className="text-sm font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Skills</Link>
                    <Link to="/projects" className="text-sm font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Projects</Link>
                    <Link to="/leadership" className="text-sm font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Leadership</Link>
                    <Link to="/education" className="text-sm font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Education</Link>
                    <Link to="/contact" className="text-sm font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Contact</Link>
                    <a href="https://wa.me/8801521561607" target="_blank" rel="noopener noreferrer"
                        className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 transition-colors">Let's Talk (WhatsApp)</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
