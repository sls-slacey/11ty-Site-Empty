module.exports = {
  // Content files referencing CSS classes
  content: ["./public/**/*.html"],

  // CSS files to be purged in-place
  css: ["./public/**/*.css"],

  // Safelist: Keep these selectors even if not found in content
  safelist: [
    // Bootstrap classes that are dynamically added via JS
    'show',
    'hide',
    'collapse',
    'collapsing',
    'fade',
    'active',
    'disabled',
    // Bootstrap responsive classes that might not be detected
    /^col-/,
    /^d-/,
    /^justify-/,
    /^align-/,
    /^text-/,
    /^bg-/,
    /^border-/,
    /^p[xytrbl]?-/,
    /^m[xytrbl]?-/,
    // Bootstrap Icons classes - only keep the base icon class
    // Individual icon classes (bi-*) will be tree-shaken based on usage
    'bi',
    /^bi-/,
    // Add your custom classes here
  ],

  // Extract selectors from attributes as well
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
}; 