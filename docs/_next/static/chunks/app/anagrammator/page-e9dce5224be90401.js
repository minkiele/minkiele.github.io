(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9093],{5087:function(t,e,n){Promise.resolve().then(n.bind(n,1714))},9589:function(t,e,n){var r=0/0,i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,s=parseInt,l="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,c="object"==typeof self&&self&&self.Object===Object&&self,d=l||c||Function("return this")(),f=Object.prototype.toString,h=Math.max,p=Math.min,m=function(){return d.Date.now()};function g(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function v(t){if("number"==typeof t)return t;if("symbol"==typeof(e=t)||e&&"object"==typeof e&&"[object Symbol]"==f.call(e))return r;if(g(t)){var e,n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var l=a.test(t);return l||u.test(t)?s(t.slice(2),l?2:8):o.test(t)?r:+t}t.exports=function(t,e,n){var r,i,o,a,u,s,l=0,c=!1,d=!1,f=!0;if("function"!=typeof t)throw TypeError("Expected a function");function b(e){var n=r,o=i;return r=i=void 0,l=e,a=t.apply(o,n)}function j(t){var n=t-s,r=t-l;return void 0===s||n>=e||n<0||d&&r>=o}function x(){var t,n,r,i=m();if(j(i))return y(i);u=setTimeout(x,(t=i-s,n=i-l,r=e-t,d?p(r,o-n):r))}function y(t){return(u=void 0,f&&r)?b(t):(r=i=void 0,a)}function k(){var t,n=m(),o=j(n);if(r=arguments,i=this,s=n,o){if(void 0===u)return l=t=s,u=setTimeout(x,e),c?b(t):a;if(d)return u=setTimeout(x,e),b(s)}return void 0===u&&(u=setTimeout(x,e)),a}return e=v(e)||0,g(n)&&(c=!!n.leading,o=(d="maxWait"in n)?h(v(n.maxWait)||0,e):o,f="trailing"in n?!!n.trailing:f),k.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=s=i=u=void 0},k.flush=function(){return void 0===u?a:y(m())},k}},8248:function(t,e){"use strict";function n(t){for(var e=1,n=2;n<=t;n+=1)e*=n;return e}e.zu=e.oG=void 0,e.oG=function(t){for(var e,r=n(t.length),i={},o=0;o<t.length;o+=1)i[t[o]]=(null!==(e=i[t[o]])&&void 0!==e?e:0)+1;return{numerator:r,denominator:Object.keys(i).map(function(t){return n(i[t])})}},e.zu=function(t){var n=(0,e.oG)(t),r=n.numerator;return n.denominator.reduce(function(t,e){return e>1?t/e:t},r)}},1714:function(t,e,n){"use strict";n.d(e,{default:function(){return x}});var r,i=n(7573),o=n(7653),a=n(9589),u=n.n(a),s=n(8248),l=n(9741),c=n(9429);function d(t){let e=Object.assign({p:"p",strong:"strong"},(0,c.ah)(),t.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"Get anagrams for the provided input."}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Warning"}),": since the growth of the number is almost\nexponential I capped the generator. If total number of anagrams exceed\n10000 they won't be generated, but you can see stats about them."]})]})}for(var f=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,c.ah)(),t.components);return e?(0,i.jsx)(e,Object.assign({},t,{children:(0,i.jsx)(d,t)})):d(t)},h={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)},p=new Uint8Array(16),m=[],g=0;g<256;++g)m.push((g+256).toString(16).slice(1));var v=function(t,e,n){if(h.randomUUID&&!e&&!t)return h.randomUUID();var i=(t=t||{}).random||(t.rng||function(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(p)})();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,e){n=n||0;for(var o=0;o<16;++o)e[n+o]=i[o];return e}return function(t,e=0){return(m[t[e+0]]+m[t[e+1]]+m[t[e+2]]+m[t[e+3]]+"-"+m[t[e+4]]+m[t[e+5]]+"-"+m[t[e+6]]+m[t[e+7]]+"-"+m[t[e+8]]+m[t[e+9]]+"-"+m[t[e+10]]+m[t[e+11]]+m[t[e+12]]+m[t[e+13]]+m[t[e+14]]+m[t[e+15]]).toLowerCase()}(i)};let b=()=>{let t=(0,o.useRef)(),[{id:e,input:r,idle:i,anagramms:a},u]=(0,o.useState)({id:void 0,input:void 0,idle:!0,anagramms:[]});(0,o.useEffect)(()=>{let e=t.current;null==e&&(e=new Worker(n.tu(new URL(n.p+n.u(7927),n.b))),t.current=e);let r=t=>{"anagrammatorWorkerResponse"===t.data.type&&u(e=>e.id!==t.data.id||e.idle?e:{...e,id:void 0,idle:!0,anagramms:t.data.anagramms})};return e.addEventListener("message",r),()=>{null!=e&&(e.removeEventListener("message",r),e.terminate(),t.current=void 0)}},[]);let s=(0,o.useCallback)(t=>{u(e=>e.idle?{id:v(),input:t,idle:!0,anagramms:[]}:e)},[]);return(0,o.useEffect)(()=>{if(i&&null!=e&&null!=r){var n;u(t=>({...t,idle:!1})),null===(n=t.current)||void 0===n||n.postMessage({id:e,type:"anagrammatorWorkerRequest",input:r})}},[e,i,r]),(0,o.useMemo)(()=>({anagramm:s,input:r,anagramms:a,idle:i}),[s,r,a,i])},j=t=>{let e=t.trim();return e.length>0?e.toUpperCase().replace(/[^A-Z]/,""):e};var x=function(){let[{value:t,anagramms:e,size:n,total:r,skipped:a,formula:c},d]=(0,o.useState)({value:"",anagramms:[],size:0,total:0,skipped:0,formula:void 0}),{input:h,anagramm:p,anagramms:m,idle:g}=b(),v=(0,o.useCallback)(u()(t=>{let e=t.length>0?l.H.factorial(t.length):0,n=t.length>0?(0,s.zu)(t):0,r=e-n;d(i=>({...i,anagramms:[],size:n,total:e,skipped:r,formula:(0,s.oG)(t)})),p(t)},500),[p]);return(0,o.useEffect)(()=>{g&&h===t&&d(t=>({...t,anagramms:m}))},[h,t,g,m]),(0,o.useEffect)(()=>(v(t),()=>{v.cancel()}),[v,t]),(0,i.jsxs)("div",{children:[(0,i.jsx)(f,{}),(0,i.jsxs)("fieldset",{children:[(0,i.jsx)("legend",{children:"Generator controls"}),(0,i.jsx)("label",{htmlFor:"input",children:"Type in a word:"})," ",(0,i.jsx)("input",{id:"input",value:t,type:"text",onChange:t=>{d(e=>({...e,value:j(t.target.value)}))},readOnly:n>0&&0===e.length})," "]}),r>0&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{children:"Facts"}),(0,i.jsxs)("dl",{children:[(0,i.jsx)("dt",{children:"Found Anagrams:"}),(0,i.jsx)("dd",{children:n})]}),(0,i.jsxs)("dl",{children:[(0,i.jsx)("dt",{children:"Total Combinations:"}),(0,i.jsx)("dd",{children:r})]}),(0,i.jsxs)("dl",{children:[(0,i.jsx)("dt",{children:"Skipped Combinations:"}),(0,i.jsx)("dd",{children:a})]}),null!=c&&(0,i.jsxs)("dl",{children:[(0,i.jsx)("dt",{children:"Formula:"}),(0,i.jsxs)("dd",{children:[c.numerator," / (",c.denominator.join(" * "),")"]})]}),0===e.length&&n>0&&(0,i.jsx)("p",{children:"Loading..."}),e.length>0&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{children:"The anagrams"}),(0,i.jsx)("ol",{children:o.Children.toArray(e.map(t=>(0,i.jsx)("li",{children:t},t)))})]})]})]})}},9741:function(t,e,n){"use strict";var r;n.d(e,{H:function(){return r}}),function(t){function e(t){let e=[];for(let n=3;n<=t;n+=2){let t=!1,r=n;for(let i=0;!t&&i<e.length&&e[i]<r;i+=1){let o=n%e[i];0===o?t=!0:r=(n-o)/e[i]}t||e.push(n)}return t>=2&&e.unshift(2),e}function n(t,e){return t-e}t.sum=function(t,e,n){let r=0;for(let i=t;i<=e;i+=1)r+=n(i,t,e);return r},t.getPrimesUpTo=e,t.getPrimesRateUpTo=function(t){return e(t).length/t*100},t.isPrime=function(t){let e=t;if(t<2||t%2==0)return!1;for(let n=3;n<e;n+=2){let r=t%n;if(0===r)return!1;e=(t-r)/n}return!0},t.factorize=function(t){let e=[],n=t,r=2,i=t;for(;r<n;){let t=i%r;0===t?(e.push(r),i/=r,n=i):(n=(i-t)/r,r+=2===r?1:2)}return r>=n&&e.push(i),e},t.factorizeInputs=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[2,3],r=Math.max(...e),i=[];for(let o of Array.from(t).sort(n)){let t=[],n=o,a=2,u=o,s=0;for(;s<e.length&&a<n;){let r=u%(a=e[s]);0===r?(t.push(a),u/=a,n=u):(n=(u-r)/a,s+=1)}for(;a<n;){let i=u%a;0===i?(t.push(a),a>r&&(e.push(a),r=a),u/=a,n=u):(n=(u-i)/a,a+=2===a?1:2)}a>=n&&(t.push(u),a>r&&(e.push(a),r=a)),i.push({input:o,factors:t})}return i.sort((t,e)=>{let{input:r}=t,{input:i}=e;return n(r,i)}).map(t=>{let{factors:e}=t;return e})},t.range=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=[];for(let i=0;i<t;i+=1)r.push(i*n+e);return r},t.factorial=t=>{let e=1;for(let n=2;n<=t;n+=1)e*=n;return e};class r{approx(){for(let t=0;t<this.iterations;t+=1){if(this.lb===this.hb){this.candidate=this.lb;break}{let t=this.hb-this.lb;this.candidate=this.lb+t/2;let e=this.candidate**2;if(e>this.input)this.hb=this.candidate;else if(e<this.input)this.lb=this.candidate;else break}}return this.candidate}constructor(t,e=100){this.input=t,this.iterations=e,this.lb=0,this.hb=1/0,this.candidate=0,this.candidate=this.input,this.hb=t}}t.approximateSquareRoot=(t,e)=>new r(t,null!=e?e:t).approx()}(r||(r={}))},9429:function(t,e,n){"use strict";n.d(e,{ah:function(){return o}});var r=n(7653);let i=r.createContext({});function o(t){let e=r.useContext(i);return r.useMemo(()=>"function"==typeof t?t(e):{...e,...t},[e,t])}}},function(t){t.O(0,[1293,286,1744],function(){return t(t.s=5087)}),_N_E=t.O()}]);