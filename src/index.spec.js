/* global test */
import {t} from 'germs/lib/test-helpers'
import {
  eN, eD,
  e0,
  e1,
  e2,
  e3,
  e4,
  e5,
  e6,
  e7,
  e8,
  e9,
  e10
} from './index'

test(`e0`, () => {
  t.is(typeof e0, `function`)
  t.is(e0(`prop`, {prop: () => 100}), 100)
})

test(`e1`, () => {
  t.is(typeof e1, `function`)
  t.is(e1(`prop`, 10, {prop: (x) => x * 2}), 20)
})

test(`e1 -- map example`, () => {
  t.is(typeof e1, `function`)
  t.deepEqual(e1(`map`, (x) => x * 2, [1, 2, 3, 4]), [2, 4, 6, 8])
})

test(`e2`, () => {
  t.is(typeof e2, `function`)
  t.is(e2(`prop`, 10, 11, {prop: (x, y) => x * y}), 110)
})
test(`e2 -- reduce example`, () => {
  t.is(typeof e2, `function`)
  t.is(e2(`reduce`, (a, b) => a + b, 0, [1, 2, 3, 4]), 10)
})
test(`e3`, () => {
  t.is(typeof e3, `function`)
  t.is(e3(`method`, 1, 2, 3, {method: (a, b, c) => a + b + c}), 6)
})
test(`e4`, () => {
  t.is(typeof e4, `function`)
  t.is(e4(`method`, 1, 2, 3, 4, {method: (a, b, c, d) => a + b + c + d}), 10)
})
test(`e5`, () => {
  t.is(typeof e5, `function`)
  t.is(e5(`method`, 1, 2, 3, 4, 5, {method: (a, b, c, d, e) => a + b + c + d + e}), 15)
})
test(`e6`, () => {
  t.is(typeof e6, `function`)
  t.is(
    e6(`method`,
      1, 2, 3, 4, 5, 6,
      { method:
        (a, b, c, d, e, f) => a + b + c + d + e + f
      }
    ),
    21
  )
})
test(`e7`, () => {
  t.is(typeof e7, `function`)
  t.is(
    e7(`method`,
      1, 2, 3, 4, 5, 6, 7,
      { method:
        (a, b, c, d, e, f, g) => a + b + c + d + e + f + g
      }
    ),
    28
  )
})
test(`e8`, () => {
  t.is(typeof e8, `function`)
  t.is(
    e8(`method`,
      1, 2, 3, 4, 5, 6, 7, 8,
      { method:
        (a, b, c, d, e, f, g, h) => a + b + c + d + e + f + g + h
      }
    ),
    36
  )
})
test(`e9`, () => {
  t.is(typeof e9, `function`)
  t.is(
    e9(`method`,
      1, 2, 3, 4, 5, 6, 7, 8, 9,
      { method:
        (a, b, c, d, e, f, g, h, i) => a + b + c + d + e + f + g + h + i
      }
    ),
    45
  )
})
test(`e10`, () => {
  t.is(typeof e10, `function`)
  t.is(
    e10(`method`,
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      { method:
        (a, b, c, d, e, f, g, h, i, j) => a + b + c + d + e + f + g + h + i + j
      }
    ),
    55
  )
})
test(`eN`, () => {
  t.is(typeof eN, `function`)
  t.is(
    eN(3, `method`, [1, 2, 3], {method: (a, b, c) => a + b + c}),
    6
  )
})
test(`eD`, () => {
  t.is(typeof eD, `function`)
  t.is(
    eD(3, `method`, [1, 2, 3], {method: (a, b, c) => a + b + c}),
    6
  )
  t.throws(
    () => eD(3, `method`, [1, 2], {method: (a, b, c) => a + b + c}),
    // n,m,a,d
    `method expects total args (2) to equal the given arity (3)`
  )
})
