module.exports = {
      siteMetadata: {
            title: `Typing Game`,
            description: `A game for practicing typing.`,
            author: `@_charleseller`,
      },
      plugins: [
            `gatsby-plugin-react-helmet`,
            {
                  resolve: `gatsby-source-filesystem`,
                  options: {
                        name: `assets`,
                        path: `${__dirname}/src/assets`,
                  },
            },
            `gatsby-transformer-sharp`,
            `gatsby-plugin-sharp`,
            {
                  resolve: `gatsby-plugin-manifest`,
                  options: {
                        name: `typing-game`,
                        short_name: `typing-game`,
                        start_url: `/`,
                        background_color: `#FF8E53`,
                        theme_color: `#FF8E53`,
                        display: `standalone`,
                        icon: `src/assets/icon.png`, // This path is relative to the root of the site.
                  },
            },
            // this (optional) plugin enables Progressive Web App + Offline functionality
            // To learn more, visit: https://gatsby.dev/offline
            // `gatsby-plugin-offline`,
      ],
}
