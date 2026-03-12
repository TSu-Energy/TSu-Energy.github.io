# TSu Energy - Official Website

> Electrochemistry Modelling and Management

A modern, responsive website built with TailwindCSS for TSu Energy, featuring optimized performance, multi-language support, and accessible design.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Multi-language Support**: English and Chinese with localStorage persistence
- **Performance Optimized**: Lazy loading, code splitting, and optimized assets
- **Accessibility**: WCAG compliant with semantic HTML
- **Modern JavaScript**: ES6+ with modular architecture
- **Form Validation**: Client-side validation with user-friendly error messages
- **Smooth Animations**: WOW.js integration with custom CSS animations
- **Component-based**: Reusable HTML components for navbar, footer, etc.

## 📁 Project Structure

```
TSu-Energy.github.io/
├── assets/
│   ├── css/
│   │   ├── animate.css          # Animation library
│   │   └── tailwind.css         # Compiled Tailwind CSS
│   ├── js/
│   │   ├── main.js              # Core functionality
│   │   ├── form-validation.js   # Form validation utility
│   │   ├── lazy-loading.js      # Image lazy loading
│   │   ├── language-switch.js   # Multi-language support
│   │   ├── component-loader.js  # Dynamic component loading
│   │   ├── performance.js       # Performance optimizations
│   │   └── wow.min.js          # Animation library
│   └── images/                  # Image assets
├── templates/
│   ├── navbar.html             # Reusable navbar component
│   ├── contactForm.html        # Contact form component
│   └── member.html             # Team member component
├── src/
│   ├── tailwind.css            # Source Tailwind CSS
│   └── news/                   # News articles
├── index.html                  # Homepage (English)
├── index-ch.html              # Homepage (Chinese)
├── about-us.html              # About page
├── contact.html               # Contact page
├── product.html               # Products page
├── blog-grids.html            # Blog listing
├── blog-details.html          # Blog detail page
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
└── package.json               # Dependencies

```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/TSu-Energy/TSu-Energy.github.io.git
   cd TSu-Energy.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build:prod
   ```

## 📝 Available Scripts

- `npm run dev` - Start development with watch mode
- `npm run build` - Build CSS for production (minified)
- `npm run build:prod` - Build and optimize for production
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 🎨 Customization

### Colors

Edit [tailwind.config.js](tailwind.config.js) to customize the color palette:

```javascript
colors: {
  primary: "#3056D3",
  secondary: "#13C296",
  // Add your custom colors
}
```

### Components

Reusable components are located in the `templates/` directory. Use the component loader to dynamically load them:

```html
<div id="navbar" data-component="templates/navbar.html"></div>
```

### Language Support

Add translations in the language JSON files and use the `data-i18n` attribute:

```html
<h1 data-i18n="welcome">Welcome</h1>
```

## 🚀 Performance Optimizations

- **Lazy Loading**: Images load only when visible in viewport
- **Code Splitting**: Modular JavaScript for better caching
- **Minified Assets**: Production builds are minified
- **Optimized Fonts**: Google Fonts with `display=swap`
- **RequestAnimationFrame**: Smooth scroll animations
- **Debounced Events**: Optimized event handlers

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

MIT License - see [LICENSE](LICENSE) for details

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or support, please contact the TSu Energy team.

---

**Built with ❤️ using [TailwindCSS](https://tailwindcss.com/) and [TailGrids](https://tailgrids.com/)**

