import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Projects = () => {
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        // Typing effect
        const textElement = document.getElementById('projects-typing-text');
        let typingTimeout;

        if (textElement) {
            const text = "Technical Projects";
            let charIndex = 0;
            let isDeleting = false;

            const type = () => {
                if (isDeleting) {
                    textElement.textContent = text.substring(0, charIndex - 1);
                    charIndex--;
                } else {
                    textElement.textContent = text.substring(0, charIndex + 1);
                    charIndex++;
                }

                let typeSpeed = 150; // Very slow typing

                if (isDeleting) {
                    typeSpeed = 75; // Slow deleting
                }

                if (!isDeleting && charIndex === text.length) {
                    isDeleting = true;
                    typeSpeed = 2000; // Long pause at display
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    typeSpeed = 600; // Pause before restarting
                }

                typingTimeout = setTimeout(type, typeSpeed);
            };

            type();
        }

        return () => {
            if (typingTimeout) clearTimeout(typingTimeout);
        };
    }, []);

    const projects = [
        {
            id: 1,
            title: "Intelligent BMS",
            category: ["embedded", "vlsi"],
            image: "https://placehold.co/800x600/2563EB/FFFFFF/png?text=Intelligent+BMS",
            badge: "Thesis",
            badgeColor: "text-primary-600 dark:text-primary-400 border-slate-200 dark:border-slate-700",
            description: "STM32-based Battery Management System for EVs implementing real-time monitoring, protection circuits, and data logging for enhanced safety and efficiency.",
            tags: ["STM32", "C++", "Proteus"],
            link: "https://drive.google.com/file/d/1eZzYwo9dJ_IuKDibzf6YglpDGZGlwILZ/view",
            linkText: "View Project",
            hoverColor: "group-hover:text-primary-600"
        },
        {
            id: 2,
            title: "Full Adder Design",
            category: ["vlsi"],
            image: "https://placehold.co/800x600/4F46E5/FFFFFF/png?text=VLSI+Adder",
            badge: "VLSI",
            badgeColor: "text-indigo-600 dark:text-indigo-400 border-slate-200 dark:border-slate-700",
            description: "Comparative analysis of 8T, 10T, and 14T full adders designed in Cadence Virtuoso. Evaluated power, delay, and area trade-offs.",
            tags: ["Cadence", "Virtuoso", "RTL"],
            link: "https://github.com/farhan-efty/Analysis-of-8T-10T-and-14T-1-bit-full-adders-in-comparison",
            linkText: "GitHub",
            hoverColor: "group-hover:text-indigo-600"
        },
        {
            id: 3,
            title: "Fire-Fighting Robot",
            category: ["robotics", "embedded"],
            image: "https://placehold.co/800x600/DC2626/FFFFFF/png?text=Fire+Robot",
            badge: "Robotics",
            badgeColor: "text-red-600 dark:text-red-400 border-slate-200 dark:border-slate-700",
            description: "Autonomous Arduino-based robot equipped with flame sensors and extinguishing mechanisms. Capable of obstacle avoidance and precise fire localization.",
            tags: ["Arduino", "C++", "Sensors"],
            link: "https://github.com/farhan-efty/Fire-Fighting-Robot-using-Arduino",
            linkText: "GitHub",
            hoverColor: "group-hover:text-red-600"
        },
        {
            id: 4,
            title: "Cable Fault Detector",
            category: ["power", "embedded"],
            image: "https://placehold.co/800x600/EAB308/FFFFFF/png?text=Cable+Fault",
            badge: "Power",
            badgeColor: "text-yellow-600 dark:text-yellow-400 border-slate-200 dark:border-slate-700",
            description: "IoT-enabled system for detecting and locating underground cable faults using Ohm’s law principles with high precision.",
            tags: ["IoT", "Arduino"],
            link: "https://github.com/farhan-efty/Underground-Cable-Fault-Detection-Using-Arduino.",
            linkText: "GitHub",
            hoverColor: "group-hover:text-yellow-600"
        },
        {
            id: 5,
            title: "8-bit Modified SAP",
            category: ["vlsi", "embedded"],
            image: "https://placehold.co/800x600/9333EA/FFFFFF/png?text=SAP+Architecture",
            badge: "Arch",
            badgeColor: "text-purple-600 dark:text-purple-400 border-slate-200 dark:border-slate-700",
            description: "Design and simulation of a modified SAP (Simple As Possible) CPU architecture. Demonstrates core concepts of computer organization and logic design.",
            tags: ["Proteus", "Logic Design"],
            link: "https://github.com/farhan-efty/8-Bit-Modified-SAP-Design",
            linkText: "GitHub",
            hoverColor: "group-hover:text-purple-600"
        },
        {
            id: 6,
            title: "BLDC Motor Controller",
            category: ["embedded", "power"],
            image: "https://placehold.co/800x600/16A34A/FFFFFF/png?text=BLDC+Controller",
            badge: "Control",
            badgeColor: "text-green-600 dark:text-green-400 border-slate-200 dark:border-slate-700",
            description: "Developed a controller for Brushless DC motors implementing electronic commutation logic and feedback from hall-effect sensors.",
            tags: ["Matlab", "Simulink"],
            link: "#", // Placeholder as per original HTML
            linkText: "View Details",
            hoverColor: "group-hover:text-green-600"
        }
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category.includes(filter));

    return (
        <div className="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 antialiased flex flex-col min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 md:pt-48 md:pb-32 relative overflow-hidden bg-[#0d1b45]">
                {/* Background Pattern */}
                <div className="absolute inset-0 z-0 opacity-20" style={{
                    backgroundImage: 'radial-gradient(#4d6bbf 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}></div>

                {/* Animated Gradient Blobs */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-[10%] w-[600px] h-[400px] bg-blue-500/30 rounded-full blur-[120px] animate-blob"></div>
                    <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[300px] bg-purple-500/20 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight min-h-[60px] md:min-h-[80px]">
                        <span id="projects-typing-text" className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"></span>
                        <span className="w-1 h-8 md:h-12 bg-cyan-300 animate-pulse inline-block ml-1 align-middle"></span>
                    </h1>
                    <p className="text-lg md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-bold">
                        Exploring the frontiers of VLSI design, Embedded Systems, and Power Engineering.
                    </p>
                </div>
            </section>

            {/* Projects Section */}
            <section className="py-12 pb-24 bg-slate-50 dark:bg-slate-900/30 flex-grow">
                <div className="container mx-auto px-6">

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-3 mb-16 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                        {[
                            { id: 'all', label: 'All Work', color: 'border-blue-500 text-blue-500' },
                            { id: 'vlsi', label: 'VLSI', color: 'hover:border-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-400' },
                            { id: 'embedded', label: 'Embedded/IoT', color: 'hover:border-green-500 hover:text-green-500 dark:hover:text-green-400' },
                            { id: 'power', label: 'Power', color: 'hover:border-yellow-500 hover:text-yellow-500 dark:hover:text-yellow-400' },
                            { id: 'robotics', label: 'Robotics', color: 'hover:border-red-500 hover:text-red-500 dark:hover:text-red-400' }
                        ].map(btn => (
                            <button
                                key={btn.id}
                                onClick={() => setFilter(btn.id)}
                                className={`px-6 py-2.5 rounded-full text-sm font-semibold border transition-all shadow-sm 
                                    ${filter === btn.id
                                        ? 'bg-blue-600 text-white border-blue-600'
                                        : `bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 ${btn.color}`
                                    }`}
                            >
                                {btn.label}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {filteredProjects.map((project, index) => (
                            <article
                                key={project.id}
                                className="project-card group relative flex flex-col h-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden animate-fadeInUp"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="relative h-52 overflow-hidden bg-slate-100 dark:bg-slate-800">
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60"></div>
                                    <span className={`absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full border ${project.badgeColor}`}>
                                        {project.badge}
                                    </span>
                                </div>
                                <div className="flex-1 p-6 flex flex-col">
                                    <div className="mb-4">
                                        <h3 className={`text-xl font-bold text-slate-900 dark:text-white mb-2 transition-colors ${project.hoverColor}`}>
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3 leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>
                                    <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className={`text-sm font-semibold text-slate-700 dark:text-slate-200 transition-colors flex items-center gap-2 ${project.hoverColor.replace('group-hover:', 'hover:')}`}>
                                                {project.linkText === 'GitHub' && <i className="fab fa-github"></i>}
                                                {project.linkText} {project.linkText !== 'GitHub' && <i className="fas fa-arrow-right text-xs"></i>}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Projects;
