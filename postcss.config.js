const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    require("tailwindcss")("tailwind.config.js"),
    require("autoprefixer"),
    require("cssnano")({
      preset: "default",
    }),
    purgecss({
      content: ["./src/**/*.md", "./src/**/*.njk", "./src/**/*.html"],
    }),
  ],
};
