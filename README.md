# 🚀 DevOps Engineer Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS, showcasing DevOps engineering skills, projects, and experience.

## ✨ Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between dark and light modes
- **Interactive Terminal**: Simulated terminal interface for a tech-savvy touch
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Skills Showcase**: Visual representation of technical skills and tools
- **Project Gallery**: Detailed project cards with descriptions and technologies
- **Experience Timeline**: Professional experience and career progression
- **Contact Form**: Easy way for potential employers/clients to get in touch

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React

### Libraries & Tools
- **React Icons** - Comprehensive icon library
- **React Scroll** - Smooth scrolling navigation
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 🚀 Quick Start

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mayurjadhav-23/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🏗️ Project Structure

```
portfolio/
├── public/
│   ├── skills/          # Skill icons and images
│   ├── favicon.svg      # Site favicon
│   ├── manifest.json    # PWA manifest
│   └── profile.svg      # Profile image
├── src/
│   ├── components/      # React components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx
│   │   ├── LoadingScreen.jsx
│   │   ├── MobileMenu.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectsGrid.jsx
│   │   ├── SkillsGrid.jsx
│   │   ├── Terminal.jsx
│   │   └── ThemeToggle.jsx
│   ├── contexts/        # React contexts
│   │   └── ThemeContext.jsx
│   ├── data/           # Static data
│   │   ├── experience.js
│   │   ├── projects.js
│   │   └── skills.js
│   ├── hooks/          # Custom React hooks
│   │   └── useParallax.js
│   ├── App.jsx         # Main App component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── tailwind.config.js  # Tailwind configuration
├── vite.config.js      # Vite configuration
└── README.md          # Project documentation
```

## 🎨 Customization

### Personal Information
Update your personal details in the following files:
- `src/components/Hero.jsx` - Name, roles, and introduction
- `src/components/About.jsx` - About section content
- `src/data/experience.js` - Work experience
- `src/data/projects.js` - Project portfolio
- `src/data/skills.js` - Technical skills

### Styling
- **Colors**: Modify `tailwind.config.js` for custom color schemes
- **Fonts**: Update font families in `index.css`
- **Animations**: Customize Framer Motion animations in components

### Skills Icons
Add your skill icons to `public/skills/` directory and update `src/data/skills.js`

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Popular Platforms

#### Vercel
```bash
npm install -g vercel
vercel --prod
```

#### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

#### GitHub Pages
```bash
npm run build
# Push dist/ contents to gh-pages branch
```

## 📱 Progressive Web App (PWA)

This portfolio includes PWA features:
- Offline functionality
- App-like experience on mobile devices
- Custom app icons and splash screens

## 🔧 Configuration Files

- **ESLint**: `.eslintrc.js` - Code quality rules
- **Tailwind**: `tailwind.config.js` - CSS framework configuration
- **Vite**: `vite.config.js` - Build tool configuration
- **PostCSS**: `postcss.config.js` - CSS processing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: mayurjadhav0232@gmail.com
- **LinkedIn**: [Mayur Jadhav](www.linkedin.com/in/mayurjadhav023 )
- **GitHub**: [Mayur Jadhav](https://github.com/mayurjadhav-23)
<!--- **Portfolio**: [Live Demo](https://yourportfolio.com) -->

## 🙏 Acknowledgments

- Icons provided by [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Built with [Vite](https://vitejs.dev/) and [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

⭐ **Star this repository if you found it helpful!**

Made with ❤️ by Mayur and AI obviously 
