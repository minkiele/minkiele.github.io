(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[635],{536:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/factorize",function(){return n(5005)}])},994:function(t,e,n){"use strict";var r;n.d(e,{H:function(){return r}}),function(t){function e(t){let e=[];for(let n=3;n<=t;n+=2){let r=!1,u=n;for(let i=0;!r&&i<e.length&&e[i]<u;i+=1){let o=n%e[i];0===o?r=!0:u=(n-o)/e[i]}r||e.push(n)}return t>=2&&e.unshift(2),e}function n(t,e){return t-e}t.sum=function(t,e,n){let r=0;for(let u=t;u<=e;u+=1)r+=n(u,t,e);return r},t.getPrimesUpTo=e,t.getPrimesRateUpTo=function(t){return e(t).length/t*100},t.isPrime=function(t){let e=t;if(t<2||t%2==0)return!1;for(let n=3;n<e;n+=2){let r=t%n;if(0===r)return!1;e=(t-r)/n}return!0},t.factorize=function(t){let e=[],n=t,r=2,u=t;for(;r<n;){let i=u%r;0===i?(e.push(r),u/=r,n=u):(n=(u-i)/r,r+=2===r?1:2)}return r>=n&&e.push(u),e},t.factorizeInputs=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[2,3],r=Math.max(...e),u=[],i=Array.from(t).sort(n);for(let o of i){let l=[],s=o,c=2,f=o,a=0;for(;a<e.length&&c<s;){c=e[a];let h=f%c;0===h?(l.push(c),f/=c,s=f):(s=(f-h)/c,a+=1)}for(;c<s;){let p=f%c;0===p?(l.push(c),c>r&&(e.push(c),r=c),f/=c,s=f):(s=(f-p)/c,c+=2===c?1:2)}c>=s&&(l.push(f),c>r&&(e.push(c),r=c)),u.push({input:o,factors:l})}return u.sort((t,e)=>{let{input:r}=t,{input:u}=e;return n(r,u)}).map(t=>{let{factors:e}=t;return e})},t.range=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=[];for(let u=0;u<t;u+=1)r.push(u*n+e);return r},t.factorial=t=>{let e=1;for(let n=2;n<=t;n+=1)e*=n;return e}}(r||(r={}))},5005:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return h},default:function(){return p}});var r=n(2322),u=n(2784),i=n(6722),o=n(994);let l=(0,i.zGw)(o.H.factorize,(0,i.VFc)(i.yRu),i.Zpf);var s=n(5392);function c(t){let e=Object.assign({p:"p"},(0,s.ah)(),t.components);return(0,r.jsx)(e.p,{children:"A little function that factorizes a natural input > than 1"})}var f=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,s.ah)(),t.components);return e?(0,r.jsx)(e,Object.assign({},t,{children:(0,r.jsx)(c,t)})):c(t)};let a=()=>{let[t,e]=(0,u.useState)(2),n=(0,u.useMemo)(()=>l(t),[t]),i=t=>{let n=parseInt(t.target.value);e(isNaN(n)||n<2?2:n)};return(0,r.jsxs)("div",{children:[(0,r.jsx)(f,{}),(0,r.jsxs)("fieldset",{children:[(0,r.jsx)("legend",{children:"Factorize"}),(0,r.jsx)("label",{htmlFor:"input",children:"Input number: "}),(0,r.jsx)("input",{id:"input",name:"input",type:"number",value:t,onChange:i})]}),(0,r.jsxs)("p",{children:[t," ="," ",n.map((t,e)=>{let[n,i]=t;return(0,r.jsxs)(u.Fragment,{children:[e>0&&(0,r.jsx)(r.Fragment,{children:"\xd7"}),n,i>1&&(0,r.jsx)("sup",{children:i})]},"".concat(n,"-").concat(i))})]})]})};var h=!0,p=a},5392:function(t,e,n){"use strict";n.d(e,{ah:function(){return i}});var r=n(2784);let u=r.createContext({});function i(t){let e=r.useContext(u);return r.useMemo(()=>"function"==typeof t?t(e):{...e,...t},[e,t])}}},function(t){t.O(0,[774,888,179],function(){return t(t.s=536)}),_N_E=t.O()}]);