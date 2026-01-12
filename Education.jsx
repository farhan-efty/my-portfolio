import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Education = () => {
    useEffect(() => {
        // Typing effect
        const textElement = document.getElementById('education-typing-text');
        let typingTimeout;

        if (textElement) {
            const text = "Academic Journey";
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
        <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-300 font-sans antialiased selection:bg-emerald-500 selection:text-white flex flex-col min-h-screen transition-colors duration-300">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 md:pt-48 md:pb-24 relative overflow-hidden bg-[#0d1b45]">
                {/* Background Pattern */}
                <div className="absolute inset-0 z-0 opacity-20" style={{
                    backgroundImage: 'radial-gradient(#4d6bbf 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}></div>

                {/* Animated Gradient Blobs */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-blob"></div>
                    <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight min-h-[60px] md:min-h-[80px]">
                        <span id="education-typing-text" className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"></span>
                        <span className="w-1 h-8 md:h-12 bg-cyan-300 animate-pulse inline-block ml-1 align-middle"></span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed text-justify font-bold">
                        Building a strong foundation in Electrical & Electronic Engineering with a focus on VLSI, Embedded Systems, and Power.
                    </p>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-16 bg-slate-50 dark:bg-slate-950 flex-grow">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="relative">
                        <div className="absolute left-[22px] top-0 bottom-0 w-1 bg-emerald-600"></div>

                        {/* B.Sc. Degree */}
                        <div className="timeline-item relative mb-12 pl-16 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
                            <div className="absolute left-0 top-0 w-12 h-12 bg-emerald-600 rounded-full border-[6px] border-white dark:border-slate-900 flex items-center justify-center z-20">
                                <i className="fas fa-graduation-cap text-white text-lg"></i>
                            </div>

                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                                <div className="relative bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-bl-full z-0"></div>
                                    <div className="relative z-10">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                            <div>
                                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">B.Sc. in Electrical and Electronic Engineering</h3>
                                                <p className="text-lg text-emerald-600 dark:text-emerald-400 font-semibold">Ahsanullah University of Science and Technology (AUST)</p>
                                            </div>
                                            <div className="text-right mt-2 md:mt-0">
                                                <p className="text-sm text-slate-500 dark:text-slate-400"><i className="far fa-calendar-alt mr-1"></i>2019 – 2023</p>
                                                <p className="text-sm text-slate-500 dark:text-slate-400"><i className="fas fa-star text-yellow-500 mr-1"></i>CGPA: 3.475 / 4.00</p>
                                            </div>
                                        </div>
                                        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-justify">
                                            Four-year undergraduate degree in Electrical & Electronic Engineering with a focus on VLSI design, digital systems, embedded computing and power systems. Completed all 165 credits in 8 semesters (medium of instruction: English).
                                        </p>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            {/* VLSI & Digital Design */}
                                            <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                                                <h5 className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                                                    <i className="fas fa-microchip text-emerald-500"></i> VLSI & Digital Design
                                                </h5>
                                                <p className="text-sm text-slate-600 dark:text-slate-300 mb-1 text-justify">
                                                    CMOS logic, RTL-level thinking and digital system architecture.
                                                </p>
                                                <p className="text-xs text-slate-500 dark:text-slate-300 italic text-justify">
                                                    VLSI-I & VLSI Lab, Digital Electronics I & Lab, Microprocessor, Interfacing and System Design (+ Lab), Computer Architecture
                                                </p>
                                            </div>

                                            {/* Electronics & Semiconductor Devices */}
                                            <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                                                <h5 className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                                                    <i className="fas fa-atom text-emerald-500"></i> Electronics & Semiconductor Devices
                                                </h5>
                                                <p className="text-sm text-slate-600 dark:text-slate-300 mb-1 text-justify">
                                                    Transistor-level circuits and device behavior essential for chip design.
                                                </p>
                                                <p className="text-xs text-slate-500 dark:text-slate-300 italic text-justify">
                                                    Electronics I & II (+ Labs), Solid State Devices, Electrical Properties of Materials, Processing and Fabrication Technology, Electronic Circuit Simulation Labs
                                                </p>
                                            </div>

                                            {/* Signals, Communication & Control */}
                                            <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                                                <h5 className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                                                    <i className="fas fa-wave-square text-emerald-500"></i> Signals, Communication & Control
                                                </h5>
                                                <p className="text-sm text-slate-600 dark:text-slate-300 mb-1 text-justify">
                                                    Signal modeling, communication links and feedback systems.
                                                </p>
                                                <p className="text-xs text-slate-500 dark:text-slate-300 italic text-justify">
                                                    Signals and Linear Systems, Digital Signal Processing I & Lab, Communication Theory & Lab, Optical Fiber Communication, Control System I & Lab
                                                </p>
                                            </div>

                                            {/* Power & Energy Systems */}
                                            <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                                                <h5 className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                                                    <i className="fas fa-bolt text-emerald-500"></i> Power & Energy Systems
                                                </h5>
                                                <p className="text-sm text-slate-600 dark:text-slate-300 mb-1 text-justify">
                                                    Analysis and control of modern power networks and converters.
                                                </p>
                                                <p className="text-xs text-slate-500 dark:text-slate-300 italic text-justify">
                                                    Energy Conversion I & II (+ Labs), Power System I & II (+ Labs), Power Electronics, Power System Protection & Lab
                                                </p>
                                            </div>
                                        </div>

                                        {/* Undergraduate Thesis */}
                                        <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg mt-6">
                                            <h5 className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                                                <i className="fas fa-book text-emerald-500"></i> Undergraduate Thesis
                                            </h5>
                                            <p className="text-sm text-slate-600 dark:text-slate-300 mb-1 text-justify">
                                                Development of Intelligent Battery Management System for Electric Vehicle
                                            </p>
                                            <p className="text-xs text-slate-500 dark:text-slate-300 italic text-justify">
                                                As part of my final-year capstone, I worked in a four-member team to design and implement an STM32F446RE-based intelligent Battery Management System (BMS) for a series-connected EV battery pack. The system performs real-time per-cell voltage and temperature monitoring using a CD4051BE analog multiplexer, voltage-divider–based sensors and DS18B20 temperature probes, with data acquired through the STM32’s 12-bit ADC and custom embedded C firmware. A DC motor load was used to emulate EV discharge conditions while algorithms detected over-discharge, under-voltage and thermal anomalies, allowing isolation of unhealthy cells and detailed analysis of the relationship between temperature, voltage and discharge behavior. The prototype demonstrated that multiplexed sensing can significantly reduce sensor count and hardware cost while maintaining accurate monitoring, providing a scalable foundation for low-cost BMS solutions in electric vehicles.
                                            </p>
                                        </div>

                                        <p className="text-xs text-slate-500 dark:text-slate-300 mt-4 italic text-justify">
                                            (Official provisional transcript and full course list available on request.)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* HSC */}
                        <div className="timeline-item relative mb-12 pl-16 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                            <div className="absolute left-0 top-0 w-12 h-12 bg-emerald-600 rounded-full border-[6px] border-white dark:border-slate-900 flex items-center justify-center z-20">
                                <i className="fas fa-university text-white text-lg"></i>
                            </div>

                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                                <div className="relative bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-bl-full z-0"></div>
                                    <div className="relative z-10">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                                            <div>
                                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Higher Secondary Certificate (HSC)</h3>
                                                <p className="text-slate-600 dark:text-slate-400">Dhaka City College, Dhaka</p>
                                            </div>
                                            <div className="text-right mt-2 md:mt-0">
                                                <p className="text-sm text-slate-500 dark:text-slate-400"><i className="far fa-calendar-alt mr-1"></i>2016 – 2018</p>
                                                <p className="text-sm text-slate-500 dark:text-slate-400"><i className="fas fa-star text-yellow-500 mr-1"></i>GPA: 5.00 / 5.00</p>
                                            </div>
                                        </div>
                                        <p className="text-slate-600 dark:text-slate-400 text-justify">
                                            Science stream with concentration in Physics, Chemistry and Mathematics.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* SSC */}
                        <div className="timeline-item relative pl-16 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
                            <div className="absolute left-0 top-0 w-12 h-12 bg-emerald-600 rounded-full border-[6px] border-white dark:border-slate-900 flex items-center justify-center z-20">
                                <i className="fas fa-school text-white text-lg"></i>
                            </div>

                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                                <div className="relative bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-bl-full z-0"></div>
                                    <div className="relative z-10">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                                            <div>
                                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Secondary School Certificate (SSC)</h3>
                                                <p className="text-slate-600 dark:text-slate-400">Gobindaganj Govt. High School, Gobindaganj</p>
                                            </div>
                                            <div className="text-right mt-2 md:mt-0">
                                                <p className="text-sm text-slate-500 dark:text-slate-400"><i className="far fa-calendar-alt mr-1"></i>2016</p>
                                                <p className="text-sm text-slate-500 dark:text-slate-400"><i className="fas fa-star text-yellow-500 mr-1"></i>GPA: 5.00 / 5.00</p>
                                            </div>
                                        </div>
                                        <p className="text-slate-600 dark:text-slate-400 text-justify">
                                            Completed SSC in the Science group with distinction.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-full font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm hover:shadow-md">
                            <i className="fas fa-arrow-left"></i> Back to Home
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Education;
