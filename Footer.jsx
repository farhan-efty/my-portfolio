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
                    <div className="text-center md:text-right flex flex-col md:items-end">
                        <h4 className="text-2xl font-bold text-white mb-6">Connect</h4>
                        <p className="text-slate-400 mb-8 max-w-sm mx-auto md:mx-0">
                            Open for collaborations and interesting conversations about Technology and Business.
                        </p>

                        <div className="flex flex-col items-center md:items-end gap-6 w-full">
                            {/* Social Icons */}
                            <div className="flex gap-5 flex-wrap justify-center md:justify-end text-3xl">
                                <a href="https://github.com/farhan-efty" target="_blank" aria-label="Github"
                                    className="text-white hover:text-slate-300 transition-transform hover:scale-110">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/farhanmuhibefty/" target="_blank" aria-label="LinkedIn"
                                    className="text-[#0a66c2] hover:opacity-80 transition-transform hover:scale-110">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="https://www.facebook.com/fmefty/" target="_blank" aria-label="Facebook"
                                    className="text-[#1877f2] hover:opacity-80 transition-transform hover:scale-110">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="https://www.instagram.com/farhan__muhib/" target="_blank" aria-label="Instagram"
                                    className="transition-transform hover:scale-110 hover:opacity-80">
                                    <i className="fab fa-instagram" style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}></i>
                                </a>
                                <a href="https://farhan-efty.netlify.app/" target="_blank" aria-label="Website"
                                    className="text-teal-400 hover:text-teal-300 transition-transform hover:scale-110">
                                    <i className="fas fa-globe"></i>
                                </a>
                            </div>
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
