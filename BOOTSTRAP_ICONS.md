# Bootstrap Icons Integration

This project includes Bootstrap Icons with automatic tree-shaking for production builds.

## How It Works

- **Development builds** (`npm run build`): All Bootstrap Icons are included for full development experience
- **Production builds** (`npm run build:prod`): Only icons actually used in your HTML are included thanks to PurgeCSS tree-shaking

## Usage

Use Bootstrap Icons by adding the appropriate classes to `<i>` tags or any element:

```html
<!-- Basic icon -->
<i class="bi bi-house-door"></i>

<!-- Icon with spacing -->
<i class="bi bi-envelope me-2"></i>Contact

<!-- Icon with custom styling -->
<i class="bi bi-star-fill text-warning"></i>
```

## Available Icons

Browse all available icons at: https://icons.getbootstrap.com/

## Examples in This Project

Check the header navigation (`src/_includes/header.njk`) for examples of:

- `bi-house-door` - Home icon
- `bi-info-circle` - About icon
- `bi-menu-button-wide` - Menu icon
- `bi-envelope` - Contact icon
- `bi-calendar-event` - Reservation icon (commented out)

## Tree-Shaking Configuration

The tree-shaking is configured in:

- `purgecss.config.js` - PurgeCSS configuration
- `.eleventy.js` - Build process integration
- `src/css/style.scss` - CSS imports

Only the icons you actually use in your HTML will be included in the final production build, keeping your CSS bundle size optimized.

## Adding New Icons

1. Find the icon you want at https://icons.getbootstrap.com/
2. Copy the class name (e.g., `bi-arrow-right`)
3. Add it to your HTML: `<i class="bi bi-arrow-right"></i>`
4. Build for production - only used icons will be included automatically

## File Size Impact

The production build automatically removes unused icons, so you can use any Bootstrap Icons without worrying about bundle size.
