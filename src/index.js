import {curry} from 'katsu-curry'

/**
 * @method e0
 * @param {string} fn - a function name
 * @param {Object} x - an object
 * @returns {*}
 * @example
 * import {e0} from 'entrust'
 * const toLowerCase = e0(`toLowerCase`)
 * toLowerCase(`COOL`) // cool
 */
export const e0 = curry(
  (fn, x) => x[fn]()
)

/**
 * @method e1
 * @param {string} fn - a function name
 * @param {*} a - some parameter
 * @param {Object} x - an object
 * @returns {*}
 * @example
 * import {e1} from 'entrust'
 * const split = e1(`split`)
 * split(`:`, `c:o:o:l`) // [`c`,`o`,`o`,`l`]
 */
export const e1 = curry(
  (fn, a, x) => x[fn](a)
)

/**
 * @method e2
 * @param {string} fn - a function name
 * @param {*} a - some parameter
 * @param {*} b - some parameter
 * @param {Object} x - an object
 * @returns {*}
 * @example
 * import {e2} from 'entrust'
 * const replace = e2(`replace`)
 * replace(`old`, `new`, `oldnew`) // newnew
 */
export const e2 = curry(
  (fn, a, b, x) => x[fn](a, b)
)

/**
 * @method e3
 * @param {string} fn - a function name
 * @param {*} a - some parameter
 * @param {*} b - some parameter
 * @param {*} c - some parameter
 * @param {Object} x - an object
 * @returns {*}
 */
export const e3 = curry(
  (fn, a, b, c, x) => x[fn](a, b, c)
)

/**
 * @method e4
 * @param {string} fn - a function name
 * @param {*} a - some parameter
 * @param {*} b - some parameter
 * @param {*} c - some parameter
 * @param {*} d - some parameter
 * @param {Object} x - an object
 * @returns {*}
 */
export const e4 = curry(
  (fn, a, b, c, d, x) => x[fn](a, b, c, d)
)

/**
 * @method e5
 * @param {string} fn - a function name
 * @param {*} a - some parameter
 * @param {*} b - some parameter
 * @param {*} c - some parameter
 * @param {*} d - some parameter
 * @param {*} e - some parameter
 * @param {Object} x - an object
 * @returns {*}
 */
export const e5 = curry(
  (fn, a, b, c, d, e, x) => x[fn](a, b, c, d, e)
)

/**
 * @method e6
 * @param {string} fn - a function name
 * @param {*} a - some parameter
 * @param {*} b - some parameter
 * @param {*} c - some parameter
 * @param {*} d - some parameter
 * @param {*} e - some parameter
 * @param {*} f - some parameter
 * @param {Object} x - an object
 * @returns {*}
 */
export const e6 = curry(
  (fn, a, b, c, d, e, f, x) => x[fn](a, b, c, d, e, f)
)

/**
 * @method e7
 * @param {string} fn - a function name
 * @param {*} a - some parameter
 * @param {*} b - some parameter
 * @param {*} c - some parameter
 * @param {*} d - some parameter
 * @param {*} e - some parameter
 * @param {*} f - some parameter
 * @param {*} g - some parameter
 * @param {Object} x - an object
 * @returns {*}
 */
export const e7 = curry(
  (fn, a, b, c, d, e, f, g, x) => x[fn](a, b, c, d, e, f, g)
)
/**
 * @method e8
 * @param {string} fn - a function name
 * @param {*} a - some parameter
 * @param {*} b - some parameter
 * @param {*} c - some parameter
 * @param {*} d - some parameter
 * @param {*} e - some parameter
 * @param {*} f - some parameter
 * @param {*} g - some parameter
 * @param {*} h - some parameter
 * @param {Object} x - an object
 * @returns {*}
 */
export const e8 = curry(
  (fn, a, b, c, d, e, f, g, h, x) => x[fn](a, b, c, d, e, f, g, h)
)
/**
 * @method e9
 * @param {string} fn - a function name
 * @param {*} a - some parameter
 * @param {*} b - some parameter
 * @param {*} c - some parameter
 * @param {*} d - some parameter
 * @param {*} e - some parameter
 * @param {*} f - some parameter
 * @param {*} g - some parameter
 * @param {*} h - some parameter
 * @param {*} i - some parameter
 * @param {Object} x - an object
 * @returns {*}
 */
export const e9 = curry(
  (fn, a, b, c, d, e, f, g, h, i, x) => x[fn](a, b, c, d, e, f, g, h, i)
)

/**
 * @method e10
 * @param {string} fn - a function name
 * @param {*} a - some parameter
 * @param {*} b - some parameter
 * @param {*} c - some parameter
 * @param {*} d - some parameter
 * @param {*} e - some parameter
 * @param {*} f - some parameter
 * @param {*} g - some parameter
 * @param {*} h - some parameter
 * @param {*} i - some parameter
 * @param {*} j - some parameter
 * @param {Object} x - an object
 * @returns {*}
 */
export const e10 = curry(
  (fn, a, b, c, d, e, f, g, h, i, j, x) => x[fn](a, b, c, d, e, f, g, h, i, j)
)
