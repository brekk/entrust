const pkg = require(`../package.json`)
const {bundle} = require(`germs`)

const external = (
  pkg && pkg.dependencies ?
    Object.keys(pkg.dependencies) :
    []
)

module.exports = bundle({
  alias: {

  },
  external,
  input: `src/index.js`,
  output: {
    name: pkg.name,
    file: `./${pkg.name}.mjs`,
    format: `es`
  }
})
