import {curry} from 'katsu-curry'

export const entrust5 = (fn, a, b, c, d, e, x) => x[fn](a, b, c, d, e)

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
export const e5 = curry(entrust5)
