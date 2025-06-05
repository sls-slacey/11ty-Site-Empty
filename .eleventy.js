const pluginSass = require("@11tyrocks/eleventy-plugin-sass-lightningcss");

module.exports = function(eleventyConfig) {
  // Add the SASS plugin
  eleventyConfig.addPlugin(pluginSass);
  
  // Copy assets
  eleventyConfig.addPassthroughCopy("src/images");
  // Remove the CSS passthrough copy since SASS plugin handles it
  
  return {
    dir: {
      input: "src",
      output: "public",
      includes: "_includes"
    }
  };
}; 