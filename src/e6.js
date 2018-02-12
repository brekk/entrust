import {curry} from 'katsu-curry'

export const entrust6 = (fn, a, b, c, d, e, f, x) => x[fn](a, b, c, d, e, f)

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
export const e6 = curry(entrust6)
