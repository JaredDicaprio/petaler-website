module.exports = {
  siteMetadata: {
    title: `Petaler`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-anchor-links`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "getpetaler.com",
        acl: null,
        region: "us-east-1",
      },
    },
  ],
  pathPrefix: "/getpetaler.com",
};
