import {curry} from 'katsu-curry'

export const entrust2 = (fn, a, b, x) => x[fn](a, b)

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
export const e2 = curry(entrust2)
