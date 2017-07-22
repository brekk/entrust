import {curry} from 'katsu-curry'

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
export const e0 = curry(
  (fn, x) => x[fn]()
)
