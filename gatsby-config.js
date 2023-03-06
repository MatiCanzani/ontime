module.exports = {
  siteMetadata: {
    siteUrl: "https://www.ontime-creative.com",
    title: "on time creative",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon/favicon-32x32.png",
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
    "gatsby-plugin-anchor-links",
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
      },
    },
    {
      resolve: "gatsby-plugin-preload",
      options: {
        preloaders: [
          {
            href: "https://res.cloudinary.com/mcanzani/video/upload/c_scale,h_502/v1675956657/Ontime%20Assets/Chandon_Extra_2_-_4K_kxynkd.mp4",
            as: "video",
            type: "video/mp4",
          },
          {
            href: "https://res.cloudinary.com/mcanzani/video/upload/c_scale,w_889/v1676584143/Ontime%20Assets/B289F7C9-EA24-470D-A76D-A1DFA099896D_2_1_cgqy5l.mp4",
            as: "video",
            type: "video/mp4",
          },
        ],
      },
    },
  ],
};
