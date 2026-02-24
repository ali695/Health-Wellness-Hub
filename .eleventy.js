module.exports = function (eleventyConfig) {

  // Static assets
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("svgs");
  eleventyConfig.addPassthroughCopy("attached_assets");

  // VERY IMPORTANT — Add this
  eleventyConfig.addPassthroughCopy("admin");

  // SEO files
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
