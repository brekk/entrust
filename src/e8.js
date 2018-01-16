import {curry} from 'katsu-curry'

export const _e8 = (fn, a, b, c, d, e, f, g, h, x) => x[fn](a, b, c, d, e, f, g, h)

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
export const e8 = curry(_e8)
