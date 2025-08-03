# DaviSCo Portfolio Website

A modern, responsive portfolio website showcasing my professional journey as a Full Stack Developer and ERP Consultant. Built with cutting-edge web technologies and featuring smooth animations, dynamic content, and an elegant design.

## 🚀 Live Demo

Visit the live site: [DaviSCo](https://davisco-nine.vercel.app/)

## 📋 Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Deployment](#deployment)
- [Contact](#contact)

## 🛠 Technologies Used

### Frontend
- **HTML5** - Semantic markup and structure
- **CSS3** - Custom styling and animations
- **Tailwind CSS v4** - Utility-first CSS framework for rapid development
- **JavaScript (ES6+)** - Interactive functionality and DOM manipulation

### Animation & Effects
- **GSAP (GreenSock Animation Platform)** - High-performance animations
  - ScrollTrigger - Scroll-based animations
  - ScrollToPlugin - Smooth scrolling navigation
  - TextPlugin - Dynamic text animations

### Build Tools & Development
- **Tailwind CSS CLI** - CSS compilation and optimization
- **Live Server** - Development server with hot reload
- **Git** - Version control
- **VS Code** - Development environment

### Design & Assets
- **Iconify** - SVG icon library for social media icons
- **Custom Color Palette** - Carefully crafted brand colors
- **Responsive Design** - Mobile-first approach

## ✨ Features

- **Responsive Design** - Optimized for all device sizes
- **Smooth Animations** - GSAP-powered scroll animations and transitions
- **Dynamic Header** - Transforms on scroll with animated logo change
- **Mobile Navigation** - Hamburger menu with smooth transitions
- **Project Showcase** - Interactive project cards with technology stacks
- **Skills Display** - Organized skill categories with hover effects
- **Contact Integration** - Direct links to email, LinkedIn, and GitHub
- **Performance Optimized** - Fast loading times and smooth interactions

## 📁 Project Structure

```
DaviSCo/
├── css/
│   ├── output.css           # Compiled Tailwind CSS
│   ├── style.css           # Source Tailwind styles and custom components
│   ├── palette.css         # Color palette documentation
│   └── components/
│       └── headerComponents.css
├── scripts/
│   ├── scripts.js          # Core JavaScript functionality
│   └── gsapEffects.js      # GSAP animations and scroll effects
├── img/
│   ├── DaviSCo.png        # Logo and favicon
│   ├── self.png           # Profile image
│   └── project/           # Project screenshots
├── docs/
│   └── ScottDavis-Resume.pdf
├── pages/
│   └── project-1.html     # Additional project pages
├── WireFrameStages/       # Design mockups and wireframes
├── index.html             # Main portfolio page
├── package.json           # Project dependencies and scripts
└── README.md             # Project documentation
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ScottDavis08/DaviSCo.git
   cd DaviSCo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

   This will start the Tailwind CSS watch process and compile your styles automatically.

4. **Open in browser**
   - Use Live Server extension in VS Code, or
   - Open `index.html` directly in your browser

## 🔧 Development

### Available Scripts

- `npm run dev` - Start Tailwind CSS watch mode for development
- `npm run build` - Build optimized CSS for production

### Customization

#### Colors
Modify the color palette in `css/style.css`:
```css
@theme {
    --color-primary: #3217E6ff;
    --color-secondary: #5E51ADff;
    --color-quaternary: #e31b6d;
    --color-textColor: #ffffffff;
}
```

#### Animations
Add custom GSAP animations in `scripts/gsapEffects.js`:
```javascript
gsap.registerPlugin(ScrollTrigger);
// Your custom animations here
```

#### Components
Create reusable Tailwind components in `css/style.css`:
```css
@layer components {
    .custom-component {
        @apply flex items-center justify-center;
    }
}
```

## 🚀 Deployment

The site is optimized for static hosting platforms:

- **GitHub Pages** - Push to `gh-pages` branch
- **Netlify** - Connect repository for automatic deployments
- **Vercel** - Import project for seamless deployment

### Build for Production

1. Ensure all styles are compiled:
   ```bash
   npm run dev
   ```

2. Test the production build locally

3. Deploy the entire project directory to your hosting platform

## 📧 Contact

**Scott Davis**
- Email: [Scott.Davis08@gmail.com](mailto:Scott.Davis08@gmail.com)
- LinkedIn: [scott-davis-08](https://www.linkedin.com/in/scott-davis-08/)
- GitHub: [ScottDavis08](https://github.com/ScottDavis08)

## 📄 License

© 2025-present Davis Scott Consulting. All Rights Reserved.

---

*Built with passion and attention to detail. This portfolio represents my journey as a developer and my commitment to creating exceptional digital experiences.*