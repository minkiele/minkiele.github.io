(this.webpackJsonpminkiele=this.webpackJsonpminkiele||[]).push([[5],{21:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},24:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(21);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},27:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(8);var i=n(5);function c(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(i.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},31:function(t,e,n){(function(e){var n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,c=/^0o[0-7]+$/i,o=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,a="object"==typeof self&&self&&self.Object===Object&&self,s=u||a||Function("return this")(),f=Object.prototype.toString,l=Math.max,b=Math.min,j=function(){return s.Date.now()};function d(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function p(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==f.call(t)}(t))return NaN;if(d(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=d(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var u=i.test(t);return u||c.test(t)?o(t.slice(2),u?2:8):r.test(t)?NaN:+t}t.exports=function(t,e,n){var r,i,c,o,u,a,s=0,f=!1,h=!1,O=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function v(e){var n=r,c=i;return r=i=void 0,s=e,o=t.apply(c,n)}function m(t){return s=t,u=setTimeout(g,e),f?v(t):o}function y(t){var n=t-a;return void 0===a||n>=e||n<0||h&&t-s>=c}function g(){var t=j();if(y(t))return x(t);u=setTimeout(g,function(t){var n=e-(t-a);return h?b(n,c-(t-s)):n}(t))}function x(t){return u=void 0,O&&r?v(t):(r=i=void 0,o)}function w(){var t=j(),n=y(t);if(r=arguments,i=this,a=t,n){if(void 0===u)return m(a);if(h)return u=setTimeout(g,e),v(a)}return void 0===u&&(u=setTimeout(g,e)),o}return e=p(e)||0,d(n)&&(f=!!n.leading,c=(h="maxWait"in n)?l(p(n.maxWait)||0,e):c,O="trailing"in n?!!n.trailing:O),w.cancel=function(){void 0!==u&&clearTimeout(u),s=0,r=a=i=u=void 0},w.flush=function(){return void 0===u?o:x(j())},w}}).call(this,n(32))},32:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},42:function(t,e,n){"use strict";n.r(e);var r=n(24),i=n(4),c=n(0),o=(n(27),function t(e){if(null==e||0===e.length)return Promise.resolve([]);if(1===e.length)return Promise.resolve([e]);for(var n=[],r=[],i=function(i){var c=e[i];-1===r.indexOf(c)&&(r.push(c),n.push(t("".concat(e.substring(0,i)).concat(e.substring(i+1,e.length))).then((function(t){return t.map((function(t){return"".concat(t).concat(c)}))}))))},c=0;c<e.length;c+=1)i(c);return Promise.all(n).then((function(t){return t.reduce((function(t,e){return t.concat(e)}),[])}))}),u=n(31),a=n.n(u),s=n(2);e.default=function(){var t=Object(c.useState)({value:"",anagramms:[],size:0,total:0,skipped:0}),e=Object(i.a)(t,2),n=e[0],u=n.value,f=n.anagramms,l=n.size,b=n.total,j=n.skipped,d=e[1],p=Object(c.useCallback)(a()((function(t){o(t).then((function(e){d((function(n){var i=e.length,c=t.length>0?function(t){for(var e=1,n=1;n<=t;n+=1)e*=n;return e}(t.length):0,o=c-i;return Object(r.a)(Object(r.a)({},n),{},{anagramms:e,size:i,total:c,skipped:o})}))}))}),500),[]);return Object(c.useEffect)((function(){p(u)}),[p,u]),Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:Object(s.jsx)("input",{id:"input",value:u,type:"text",onChange:function(t){d((function(e){return Object(r.a)(Object(r.a)({},e),{},{value:t.target.value})}))}})}),b>0&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{children:"Facts"}),Object(s.jsxs)("dl",{children:[Object(s.jsx)("dt",{children:"Found Anagrams:"}),Object(s.jsx)("dd",{children:l})]}),Object(s.jsxs)("dl",{children:[Object(s.jsx)("dt",{children:"Total Combinations:"}),Object(s.jsx)("dd",{children:b})]}),Object(s.jsxs)("dl",{children:[Object(s.jsx)("dt",{children:"Skipped Combinations:"}),Object(s.jsx)("dd",{children:j})]}),f.length>0&&f.length<1e4&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{children:"The anagrams"}),Object(s.jsx)("ol",{children:c.Children.toArray(f.map((function(t){return Object(s.jsx)("li",{children:t},t)})))})]})]})]})}}}]);
//# sourceMappingURL=5.20226180.chunk.js.map