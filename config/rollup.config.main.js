const base = require(`./rollup.config.base`)
/* eslint-disable fp/no-mutating-assign */
module.exports = Object.assign(base, {
  entry: `src/index.js`,
  targets: [
    {
      dest: `entrust.js`,
      format: `cjs`
    },
    {
      dest: `entrust.es.js`,
      format: `es`
    }
  ]
})
/* eslint-enable fp/no-mutating-assign */
