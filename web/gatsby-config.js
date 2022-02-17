require('dotenv').config('./.env');

module.exports = {
  siteMetadata: {
    title: `TechHub-blog`,
    siteUrl: `https://techhub-blog.netlify.com`,
    description: `TechHub Blog is a platform for latest technology news and updates.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
    },
  ],
};
