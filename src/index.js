import {entrust0} from './e0'
import {entrust1} from './e1'
import {entrust2} from './e2'
import {entrust3} from './e3'
import {entrust4} from './e4'
import {entrust5} from './e5'
import {entrust6} from './e6'
import {entrust7} from './e7'
import {entrust8} from './e8'
import {entrust9} from './e9'
import {entrust10} from './e10'
import {entrustN, entrustD} from './e-n'

export {e0} from './e0'
export {e1} from './e1'
export {e2} from './e2'
export {e3} from './e3'
export {e4} from './e4'
export {e5} from './e5'
export {e6} from './e6'
export {e7} from './e7'
export {e8} from './e8'
export {e9} from './e9'
export {e10} from './e10'
export {eN, eD} from './e-n'

export const raw = {
  e0: entrust0,
  e1: entrust1,
  e2: entrust2,
  e3: entrust3,
  e4: entrust4,
  e5: entrust5,
  e6: entrust6,
  e7: entrust7,
  e8: entrust8,
  e9: entrust9,
  e10: entrust10,
  eD: entrustD,
  eN: entrustN
}

/**
 * generate a customized version of entrust's API
 * @function custom
 * @param {function} curry - a function which curries
 * @returns {object} raw+ an augmented version of the raw API
 * @example
 * import {custom} from 'entrust'
 * import curry from 'lodash/fp/curry'
 * const {e0} = custom(curry)
 */
export const custom = (curry) => {
  const merge = (a, b) => Object.assign({}, a, b)
  return Object.keys(raw).map((k) => ({
    [k]: curry(raw[k])
  })).reduce(merge, {})
}
