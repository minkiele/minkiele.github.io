(self.webpackChunkminkiele_github_io=self.webpackChunkminkiele_github_io||[]).push([[654],{516:function(n){function t(n){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=516,n.exports=t},654:function(n,t,e){"use strict";e.r(t);var r=e(413),o=e(885),i=e(791),u=e(95),a=e.n(u),c=e(331),f=e.n(c),s=e(967),l=e(184),p=function(n){var t=n.trim();return t.length>0?t.toUpperCase().replace(/[^A-Z]/,""):t};t.default=function(){var n=(0,i.useState)({value:"",anagramms:[],size:0,total:0,skipped:0}),t=(0,o.Z)(n,2),e=t[0],u=e.value,d=e.anagramms,h=e.size,v=e.total,g=e.skipped,m=t[1],b=(0,i.useCallback)(a()((function(n){var t=n.length>0?s.H.factorial(n.length):0;new Promise((function(t,e){var r=(0,c.countAnagrams)(n);r<1e4?t(f()(n)):e(r)})).then((function(n){m((function(e){var o=n.length,i=t-o;return(0,r.Z)((0,r.Z)({},e),{},{anagramms:n,size:o,total:t,skipped:i})}))}),(function(n){m((function(e){var o=t-n;return(0,r.Z)((0,r.Z)({},e),{},{anagramms:[],size:n,total:t,skipped:o})}))}))}),500),[]);return(0,i.useEffect)((function(){b(u)}),[b,u]),(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{children:"Get anagrams for the provided input."}),(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:"Warning"}),": since the growth of the number is almost exponential I capped the generator. If total number of anagrams exceed 10000 they won't be generated, but you can see stats about them."]}),(0,l.jsxs)("fieldset",{children:[(0,l.jsx)("legend",{children:"Generator controls"}),(0,l.jsx)("label",{htmlFor:"input",children:"Type in a word:"})," ",(0,l.jsx)("input",{id:"input",value:u,type:"text",onChange:function(n){m((function(t){return(0,r.Z)((0,r.Z)({},t),{},{value:p(n.target.value)})}))}})]}),v>0&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h2",{children:"Facts"}),(0,l.jsxs)("dl",{children:[(0,l.jsx)("dt",{children:"Found Anagrams:"}),(0,l.jsx)("dd",{children:h})]}),(0,l.jsxs)("dl",{children:[(0,l.jsx)("dt",{children:"Total Combinations:"}),(0,l.jsx)("dd",{children:v})]}),(0,l.jsxs)("dl",{children:[(0,l.jsx)("dt",{children:"Skipped Combinations:"}),(0,l.jsx)("dd",{children:g})]}),d.length>0&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h2",{children:"The anagrams"}),(0,l.jsx)("ol",{children:i.Children.toArray(d.map((function(n){return(0,l.jsx)("li",{children:n},n)})))})]})]})]})}},967:function(n,t,e){"use strict";e.d(t,{H:function(){return r}});var r,o=e(762),i=e(982);!function(n){function t(n){for(var t=[],e=3;e<=n;e+=2){for(var r=!1,o=e,i=0;!r&&i<t.length&&t[i]<o;i+=1){var u=e%t[i];0===u?r=!0:o=(e-u)/t[i]}r||t.push(e)}return n>=2&&t.unshift(2),t}function e(n,t){return n-t}n.sum=function(n,t,e){for(var r=0,o=n;o<=t;o+=1)r+=e(o,n,t);return r},n.getPrimesUpTo=t,n.getPrimesRateUpTo=function(n){return t(n).length/n*100},n.isPrime=function(n){var t=n;if(n<2)return!1;if(n%2===0)return!1;for(var e=3;e<t;e+=2){var r=n%e;if(0===r)return!1;t=(n-r)/e}return!0},n.factorize=function(n){for(var t=[],e=n,r=2,o=n;r<e;){var i=o%r;0===i?(t.push(r),e=o/=r):(e=(o-i)/r,r+=2===r?1:2)}return r>=e&&t.push(o),t},n.factorizeInputs=function(n){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[2,3],u=Math.max.apply(Math,(0,i.Z)(r)),a=[],c=Array.from(n).sort(e),f=(0,o.Z)(c);try{for(f.s();!(t=f.n()).done;){for(var s=t.value,l=[],p=s,d=2,h=s,v=0;v<r.length&&d<p;){var g=h%(d=r[v]);0===g?(l.push(d),p=h/=d):(p=(h-g)/d,v+=1)}for(;d<p;){var m=h%d;0===m?(l.push(d),d>u&&(r.push(d),u=d),p=h/=d):(p=(h-m)/d,d+=2===d?1:2)}d>=p&&(l.push(h),d>u&&(r.push(d),u=d)),a.push({input:s,factors:l})}}catch(b){f.e(b)}finally{f.f()}return a.sort((function(n,t){return e(n.input,t.input)})).map((function(n){return n.factors}))},n.range=function(n){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=[],o=0;o<n;o+=1)r.push(o*e+t);return r};n.factorial=function(n){for(var t=1,e=2;e<=n;e+=1)t*=e;return t}}(r||(r={}))},331:function(n,t,e){var r,o,i;!function(u){if("object"===typeof n.exports){var a=u(e(516),t);void 0!==a&&(n.exports=a)}else o=[e,t],void 0===(i="function"===typeof(r=u)?r.apply(t,o):r)||(n.exports=i)}((function(n,t){"use strict";function e(n){for(var t=1,e=2;e<=n;e+=1)t*=e;return t}Object.defineProperty(t,"__esModule",{value:!0}),t.countAnagrams=void 0,t.default=function n(t){if(null==t||0===t.length)return[];if(1===t.length)return[t];for(var e=[],r=[],o=function(o){var i=t.charAt(o);r.includes(i)||(r.push(i),e.push.apply(e,n("".concat(t.substring(0,o)).concat(t.substring(o+1))).map((function(n){return"".concat(n).concat(i)}))))},i=0;i<t.length;i+=1)o(i);return e},t.countAnagrams=function(n){for(var t,r=e(n.length),o={},i=0;i<n.length;i+=1)o[n[i]]=(null!==(t=o[n[i]])&&void 0!==t?t:0)+1;return Object.keys(o).forEach((function(n){o[n]>1&&(r/=e(o[n]))})),r}}))},95:function(n,t,e){var r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof e.g&&e.g&&e.g.Object===Object&&e.g,f="object"==typeof self&&self&&self.Object===Object&&self,s=c||f||Function("return this")(),l=Object.prototype.toString,p=Math.max,d=Math.min,h=function(){return s.Date.now()};function v(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function g(n){if("number"==typeof n)return n;if(function(n){return"symbol"==typeof n||function(n){return!!n&&"object"==typeof n}(n)&&"[object Symbol]"==l.call(n)}(n))return NaN;if(v(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=v(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(r,"");var e=i.test(n);return e||u.test(n)?a(n.slice(2),e?2:8):o.test(n)?NaN:+n}n.exports=function(n,t,e){var r,o,i,u,a,c,f=0,s=!1,l=!1,m=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function b(t){var e=r,i=o;return r=o=void 0,f=t,u=n.apply(i,e)}function y(n){return f=n,a=setTimeout(x,t),s?b(n):u}function j(n){var e=n-c;return void 0===c||e>=t||e<0||l&&n-f>=i}function x(){var n=h();if(j(n))return O(n);a=setTimeout(x,function(n){var e=t-(n-c);return l?d(e,i-(n-f)):e}(n))}function O(n){return a=void 0,m&&r?b(n):(r=o=void 0,u)}function w(){var n=h(),e=j(n);if(r=arguments,o=this,c=n,e){if(void 0===a)return y(c);if(l)return a=setTimeout(x,t),b(c)}return void 0===a&&(a=setTimeout(x,t)),u}return t=g(t)||0,v(e)&&(s=!!e.leading,i=(l="maxWait"in e)?p(g(e.maxWait)||0,t):i,m="trailing"in e?!!e.trailing:m),w.cancel=function(){void 0!==a&&clearTimeout(a),f=0,r=c=o=a=void 0},w.flush=function(){return void 0===a?u:O(h())},w}},762:function(n,t,e){"use strict";e.d(t,{Z:function(){return o}});var r=e(181);function o(n,t){var e="undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!e){if(Array.isArray(n)||(e=(0,r.Z)(n))||t&&n&&"number"===typeof n.length){e&&(n=e);var o=0,i=function(){};return{s:i,n:function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,a=!0,c=!1;return{s:function(){e=e.call(n)},n:function(){var n=e.next();return a=n.done,n},e:function(n){c=!0,u=n},f:function(){try{a||null==e.return||e.return()}finally{if(c)throw u}}}}},942:function(n,t,e){"use strict";function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}e.d(t,{Z:function(){return r}})},413:function(n,t,e){"use strict";e.d(t,{Z:function(){return i}});var r=e(942);function o(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function i(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?o(Object(e),!0).forEach((function(t){(0,r.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}}}]);
//# sourceMappingURL=654.5fc5c98e.chunk.js.map