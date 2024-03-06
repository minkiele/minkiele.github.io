(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[804],{8441:function(e,n,t){Promise.resolve().then(t.bind(t,7317))},5514:function(e,n,t){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=t(7653),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(e,n,t){var r,s={},u=null,c=null;for(r in void 0!==t&&(u=""+t),void 0!==n.key&&(u=""+n.key),void 0!==n.ref&&(c=n.ref),n)i.call(n,r)&&!a.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:o,type:e,key:u,ref:c,props:s,_owner:l.current}}n.Fragment=s,n.jsx=u,n.jsxs=u},5001:function(e,n,t){"use strict";e.exports=t(5514)},7317:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});var r=t(7573),o=t(7653);let s=Symbol("P"),i=Symbol("D"),l=[];function a(e){let n=[i];if(e.length){let t=e[e.length-1];for(let e=0;e<t.length-1;e+=1)n.push(t[e]===t[e+1]?s:i);n.push(i)}e.push(n)}for(let e=0;e<256;e+=1)a(l);var u=t(4090),c=t.n(u),h=t(5001),f=t(58);function d(e){let n=Object.assign({p:"p",em:"em"},(0,f.ah)(),e.components);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(n.p,{children:["Tartaglia's triangle main feature is showing the binomial coefficients for the expression\n(a + b)^n where n is the (n + 1)th row of the triangle. If n was 3 then the 4th row would\ngo 1-3-3-1 so you would have (a + b)^3 = a^3 + 3a^2",(0,h.jsx)(n.em,{children:"b + 3a"}),"b^2 + b^3. If n was 4 then you\nwould have (a + b)^4 = a^4 + 4a^3",(0,h.jsx)(n.em,{children:"b + 6a^2"}),"b^2 + 4a*b^3 + b^4; and the list goes on."]}),"\n",(0,h.jsx)(n.p,{children:"Tartaglia's triangle also shows a graphic representation of the Fibonacci sequence,\nbut you have to squint your eyes, skew the device and look to the diagonals."})]})}var g=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,f.ah)(),e.components);return n?(0,h.jsx)(n,Object.assign({},e,{children:(0,h.jsx)(d,e)})):d(e)},p=()=>{let[e,n]=(0,o.useState)(4),t=(0,o.useMemo)(()=>(function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"*";return(function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"*";return e.map(e=>(function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"*";return e.map(e=>e===i?t:n).join("")})(e,n,t))})(e,n,t).join("\n")})(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:256,n=[];for(let t=0;t<e;t+=1)a(n);return n}(2**e)," ","*"),[e]);return(0,r.jsxs)("div",{children:[(0,r.jsx)(g,{}),(0,r.jsxs)("fieldset",{children:[(0,r.jsx)("legend",{children:"Generator controls"}),(0,r.jsxs)("label",{htmlFor:"newTriangles",children:["This will generate 2",(0,r.jsx)("sup",{children:e})," (",2**e,") rows"]})," ",(0,r.jsx)("input",{id:"newTriangles",type:"number",onChange:e=>{let t=parseInt(e.target.value);t>=0&&n(t)},value:e})]}),(0,r.jsx)("pre",{className:c().triangles_render,children:t})]})}},4090:function(e){e.exports={triangles_render:"Triangles_triangles_render___Dwwx"}},58:function(e,n,t){"use strict";t.d(n,{ah:function(){return s}});var r=t(7653);let o=r.createContext({});function s(e){let n=r.useContext(o);return r.useMemo(()=>"function"==typeof e?e(n):{...n,...e},[n,e])}}},function(e){e.O(0,[293,997,744],function(){return e(e.s=8441)}),_N_E=e.O()}]);