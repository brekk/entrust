const germs = require(`germs`)
const pkg = require(`./package.json`)

module.exports = germs(pkg.name)
