(function(a,b){'object'==typeof exports&&'undefined'!=typeof module?b(exports):'function'==typeof define&&define.amd?define(['exports'],b):b(a.entrust={})})(this,function(a){'use strict';function f(){for(var f=arguments,a=arguments.length,b=Array(a),c=0;c<a;++c)b[c]=f[c];return e(b)}function b(b,c,e,a){if(b!==e.length)throw new Error(c+' expects total args ('+e.length+') to equal the given arity ('+b+')');return Y(b,c,e,a)}var e=function(a){return function(b){for(var c=a[0],d=a.slice(1),e=c(b),f=0;f<d.length;f++)e=d[f](e);return e}},g=function(c,d){return function(e,f,a){return c.call(d,e,f,a)}},i=function(h,a,b){var c,d=h.length,e=void 0===b?a:g(a,b);for(c=0;c<d;c++)if(e(h[c],c,h))return!0;return!1},h=function(j){if('function'!=typeof j)throw new TypeError('Expected to be given a function to curry!');var k=function(b){return b==='\uD83C\uDF5B'};return function b(){for(var a=arguments,c=arguments.length,l=Array(c),d=0;d<c;++d)l[d]=a[d];var e=i(l,k)?function(b){for(var a=b.length;!k(b[a]);)a--;return a}(l):l.length;return e>=j.length?j.apply(this,l):function(){for(var c=arguments,a=arguments.length,d=Array(a),e=0;e<a;++e)d[e]=c[e];return b.apply(this,l.map(function(b){return k(b)&&d[0]?d.shift():b}).concat(d))}}},j=h(function(e,a){var f=Array.from(a);return f.length?f.map(function(a,b){return e.includes(b)?f[e[b]]:a}):f}),c=h(function(e,a){var b=j(e),c=h(a);return function(){var d=b(Array.from(arguments));return c.apply(null,d)}}),d=h(function(c,a){return a[c]}),k=Object.assign,l=Object.keys,m=l,n=h(function(b,c){return k({},b,c)}),o=d('length'),p=f(m,o),q=function(b){return'object'==typeof b?p(b):o(b)},r=h(function(d,a,b){return b[d](a)}),s=r('filter'),t=h(function(c,a){return c.includes(a)}),u=h(function(c,a){return s(t(c),m(a))}),v=h(function(c,a){return f(u(c),q)(a)}),w=h(function(g,a,b){return function c(d){return g(a,d)?b(d):f(n(d),c)}}),x=function(c,a){return v(c,a)>=q(c)},y=w(x),z=function(c,a){return q(a)>=c},A=w(z),B=w(function(e,a){var b=e.n,c=e.k;return x(c,a)||z(b,a)}),C=function(a,b){return b[a]()},D=h(C),E=function(b,c,a){return a[b](c)},F=h(E),G=function(c,d,a,b){return b[c](d,a)},H=h(G),I=function(d,e,a,b,c){return c[d](e,a,b)},J=h(I),K=function(e,f,a,b,c,d){return d[e](f,a,b,c)},L=h(K),M=function(f,g,a,b,c,d,e){return e[f](g,a,b,c,d)},N=h(M),O=function(g,h,a,b,c,d,e,f){return f[g](h,a,b,c,d,e)},P=h(O),Q=function(h,i,a,b,c,d,e,f,g){return g[h](i,a,b,c,d,e,f)},R=h(Q),S=function(i,j,a,b,c,d,e,f,g,h){return h[i](j,a,b,c,d,e,f,g)},T=h(S),U=function(j,k,a,b,c,d,e,f,g,h,i){return i[j](k,a,b,c,d,e,f,g,h)},V=h(U),W=function(k,l,a,b,c,d,e,f,g,h,i,j){return j[k](l,a,b,c,d,e,f,g,h,i)},X=h(W),Y=function(a,b,c,d){var e=[b].concat(c,[d]);return[D,F,H,J,L,N,P,R,T,V,X][a].apply(null,e)},Z=h(Y),$=h(b),_={e0:C,e1:E,e2:G,e3:I,e4:K,e5:M,e6:O,e7:Q,e8:S,e9:U,e10:W,eD:b,eN:Y};a.raw=_,a.custom=function(a){return Object.keys(_).map(function(b){return c={},c[b]=a(_[b]),c;var c}).reduce(function(c,a){return Object.assign({},c,a)},{})},a.e0=D,a.e1=F,a.e2=H,a.e3=J,a.e4=L,a.e5=N,a.e6=P,a.e7=R,a.e8=T,a.e9=V,a.e10=X,a.eN=Z,a.eD=$,Object.defineProperty(a,'__esModule',{value:!0})});
