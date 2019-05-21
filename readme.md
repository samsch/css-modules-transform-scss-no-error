# Reproduction of swallowed preprocessor errors

Steps to reproduce issue:

- Install deps: `npm i`
- Run build: `npx babel -d build src`

The preprocessor config in `config/preprocessScss.js` includes a try..catch which prints the error an re-throws.

The output will include the error printed by preprocessScss.js which originates from `src/style.scss`, but the build will also be "successful".

The output will also reflect 2 successfully build files. The other is `src/badRequire.js`, which `require()`s a non-existance .scss file. The build does not error in any way due to this.
