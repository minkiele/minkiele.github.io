(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[987],{2831:function(t,r,n){Promise.resolve().then(n.bind(n,1152))},1152:function(t,r,n){"use strict";n.r(r),n.d(r,{default:function(){return T}});var e,u,i=n(7573),o=n(7653),c=n(2360),s=n(1682),a=n(6749),f=n(6858),l=n(2916),p=(0,l.Z)(function(t){return!!(0,a.Z)(t)||!!t&&"object"==typeof t&&"[object String]"!==Object.prototype.toString.call(t)&&(0===t.length||t.length>0&&t.hasOwnProperty(0)&&t.hasOwnProperty(t.length-1))}),h=function(){function t(t){this.f=t}return t.prototype["@@transducer/init"]=function(){throw Error("init not implemented on XWrap")},t.prototype["@@transducer/result"]=function(t){return t},t.prototype["@@transducer/step"]=function(t,r){return this.f(t,r)},t}(),y=n(9091),d=(0,n(3373).Z)(function(t,r){return(0,y.Z)(t.length,function(){return t.apply(r,arguments)})});function Z(t,r,n){for(var e=n.next();!e.done;){if((r=t["@@transducer/step"](r,e.value))&&r["@@transducer/reduced"]){r=r["@@transducer/value"];break}e=n.next()}return t["@@transducer/result"](r)}function v(t,r,n,e){return t["@@transducer/result"](n[e](d(t["@@transducer/step"],t),r))}var g="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";function m(t,r,n){if("function"==typeof t&&(t=new h(t)),p(n))return function(t,r,n){for(var e=0,u=n.length;e<u;){if((r=t["@@transducer/step"](r,n[e]))&&r["@@transducer/reduced"]){r=r["@@transducer/value"];break}e+=1}return t["@@transducer/result"](r)}(t,r,n);if("function"==typeof n["fantasy-land/reduce"])return v(t,r,n,"fantasy-land/reduce");if(null!=n[g])return Z(t,r,n[g]());if("function"==typeof n.next)return Z(t,r,n);if("function"==typeof n.reduce)return v(t,r,n,"reduce");throw TypeError("reduce: list must be array or iterable")}var _={init:function(){return this.xf["@@transducer/init"]()}},b=function(){function t(t,r,n,e){this.valueFn=t,this.valueAcc=r,this.keyFn=n,this.xf=e,this.inputs={}}return t.prototype["@@transducer/init"]=_.init,t.prototype["@@transducer/result"]=function(t){var r;for(r in this.inputs)if((0,f.Z)(r,this.inputs)&&(t=this.xf["@@transducer/step"](t,this.inputs[r]))["@@transducer/reduced"]){t=t["@@transducer/value"];break}return this.inputs=null,this.xf["@@transducer/result"](t)},t.prototype["@@transducer/step"]=function(t,r){var n=this.keyFn(r);return this.inputs[n]=this.inputs[n]||[n,this.valueAcc],this.inputs[n][1]=this.valueFn(this.inputs[n][1],r),t},t}(),O=(0,s.Z)(4,[],function(t,r,n,e){return new b(t,r,n,e)}),j=(0,s.Z)(4,[],(e=[],u=function(t,r,n,e){return m(function(e,u){var i=n(u),o=t((0,f.Z)(i,e)?e[i]:(0,c.Z)(r,[],[],!1),u);return o&&o["@@transducer/reduced"]?e&&e["@@transducer/reduced"]?e:{"@@transducer/value":e,"@@transducer/reduced":!0}:(e[i]=o,e)},{},e)},function(){if(0==arguments.length)return u();var t=arguments[arguments.length-1];if(!(0,a.Z)(t)){for(var r=0;r<e.length;){if("function"==typeof t[e[r]])return t[e[r]].apply(t,Array.prototype.slice.call(arguments,0,-1));r+=1}if(null!=t&&"function"==typeof t["@@transducer/step"]){var n=O.apply(null,Array.prototype.slice.call(arguments,0,-1));return n(t)}}return u.apply(this,arguments)}))(function(t,r){return t+1},0),x=(0,l.Z)(function(t){return t});function w(t,r){return function(){return r.call(this,t.apply(this,arguments))}}var A=n(8532),E=(0,A.Z)(m);function k(t,r){return function(){var n=arguments.length;if(0===n)return r();var e=arguments[n-1];return(0,a.Z)(e)||"function"!=typeof e[t]?r.apply(this,arguments):e[t].apply(e,Array.prototype.slice.call(arguments,0,n-1))}}var P=(0,A.Z)(k("slice",function(t,r,n){return Array.prototype.slice.call(n,t,r)})),S=(0,l.Z)(k("tail",P(1,1/0))),F=(0,l.Z)(function(t){var r=[];for(var n in t)(0,f.Z)(n,t)&&(r[r.length]=[n,t[n]]);return r});let I=function(){if(0==arguments.length)throw Error("pipe requires at least one argument");return(0,y.Z)(arguments[0].length,E(w,arguments[0],S(arguments)))}(n(2e3).H.factorize,j(x),F);var R=n(5505),N=n(7953);function U(t){let r=Object.assign({p:"p"},(0,N.ah)(),t.components);return(0,R.jsx)(r.p,{children:"A little function that factorizes a natural input > than 1"})}var C=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,N.ah)(),t.components);return r?(0,R.jsx)(r,Object.assign({},t,{children:(0,R.jsx)(U,t)})):U(t)},T=()=>{let[t,r]=(0,o.useState)(2),n=(0,o.useMemo)(()=>I(t),[t]);return(0,i.jsxs)("div",{children:[(0,i.jsx)(C,{}),(0,i.jsxs)("fieldset",{children:[(0,i.jsx)("legend",{children:"Factorize"}),(0,i.jsx)("label",{htmlFor:"input",children:"Input number: "}),(0,i.jsx)("input",{id:"input",name:"input",type:"number",value:t,onChange:t=>{let n=parseInt(t.target.value);r(isNaN(n)||n<2?2:n)}})]}),(0,i.jsxs)("p",{children:[t," ="," ",n.map((t,r)=>{let[n,e]=t;return(0,i.jsxs)(o.Fragment,{children:[r>0&&(0,i.jsx)(i.Fragment,{children:"\xd7"}),n,e>1&&(0,i.jsx)("sup",{children:e})]},"".concat(n,"-").concat(e))})]})]})}},2e3:function(t,r,n){"use strict";var e;n.d(r,{H:function(){return e}}),function(t){function r(t){let r=[];for(let n=3;n<=t;n+=2){let t=!1,e=n;for(let u=0;!t&&u<r.length&&r[u]<e;u+=1){let i=n%r[u];0===i?t=!0:e=(n-i)/r[u]}t||r.push(n)}return t>=2&&r.unshift(2),r}function n(t,r){return t-r}t.sum=function(t,r,n){let e=0;for(let u=t;u<=r;u+=1)e+=n(u,t,r);return e},t.getPrimesUpTo=r,t.getPrimesRateUpTo=function(t){return r(t).length/t*100},t.isPrime=function(t){let r=t;if(t<2||t%2==0)return!1;for(let n=3;n<r;n+=2){let e=t%n;if(0===e)return!1;r=(t-e)/n}return!0},t.factorize=function(t){let r=[],n=t,e=2,u=t;for(;e<n;){let t=u%e;0===t?(r.push(e),u/=e,n=u):(n=(u-t)/e,e+=2===e?1:2)}return e>=n&&r.push(u),r},t.factorizeInputs=function(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[2,3],e=Math.max(...r),u=[];for(let i of Array.from(t).sort(n)){let t=[],n=i,o=2,c=i,s=0;for(;s<r.length&&o<n;){let e=c%(o=r[s]);0===e?(t.push(o),c/=o,n=c):(n=(c-e)/o,s+=1)}for(;o<n;){let u=c%o;0===u?(t.push(o),o>e&&(r.push(o),e=o),c/=o,n=c):(n=(c-u)/o,o+=2===o?1:2)}o>=n&&(t.push(c),o>e&&(r.push(o),e=o)),u.push({input:i,factors:t})}return u.sort((t,r)=>{let{input:e}=t,{input:u}=r;return n(e,u)}).map(t=>{let{factors:r}=t;return r})},t.range=function(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,e=[];for(let u=0;u<t;u+=1)e.push(u*n+r);return e},t.factorial=t=>{let r=1;for(let n=2;n<=t;n+=1)r*=n;return r}}(e||(e={}))},8294:function(t,r,n){"use strict";var e=n(7653),u=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function a(t,r,n){var e,i={},a=null,f=null;for(e in void 0!==n&&(a=""+n),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(f=r.ref),r)o.call(r,e)&&!s.hasOwnProperty(e)&&(i[e]=r[e]);if(t&&t.defaultProps)for(e in r=t.defaultProps)void 0===i[e]&&(i[e]=r[e]);return{$$typeof:u,type:t,key:a,ref:f,props:i,_owner:c.current}}r.Fragment=i,r.jsx=a,r.jsxs=a},7573:function(t,r,n){"use strict";t.exports=n(8294)},4223:function(t,r,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e=n(7653),u=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function a(t,r,n){var e,i={},a=null,f=null;for(e in void 0!==n&&(a=""+n),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(f=r.ref),r)o.call(r,e)&&!s.hasOwnProperty(e)&&(i[e]=r[e]);if(t&&t.defaultProps)for(e in r=t.defaultProps)void 0===i[e]&&(i[e]=r[e]);return{$$typeof:u,type:t,key:a,ref:f,props:i,_owner:c.current}}r.Fragment=i,r.jsx=a,r.jsxs=a},5505:function(t,r,n){"use strict";t.exports=n(4223)},7953:function(t,r,n){"use strict";n.d(r,{ah:function(){return i}});var e=n(7653);let u=e.createContext({});function i(t){let r=e.useContext(u);return e.useMemo(()=>"function"==typeof t?t(r):{...r,...t},[r,t])}},9091:function(t,r,n){"use strict";function e(t,r){switch(t){case 0:return function(){return r.apply(this,arguments)};case 1:return function(t){return r.apply(this,arguments)};case 2:return function(t,n){return r.apply(this,arguments)};case 3:return function(t,n,e){return r.apply(this,arguments)};case 4:return function(t,n,e,u){return r.apply(this,arguments)};case 5:return function(t,n,e,u,i){return r.apply(this,arguments)};case 6:return function(t,n,e,u,i,o){return r.apply(this,arguments)};case 7:return function(t,n,e,u,i,o,c){return r.apply(this,arguments)};case 8:return function(t,n,e,u,i,o,c,s){return r.apply(this,arguments)};case 9:return function(t,n,e,u,i,o,c,s,a){return r.apply(this,arguments)};case 10:return function(t,n,e,u,i,o,c,s,a,f){return r.apply(this,arguments)};default:throw Error("First argument to _arity must be a non-negative integer no greater than ten")}}n.d(r,{Z:function(){return e}})},2360:function(t,r,n){"use strict";n.d(r,{Z:function(){return function t(r,n,u,i){var o=function(e){for(var o=n.length,c=0;c<o;){if(r===n[c])return u[c];c+=1}for(var s in n[c]=r,u[c]=e,r)r.hasOwnProperty(s)&&(e[s]=i?t(r[s],n,u,!0):r[s]);return e};switch(e(r)){case"Object":return o(Object.create(Object.getPrototypeOf(r)));case"Array":return o([]);case"Date":return new Date(r.valueOf());case"RegExp":return new RegExp(r.source,(r.global?"g":"")+(r.ignoreCase?"i":"")+(r.multiline?"m":"")+(r.sticky?"y":"")+(r.unicode?"u":""));case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":return r.slice();default:return r}}}});var e=(0,n(2916).Z)(function(t){return null===t?"Null":void 0===t?"Undefined":Object.prototype.toString.call(t).slice(8,-1)})},2916:function(t,r,n){"use strict";n.d(r,{Z:function(){return u}});var e=n(5884);function u(t){return function r(n){return 0==arguments.length||(0,e.Z)(n)?r:t.apply(this,arguments)}}},3373:function(t,r,n){"use strict";n.d(r,{Z:function(){return i}});var e=n(2916),u=n(5884);function i(t){return function r(n,i){switch(arguments.length){case 0:return r;case 1:return(0,u.Z)(n)?r:(0,e.Z)(function(r){return t(n,r)});default:return(0,u.Z)(n)&&(0,u.Z)(i)?r:(0,u.Z)(n)?(0,e.Z)(function(r){return t(r,i)}):(0,u.Z)(i)?(0,e.Z)(function(r){return t(n,r)}):t(n,i)}}}},8532:function(t,r,n){"use strict";n.d(r,{Z:function(){return o}});var e=n(2916),u=n(3373),i=n(5884);function o(t){return function r(n,o,c){switch(arguments.length){case 0:return r;case 1:return(0,i.Z)(n)?r:(0,u.Z)(function(r,e){return t(n,r,e)});case 2:return(0,i.Z)(n)&&(0,i.Z)(o)?r:(0,i.Z)(n)?(0,u.Z)(function(r,n){return t(r,o,n)}):(0,i.Z)(o)?(0,u.Z)(function(r,e){return t(n,r,e)}):(0,e.Z)(function(r){return t(n,o,r)});default:return(0,i.Z)(n)&&(0,i.Z)(o)&&(0,i.Z)(c)?r:(0,i.Z)(n)&&(0,i.Z)(o)?(0,u.Z)(function(r,n){return t(r,n,c)}):(0,i.Z)(n)&&(0,i.Z)(c)?(0,u.Z)(function(r,n){return t(r,o,n)}):(0,i.Z)(o)&&(0,i.Z)(c)?(0,u.Z)(function(r,e){return t(n,r,e)}):(0,i.Z)(n)?(0,e.Z)(function(r){return t(r,o,c)}):(0,i.Z)(o)?(0,e.Z)(function(r){return t(n,r,c)}):(0,i.Z)(c)?(0,e.Z)(function(r){return t(n,o,r)}):t(n,o,c)}}}},1682:function(t,r,n){"use strict";n.d(r,{Z:function(){return function t(r,n,i){return function(){for(var o,c=[],s=0,a=r,f=0;f<n.length||s<arguments.length;)f<n.length&&(!(0,u.Z)(n[f])||s>=arguments.length)?o=n[f]:(o=arguments[s],s+=1),c[f]=o,(0,u.Z)(o)||(a-=1),f+=1;return a<=0?i.apply(this,c):(0,e.Z)(a,t(r,c,i))}}}});var e=n(9091),u=n(5884)},6858:function(t,r,n){"use strict";function e(t,r){return Object.prototype.hasOwnProperty.call(r,t)}n.d(r,{Z:function(){return e}})},6749:function(t,r){"use strict";r.Z=Array.isArray||function(t){return null!=t&&t.length>=0&&"[object Array]"===Object.prototype.toString.call(t)}},5884:function(t,r,n){"use strict";function e(t){return null!=t&&"object"==typeof t&&!0===t["@@functional/placeholder"]}n.d(r,{Z:function(){return e}})}},function(t){t.O(0,[293,16,744],function(){return t(t.s=2831)}),_N_E=t.O()}]);