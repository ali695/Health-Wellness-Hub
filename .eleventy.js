module.exports = function (eleventyConfig) {
  // Keep your existing static assets exactly as they are
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("svgs");
  eleventyConfig.addPassthroughCopy("attached_assets");
  eleventyConfig.addPassthroughCopy("calculators"); // keep your existing calculator pages working
  eleventyConfig.addPassthroughCopy("blog");        // keep old blog folder working for now

  // Also keep these root files available (SEO essentials)
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("sitemap.xml");

  return {
    dir: {
      input: "content",
      includes: "../src/_includes",
      output: "dist"
    }
  };
};
