# Portfolio Website - Farhan Muhib Efty

A modern, professional portfolio website showcasing my experience, projects, and skills in VLSI Design Verification and Semiconductor Engineering.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Multi-Page Layout**: Dedicated pages for Leadership, Education, and Projects for in-depth details
- **Dark Mode Support**: Automatic dark/light theme switching based on system preferences
- **Interactive UI**: Collapsible sections, project filtering, smooth timeline animations, and hover effects
- **SEO Optimized**: Includes meta tags, Open Graph, and structured data for better search visibility
- **Project Filtering**: Advanced filtering system on the projects page by categories (VLSI, Embedded/IoT, Power, Robotics, Architecture)
- **Timeline Animations**: Staggered animations for timeline elements in leadership and education sections
- **Mobile-First Navigation**: Glass-morphism navigation with mobile menu toggle
- **Contact Integration**: Direct WhatsApp integration and comprehensive contact information

## 🛠️ Technologies Used

- **HTML5**: Semantic markup for better accessibility and SEO
- **Tailwind CSS**: Utility-first CSS framework via CDN with custom configuration
- **Font Awesome**: Icon library for social media and UI elements
- **Google Fonts**: Inter font family for modern typography
- **Vanilla JavaScript**: For interactive features, filtering, theme management, and animations
- **CSS Animations**: Custom keyframes for fade-in, scale, and slide effects

## 📂 Project Structure

```
my-portfolio/
├── index.html          # Main landing page (Home, About, Experience, Skills, Projects, Leadership, Education, Achievements, Contact)
├── leadership.html     # Dedicated Leadership & Volunteering timeline with detailed role descriptions
├── education.html      # Detailed Academic Journey (B.Sc. with coursework breakdown, HSC, SSC)
├── project.html        # Comprehensive Projects portfolio with category filtering (6 projects)
└── README.md           # Project documentation
```

## 🎨 Design Highlights

### Color Palette
- **Primary**: Green tones (`#10B981`, `#059669`, `#047857`) for leadership and education pages
- **Secondary**: Blue tones (`#3B82F6`, `#1E3A8A`) for main branding and accents
- **Backgrounds**: Slate shades with dark mode variants
- **Accents**: Multi-color scheme for different project categories (blue, indigo, red, yellow, purple, green)

### Key Sections & Pages
1. **Home (`index.html`)**: Hero section with professional photo, About section, Professional Experience timeline (Trainee Engineer at ADN DigiNet), Technical Skills grid, Featured Projects (4 highlighted projects), Leadership roles preview, Education overview, Achievements, and Contact footer.

2. **Projects (`project.html`)**: Comprehensive project showcase with 6 technical projects including:
   - Intelligent BMS (Thesis) - STM32-based Battery Management System
   - VLSI Full Adder Design - Cadence Virtuoso analysis
   - Fire-Fighting Robot - Arduino autonomous robot
   - Cable Fault Detection - IoT-based underground cable monitoring
   - 8-bit Modified SAP - CPU architecture design
   - BLDC Motor Controller - MATLAB/Simulink design

3. **Education (`education.html`)**: Detailed academic timeline featuring:
   - B.Sc. in EEE (AUST) with comprehensive coursework breakdown across 4 major areas
   - Undergraduate thesis on Intelligent Battery Management System
   - HSC and SSC academic achievements

4. **Leadership (`leadership.html`)**: Professional leadership timeline including:
   - Membership Development Coordinator, IEEE Young Professionals Bangladesh
   - Chairperson, IEEE AUST Student Branch
   - Joint Secretary, AUST Innovation & Design Club
   - Vice Chair, IEEE PES AUST Student Branch Chapter
   - Assistant Organizing Secretary, AUST EEE Society

5. **Footer**: Consistent footer across all pages with contact information, social media links, and resume download.

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required (Tailwind is loaded via CDN for simplicity)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/farhan-efty/my-portfolio.git
cd my-portfolio
```

2. Open the website:
```bash
# Simply open index.html in your browser
# Or use a local server (recommended):
python -m http.server 8000
# Then navigate to http://localhost:8000
```

## 🎯 Customization

### Updating Content
- **`index.html`**: Core personal info, experience, skills, and featured projects
- **`project.html`**: Add new projects with appropriate `data-category` attributes for filtering
- **`education.html`**: Update academic milestones, coursework, and achievements
- **`leadership.html`**: Add new leadership roles to the timeline with detailed descriptions

### Styling
The website uses Tailwind CSS classes with custom configuration. To modify styles:
- Update class names directly in HTML elements
- Tailwind CDN automatically applies the styles
- Custom animations and colors are defined in `<style>` tags within each page
- For custom colors, modify the color classes (e.g., `bg-blue-600`) or update the Tailwind config

### Adding Projects
To add a new project to `project.html`:
1. Add a new `<div class="project-card">` with appropriate `data-category`
2. Include project image, title, description, technologies, and links
3. Update the filter buttons if adding a new category

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ✨ Interactive Features

### Project Filtering
- Located on `project.html`
- Filter projects by category: All, VLSI, Embedded/IoT, Power, Robotics, Architecture
- Smooth filtering animations with staggered card appearances

### Timeline Animations
- Staggered fade-in animations for timeline items in leadership and education pages
- Hover effects on timeline cards with scale and shadow transitions

### Collapsible Sections
- Experience sections in `index.html` use JavaScript for content toggling
- Smooth expand/collapse animations with CSS transitions

### Theme Toggle
- Automatic dark/light mode detection with manual override capability
- Persistent theme preference stored in localStorage

### Navigation
- Glass-morphism navigation bar with backdrop blur
- Mobile-responsive hamburger menu
- Smooth scroll behavior for anchor links

## 🔗 Live Demo

Visit the live website: [https://farhan-efty.github.io/my-portfolio/](https://farhan-efty.github.io/my-portfolio/)

## 📄 License

This project is open source and available for personal use.

## 👤 Author

**Farhan Muhib Efty**
- LinkedIn: [@farhanmuhibefty](https://www.linkedin.com/in/farhanmuhibefty/)
- GitHub: [@farhan-efty](https://github.com/farhan-efty)
- Email: farhanmuhibefty@gmail.com

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons by Font Awesome
- Typography by Google Fonts (Inter)
- Framework by Tailwind CSS
- Animation techniques from CSS best practices

---

**Last Updated**: December 2025