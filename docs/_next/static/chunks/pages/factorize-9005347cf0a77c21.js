(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[635],{536:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/factorize",function(){return n(7104)}])},5384:function(t,e,n){"use strict";var r;n.d(e,{H:function(){return r}}),function(t){function getPrimesUpTo(t){let e=[];for(let n=3;n<=t;n+=2){let t=!1,r=n;for(let u=0;!t&&u<e.length&&e[u]<r;u+=1){let i=n%e[u];0===i?t=!0:r=(n-i)/e[u]}t||e.push(n)}return t>=2&&e.unshift(2),e}function sortNumbers(t,e){return t-e}t.sum=function(t,e,n){let r=0;for(let u=t;u<=e;u+=1)r+=n(u,t,e);return r},t.getPrimesUpTo=getPrimesUpTo,t.getPrimesRateUpTo=function(t){return getPrimesUpTo(t).length/t*100},t.isPrime=function(t){let e=t;if(t<2||t%2==0)return!1;for(let n=3;n<e;n+=2){let r=t%n;if(0===r)return!1;e=(t-r)/n}return!0},t.factorize=function(t){let e=[],n=t,r=2,u=t;for(;r<n;){let t=u%r;0===t?(e.push(r),u/=r,n=u):(n=(u-t)/r,r+=2===r?1:2)}return r>=n&&e.push(u),e},t.factorizeInputs=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[2,3],n=Math.max(...e),r=[],u=Array.from(t).sort(sortNumbers);for(let t of u){let u=[],i=t,c=2,o=t,s=0;for(;s<e.length&&c<i;){c=e[s];let t=o%c;0===t?(u.push(c),o/=c,i=o):(i=(o-t)/c,s+=1)}for(;c<i;){let t=o%c;0===t?(u.push(c),c>n&&(e.push(c),n=c),o/=c,i=o):(i=(o-t)/c,c+=2===c?1:2)}c>=i&&(u.push(o),c>n&&(e.push(c),n=c)),r.push({input:t,factors:u})}return r.sort((t,e)=>{let{input:n}=t,{input:r}=e;return sortNumbers(n,r)}).map(t=>{let{factors:e}=t;return e})},t.range=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=[];for(let u=0;u<t;u+=1)r.push(u*n+e);return r},t.factorial=t=>{let e=1;for(let n=2;n<=t;n+=1)e*=n;return e}}(r||(r={}))},7104:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return F},default:function(){return factorize}});var r=n(2322),u=n(2784),i=n(6913),c=n(3680),o=n(8478),s=n(766),a=n(7226),f=n(9371),l=function(){function XReduceBy(t,e,n,r){this.valueFn=t,this.valueAcc=e,this.keyFn=n,this.xf=r,this.inputs={}}return XReduceBy.prototype["@@transducer/init"]=f.Z.init,XReduceBy.prototype["@@transducer/result"]=function(t){var e;for(e in this.inputs)if((0,s.Z)(e,this.inputs)&&(t=this.xf["@@transducer/step"](t,this.inputs[e]))["@@transducer/reduced"]){t=t["@@transducer/value"];break}return this.inputs=null,this.xf["@@transducer/result"](t)},XReduceBy.prototype["@@transducer/step"]=function(t,e){var n=this.keyFn(e);return this.inputs[n]=this.inputs[n]||[n,this.valueAcc],this.inputs[n][1]=this.valueFn(this.inputs[n][1],e),t},XReduceBy}(),p=(0,c.Z)(4,[],function(t,e,n,r){return new l(t,e,n,r)}),h=(0,c.Z)(4,[],(0,o.Z)([],p,function(t,e,n,r){return(0,a.Z)(function(r,u){var c=n(u),o=t((0,s.Z)(c,r)?r[c]:(0,i.Z)(e,[],[],!1),u);return o&&o["@@transducer/reduced"]?r&&r["@@transducer/reduced"]?r:{"@@transducer/value":r,"@@transducer/reduced":!0}:(r[c]=o,r)},{},r)}))(function(t,e){return t+1},0),d=n(9757),Z=(0,d.Z)(function(t){return t}),y=n(6391);function _pipe(t,e){return function(){return e.call(this,t.apply(this,arguments))}}var g=n(1924),v=(0,g.Z)(a.Z),m=n(704);function _checkForMethod(t,e){return function(){var n=arguments.length;if(0===n)return e();var r=arguments[n-1];return(0,m.Z)(r)||"function"!=typeof r[t]?e.apply(this,arguments):r[t].apply(r,Array.prototype.slice.call(arguments,0,n-1))}}var _=(0,g.Z)(_checkForMethod("slice",function(t,e,n){return Array.prototype.slice.call(n,t,e)})),x=(0,d.Z)(_checkForMethod("tail",_(1,1/0))),A=(0,d.Z)(function(t){var e=[];for(var n in t)(0,s.Z)(n,t)&&(e[e.length]=[n,t[n]]);return e}),j=n(5384);let b=function(){if(0==arguments.length)throw Error("pipe requires at least one argument");return(0,y.Z)(arguments[0].length,v(_pipe,arguments[0],x(arguments)))}(j.H.factorize,h(Z),A);var w=n(5392);function _createMdxContent(t){let e=Object.assign({p:"p"},(0,w.ah)(),t.components);return(0,r.jsx)(e.p,{children:"A little function that factorizes a natural input > than 1"})}var README=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,w.ah)(),t.components);return e?(0,r.jsx)(e,Object.assign({},t,{children:(0,r.jsx)(_createMdxContent,t)})):_createMdxContent(t)},F=!0,factorize=()=>{let[t,e]=(0,u.useState)(2),n=(0,u.useMemo)(()=>b(t),[t]);return(0,r.jsxs)("div",{children:[(0,r.jsx)(README,{}),(0,r.jsxs)("fieldset",{children:[(0,r.jsx)("legend",{children:"Factorize"}),(0,r.jsx)("label",{htmlFor:"input",children:"Input number: "}),(0,r.jsx)("input",{id:"input",name:"input",type:"number",value:t,onChange:t=>{let n=parseInt(t.target.value);e(isNaN(n)||n<2?2:n)}})]}),(0,r.jsxs)("p",{children:[t," ="," ",n.map((t,e)=>{let[n,i]=t;return(0,r.jsxs)(u.Fragment,{children:[e>0&&(0,r.jsx)(r.Fragment,{children:"\xd7"}),n,i>1&&(0,r.jsx)("sup",{children:i})]},"".concat(n,"-").concat(i))})]})]})}},5392:function(t,e,n){"use strict";n.d(e,{ah:function(){return useMDXComponents}});var r=n(2784);let u=r.createContext({});function useMDXComponents(t){let e=r.useContext(u);return r.useMemo(()=>"function"==typeof t?t(e):{...e,...t},[e,t])}},6913:function(t,e,n){"use strict";n.d(e,{Z:function(){return function _clone(t,e,n,u){var copy=function(r){for(var i=e.length,c=0;c<i;){if(t===e[c])return n[c];c+=1}for(var o in e[c]=t,n[c]=r,t)t.hasOwnProperty(o)&&(r[o]=u?_clone(t[o],e,n,!0):t[o]);return r};switch((0,r.Z)(t)){case"Object":return copy(Object.create(Object.getPrototypeOf(t)));case"Array":return copy([]);case"Date":return new Date(t.valueOf());case"RegExp":return new RegExp(t.source,(t.global?"g":"")+(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.sticky?"y":"")+(t.unicode?"u":""));case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":return t.slice();default:return t}}}});var r=n(2406)},1924:function(t,e,n){"use strict";n.d(e,{Z:function(){return _curry3}});var r=n(9757),u=n(5652),i=n(8471);function _curry3(t){return function f3(e,n,c){switch(arguments.length){case 0:return f3;case 1:return(0,i.Z)(e)?f3:(0,u.Z)(function(n,r){return t(e,n,r)});case 2:return(0,i.Z)(e)&&(0,i.Z)(n)?f3:(0,i.Z)(e)?(0,u.Z)(function(e,r){return t(e,n,r)}):(0,i.Z)(n)?(0,u.Z)(function(n,r){return t(e,n,r)}):(0,r.Z)(function(r){return t(e,n,r)});default:return(0,i.Z)(e)&&(0,i.Z)(n)&&(0,i.Z)(c)?f3:(0,i.Z)(e)&&(0,i.Z)(n)?(0,u.Z)(function(e,n){return t(e,n,c)}):(0,i.Z)(e)&&(0,i.Z)(c)?(0,u.Z)(function(e,r){return t(e,n,r)}):(0,i.Z)(n)&&(0,i.Z)(c)?(0,u.Z)(function(n,r){return t(e,n,r)}):(0,i.Z)(e)?(0,r.Z)(function(e){return t(e,n,c)}):(0,i.Z)(n)?(0,r.Z)(function(n){return t(e,n,c)}):(0,i.Z)(c)?(0,r.Z)(function(r){return t(e,n,r)}):t(e,n,c)}}}}},function(t){t.O(0,[774,888,179],function(){return t(t.s=536)}),_N_E=t.O()}]);