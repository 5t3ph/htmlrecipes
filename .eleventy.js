const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  
  eleventyConfig.addWatchTarget("./src/sass/");

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);


  eleventyConfig.addCollection("orderedSnippets", function (collection) {
    return collection.getFilteredByTag("snippets").sort((a, b) => {
      return a.data.order - b.data.order;
    });
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
