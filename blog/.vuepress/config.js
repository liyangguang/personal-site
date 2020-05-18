module.exports = {
  title: 'Yangguang\'s blog',
  description: 'UX Engineering, frone end development, and more by Yangguang Li.',
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
      {text: 'All', link: '/post/'},
      {text: 'Tags', link: '/tag/'},
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
    comment: {
      service: "disqus",
      shortname: "yangguang-uxe",
    },
    smoothScroll: true,
  },
  plugins: [
    ['@vuepress/google-analytics', {'ga': 'UA-48109667-2'}],
    [
      'vuepress-plugin-medium-zoom',
      {
        selector: 'img',
        delay: 1000,
        options: {
          margin: 24,
          background: '#f2f2f2',
          scrollOffset: 0,
        },
      },
    ],
  ],
};
