const germs = require(`germs`)
const pkg = require(`./package.json`)
// const utils = require(`nps-utils`)

// const allNPS = utils.concurrent.nps
module.exports = germs.build(pkg.name, {
  readme: `documentation readme -s "API" src/*.js`,
  test: `jest src/*.spec.js --coverage --coveragePathIgnorePatterns entrust.js common-tags katsu-curry`
})
