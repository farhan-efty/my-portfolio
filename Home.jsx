import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
    const [theme, setTheme] = useState('light');
    const location = useLocation();

    useEffect(() => {
        // Theme initialization
        const savedTheme = localStorage.getItem('theme');
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const initialTheme = savedTheme || systemTheme;
        setTheme(initialTheme);
        if (initialTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        // Typing effect
        const textElement = document.getElementById('typing-text');
        let typingTimeout;

        if (textElement) {
            const texts = ["Assistant Engineer", "RTL Design & Verification", "Team Player", "Tech & Business Enthusiast"];
            let textIndex = 0;
            let charIndex = 0;
            let isDeleting = false;

            const type = () => {
                const currentText = texts[textIndex];

                if (isDeleting) {
                    textElement.textContent = currentText.substring(0, charIndex - 1);
                    charIndex--;
                } else {
                    textElement.textContent = currentText.substring(0, charIndex + 1);
                    charIndex++;
                }

                let typeSpeed = 75; // Slower typing

                if (isDeleting) {
                    typeSpeed = 50; // Slower deleting
                }

                if (!isDeleting && charIndex === currentText.length) {
                    isDeleting = true;
                    typeSpeed = 1000; // Longer pause at end
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % texts.length;
                    typeSpeed = 500; // Longer pause before next word
                }

                typingTimeout = setTimeout(type, typeSpeed);
            };

            type();
        }

        // Animation Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.animate-fadeInUp').forEach(el => {
            el.style.animationPlayState = 'paused';
            observer.observe(el);
        });

        // Scroll to top visibility
        const handleScroll = () => {
            const toTop = document.getElementById('toTop');
            if (handleScroll && toTop) {
                toTop.classList.toggle('hidden', window.scrollY < 500);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
            if (typingTimeout) clearTimeout(typingTimeout);
        };

    }, []);

    useEffect(() => {
        if (location.state && location.state.scrollTo) {
            const targetId = location.state.scrollTo;
            const element = document.getElementById(targetId);
            if (element) {
                // Use timeout to ensure the DOM is fully rendered before scrolling
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 0);
            }
        }
    }, [location]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="bg-slate-50 dark:bg-slate-900 min-h-screen font-sans transition-colors duration-300">
            <Navbar />

            <main>
                {/* Hero Section */}
                <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-20 relative overflow-hidden bg-[#0d1b45]">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 z-0 opacity-10" style={{
                        backgroundImage: 'radial-gradient(#4d6bbf 1px, transparent 1px)',
                        backgroundSize: '30px 30px'
                    }}></div>

                    {/* Content */}
                    <div className="container mx-auto px-6 z-10 flex flex-col items-center justify-center text-center space-y-8 animate-fadeInUp">

                        {/* Profile Image */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full p-1 bg-gradient-to-b from-blue-400 to-blue-900 shadow-2xl">
                                <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#0d1b45]">
                                    <img src="https://drive.google.com/thumbnail?id=1PEbPfvPBWrJUMMM-XpUcxc_jycTA0uik&sz=w1200"
                                        alt="Farhan Muhib Efty"
                                        className="w-full h-full object-cover"
                                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://drive.google.com/uc?export=view&id=1PEbPfvPBWrJUMMM-XpUcxc_jycTA0uik'; }} />
                                </div>
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="space-y-4 max-w-4xl">
                            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
                                Farhan Muhib Efty
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-300 font-medium min-h-[40px] flex items-center justify-center gap-1">
                                <span id="typing-text"></span>
                                <span className="w-1 h-8 bg-blue-500 animate-pulse"></span>
                            </p>
                            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide mt-2">
                                <a href="https://www.adnsemicon.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">ADN SEMICONDUCTORS</a>
                            </h2>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="py-12 bg-[#0b163b]">
                    <div className="container mx-auto px-6">
                        {/* Section Header */}
                        <div className="flex justify-center mb-12 animate-fadeInUp">
                            <h2 className="text-4xl font-bold text-white flex items-center gap-3">
                                <span className="bg-blue-600/20 p-3 rounded-full text-blue-500">
                                    <i className="fas fa-user"></i>
                                </span>
                                About Me
                            </h2>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {/* Left Column - Info Cards */}
                            <div className="lg:col-span-2 space-y-8">
                                {/* Professional Background Card */}
                                <div className="bg-[#15224a] rounded-3xl p-8 border border-slate-700/50 hover:border-blue-500/30 transition-all shadow-xl animate-fadeInUp">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white text-xl shadow-lg shadow-blue-600/20">
                                            <i className="fas fa-user-tie"></i>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white">Professional Background</h3>
                                    </div>
                                    <div className="space-y-4 text-slate-300 leading-relaxed text-justify">
                                        <p>
                                            I'm <strong className="text-white">Farhan Muhib Efty</strong>, an Electrical and Electronic Engineering graduate and
                                            currently an <strong className="text-white">Assistant Engineer</strong> at <a href="https://www.adnsemicon.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 font-bold hover:underline">ADN SEMICONDUCTORS</a>.
                                        </p>
                                        <p>
                                            My journey is defined by a passion for silicon perfection. Working in the RTL Design and
                                            Verification department, I bridge the gap between theoretical architecture and practical, robust
                                            implementation.
                                        </p>
                                    </div>
                                </div>

                                {/* Bottom Grid */}
                                <div className="grid md:grid-cols-2 gap-8 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                                    {/* Technical Focus */}
                                    <div className="bg-[#15224a] rounded-3xl p-8 border border-slate-700/50 hover:border-indigo-500/30 transition-all shadow-xl flex flex-col items-start gap-4 h-full">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center text-white text-xl shadow-lg shadow-indigo-600/20">
                                                <i className="fas fa-microchip"></i>
                                            </div>
                                            <h3 className="text-xl font-bold text-white">Technical Focus</h3>
                                        </div>
                                        <p className="text-slate-300 text-sm leading-relaxed text-justify">
                                            Specializing in <strong className="text-white">VLSI Design Verification (DV)</strong> using SystemVerilog
                                            and UVM to ensure bug-free chip designs.
                                        </p>
                                    </div>

                                    {/* Vision */}
                                    <div className="bg-[#15224a] rounded-3xl p-8 border border-slate-700/50 hover:border-purple-500/30 transition-all shadow-xl flex flex-col items-start gap-4 h-full">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center text-white text-xl shadow-lg shadow-purple-600/20">
                                                <i className="fas fa-rocket"></i>
                                            </div>
                                            <h3 className="text-xl font-bold text-white">Vision</h3>
                                        </div>
                                        <p className="text-slate-300 text-sm leading-relaxed text-justify">
                                            Aiming to tackle complex verification challenges and contribute to next-gen
                                            semiconductor technologies.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Image */}
                            <div className="lg:col-span-1 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                                <div className="h-full bg-gradient-to-b from-teal-800/20 to-teal-900/10 rounded-[3rem] p-2 border border-slate-700/30 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-teal-500/10 mix-blend-overlay"></div>
                                    <img src="https://drive.google.com/thumbnail?id=1PEbPfvPBWrJUMMM-XpUcxc_jycTA0uik&sz=w1200"
                                        alt="Farhan Muhib Efty"
                                        className="w-full h-full object-cover rounded-[2.5rem] shadow-2xl filter brightness-110 contrast-105"
                                        loading="lazy"
                                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://drive.google.com/uc?export=view&id=1PEbPfvPBWrJUMMM-XpUcxc_jycTA0uik'; }} />
                                </div>
                            </div>
                        </div>
                    </div>



                </section>

                {/* Experience Section */}
                <section id="experience" className="py-12 bg-white dark:bg-slate-950">
                    <div className="container mx-auto px-6">
                        <div className="flex justify-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white flex items-center gap-3">
                                <span className="bg-blue-600/10 dark:bg-blue-600/20 p-3 rounded-full text-blue-600 dark:text-blue-500">
                                    <i className="fas fa-briefcase"></i>
                                </span>
                                Professional Experience
                            </h2>
                        </div>
                        <div className="relative border-l-4 border-blue-600 ml-3 md:ml-6 space-y-12">
                            <div className="relative pl-8 md:pl-12">
                                <div className="absolute -left-[22px] top-0 h-10 w-10 rounded-full border-[6px] border-white dark:border-slate-900 bg-blue-600 flex items-center justify-center shadow-lg transition-transform hover:scale-110 z-10">
                                    <i className="fas fa-briefcase text-white text-[10px]"></i>
                                </div>
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                                    <div className="relative card collapsible bg-white dark:bg-slate-900 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md border border-slate-100 dark:border-slate-800 transition-all duration-500 hover:-translate-y-2 overflow-hidden" tabIndex="0">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full"></div>
                                        <div className="relative z-10">
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                                <div>
                                                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">Assistant Engineer</h3>
                                                    <p className="text-md text-slate-400 mt-1 font-bold">RTL Design and Verification</p>
                                                    <p className="text-blue-600 dark:text-blue-400 font-medium"><a href="https://www.adnsemicon.com/" target="_blank" rel="noopener noreferrer" className="hover:underline"><strong>ADN SEMICONDUCTORS</strong></a></p>
                                                </div>
                                                <div className="flex items-center gap-3 text-slate-500 bg-slate-50 dark:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium">
                                                    <i className="far fa-calendar-alt"></i>
                                                    <span>Sep 2025 – Present</span>
                                                    <i className="fa-solid fa-chevron-down chev ml-2"></i>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <ul className="mt-4 space-y-3 text-slate-600 dark:text-slate-300 font-medium list-none text-justify">
                                                    <li className="flex items-start gap-2"><i className="fa-solid fa-circle-check text-blue-600 mt-1 shrink-0 text-justify"></i><span><strong>RTL Design & Verification:</strong> Developed production-ready RTL designs and comprehensive verification environments using SystemVerilog and UVM, culminating in a complete APB-UART implementation with full verification closure.</span></li>
                                                    <li className="flex items-start gap-2"><i className="fa-solid fa-circle-check text-blue-600 mt-1 shrink-0 text-justify"></i><span><strong>Verification Methodologies:</strong> Built layered testbench architectures featuring reusable components including bus functional models (BFMs), monitors, scoreboards, and checkers. Implemented constrained-random stimulus generation, functional coverage models, and SystemVerilog Assertions (SVA) to drive verification quality and closure metrics.</span></li>
                                                    <li className="flex items-start gap-2"><i className="fa-solid fa-circle-check text-blue-600 mt-1 shrink-0"></i><span><strong>Protocol & Interface Design:</strong> Designed and verified industry-standard protocols including AMBA APB and UART peripheral controllers, demonstrating proficiency in register map design, transaction-level modeling, and protocol compliance verification.</span></li>
                                                    <li className="flex items-start gap-2"><i className="fa-solid fa-circle-check text-blue-600 mt-1 shrink-0"></i><span><strong>EDA Tools & Workflows:</strong> Leveraged AMD Xilinx Vivado for simulation and synthesis, integrated with modern development workflows using VS Code, Git version control, and automated regression testing frameworks.</span></li>
                                                    <li className="flex items-start gap-2"><i className="fa-solid fa-circle-check text-blue-600 mt-1 shrink-0"></i><span><strong>Debug & Problem Solving:</strong> Applied systematic debugging methodologies to triage simulation failures, isolate root causes in complex testbench-RTL interactions, and document fixes with clear technical rationale—demonstrating production-team readiness.</span></li>
                                                    <li className="flex items-start gap-2"><i className="fa-solid fa-circle-check text-blue-600 mt-1 shrink-0"></i><span><strong>Design for Verification: </strong> Architected RTL with clean module boundaries, robust clock/reset strategies, and verification-friendly interfaces, enabling efficient testbench development and comprehensive corner-case coverage.</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="py-12 bg-slate-50 dark:bg-slate-900">
                    <div className="container mx-auto px-6">
                        <div className="flex justify-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white flex items-center gap-3">
                                <span className="bg-blue-600/10 dark:bg-blue-600/20 p-3 rounded-full text-blue-600 dark:text-blue-500">
                                    <i className="fas fa-laptop-code"></i>
                                </span>
                                Technical Expertise
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto animate-fadeInUp">
                            {/* Technical Skills */}
                            <div>
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-slate-800 dark:text-slate-200">
                                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 p-2 rounded-lg"><i className="fas fa-code"></i></span>
                                    Technical Skills
                                </h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    {[
                                        { icon: 'fab fa-cuttlefish', name: 'C/C++' },
                                        { icon: 'fab fa-python', name: 'Python' },
                                        { icon: 'fas fa-database', name: 'SQL' },
                                        { icon: 'fas fa-microchip', name: 'Cadence' },
                                        { icon: 'fas fa-code-branch', name: 'SystemVerilog' },
                                        { icon: 'fas fa-stream', name: 'RTL' },
                                        { icon: 'fas fa-cogs', name: 'Quartus' },
                                        { icon: 'fab fa-linux', name: 'Linux' },
                                        { icon: 'fas fa-microchip', name: 'STM32' },
                                        { icon: 'fas fa-chart-line', name: 'Power BI' },
                                        { icon: 'fas fa-chart-bar', name: 'Tableau' },
                                    ].map((skill, index) => (
                                        <div key={index} className="card bg-white dark:bg-slate-800 p-4 rounded-xl flex flex-col items-center justify-center gap-3 hover:border-blue-500/30 group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                                            <i className={`${skill.icon} fa-2x text-slate-400 group-hover:text-blue-600 transition-all duration-300 group-hover:scale-110`}></i>
                                            <span className="font-medium text-sm">{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Soft Skills */}
                            <div>
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-slate-800 dark:text-slate-200">
                                    <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 p-2 rounded-lg"><i className="fas fa-users"></i></span>
                                    Soft Skills & Tools
                                </h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    <Link to="/leadership" className="card bg-white dark:bg-slate-800 p-4 rounded-xl flex flex-col items-center justify-center gap-3 hover:border-purple-500/30 group transition-all hover:-translate-y-1">
                                        <i className="fas fa-users fa-2x text-slate-400 group-hover:text-purple-600 transition-colors"></i>
                                        <span className="font-medium text-sm">Leadership</span>
                                    </Link>
                                    {[
                                        { icon: 'fas fa-clock', name: 'Time Management' },
                                        { icon: 'fas fa-lightbulb', name: 'Problem Solving' },
                                        { icon: 'fas fa-brain', name: 'Critical Thinking' },
                                        { icon: 'fa-solid fa-pen-nib', name: 'Design Tools' },
                                        { icon: 'fa-solid fa-file-word', name: 'Office Suite' },
                                        { icon: 'fas fa-chart-pie', name: 'Analytical Ability' },
                                    ].map((skill, index) => (
                                        <div key={index} className="card bg-white dark:bg-slate-800 p-4 rounded-xl flex flex-col items-center justify-center gap-3 hover:border-purple-500/30 group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                                            <i className={`${skill.icon} fa-2x text-slate-400 group-hover:text-purple-600 transition-all duration-300 group-hover:scale-110`}></i>
                                            <span className="font-medium text-sm">{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="py-12 bg-white dark:bg-slate-950">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <div className="flex justify-center mb-4">
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white flex items-center gap-3">
                                    <span className="bg-blue-600/10 dark:bg-blue-600/20 p-3 rounded-full text-blue-600 dark:text-blue-500">
                                        <i className="fas fa-star"></i>
                                    </span>
                                    Featured Projects
                                </h2>
                            </div>
                            <p className="text-lg font-medium text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                                Highlights from my technical work and research contributions
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
                            {/* Project cards would traditionally be mapped here, simplified for manual entry based on HTML */}
                            <article className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                                <div className="relative bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full"></div>
                                    <div className="relative z-10 p-5">
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                                                <i className="fas fa-microchip text-lg"></i>
                                            </div>
                                            <span className="px-2.5 py-1 text-xs font-semibold bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full">Thesis</span>
                                        </div>
                                        <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">Intelligent BMS</h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2 text-justify">STM32-based Battery Management System for EVs with real-time monitoring and protection.</p>
                                        <a href="https://drive.google.com/file/d/1eZzYwo9dJ_IuKDibzf6YglpDGZGlwILZ/view" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 font-semibold text-sm hover:gap-2 gap-1 transition-all">
                                            View Project <i className="fas fa-arrow-right text-xs"></i>
                                        </a>
                                    </div>
                                </div>
                            </article>
                            <article className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                                <div className="relative bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-bl-full"></div>
                                    <div className="relative z-10 p-5">
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                                                <i className="fas fa-microchip text-lg"></i>
                                            </div>
                                            <span className="px-2.5 py-1 text-xs font-semibold bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-full">VLSI</span>
                                        </div>
                                        <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">Full Adder Design</h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2 text-justify">Designed 8T, 10T, and 14T full adders in Cadence. Analyzed power, delay, and area trade-offs.</p>
                                        <a href="https://github.com/farhan-efty/Analysis-of-8T-10T-and-14T-1-bit-full-adders-in-comparison" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 font-semibold text-sm hover:gap-2 gap-1 transition-all">
                                            View Project <i className="fas fa-arrow-right text-xs"></i>
                                        </a>
                                    </div>
                                </div>
                            </article>
                            <article className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                                <div className="relative bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/10 to-transparent rounded-bl-full"></div>
                                    <div className="relative z-10 p-5">
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform">
                                                <i className="fas fa-robot text-lg"></i>
                                            </div>
                                            <span className="px-2.5 py-1 text-xs font-semibold bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-full">Robotics</span>
                                        </div>
                                        <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">Fire-Fighting Robot</h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2 text-justify">Autonomous Arduino robot with flame sensors and extinguishing mechanism for fire detection.</p>
                                        <a href="https://github.com/farhan-efty/Fire-Fighting-Robot-using-Arduino" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 font-semibold text-sm hover:gap-2 gap-1 transition-all">
                                            View Project <i className="fas fa-arrow-right text-xs"></i>
                                        </a>
                                    </div>
                                </div>
                            </article>
                            <article className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                                <div className="relative bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full"></div>
                                    <div className="relative z-10 p-5">
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                                                <i className="fas fa-microchip text-lg"></i>
                                            </div>
                                            <span className="px-2.5 py-1 text-xs font-semibold bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-full">Architecture</span>
                                        </div>
                                        <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">8-bit Modified SAP</h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2 text-justify">Designed a modified SAP CPU architecture. Focused on understanding the building blocks of computer organization.</p>
                                        <a href="https://github.com/farhan-efty/8-Bit-Modified-SAP-Design" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 font-semibold text-sm hover:gap-2 gap-1 transition-all">
                                            View Project <i className="fas fa-arrow-right text-xs"></i>
                                        </a>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="flex justify-center mt-8">
                            <Link to="/projects" className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-lg transition-all animate-fadeInUp">
                                View All Projects
                                <i className="fas fa-arrow-right transition-transform group-hover:translate-x-1"></i>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Leadership Section */}
                <section id="leadership" className="py-12 bg-slate-50 dark:bg-slate-900">
                    {/* Simplified for brevity, in a real migration, we might iterate data, but for now copying structure */}
                    <div className="container mx-auto px-6">
                        <div className="flex justify-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white flex items-center gap-3">
                                <span className="bg-blue-600/10 dark:bg-blue-600/20 p-3 rounded-full text-blue-600 dark:text-blue-500">
                                    <i className="fas fa-users"></i>
                                </span>
                                Leadership & Volunteering
                            </h2>
                        </div>
                        <div className="relative border-l-4 border-blue-600 ml-3 md:ml-6 space-y-8">
                            {[
                                {
                                    title: "Membership Development Coordinator",
                                    organization: "IEEE Young Professionals Bangladesh",
                                    icon: "fa-solid fa-user-tie",
                                    period: "May 2025 – Present",
                                    achievements: [
                                        "Collaborated with multiple IEEE Student Branches nationwide to co-host YP-focused programs and outreach activities.",
                                        "Worked on flagship initiatives including YPCon 2025, IEEE YP Talk Series, and IEEE Region 10 YP UpSkill – Bangladesh 2025.",
                                        "Moderated the UpSkill 2025 Networking Session at AUST alongside Md Abu Saleh, fostering meaningful professional connections.",
                                        "Coordinated with IEEE Bangladesh Section and IEEE AUST SB to bridge academic learning with industry-ready skills.",
                                        "Drove engagement campaigns and post-event follow-ups to successfully convert attendees into active YP members."
                                    ]
                                },
                                {
                                    title: "Chairperson",
                                    organization: "IEEE AUST Student Branch",
                                    icon: "fa-solid fa-user-tie",
                                    period: "Feb 2023 – Feb 2024",
                                    achievements: [
                                        "Organized diverse events, meetings, seminars, workshops, webinars, and competitions, achieving the highest number of events and student members since 2004.",
                                        "Hosted two national competitions and one intra-university competition.",
                                        "Co-hosted a conference with IEEE Bangladesh Section and IEEE Young Professionals.",
                                        "Served as a Core Volunteer at 26th ICCIT 2023, 10th ICPS 2023, and 9th IEEE WIECON ECE 2023.",
                                        "Planned and controlled all chapter activities, ensuring smooth execution.",
                                        "Developed a new website and opened a new chapter during the tenure.",
                                        "Led a team of 57 student officers and managed social media accounts and the website."
                                    ]
                                },
                                {
                                    title: "Joint Secretary",
                                    organization: "AUST Innovation and Design Club",
                                    icon: "fa-solid fa-user-tie",
                                    period: "Dec 2022 – May 2023",
                                    achievements: [
                                        "Led the national tech-biz competition \"Mindsparks'22\" as Operations Lead, engaging 30+ institutions and 1200+ participants.",
                                        "Managed a junior team of 63 members, achieving the highest revenue and member recruitment at the Club Fair.",
                                        "Served as an Event Coordinator for \"Mindsparks '23\".",
                                        "Organized \"Innoventure 21\" and \"Cognibat 21\" as an Executive Member.",
                                        "Designed visuals for events and social media promotions.",
                                        "Led the Event Management and Logistics team."
                                    ]
                                },
                                {
                                    title: "Vice Chair",
                                    organization: "IEEE PES AUST Student Branch Chapter",
                                    icon: "fa-solid fa-user-tie",
                                    period: "Mar 2022 – Feb 2023",
                                    achievements: [
                                        "Organized events, seminars, webinars, and meetings.",
                                        "Created visuals for events and social media promotions.",
                                        "Achieved the prestigious High-Performance Student Branch Chapter Award.",
                                        "Served as IEEE PES DAY ambassador.",
                                        "Effectively managed the social media accounts of IEEE PES AUST Student Branch Chapter."
                                    ]
                                },
                                {
                                    title: "Assistant Organizing Secretary",
                                    organization: "AUST EEE Society",
                                    icon: "fa-solid fa-user-tie",
                                    period: "Nov 2021 – May 2022",
                                    achievements: [
                                        "Responsible for coordinating events, seminars, and workshops.",
                                        "Successfully managed the planning and execution of departmental activities including the picnic \"Tridib Ucchash,\" sports events, and AUST EEE DAY.",
                                        "Organized the Three Minutes Thesis presentation program within the department.",
                                        "Contributed as a volunteer at Tech Fiesta."
                                    ]
                                }
                            ].map((role, index) => (
                                <div key={index} className="relative pl-8 md:pl-12 group">
                                    <div className="absolute -left-[22px] top-6 h-10 w-10 rounded-full border-[6px] border-white dark:border-slate-900 bg-blue-600 flex items-center justify-center shadow-lg transition-transform hover:scale-110 z-10">
                                        <i className={`${role.icon} text-white text-[10px]`}></i>
                                    </div>

                                    <div className="relative bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg border border-slate-100 dark:border-slate-700 transition-all duration-300 hover:-translate-y-1">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full pointer-events-none"></div>

                                        <div className="relative z-10">
                                            {/* Header - Always Visible */}
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-default">
                                                <div>
                                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">{role.title}</h3>
                                                    <p className="text-blue-600 dark:text-blue-400 font-medium">{role.organization}</p>
                                                </div>
                                                <div className="flex items-center gap-3 text-slate-500 bg-white dark:bg-slate-900 px-4 py-2 rounded-full text-sm font-medium self-start md:self-center shadow-sm">
                                                    <i className="far fa-calendar-alt"></i>
                                                    <span>{role.period}</span>
                                                    <i className="fa-solid fa-chevron-down ml-2 transition-transform duration-500 group-hover:rotate-180"></i>
                                                </div>
                                            </div>

                                            {/* Content - Collapsible */}
                                            <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-[500px] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                                <ul className="mt-6 space-y-2 text-slate-600 dark:text-slate-300 list-none text-justify">
                                                    {role.achievements.map((item, i) => (
                                                        <li key={i} className="flex items-start gap-2">
                                                            <i className="fa-solid fa-circle-check text-blue-600 mt-1 shrink-0"></i>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center mt-12">
                            <Link to="/leadership" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                View Full Timeline <i className="fas fa-arrow-right ml-2"></i>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Education Section */}
                <section id="education" className="py-12 bg-white dark:bg-slate-950">
                    <div className="container mx-auto px-6">
                        <div className="flex justify-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white flex items-center gap-3">
                                <span className="bg-blue-600/10 dark:bg-blue-600/20 p-3 rounded-full text-blue-600 dark:text-blue-500">
                                    <i className="fas fa-graduation-cap"></i>
                                </span>
                                Education
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {/* Bachelor's Degree */}
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                                <div className="relative card bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-slate-200 dark:border-slate-700 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full"></div>
                                    <div className="relative z-10">
                                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                                            <i className="fa-solid fa-graduation-cap text-2xl"></i>
                                        </div>
                                        <div className="mb-6">
                                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-tight">B.Sc. in Electrical and Electronic Engineering</h3>
                                            <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mb-1">Ahsanullah University of Science and Technology</p>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                                                <i className="fa-solid fa-calendar-days text-blue-500"></i>
                                                <span className="font-medium">2019 – 2023</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <i className="fa-solid fa-award text-blue-500"></i>
                                                <span className="text-sm font-bold text-slate-800 dark:text-slate-200">CGPA: <span className="text-blue-600 dark:text-blue-400">3.475/4.00</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* HSC */}
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                                <div className="relative card bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-slate-200 dark:border-slate-700 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-bl-full"></div>
                                    <div className="relative z-10">
                                        <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                                            <i className="fa-solid fa-school text-2xl"></i>
                                        </div>
                                        <div className="mb-6">
                                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-tight">Higher Secondary Certificate (HSC)</h3>
                                            <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm mb-1">Dhaka City College</p>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                                                <i className="fa-solid fa-calendar-days text-indigo-500"></i>
                                                <span className="font-medium">2016 – 2018</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <i className="fa-solid fa-award text-indigo-500"></i>
                                                <span className="text-sm font-bold text-slate-800 dark:text-slate-200">GPA: <span className="text-indigo-600 dark:text-indigo-400">5.00/5.00</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* SSC */}
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                                <div className="relative card bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-slate-200 dark:border-slate-700 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full"></div>
                                    <div className="relative z-10">
                                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                                            <i className="fa-solid fa-book-open text-2xl"></i>
                                        </div>
                                        <div className="mb-6">
                                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-tight">Secondary School Certificate (SSC)</h3>
                                            <p className="text-purple-600 dark:text-purple-400 font-semibold text-sm mb-1">Gobindaganj Govt. High School</p>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                                                <i className="fa-solid fa-calendar-days text-purple-500"></i>
                                                <span className="font-medium">2016</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <i className="fa-solid fa-award text-purple-500"></i>
                                                <span className="text-sm font-bold text-slate-800 dark:text-slate-200">GPA: <span className="text-purple-600 dark:text-purple-400">5.00/5.00</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mt-16">
                            <Link to="/education" className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <span>View Detailed Timeline</span>
                                <i className="fas fa-arrow-right transition-transform group-hover:translate-x-2 duration-300"></i>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Achievements Section */}
                {/* Achievements Section */}
                <section id="achievements" className="py-20 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
                    {/* Background Decorations */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-amber-400/5 rounded-full blur-[80px]"></div>
                        <div className="absolute bottom-[20%] right-[10%] w-72 h-72 bg-yellow-400/5 rounded-full blur-[80px]"></div>
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="flex justify-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white flex items-center gap-3">
                                <span className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full text-amber-600 dark:text-amber-500 shadow-lg shadow-amber-500/20">
                                    <i className="fas fa-trophy"></i>
                                </span>
                                Achievements
                            </h2>
                        </div>

                        <div className="max-w-4xl mx-auto space-y-8 animate-fadeInUp">
                            <div className="group relative">
                                {/* Glow BG */}
                                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-yellow-500/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                                <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-1 overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 dark:border-slate-700 hover:border-amber-500/40 transition-all duration-500">
                                    <div className="bg-slate-50/50 dark:bg-slate-900/50 rounded-xl p-8 flex flex-col md:flex-row items-center gap-8 backdrop-blur-sm">

                                        {/* Icon Box */}
                                        <div className="shrink-0 relative">
                                            <div className="absolute inset-0 bg-amber-400 blur-lg opacity-20"></div>
                                            <div className="relative w-24 h-24 bg-gradient-to-br from-amber-100 to-yellow-50 dark:from-slate-800 dark:to-slate-700 rounded-full flex items-center justify-center border border-amber-200 dark:border-amber-900/50 shadow-inner group-hover:scale-105 transition-transform duration-500">
                                                <i className="fa-solid fa-trophy text-4xl text-amber-500 drop-shadow-sm"></i>
                                            </div>
                                            {/* Badge */}
                                            <div className="absolute -bottom-2 -right-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold py-1 px-3 rounded-full shadow-lg border-2 border-white dark:border-slate-900">
                                                2022
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-grow text-center md:text-left">
                                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">Outstanding Contribution Award</h3>
                                            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-4 text-justify">
                                                Recognized for outstanding contributions and leadership in the IEEE AUST Student Branch.
                                            </p>
                                            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                                <span className="px-3 py-1 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 text-sm font-medium rounded-lg border border-amber-200 dark:border-amber-800/50">Leadership</span>
                                                <span className="px-3 py-1 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 text-sm font-medium rounded-lg border border-amber-200 dark:border-amber-800/50">IASB</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



            </main>

            <Footer />
            <button id="toTop" onClick={scrollToTop} className="fixed bottom-5 right-5 hidden rounded-full p-3 bg-blue-600 text-white shadow-lg" aria-label="Scroll to top"><i className="fa-solid fa-arrow-up"></i></button>

        </div>
    );
};

export default Home;
