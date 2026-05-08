import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import SEO from './SEO';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Home from './Home';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Leadership from './Leadership';
import Education from './Education';
import Contact from './Contact';

function App() {
    useEffect(() => {
        // Force dark mode globally to match original theme
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        
        AOS.init({
            duration: 800,
            once: true,
            offset: 50,
        });
    }, []);

    return (
        <Router>
            <ScrollToTop />
            <SEO />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/index.html" element={<Home />} />
                <Route path="/experience.html" element={<Experience />} />
                <Route path="/skills.html" element={<Skills />} />
                <Route path="/project.html" element={<Projects />} />
                <Route path="/leadership.html" element={<Leadership />} />
                <Route path="/education.html" element={<Education />} />
                <Route path="/contact.html" element={<Contact />} />
                {/* Fallback routes for navigation without .html extension */}
                <Route path="/experience" element={<Experience />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/leadership" element={<Leadership />} />
                <Route path="/education" element={<Education />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;
// Re-deployment trigger
