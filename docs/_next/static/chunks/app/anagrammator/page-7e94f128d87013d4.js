(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[93],{7110:function(e,t,n){var r=0/0,o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,s=parseInt,l="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,c="object"==typeof self&&self&&self.Object===Object&&self,f=l||c||Function("return this")(),d=Object.prototype.toString,p=Math.max,m=Math.min,now=function(){return f.Date.now()};function isObject(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function toNumber(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==d.call(t))return r;if(isObject(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=isObject(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var l=u.test(e);return l||a.test(e)?s(e.slice(2),l?2:8):i.test(e)?r:+e}e.exports=function(e,t,n){var r,o,i,u,a,s,l=0,c=!1,f=!1,d=!0;if("function"!=typeof e)throw TypeError("Expected a function");function invokeFunc(t){var n=r,i=o;return r=o=void 0,l=t,u=e.apply(i,n)}function shouldInvoke(e){var n=e-s,r=e-l;return void 0===s||n>=t||n<0||f&&r>=i}function timerExpired(){var e,n,r,o=now();if(shouldInvoke(o))return trailingEdge(o);a=setTimeout(timerExpired,(e=o-s,n=o-l,r=t-e,f?m(r,i-n):r))}function trailingEdge(e){return(a=void 0,d&&r)?invokeFunc(e):(r=o=void 0,u)}function debounced(){var e,n=now(),i=shouldInvoke(n);if(r=arguments,o=this,s=n,i){if(void 0===a)return l=e=s,a=setTimeout(timerExpired,t),c?invokeFunc(e):u;if(f)return a=setTimeout(timerExpired,t),invokeFunc(s)}return void 0===a&&(a=setTimeout(timerExpired,t)),u}return t=toNumber(t)||0,isObject(n)&&(c=!!n.leading,i=(f="maxWait"in n)?p(toNumber(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),debounced.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=s=o=a=void 0},debounced.flush=function(){return void 0===a?u:trailingEdge(now())},debounced}},2617:function(e,t,n){Promise.resolve().then(n.bind(n,1610))},1610:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Anagrammator_Anagrammator}});var r,o=n(7573),i=n(7653),u=n(7110),a=n.n(u),s=n(1647);!function(e){function getPrimesUpTo(e){let t=[];for(let n=3;n<=e;n+=2){let e=!1,r=n;for(let o=0;!e&&o<t.length&&t[o]<r;o+=1){let i=n%t[o];0===i?e=!0:r=(n-i)/t[o]}e||t.push(n)}return e>=2&&t.unshift(2),t}function sortNumbers(e,t){return e-t}e.sum=function(e,t,n){let r=0;for(let o=e;o<=t;o+=1)r+=n(o,e,t);return r},e.getPrimesUpTo=getPrimesUpTo,e.getPrimesRateUpTo=function(e){return getPrimesUpTo(e).length/e*100},e.isPrime=function(e){let t=e;if(e<2||e%2==0)return!1;for(let n=3;n<t;n+=2){let r=e%n;if(0===r)return!1;t=(e-r)/n}return!0},e.factorize=function(e){let t=[],n=e,r=2,o=e;for(;r<n;){let e=o%r;0===e?(t.push(r),o/=r,n=o):(n=(o-e)/r,r+=2===r?1:2)}return r>=n&&t.push(o),t},e.factorizeInputs=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[2,3],n=Math.max(...t),r=[],o=Array.from(e).sort(sortNumbers);for(let e of o){let o=[],i=e,u=2,a=e,s=0;for(;s<t.length&&u<i;){u=t[s];let e=a%u;0===e?(o.push(u),a/=u,i=a):(i=(a-e)/u,s+=1)}for(;u<i;){let e=a%u;0===e?(o.push(u),u>n&&(t.push(u),n=u),a/=u,i=a):(i=(a-e)/u,u+=2===u?1:2)}u>=i&&(o.push(a),u>n&&(t.push(u),n=u)),r.push({input:e,factors:o})}return r.sort((e,t)=>{let{input:n}=e,{input:r}=t;return sortNumbers(n,r)}).map(e=>{let{factors:t}=e;return t})},e.range=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=[];for(let o=0;o<e;o+=1)r.push(o*n+t);return r},e.factorial=e=>{let t=1;for(let n=2;n<=e;n+=1)t*=n;return t}}(r||(r={}));var l=n(5505),c=n(7953);function _createMdxContent(e){let t=Object.assign({p:"p",strong:"strong"},(0,c.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.p,{children:"Get anagrams for the provided input."}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"Warning"}),": since the growth of the number is almost\nexponential I capped the generator. If total number of anagrams exceed\n10000 they won't be generated, but you can see stats about them."]})]})}var README=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,c.ah)(),e.components);return t?(0,l.jsx)(t,Object.assign({},e,{children:(0,l.jsx)(_createMdxContent,e)})):_createMdxContent(e)};let normalizeInput=e=>{let t=e.trim();return t.length>0?t.toUpperCase().replace(/[^A-Z]/,""):t};var Anagrammator_Anagrammator=function(){let[{value:e,anagramms:t,size:n,total:u,skipped:l,formula:c},f]=(0,i.useState)({value:"",anagramms:[],size:0,total:0,skipped:0,formula:void 0}),d=(0,i.useCallback)(a()(e=>{let t=e.length>0?r.factorial(e.length):0;new Promise((t,n)=>{let r=(0,s.zu)(e);if(r<1e4){let n=(0,s.ZP)(e);t(n)}else n(r)}).then(n=>{f(r=>{let o=n.length;return{...r,anagramms:n,size:o,total:t,skipped:t-o,formula:(0,s.oG)(e)}})},n=>{f(r=>({...r,anagramms:[],size:n,total:t,skipped:t-n,formula:(0,s.oG)(e)}))})},500),[]);return(0,i.useEffect)(()=>(d(e),()=>{d.cancel()}),[d,e]),(0,o.jsxs)("div",{children:[(0,o.jsx)(README,{}),(0,o.jsxs)("fieldset",{children:[(0,o.jsx)("legend",{children:"Generator controls"}),(0,o.jsx)("label",{htmlFor:"input",children:"Type in a word:"})," ",(0,o.jsx)("input",{id:"input",value:e,type:"text",onChange:e=>{f(t=>({...t,value:normalizeInput(e.target.value)}))}})," "]}),u>0&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h2",{children:"Facts"}),(0,o.jsxs)("dl",{children:[(0,o.jsx)("dt",{children:"Found Anagrams:"}),(0,o.jsx)("dd",{children:n})]}),(0,o.jsxs)("dl",{children:[(0,o.jsx)("dt",{children:"Total Combinations:"}),(0,o.jsx)("dd",{children:u})]}),(0,o.jsxs)("dl",{children:[(0,o.jsx)("dt",{children:"Skipped Combinations:"}),(0,o.jsx)("dd",{children:l})]}),null!=c&&(0,o.jsxs)("dl",{children:[(0,o.jsx)("dt",{children:"Formula:"}),(0,o.jsxs)("dd",{children:[c.numerator," / (",c.denominator.join(" * "),")"]})]}),t.length>0&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h2",{children:"The anagrams"}),(0,o.jsx)("ol",{children:i.Children.toArray(t.map(e=>(0,o.jsx)("li",{children:e},e)))})]})]})]})}},8294:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(7653),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,n){var r,i={},l=null,c=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)u.call(t,r)&&!s.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:c,props:i,_owner:a.current}}t.Fragment=i,t.jsx=q,t.jsxs=q},7573:function(e,t,n){"use strict";e.exports=n(8294)},4223:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(7653),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,n){var r,i={},l=null,c=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)u.call(t,r)&&!s.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:c,props:i,_owner:a.current}}t.Fragment=i,t.jsx=q,t.jsxs=q},5505:function(e,t,n){"use strict";e.exports=n(4223)},1647:function(e,t){"use strict";function factorial(e){for(var t=1,n=2;n<=e;n+=1)t*=n;return t}t.zu=t.oG=void 0,t.ZP=function anagrammator(e){if(null==e||0===e.length)return[];if(1===e.length)return[e];for(var t=[],n=[],r=0;r<e.length;r+=1)!function(r){var o=e.charAt(r);n.includes(o)||(n.push(o),t.push.apply(t,anagrammator("".concat(e.substring(0,r)).concat(e.substring(r+1))).map(function(e){return"".concat(e).concat(o)})))}(r);return t},t.oG=function(e){for(var t,n=factorial(e.length),r={},o=0;o<e.length;o+=1)r[e[o]]=(null!==(t=r[e[o]])&&void 0!==t?t:0)+1;return{numerator:n,denominator:Object.keys(r).map(function(e){return factorial(r[e])})}},t.zu=function(e){var n=(0,t.oG)(e),r=n.numerator;return n.denominator.reduce(function(e,t){return t>1?e/t:e},r)}},7953:function(e,t,n){"use strict";n.d(t,{ah:function(){return useMDXComponents}});var r=n(7653);let o=r.createContext({});function useMDXComponents(e){let t=r.useContext(o);return r.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}}},function(e){e.O(0,[293,53,744],function(){return e(e.s=2617)}),_N_E=e.O()}]);