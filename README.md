# 3D Portfolio Website

A modern, interactive portfolio website built with React, Three.js, and GSAP animations, showcasing quantitative finance projects and experience.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success)
![React](https://img.shields.io/badge/React-18+-blue)
![Three.js](https://img.shields.io/badge/Three.js-Latest-orange)
![License](https://img.shields.io/badge/License-MIT-green)

## 🌟 Features

- **Interactive 3D Models** - Three.js powered 3D visualizations in hero and contact sections
- **Smooth Animations** - GSAP scroll-triggered animations throughout
- **Responsive Design** - Fully responsive from mobile to 4K displays
- **Glow Effects** - Interactive mouse-tracking glow cards
- **Performance Optimized** - Code splitting and lazy loading for fast load times
- **Contact Form** - EmailJS integration for direct messaging
- **Project Showcase** - Highlighted quantitative finance projects
- **Educational Background** - Academic achievements and coursework
- **Experience Timeline** - Leadership and activities with animated timeline

## 🚀 Tech Stack

### Frontend
- **React 18+** - UI framework
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first styling
- **Three.js** - 3D graphics and models
- **React Three Fiber** - React renderer for Three.js
- **GSAP** - Professional-grade animations
- **EmailJS** - Contact form integration

### 3D & Design
- **Blender** - 3D model creation
- **Canva** - Visual assets and graphics

## 📦 Installation

### Prerequisites
- Node.js 16+ and npm

### Setup

```bash
# Clone the repository
git clone https://github.com/Daniel-Souza7/3d-Portfolio-Daniel-Souza

# Navigate to project directory
cd 3d-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see the site.

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

Get these credentials from [EmailJS](https://www.emailjs.com/).

### Customization

Update personal information in `src/constants/index.js`:
- Projects
- Experience cards
- Education details
- Testimonials
- Social links
- Tech stack icons

## 🏗️ Build & Deploy

### Production Build

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to production
vercel --prod
```

Or connect your GitHub repository to Vercel for automatic deployments.

## 📁 Project Structure

```
3d-portfolio/
├── public/
│   ├── images/          # Images and icons
│   ├── models/          # 3D models (.glb files)
│   └── index.html
├── src/
│   ├── components/      # Reusable components
│   │   ├── models/      # 3D model components
│   │   ├── GlowCard.jsx
│   │   ├── NavBar.jsx
│   │   └── ...
│   ├── sections/        # Main page sections
│   │   ├── Hero.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   └── ...
│   ├── constants/       # Data and configuration
│   │   └── index.js
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # App entry point
│   └── index.css        # Global styles
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── package.json
```

## 🎨 Sections

1. **Hero** - Animated introduction with 3D room model
2. **Animated Counters** - Key achievements with count-up animations
3. **Logo Showcase** - Infinite scrolling technology logos
4. **Projects** - Featured quantitative finance projects
5. **Thesis** - Master's thesis highlight
6. **Education** - Academic background and achievements
7. **Experience** - Leadership and extracurricular activities
8. **Tech Stack** - Interactive 3D skill icons
9. **Testimonials** - Peer feedback and reviews
10. **Contact** - Contact form with 3D computer model
11. **Footer** - Social links and copyright

## ⚡ Performance Optimizations

- Code splitting with dynamic imports
- Lazy loading for below-fold sections
- Image lazy loading
- Optimized 3D model file sizes (GLB format)
- GSAP ScrollTrigger cleanup
- Disabled glow effects during scroll
- requestAnimationFrame for smooth animations
- WebP image format for smaller file sizes

## 🐛 Known Issues

- Three-stdlib eval warning (doesn't affect functionality)
- GlowCard may cause slight lag on low-end devices

## 📝 License

MIT License - feel free to use this project for your own portfolio!

## 🤝 Contributing

This is a personal portfolio project, but feel free to fork and customize for your own use!

## 📧 Contact

**Daniel Souza**
- Portfolio: [Live Site URL]
- LinkedIn: https://www.linkedin.com/in/souza247/
- Email: daniel.souza.tyui@gmail.com

## 🙏 Acknowledgments

- Original inspiration from adrianhajdin
- 3D models created in Blender
- Icons from Lucide React
- Fonts from Google Fonts (Mona Sans)

---

**⭐ If you found this helpful, consider giving it a star!**