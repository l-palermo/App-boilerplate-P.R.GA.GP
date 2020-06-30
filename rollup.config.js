import serve from "rollup-plugin-serve";
import htmlTemplate from "rollup-plugin-generate-html-template";
import clear from "rollup-plugin-clear";
import livereload from "rollup-plugin-livereload";
import css from "rollup-plugin-css-porter";
import globals from "rollup-plugin-node-globals";
import image from "@rollup/plugin-image";
import url from "@rollup/plugin-url";
import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonJS from "@rollup/plugin-commonjs";

export default (settings) => {
  console.log(settings.environment);
  const env = settings.environment;

  const servePlug = !env
    ? serve({
        open: true,
        openPage: "/",
        contentBase: "dist",
        port: 4000,
      })
    : null;

  const liveReload = !env ? livereload() : null;

  return {
    input: "src/index.js",
    output: {
      file: "dist/bundle.js",
    },
    // external: ["react", "react-dom"],
    plugins: [
      // Locate and bundle third-party dependencies in node_modules
      resolve(),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/env", "@babel/preset-react"],
      }),
      // convert CommonJS modules to ES6
      commonJS({
        include: "node_modules/**",
      }),
      // takes care of node global variables
      globals(),
      // dev-server
      servePlug,
      // styles(),
      css(),
      // custom html template
      htmlTemplate({
        template: "public/index.html",
        target: "dist/index.html",
      }),
      // clear the dist folder after each build
      clear({
        targets: ["dist"],
        watch: true,
      }),
      // livereload after changes, very handy, no page refresh for css
      liveReload,
      // allow to import image type of assets
      image(),
      // allow to import assets as data:urls
      url(),
    ],
  };
};
