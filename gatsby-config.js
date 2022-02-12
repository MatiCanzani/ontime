module.exports = {
  siteMetadata: {
    siteUrl: "https://www.ontime-creative.com",
    title: "on time creative",
    social: [
      {
        url: 'https://github.com/Pyrax',
        name: 'GitHub'
      }
    ]
  },
  plugins: [
    //form with Netlify forms
    {
      resolve: `gatsby-theme-contact`,
      options: {
        contactPath: '/contact',
        successPath: '/thanks'
      }
    },
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          { family: `Montserrat`, variants: [`400`, `700`, `900`] },
          { family: `source sans pro`, variants: [`400`, `700`, `900`] },
        ],
        display: "swap",
      },
    },
    
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
    'gatsby-plugin-anchor-links',
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100
      }
    }
  ],
};
