import {curry} from 'katsu-curry'

export const entrust10 = (fn, a, b, c, d, e, f, g, h, i, j, x) => x[fn](
  a, b, c, d, e, f, g, h, i, j
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
export const e10 = curry(entrust10)
