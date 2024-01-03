(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[254],{446:function(e,t){var r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function classNames(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var a=classNames.apply(null,r);a&&e.push(a)}}else if("object"===o){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}}return e.join(" ")}e.exports?(classNames.default=classNames,e.exports=classNames):void 0!==(r=(function(){return classNames}).apply(t,[]))&&(e.exports=r)}()},4970:function(e,t,r){Promise.resolve().then(r.bind(r,2696))},3746:function(e,t,r){"use strict";r.d(t,{H:function(){return getEmojiStyles}});var n=r(8748),o=r.n(n);let getEmojiStyles=(e,t)=>e.reduce((e,r)=>({...e,[r]:"".concat(t[r]," ").concat(o().className)}),{})},2696:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return TicTacToe_TicTacToe}});var n=r(7573),o=r(7653),a=r(1914),i=r.n(a),s=r(5505),l=r(7953);function _createMdxContent(e){let t=Object.assign({p:"p"},(0,l.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Implementation of Tic Tac Toe, 1 vs 1 and 1 vs PC.\nPlayer 1 plays always with ❌ while Player 2 and PC play with ⭕."}),"\n",(0,s.jsx)(t.p,{children:"There's a rudimentary algorithm to try and determine the next move by the PC.\nAlso the waiting between moves is just aesthetic."}),"\n",(0,s.jsx)(t.p,{children:"There's also a a little support for accessibility, with aria labels\nand announcements of PC plays."})]})}var README=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(_createMdxContent,e)})):_createMdxContent(e)},c=r(446),u=r.n(c),d=r(2597),_=r(6349),f=r(3401);let p=Symbol("❌"),h=Symbol("⭕️"),getInitialState=function(){let{sign:e=p,side:t=3,...r}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{vsPc:!1,movePc:!1,...r,matrix:(0,f.Z)(()=>(0,_.Z)(null,t),t),sign:e,side:t,victoryCoords:void 0,announce:void 0}},getVictoryTests=e=>[...(0,f.Z)(t=>(0,f.Z)(e=>[t,e],e),e),...(0,f.Z)(t=>(0,f.Z)(e=>[e,t],e),e),(0,f.Z)(e=>[e,e],e),(0,f.Z)(t=>[e-t-1,t],e)],getVictoryCoords=e=>{let t=getVictoryTests(e.length);e:for(let r=0;r<t.length;r+=1){let[[n,o]]=t[r];if(null!=e[n][o]){for(let n=1;n<t[r].length;n+=1){let[o,a]=t[r][n-1],[i,s]=t[r][n];if(e[o][a]!==e[i][s])continue e}return t[r]}}},getStrikeDirection=e=>{if(e.length<2)return 2;{let[[t,r],[n,o]]=e;return r===o?0:t===n?2:t===r?1:3}},getStrikeData=(e,t,r,n)=>(null==r?void 0:r.some(r=>{let[n,o]=r;return n===e&&o===t}))?n[getStrikeDirection(r)]:void 0,getChanceCoords=(e,t,r)=>getVictoryTests(t.length).filter(n=>{let[o,a]=n.reduce((r,n)=>{let[o,a]=n;return t[o][a]===e?[r[0]+1,r[1]]:null==t[o][a]?[r[0],r[1]+1]:r},[0,0]);return r(o,a)}),pickOne=e=>e[Math.floor(Math.random()*e.length)],getAboutToWinCoord=(e,t)=>{let r=getChanceCoords(e,t,(e,r)=>e===t.length-1&&1===r);if(r.length>0){let e=pickOne(r);return e.find(e=>{let[r,n]=e;return null==t[r][n]})}},isDiagonalCell=(e,t,r)=>e===t||r-1-t===e||e-r-1===t,getPossibilityCoord=(e,t)=>{let r=getChanceCoords(e,t,(e,r)=>1===e&&r===t.length-1),n=[];for(let e=0;e<t.length;e+=1)for(let o=0;o<t[e].length;o+=1){let a=r.reduce((r,n)=>n.some(r=>{let[n,a]=r;return e==n&&o===a&&null==t[n][a]})?r+1:r,0);a>0&&n.push({coords:[e,o],ranking:a,diagonal:isDiagonalCell(e,o,t.length)})}if(n.sort((0,d.Z)((e,t)=>e.ranking>=t.ranking||e.ranking===t.ranking&&e.diagonal)),n.length>0){let e=n.filter(e=>{let{ranking:t,diagonal:r}=e;return t===n[0].ranking&&(!n[0].diagonal||r)});return pickOne(e)}},getEmptyCoords=e=>e.reduce((e,t,r)=>[...e,...t.reduce((e,t,n)=>null==t?[...e,[r,n]]:e,[])],[]),pickRandomEmptyFromList=(e,t)=>[...e].sort((0,d.Z)(()=>.5>Math.random())).find(e=>{let[r,n]=e;return null==t[r][n]}),inDiagonalParadox=e=>{let t=e.reduce((e,t)=>e+t.reduce((e,t)=>null!=t?e+1:e,0),0);return t===e.length&&e[1][1]===h&&(null!=e[0][0]&&e[0][0]===e[e.length-1][e.length-1]||null!=e[e.length-1][0]&&e[e.length-1][0]===e[0][e.length-1])},pickEmptyCoordinate=e=>{let t=getEmptyCoords(e);if(t.length===e.length**2)return pickOne(t);let r=getAboutToWinCoord(h,e);if(r)return r;let n=getAboutToWinCoord(p,e);if(null!=n)return n;if(e.length%2==1&&t.find(e=>{let[t,r]=e;return 1===t&&1===r}))return[1,1];if(3===e.length){if(inDiagonalParadox(e))return pickRandomEmptyFromList([[0,1],[1,0],[1,2],[2,1]],e);let t=getPossibilityCoord(h,e),r=getPossibilityCoord(p,e);if(null!=t&&null!=r&&r.ranking>t.ranking)return r.coords;if(null!=t)return t.coords;if(null!=r)return r.coords}if(t.length>0)return pickOne(t)},getOrdinalLabel=(e,t,r,n,o)=>{if(0===e)return t;if(e===o-1)return n;if(e===(o-1)/2)return r;let a=(e+1)%10;return"".concat(e+1).concat(a<1||a>3||e>9&&e<13?"th":1===a?"st":2===a?"nd":"rd")},getAriaLabel=(e,t,r)=>{let n=getOrdinalLabel(e,"top","center","bottom",r),o=getOrdinalLabel(t,"left","center","right",r);return"center"===n&&n===o?"central":"".concat(n,"-").concat(o)},useTicTacToe=()=>(0,o.useReducer)((e,t)=>{switch(t.type){case"mark":if(null==e.matrix[t.row][t.col]&&null==e.victoryCoords){let r=[...e.matrix.slice(0,t.row),[...e.matrix[t.row].slice(0,t.col),e.sign,...e.matrix[t.row].slice(t.col+1)],...e.matrix.slice(t.row+1)],n=getVictoryCoords(r),o=null==n?e.sign===p?h:p:e.sign;return{...e,matrix:r,sign:o,victoryCoords:n,movePc:e.vsPc&&!e.movePc,announce:e.vsPc&&e.movePc?[t.row,t.col]:void 0}}return e;case"vspc":return{...e,vsPc:t.enabled,movePc:t.enabled&&null==e.victoryCoords&&e.sign===h};case"reset":return getInitialState({sign:t.sign,side:t.side,vsPc:e.vsPc,movePc:e.vsPc&&t.sign===h});case"unannounce":return{...e,announce:void 0};default:return e}},getInitialState());var g=r(3746);let m=(0,g.H)(["board_sign"],i());var TicTacToe_TicTacToe=()=>{let[{matrix:e,victoryCoords:t,sign:r,vsPc:a,movePc:s,announce:l,side:c},d]=useTicTacToe(),handleMark=(e,t)=>()=>{s||d({type:"mark",row:e,col:t})},handleResetSign=e=>()=>{d({type:"reset",side:c,sign:e})},handleVsPc=e=>()=>{d({type:"vspc",enabled:e})},_=(0,o.useCallback)((e,r)=>getStrikeData(e,r,t,["".concat(i().board_strike," ").concat(i().board_strike__0),"".concat(i().board_strike," ").concat(i().board_strike__1),"".concat(i().board_strike," ").concat(i().board_strike__2),"".concat(i().board_strike," ").concat(i().board_strike__3)]),[t]),f=(0,o.useMemo)(()=>e.some(e=>e.some(e=>null==e)),[e]);(0,o.useEffect)(()=>{if(s){let t=setTimeout(()=>{let t=pickEmptyCoordinate(e);null!=t&&d({type:"mark",row:t[0],col:t[1]})},1e3);return()=>{clearTimeout(t)}}},[s,e,d]),(0,o.useEffect)(()=>{if(l){let e=setTimeout(()=>{d({type:"unannounce"})},2e3);return()=>{clearTimeout(e)}}},[l,d]);let g=(0,o.useMemo)(()=>(0,n.jsx)("span",{className:m.board_sign,children:(0,n.jsx)("span",{className:i().board_empty,"aria-hidden":!0,children:"♻️"})}),[]);return(0,n.jsxs)("div",{children:[(0,n.jsx)(README,{}),(0,n.jsx)("div",{className:i().board,children:e.map((e,o)=>(0,n.jsx)("div",{className:i().board_row,children:e.map((e,a)=>(0,n.jsxs)("div",{className:u()({[i().board_col]:!0,[_(o,a)]:_(o,a)}),children:[null==e&&(null!=t?g:(0,n.jsx)("button",{type:"button",className:i().board_button,onClick:handleMark(o,a),"aria-label":"Mark with ".concat(r.description," the ").concat(getAriaLabel(o,a,c)," space"),children:g})),null!=e&&(0,n.jsx)("span",{className:m.board_sign,"aria-label":"".concat(getAriaLabel(o,a,c)," space marked with  ").concat(e.description),children:e.description})]},"col-".concat(a)))},"row-".concat(o)))}),null!=l&&(0,n.jsxs)("p",{role:"alert","aria-live":"assertive",className:"sr-only",children:["PC marked with ⭕ the ",getAriaLabel(...l,c)," space"]}),t?(0,n.jsxs)("p",{role:"alert","aria-live":"assertive",children:[(0,n.jsx)("span",{className:m.board_sign,children:r.description})," won!"]}):!f&&(0,n.jsx)("p",{role:"alert","aria-live":"assertive",children:"Draw game, no moves possible."}),(0,n.jsxs)("fieldset",{children:[(0,n.jsx)("legend",{children:"Settings"}),"Player 1 (",(0,n.jsx)("span",{className:m.board_sign,children:"❌"}),") Vs."," ",(0,n.jsx)("input",{type:"radio",name:"vspc",id:"vspcFalse",value:"false",onChange:handleVsPc(!1),checked:!a}),(0,n.jsx)("label",{htmlFor:"vspcFalse",children:"Player 2 "})," ",(0,n.jsx)("input",{type:"radio",name:"vspc",id:"vspcTrue",value:"true",onChange:handleVsPc(!0),checked:a}),(0,n.jsx)("label",{htmlFor:"vspcTrue",children:"PC "})," (",(0,n.jsx)("span",{className:m.board_sign,children:"⭕"}),")",(0,n.jsx)("br",{}),(0,n.jsx)("label",{htmlFor:"side",children:"Size of the grid: "}),(0,n.jsx)("input",{type:"number",name:"side",id:"side",onChange:e=>{let t=parseInt(e.target.value);d({type:"reset",side:isNaN(t)||t<1?3:t,sign:r})},value:c}),"x",c,(0,n.jsx)("br",{}),(0,n.jsx)("button",{type:"button",onClick:handleResetSign(p),children:"New match"})," ",(0,n.jsxs)("button",{type:"button",onClick:handleResetSign(h),children:["New match, but starts ",(0,n.jsx)("span",{className:m.board_sign,children:"⭕"})]})]})]})}},1914:function(e){e.exports={board:"TicTacToe_board__PuRk4",board_button:"TicTacToe_board_button__4WWSO",board_col:"TicTacToe_board_col__1o1K_",board_row:"TicTacToe_board_row__XQdrv",board_empty:"TicTacToe_board_empty__hp7to",board_strike:"TicTacToe_board_strike__4u3wQ",board_strike__0:"TicTacToe_board_strike__0__eI2M_",board_strike__1:"TicTacToe_board_strike__1__SDpeI",board_strike__2:"TicTacToe_board_strike__2__TxGHa",board_strike__3:"TicTacToe_board_strike__3__fJUk6",board_sign:"TicTacToe_board_sign__7bsf_"}},8748:function(e){e.exports={style:{fontFamily:"'__Noto_Emoji_b4d0e0', '__Noto_Emoji_Fallback_b4d0e0'",fontStyle:"normal"},className:"__className_b4d0e0"}},8294:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(7653),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,r){var n,a={},c=null,u=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,n)&&!l.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:c,ref:u,props:a,_owner:s.current}}t.Fragment=a,t.jsx=q,t.jsxs=q},7573:function(e,t,r){"use strict";e.exports=r(8294)},4223:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(7653),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,r){var n,a={},c=null,u=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,n)&&!l.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:c,ref:u,props:a,_owner:s.current}}t.Fragment=a,t.jsx=q,t.jsxs=q},5505:function(e,t,r){"use strict";e.exports=r(4223)},7953:function(e,t,r){"use strict";r.d(t,{ah:function(){return useMDXComponents}});var n=r(7653);let o=n.createContext({});function useMDXComponents(e){let t=n.useContext(o);return n.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}},2597:function(e,t,r){"use strict";var n=(0,r(2916).Z)(function(e){return function(t,r){return e(t,r)?-1:e(r,t)?1:0}});t.Z=n},2916:function(e,t,r){"use strict";r.d(t,{Z:function(){return _curry1}});var n=r(5884);function _curry1(e){return function f1(t){return 0==arguments.length||(0,n.Z)(t)?f1:e.apply(this,arguments)}}},3373:function(e,t,r){"use strict";r.d(t,{Z:function(){return _curry2}});var n=r(2916),o=r(5884);function _curry2(e){return function f2(t,r){switch(arguments.length){case 0:return f2;case 1:return(0,o.Z)(t)?f2:(0,n.Z)(function(r){return e(t,r)});default:return(0,o.Z)(t)&&(0,o.Z)(r)?f2:(0,o.Z)(t)?(0,n.Z)(function(t){return e(t,r)}):(0,o.Z)(r)?(0,n.Z)(function(r){return e(t,r)}):e(t,r)}}}},5884:function(e,t,r){"use strict";function _isPlaceholder(e){return null!=e&&"object"==typeof e&&!0===e["@@functional/placeholder"]}r.d(t,{Z:function(){return _isPlaceholder}})},6349:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(3373),o=(0,r(2916).Z)(function(e){return function(){return e}}),a=r(3401),i=(0,n.Z)(function(e,t){return(0,a.Z)(o(e),t)})},3401:function(e,t,r){"use strict";var n=(0,r(3373).Z)(function(e,t){var r,n=Number(t),o=0;if(n<0||isNaN(n))throw RangeError("n must be a non-negative number");for(r=Array(n);o<n;)r[o]=e(o),o+=1;return r});t.Z=n}},function(e){e.O(0,[293,197,744],function(){return e(e.s=4970)}),_N_E=e.O()}]);