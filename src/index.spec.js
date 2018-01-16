/* global test */
import {t} from 'germs'
import {curry} from 'katsu-curry'
import _curry from 'lodash/fp/curry'
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
  e10,
  custom
} from './index'

const K = (x) => () => x
const multiply = (a, b) => a * b
const add = (a, b) => a + b
const add3 = (a, b, c) => a + b + c
const add4 = (a, b, c, d) => a + b + c + d
const add5 = (a, b, c, d, e) => a + b + c + d + e
const add6 = (a, b, c, d, e, f) => a + b + c + d + e + f
const add7 = (a, b, c, d, e, f, g) => a + b + c + d + e + f + g
const add8 = (a, b, c, d, e, f, g, h) => a + b + c + d + e + f + g + h
const add9 = (a, b, c, d, e, f, g, h, i) => a + b + c + d + e + f + g + h + i
const add10 = (a, b, c, d, e, f, g, h, i, j) => a + b + c + d + e + f + g + h + i + j

const ALT = custom(_curry)

// const divide = curry((a, b) => b / a)
// const subtract = curry((a, b) => b - a)
const twice = curry(multiply)(2)

function e0Test() {
  t.is(typeof e0, `function`)
  t.is(e0(`prop`, {prop: K(100)}), 100)
  t.is(ALT.e0(`prop`, {prop: K(100)}), 100)
}

function e1Test() {
  t.is(typeof e1, `function`)
  t.is(e1(`prop`, 10, {prop: twice}), 20)
  t.is(ALT.e1(`prop`, 10, {prop: twice}), 20)
}

function e1MapTest() {
  t.is(typeof e1, `function`)
  t.deepEqual(e1(`map`, twice, [1, 2, 3, 4]), [2, 4, 6, 8])
  t.deepEqual(ALT.e1(`map`, twice, [1, 2, 3, 4]), [2, 4, 6, 8])
}

function e2Test() {
  // const [multiply, _multiply] = grab($multiply)
  t.is(typeof e2, `function`)
  const expected = 110
  t.is(e2(`prop`, 10, 11, { prop: multiply }), expected)
  t.is(ALT.e2(`prop`, 10, 11, { prop: multiply }), expected)
}

function e2ReduceTest() {
  // const [add, _add] = grab($add)
  t.is(typeof e2, `function`)
  t.is(e2(`reduce`, add, 0, [1, 2, 3, 4]), 10)
  t.is(ALT.e2(`reduce`, add, 0, [1, 2, 3, 4]), 10)
}

function e3Test() {
  // const [add3, _add3] = grab($add3)
  t.is(typeof e3, `function`)
  t.is(e3(`method`, 1, 2, 3, {method: add3}), 6)
  t.is(ALT.e3(`method`, 1, 2, 3, {method: add3}), 6)
}

function e4Test() {
  // const [add4, _add4] = grab($add4)
  t.is(typeof e4, `function`)
  t.is(e4(`method`, 1, 2, 3, 4, {method: add4}), 10)
  t.is(ALT.e4(`method`, 1, 2, 3, 4, {method: add4}), 10)
}

function e5Test() {
  // const [add5, _add5] = grab($add5)
  t.is(typeof e5, `function`)
  t.is(e5(`method`, 1, 2, 3, 4, 5, {method: add5}), 15)
  t.is(ALT.e5(`method`, 1, 2, 3, 4, 5, {method: add5}), 15)
}

function e6Test() {
  // const [add6, _add6] = grab($add6)
  t.is(typeof e6, `function`)
  t.is(
    e6(`method`, 1, 2, 3, 4, 5, 6,
      { method: add6 }
    ),
    21
  )
  t.is(
    ALT.e6(`method`, 1, 2, 3, 4, 5, 6,
      { method: add6 }
    ),
    21
  )
}

function e7Test() {
  // const [add7, _add7] = grab($add7)
  t.is(typeof e7, `function`)
  t.is(
    e7(`method`,
      1, 2, 3, 4, 5, 6, 7,
      { method: add7 }
    ),
    28
  )
  t.is(
    ALT.e7(`method`,
      1, 2, 3, 4, 5, 6, 7,
      { method: add7 }
    ),
    28
  )
}

function e8Test() {
  // const [add8, _add8] = grab($add8)
  t.is(typeof e8, `function`)
  t.is(
    e8(`method`,
      1, 2, 3, 4, 5, 6, 7, 8,
      {
        method: add8
      }
    ),
    36
  )
  t.is(
    ALT.e8(`method`,
      1, 2, 3, 4, 5, 6, 7, 8,
      {
        method: add8
      }
    ),
    36
  )
}

function e9Test() {
  // const [add9, _add9] = grab($add9)
  t.is(typeof e9, `function`)
  t.is(
    e9(`method`,
      1, 2, 3, 4, 5, 6, 7, 8, 9,
      {
        method: add9
      }
    ),
    45
  )
  t.is(
    ALT.e9(`method`,
      1, 2, 3, 4, 5, 6, 7, 8, 9,
      {
        method: add9
      }
    ),
    45
  )
}

function e10Test() {
  // const [add10, _add10] = grab($add10)
  t.is(typeof e10, `function`)
  t.is(
    e10(`method`,
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      {
        method: add10
      }
    ),
    55
  )
  t.is(
    ALT.e10(`method`,
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      {
        method: add10
      }
    ),
    55
  )
}

function eNTest() {
  // const [add3, _add3] = grab($add3)
  t.is(typeof eN, `function`)
  t.is(
    eN(3, `method`, [1, 2, 3], {
      method: add3
    }),
    6
  )
  t.is(
    ALT.eN(3, `method`, [1, 2, 3], {
      method: add3
    }),
    6
  )
}
function eDTest() {
  // const [add3, _add3] = grab($add3)
  t.is(typeof eD, `function`)
  t.is(
    eD(3, `method`, [1, 2, 3], {method: add3}),
    6
  )
  t.throws(
    () => eD(3, `method`, [1, 2], {method: add3}),
    // n,m,a,d
    `method expects total args (2) to equal the given arity (3)`
  )
  t.is(
    ALT.eD(3, `method`, [1, 2, 3], {method: add3}),
    6
  )
  t.throws(
    () => ALT.eD(3, `method`, [1, 2], {method: add3}),
    // n,m,a,d
    `method expects total args (2) to equal the given arity (3)`
  )
}

test(`e0`, e0Test)

test(`e1`, e1Test)

test(`e1 -- map example`, e1MapTest)

test(`e2`, e2Test)

test(`e2 -- reduce example`, e2ReduceTest)

test(`e3`, e3Test)

test(`e4`, e4Test)

test(`e5`, e5Test)

test(`e6`, e6Test)

test(`e7`, e7Test)

test(`e8`, e8Test)

test(`e9`, e9Test)

test(`e10`, e10Test)

test(`eN`, eNTest)

test(`eD`, eDTest)
