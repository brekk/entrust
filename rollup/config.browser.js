const pkg = require(`../package.json`)
const {bundle} = require(`germs`)

const external = (
  pkg && pkg.dependencies ?
    Object.keys(pkg.dependencies) :
    []
)

module.exports = bundle({
  name: pkg.name,
  external,
  input: `src/index.js`,
  output: {
    name: pkg.name,
    file: `./${pkg.name}.browser.js`,
    format: `iife`
  }
})
