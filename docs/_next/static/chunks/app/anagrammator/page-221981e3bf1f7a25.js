(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4871],{95:(t,e,n)=>{var r=0/0,i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,s=/^0o[0-7]+$/i,u=parseInt,l="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,d="object"==typeof self&&self&&self.Object===Object&&self,c=l||d||Function("return this")(),f=Object.prototype.toString,h=Math.max,p=Math.min,m=function(){return c.Date.now()};function g(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function v(t){if("number"==typeof t)return t;if("symbol"==typeof(e=t)||e&&"object"==typeof e&&"[object Symbol]"==f.call(e))return r;if(g(t)){var e,n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var l=a.test(t);return l||s.test(t)?u(t.slice(2),l?2:8):o.test(t)?r:+t}t.exports=function(t,e,n){var r,i,o,a,s,u,l=0,d=!1,c=!1,f=!0;if("function"!=typeof t)throw TypeError("Expected a function");function b(e){var n=r,o=i;return r=i=void 0,l=e,a=t.apply(o,n)}function j(t){var n=t-u,r=t-l;return void 0===u||n>=e||n<0||c&&r>=o}function x(){var t,n,r,i=m();if(j(i))return y(i);s=setTimeout(x,(t=i-u,n=i-l,r=e-t,c?p(r,o-n):r))}function y(t){return(s=void 0,f&&r)?b(t):(r=i=void 0,a)}function k(){var t,n=m(),o=j(n);if(r=arguments,i=this,u=n,o){if(void 0===s)return l=t=u,s=setTimeout(x,e),d?b(t):a;if(c)return s=setTimeout(x,e),b(u)}return void 0===s&&(s=setTimeout(x,e)),a}return e=v(e)||0,g(n)&&(d=!!n.leading,o=(c="maxWait"in n)?h(v(n.maxWait)||0,e):o,f="trailing"in n?!!n.trailing:f),k.cancel=function(){void 0!==s&&clearTimeout(s),l=0,r=u=i=s=void 0},k.flush=function(){return void 0===s?a:y(m())},k}},2947:(t,e)=>{"use strict";function n(t){for(var e=1,n=2;n<=t;n+=1)e*=n;return e}e.AC=e.B2=void 0,e.B2=function(t){for(var e,r=n(t.length),i={},o=0;o<t.length;o+=1)i[t[o]]=(null!=(e=i[t[o]])?e:0)+1;return{numerator:r,denominator:Object.keys(i).map(function(t){return n(i[t])})}},e.AC=function(t){var n=(0,e.B2)(t),r=n.numerator;return n.denominator.reduce(function(t,e){return e>1?t/e:t},r)}},2973:(t,e,n)=>{"use strict";var r;n.d(e,{t:()=>r}),function(t){function e(t){let e=[];for(let n=3;n<=t;n+=2){let t=!1,r=n;for(let i=0;!t&&i<e.length&&e[i]<r;i+=1){let o=n%e[i];0===o?t=!0:r=(n-o)/e[i]}t||e.push(n)}return t>=2&&e.unshift(2),e}function n(t,e){return t-e}t.sum=function(t,e,n){let r=0;for(let i=t;i<=e;i+=1)r+=n(i,t,e);return r},t.getPrimesUpTo=e,t.getPrimesRateUpTo=function(t){return e(t).length/t*100},t.isPrime=function(t){let e=t;if(t<2||t%2==0)return!1;for(let n=3;n<e;n+=2){let r=t%n;if(0===r)return!1;e=(t-r)/n}return!0},t.factorize=function(t){let e=[],n=t,r=2,i=t;for(;r<n;){let t=i%r;0===t?(e.push(r),i/=r,n=i):(n=(i-t)/r,r+=2===r?1:2)}return r>=n&&e.push(i),e},t.factorizeInputs=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[2,3],r=Math.max(...e),i=[];for(let o of Array.from(t).sort(n)){let t=[],n=o,a=2,s=o,u=0;for(;u<e.length&&a<n;){let r=s%(a=e[u]);0===r?(t.push(a),s/=a,n=s):(n=(s-r)/a,u+=1)}for(;a<n;){let i=s%a;0===i?(t.push(a),a>r&&(e.push(a),r=a),s/=a,n=s):(n=(s-i)/a,a+=2===a?1:2)}a>=n&&(t.push(s),a>r&&(e.push(a),r=a)),i.push({input:o,factors:t})}return i.sort((t,e)=>{let{input:r}=t,{input:i}=e;return n(r,i)}).map(t=>{let{factors:e}=t;return e})},t.range=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=[];for(let i=0;i<t;i+=1)r.push(i*n+e);return r},t.factorial=t=>{let e=1;for(let n=2;n<=t;n+=1)e*=n;return e};class r{approx(){for(let t=0;t<this.iterations;t+=1)if(this.lb===this.hb){this.candidate=this.lb;break}else{let t=this.hb-this.lb;this.candidate=this.lb+t/2;let e=this.candidate**2;if(e>this.input)this.hb=this.candidate;else if(e<this.input)this.lb=this.candidate;else break}return this.candidate}constructor(t,e=100){this.input=t,this.iterations=e,this.lb=0,this.hb=1/0,this.candidate=0,this.candidate=this.input,this.hb=t}}t.approximateSquareRoot=(t,e)=>new r(t,null!=e?e:t).approx()}(r||(r={}))},5240:(t,e,n)=>{"use strict";n.d(e,{default:()=>b});var r,i=n(4568),o=n(7620),a=n(95),s=n.n(a),u=n(2947),l=n(2973),d=n(9874);function c(t){let e=Object.assign({p:"p",strong:"strong"},(0,d.RP)(),t.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"Get anagrams for the provided input."}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Warning"}),": since the growth of the number is almost\nexponential I capped the generator. If total number of anagrams exceed\n10000 they won't be generated, but you can see stats about them."]})]})}let f=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,d.RP)(),t.components);return e?(0,i.jsx)(e,Object.assign({},t,{children:(0,i.jsx)(c,t)})):c(t)},h={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};for(var p=new Uint8Array(16),m=[],g=0;g<256;++g)m.push((g+256).toString(16).slice(1));let v=function(t,e,n){if(h.randomUUID&&!e&&!t)return h.randomUUID();var i=(t=t||{}).random||(t.rng||function(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(p)})();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,e){n=n||0;for(var o=0;o<16;++o)e[n+o]=i[o];return e}return function(t,e=0){return(m[t[e+0]]+m[t[e+1]]+m[t[e+2]]+m[t[e+3]]+"-"+m[t[e+4]]+m[t[e+5]]+"-"+m[t[e+6]]+m[t[e+7]]+"-"+m[t[e+8]]+m[t[e+9]]+"-"+m[t[e+10]]+m[t[e+11]]+m[t[e+12]]+m[t[e+13]]+m[t[e+14]]+m[t[e+15]]).toLowerCase()}(i)},b=function(){let[{value:t,anagramms:e,size:r,total:a,skipped:d,formula:c},h]=(0,o.useState)({value:"",anagramms:[],size:0,total:0,skipped:0,formula:void 0}),{input:p,anagramm:m,anagramms:g,idle:b}=(()=>{let t=(0,o.useRef)(),[{id:e,input:r,idle:i,anagramms:a},s]=(0,o.useState)({id:void 0,input:void 0,idle:!0,anagramms:[]});(0,o.useEffect)(()=>{let e=t.current;null==e&&(t.current=e=new Worker(n.tu(new URL(n.p+n.u(7435),n.b))));let r=t=>{"anagrammatorWorkerResponse"===t.data.type&&s(e=>e.id!==t.data.id||e.idle?e:{...e,id:void 0,idle:!0,anagramms:t.data.anagramms})};return e.addEventListener("message",r),()=>{null!=e&&(e.removeEventListener("message",r),e.terminate(),t.current=void 0)}},[]);let u=(0,o.useCallback)(t=>{s(e=>e.idle?{id:v(),input:t,idle:!0,anagramms:[]}:e)},[]);return(0,o.useEffect)(()=>{if(i&&null!=e&&null!=r){var n;s(t=>({...t,idle:!1})),null==(n=t.current)||n.postMessage({id:e,type:"anagrammatorWorkerRequest",input:r})}},[e,i,r]),(0,o.useMemo)(()=>({anagramm:u,input:r,anagramms:a,idle:i}),[u,r,a,i])})(),j=(0,o.useCallback)(s()(t=>{let e=t.length>0?l.t.factorial(t.length):0,n=t.length>0?(0,u.AC)(t):0,r=e-n;h(i=>({...i,anagramms:[],size:n,total:e,skipped:r,formula:(0,u.B2)(t)})),m(t)},500),[m]);return(0,o.useEffect)(()=>{b&&p===t&&h(t=>({...t,anagramms:g}))},[p,t,b,g]),(0,o.useEffect)(()=>(j(t),()=>{j.cancel()}),[j,t]),(0,i.jsxs)("div",{children:[(0,i.jsx)(f,{}),(0,i.jsxs)("fieldset",{children:[(0,i.jsx)("legend",{children:"Generator controls"}),(0,i.jsx)("label",{htmlFor:"input",children:"Type in a word:"})," ",(0,i.jsx)("input",{id:"input",value:t,type:"text",onChange:t=>{h(e=>({...e,value:(t=>{let e=t.trim();return e.length>0?e.toUpperCase().replace(/[^A-Z]/,""):e})(t.target.value)}))},readOnly:r>0&&0===e.length})," "]}),a>0&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{children:"Facts"}),(0,i.jsxs)("dl",{children:[(0,i.jsx)("dt",{children:"Found Anagrams:"}),(0,i.jsx)("dd",{children:r})]}),(0,i.jsxs)("dl",{children:[(0,i.jsx)("dt",{children:"Total Combinations:"}),(0,i.jsx)("dd",{children:a})]}),(0,i.jsxs)("dl",{children:[(0,i.jsx)("dt",{children:"Skipped Combinations:"}),(0,i.jsx)("dd",{children:d})]}),null!=c&&(0,i.jsxs)("dl",{children:[(0,i.jsx)("dt",{children:"Formula:"}),(0,i.jsxs)("dd",{children:[c.numerator," / (",c.denominator.join(" * "),")"]})]}),0===e.length&&r>0&&(0,i.jsx)("p",{children:"Loading..."}),e.length>0&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{children:"The anagrams"}),(0,i.jsx)("ol",{children:o.Children.toArray(e.map(t=>(0,i.jsx)("li",{children:t},t)))})]})]})]})}},7158:(t,e,n)=>{Promise.resolve().then(n.bind(n,5240))},9874:(t,e,n)=>{"use strict";n.d(e,{RP:()=>o});var r=n(7620);let i=r.createContext({});function o(t){let e=r.useContext(i);return r.useMemo(()=>"function"==typeof t?t(e):{...e,...t},[e,t])}}},t=>{t.O(0,[587,1902,7358],()=>t(t.s=7158)),_N_E=t.O()}]);