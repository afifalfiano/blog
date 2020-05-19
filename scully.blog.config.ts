const {MinifyHtml} = require('scully-plugin-minify-html');
const {DisableAngular} = require('scully-plugin-disable-angular');

const postRenderers = [DisableAngular, MinifyHtml];

exports.config = {
  projectRoot: "./src/app",
  projectName: "blog",
  defaultPostRenderers: postRenderers,
  outDir: "./dist/static",
  routes: {
    '/blog/:slug': {
      type: "contentFolder",
      slug: {
        folder: "./blog"
      },
    },
  },
};
