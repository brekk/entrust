import {curry} from 'katsu-curry'

export const entrust0 = (fn, x) => x[fn]()

/**
 * @method e0
 * @param {string} fn - a function name
 * @param {Object} x - an object
 * @returns {*}
 * @example
 * import {e0} from 'entrust'
 * const toLowerCase = e0(`toLowerCase`)
 * toLowerCase(`COOL`) // cool
 */
export const e0 = curry(entrust0)
