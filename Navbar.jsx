import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleAboutClick = (event) => {
        event.preventDefault();

        const scrollToAbout = () => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        };

        if (location.pathname === '/' || location.pathname === '/index.html') {
            scrollToAbout();
        } else {
            navigate('/', { state: { scrollTo: 'about' } });
        }

        setIsMobileMenuOpen(false);
    };

    const reloadIfOnHome = (event) => {
        // If already on the home route, reload the page
        if (location.pathname === '/' || location.pathname === '/index.html') {
            event.preventDefault();
            window.location.reload();
        } else {
            // On other pages, just close the mobile menu (Link will navigate to home)
            setIsMobileMenuOpen(false);
        }
    };

    // Helper to check if link is active
    const isActive = (path) => {
        return location.pathname === path ? 'text-primary-500 font-bold' : 'text-white hover:text-primary-400';
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
                    <Link
                        to="/"
                        onClick={reloadIfOnHome}
                        className="text-2xl font-extrabold tracking-tight text-white group"
                    >
                        Farhan<span className="text-primary-500 transition-colors">.</span>
                    </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <Link
                        to="/"
                        onClick={reloadIfOnHome}
                        className={`nav-link text-sm font-medium transition-colors ${isActive('/')}`}
                    >
                        <i className="fas fa-home mr-1.5"></i>Home
                    </Link>
                    <a
                        href="#about"
                        onClick={handleAboutClick}
                        className="nav-link text-sm font-medium text-white hover:text-primary-400 transition-colors"
                    >
                        <i className="fas fa-user mr-1.5"></i>About
                    </a>
                    <Link to="/experience" className={`nav-link text-sm font-medium transition-colors ${isActive('/experience')}`}><i className="fas fa-briefcase mr-1.5"></i>Experience</Link>
                    <Link to="/skills" className={`nav-link text-sm font-medium transition-colors ${isActive('/skills')}`}><i className="fas fa-laptop-code mr-1.5"></i>Skills</Link>
                    <Link to="/projects" className={`nav-link text-sm font-medium transition-colors ${isActive('/projects')}`}><i className="fas fa-project-diagram mr-1.5"></i>Projects</Link>
                    <Link to="/leadership" className={`nav-link text-sm font-medium transition-colors ${isActive('/leadership')}`}><i className="fas fa-users mr-1.5"></i>Leadership</Link>
                    <Link to="/education" className={`nav-link text-sm font-medium transition-colors ${isActive('/education')}`}><i className="fas fa-graduation-cap mr-1.5"></i>Education</Link>
                    <Link to="/contact" className={`nav-link text-sm font-medium transition-colors ${isActive('/contact')}`}><i className="fas fa-envelope mr-1.5"></i>Contact</Link>
                    <a href="https://wa.me/8801521561607" target="_blank" rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold rounded-full transition-all shadow-lg shadow-primary-600/20 hover:shadow-primary-600/40 flex items-center gap-2">
                        <i className="fab fa-whatsapp text-lg"></i> Let's Talk
                    </a>
                </div>

                {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-2xl text-white focus:outline-none"
                        id="mobile-menu-btn"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <i className="fa-solid fa-bars"></i>
                    </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden bg-[#0d1b45] border-t border-slate-700 absolute w-full ${isMobileMenuOpen ? '' : 'hidden'}`} id="mobile-menu">
                <div className="flex flex-col p-6 space-y-4">
                    <Link
                        to="/"
                        onClick={reloadIfOnHome}
                        className="text-sm font-medium text-white hover:text-primary-400 transition-colors"
                    >
                        <i className="fas fa-home w-5 text-center mr-2"></i>Home
                    </Link>
                    <a
                        href="#about"
                        onClick={handleAboutClick}
                        className="text-sm font-medium text-white hover:text-primary-400 transition-colors"
                    >
                        <i className="fas fa-user w-5 text-center mr-2"></i>About
                    </a>
                    <Link to="/experience" className="text-sm font-medium text-white hover:text-primary-400 transition-colors"><i className="fas fa-briefcase w-5 text-center mr-2"></i>Experience</Link>
                    <Link to="/skills" className="text-sm font-medium text-white hover:text-primary-400 transition-colors"><i className="fas fa-laptop-code w-5 text-center mr-2"></i>Skills</Link>
                    <Link to="/projects" className="text-sm font-medium text-white hover:text-primary-400 transition-colors"><i className="fas fa-project-diagram w-5 text-center mr-2"></i>Projects</Link>
                    <Link to="/leadership" className="text-sm font-medium text-white hover:text-primary-400 transition-colors"><i className="fas fa-users w-5 text-center mr-2"></i>Leadership</Link>
                    <Link to="/education" className="text-sm font-medium text-white hover:text-primary-400 transition-colors"><i className="fas fa-graduation-cap w-5 text-center mr-2"></i>Education</Link>
                    <Link to="/contact" className="text-sm font-medium text-white hover:text-primary-400 transition-colors"><i className="fas fa-envelope w-5 text-center mr-2"></i>Contact</Link>
                    <a href="https://wa.me/8801521561607" target="_blank" rel="noopener noreferrer"
                        className="text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors">Let's Talk (WhatsApp)</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
