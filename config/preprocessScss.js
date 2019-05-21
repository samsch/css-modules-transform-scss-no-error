'use strict';
const sass = require('sass');

module.exports = function processSass (data, filename) {
  try {
    const result = sass.renderSync({
      data: data,
      file: filename
    }).css;
    return result.toString('utf8');
  } catch (error) {
    console.log(error);
    throw error;
  }
};
