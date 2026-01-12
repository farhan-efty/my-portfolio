import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Contact = () => {
    useEffect(() => {
        // Typing effect
        const textElement = document.getElementById('contact-typing-text');
        let typingTimeout;

        if (textElement) {
            const text = "Get in Touch";
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
        <div className="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 antialiased flex flex-col min-h-screen font-sans">
            <Navbar />

            <main className="flex-grow">
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
                        <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[400px] bg-blue-300/30 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '2s' }}></div>
                    </div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl mx-auto text-center animate-fadeInUp" style={{ animation: 'fadeInUp 0.6s ease-out forwards', opacity: 0, transform: 'translateY(20px)' }}>
                            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight min-h-[60px] md:min-h-[80px]">
                                <span id="contact-typing-text" className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500"></span>
                                <span className="w-1 h-8 md:h-12 bg-cyan-500 animate-pulse inline-block ml-1 align-middle"></span>
                            </h1>
                            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed font-bold">
                                Have a project in mind, a question about my research, or just want to say hello? I'm always open
                                to discussing new opportunities and ideas.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact Content */}
                <section className="container mx-auto px-6 -mt-20 relative z-20 pb-20">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

                        {/* Contact Information (Left) */}
                        <div className="space-y-8 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none h-full">

                                {/* Header Section */}
                                <div className="bg-blue-600 p-8 rounded-t-2xl border-b border-blue-500">
                                    <h3 className="text-2xl font-bold mb-2 text-white">Contact Information</h3>
                                    <p className="text-blue-100 text-md font-semibold">Feel free to reach out through any of these channels.</p>
                                </div>

                                <div className="p-8 space-y-8">
                                    {/* Email */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center text-xl shrink-0">
                                            <i className="fas fa-envelope"></i>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Email</h4>
                                            <div className="space-y-1">
                                                <div className="text-base text-slate-900 dark:text-white">
                                                    <span className="text-slate-500 dark:text-slate-400 font-semibold">Personal Mail: </span>
                                                    <a href="mailto:farhanmuhibefty@gmail.com" className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">farhanmuhibefty@gmail.com</a>
                                                </div>
                                                <div className="text-base text-slate-900 dark:text-white">
                                                    <span className="text-slate-500 dark:text-slate-400 font-semibold">Official Mail: </span>
                                                    <a href="mailto:farhan.efty@adnsemicon.com" className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">farhan.efty@adnsemicon.com</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center text-xl shrink-0">
                                            <i className="fas fa-phone"></i>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Phone</h4>
                                            <div className="space-y-1">
                                                <div className="text-base text-slate-900 dark:text-white">
                                                    <span className="text-slate-500 dark:text-slate-400 font-semibold">Personal: </span>
                                                    <a href="tel:+8801521561607" className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">+880 1521-561607</a>
                                                </div>
                                                <div className="text-base text-slate-900 dark:text-white">
                                                    <span className="text-slate-500 dark:text-slate-400 font-semibold">Office: </span>
                                                    <a href="tel:+8801329665865" className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">+880 1329-665865</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* WhatsApp */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center text-xl shrink-0">
                                            <i className="fab fa-whatsapp"></i>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">WhatsApp</h4>
                                            <div className="space-y-1">
                                                <div className="text-base text-slate-900 dark:text-white">
                                                    <span className="text-slate-500 dark:text-slate-400 font-semibold">Personal: </span>
                                                    <a href="https://wa.me/8801521561607" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">+880 1521-561607</a>
                                                </div>
                                                <div className="text-base text-slate-900 dark:text-white">
                                                    <span className="text-slate-500 dark:text-slate-400 font-semibold">Business: </span>
                                                    <a href="https://wa.me/8801329665865" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">+880 1329-665865</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Location */}
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center text-xl shrink-0">
                                            <i className="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Location</h4>
                                            <div className="space-y-3">
                                                <div>
                                                    <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 block mb-1">Home Address:</span>
                                                    <p className="text-base font-medium text-slate-900 dark:text-white leading-relaxed">
                                                        169 North Kunipara, Shanti Niketon, <br /> Tejgaon I/A, Dhaka-1208, Bangladesh
                                                    </p>
                                                </div>
                                                <div>
                                                    <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 block mb-1">Office Address:</span>
                                                    <p className="text-base font-medium text-slate-900 dark:text-white leading-relaxed">
                                                        Ambon Complex, 9th Floor, <br /> 99 Bir Uttam A. K. Khandakar Road, <br />
                                                        Mohakhali, Dhaka-1212, Bangladesh
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form (Right) */}
                        <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                            <form action="https://formspree.io/f/xnjjaogw" method="POST" className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none">

                                {/* Header Section */}
                                <div className="bg-blue-600 p-8 rounded-t-2xl border-b border-blue-500">
                                    <h3 className="text-2xl font-bold mb-2 text-white">Send Message</h3>
                                    <p className="text-blue-100 text-lg"><strong>I usually respond within 8 hours.</strong></p>
                                </div>

                                {/* Form Content */}
                                <div className="p-8 space-y-6">
                                    {/* Name */}
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name *</label>
                                        <input type="text" name="name" id="name" required
                                            className="block w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            placeholder="John Doe" />
                                    </div>

                                    {/* Company Name */}
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Company Name</label>
                                        <input type="text" name="company" id="company"
                                            className="block w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            placeholder="Company Name (Optional)" />
                                    </div>

                                    {/* Grid: Email & Phone */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Email */}
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email *</label>
                                            <input type="email" name="email" id="email" required
                                                className="block w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                placeholder="john@example.com" />
                                        </div>

                                        {/* Phone */}
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Phone *</label>
                                            <input type="tel" name="phone" id="phone" required
                                                className="block w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                                placeholder="+880xxxxxx" />
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message *</label>
                                        <textarea name="message" id="message" rows="4" required
                                            className="block w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"></textarea>
                                    </div>

                                    <button type="submit"
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-600/30 flex items-center justify-center gap-2 group">
                                        <span>Send Message</span>
                                        <i className="fas fa-paper-plane group-hover:translate-x-1 transition-transform"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;
