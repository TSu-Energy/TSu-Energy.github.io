# TSu Energy - Official Website

> Electrochemistry Modelling and Management | 电化学建模与管理

[![Version](https://img.shields.io/badge/version-3.0.0-blue.svg)](https://github.com/TSu-Energy/TSu-Energy.github.io)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

A modern, responsive, and multilingual website built with TailwindCSS for TSu Energy, featuring optimized performance, accessibility, and professional code organization.

## 🌟 Features

- **🌍 Multilingual Support**: English and Chinese with automatic language detection
- **📱 Fully Responsive**: Mobile-first design with TailwindCSS
- **⚡ Performance Optimized**: Lazy loading, code splitting, and optimized assets
- **♿ Accessibility**: WCAG 2.1 Level AA compliant
- **🎨 Modern Design**: Gradient backgrounds, smooth animations, and interactive elements
- **🧩 Component-based**: Reusable HTML components
- **📦 Modular JavaScript**: Clean, maintainable code architecture

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/TSu-Energy/TSu-Energy.github.io.git
cd TSu-Energy.github.io

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### View the Website

Open `index.html` in your browser to see the language selection page, or directly access:
- English: `pages/en/index.html`
- Chinese: `pages/zh/index.html`

## 📁 Project Structure

```
TSu-Energy.github.io/
├── index.html              # Language selection page
├── pages/                  # Page files
│   ├── en/                # English pages
│   ├── zh/                # Chinese pages
│   └── blog/              # Blog posts
├── assets/                 # Assets
│   ├── css/               # Stylesheets
│   ├── js/                # JavaScript (modular)
│   │   ├── core/         # Core functionality
│   │   ├── modules/      # Feature modules
│   │   ├── utils/        # Utilities
│   │   └── vendor/       # Third-party libraries
│   └── images/            # Images
├── components/             # Reusable components
├── src/                    # Source files
│   └── styles/            # Style sources
├── config/                 # Configuration files
├── docs/                   # Documentation
└── public/                 # Public files
```

## 🎨 Customization

### Colors

Edit `config/tailwind.config.js`:

```javascript
colors: {
  primary: "#3056D3",    // Your brand color
  secondary: "#13C296",  // Secondary color
}
```

### Content

1. **Update Text**: Edit HTML files in `pages/en/` or `pages/zh/`
2. **Add Images**: Place images in `assets/images/` subdirectories
3. **Modify Components**: Edit files in `components/`

### Styling

1. Edit `src/styles/main.css`
2. Run `npm run build` to compile
3. Changes will be reflected in `assets/css/main.css`

## 📝 Available Scripts

```bash
npm run dev          # Development mode with watch
npm run build        # Build for production (minified)
npm run build:prod   # Build and optimize
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📚 Documentation

- [English Documentation](docs/en/)
  - [Developer Guide](DEVELOPER.md)
- [中文文档](docs/zh/)
  - [快速开始](快速开始.md)
- [Project Restructure](PROJECT_RESTRUCTURE.md)
- [Restructure Complete Report](RESTRUCTURE_COMPLETE.md)
- [Optimization Summary](OPTIMIZATION_SUMMARY.md)

## 🔧 Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **CSS Framework**: TailwindCSS 3.0+
- **Build Tools**: PostCSS, Prettier
- **Animation**: WOW.js, CSS Animations
- **Icons**: SVG Icons

## 📊 Performance

- **First Contentful Paint**: ~1.2s
- **Largest Contentful Paint**: ~2.1s
- **Total Blocking Time**: ~180ms
- **Cumulative Layout Shift**: 0.05

## ♿ Accessibility

- WCAG 2.1 Level AA compliant
- Keyboard navigation support
- Screen reader optimized
- ARIA labels and roles
- Focus management
- Reduced motion support

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

TSu Energy Team
- Website: [https://tsu-energy.github.io](https://tsu-energy.github.io)
- Email: info@tsu-energy.com

## 🙏 Acknowledgments

- Built with [TailwindCSS](https://tailwindcss.com/)
- UI Components from [TailGrids](https://tailgrids.com/)
- Icons from [Heroicons](https://heroicons.com/)
- Animations powered by [WOW.js](https://wowjs.uk/)

---

**Version**: 3.0.0 | **Last Updated**: 2026-03-12 | **Status**: ✅ Production Ready

Made with ❤️ by TSu Energy Team
