module.exports = {
  siteMetadata: {
    siteUrl: "https://www.ontime-creative.com",
    title: "on time creative",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `montserrat`,
          `source sans pro\:300,400,400i,700, 900` // you can also specify font weights and styles
        ],
        display: 'swap'
    },
  },
    
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon_package_v0.16/favicon-16x16.png",
      },
    },
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
  ],
};
