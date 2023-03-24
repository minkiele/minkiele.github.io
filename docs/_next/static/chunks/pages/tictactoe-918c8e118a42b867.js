(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{70:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tictactoe",function(){return t(62)}])},62:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return k},default:function(){return x}});var o=t(2322),n=t(6573),c=t(2784),s=t(3538),a=t.n(s),i=t(5392);function l(e){let r=Object.assign({p:"p"},(0,i.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.p,{children:"Implementation of Tic Tac Toe, 1 vs 1 and 1 vs PC.\nPC does not know how to play, it will choose random spots, and Player 1 always starts with X."}),"\n",(0,o.jsx)(r.p,{children:"Somewhere there's a version I was developing where opponent uses a little more strategy."})]})}var _=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,i.ah)(),e.components);return r?(0,o.jsx)(r,Object.assign({},e,{children:(0,o.jsx)(l,e)})):l(e)};let d=Symbol("X"),u=Symbol("O"),p=()=>({matrix:(0,n.DZ1)(()=>(0,n.rx1)(null,3),3),sign:d,victoryCoords:void 0,vsPc:!1,movePc:!1}),m=[...(0,n.DZ1)(e=>(0,n.DZ1)(r=>[e,r],3),3),...(0,n.DZ1)(e=>(0,n.DZ1)(r=>[r,e],3),3),(0,n.DZ1)(e=>[e,e],3),(0,n.DZ1)(e=>[3-e-1,e],3)],h=e=>{e:for(let r=0;r<m.length;r+=1){let[[t,o]]=m[r];if(null!=e[t][o]){for(let n=1;n<m[r].length;n+=1){let[c,s]=m[r][n-1],[a,i]=m[r][n];if(e[c][s]!==e[a][i])continue e}return m[r]}}},b=e=>{{let[[r,t],[o,n]]=e;return t===n?0:r===o?2:r===t?1:3}},v=(e,r,t,o)=>(null==t?void 0:t.some(t=>{let[o,n]=t;return o===e&&n===r}))?o[b(t)]:void 0,T=e=>{let r=e.reduce((e,r,t)=>[...e,...r.reduce((e,r,o)=>null==r?[...e,[t,o]]:e,[])],[]);if(r.length>0)return r[Math.floor(Math.random()*r.length)]},f=()=>{let[{matrix:e,victoryCoords:r,sign:t,vsPc:n,movePc:s},i]=(0,c.useReducer)((e,r)=>{switch(r.type){case"mark":if(null==e.matrix[r.row][r.col]&&null==e.victoryCoords){let t=[...e.matrix.slice(0,r.row),[...e.matrix[r.row].slice(0,r.col),e.sign,...e.matrix[r.row].slice(r.col+1)],...e.matrix.slice(r.row+1)],o=h(t),n=null==o?e.sign===d?u:d:e.sign;return{...e,matrix:t,sign:n,victoryCoords:o,movePc:e.vsPc&&!e.movePc}}return e;case"vspc":return{...e,vsPc:r.value,movePc:r.value&&null==e.victoryCoords&&e.sign===u};case"reset":return{...p(),vsPc:e.vsPc};default:return e}},p()),l=(e,r)=>()=>{s||i({type:"mark",row:e,col:r})},m=()=>{i({type:"reset"})},b=e=>()=>{i({type:"vspc",value:e})},f=(0,c.useCallback)((e,t)=>v(e,t,r,["".concat(a().board_strike," ").concat(a().board_strike__0),"".concat(a().board_strike," ").concat(a().board_strike__1),"".concat(a().board_strike," ").concat(a().board_strike__2),"".concat(a().board_strike," ").concat(a().board_strike__3)]),[r]),k=(0,c.useMemo)(()=>e.some(e=>e.some(e=>null==e)),[e]);return(0,c.useEffect)(()=>{if(s){let r=setTimeout(()=>{let r=T(e);null!=r&&i({type:"mark",row:r[0],col:r[1]})},1500);return()=>{clearTimeout(r)}}},[s,e]),(0,o.jsxs)("div",{children:[(0,o.jsx)(_,{}),(0,o.jsx)("div",{className:a().board,children:e.map((e,r)=>(0,o.jsx)("div",{className:a().board_row,children:e.map((e,t)=>(0,o.jsxs)("div",{className:"".concat(a().board_col," ").concat(f(r,t)),onClick:l(r,t),children:[e===d&&"❌",e===u&&"⭕",null==e&&(0,o.jsx)("span",{className:a().board_empty,children:"♻️"})]},"col-".concat(t)))},"row-".concat(r)))}),r?(0,o.jsxs)("p",{children:[t.description," won!"]}):!k&&(0,o.jsx)("p",{children:"Draw, no moves possible."}),(0,o.jsxs)("fieldset",{children:[(0,o.jsx)("legend",{children:"Settings"}),(0,o.jsx)("input",{type:"radio",name:"vspc",id:"vspcFalse",value:"false",onChange:b(!1),checked:!n}),(0,o.jsx)("label",{htmlFor:"vspcFalse",children:"Player 1 VS Player 2"})," ",(0,o.jsx)("input",{type:"radio",name:"vspc",id:"vspcTrue",value:"true",onChange:b(!0),checked:n}),(0,o.jsx)("label",{htmlFor:"vspcTrue",children:"Player 1 VS PC"}),(0,o.jsx)("br",{}),(0,o.jsx)("button",{type:"button",onClick:m,children:"New match"})]})]})};var k=!0,x=f},3538:function(e){e.exports={board:"TicTacToe_board__Xokqn",board_row:"TicTacToe_board_row__M3Mzo",board_col:"TicTacToe_board_col__kGVyW",board_empty:"TicTacToe_board_empty__qd7G_",board_strike:"TicTacToe_board_strike__h0u2v",board_strike__0:"TicTacToe_board_strike__0__E7Znq",board_strike__1:"TicTacToe_board_strike__1__c1lAi",board_strike__2:"TicTacToe_board_strike__2__nUFw3",board_strike__3:"TicTacToe_board_strike__3__WzMfe"}},5392:function(e,r,t){"use strict";t.d(r,{ah:function(){return c}});var o=t(2784);let n=o.createContext({});function c(e){let r=o.useContext(n);return o.useMemo(()=>"function"==typeof e?e(r):{...r,...e},[r,e])}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=70)}),_N_E=e.O()}]);