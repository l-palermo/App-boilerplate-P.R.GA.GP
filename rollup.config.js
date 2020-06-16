import serve from "rollup-plugin-serve";
// import styles from "rollup-plugin-styles";
import htmlTemplate from "rollup-plugin-generate-html-template";
import clear from "rollup-plugin-clear";
import livereload from "rollup-plugin-livereload";
import image from "@rollup/plugin-image";
import url from '@rollup/plugin-url';
import css from 'rollup-plugin-css-porter';

export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
  },
  plugins: [
    serve({
      open: true,
      openPage: "/",
      contentBase: "dist",
      port: 4000,
    }),
    // styles(),
    css(),
    htmlTemplate({
      template: "public/index.html",
      target: "dist/index.html",
    }),
    clear({
      targets: ["dist"],
      watch: true,
    }),
    livereload(),
    image(),
    url()
  ],
};
