module.exports = function(eleventyConfig) {
  // Copy assets
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/css");
  
  return {
    dir: {
      input: "src",
      output: "public",
      includes: "_includes"
    }
  };
}; 