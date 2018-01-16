import {curry} from 'katsu-curry'

export const _e7 = (fn, a, b, c, d, e, f, g, x) => x[fn](a, b, c, d, e, f, g)

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
export const e7 = curry(_e7)
