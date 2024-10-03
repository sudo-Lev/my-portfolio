module.exports = {
  reactStrictMode: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/works': { page: '/works' },
      '/works/undefined': { page: '/404' },
      '/undefined': { page: '/404' },
      '/works/blueauditor': { page: '/works/blueauditor' },
      '/works/farego': { page: '/works/farego' },
      '/works/vostokmedservice': { page: '/works/vostokmedservice' },
    };
  },
};
