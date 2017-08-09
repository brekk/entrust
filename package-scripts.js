module.exports = {
  scripts: {
    dependencies: `depcheck`,
    graph: [
      `madge src --json | jayin "_.toPairs(x).map(([k, v]) =>`,
      `([k,_.map(v, (y) => y.indexOf('node_modules') > -1 ?`,
      `y.substr(y.indexOf('node_modules') + 13) : y)]))`,
      `.filter(([k, v]) => !(k.indexOf('spec') > -1))`,
      `.filter(([k, v]) => !(k.indexOf('scss') > -1))`,
      `.filter(([k, v]) => !(k.indexOf('css') > -1))`,
      `.reduce((agg, [k, v]) => Object.assign({}, agg, {[k]: v}), {})"`,
      ` | madge --stdin --image dependencies.svg`
    ].join(``),
    documentation: `documentation build src/** -f html -o docs`,
    readme: `documentation readme README.md -s "API" src/index.js`,
    lint: {
      default: `nps lint.src && nps lint.jsdoc`,
      src: `eslint src/*.js`,
      jsdoc: `documentation lint src/index.js`
    },
    build: {
      default: `nps build.main`,
      main: `rollup -c config/rollup.config.main.js`
    },
    dueDiligence: `nps lint && nps build && nps readme`,
    test: `echo 'trust!'`
  }
}
