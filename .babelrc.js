module.exports = {
  presets: [
    "next/babel",
    [
      "@emotion/babel-preset-css-prop",
      {
        sourceMap: process.env !== "production",
        labelFormat: "[dirname]--[filename]--[local]",
      },
    ],
  ],
  plugins: [],
}
