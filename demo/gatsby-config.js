const siteMetadata = require("./config/site").siteMetadata;

module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-changelog",
      options: {}
    }
  ],
  siteMetadata
};
