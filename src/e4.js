import {curry} from 'katsu-curry'

export const entrust4 = (fn, a, b, c, d, x) => x[fn](a, b, c, d)

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
export const e4 = curry(entrust4)
