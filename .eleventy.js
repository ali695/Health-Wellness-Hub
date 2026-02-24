module.exports = function (eleventyConfig) {

  // ==============================
  // PASSTHROUGH STATIC ASSETS
  // ==============================

  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("svgs");
  eleventyConfig.addPassthroughCopy("attached_assets");

  // Keep old static folders temporarily
  eleventyConfig.addPassthroughCopy("blog");        
  eleventyConfig.addPassthroughCopy("calculators");

  // SEO Essentials
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("sitemap.xml");

  // IMPORTANT → Copy admin panel to output
  eleventyConfig.addPassthroughCopy("admin");

  // ==============================
  // RETURN CONFIG
  // ==============================

  return {
    dir: {
      input: "content",
      includes: "../src/_includes",
      output: "dist"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"]
  };
};
