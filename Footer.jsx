import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-slate-900 mt-auto">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 pb-12 border-b border-slate-800 items-start">
                    {/* Contact Column */}
                    <div className="text-center md:text-left">
                        <h4 className="text-2xl font-bold text-white mb-6">Get in Touch</h4>
                        <ul className="space-y-4 text-base inline-block text-left">
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-primary-500 shrink-0">
                                    <i className="fas fa-map-marker-alt text-lg"></i>
                                </div>
                                <div>
                                    <span className="block text-slate-400 text-sm">Location</span>
                                    <span className="text-white font-medium">169 North Kunipara, Shanti Niketon, <br />Tejgaon I/A, Dhaka-1208, Bangladesh</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-primary-500 shrink-0">
                                    <i className="fas fa-phone text-lg"></i>
                                </div>
                                <div>
                                    <span className="block text-slate-400 text-sm">Phone</span>
                                    <a href="tel:+8801521561607" className="hover:text-white transition-colors block font-medium">+880 1521-561607</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-green-500 shrink-0">
                                    <i className="fab fa-whatsapp text-lg"></i>
                                </div>
                                <div>
                                    <span className="block text-slate-400 text-sm">WhatsApp</span>
                                    <a href="https://wa.me/8801521561607" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors block font-medium">+880 1521-561607</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-primary-500 shrink-0">
                                    <i className="fas fa-envelope text-lg"></i>
                                </div>
                                <div>
                                    <span className="block text-slate-400 text-sm">Email</span>
                                    <a href="mailto:farhanmuhibefty@gmail.com" className="hover:text-white transition-colors block font-medium">farhanmuhibefty@gmail.com</a>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Social & Resources Column */}
                    <div className="text-center md:text-left">
                        <h4 className="text-2xl font-bold text-white mb-6">Connect</h4>
                        <p className="text-slate-400 mb-8 max-w-md mx-auto md:mx-0">
                            Open for collaborations and interesting conversations about Technology and Business.
                        </p>

                        <div className="flex flex-col items-center md:items-start gap-6">
                            {/* Social Icons */}
                            <div className="flex gap-3">
                                <a href="https://github.com/farhan-efty" target="_blank" aria-label="Github"
                                    className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/farhanmuhibefty/" target="_blank" aria-label="LinkedIn"
                                    className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="https://www.facebook.com/fmefty/" target="_blank" aria-label="Facebook"
                                    className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://www.instagram.com/farhan__muhib/" target="_blank" aria-label="Instagram"
                                    className="w-10 h-10 rounded-lg bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="https://farhan-efty.github.io/my-portfolio/" target="_blank" aria-label="Website"
                                    className="w-10 h-10 rounded-lg bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 flex items-center justify-center hover:bg-teal-600 hover:text-white transition-all">
                                    <i className="fas fa-globe"></i>
                                </a>
                            </div>

                            {/* Resume Button */}
                            <a href="https://drive.google.com/file/d/1nde19rHgUe3i7HwDqjJ26hG0JiTNcpS2/view?usp=sharing"
                                target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-semibold transition-all hover:shadow-lg hover:-translate-y-1">
                                <i className="fas fa-file-alt"></i> Download Resume
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 text-center text-slate-500 text-sm">
                    <p>&copy; <span id="year">{currentYear}</span> Farhan Muhib Efty. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
