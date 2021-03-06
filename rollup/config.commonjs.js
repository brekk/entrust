const pkg = require(`../package.json`)
// const commonjs = require(`rollup-plugin-commonjs`)
const {bundle} = require(`germs`)

module.exports = bundle({
  alias: {
  },
  input: `src/index.js`,
  output: {
    name: pkg.name,
    file: `./${pkg.name}.js`,
    format: `umd`
  },
  alterPlugins: (plug) => {
    // eslint-disable-next-line fp/no-mutating-methods
    plug.splice(7, 1)
    return plug
  }
})
