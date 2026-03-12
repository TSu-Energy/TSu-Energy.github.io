# Developer Documentation

## Table of Contents

1. [Getting Started](#getting-started)
2. [Project Architecture](#project-architecture)
3. [JavaScript Modules](#javascript-modules)
4. [Styling Guide](#styling-guide)
5. [Component System](#component-system)
6. [Performance Best Practices](#performance-best-practices)
7. [Accessibility Guidelines](#accessibility-guidelines)
8. [Deployment](#deployment)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Basic knowledge of HTML, CSS, JavaScript
- Familiarity with TailwindCSS

### Development Workflow

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build:prod

# Format code
npm run format
```

## Project Architecture

### Directory Structure

```
assets/
├── css/          # Compiled CSS files
├── js/           # JavaScript modules
└── images/       # Image assets

src/
├── tailwind.css  # Source Tailwind CSS
└── news/         # News articles

templates/        # Reusable HTML components
```

### Key Files

- `tailwind.config.js` - TailwindCSS configuration
- `postcss.config.js` - PostCSS configuration
- `package.json` - Project dependencies and scripts
- `.prettierrc` - Code formatting rules

## JavaScript Modules

### main.js

Core functionality including:
- Sticky header with scroll detection
- Mobile navigation toggle
- Smooth scroll to top
- FAQ accordion
- Submenu handling

**Usage:**
```javascript
// Automatically initialized on page load
// No manual initialization required
```

### form-validation.js

Client-side form validation with real-time feedback.

**Features:**
- Email validation
- Phone number validation
- Required field validation
- Error message display
- Form submission handling

**Usage:**
```html
<form>
  <input type="email" name="email" required />
  <input type="tel" name="phone" required />
  <button type="submit">Submit</button>
</form>
```

### lazy-loading.js

Optimizes image loading using Intersection Observer.

**Usage:**
```html
<!-- Add data-src instead of src for lazy loading -->
<img data-src="path/to/image.jpg" alt="Description" />
```

### language-switch.js

Multi-language support with localStorage persistence.

**API:**
```javascript
// Switch language
LanguageSwitcher.switchLanguage('zh');

// Get current language
const lang = LanguageSwitcher.getCurrentLanguage();
```

**Usage:**
```html
<!-- Add data-i18n attribute -->
<h1 data-i18n="welcome">Welcome</h1>

<!-- Language switcher button -->
<button data-language="en">English</button>
<button data-language="zh">中文</button>
```

### component-loader.js

Dynamically loads HTML components.

**API:**
```javascript
// Load component
ComponentLoader.loadComponent('navbar', 'templates/navbar.html');
```

**Usage:**
```html
<div id="navbar" data-component="templates/navbar.html"></div>
```

### performance.js

Performance optimization utilities.

**API:**
```javascript
// Debounce function
const debouncedFn = PerformanceUtils.debounce(() => {
  console.log('Debounced!');
}, 300);

// Throttle function
const throttledFn = PerformanceUtils.throttle(() => {
  console.log('Throttled!');
}, 300);
```

### accessibility.js

Accessibility enhancements.

**API:**
```javascript
// Announce to screen readers
A11y.announce('Form submitted successfully');
```

## Styling Guide

### TailwindCSS Classes

#### Custom Colors

```html
<!-- Primary color -->
<div class="bg-primary text-white"></div>

<!-- Secondary color -->
<div class="bg-secondary text-white"></div>

<!-- Dark color -->
<div class="bg-dark text-white"></div>
```

#### Custom Components

```html
<!-- Button -->
<button class="btn btn-primary">Click me</button>

<!-- Card -->
<div class="card">Card content</div>

<!-- Form input -->
<input type="text" class="form-input" />
```

#### Utility Classes

```html
<!-- Text gradient -->
<h1 class="text-gradient">Gradient Text</h1>

<!-- Hover scale -->
<div class="hover-scale">Hover me</div>

<!-- Smooth transition -->
<div class="transition-smooth">Smooth transition</div>
```

### Custom CSS

Add custom styles in `src/tailwind.css`:

```css
@layer components {
  .my-custom-class {
    @apply bg-primary text-white rounded-lg p-4;
  }
}
```

## Component System

### Creating Components

1. Create HTML file in `templates/` directory
2. Use the component in your page:

```html
<div id="my-component" data-component="templates/my-component.html"></div>
```

### Component Best Practices

- Keep components small and focused
- Use semantic HTML
- Include ARIA attributes
- Make components responsive
- Test across browsers

## Performance Best Practices

### Image Optimization

1. Use appropriate image formats (WebP, AVIF)
2. Compress images before uploading
3. Use lazy loading for below-fold images
4. Provide alt text for all images

### JavaScript Optimization

1. Use debounce/throttle for scroll/resize events
2. Minimize DOM queries
3. Use event delegation
4. Avoid blocking the main thread

### CSS Optimization

1. Use TailwindCSS purge in production
2. Minimize custom CSS
3. Use CSS containment where appropriate
4. Avoid expensive properties (box-shadow, filter)

## Accessibility Guidelines

### WCAG 2.1 Level AA Compliance

1. **Perceivable**
   - Provide text alternatives for images
   - Use sufficient color contrast (4.5:1 for text)
   - Make content adaptable

2. **Operable**
   - Make all functionality keyboard accessible
   - Provide skip links
   - Use descriptive link text

3. **Understandable**
   - Use clear language
   - Provide error messages
   - Maintain consistent navigation

4. **Robust**
   - Use semantic HTML
   - Validate HTML
   - Test with screen readers

### Testing Tools

- [WAVE](https://wave.webaim.org/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

## Deployment

### GitHub Pages

1. Push changes to main branch
2. GitHub Actions will automatically deploy
3. Site will be available at your GitHub Pages URL

### Manual Deployment

```bash
# Build for production
npm run build:prod

# Deploy files to your hosting provider
# Upload all files except node_modules/
```

### Pre-deployment Checklist

- [ ] Run `npm run build:prod`
- [ ] Test all pages
- [ ] Check responsive design
- [ ] Validate HTML
- [ ] Test forms
- [ ] Check accessibility
- [ ] Test in multiple browsers
- [ ] Optimize images
- [ ] Update meta tags

## Troubleshooting

### Common Issues

**Issue: Tailwind classes not working**
- Solution: Run `npm run build` to compile CSS

**Issue: Components not loading**
- Solution: Check file paths and ensure component-loader.js is included

**Issue: Forms not validating**
- Solution: Ensure form-validation.js is loaded and inputs have `required` attribute

## Support

For questions or issues, please:
1. Check this documentation
2. Review the code comments
3. Contact the development team

---

**Last Updated:** 2026-03-12
