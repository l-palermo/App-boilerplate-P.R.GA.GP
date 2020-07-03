import serve from 'rollup-plugin-serve';
import htmlTemplate from 'rollup-plugin-generate-html-template';
import clear from 'rollup-plugin-clear';
import livereload from 'rollup-plugin-livereload';
import css from 'rollup-plugin-css-porter';
import globals from 'rollup-plugin-node-globals';
import linaria from 'linaria/rollup';
import image from '@rollup/plugin-image';
import url from '@rollup/plugin-url';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonJS from '@rollup/plugin-commonjs';

export default (settings) => {
    const env = settings.environment;

    const servePlug = !env
        ? serve({
              openPage: '/',
              contentBase: 'dist',
              port: 4000,
          })
        : null;

    const liveReload = !env ? livereload('dist/index.html') : null;

    return {
        input: 'src/index.js',
        output: {
            file: 'dist/bundle.js',
        },
        // external: ["react", "react-dom"],
        plugins: [
            // Locate and bundle third-party dependencies in node_modules
            resolve(),
            // convert CommonJS modules to ES6
            commonJS({
                include: 'node_modules/**',
            }),
            // takes care of node global variables
            globals(),
            // styles,
            linaria(),
            css(),
            babel({
                exclude: 'node_modules/**',
                babelrc: true,
            }),
            // custom html template
            htmlTemplate({
                template: 'public/index.html',
                target: 'dist/index.html',
            }),
            // livereload after changes, very handy, no page refresh for css
            liveReload,
            // dev-server
            servePlug,
            // allow to import image type of assets
            image(),
            // allow to import assets as data:urls
            url(),
            // clear the dist folder after each build
            clear({
                targets: ['dist'],
                watch: true,
            }),
        ],
    };
};
