var MinifyHtml = require('scully-plugin-minify-html').MinifyHtml;
// var DisableAngular = require('scully-plugin-disable-angular').DisableAngular;
var postRenderers = [MinifyHtml];
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
