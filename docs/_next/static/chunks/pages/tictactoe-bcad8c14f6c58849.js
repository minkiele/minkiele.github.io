(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{2779:function(e,t){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)){if(n.length){var i=a.apply(null,n);i&&e.push(i)}}else if("object"===l){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var o in n)r.call(n,o)&&n[o]&&e.push(o)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0!==(n=(function(){return a}).apply(t,[]))&&(e.exports=n)}()},70:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tictactoe",function(){return n(5653)}])},5653:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return Z},default:function(){return F}});var r=n(2322),a=n(2784),l=n(3538),i=n.n(l),o=n(5392);function s(e){let t=Object.assign({p:"p"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Implementation of Tic Tac Toe, 1 vs 1 and 1 vs PC.\nPlayer 1 plays always with ❌ while Player 2 and PC play with ⭕."}),"\n",(0,r.jsx)(t.p,{children:"There's a rudimentary algorithm to try and determine the next move by the PC.\nAlso the waiting between moves is just aesthetic."}),"\n",(0,r.jsx)(t.p,{children:"There's also a a little support for accessibility, with aria labels\nand announcements of PC plays."})]})}var c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(s,e)})):s(e)},u=n(2779),d=n.n(u),_=n(6573);let h=Symbol("❌"),p=Symbol("⭕️"),b=function(){let{sign:e=h,side:t=3,...n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{vsPc:!1,movePc:!1,...n,matrix:(0,_.DZ1)(()=>(0,_.rx1)(null,t),t),sign:e,side:t,victoryCoords:void 0,announce:void 0}},f=e=>[...(0,_.DZ1)(t=>(0,_.DZ1)(e=>[t,e],e),e),...(0,_.DZ1)(t=>(0,_.DZ1)(e=>[e,t],e),e),(0,_.DZ1)(e=>[e,e],e),(0,_.DZ1)(t=>[e-t-1,t],e)],g=e=>{let t=f(e.length);e:for(let n=0;n<t.length;n+=1){let[[r,a]]=t[n];if(null!=e[r][a]){for(let l=1;l<t[n].length;l+=1){let[i,o]=t[n][l-1],[s,c]=t[n][l];if(e[i][o]!==e[s][c])continue e}return t[n]}}},m=e=>{if(e.length<2)return 2;{let[[t,n],[r,a]]=e;return n===a?0:t===r?2:t===n?1:3}},v=(e,t,n,r)=>(null==n?void 0:n.some(n=>{let[r,a]=n;return r===e&&a===t}))?r[m(n)]:void 0,x=(e,t,n)=>f(t.length).filter(r=>{let[a,l]=r.reduce((n,r)=>{let[a,l]=r;return t[a][l]===e?[n[0]+1,n[1]]:null==t[a][l]?[n[0],n[1]+1]:n},[0,0]);return n(a,l)}),T=e=>e[Math.floor(Math.random()*e.length)],k=(e,t)=>{let n=x(e,t,(e,n)=>e===t.length-1&&1===n);if(n.length>0){let r=T(n);return r.find(e=>{let[n,r]=e;return null==t[n][r]})}},y=(e,t,n)=>e===t||n-1-t===e||e-n-1===t,j=(e,t)=>{let n=x(e,t,(e,n)=>1===e&&n===t.length-1),r=[];for(let a=0;a<t.length;a+=1)for(let l=0;l<t[a].length;l+=1){let i=n.reduce((e,n)=>n.some(e=>{let[n,r]=e;return a==n&&l===r&&null==t[n][r]})?e+1:e,0);i>0&&r.push({coords:[a,l],ranking:i,diagonal:y(a,l,t.length)})}if(r.sort((0,_.Ukb)((e,t)=>e.ranking>=t.ranking||e.ranking===t.ranking&&e.diagonal)),r.length>0){let o=r.filter(e=>{let{ranking:t,diagonal:n}=e;return t===r[0].ranking&&(!r[0].diagonal||n)});return T(o)}},w=e=>e.reduce((e,t,n)=>[...e,...t.reduce((e,t,r)=>null==t?[...e,[n,r]]:e,[])],[]),P=(e,t)=>[...e].sort((0,_.Ukb)(()=>.5>Math.random())).find(e=>{let[n,r]=e;return null==t[n][r]}),N=e=>{let t=e.reduce((e,t)=>e+t.reduce((e,t)=>null!=t?e+1:e,0),0);return t===e.length&&e[1][1]===p&&(null!=e[0][0]&&e[0][0]===e[e.length-1][e.length-1]||null!=e[e.length-1][0]&&e[e.length-1][0]===e[0][e.length-1])},C=e=>{let t=w(e);if(t.length===e.length**2)return T(t);let n=k(p,e);if(n)return n;let r=k(h,e);if(null!=r)return r;if(e.length%2==1&&t.find(e=>{let[t,n]=e;return 1===t&&1===n}))return[1,1];if(3===e.length){if(N(e))return P([[0,1],[1,0],[1,2],[2,1]],e);let a=j(p,e),l=j(h,e);if(null!=a&&null!=l&&l.ranking>a.ranking)return l.coords;if(null!=a)return a.coords;if(null!=l)return l.coords}if(t.length>0)return T(t)},D=(e,t,n,r,a)=>{if(0===e)return t;if(e===a-1)return r;if(e===(a-1)/2)return n;let l=(e+1)%10;return"".concat(e+1).concat(l<1||l>3||e>9&&e<13?"th":1===l?"st":2===l?"nd":"rd")},S=(e,t,n)=>{let r=D(e,"top","center","bottom",n),a=D(t,"left","center","right",n);return"center"===r&&r===a?"central":"".concat(r,"-").concat(a)},M=()=>(0,a.useReducer)((e,t)=>{switch(t.type){case"mark":if(null==e.matrix[t.row][t.col]&&null==e.victoryCoords){let n=[...e.matrix.slice(0,t.row),[...e.matrix[t.row].slice(0,t.col),e.sign,...e.matrix[t.row].slice(t.col+1)],...e.matrix.slice(t.row+1)],r=g(n),a=null==r?e.sign===h?p:h:e.sign;return{...e,matrix:n,sign:a,victoryCoords:r,movePc:e.vsPc&&!e.movePc,announce:e.vsPc&&e.movePc?[t.row,t.col]:void 0}}return e;case"vspc":return{...e,vsPc:t.enabled,movePc:t.enabled&&null==e.victoryCoords&&e.sign===p};case"reset":return b({sign:t.sign,side:t.side,vsPc:e.vsPc,movePc:e.vsPc&&t.sign===p});case"unannounce":return{...e,announce:void 0};default:return e}},b()),E=()=>{let[{matrix:e,victoryCoords:t,sign:n,vsPc:l,movePc:o,announce:s,side:u},_]=M(),b=(e,t)=>()=>{o||_({type:"mark",row:e,col:t})},f=e=>()=>{_({type:"reset",side:u,sign:e})},g=e=>()=>{_({type:"vspc",enabled:e})},m=e=>{let t=parseInt(e.target.value);_({type:"reset",side:isNaN(t)||t<1?3:t,sign:n})},x=(0,a.useCallback)((e,n)=>v(e,n,t,["".concat(i().board_strike," ").concat(i().board_strike__0),"".concat(i().board_strike," ").concat(i().board_strike__1),"".concat(i().board_strike," ").concat(i().board_strike__2),"".concat(i().board_strike," ").concat(i().board_strike__3)]),[t]),T=(0,a.useMemo)(()=>e.some(e=>e.some(e=>null==e)),[e]);(0,a.useEffect)(()=>{if(o){let t=setTimeout(()=>{let t=C(e);null!=t&&_({type:"mark",row:t[0],col:t[1]})},1e3);return()=>{clearTimeout(t)}}},[o,e,_]),(0,a.useEffect)(()=>{if(s){let e=setTimeout(()=>{_({type:"unannounce"})},2e3);return()=>{clearTimeout(e)}}},[s,_]);let k=(0,a.useMemo)(()=>(0,r.jsx)("span",{className:i().board_sign,children:(0,r.jsx)("span",{className:i().board_empty,"aria-hidden":!0,children:"♻️"})}),[]);return(0,r.jsxs)("div",{children:[(0,r.jsx)(c,{}),(0,r.jsx)("div",{className:i().board,children:e.map((e,a)=>(0,r.jsx)("div",{className:i().board_row,children:e.map((e,l)=>(0,r.jsxs)("div",{className:d()({[i().board_col]:!0,[x(a,l)]:x(a,l)}),children:[null==e&&(null!=t?k:(0,r.jsx)("button",{type:"button",className:i().board_button,onClick:b(a,l),"aria-label":"Mark with ".concat(n.description," the ").concat(S(a,l,u)," space"),children:k})),null!=e&&(0,r.jsx)("span",{className:i().board_sign,"aria-label":"".concat(S(a,l,u)," space marked with  ").concat(e.description),children:e.description})]},"col-".concat(l)))},"row-".concat(a)))}),null!=s&&(0,r.jsxs)("p",{role:"alert","aria-live":"assertive",className:"sr-only",children:["PC marked with ⭕ the ",S(...s,u)," space"]}),t?(0,r.jsxs)("p",{role:"alert","aria-live":"assertive",children:[(0,r.jsx)("span",{className:i().board_sign,children:n.description})," won!"]}):!T&&(0,r.jsx)("p",{role:"alert","aria-live":"assertive",children:"Draw game, no moves possible."}),(0,r.jsxs)("fieldset",{children:[(0,r.jsx)("legend",{children:"Settings"}),"Player 1 (",(0,r.jsx)("span",{className:i().board_sign,children:"❌"}),") Vs."," ",(0,r.jsx)("input",{type:"radio",name:"vspc",id:"vspcFalse",value:"false",onChange:g(!1),checked:!l}),(0,r.jsx)("label",{htmlFor:"vspcFalse",children:"Player 2 "})," ",(0,r.jsx)("input",{type:"radio",name:"vspc",id:"vspcTrue",value:"true",onChange:g(!0),checked:l}),(0,r.jsx)("label",{htmlFor:"vspcTrue",children:"PC "})," (",(0,r.jsx)("span",{className:i().board_sign,children:"⭕"}),")",(0,r.jsx)("br",{}),(0,r.jsx)("label",{htmlFor:"side",children:"Size of the grid: "}),(0,r.jsx)("input",{type:"number",name:"side",id:"side",onChange:m,value:u}),"x",u,(0,r.jsx)("br",{}),(0,r.jsx)("button",{type:"button",onClick:f(h),children:"New match"})," ",(0,r.jsxs)("button",{type:"button",onClick:f(p),children:["New match, but starts ",(0,r.jsx)("span",{className:i().board_sign,children:"⭕"})]})]})]})};var Z=!0,F=E},3538:function(e){e.exports={board:"TicTacToe_board__Xokqn",board_button:"TicTacToe_board_button__bWXCA",board_col:"TicTacToe_board_col__kGVyW",board_row:"TicTacToe_board_row__M3Mzo",board_empty:"TicTacToe_board_empty__qd7G_",board_strike:"TicTacToe_board_strike__h0u2v",board_strike__0:"TicTacToe_board_strike__0__E7Znq",board_strike__1:"TicTacToe_board_strike__1__c1lAi",board_strike__2:"TicTacToe_board_strike__2__nUFw3",board_strike__3:"TicTacToe_board_strike__3__WzMfe",board_sign:"TicTacToe_board_sign__lDtDD"}},5392:function(e,t,n){"use strict";n.d(t,{ah:function(){return l}});var r=n(2784);let a=r.createContext({});function l(e){let t=r.useContext(a);return r.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=70)}),_N_E=e.O()}]);