import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Leadership = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        // Typing effect
        const textElement = document.getElementById('leadership-typing-text');
        let typingTimeout;

        if (textElement) {
            const texts = ["Leadership", "Volunteering"];
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

                let typeSpeed = 150; // Very slow typing

                if (isDeleting) {
                    typeSpeed = 75; // Slow deleting
                }

                if (!isDeleting && charIndex === currentText.length) {
                    isDeleting = true;
                    typeSpeed = 2000; // Long pause at display
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % texts.length;
                    typeSpeed = 600; // Pause before restarting
                }

                typingTimeout = setTimeout(type, typeSpeed);
            };

            type();
        }

        const handleScroll = () => {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (typingTimeout) clearTimeout(typingTimeout);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const leadershipRoles = [
        {
            title: "Membership Development Coordinator",
            organization: "IEEE Young Professionals Bangladesh",
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
            organization: "IEEE Power & Energy Society, AUST Student Branch Chapter",
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
            period: "Nov 2021 – May 2022",
            achievements: [
                "Responsible for coordinating events, seminars, and workshops.",
                "Successfully managed the planning and execution of departmental activities including the picnic \"Tridib Ucchash,\" sports events, and AUST EEE DAY.",
                "Organized the Three Minutes Thesis presentation program within the department.",
                "Contributed as a volunteer at Tech Fiesta."
            ]
        }
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
                        <span id="leadership-typing-text" className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"></span>
                        <span className="w-1 h-8 md:h-12 bg-cyan-300 animate-pulse inline-block ml-1 align-middle"></span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-bold">
                        A journey of leading teams, organizing impactful events, and contributing to the engineering community.
                    </p>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20 bg-slate-50 dark:bg-slate-950 flex-grow">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="space-y-12">
                        {leadershipRoles.map((role, index) => (
                            <div
                                key={index}
                                className="timeline-card group animate-fadeInUp"
                                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                            >
                                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                                    {/* Timeline Dot and Icon */}
                                    <div className="flex md:flex-col items-start md:items-center gap-4 md:gap-0 md:w-32 shrink-0">
                                        <div
                                            className="timeline-icon w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 shadow-md group-hover:scale-110 transition-transform duration-300"
                                            style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                                        >
                                            <i className="fas fa-user-tie text-2xl"></i>
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="flex-1 relative">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-emerald-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                                        <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-md hover:shadow-xl p-6 md:p-8 transition-all duration-300 border border-slate-200 dark:border-slate-800 group-hover:border-primary-400 dark:group-hover:border-primary-600 overflow-hidden hover:-translate-y-1">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-transparent rounded-bl-full"></div>
                                            <div className="relative z-10">
                                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                                                    <div>
                                                        <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">{role.title}</h3>
                                                        <p className="text-lg text-slate-700 dark:text-slate-300 font-semibold">{role.organization}</p>
                                                    </div>
                                                    <span className="text-sm font-bold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 px-4 py-2 rounded-full whitespace-nowrap">
                                                        {role.period}
                                                    </span>
                                                </div>
                                                <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                                                    {role.achievements.map((item, i) => (
                                                        <li key={i} className="flex items-start gap-3">
                                                            <i className="fa-solid fa-circle-check text-primary-500 mt-1 shrink-0"></i>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-5 right-5 rounded-full p-3 bg-primary-600 text-white shadow-lg transition-all hover:bg-primary-700 z-50"
                    aria-label="Scroll to top"
                >
                    <i className="fa-solid fa-arrow-up"></i>
                </button>
            )}
        </div>
    );
};

export default Leadership;
