import {curry} from 'katsu-curry'

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
