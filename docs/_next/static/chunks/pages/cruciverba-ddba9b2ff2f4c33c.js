(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[476],{4184:function(e,n){var t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var l=typeof t;if("string"===l||"number"===l)e.push(t);else if(Array.isArray(t)){if(t.length){var o=i.apply(null,t);o&&e.push(o)}}else if("object"===l){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var s in t)r.call(t,s)&&t[s]&&e.push(s)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0!==(t=(function(){return i}).apply(n,[]))&&(e.exports=t)}()},5992:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cruciverba",function(){return t(140)}])},140:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return b},default:function(){return x}});var r=t(5893),i=t(3414),l=t(7294),o=t(1151);function s(e){let n=Object.assign({p:"p",h2:"h2",ul:"ul",li:"li",em:"em"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"An implementation of the crosswords schema with automatic calculation of\ndefinitions number."}),"\n",(0,r.jsx)(n.h2,{children:"Instructions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Click (or tap) on cells to activate the input. After providing a valid input\nyou're automatically moved to the next horizontal cell."}),"\n",(0,r.jsxs)(n.li,{children:["By double clicking a cell or pressing ",(0,r.jsx)(n.em,{children:"spacebar"})," you toggle the block.\nOn mobile devices it can be hard to toggle the block, you may have to focus\non an input and then ",(0,r.jsx)(n.em,{children:"very rapidly"})," double tap the cell."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["You should try the ",(0,r.jsx)(n.em,{children:"Incroci Obbligati"})," mode, it seriously helped me to\nsolve some scheme that were ",(0,r.jsx)(n.em,{children:"DOOOOMED"})," on paper. Inspired by that I added\nsome other recurring schemes in the ",(0,r.jsx)(n.em,{children:"Settimana Enigmistica"}),"."]})]})}var c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(s,e)})):s(e)},a=t(2610),u=t.n(a),h=t(4184),p=t.n(h);let d=(e,n,t)=>{if(null==t[e][n])return!0;let r=0===e||null==t[e-1][n],i=0===n||null==t[e][n-1],l=e===t.length-1||null==t[e+1][n],o=n===t[e].length-1||null==t[e][n+1];return r&&i&&l&&o},f=e=>{let n=[];for(let t=0;t<e.length;t+=1)for(let r=0;r<e[t].length;r+=1)if(null!=e[t][r]){let i=0===t||null==e[t-1][r],l=0===r||null==e[t][r-1],o=t<e.length-1&&null!=e[t+1][r],s=r<e[t].length-1&&null!=e[t][r+1],c=i&&o,a=l&&s;(a||c)&&n.push({order:n.length+1,row:t,col:r,isHorizontal:a,isVertical:c,horizontalDefinition:"",verticalDefinition:""})}return n},m=(e,n)=>{for(let t=0;t<n.length;t+=1)for(let r=0;r<n[t].length;r+=1)t<e.length&&r<e[t].length&&(n[t][r]=e[t][r])},v=e=>{let n,{rows:t,cols:r,showDefs:l=!0,showNumbers:o=!0,oldState:s}=e,c=(0,i.DZ1)(()=>(0,i.rx1)("",r),t);return null==s?n=f(c):(m(s.matrix,c),n=f(s.matrix)),{matrix:c,definitions:n,rows:t,cols:r,showDefs:l,showNumbers:o}},_=(e,n,t)=>e&&(n%2==1&&(t>=n&&t<13-n||t>=13-n-1&&t<13-(13-n-1))||t%2==1&&(n>=t&&n<13-t||n>=13-t-1&&n<13-(13-t-1)));var b=!0,x=function(){let[{matrix:e,definitions:n,rows:t,cols:o,showDefs:s,showNumbers:a},h]=(0,l.useReducer)((e,n)=>{switch(n.type){case"setValue":{let t=(0,i.d9v)(e.matrix);return t[n.row][n.col]=n.value,{...e,matrix:t}}case"toggleBlack":{let r=(0,i.d9v)(e.matrix);return r[n.row][n.col]=null==r[n.row][n.col]?"":null,{...e,matrix:r,definitions:f(r)}}case"setSize":return v({rows:n.rows,cols:n.cols,showDefs:e.showDefs,showNumbers:e.showNumbers,oldState:e});case"setDefinition":return{...e,definitions:e.definitions.reduce((e,t)=>[...e,{...t,...t.row===n.row&&t.col===n.col&&{horizontalDefinition:n.horizontalDefinition,verticalDefinition:n.verticalDefinition}}],[])};case"setShowDefs":return{...e,showDefs:n.showDefs};case"setShowNumbers":return{...e,showNumbers:n.showNumbers};case"setIncrociObbligatiMode":return v({rows:13,cols:9,showDefs:!1,showNumbers:!1});case"setRicercaMode":{let l=v({rows:12,cols:14,showDefs:!1,showNumbers:!0});for(let o=0;o<3;o+=1)l.matrix[0][o]=null;return{...l,definitions:f(l.matrix)}}case"wipe":{let s=e.matrix.map(e=>e.map(e=>null==e?null:""));return v({rows:e.rows,cols:e.cols,showDefs:e.showDefs,showNumbers:e.showNumbers,oldState:{...e,matrix:s,definitions:f(s)}})}case"setCorniciConcentricheMode":{let c=v({rows:13,cols:13,showDefs:!1,showNumbers:!1});return c.matrix[Math.floor(6.5)][Math.floor(6.5)]=null,{...c,definitions:f(c.matrix)}}}},{rows:12,cols:22,showDefs:!1,showNumbers:!0},v),m=(0,l.useRef)(null),b=(0,l.useRef)(null),x=(0,l.useRef)([]);(0,l.useMemo)(()=>{x.current=(0,i.DZ1)(e=>(0,i.DZ1)(n=>{var t,r;return null===(t=x.current)||void 0===t?void 0:null===(r=t[e])||void 0===r?void 0:r[n]},o),t)},[t,o]);let w=(e,n)=>t=>{e<x.current.length&&n<x.current[e].length&&(x.current[e][n]=t)},{h:g,v:j}=(0,l.useMemo)(()=>n.reduce((e,n)=>({...e,...n.isHorizontal&&{h:[...e.h,n]},...n.isVertical&&{v:[...e.v,n]}}),{h:[],v:[]}),[n]),y=(e,n)=>t=>{let r=t.target.value.toUpperCase();/^[A-Z]?$/.test(r)&&h({type:"setValue",row:e,col:n,value:r})},D=(e,n)=>()=>{h({type:"toggleBlack",row:e,col:n})},N=e=>{var n,t,r,i;e.preventDefault();let l=parseInt(null!==(r=null===(n=m.current)||void 0===n?void 0:n.value)&&void 0!==r?r:""),o=parseInt(null!==(i=null===(t=b.current)||void 0===t?void 0:t.value)&&void 0!==i?i:"");h({type:"setSize",rows:isNaN(l)||l<2?12:l,cols:isNaN(o)||o<2?22:o})},C=(e,n)=>t=>{h({type:"setDefinition",row:e.row,col:e.col,horizontalDefinition:"h"===n?t.target.value:e.horizontalDefinition,verticalDefinition:"v"===n?t.target.value:e.verticalDefinition})},k=e=>{h({type:"setShowDefs",showDefs:e.target.checked})},M=e=>{h({type:"setShowNumbers",showNumbers:e.target.checked})},O=e=>()=>{h({type:e})},S=(n,t)=>r=>{var i,l,o,s,c,a;" "===r.key&&(r.preventDefault(),h({type:"toggleBlack",row:n,col:t})),"ArrowUp"===r.key&&n>0&&(null===(l=x.current.reduceRight((e,r,i)=>null==e&&i<n&&null!=r[t]?r[t]:e,null))||void 0===l||l.focus()),"ArrowDown"===r.key&&n<e.length-1&&(null===(o=x.current.reduce((e,r,i)=>null==e&&i>n&&null!=r[t]?r[t]:e,null))||void 0===o||o.focus()),"ArrowLeft"===r.key&&t>0&&(null===(s=x.current[n].reduceRight((e,n,r)=>null==e&&r<t&&null!=n?n:e,null))||void 0===s||s.focus()),"ArrowRight"===r.key&&t<e[n].length-1&&(null===(c=x.current[n].reduce((e,n,r)=>null==e&&r>t&&null!=n?n:e,null))||void 0===c||c.focus()),"Backspace"===r.key&&0===(null===(i=x.current[n][t])||void 0===i?void 0:i.value).length&&t>0&&(null===(a=x.current[n].reduceRight((e,n,r)=>null==e&&r<t&&null!=n?n:e,null))||void 0===a||a.focus())},z=(n,t)=>r=>{if(/^[a-zA-Z]$/.test(r.key)&&t<e[n].length-1){var i;null===(i=x.current[n].reduce((e,n,r)=>null==e&&r>t&&null!=n?n:e,null))||void 0===i||i.focus()}},I=12===t&&14===o&&!1===s&&!0===a&&null==e[0][0]&&null==e[0][1]&&null==e[0][2],R=(0,l.useMemo)(()=>13===t&&13===o&&!1===s&&!1===a&&e.every((e,n)=>e.every((e,t)=>(0,i.dlQ)(n===Math.floor(6.5)&&t===Math.floor(6.5),null!=e))),[e,o,t,s,a]);(0,l.useEffect)(()=>{null!=m.current&&(m.current.value="".concat(t)),null!=b.current&&(b.current.value="".concat(o))},[t,o]);let A=(0,r.jsxs)("div",{className:u().app,children:[(0,r.jsxs)("table",{className:u().app_table,children:[(0,r.jsx)("caption",{className:u().app_caption,children:13===t&&9===o&&!1===s&&!1===a?"Incroci Obbligati":I?"Ricerca di Parole Crociate":R?"Cornici Concentriche":"Parole Crociate"}),(0,r.jsx)("tbody",{children:(0,i.DZ1)(t=>(0,r.jsx)("tr",{children:(0,i.DZ1)(i=>{let l=n.find(e=>e.row===t&&e.col===i);return(0,r.jsx)("td",{className:p()({[u().app_td]:!0,[u().app_td__grey]:_(R,t,i)}),onDoubleClick:D(t,i),children:d(t,i,e)?(0,r.jsx)("span",{className:u().app_black}):(0,r.jsxs)(r.Fragment,{children:[a&&null!=l&&(0,r.jsx)("span",{className:u().app_definition,children:l.order}),(0,r.jsx)("input",{className:u().app_input,name:"input-".concat(t,"-").concat(i),type:"text",value:e[t][i],onChange:y(t,i),maxLength:1,ref:w(t,i),onKeyDown:S(t,i),onKeyUp:z(t,i),autoComplete:"off"})]})},"".concat(t,"-").concat(i))},o)},t),t)})]}),s&&(0,r.jsxs)("div",{className:u().app_definitions,children:[g.length&&(0,r.jsxs)("div",{className:u().app_directionDefinitions,children:[(0,r.jsx)("h2",{children:"Orizzontali"}),(0,r.jsx)("ol",{children:g.map((e,n)=>(0,r.jsx)("li",{value:e.order,children:(0,r.jsx)("input",{className:u().app_definitionInput,name:"h-".concat(e.order),type:"text",value:e.horizontalDefinition,onChange:C(e,"h")})},"h-".concat(e.order,"-").concat(n)))})]}),j.length&&(0,r.jsxs)("div",{className:u().app_directionDefinitions,children:[(0,r.jsx)("h2",{children:"Verticali"}),(0,r.jsx)("ol",{children:j.map((e,n)=>(0,r.jsx)("li",{value:e.order,children:(0,r.jsx)("input",{className:u().app_definitionInput,name:"v-".concat(e.order),type:"text",value:e.verticalDefinition,onChange:C(e,"v")})},"v-".concat(e.order,"-").concat(n)))})]})]})]}),E=(0,r.jsx)("form",{onSubmit:N,children:(0,r.jsxs)("fieldset",{children:[(0,r.jsx)("legend",{children:"Opzioni"}),(0,r.jsx)("label",{htmlFor:"rows",children:"Numero di righe:"})," ",(0,r.jsx)("input",{name:"rows",defaultValue:t,ref:m,type:"number"})," ",(0,r.jsx)("label",{htmlFor:"cols",children:"Numero di colonne:"})," ",(0,r.jsx)("input",{name:"cols",defaultValue:o,ref:b,type:"number"})," ",(0,r.jsx)("button",{type:"submit",children:"Update"}),(0,r.jsx)("br",{}),(0,r.jsx)("input",{id:"showDefs",name:"showDefs",checked:s,onChange:k,type:"checkbox",value:"showDefs"}),(0,r.jsx)("label",{htmlFor:"showDefs",children:"Mostra definizioni"}),(0,r.jsx)("br",{}),(0,r.jsx)("input",{id:"showNumbers",name:"showNumbers",checked:a,onChange:M,type:"checkbox",value:"showNumbers"}),(0,r.jsx)("label",{htmlFor:"showNumbers",children:"Mostra numeri"}),(0,r.jsx)("br",{}),(0,r.jsxs)("button",{onClick:O("setIncrociObbligatiMode"),type:"button",children:[(0,r.jsx)("em",{children:"Incroci obbligati"})," mode"]})," ",(0,r.jsxs)("button",{onClick:O("setRicercaMode"),type:"button",children:[(0,r.jsx)("em",{children:"Ricerca di Parole Crociate"})," mode"]})," ",(0,r.jsxs)("button",{onClick:O("setCorniciConcentricheMode"),type:"button",children:[(0,r.jsx)("em",{children:"Cornici Concentriche"})," mode"]})," ",(0,r.jsx)("button",{onClick:O("wipe"),type:"button",children:"Wipe"})]})});return(0,r.jsxs)("div",{children:[(0,r.jsx)(c,{}),(0,r.jsx)("div",{className:u().app_wrapper,children:A}),E]})}},2610:function(e){e.exports={app:"Cruciverba_app__iETEl",app_table:"Cruciverba_app_table__LBRQV",app_td:"Cruciverba_app_td__SuAPY",app_td__grey:"Cruciverba_app_td__grey__BPIPl",app_input:"Cruciverba_app_input__kFBhz",app_definition:"Cruciverba_app_definition__60Hbg",app_black:"Cruciverba_app_black__fLXRP",app_caption:"Cruciverba_app_caption__nHTrn",app_definitions:"Cruciverba_app_definitions___MNKj",app_directionDefinitions:"Cruciverba_app_directionDefinitions__FEFKz",app_definitionInput:"Cruciverba_app_definitionInput__3wXJf",app_wrapper:"Cruciverba_app_wrapper__QBtoh"}},1151:function(e,n,t){"use strict";t.d(n,{ah:function(){return l}});var r=t(7294);let i=r.createContext({});function l(e){let n=r.useContext(i);return r.useMemo(()=>"function"==typeof e?e(n):{...n,...e},[n,e])}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5992)}),_N_E=e.O()}]);