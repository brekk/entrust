import {curry} from 'katsu-curry'

export const _e9 = (fn, a, b, c, d, e, f, g, h, i, x) => x[fn](a, b, c, d, e, f, g, h, i)

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
export const e9 = curry(_e9)
