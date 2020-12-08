module.exports = {
  title: 'Yangguang Li',
  description: 'Yangguang Li\'s site + blog. User experience engineering | Front end development | Web developmenet | User experience design',
  base: '/blog/',
  theme: '@vuepress/theme-blog',
  themeConfig: {
    directories: [
      {
        id: 'posts',
        dirname: '_posts',
        path: '/',
        itemPermalink: '/:year/:month/:slug',
      }
    ],
    nav: [
      {text: 'All posts', link: '/'},
      {text: 'Tags', link: '/tag/'},
      {text: 'About me', link: 'https://liyangguang.com'},
    ],
    footer: {
      contact: [
        {type: 'linkedin', link: 'https://www.linkedin.com/in/yangguangli/'},
        {type: 'github', link: 'https://github.com/liyangguang'},
        {type: 'twitter', link: 'https://twitter.com/LYangguang'},
        {type: 'mail', link: 'mailto:liyangguangcn@gmail.com'},
      ],
      copyright: [
        {text: `Last updated ${new Date().toLocaleDateString()}`},
      ],
    },
    sitemap: {hostname: 'https://liyangguang.com/'},
    comment: {
      service: "disqus",
      shortname: "yangguang-uxe",
    },
    globalPagination: {
      lengthPerPage: 10,
    },
    smoothScroll: true,
  },
  markdown: {lineNumbers: true},
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
