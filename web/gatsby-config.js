module.exports = {
  siteMetadata: {
    title: `techHub`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '',
        dataset: '',
      },
    },
    'gatsby-plugin-sass',
  ],
};
