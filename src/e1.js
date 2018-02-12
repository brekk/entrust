import {curry} from 'katsu-curry'

export const entrust1 = (fn, a, x) => x[fn](a)

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
export const e1 = curry(entrust1)
