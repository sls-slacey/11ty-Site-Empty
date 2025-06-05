# 11ty + SASS + Nunjucks Beginner's Guide

This guide will help you understand how to work with this **static site generator** project that uses **Eleventy (11ty)**, **SASS**, and **Nunjucks** templating.

## 🚀 What is This Project?

This is a **restaurant website** built with modern web development tools:

- **Eleventy (11ty)**: A static site generator that builds fast, SEO-friendly websites
- **SASS**: A CSS preprocessor that makes styling more powerful and organized
- **Nunjucks**: A templating language that lets you create reusable HTML components
- **Bootstrap**: CSS framework for responsive design and components

## 📁 Project Structure

```
11ty-sass-skeleton/
├── src/                    # Source files (where you edit)
│   ├── _includes/          # Reusable template components
│   │   ├── base.njk       # Main HTML layout
│   │   ├── header.njk     # Navigation/header
│   │   ├── footer.njk     # Footer
│   │   ├── hero.njk       # Hero section
│   │   └── ...            # Other components
│   ├── css/               # SASS stylesheets
│   │   ├── style.scss     # Main stylesheet (imports everything)
│   │   ├── _theme.scss    # Variables (colors, fonts, spacing)
│   │   ├── _header.scss   # Header component styles
│   │   └── ...            # Other component styles
│   ├── images/            # Image assets
│   └── index.njk          # Homepage template
├── public/                # Generated website (don't edit directly)
├── .eleventy.js           # 11ty configuration
├── package.json           # Project dependencies
└── README.md              # Project documentation
```

## 🛠️ Getting Started

### Prerequisites

You need **Node.js** installed on your computer. Download it from [nodejs.org](https://nodejs.org/).

### Installation

1. **Clone or download** this project
2. **Open terminal** in the project folder
3. **Install dependencies**:
   ```bash
   npm install
   ```

### Development Commands

```bash
# Start development server with live reload
npm start

# Build the website for production
npm run build

# Build with optimizations (removes unused CSS)
npm run build:prod
```

## 🎨 Understanding SASS

**SASS** makes CSS more powerful by adding variables, nesting, and imports.

### Key SASS Files:

- **`src/css/style.scss`**: Main file that imports everything
- **`src/css/_theme.scss`**: Contains all variables (colors, fonts, spacing)
- **`src/css/_[component].scss`**: Individual component styles

### Example SASS Features:

**Variables** (in `_theme.scss`):

```scss
$primary-color: #e5952d;
$font-primary: "Playfair Display", serif;
$spacing-lg: 1.5rem;
```

**Using Variables**:

```scss
.my-element {
  color: $primary-color;
  font-family: $font-primary;
  margin-bottom: $spacing-lg;
}
```

**Nesting**:

```scss
.header {
  background: white;

  &__logo {
    font-size: 2rem;
  }

  &__nav {
    display: flex;
  }
}
```

### 📚 Learn More About SASS:

- [SASS Official Documentation](https://sass-lang.com/documentation)
- [SASS Basics Tutorial](https://sass-lang.com/guide)

## 🧹 Understanding PurgeCSS (CSS Optimization)

**PurgeCSS** automatically removes unused CSS from your website to make it faster and smaller.

### What It Does:

When you use frameworks like **Bootstrap**, they include thousands of CSS classes. But your website probably only uses a small fraction of them. PurgeCSS scans your HTML files and removes any CSS that isn't actually being used.

### How It Works in This Project:

- **Development**: PurgeCSS is turned OFF so you can use any Bootstrap class while coding
- **Production**: When you run `npm run build:prod`, PurgeCSS automatically removes unused CSS

### Configuration (`purgecss.config.js`):

```javascript
module.exports = {
  // Scan these files for CSS class usage
  content: ["./public/**/*.html"],

  // Clean up these CSS files
  css: ["./public/**/*.css"],

  // Keep these classes even if not detected
  safelist: [
    "show",
    "hide",
    "collapse", // Bootstrap JS classes
    /^bi-/, // Bootstrap Icons
    // Add your own classes here if needed
  ],
};
```

### Key Points for Beginners:

- **Don't worry about it during development** - just code normally
- **Automatic optimization** - runs only in production builds
- **Safelist protects important classes** - like those added by JavaScript
- **Huge file size savings** - can reduce CSS by 90%+ in some cases

### When You Might Need to Edit It:

- If you use dynamic CSS classes in JavaScript that PurgeCSS can't detect
- If you have custom CSS classes that get removed accidentally
- Add them to the `safelist` array to protect them

**Example**: If you add CSS classes with JavaScript like `element.classList.add('my-dynamic-class')`, you should add `'my-dynamic-class'` to the safelist.

### 📚 Learn More About PurgeCSS:

- [PurgeCSS Official Documentation](https://purgecss.com/)

## 🔧 Understanding Nunjucks Templates

**Nunjucks** lets you create reusable HTML components and layouts.

### Key Concepts:

**Layout Template** (`src/_includes/base.njk`):

```html
<!DOCTYPE html>
<html>
  <head>
    <title>{{ title }}</title>
  </head>
  <body>
    {{ content | safe }}
  </body>
</html>
```

**Page Template** (`src/index.njk`):

```html
---
layout: base.njk
title: My Page Title
---

<h1>Welcome to my page!</h1>
{% include "hero.njk" %}
```

**Component Template** (`src/_includes/hero.njk`):

```html
<section class="hero">
  <h1>{{ title or "Default Title" }}</h1>
</section>
```

### Common Nunjucks Features:

- **`{{ variable }}`**: Output a variable
- **`{% include "file.njk" %}`**: Include another template
- **`{% if condition %}`**: Conditional content
- **`{% for item in items %}`**: Loop through data

### 📚 Learn More About Nunjucks:

- [Nunjucks Official Documentation](https://mozilla.github.io/nunjucks/)
- [11ty Nunjucks Guide](https://www.11ty.dev/docs/languages/nunjucks/)

## ⚡ Understanding Eleventy (11ty)

**Eleventy** is the static site generator that builds your website from templates and content.

### Key Files:

- **`.eleventy.js`**: Configuration file
- **`src/`**: Source directory (where you work)
- **`public/`**: Output directory (generated website)

### How It Works:

1. **Templates** (`.njk` files) get processed
2. **SASS** files get compiled to CSS
3. **Images** get copied to the output
4. **Static HTML** files are generated in `public/`

### 📚 Learn More About 11ty:

- [11ty Official Documentation](https://www.11ty.dev/docs/)
- [11ty Getting Started Guide](https://www.11ty.dev/docs/getting-started/)

## 🎯 Making Changes

### Adding New Content:

1. **Edit templates** in `src/_includes/`
2. **Add new pages** by creating `.njk` files in `src/`
3. **Update styles** in the appropriate `src/css/_[component].scss` file

### Styling Workflow:

1. **Find the component** you want to style (e.g., `hero.njk`)
2. **Open the matching SASS file** (e.g., `_hero.scss`)
3. **Use variables** from `_theme.scss` for consistency
4. **Follow the BEM naming convention**: `.block__element--modifier`

### Example: Adding a New Section

1. **Create template**: `src/_includes/my-section.njk`
2. **Create styles**: `src/css/_my-section.scss`
3. **Import styles**: Add `@import "my-section";` to `src/css/style.scss`
4. **Include in page**: Add `{% include "my-section.njk" %}` to `src/index.njk`

## 🔍 Debugging Tips

### If Styles Aren't Working:

- Check if you imported the SASS file in `style.scss`
- Verify variable names match those in `_theme.scss`
- Use browser dev tools to inspect elements

### If Templates Aren't Working:

- Check file paths and names (case-sensitive)
- Verify Nunjucks syntax
- Look for error messages in the terminal

### If Build Fails:

- Check terminal for error messages
- Verify all file paths are correct
- Make sure all imports exist

## 📱 Responsive Design

This project uses **Bootstrap** for responsive design:

- **Mobile-first approach**: Styles for mobile, then larger screens
- **Breakpoints**: `$breakpoint-sm`, `$breakpoint-md`, `$breakpoint-lg`
- **Media queries**: `@media (min-width: $breakpoint-md) { ... }`

## 🚀 Deployment

After running `npm run build:prod`:

1. The `public/` folder contains your complete website
2. Upload this folder to any web host
3. Popular options: [Netlify](https://netlify.com), [Vercel](https://vercel.com), [GitHub Pages](https://pages.github.com)

## 📚 Additional Resources

### Documentation:

- [Eleventy Documentation](https://www.11ty.dev/docs/)
- [SASS Documentation](https://sass-lang.com/documentation)
- [Nunjucks Documentation](https://mozilla.github.io/nunjucks/)
- [Bootstrap Documentation](https://getbootstrap.com/docs/)

### Tutorials:

- [11ty Tutorial Series](https://www.11ty.dev/docs/tutorials/)
- [SASS Tutorial](https://sass-lang.com/guide)
- [Static Site Generator Basics](https://www.netlify.com/blog/2020/04/14/what-is-a-static-site-generator-and-3-ways-to-find-the-best-one/)

### Community:

- [11ty Discord](https://discord.gg/GBkBy9u)
- [11ty GitHub Discussions](https://github.com/11ty/eleventy/discussions)

## ❓ Common Questions

**Q: Where do I change the website colors?**
A: Edit the color variables in `src/css/_theme.scss`

**Q: How do I add a new page?**
A: Create a new `.njk` file in the `src/` directory

**Q: Why isn't my CSS working?**
A: Make sure you imported your SASS file in `src/css/style.scss`

**Q: How do I add images?**
A: Put images in `src/images/` and reference them as `/images/filename.jpg`

---

**Happy coding!** 🎉 Remember: start small, make one change at a time, and use the browser's developer tools to debug issues.
