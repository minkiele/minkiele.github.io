(self.webpackChunkminkiele_github_io=self.webpackChunkminkiele_github_io||[]).push([[908],{8516:function(n){function t(n){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=8516,n.exports=t},1908:function(n,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var e=r(1413),o=r(885),i=r(7363),u=r(936),a=r.n(u),c=r(5286),f=r.n(c),s=r(5467),l=r(6417);function p(n){const t=Object.assign({p:"p",strong:"strong"},n.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.p,{children:"Get anagrams for the provided input."}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"Warning"}),": since the growth of the number is almost\nexponential I capped the generator. If total number of anagrams exceed\n10000 they won't be generated, but you can see stats about them."]})]})}var d=function(n={}){const{wrapper:t}=n.components||{};return t?(0,l.jsx)(t,Object.assign({},n,{children:(0,l.jsx)(p,n)})):p(n)},h=function(n){var t=n.trim();return t.length>0?t.toUpperCase().replace(/[^A-Z]/,""):t};var v=function(){var n=(0,i.useState)({value:"",anagramms:[],size:0,total:0,skipped:0}),t=(0,o.Z)(n,2),r=t[0],u=r.value,p=r.anagramms,v=r.size,g=r.total,m=r.skipped,b=t[1],j=(0,i.useCallback)(a()((function(n){var t=n.length>0?s.H.factorial(n.length):0;new Promise((function(t,r){var e=(0,c.countAnagrams)(n);e<1e4?t(f()(n)):r(e)})).then((function(n){b((function(r){var o=n.length,i=t-o;return(0,e.Z)((0,e.Z)({},r),{},{anagramms:n,size:o,total:t,skipped:i})}))}),(function(n){b((function(r){var o=t-n;return(0,e.Z)((0,e.Z)({},r),{},{anagramms:[],size:n,total:t,skipped:o})}))}))}),500),[]);return(0,i.useEffect)((function(){return j(u),function(){j.cancel()}}),[j,u]),(0,l.jsxs)("div",{children:[(0,l.jsx)(d,{}),(0,l.jsxs)("fieldset",{children:[(0,l.jsx)("legend",{children:"Generator controls"}),(0,l.jsx)("label",{htmlFor:"input",children:"Type in a word:"})," ",(0,l.jsx)("input",{id:"input",value:u,type:"text",onChange:function(n){b((function(t){return(0,e.Z)((0,e.Z)({},t),{},{value:h(n.target.value)})}))}})," "]}),g>0&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h2",{children:"Facts"}),(0,l.jsxs)("dl",{children:[(0,l.jsx)("dt",{children:"Found Anagrams:"}),(0,l.jsx)("dd",{children:v})]}),(0,l.jsxs)("dl",{children:[(0,l.jsx)("dt",{children:"Total Combinations:"}),(0,l.jsx)("dd",{children:g})]}),(0,l.jsxs)("dl",{children:[(0,l.jsx)("dt",{children:"Skipped Combinations:"}),(0,l.jsx)("dd",{children:m})]}),p.length>0&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h2",{children:"The anagrams"}),(0,l.jsx)("ol",{children:i.Children.toArray(p.map((function(n){return(0,l.jsx)("li",{children:n},n)})))})]})]})]})}},5467:function(n,t,r){"use strict";r.d(t,{H:function(){return e}});var e,o=r(7762),i=r(2982);!function(n){function t(n){for(var t=[],r=3;r<=n;r+=2){for(var e=!1,o=r,i=0;!e&&i<t.length&&t[i]<o;i+=1){var u=r%t[i];0===u?e=!0:o=(r-u)/t[i]}e||t.push(r)}return n>=2&&t.unshift(2),t}function r(n,t){return n-t}n.sum=function(n,t,r){for(var e=0,o=n;o<=t;o+=1)e+=r(o,n,t);return e},n.getPrimesUpTo=t,n.getPrimesRateUpTo=function(n){return t(n).length/n*100},n.isPrime=function(n){var t=n;if(n<2)return!1;if(n%2===0)return!1;for(var r=3;r<t;r+=2){var e=n%r;if(0===e)return!1;t=(n-e)/r}return!0},n.factorize=function(n){for(var t=[],r=n,e=2,o=n;e<r;){var i=o%e;0===i?(t.push(e),r=o/=e):(r=(o-i)/e,e+=2===e?1:2)}return e>=r&&t.push(o),t},n.factorizeInputs=function(n){var t,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[2,3],u=Math.max.apply(Math,(0,i.Z)(e)),a=[],c=Array.from(n).sort(r),f=(0,o.Z)(c);try{for(f.s();!(t=f.n()).done;){for(var s=t.value,l=[],p=s,d=2,h=s,v=0;v<e.length&&d<p;){var g=h%(d=e[v]);0===g?(l.push(d),p=h/=d):(p=(h-g)/d,v+=1)}for(;d<p;){var m=h%d;0===m?(l.push(d),d>u&&(e.push(d),u=d),p=h/=d):(p=(h-m)/d,d+=2===d?1:2)}d>=p&&(l.push(h),d>u&&(e.push(d),u=d)),a.push({input:s,factors:l})}}catch(b){f.e(b)}finally{f.f()}return a.sort((function(n,t){return r(n.input,t.input)})).map((function(n){return n.factors}))},n.range=function(n){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,e=[],o=0;o<n;o+=1)e.push(o*r+t);return e};n.factorial=function(n){for(var t=1,r=2;r<=n;r+=1)t*=r;return t}}(e||(e={}))},5286:function(n,t,r){var e,o,i;!function(u){if("object"===typeof n.exports){var a=u(r(8516),t);void 0!==a&&(n.exports=a)}else o=[r,t],void 0===(i="function"===typeof(e=u)?e.apply(t,o):e)||(n.exports=i)}((function(n,t){"use strict";function r(n){for(var t=1,r=2;r<=n;r+=1)t*=r;return t}Object.defineProperty(t,"__esModule",{value:!0}),t.countAnagrams=void 0,t.default=function n(t){if(null==t||0===t.length)return[];if(1===t.length)return[t];for(var r=[],e=[],o=function(o){var i=t.charAt(o);e.includes(i)||(e.push(i),r.push.apply(r,n("".concat(t.substring(0,o)).concat(t.substring(o+1))).map((function(n){return"".concat(n).concat(i)}))))},i=0;i<t.length;i+=1)o(i);return r},t.countAnagrams=function(n){for(var t,e=r(n.length),o={},i=0;i<n.length;i+=1)o[n[i]]=(null!==(t=o[n[i]])&&void 0!==t?t:0)+1;return Object.keys(o).forEach((function(n){o[n]>1&&(e/=r(o[n]))})),e}}))},936:function(n,t,r){var e=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,f="object"==typeof self&&self&&self.Object===Object&&self,s=c||f||Function("return this")(),l=Object.prototype.toString,p=Math.max,d=Math.min,h=function(){return s.Date.now()};function v(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function g(n){if("number"==typeof n)return n;if(function(n){return"symbol"==typeof n||function(n){return!!n&&"object"==typeof n}(n)&&"[object Symbol]"==l.call(n)}(n))return NaN;if(v(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=v(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(e,"");var r=i.test(n);return r||u.test(n)?a(n.slice(2),r?2:8):o.test(n)?NaN:+n}n.exports=function(n,t,r){var e,o,i,u,a,c,f=0,s=!1,l=!1,m=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function b(t){var r=e,i=o;return e=o=void 0,f=t,u=n.apply(i,r)}function j(n){return f=n,a=setTimeout(x,t),s?b(n):u}function y(n){var r=n-c;return void 0===c||r>=t||r<0||l&&n-f>=i}function x(){var n=h();if(y(n))return O(n);a=setTimeout(x,function(n){var r=t-(n-c);return l?d(r,i-(n-f)):r}(n))}function O(n){return a=void 0,m&&e?b(n):(e=o=void 0,u)}function w(){var n=h(),r=y(n);if(e=arguments,o=this,c=n,r){if(void 0===a)return j(c);if(l)return a=setTimeout(x,t),b(c)}return void 0===a&&(a=setTimeout(x,t)),u}return t=g(t)||0,v(r)&&(s=!!r.leading,i=(l="maxWait"in r)?p(g(r.maxWait)||0,t):i,m="trailing"in r?!!r.trailing:m),w.cancel=function(){void 0!==a&&clearTimeout(a),f=0,e=c=o=a=void 0},w.flush=function(){return void 0===a?u:O(h())},w}},7762:function(n,t,r){"use strict";r.d(t,{Z:function(){return o}});var e=r(181);function o(n,t){var r="undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!r){if(Array.isArray(n)||(r=(0,e.Z)(n))||t&&n&&"number"===typeof n.length){r&&(n=r);var o=0,i=function(){};return{s:i,n:function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,a=!0,c=!1;return{s:function(){r=r.call(n)},n:function(){var n=r.next();return a=n.done,n},e:function(n){c=!0,u=n},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw u}}}}},4942:function(n,t,r){"use strict";function e(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}r.d(t,{Z:function(){return e}})},1413:function(n,t,r){"use strict";r.d(t,{Z:function(){return i}});var e=r(4942);function o(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.push.apply(r,e)}return r}function i(n){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,e.Z)(n,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(r,t))}))}return n}}}]);