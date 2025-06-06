const pluginSass = require("@11tyrocks/eleventy-plugin-sass-lightningcss");

module.exports = function (eleventyConfig) {
  // Add the SASS plugin
  eleventyConfig.addPlugin(pluginSass);

  // Copy assets
  eleventyConfig.addPassthroughCopy("src/images");

  // Copy Bootstrap Icons font files
  eleventyConfig.addPassthroughCopy({
    "node_modules/bootstrap-icons/font/fonts": "css/fonts",
  });

  // Copy Bootstrap JavaScript
  eleventyConfig.addPassthroughCopy({
    "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js":
      "js/bootstrap.bundle.min.js",
  });

  return {
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
    },
  };
};
