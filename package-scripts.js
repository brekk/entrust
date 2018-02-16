const germs = require(`germs`)
const pkg = require(`./package.json`)
const utils = require(`nps-utils`)

const allNPS = utils.concurrent.nps
const GERMS = germs.build(pkg.name, {
  readme: `documentation readme -s "API" src/*.js`,
  test: [
    `jest src/*.spec.js --coverage`,
    `--coveragePathIgnorePatterns entrust.js common-tags katsu-curry`
  ].join(` `)
})

GERMS.scripts.lint.project = `clinton`
GERMS.scripts.lint = Object.assign(
  {},
  GERMS.scripts.lint,
  {script: allNPS(`lint.src`, `lint.jsdoc`, `lint.project`)}
)
module.exports = GERMS
