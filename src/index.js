import {_e0} from './e0'
import {_e1} from './e1'
import {_e2} from './e2'
import {_e3} from './e3'
import {_e4} from './e4'
import {_e5} from './e5'
import {_e6} from './e6'
import {_e7} from './e7'
import {_e8} from './e8'
import {_e9} from './e9'
import {_e10} from './e10'
import {_eN, _eD} from './eN'

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
export {eN, eD} from './eN'

export const raw = {
  e0: _e0,
  e1: _e1,
  e2: _e2,
  e3: _e3,
  e4: _e4,
  e5: _e5,
  e6: _e6,
  e7: _e7,
  e8: _e8,
  e9: _e9,
  e10: _e10,
  eD: _eD,
  eN: _eN
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
