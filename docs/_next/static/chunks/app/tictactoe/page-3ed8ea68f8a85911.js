(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6254],{407:function(e,n,t){Promise.resolve().then(t.bind(t,1881))},9102:function(e,n){var t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var o=typeof t;if("string"===o||"number"===o)e.push(t);else if(Array.isArray(t)){if(t.length){var a=i.apply(null,t);a&&e.push(a)}}else if("object"===o){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var l in t)r.call(t,l)&&t[l]&&e.push(l)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0!==(t=(function(){return i}).apply(n,[]))&&(e.exports=t)}()},2430:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(7653),i=t(2444);let o=t.n(i)().className;var a=t(3971),l=t.n(a);function s(e){let{children:n}=e;return(0,r.createElement)("span",{className:"".concat(o," ").concat(l().emoji)},n)}},1881:function(e,n,t){"use strict";t.d(n,{default:function(){return I}});var r=t(7573),i=t(7653),o=t(6491),a=t.n(o),l=t(9429);function s(e){let n=Object.assign({p:"p"},(0,l.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Implementation of Tic Tac Toe, 1 vs 1 and 1 vs PC.\nPlayer 1 plays always with ❌ while Player 2 and PC play with ⭕."}),"\n",(0,r.jsx)(n.p,{children:"There's a rudimentary algorithm to try and determine the next move by the PC.\nAlso the waiting between moves is just aesthetic."}),"\n",(0,r.jsx)(n.p,{children:"There's also a a little support for accessibility, with aria labels\nand announcements of PC plays."})]})}var c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(s,e)})):s(e)},u=t(9102),d=t.n(u),_=t(643),h=t(3094),f=t(3792);let p=Symbol("❌"),m=Symbol("⭕️"),b=function(){let{sign:e=p,side:n=3,...t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{vsPc:!1,movePc:!1,...t,matrix:(0,_.Z)(()=>(0,h.Z)(null,n),n),sign:e,side:n,victoryCoords:void 0,announce:void 0}},g=e=>[...(0,_.Z)(n=>(0,_.Z)(e=>[n,e],e),e),...(0,_.Z)(n=>(0,_.Z)(e=>[e,n],e),e),(0,_.Z)(e=>[e,e],e),(0,_.Z)(n=>[e-n-1,n],e)],v=e=>{let n=g(e.length);e:for(let t=0;t<n.length;t+=1){let[[r,i]]=n[t];if(null!=e[r][i]){for(let r=1;r<n[t].length;r+=1){let[i,o]=n[t][r-1],[a,l]=n[t][r];if(e[i][o]!==e[a][l])continue e}return n[t]}}},x=e=>{if(e.length<2)return 2;{let[[n,t],[r,i]]=e;return t===i?0:n===r?2:n===t?1:3}},j=(e,n,t,r)=>(null==t?void 0:t.some(t=>{let[r,i]=t;return r===e&&i===n}))?r[x(t)]:void 0,y=(e,n,t)=>g(n.length).filter(r=>{let[i,o]=r.reduce((t,r)=>{let[i,o]=r;return n[i][o]===e?[t[0]+1,t[1]]:null==n[i][o]?[t[0],t[1]+1]:t},[0,0]);return t(i,o)}),T=e=>e[Math.floor(Math.random()*e.length)],k=(e,n)=>{let t=y(e,n,(e,t)=>e===n.length-1&&1===t);if(t.length>0)return T(t).find(e=>{let[t,r]=e;return null==n[t][r]})},Z=(e,n,t)=>e===n||t-1-n===e||e-t-1===n,w=(e,n)=>{let t=y(e,n,(e,t)=>1===e&&t===n.length-1),r=[];for(let e=0;e<n.length;e+=1)for(let i=0;i<n[e].length;i+=1){let o=t.reduce((t,r)=>r.some(t=>{let[r,o]=t;return e==r&&i===o&&null==n[r][o]})?t+1:t,0);o>0&&r.push({coords:[e,i],ranking:o,diagonal:Z(e,i,n.length)})}if(r.sort((0,f.Z)((e,n)=>e.ranking>=n.ranking||e.ranking===n.ranking&&e.diagonal)),r.length>0)return T(r.filter(e=>{let{ranking:n,diagonal:t}=e;return n===r[0].ranking&&(!r[0].diagonal||t)}))},N=e=>e.reduce((e,n,t)=>[...e,...n.reduce((e,n,r)=>null==n?[...e,[t,r]]:e,[])],[]),P=(e,n)=>[...e].sort((0,f.Z)(()=>.5>Math.random())).find(e=>{let[t,r]=e;return null==n[t][r]}),C=e=>e.reduce((e,n)=>e+n.reduce((e,n)=>null!=n?e+1:e,0),0)===e.length&&e[1][1]===m&&(null!=e[0][0]&&e[0][0]===e[e.length-1][e.length-1]||null!=e[e.length-1][0]&&e[e.length-1][0]===e[0][e.length-1]),S=e=>{let n=N(e);if(n.length===e.length**2)return T(n);let t=k(m,e);if(t)return t;let r=k(p,e);if(null!=r)return r;if(e.length%2==1&&n.find(e=>{let[n,t]=e;return 1===n&&1===t}))return[1,1];if(3===e.length){if(C(e))return P([[0,1],[1,0],[1,2],[2,1]],e);let n=w(m,e),t=w(p,e);if(null!=n&&null!=t&&t.ranking>n.ranking)return t.coords;if(null!=n)return n.coords;if(null!=t)return t.coords}if(n.length>0)return T(n)},E=(e,n,t,r,i)=>{if(0===e)return n;if(e===i-1)return r;if(e===(i-1)/2)return t;let o=(e+1)%10;return"".concat(e+1).concat(o<1||o>3||e>9&&e<13?"th":1===o?"st":2===o?"nd":"rd")},F=(e,n,t)=>{let r=E(e,"top","center","bottom",t),i=E(n,"left","center","right",t);return"center"===r&&r===i?"central":"".concat(r,"-").concat(i)},M=()=>(0,i.useReducer)((e,n)=>{switch(n.type){case"mark":if(null==e.matrix[n.row][n.col]&&null==e.victoryCoords){let t=[...e.matrix.slice(0,n.row),[...e.matrix[n.row].slice(0,n.col),e.sign,...e.matrix[n.row].slice(n.col+1)],...e.matrix.slice(n.row+1)],r=v(t),i=null==r?e.sign===p?m:p:e.sign;return{...e,matrix:t,sign:i,victoryCoords:r,movePc:e.vsPc&&!e.movePc,announce:e.vsPc&&e.movePc?[n.row,n.col]:void 0}}return e;case"vspc":return{...e,vsPc:n.enabled,movePc:n.enabled&&null==e.victoryCoords&&e.sign===m};case"reset":return b({sign:n.sign,side:n.side,vsPc:e.vsPc,movePc:e.vsPc&&n.sign===m});case"unannounce":return{...e,announce:void 0};default:return e}},b());var O=t(2430),I=()=>{let[{matrix:e,victoryCoords:n,sign:t,vsPc:o,movePc:l,announce:s,side:u},_]=M(),h=(e,n)=>()=>{l||_({type:"mark",row:e,col:n})},f=e=>()=>{_({type:"reset",side:u,sign:e})},b=e=>()=>{_({type:"vspc",enabled:e})},g=(0,i.useCallback)((e,t)=>j(e,t,n,["".concat(a().board_strike," ").concat(a().board_strike__0),"".concat(a().board_strike," ").concat(a().board_strike__1),"".concat(a().board_strike," ").concat(a().board_strike__2),"".concat(a().board_strike," ").concat(a().board_strike__3)]),[n]),v=(0,i.useMemo)(()=>e.some(e=>e.some(e=>null==e)),[e]);(0,i.useEffect)(()=>{if(l){let n=setTimeout(()=>{let n=S(e);null!=n&&_({type:"mark",row:n[0],col:n[1]})},1e3);return()=>{clearTimeout(n)}}},[l,e,_]),(0,i.useEffect)(()=>{if(s){let e=setTimeout(()=>{_({type:"unannounce"})},2e3);return()=>{clearTimeout(e)}}},[s,_]);let x=(0,i.useMemo)(()=>(0,r.jsx)("span",{className:a().board_sign,children:(0,r.jsx)("span",{className:a().board_empty,"aria-hidden":!0,children:(0,r.jsx)(O.Z,{children:"♻️"})})}),[]);return(0,r.jsxs)("div",{children:[(0,r.jsx)(c,{}),(0,r.jsx)("div",{className:a().board,children:e.map((e,i)=>(0,r.jsx)("div",{className:a().board_row,children:e.map((e,o)=>(0,r.jsxs)("div",{className:d()({[a().board_col]:!0,[g(i,o)]:g(i,o)}),children:[null==e&&(null!=n?x:(0,r.jsx)("button",{type:"button",className:a().board_button,onClick:h(i,o),"aria-label":"Mark with ".concat(t.description," the ").concat(F(i,o,u)," space"),children:x})),null!=e&&(0,r.jsx)("span",{className:a().board_sign,"aria-label":"".concat(F(i,o,u)," space marked with  ").concat(e.description),children:(0,r.jsx)(O.Z,{children:e.description})})]},"col-".concat(o)))},"row-".concat(i)))}),null!=s&&(0,r.jsxs)("p",{role:"alert","aria-live":"assertive",className:"sr-only",children:["PC marked with ",(0,r.jsx)(O.Z,{children:"⭕"})," the ",F(...s,u)," space"]}),n?(0,r.jsxs)("p",{role:"alert","aria-live":"assertive",children:[(0,r.jsx)("span",{className:a().board_sign,children:t.description})," won!"]}):!v&&(0,r.jsx)("p",{role:"alert","aria-live":"assertive",children:"Draw game, no moves possible."}),(0,r.jsxs)("fieldset",{children:[(0,r.jsx)("legend",{children:"Settings"}),"Player 1 (",(0,r.jsx)("span",{className:a().board_sign,children:(0,r.jsx)(O.Z,{children:"❌"})}),") Vs."," ",(0,r.jsx)("input",{type:"radio",name:"vspc",id:"vspcFalse",value:"false",onChange:b(!1),checked:!o}),(0,r.jsx)("label",{htmlFor:"vspcFalse",children:"Player 2 "})," ",(0,r.jsx)("input",{type:"radio",name:"vspc",id:"vspcTrue",value:"true",onChange:b(!0),checked:o}),(0,r.jsx)("label",{htmlFor:"vspcTrue",children:"PC "})," (",(0,r.jsx)("span",{className:a().board_sign,children:(0,r.jsx)(O.Z,{children:"⭕"})}),")",(0,r.jsx)("br",{}),(0,r.jsx)("label",{htmlFor:"side",children:"Size of the grid: "}),(0,r.jsx)("input",{type:"number",name:"side",id:"side",onChange:e=>{let n=parseInt(e.target.value);_({type:"reset",side:isNaN(n)||n<1?3:n,sign:t})},value:u}),"x",u,(0,r.jsx)("br",{}),(0,r.jsx)("button",{type:"button",onClick:f(p),children:"New match"})," ",(0,r.jsxs)("button",{type:"button",onClick:f(m),children:["New match, but starts ",(0,r.jsx)("span",{className:a().board_sign,children:(0,r.jsx)(O.Z,{children:"⭕"})})]})]})]})}},3971:function(e){e.exports={emoji:"Emoji_emoji__KdCI2"}},6491:function(e){e.exports={board:"TicTacToe_board__PuRk4",board_button:"TicTacToe_board_button__4WWSO",board_col:"TicTacToe_board_col__1o1K_",board_row:"TicTacToe_board_row__XQdrv",board_empty:"TicTacToe_board_empty__hp7to",board_strike:"TicTacToe_board_strike__4u3wQ",board_strike__0:"TicTacToe_board_strike__0__eI2M_",board_strike__1:"TicTacToe_board_strike__1__SDpeI",board_strike__2:"TicTacToe_board_strike__2__TxGHa",board_strike__3:"TicTacToe_board_strike__3__fJUk6",board_sign:"TicTacToe_board_sign__7bsf_"}},2444:function(e){e.exports={style:{fontFamily:"'__Noto_Emoji_075d33', '__Noto_Emoji_Fallback_075d33'",fontStyle:"normal"},className:"__className_075d33"}},9429:function(e,n,t){"use strict";t.d(n,{ah:function(){return o}});var r=t(7653);let i=r.createContext({});function o(e){let n=r.useContext(i);return r.useMemo(()=>"function"==typeof e?e(n):{...n,...e},[n,e])}},3792:function(e,n,t){"use strict";var r=(0,t(4076).Z)(function(e){return function(n,t){return e(n,t)?-1:e(t,n)?1:0}});n.Z=r},4076:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(8866);function i(e){return function n(t){return 0==arguments.length||(0,r.Z)(t)?n:e.apply(this,arguments)}}},5709:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(4076),i=t(8866);function o(e){return function n(t,o){switch(arguments.length){case 0:return n;case 1:return(0,i.Z)(t)?n:(0,r.Z)(function(n){return e(t,n)});default:return(0,i.Z)(t)&&(0,i.Z)(o)?n:(0,i.Z)(t)?(0,r.Z)(function(n){return e(n,o)}):(0,i.Z)(o)?(0,r.Z)(function(n){return e(t,n)}):e(t,o)}}}},8866:function(e,n,t){"use strict";function r(e){return null!=e&&"object"==typeof e&&!0===e["@@functional/placeholder"]}t.d(n,{Z:function(){return r}})},3094:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(5709),i=(0,t(4076).Z)(function(e){return function(){return e}}),o=t(643),a=(0,r.Z)(function(e,n){return(0,o.Z)(i(e),n)})},643:function(e,n,t){"use strict";var r=(0,t(5709).Z)(function(e,n){var t,r=Number(n),i=0;if(r<0||isNaN(r))throw RangeError("n must be a non-negative number");for(t=Array(r);i<r;)t[i]=e(i),i+=1;return t});n.Z=r}},function(e){e.O(0,[3951,9469,1293,286,1744],function(){return e(e.s=407)}),_N_E=e.O()}]);