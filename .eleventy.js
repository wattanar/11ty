const htmlmin = require("html-minifier");
const posthtml = require("posthtml");
const uglify = require("posthtml-minify-classnames");

module.exports = function (eleventyConfig) {
  // html minify
  eleventyConfig.addTransform("htmlmin", async function (content, outputPath) {
    if (outputPath.endsWith(".html")) {
      const { html } = await posthtml().use(uglify()).process(content);
      let minified = htmlmin.minify(html, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });

      return minified;
    }

    return content;
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
