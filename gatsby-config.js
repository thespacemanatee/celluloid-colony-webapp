module.exports = {
  siteMetadata: {
    title: 'celluloid-colony-webapp',
    siteUrl: 'https://celluloidcolony08563.gatsbyjs.io/',
  },
  plugins: [
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: './src/data/',
      },
      __key: 'data',
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-anchor-links',
    'gatsby-transformer-json',
  ],
};

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
