import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Experience = () => {
    useEffect(() => {
        // Typing effect
        const textElement = document.getElementById('experience-typing-text');
        let typingTimeout;

        if (textElement) {
            const text = "Professional Experience";
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

    return (
        <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-300 font-sans antialiased selection:bg-blue-500 selection:text-white flex flex-col min-h-screen">
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
                        <span id="experience-typing-text" className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"></span>
                        <span className="w-1 h-8 md:h-12 bg-cyan-300 animate-pulse inline-block ml-1 align-middle"></span>
                    </h1>
                    <p className="text-lg md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-bold">
                        My professional journey in RTL Design and Verification.
                    </p>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20 bg-slate-50 dark:bg-slate-950 flex-grow">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="space-y-12 relative">
                        {/* Vertical Line */}
                        <div className="absolute left-8 md:left-16 top-0 h-full w-1 bg-blue-600 -translate-x-1/2"></div>

                        {/* Role 1 */}
                        <div className="timeline-card group animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
                            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                                {/* Timeline Dot and Icon */}
                                <div className="flex md:flex-col items-start md:items-center gap-4 md:gap-0 md:w-32 shrink-0">
                                    <div className="timeline-icon w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300 relative z-10 border-[6px] border-white dark:border-slate-900">
                                        <i className="fas fa-briefcase text-2xl"></i>
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="flex-1 relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                                    <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-md hover:shadow-xl p-6 md:p-8 transition-all duration-300 border border-slate-200 dark:border-slate-800 group-hover:border-blue-400 dark:group-hover:border-blue-600 overflow-hidden hover:-translate-y-1">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full"></div>
                                        <div className="relative z-10">
                                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                                                <div>
                                                    <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">Assistant Engineer</h3>
                                                    <p className="text-lg text-slate-600 dark:text-slate-300 font-semibold mb-1">RTL Design and Verification</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-medium">
                                                        <a href="https://adnsemicon.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors font-bold">ADN SEMICONDUCTORS</a>
                                                    </p>
                                                </div>
                                                <span className="text-sm font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-full whitespace-nowrap">Jan 2026 – Present</span>
                                            </div>
                                            <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-justify">
                                                <li className="flex items-start gap-3">
                                                    <i className="fa-solid fa-circle-check text-blue-500 mt-1 shrink-0"></i>
                                                    <span><strong>RTL Design & Verification:</strong> Developed production-ready RTL designs and comprehensive verification environments using SystemVerilog and UVM, culminating in a complete APB-UART implementation with full verification closure.</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <i className="fa-solid fa-circle-check text-blue-500 mt-1 shrink-0"></i>
                                                    <span><strong>Verification Methodologies:</strong> Built layered testbench architectures featuring reusable components including bus functional models (BFMs), monitors, scoreboards, and checkers. Implemented constrained-random stimulus generation, functional coverage models, and SystemVerilog Assertions (SVA) to drive verification quality and closure metrics.</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <i className="fa-solid fa-circle-check text-blue-500 mt-1 shrink-0"></i>
                                                    <span><strong>Protocol & Interface Design:</strong> Designed and verified industry-standard protocols including AMBA APB and UART peripheral controllers, demonstrating proficiency in register map design, transaction-level modeling, and protocol compliance verification.</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <i className="fa-solid fa-circle-check text-blue-500 mt-1 shrink-0"></i>
                                                    <span><strong>EDA Tools & Workflows:</strong> Leveraged AMD Xilinx Vivado for simulation and synthesis, integrated with modern development workflows using VS Code, Git version control, and automated regression testing frameworks.</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <i className="fa-solid fa-circle-check text-blue-500 mt-1 shrink-0"></i>
                                                    <span><strong>Debug & Problem Solving:</strong> Applied systematic debugging methodologies to triage simulation failures, isolate root causes in complex testbench-RTL interactions, and document fixes with clear technical rationale—demonstrating production-team readiness.</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <i className="fa-solid fa-circle-check text-blue-500 mt-1 shrink-0"></i>
                                                    <span><strong>Design for Verification:</strong> Architected RTL with clean module boundaries, robust clock/reset strategies, and verification-friendly interfaces, enabling efficient testbench development and comprehensive corner-case coverage.</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Role 2 */}
                        <div className="timeline-card group animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                                {/* Timeline Dot and Icon */}
                                <div className="flex md:flex-col items-start md:items-center gap-4 md:gap-0 md:w-32 shrink-0">
                                    <div className="timeline-icon w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300 relative z-10 border-[6px] border-white dark:border-slate-900">
                                        <i className="fas fa-briefcase text-2xl"></i>
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="flex-1 relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                                    <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-md hover:shadow-xl p-6 md:p-8 transition-all duration-300 border border-slate-200 dark:border-slate-800 group-hover:border-blue-400 dark:group-hover:border-blue-600 overflow-hidden hover:-translate-y-1">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full"></div>
                                        <div className="relative z-10">
                                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                                                <div>
                                                    <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">Trainee Engineer</h3>
                                                    <p className="text-lg text-slate-600 dark:text-slate-300 font-semibold mb-1">RTL Design and Verification</p>
                                                    <p className="text-slate-600 dark:text-slate-400 font-medium">
                                                        <a href="https://adndiginet.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors font-bold">ADN DigiNet</a>
                                                    </p>
                                                </div>
                                                <span className="text-sm font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-full whitespace-nowrap">Sep 2025 – Dec 2025</span>
                                            </div>
                                            <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-justify">
                                                <li className="flex items-start gap-3">
                                                    <i className="fa-solid fa-circle-check text-blue-500 mt-1 shrink-0"></i>
                                                    <span><strong>VLSI & Verification Training:</strong> Developing expertise in Design Verification (DV) methodologies, with a strong focus on constructing advanced testbench architectures using SystemVerilog and UVM.</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <i className="fa-solid fa-circle-check text-blue-500 mt-1 shrink-0"></i>
                                                    <span><strong>Simulation & Tools:</strong> Utilizing industry-standard EDA tools for circuit simulation and verification, while optimizing development workflows through VS Code, Git Bash, and Makefiles.</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <i className="fa-solid fa-circle-check text-blue-500 mt-1 shrink-0"></i>
                                                    <span><strong>Debugging & Analysis:</strong> Performing rigorous analysis of simulation data to identify design anomalies and supporting the debugging process to ensure functional correctness prior to tapeout.</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Experience;
