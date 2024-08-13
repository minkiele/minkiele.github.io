(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[254],{6070:function(e,n,t){Promise.resolve().then(t.bind(t,775))},7129:function(e,n){var t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var i=typeof t;if("string"===i||"number"===i)e.push(t);else if(Array.isArray(t)){if(t.length){var a=o.apply(null,t);a&&e.push(a)}}else if("object"===i){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var l in t)r.call(t,l)&&t[l]&&e.push(l)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0!==(t=(function(){return o}).apply(n,[]))&&(e.exports=t)}()},5514:function(e,n,t){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=t(7653),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,i={},c=null,u=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(u=n.ref),n)a.call(n,r)&&!s.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:o,type:e,key:c,ref:u,props:i,_owner:l.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},5001:function(e,n,t){"use strict";e.exports=t(5514)},537:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(7653),o=t(1301);let i=t.n(o)().className;var a=t(288),l=t.n(a);function s(e){let{children:n}=e;return(0,r.createElement)("span",{className:"".concat(i," ").concat(l().emoji)},n)}},775:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return R}});var r=t(7573),o=t(7653),i=t(2999),a=t.n(i),l=t(5001),s=t(58);function c(e){let n=Object.assign({p:"p"},(0,s.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"Implementation of Tic Tac Toe, 1 vs 1 and 1 vs PC.\nPlayer 1 plays always with ❌ while Player 2 and PC play with ⭕."}),"\n",(0,l.jsx)(n.p,{children:"There's a rudimentary algorithm to try and determine the next move by the PC.\nAlso the waiting between moves is just aesthetic."}),"\n",(0,l.jsx)(n.p,{children:"There's also a a little support for accessibility, with aria labels\nand announcements of PC plays."})]})}var u=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(c,e)})):c(e)},d=t(7129),_=t.n(d),f=t(8485),h=t(5344),p=t(8532);let m=Symbol("❌"),b=Symbol("⭕️"),v=function(){let{sign:e=m,side:n=3,...t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{vsPc:!1,movePc:!1,...t,matrix:(0,f.Z)(()=>(0,h.Z)(null,n),n),sign:e,side:n,victoryCoords:void 0,announce:void 0}},g=e=>[...(0,f.Z)(n=>(0,f.Z)(e=>[n,e],e),e),...(0,f.Z)(n=>(0,f.Z)(e=>[e,n],e),e),(0,f.Z)(e=>[e,e],e),(0,f.Z)(n=>[e-n-1,n],e)],x=e=>{let n=g(e.length);e:for(let t=0;t<n.length;t+=1){let[[r,o]]=n[t];if(null!=e[r][o]){for(let r=1;r<n[t].length;r+=1){let[o,i]=n[t][r-1],[a,l]=n[t][r];if(e[o][i]!==e[a][l])continue e}return n[t]}}},y=e=>{if(e.length<2)return 2;{let[[n,t],[r,o]]=e;return t===o?0:n===r?2:n===t?1:3}},j=(e,n,t,r)=>(null==t?void 0:t.some(t=>{let[r,o]=t;return r===e&&o===n}))?r[y(t)]:void 0,k=(e,n,t)=>g(n.length).filter(r=>{let[o,i]=r.reduce((t,r)=>{let[o,i]=r;return n[o][i]===e?[t[0]+1,t[1]]:null==n[o][i]?[t[0],t[1]+1]:t},[0,0]);return t(o,i)}),T=e=>e[Math.floor(Math.random()*e.length)],w=(e,n)=>{let t=k(e,n,(e,t)=>e===n.length-1&&1===t);if(t.length>0)return T(t).find(e=>{let[t,r]=e;return null==n[t][r]})},Z=(e,n,t)=>e===n||t-1-n===e||e-t-1===n,N=(e,n)=>{let t=k(e,n,(e,t)=>1===e&&t===n.length-1),r=[];for(let e=0;e<n.length;e+=1)for(let o=0;o<n[e].length;o+=1){let i=t.reduce((t,r)=>r.some(t=>{let[r,i]=t;return e==r&&o===i&&null==n[r][i]})?t+1:t,0);i>0&&r.push({coords:[e,o],ranking:i,diagonal:Z(e,o,n.length)})}if(r.sort((0,p.Z)((e,n)=>e.ranking>=n.ranking||e.ranking===n.ranking&&e.diagonal)),r.length>0)return T(r.filter(e=>{let{ranking:n,diagonal:t}=e;return n===r[0].ranking&&(!r[0].diagonal||t)}))},P=e=>e.reduce((e,n,t)=>[...e,...n.reduce((e,n,r)=>null==n?[...e,[t,r]]:e,[])],[]),C=(e,n)=>[...e].sort((0,p.Z)(()=>.5>Math.random())).find(e=>{let[t,r]=e;return null==n[t][r]}),S=e=>e.reduce((e,n)=>e+n.reduce((e,n)=>null!=n?e+1:e,0),0)===e.length&&e[1][1]===b&&(null!=e[0][0]&&e[0][0]===e[e.length-1][e.length-1]||null!=e[e.length-1][0]&&e[e.length-1][0]===e[0][e.length-1]),E=e=>{let n=P(e);if(n.length===e.length**2)return T(n);let t=w(b,e);if(t)return t;let r=w(m,e);if(null!=r)return r;if(e.length%2==1&&n.find(e=>{let[n,t]=e;return 1===n&&1===t}))return[1,1];if(3===e.length){if(S(e))return C([[0,1],[1,0],[1,2],[2,1]],e);let n=N(b,e),t=N(m,e);if(null!=n&&null!=t&&t.ranking>n.ranking)return t.coords;if(null!=n)return n.coords;if(null!=t)return t.coords}if(n.length>0)return T(n)},O=(e,n,t,r,o)=>{if(0===e)return n;if(e===o-1)return r;if(e===(o-1)/2)return t;let i=(e+1)%10;return"".concat(e+1).concat(i<1||i>3||e>9&&e<13?"th":1===i?"st":2===i?"nd":"rd")},F=(e,n,t)=>{let r=O(e,"top","center","bottom",t),o=O(n,"left","center","right",t);return"center"===r&&r===o?"central":"".concat(r,"-").concat(o)},I=()=>(0,o.useReducer)((e,n)=>{switch(n.type){case"mark":if(null==e.matrix[n.row][n.col]&&null==e.victoryCoords){let t=[...e.matrix.slice(0,n.row),[...e.matrix[n.row].slice(0,n.col),e.sign,...e.matrix[n.row].slice(n.col+1)],...e.matrix.slice(n.row+1)],r=x(t),o=null==r?e.sign===m?b:m:e.sign;return{...e,matrix:t,sign:o,victoryCoords:r,movePc:e.vsPc&&!e.movePc,announce:e.vsPc&&e.movePc?[n.row,n.col]:void 0}}return e;case"vspc":return{...e,vsPc:n.enabled,movePc:n.enabled&&null==e.victoryCoords&&e.sign===b};case"reset":return v({sign:n.sign,side:n.side,vsPc:e.vsPc,movePc:e.vsPc&&n.sign===b});case"unannounce":return{...e,announce:void 0};default:return e}},v());var M=t(537),R=()=>{let[{matrix:e,victoryCoords:n,sign:t,vsPc:i,movePc:l,announce:s,side:c},d]=I(),f=(e,n)=>()=>{l||d({type:"mark",row:e,col:n})},h=e=>()=>{d({type:"reset",side:c,sign:e})},p=e=>()=>{d({type:"vspc",enabled:e})},v=(0,o.useCallback)((e,t)=>j(e,t,n,["".concat(a().board_strike," ").concat(a().board_strike__0),"".concat(a().board_strike," ").concat(a().board_strike__1),"".concat(a().board_strike," ").concat(a().board_strike__2),"".concat(a().board_strike," ").concat(a().board_strike__3)]),[n]),g=(0,o.useMemo)(()=>e.some(e=>e.some(e=>null==e)),[e]);(0,o.useEffect)(()=>{if(l){let n=setTimeout(()=>{let n=E(e);null!=n&&d({type:"mark",row:n[0],col:n[1]})},1e3);return()=>{clearTimeout(n)}}},[l,e,d]),(0,o.useEffect)(()=>{if(s){let e=setTimeout(()=>{d({type:"unannounce"})},2e3);return()=>{clearTimeout(e)}}},[s,d]);let x=(0,o.useMemo)(()=>(0,r.jsx)("span",{className:a().board_sign,children:(0,r.jsx)("span",{className:a().board_empty,"aria-hidden":!0,children:(0,r.jsx)(M.Z,{children:"♻️"})})}),[]);return(0,r.jsxs)("div",{children:[(0,r.jsx)(u,{}),(0,r.jsx)("div",{className:a().board,children:e.map((e,o)=>(0,r.jsx)("div",{className:a().board_row,children:e.map((e,i)=>(0,r.jsxs)("div",{className:_()({[a().board_col]:!0,[v(o,i)]:v(o,i)}),children:[null==e&&(null!=n?x:(0,r.jsx)("button",{type:"button",className:a().board_button,onClick:f(o,i),"aria-label":"Mark with ".concat(t.description," the ").concat(F(o,i,c)," space"),children:x})),null!=e&&(0,r.jsx)("span",{className:a().board_sign,"aria-label":"".concat(F(o,i,c)," space marked with  ").concat(e.description),children:(0,r.jsx)(M.Z,{children:e.description})})]},"col-".concat(i)))},"row-".concat(o)))}),null!=s&&(0,r.jsxs)("p",{role:"alert","aria-live":"assertive",className:"sr-only",children:["PC marked with ",(0,r.jsx)(M.Z,{children:"⭕"})," the ",F(...s,c)," space"]}),n?(0,r.jsxs)("p",{role:"alert","aria-live":"assertive",children:[(0,r.jsx)("span",{className:a().board_sign,children:t.description})," won!"]}):!g&&(0,r.jsx)("p",{role:"alert","aria-live":"assertive",children:"Draw game, no moves possible."}),(0,r.jsxs)("fieldset",{children:[(0,r.jsx)("legend",{children:"Settings"}),"Player 1 (",(0,r.jsx)("span",{className:a().board_sign,children:(0,r.jsx)(M.Z,{children:"❌"})}),") Vs."," ",(0,r.jsx)("input",{type:"radio",name:"vspc",id:"vspcFalse",value:"false",onChange:p(!1),checked:!i}),(0,r.jsx)("label",{htmlFor:"vspcFalse",children:"Player 2 "})," ",(0,r.jsx)("input",{type:"radio",name:"vspc",id:"vspcTrue",value:"true",onChange:p(!0),checked:i}),(0,r.jsx)("label",{htmlFor:"vspcTrue",children:"PC "})," (",(0,r.jsx)("span",{className:a().board_sign,children:(0,r.jsx)(M.Z,{children:"⭕"})}),")",(0,r.jsx)("br",{}),(0,r.jsx)("label",{htmlFor:"side",children:"Size of the grid: "}),(0,r.jsx)("input",{type:"number",name:"side",id:"side",onChange:e=>{let n=parseInt(e.target.value);d({type:"reset",side:isNaN(n)||n<1?3:n,sign:t})},value:c}),"x",c,(0,r.jsx)("br",{}),(0,r.jsx)("button",{type:"button",onClick:h(m),children:"New match"})," ",(0,r.jsxs)("button",{type:"button",onClick:h(b),children:["New match, but starts ",(0,r.jsx)("span",{className:a().board_sign,children:(0,r.jsx)(M.Z,{children:"⭕"})})]})]})]})}},288:function(e){e.exports={emoji:"Emoji_emoji__KdCI2"}},2999:function(e){e.exports={board:"TicTacToe_board__PuRk4",board_button:"TicTacToe_board_button__4WWSO",board_col:"TicTacToe_board_col__1o1K_",board_row:"TicTacToe_board_row__XQdrv",board_empty:"TicTacToe_board_empty__hp7to",board_strike:"TicTacToe_board_strike__4u3wQ",board_strike__0:"TicTacToe_board_strike__0__eI2M_",board_strike__1:"TicTacToe_board_strike__1__SDpeI",board_strike__2:"TicTacToe_board_strike__2__TxGHa",board_strike__3:"TicTacToe_board_strike__3__fJUk6",board_sign:"TicTacToe_board_sign__7bsf_"}},1301:function(e){e.exports={style:{fontFamily:"'__Noto_Emoji_b4d0e0', '__Noto_Emoji_Fallback_b4d0e0'",fontStyle:"normal"},className:"__className_b4d0e0"}},58:function(e,n,t){"use strict";t.d(n,{ah:function(){return i}});var r=t(7653);let o=r.createContext({});function i(e){let n=r.useContext(o);return r.useMemo(()=>"function"==typeof e?e(n):{...n,...e},[n,e])}},8532:function(e,n,t){"use strict";var r=(0,t(9456).Z)(function(e){return function(n,t){return e(n,t)?-1:e(t,n)?1:0}});n.Z=r},9456:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(5895);function o(e){return function n(t){return 0==arguments.length||(0,r.Z)(t)?n:e.apply(this,arguments)}}},7185:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(9456),o=t(5895);function i(e){return function n(t,i){switch(arguments.length){case 0:return n;case 1:return(0,o.Z)(t)?n:(0,r.Z)(function(n){return e(t,n)});default:return(0,o.Z)(t)&&(0,o.Z)(i)?n:(0,o.Z)(t)?(0,r.Z)(function(n){return e(n,i)}):(0,o.Z)(i)?(0,r.Z)(function(n){return e(t,n)}):e(t,i)}}}},5895:function(e,n,t){"use strict";function r(e){return null!=e&&"object"==typeof e&&!0===e["@@functional/placeholder"]}t.d(n,{Z:function(){return r}})},5344:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(7185),o=(0,t(9456).Z)(function(e){return function(){return e}}),i=t(8485),a=(0,r.Z)(function(e,n){return(0,i.Z)(o(e),n)})},8485:function(e,n,t){"use strict";var r=(0,t(7185).Z)(function(e,n){var t,r=Number(n),o=0;if(r<0||isNaN(r))throw RangeError("n must be a non-negative number");for(t=Array(r);o<r;)t[o]=e(o),o+=1;return t});n.Z=r}},function(e){e.O(0,[293,997,744],function(){return e(e.s=6070)}),_N_E=e.O()}]);