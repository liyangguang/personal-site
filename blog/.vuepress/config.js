module.exports = {
  title: 'UX Engineering blog',
  description: 'Web front end developement and UX design blog by Yangguang Li.',
  base: '/blog/',
  theme: '@vuepress/theme-blog',
  themeConfig: {
    directories: [
      {
        id: 'posts',
        dirname: '_posts',
        path: '/post/',
      }
    ],
    nav: [
      {text: 'Home', link: '/'},
      {text: 'All posts', link: '/post/'},
      {text: 'All tags', link: '/tag/'},
      {text: 'About me', link: 'https://liyangguang.com'},
    ],
    footer: {
      contact: [
        {type: 'linkedin', link: 'https://www.linkedin.com/in/yangguangli/'},
        {type: 'github', link: 'https://github.com/liyangguang'},
        {type: 'mail', link: 'mailto:liyangguangcn@gmail.com'},
      ],
      copyright: [
        {text: 'Yangguang Li', link: 'https://liyangguang.com'},
        {text: 'Source code', link: 'https://github.com/liyangguang/personal-site/tree/master/blog'},
      ],
    },
    sitemap: {hostname: 'https://liyangguang.com/'},
  }
};
