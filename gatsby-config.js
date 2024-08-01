/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `honda`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "es",
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@components": "src/components",
          "@images": "src/images",
          "@videos": "src/videos",
          "@docs": "src/docs",
          "@pages": "src/pages",
          "@styles": "src/styles",
          "@fonts": "src/fonts",
          "@constants": "src/constants",
        },
        extensions: [".js"],
      },
    },
  ],
};
