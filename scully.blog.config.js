var MinifyHtml = require('scully-plugin-minify-html').MinifyHtml;
var DisableAngular = require('scully-plugin-disable-angular').DisableAngular;
var postRenderers = [DisableAngular, MinifyHtml];
exports.config = {
    projectRoot: './src/app',
    projectName: 'blog',
    defaultPostRenderers: postRenderers,
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
