import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
    useEffect(() => {
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

        // Typing effect
        const textElement = document.getElementById('about-typing-text');
        let typingTimeout;

        if (textElement) {
            const text = "About Me";
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

                let typeSpeed = 150;

                if (isDeleting) {
                    typeSpeed = 75;
                }

                if (!isDeleting && charIndex === text.length) {
                    isDeleting = true;
                    typeSpeed = 2000;
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    typeSpeed = 600;
                }

                typingTimeout = setTimeout(type, typeSpeed);
            };

            type();
        }

        return () => {
            observer.disconnect();
            if (typingTimeout) clearTimeout(typingTimeout);
        };
    }, []);

    return (
        <div className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-300 font-sans antialiased selection:bg-blue-500 selection:text-white flex flex-col min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 md:pt-48 md:pb-32 relative overflow-hidden bg-[#0b163b]">
                {/* Background Pattern */}
                <div className="absolute inset-0 z-0 opacity-20" style={{
                    backgroundImage: 'radial-gradient(#4d6bbf 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}></div>

                 {/* Animated Gradient Blobs */}
                 <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-[10%] w-[600px] h-[400px] bg-blue-500/30 rounded-full blur-[120px] animate-blob"></div>
                    <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[300px] bg-teal-500/20 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                     <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight min-h-[60px] md:min-h-[80px]">
                        <span id="about-typing-text" className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300"></span>
                        <span className="w-1 h-8 md:h-12 bg-teal-300 animate-pulse inline-block ml-1 align-middle"></span>
                    </h1>
                    <p className="text-lg md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-bold">
                        Passionate about Silicon Perfection and VLSI Design.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-slate-50 dark:bg-slate-950 flex-grow">
                 <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {/* Left Column - Info Cards */}
                            <div className="lg:col-span-2 space-y-8">
                                {/* Professional Background Card */}
                                <div className="bg-white dark:bg-[#15224a] rounded-3xl p-8 border border-slate-200 dark:border-slate-700/50 hover:border-blue-500/30 transition-all shadow-xl animate-fadeInUp">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white text-xl shadow-lg shadow-blue-600/20">
                                            <i className="fas fa-user-tie"></i>
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Professional Background</h3>
                                    </div>
                                    <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                                        <p>
                                            I'm <strong className="text-slate-900 dark:text-white">Farhan Muhib Efty</strong>, an Electrical and Electronic Engineering graduate and
                                            currently a <strong className="text-slate-900 dark:text-white">Assistant Engineer</strong> at <a href="https://www.adnsemicon.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 font-bold hover:underline">ADN SEMICONDUCTORS</a>.
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
                                    <div className="bg-white dark:bg-[#15224a] rounded-3xl p-8 border border-slate-200 dark:border-slate-700/50 hover:border-indigo-500/30 transition-all shadow-xl flex flex-col items-start gap-4 h-full">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center text-white text-xl shadow-lg shadow-indigo-600/20">
                                                <i className="fas fa-microchip"></i>
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Technical Focus</h3>
                                        </div>
                                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed text-justify">
                                            Specializing in <strong className="text-slate-900 dark:text-white">VLSI Design Verification (DV)</strong> using SystemVerilog
                                            and UVM to ensure bug-free chip designs.
                                        </p>
                                    </div>

                                    {/* Vision */}
                                    <div className="bg-white dark:bg-[#15224a] rounded-3xl p-8 border border-slate-200 dark:border-slate-700/50 hover:border-purple-500/30 transition-all shadow-xl flex flex-col items-start gap-4 h-full">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center text-white text-xl shadow-lg shadow-purple-600/20">
                                                <i className="fas fa-rocket"></i>
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Vision</h3>
                                        </div>
                                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed text-justify">
                                            Aiming to tackle complex verification challenges and contribute to next-gen
                                            semiconductor technologies.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Image */}
                            <div className="lg:col-span-1 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                                <div className="h-full bg-gradient-to-b from-teal-800/20 to-teal-900/10 rounded-[3rem] p-2 border border-slate-200 dark:border-slate-700/30 overflow-hidden relative">
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

            <Footer />
        </div>
    );
};

export default About;
