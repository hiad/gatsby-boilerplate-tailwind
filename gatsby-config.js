const path = require("path");
const gatsbyRequiredRules = path.join(
  process.cwd(),
  "node_modules",
  "gatsby",
  "dist",
  "utils",
  "eslint-rules"
);

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Jillion",
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-breakpoints',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          quality: 100,
        }
      }
    },
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    'gatsby-plugin-postcss',
  ],
};
