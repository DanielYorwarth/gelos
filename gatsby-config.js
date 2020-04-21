module.exports = {
  siteMetadata: {
    title: `Gelos Healthcare`,
    description: `Gelos Healthcare Limited is a specialist healthcare development and investment business which offers partners a rarely found end-to-end service creating sustainable investment into the UK health and social care market.`,
    author: `@pagecreative`,
    siteUrl: 'http://www.pagedev.co.uk/clients/page-gatsby'
  },
  plugins: [
     `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-background-image-es5',
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: '/:',
      },
    },
    `gatsby-plugin-offline`,
    `styled-components`,
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gelos`,
        short_name: `Gelos`,
        start_url: `/`,
        background_color: `#172D46`,
        theme_color: `#172D46`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.

      },
    },
    // PostCSS
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sitemap`,
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        //develop: true, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      }
    },
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    },
     // Compression 
     {
      resolve: 'gatsby-plugin-brotli',
      options: {
        extensions: ['css', 'html', 'js', 'svg']
      }
    },
  ]
};
