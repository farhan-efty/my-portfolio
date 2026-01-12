import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Skills = () => {
    useEffect(() => {
        // Typing effect
        const textElement = document.getElementById('skills-typing-text');
        let typingTimeout;

        if (textElement) {
            const text = "Technical Expertise";
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

    const skillCategories = [
        {
            title: "Hardware Design & Verification",
            icon: "fas fa-microchip",
            iconBg: "bg-blue-100 dark:bg-blue-900/30",
            iconColor: "text-blue-600",
            items: [
                { name: "SystemVerilog", icon: "fas fa-microchip text-primary-500", desc: "Advanced proficiency in SV for both design (RTL) and verification (OVM/UVM)." },
                { name: "UVM (Universal Verification Methodology)", icon: "fas fa-sitemap text-purple-500", desc: "Experience building layered testbenches, drivers, monitors, scoreboards, and coverage models." },
                { name: "Verilog / RTL Design", icon: "fas fa-wave-square text-green-500", desc: "Solid foundation in digital logic design, FSMs, and synthesizable RTL coding." }
            ]
        },
        {
            title: "EDA Tools & IDEs",
            icon: "fas fa-tools",
            iconBg: "bg-orange-100 dark:bg-orange-900/30",
            iconColor: "text-orange-600",
            items: [
                { name: "Cadence Virtuoso", icon: "fas fa-microchip text-orange-500", desc: "Custom IC design, schematic capture, and layout editing." },
                { name: "AMD Xilinx Vivado", icon: "fas fa-layer-group text-red-500", desc: "FPGA design, synthesis, and implementation suite." },
                { name: "Intel Quartus", icon: "fas fa-memory text-blue-500", desc: "CPLD and FPGA design software for Intel devices." },
                { name: "ModelSim / Questa", icon: "fas fa-wave-square text-green-500", desc: "Advanced functional verification and debugging." },
                { name: "Proteus Design", icon: "fas fa-bezier-curve text-purple-500", desc: "Circuit simulation and PCB design automation." },
                { name: "Linux", icon: "fab fa-linux text-yellow-500", desc: "Development, scripting, and server management." }
            ]
        },
        {
            title: "Protocols & Architectures",
            icon: "fas fa-network-wired",
            iconBg: "bg-green-100 dark:bg-green-900/30",
            iconColor: "text-green-600",
            items: [
                {
                    name: "AMBA Protocols",
                    desc: "Extensive experience with ARM AMBA interconnect specifications.",
                    tags: ["APB", "AHB", "AXI4-Lite"],
                    tagColor: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                },
                {
                    name: "Communication Protocols",
                    desc: "Implementation and verification of standard serial interfaces.",
                    tags: ["UART", "SPI", "I2C"],
                    tagColor: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                }
            ]
        },
        {
            title: "Programming Languages",
            icon: "fas fa-code",
            iconBg: "bg-purple-100 dark:bg-purple-900/30",
            iconColor: "text-purple-600",
            items: [
                { name: "C / C++", icon: "fab fa-cuttlefish text-purple-500", desc: "Embedded systems programming and algorithmic problem solving." },
                { name: "Python", icon: "fab fa-python text-yellow-500", desc: "Scripting, automation, and data analysis." },
                { name: "MATLAB", icon: "fas fa-table text-orange-500", desc: "Mathematical modeling and simulation." },
                { name: "SQL", icon: "fas fa-database text-blue-400", desc: "Database query and management fundamentals." }
            ]
        },
        {
            title: "Data Analysis & Visualization",
            icon: "fas fa-chart-bar",
            iconBg: "bg-cyan-100 dark:bg-cyan-900/30",
            iconColor: "text-cyan-600",
            items: [
                { name: "Power BI", icon: "fas fa-chart-line text-yellow-500", desc: "Interactive data visualization and business analytics." },
                { name: "Tableau", icon: "fas fa-table text-blue-500", desc: "Business intelligence and data visualization." }
            ]
        },
        {
            title: "Creative & Design Tools",
            icon: "fas fa-pen-nib",
            iconBg: "bg-indigo-100 dark:bg-indigo-900/30",
            iconColor: "text-indigo-600",
            items: [
                {
                    name: "Adobe Creative Cloud",
                    icon: "fab fa-adobe text-red-500",
                    desc: "Professional graphics and video editing suite.",
                    tags: ["Illustrator", "Photoshop", "Premiere Pro"],
                    tagColor: "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                },
                { name: "Affinity Suite", icon: "fas fa-palette text-pink-500", desc: "Vector design and photo editing alternatives." },
                { name: "Canva", icon: "fas fa-magic text-teal-500", desc: "Rapid visual design and infographic creation." }
            ]
        },
        {
            title: "Productivity Tools",
            icon: "fas fa-briefcase",
            iconBg: "bg-teal-100 dark:bg-teal-900/30",
            iconColor: "text-teal-600",
            items: [
                { name: "Office Suite", icon: "fa-solid fa-file-word text-blue-500", desc: "Proficient in Word, Excel, and PowerPoint documents." },
                { name: "Google Workspace", icon: "fab fa-google text-red-500", desc: "Collaborative document and sheet management." },
                { name: "LaTeX", icon: "fas fa-subscript text-slate-700 dark:text-slate-300", desc: "Professional technical and scientific documentation." }
            ]
        }
    ];

    const softSkills = [
        { name: "Leadership", icon: "fas fa-chess-king" },
        { name: "Problem Solving", icon: "fas fa-brain" },
        { name: "Time Management", icon: "fas fa-stopwatch" },
        { name: "Communication", icon: "fas fa-comments" },
        { name: "Critical Thinking", icon: "fas fa-lightbulb" },
        { name: "Analytical Ability", icon: "fas fa-chart-pie" }
    ];

    return (
        <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-300 font-sans antialiased selection:bg-primary-500 selection:text-white flex flex-col min-h-screen">
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
                        <span id="skills-typing-text" className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"></span>
                        <span className="w-1 h-8 md:h-12 bg-cyan-300 animate-pulse inline-block ml-1 align-middle"></span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-bold">
                        A comprehensive overview of my technical arsenal in VLSI, Embedded Systems, and Software Engineering.
                    </p>
                </div>
            </section>

            {/* Skills Categories */}
            <section className="py-20 bg-slate-50 dark:bg-slate-950 flex-grow">
                <div className="container mx-auto px-6 max-w-6xl space-y-16">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="animate-fadeInUp" style={{ animationDelay: `${(index + 1) * 0.1}s` }}>
                            <div className="flex items-center gap-4 mb-8 border-b border-gray-200 dark:border-gray-800 pb-4">
                                <div className={`w-12 h-12 rounded-xl ${category.iconBg} ${category.iconColor} flex items-center justify-center text-2xl`}>
                                    <i className={category.icon}></i>
                                </div>
                                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{category.title}</h2>
                            </div>
                            <div className={`grid grid-cols-1 md:grid-cols-2 ${category.items.length > 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-3'} gap-6`}>
                                {category.items.map((item, idx) => (
                                    <div key={idx} className={`skill-card bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-400`}>
                                        {item.icon && (
                                            <div className="flex items-center gap-3 mb-2">
                                                <i className={`${item.icon} text-xl`}></i>
                                                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">{item.name}</h3>
                                            </div>
                                        )}
                                        {!item.icon && (
                                            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">{item.name}</h3>
                                        )}

                                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">{item.desc}</p>

                                        {item.tags && (
                                            <div className="flex flex-wrap gap-2">
                                                {item.tags.map((tag, tIdx) => (
                                                    <span key={tIdx} className={`px-2 py-1 ${item.tagColor || 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'} text-xs rounded font-medium`}>
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Soft Skills */}
                    <div className="animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                        <div className="flex items-center gap-4 mb-8 border-b border-gray-200 dark:border-gray-800 pb-4">
                            <div className="w-12 h-12 rounded-xl bg-pink-100 dark:bg-pink-900/30 text-pink-600 flex items-center justify-center text-2xl">
                                <i className="fas fa-users"></i>
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Soft Skills</h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {softSkills.map((skill, index) => (
                                <div key={index} className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-center hover:border-pink-300 transition-colors">
                                    <i className={`${skill.icon} text-pink-500 text-2xl mb-2`}></i>
                                    <h3 className="font-semibold text-slate-800 dark:text-slate-200">{skill.name}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Skills;
