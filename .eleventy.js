const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const snippetOrder = require("./src/_data/snippets.js");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addPassthroughCopy("./src/img/");

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  eleventyConfig.addCollection("orderedSnippets", function (collection) {
    const result = [];
    let snippetCollection = collection.getFilteredByTag("snippets");
    snippetOrder.forEach(function (slug) {
      let found = false;
      snippetCollection = snippetCollection.filter(function (item) {
        if (!found && item.fileSlug == slug) {
          result.push(item);
          found = true;
          return false;
        } else return true;
      });
    });
    return result;
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
