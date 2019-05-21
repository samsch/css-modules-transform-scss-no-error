'use strict';

module.exports = (api) => ({
  "plugins": [
    ["css-modules-transform", {
      "extractCss": "./css/styles.css",
      "preprocessCss": "./config/preprocessScss.js",
      "extensions": [".css", ".scss"],
      "prepend": [ "./config/prependPostcssPlugins.js" ],
      "devMode": api.env("production"),
    }]
  ],
});
