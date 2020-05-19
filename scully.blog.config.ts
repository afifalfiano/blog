exports.config = {
  projectRoot: './src/app',
  outDir: './dist/blog',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './blog',
      },
    },
  },
};
