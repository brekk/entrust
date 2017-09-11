const pkg = require('./package.json')

module.exports = function configureWallaby(wallaby) {
  return {
    name: `entrust`,
    files: [
      `src/**/*.js`,
      `src/*.js`
    ],

    tests: [
      `tests/**/*.spec.js`,
      `tests/*.spec.js`
    ],

    env: {
      type: `node`,
      kind: `electron`
    },

    compilers: {
      '**/*.js': wallaby.compilers.babel()
    },

    testFramework: `jest`,

    setup: function setup() {
      require(`babel-polyfill`)
    },

    debug: true,
    filesWithNoCoverageCalculated: [

    ]
  }
}
