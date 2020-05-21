const {MinifyHtml} = require('scully-plugin-minify-html');
// const {DisableAngular} = require('scully-plugin-disable-angular');

const postRenderers = [MinifyHtml];

exports.config = {
  projectRoot: './src',
  projectName: 'blog',
  defaultPostRenderers: postRenderers,
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './blog'
      },
    },
  },
};