module.exports = {
  title: 'Yangguang\'s UXE blog',
  description: 'This is de',
  base: '/blog/',
  theme: '@vuepress/theme-blog',
  themeConfig: {
    directories: [
      {
        id: 'posts',
        dirname: '_posts',
        path: '/posts/',
      }
    ],
    nav: [
      {text: 'Home', link: '/'},
      {text: 'All posts', link: '/posts/'},
      {text: 'All tags', link: '/tags/'},
      {text: 'Personal site', link: 'https://liyangguang.com'},
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
    frontmatters: [
      {
        id: 'tags',
        keys: ['tag', 'tags'],
        path: '/tags/',
      },
    ],
    sitemap: {hostname: 'https://liyangguang.com/'},
  }
};
