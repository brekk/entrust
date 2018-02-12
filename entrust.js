(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.entrust = {})));
}(this, (function (exports) { 'use strict';

var PLACEHOLDER="\uD83C\uDF5B";
var innerpipe=function(b){return function(c){for(var d=b[0],e=b.slice(1),f=d(c),g=0;g<e.length;g++){ f=e[g](f); }return f}};function pipe(){for(var a=arguments,b=arguments.length,c=Array(b),d=0;d<b;++d){ c[d]=a[d]; }return innerpipe(c)}var bindInternal3=function(d,e){return function(f,a,b){return d.call(e,f,a,b)}};var some$1=function(a,b,c){var d,e=a.length,f=c===void 0?b:bindInternal3(b,c);for(d=0;d<e;d++){ if(f(a[d],d,a)){ return!0; } }return!1}; var curry=function(a){var b=function(a){return a===PLACEHOLDER};return function c(){for(var d=arguments,e=arguments.length,f=Array(e),g=0;g<e;++g){ f[g]=d[g]; }var h=some$1(f,b)?function(a){for(var c=a.length;!b(a[c]);){ c--; }return c}(f):f.length;return h>=a.length?a.apply(this,f):function(){for(var a=arguments,d=arguments.length,e=Array(d),g=0;g<d;++g){ e[g]=a[g]; }return c.apply(this,f.map(function(a){return b(a)&&e[0]?e.shift():a}).concat(e))}}}; var prop=curry(function(a,b){return b&&a&&b[a]}); var _keys=Object.keys; var keys=_keys; var propLength=prop("length"); var objectLength=pipe(keys,propLength); var delegatee=curry(function(a,b,c){return c[a](b)}); var filter=delegatee("filter");

var entrust0 = function (fn, x) { return x[fn](); };
var e0 = curry(entrust0);

var entrust1 = function (fn, a, x) { return x[fn](a); };
var e1 = curry(entrust1);

var entrust2 = function (fn, a, b, x) { return x[fn](a, b); };
var e2 = curry(entrust2);

var entrust3 = function (fn, a, b, c, x) { return x[fn](a, b, c); };
var e3 = curry(entrust3);

var entrust4 = function (fn, a, b, c, d, x) { return x[fn](a, b, c, d); };
var e4 = curry(entrust4);

var entrust5 = function (fn, a, b, c, d, e, x) { return x[fn](a, b, c, d, e); };
var e5 = curry(entrust5);

var entrust6 = function (fn, a, b, c, d, e, f, x) { return x[fn](a, b, c, d, e, f); };
var e6 = curry(entrust6);

var entrust7 = function (fn, a, b, c, d, e, f, g, x) { return x[fn](a, b, c, d, e, f, g); };
var e7 = curry(entrust7);

var entrust8 = function (fn, a, b, c, d, e, f, g, h, x) { return x[fn](a, b, c, d, e, f, g, h); };
var e8 = curry(entrust8);

var entrust9 = function (fn, a, b, c, d, e, f, g, h, i, x) { return x[fn](a, b, c, d, e, f, g, h, i); };
var e9 = curry(entrust9);

var entrust10 = function (fn, a, b, c, d, e, f, g, h, i, j, x) { return x[fn](
  a, b, c, d, e, f, g, h, i, j
); };
var e10 = curry(entrust10);

var entrustN = function (n, method, args, delegatee) {
  var entrustees = [e0, e1, e2, e3, e4, e5, e6, e7, e8, e9, e10];
  var params = [method ].concat( args, [delegatee]);
  return entrustees[n].apply(null, params)
};
var eN = curry(entrustN);
function entrustD(n, m, a, d) {
  if (n !== a.length) {
    throw new Error((m + " expects total args (" + (a.length) + ") to equal the given arity (" + n + ")"))
  }
  return entrustN(n, m, a, d)
}
var eD = curry(
  entrustD
);

var raw = {
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
};
var custom = function (curry) {
  var merge = function (a, b) { return Object.assign({}, a, b); };
  return Object.keys(raw).map(function (k) { return (( obj = {}, obj[k] = curry(raw[k]), obj))
    var obj; }).reduce(merge, {})
};

exports.raw = raw;
exports.custom = custom;
exports.e0 = e0;
exports.e1 = e1;
exports.e2 = e2;
exports.e3 = e3;
exports.e4 = e4;
exports.e5 = e5;
exports.e6 = e6;
exports.e7 = e7;
exports.e8 = e8;
exports.e9 = e9;
exports.e10 = e10;
exports.eN = eN;
exports.eD = eD;

Object.defineProperty(exports, '__esModule', { value: true });

})));
