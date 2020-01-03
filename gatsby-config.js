module.exports = {
  siteMetadata: {
    title: `网盘新体验，个人家用无线NAS`,
    description: `数据存在家里，出门在外也能调用。实现手机照片/视频的自动备份，电脑自动备份，
          文件搜索与文件管理，实现与第三方应用的文件交互。Wi-Fi连接使用，内置固态存储。安静无噪音，低功耗。`,
    author: `口袋网盘`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#00695c`,
        theme_color: `#00695c`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`
  ],
}
