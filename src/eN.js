import {curry} from 'katsu-curry'
import {e0} from './e0'
import {e1} from './e1'
import {e2} from './e2'
import {e3} from './e3'
import {e4} from './e4'
import {e5} from './e5'
import {e6} from './e6'
import {e7} from './e7'
import {e8} from './e8'
import {e9} from './e9'
import {e10} from './e10'

/**
 * invoke a delegated method with arguments as an array. enforces specific arity
 * @method eN
 * @param {number} n - 0 - 10
 * @param {string} method - a function name on your delegatee
 * @param {Array} args - arguments to pass to your delegatee's method
 * @param {*} delegatee - something with methods
 * @returns {*} the result of delegating to the method with some arguments
 * @public
 * @example
 * import {eN} from 'entrust'
 * eN(0, `toUpperCase`, [], `cool`) // `COOL`
 * eN(1, `map`, [(x) => x * 2], [1,2,3]) // [2,4,6]
 * eN(2, `reduce`, [(a, b) => (a + b), 0], [1,2,3]) // 6
 */
export const eN = curry((n, method, args, delegatee) => {
  const entrustees = [e0, e1, e2, e3, e4, e5, e6, e7, e8, e9, e10]
  const params = [method, ...args, delegatee]
  return entrustees[n].apply(null, params)
})

/**
 * invoke a delegated method with arguments as an array. enforces specific arity
 * Yells at you if you give arguments that don't match the expected arity.
 * @method eD
 * @param {number} n - 0 - 10
 * @param {string} method - a function name on your delegatee
 * @param {Array} args - arguments to pass to your delegatee's method
 * @param {*} delegatee - something with methods
 * @returns {*} the result of delegating to the method with some arguments
 * @public
 * @example
 * import {eD} from 'entrust'
 * eD(0, `toUpperCase`, [], `cool`) // `COOL`
 * eD(1, `map`, [(x) => x * 2], [1,2,3]) // [2,4,6]
 * eD(2, `reduce`, [(a, b) => (a + b), 0], [1,2,3]) // 6
 * eD(2, `reduce`, [(a, b) => (a + b)], [1, 2, 3]) // throws error
 */
export const eD = curry((n, m, a, d) => {
  if (n !== a.length) {
    // eslint-disable-next-line fp/no-throw
    throw new Error(`${m} expects total args (${a.length}) to equal the given arity (${n})`)
  }
  return eN(n, m, a, d)
})
