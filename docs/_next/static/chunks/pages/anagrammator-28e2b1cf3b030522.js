(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[230],{594:function(t,e,n){var r=0/0,o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,s=parseInt,c="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,l="object"==typeof self&&self&&self.Object===Object&&self,f=c||l||Function("return this")(),d=Object.prototype.toString,p=Math.max,m=Math.min,now=function(){return f.Date.now()};function isObject(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function toNumber(t){if("number"==typeof t)return t;if("symbol"==typeof(e=t)||e&&"object"==typeof e&&"[object Symbol]"==d.call(e))return r;if(isObject(t)){var e,n="function"==typeof t.valueOf?t.valueOf():t;t=isObject(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var c=u.test(t);return c||a.test(t)?s(t.slice(2),c?2:8):i.test(t)?r:+t}t.exports=function(t,e,n){var r,o,i,u,a,s,c=0,l=!1,f=!1,d=!0;if("function"!=typeof t)throw TypeError("Expected a function");function invokeFunc(e){var n=r,i=o;return r=o=void 0,c=e,u=t.apply(i,n)}function shouldInvoke(t){var n=t-s,r=t-c;return void 0===s||n>=e||n<0||f&&r>=i}function timerExpired(){var t,n,r,o=now();if(shouldInvoke(o))return trailingEdge(o);a=setTimeout(timerExpired,(t=o-s,n=o-c,r=e-t,f?m(r,i-n):r))}function trailingEdge(t){return(a=void 0,d&&r)?invokeFunc(t):(r=o=void 0,u)}function debounced(){var t,n=now(),i=shouldInvoke(n);if(r=arguments,o=this,s=n,i){if(void 0===a)return c=t=s,a=setTimeout(timerExpired,e),l?invokeFunc(t):u;if(f)return a=setTimeout(timerExpired,e),invokeFunc(s)}return void 0===a&&(a=setTimeout(timerExpired,e)),u}return e=toNumber(e)||0,isObject(n)&&(l=!!n.leading,i=(f="maxWait"in n)?p(toNumber(n.maxWait)||0,e):i,d="trailing"in n?!!n.trailing:d),debounced.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=s=o=a=void 0},debounced.flush=function(){return void 0===a?u:trailingEdge(now())},debounced}},7902:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/anagrammator",function(){return n(6627)}])},5384:function(t,e,n){"use strict";var r;n.d(e,{H:function(){return r}}),function(t){function getPrimesUpTo(t){let e=[];for(let n=3;n<=t;n+=2){let t=!1,r=n;for(let o=0;!t&&o<e.length&&e[o]<r;o+=1){let i=n%e[o];0===i?t=!0:r=(n-i)/e[o]}t||e.push(n)}return t>=2&&e.unshift(2),e}function sortNumbers(t,e){return t-e}t.sum=function(t,e,n){let r=0;for(let o=t;o<=e;o+=1)r+=n(o,t,e);return r},t.getPrimesUpTo=getPrimesUpTo,t.getPrimesRateUpTo=function(t){return getPrimesUpTo(t).length/t*100},t.isPrime=function(t){let e=t;if(t<2||t%2==0)return!1;for(let n=3;n<e;n+=2){let r=t%n;if(0===r)return!1;e=(t-r)/n}return!0},t.factorize=function(t){let e=[],n=t,r=2,o=t;for(;r<n;){let t=o%r;0===t?(e.push(r),o/=r,n=o):(n=(o-t)/r,r+=2===r?1:2)}return r>=n&&e.push(o),e},t.factorizeInputs=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[2,3],n=Math.max(...e),r=[],o=Array.from(t).sort(sortNumbers);for(let t of o){let o=[],i=t,u=2,a=t,s=0;for(;s<e.length&&u<i;){u=e[s];let t=a%u;0===t?(o.push(u),a/=u,i=a):(i=(a-t)/u,s+=1)}for(;u<i;){let t=a%u;0===t?(o.push(u),u>n&&(e.push(u),n=u),a/=u,i=a):(i=(a-t)/u,u+=2===u?1:2)}u>=i&&(o.push(a),u>n&&(e.push(u),n=u)),r.push({input:t,factors:o})}return r.sort((t,e)=>{let{input:n}=t,{input:r}=e;return sortNumbers(n,r)}).map(t=>{let{factors:e}=t;return e})},t.range=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=[];for(let o=0;o<t;o+=1)r.push(o*n+e);return r},t.factorial=t=>{let e=1;for(let n=2;n<=t;n+=1)e*=n;return e}}(r||(r={}))},6627:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return f},default:function(){return pages_anagrammator}});var r=n(2322),o=n(2784),i=n(594),u=n.n(i),a=n(8909),s=n.n(a),c=n(5384),l=n(5392);function _createMdxContent(t){let e=Object.assign({p:"p",strong:"strong"},(0,l.ah)(),t.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"Get anagrams for the provided input."}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Warning"}),": since the growth of the number is almost\nexponential I capped the generator. If total number of anagrams exceed\n10000 they won't be generated, but you can see stats about them."]})]})}var README=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,l.ah)(),t.components);return e?(0,r.jsx)(e,Object.assign({},t,{children:(0,r.jsx)(_createMdxContent,t)})):_createMdxContent(t)};let normalizeInput=t=>{let e=t.trim();return e.length>0?e.toUpperCase().replace(/[^A-Z]/,""):e};var f=!0,pages_anagrammator=function(){let[{value:t,anagramms:e,size:n,total:i,skipped:l,formula:f},d]=(0,o.useState)({value:"",anagramms:[],size:0,total:0,skipped:0,formula:void 0}),p=(0,o.useCallback)(u()(t=>{let e=t.length>0?c.H.factorial(t.length):0;new Promise((e,n)=>{let r=(0,a.countAnagrams)(t);if(r<1e4){let n=s()(t);e(n)}else n(r)}).then(n=>{d(r=>{let o=n.length;return{...r,anagramms:n,size:o,total:e,skipped:e-o,formula:(0,a.getCountAnagramFactors)(t)}})},n=>{d(r=>({...r,anagramms:[],size:n,total:e,skipped:e-n,formula:(0,a.getCountAnagramFactors)(t)}))})},500),[]);return(0,o.useEffect)(()=>(p(t),()=>{p.cancel()}),[p,t]),(0,r.jsxs)("div",{children:[(0,r.jsx)(README,{}),(0,r.jsxs)("fieldset",{children:[(0,r.jsx)("legend",{children:"Generator controls"}),(0,r.jsx)("label",{htmlFor:"input",children:"Type in a word:"})," ",(0,r.jsx)("input",{id:"input",value:t,type:"text",onChange:t=>{d(e=>({...e,value:normalizeInput(t.target.value)}))}})," "]}),i>0&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{children:"Facts"}),(0,r.jsxs)("dl",{children:[(0,r.jsx)("dt",{children:"Found Anagrams:"}),(0,r.jsx)("dd",{children:n})]}),(0,r.jsxs)("dl",{children:[(0,r.jsx)("dt",{children:"Total Combinations:"}),(0,r.jsx)("dd",{children:i})]}),(0,r.jsxs)("dl",{children:[(0,r.jsx)("dt",{children:"Skipped Combinations:"}),(0,r.jsx)("dd",{children:l})]}),null!=f&&(0,r.jsxs)("dl",{children:[(0,r.jsx)("dt",{children:"Formula:"}),(0,r.jsxs)("dd",{children:[f.numerator," / (",f.denominator.join(" * "),")"]})]}),e.length>0&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{children:"The anagrams"}),(0,r.jsx)("ol",{children:o.Children.toArray(e.map(t=>(0,r.jsx)("li",{children:t},t)))})]})]})]})}},8909:function(t,e,n){var r,o,i;!function(u){if("object"==typeof t.exports){var a=u(n(8786),e);void 0!==a&&(t.exports=a)}else o=[n,e],void 0!==(i="function"==typeof(r=u)?r.apply(e,o):r)&&(t.exports=i)}(function(t,e){"use strict";function factorial(t){for(var e=1,n=2;n<=t;n+=1)e*=n;return e}Object.defineProperty(e,"__esModule",{value:!0}),e.countAnagrams=e.getCountAnagramFactors=void 0,e.default=function anagrammator(t){if(null==t||0===t.length)return[];if(1===t.length)return[t];for(var e=[],n=[],r=0;r<t.length;r+=1)!function(r){var o=t.charAt(r);n.includes(o)||(n.push(o),e.push.apply(e,anagrammator("".concat(t.substring(0,r)).concat(t.substring(r+1))).map(function(t){return"".concat(t).concat(o)})))}(r);return e},e.getCountAnagramFactors=function(t){for(var e,n=factorial(t.length),r={},o=0;o<t.length;o+=1)r[t[o]]=(null!==(e=r[t[o]])&&void 0!==e?e:0)+1;return{numerator:n,denominator:Object.keys(r).map(function(t){return factorial(r[t])})}},e.countAnagrams=function(t){var n=(0,e.getCountAnagramFactors)(t),r=n.numerator;return n.denominator.reduce(function(t,e){return e>1?t/e:t},r)}})},8786:function(t){function webpackEmptyContext(t){var e=Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id=8786,t.exports=webpackEmptyContext},5392:function(t,e,n){"use strict";n.d(e,{ah:function(){return useMDXComponents}});var r=n(2784);let o=r.createContext({});function useMDXComponents(t){let e=r.useContext(o);return r.useMemo(()=>"function"==typeof t?t(e):{...e,...t},[e,t])}}},function(t){t.O(0,[774,888,179],function(){return t(t.s=7902)}),_N_E=t.O()}]);