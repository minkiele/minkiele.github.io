(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[476],{9788:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cruciverba",function(){return l(274)}])},274:function(e,n,l){"use strict";l.r(n),l.d(n,{__N_SSG:function(){return d},default:function(){return f}});var t=l(5893),i=l(3940),r=l(7294),o=l(1151);function s(e){let n=Object.assign({p:"p"},(0,o.ah)(),e.components);return(0,t.jsx)(n.p,{children:"An implementation of the crosswords schema with automatic calculation of\ndefinitions number. Definitely not suitable for mobile devices, it will\nfrustrate you soooo much."})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(s,e)})):s(e)};let c=(e,n,l)=>{if(null==l[e][n])return!0;let t=0===e||null==l[e-1][n],i=0===n||null==l[e][n-1],r=e===l.length-1||null==l[e+1][n],o=n===l[e].length-1||null==l[e][n+1];return t&&i&&r&&o},u=e=>{let n=[];for(let l=0;l<e.length;l+=1)for(let t=0;t<e[l].length;t+=1)if(null!=e[l][t]){let i=0===l||null==e[l-1][t],r=0===t||null==e[l][t-1],o=l<e.length-1&&null!=e[l+1][t],s=t<e[l].length-1&&null!=e[l][t+1],a=i&&o,c=r&&s;(c||a)&&n.push({order:n.length+1,row:l,col:t,isHorizontal:c,isVertical:a,horizontalDefinition:"",verticalDefinition:""})}return n},h=e=>{let{rows:n,cols:l,showDefs:t=!0}=e,r=(0,i.DZ1)(()=>(0,i.rx1)("",l),n),o=u(r);return{matrix:r,definitions:o,rows:n,cols:l,showDefs:t}};var d=!0,f=function(){let[{matrix:e,definitions:n,rows:l,cols:o,showDefs:s},d]=(0,r.useReducer)((e,n)=>{switch(n.type){case"setValue":{let l=(0,i.d9v)(e.matrix);return l[n.row][n.col]=n.value,{...e,matrix:l}}case"toggleBlack":{let t=(0,i.d9v)(e.matrix);return t[n.row][n.col]=null==t[n.row][n.col]?"":null,{...e,matrix:t,definitions:u(t)}}case"setSize":{let r=h({rows:n.rows,cols:n.cols,showDefs:e.showDefs});for(let o=0;o<r.matrix.length;o+=1)for(let s=0;s<r.matrix[o].length;s+=1)o<e.matrix.length&&s<e.matrix[o].length&&(r.matrix[o][s]=e.matrix[o][s]);return r.definitions=u(r.matrix),r}case"setDefinition":return{...e,definitions:e.definitions.reduce((e,l)=>[...e,{...l,...l.row===n.row&&l.col===n.col&&{horizontalDefinition:n.horizontalDefinition,verticalDefinition:n.verticalDefinition}}],[])};case"setShowDefs":return{...e,showDefs:n.showDefs}}},{rows:12,cols:22,showDefs:!1},h),f=(0,r.useRef)(null),p=(0,r.useRef)(null),v=(0,r.useRef)((0,i.DZ1)(()=>(0,i.rx1)(null,o),l)),x=(e,n)=>l=>{e<v.current.length&&n<v.current[e].length&&(v.current[e][n]=l)},{h:m,v:w}=(0,r.useMemo)(()=>n.reduce((e,n)=>({...e,...n.isHorizontal&&{h:[...e.h,n]},...n.isVertical&&{v:[...e.v,n]}}),{h:[],v:[]}),[n]),g=(e,n)=>l=>{let t=l.target.value.toUpperCase();/^[A-Z]?$/.test(t)&&d({type:"setValue",row:e,col:n,value:t})},j=(e,n)=>()=>{d({type:"toggleBlack",row:e,col:n})},D=e=>{var n,l,t,r;e.preventDefault();let o=parseInt(null!==(t=null===(n=f.current)||void 0===n?void 0:n.value)&&void 0!==t?t:""),s=parseInt(null!==(r=null===(l=p.current)||void 0===l?void 0:l.value)&&void 0!==r?r:"");v.current=(0,i.DZ1)(()=>(0,i.rx1)(null,s),o),d({type:"setSize",rows:isNaN(o)||o<2?12:o,cols:isNaN(s)||s<2?22:s})},_=(e,n)=>l=>{d({type:"setDefinition",row:e.row,col:e.col,horizontalDefinition:"h"===n?l.target.value:e.horizontalDefinition,verticalDefinition:"v"===n?l.target.value:e.verticalDefinition})},N=e=>{d({type:"setShowDefs",showDefs:e.target.checked})},b=(n,l)=>t=>{var i,r,o,s,a,c;"ArrowUp"===t.key&&n>0&&(null===(r=v.current.reduceRight((e,t,i)=>null==e&&i<n&&null!=t[l]?t[l]:e,null))||void 0===r||r.focus()),"ArrowDown"===t.key&&n<e.length-1&&(null===(o=v.current.reduce((e,t,i)=>null==e&&i>n&&null!=t[l]?t[l]:e,null))||void 0===o||o.focus()),"ArrowLeft"===t.key&&l>0&&(null===(s=v.current[n].reduceRight((e,n,t)=>null==e&&t<l&&null!=n?n:e,null))||void 0===s||s.focus()),"ArrowRight"===t.key&&l<e[n].length-1&&(null===(a=v.current[n].reduce((e,n,t)=>null==e&&t>l&&null!=n?n:e,null))||void 0===a||a.focus()),"Backspace"===t.key&&0===(null===(i=v.current[n][l])||void 0===i?void 0:i.value).length&&l>0&&(null===(c=v.current[n].reduceRight((e,n,t)=>null==e&&t<l&&null!=n?n:e,null))||void 0===c||c.focus())},y=(n,l)=>t=>{if(/^[a-zA-Z]$/.test(t.key)&&l<e[n].length-1){var i;null===(i=v.current[n].reduce((e,n,t)=>null==e&&t>l&&null!=n?n:e,null))||void 0===i||i.focus()}},k=(0,t.jsxs)("div",{className:"app",children:[(0,t.jsxs)("table",{className:"app_table",children:[(0,t.jsx)("caption",{className:"app_caption",children:"Parole Crociate"}),(0,t.jsx)("tbody",{children:(0,i.DZ1)(l=>(0,t.jsx)("tr",{children:(0,i.DZ1)(i=>{let r=n.find(e=>e.row===l&&e.col===i);return(0,t.jsx)("td",{className:"app_td",onDoubleClick:j(l,i),children:c(l,i,e)?(0,t.jsx)("span",{className:"app_black"}):(0,t.jsxs)(t.Fragment,{children:[null!=r&&(0,t.jsx)("span",{className:"app_definition",children:r.order}),(0,t.jsx)("input",{className:"app_input",name:"input-".concat(l,"-").concat(i),type:"text",value:e[l][i],onChange:g(l,i),maxLength:1,ref:x(l,i),onKeyDown:b(l,i),onKeyUp:y(l,i),autoComplete:"off"})]})},"".concat(l,"-").concat(i))},o)},l),l)})]}),s&&(0,t.jsxs)("div",{className:"app_definitions",children:[m.length&&(0,t.jsxs)("div",{className:"app_directionDefinitions",children:[(0,t.jsx)("h2",{children:"Orizzontali"}),(0,t.jsx)("ol",{children:m.map((e,n)=>(0,t.jsx)("li",{value:e.order,children:(0,t.jsx)("input",{className:"app_definitionInput",name:"h-".concat(e.order),type:"text",value:e.horizontalDefinition,onChange:_(e,"h")})},"h-".concat(e.order,"-").concat(n)))})]}),w.length&&(0,t.jsxs)("div",{className:"app_directionDefinitions",children:[(0,t.jsx)("h2",{children:"Verticali"}),(0,t.jsx)("ol",{children:w.map((e,n)=>(0,t.jsx)("li",{value:e.order,children:(0,t.jsx)("input",{className:"app_definitionInput",name:"v-".concat(e.order),type:"text",value:e.verticalDefinition,onChange:_(e,"v")})},"v-".concat(e.order,"-").concat(n)))})]})]})]}),z=(0,t.jsx)("form",{onSubmit:D,children:(0,t.jsxs)("fieldset",{children:[(0,t.jsx)("legend",{children:"Opzioni"}),(0,t.jsx)("label",{htmlFor:"rows",children:"Numero di righe:"})," ",(0,t.jsx)("input",{name:"rows",defaultValue:l,ref:f,type:"number"})," ",(0,t.jsx)("label",{htmlFor:"cols",children:"Numero di colonne:"})," ",(0,t.jsx)("input",{name:"cols",defaultValue:o,ref:p,type:"number"})," ",(0,t.jsx)("button",{type:"submit",children:"Update"}),(0,t.jsx)("br",{}),(0,t.jsx)("input",{id:"showDefs",name:"showDefs",checked:s,onChange:N,type:"checkbox",value:"showDefs"}),(0,t.jsx)("label",{htmlFor:"showDefs",children:"Mostra definizioni"})]})});return(0,t.jsxs)("div",{children:[(0,t.jsx)(a,{}),(0,t.jsx)("div",{className:"app_wrapper",children:k}),z]})}}},function(e){e.O(0,[407,774,888,179],function(){return e(e.s=9788)}),_N_E=e.O()}]);