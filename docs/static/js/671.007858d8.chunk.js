"use strict";(self.webpackChunkminkiele_github_io=self.webpackChunkminkiele_github_io||[]).push([[671],{4671:function(n,e,t){t.r(e),t.d(e,{default:function(){return d}});var r=t(3433),i=t(1413),l=t(9439),o=t(6803),u=t(7313),c=t(1611),a=t(6417),s=function(n,e,t){if(null==t[n][e])return!0;var r=0===n||null==t[n-1][e],i=0===e||null==t[n][e-1],l=n===t.length-1||null==t[n+1][e],o=e===t[n].length-1||null==t[n][e+1];return r&&i&&l&&o},f=function(n){for(var e=[],t=0;t<n.length;t+=1)for(var r=0;r<n[t].length;r+=1)if(null!=n[t][r]){var i=0===t||null==n[t-1][r],l=0===r||null==n[t][r-1],o=t<n.length-1&&null!=n[t+1][r],u=r<n[t].length-1&&null!=n[t][r+1],c=i&&o,a=l&&u;(a||c)&&e.push({order:e.length+1,row:t,col:r,isHorizontal:a,isVertical:c,horizontalDefinition:"",verticalDefinition:""})}return e},h=function(n){var e=n.rows,t=n.cols,r=n.showDefs,i=void 0===r||r,l=(0,o.DZ1)((function(){return(0,o.rx1)("",t)}),e);return{matrix:l,definitions:f(l),rows:e,cols:t,showDefs:i}};var d=function(){var n=(0,u.useReducer)((function(n,e){switch(e.type){case"setValue":var t=(0,o.d9v)(n.matrix);return t[e.row][e.col]=e.value,(0,i.Z)((0,i.Z)({},n),{},{matrix:t});case"toggleBlack":var l=(0,o.d9v)(n.matrix);return l[e.row][e.col]=null==l[e.row][e.col]?"":null,(0,i.Z)((0,i.Z)({},n),{},{matrix:l,definitions:f(l)});case"setSize":for(var u=h({rows:e.rows,cols:e.cols,showDefs:n.showDefs}),c=0;c<u.matrix.length;c+=1)for(var a=0;a<u.matrix[c].length;a+=1)c<n.matrix.length&&a<n.matrix[c].length&&(u.matrix[c][a]=n.matrix[c][a]);return u.definitions=f(u.matrix),u;case"setDefinition":return(0,i.Z)((0,i.Z)({},n),{},{definitions:n.definitions.reduce((function(n,t){return[].concat((0,r.Z)(n),[(0,i.Z)((0,i.Z)({},t),t.row===e.row&&t.col===e.col&&{horizontalDefinition:e.horizontalDefinition,verticalDefinition:e.verticalDefinition})])}),[])});case"setShowDefs":return(0,i.Z)((0,i.Z)({},n),{},{showDefs:e.showDefs})}}),{rows:12,cols:22,showDefs:false},h),e=(0,l.Z)(n,2),t=e[0],d=t.matrix,v=t.definitions,p=t.rows,m=t.cols,x=t.showDefs,w=e[1],g=(0,u.useRef)(null),D=(0,u.useRef)(null),j=(0,u.useRef)((0,o.DZ1)((function(){return(0,o.rx1)(null,m)}),p)),Z=function(n,e){return function(t){n<j.current.length&&e<j.current[n].length&&(j.current[n][e]=t)}},y=(0,u.useMemo)((function(){return v.reduce((function(n,e){return(0,i.Z)((0,i.Z)((0,i.Z)({},n),e.isHorizontal&&{h:[].concat((0,r.Z)(n.h),[e])}),e.isVertical&&{v:[].concat((0,r.Z)(n.v),[e])})}),{h:[],v:[]})}),[v]),b=y.h,k=y.v,N=function(n,e){return function(t){var r=t.target.value.toUpperCase();/^[A-Z]?$/.test(r)&&w({type:"setValue",row:n,col:e,value:r})}},z=function(n,e){return function(){w({type:"toggleBlack",row:n,col:e})}},_=function(n,e){return function(t){w({type:"setDefinition",row:n.row,col:n.col,horizontalDefinition:"h"===e?t.target.value:n.horizontalDefinition,verticalDefinition:"v"===e?t.target.value:n.verticalDefinition})}},C=function(n,e){return function(t){var r,i,l,o,u,c;"ArrowUp"===t.key&&n>0&&(null===(i=j.current.reduceRight((function(t,r,i){return null==t&&i<n&&null!=r[e]?r[e]:t}),null))||void 0===i||i.focus());"ArrowDown"===t.key&&n<d.length-1&&(null===(l=j.current.reduce((function(t,r,i){return null==t&&i>n&&null!=r[e]?r[e]:t}),null))||void 0===l||l.focus());"ArrowLeft"===t.key&&e>0&&(null===(o=j.current[n].reduceRight((function(n,t,r){return null==n&&r<e&&null!=t?t:n}),null))||void 0===o||o.focus());"ArrowRight"===t.key&&e<d[n].length-1&&(null===(u=j.current[n].reduce((function(n,t,r){return null==n&&r>e&&null!=t?t:n}),null))||void 0===u||u.focus());"Backspace"===t.key&&0===(null===(r=j.current[n][e])||void 0===r?void 0:r.value).length&&e>0&&(null===(c=j.current[n].reduceRight((function(n,t,r){return null==n&&r<e&&null!=t?t:n}),null))||void 0===c||c.focus())}},R=function(n,e){return function(t){var r;/^[a-zA-Z]$/.test(t.key)&&e<d[n].length-1&&(null===(r=j.current[n].reduce((function(n,t,r){return null==n&&r>e&&null!=t?t:n}),null))||void 0===r||r.focus())}},A=(0,a.jsxs)("div",{className:"app",children:[(0,a.jsxs)("table",{className:"app_table",children:[(0,a.jsx)("caption",{className:"app_caption",children:"Parole Crociate"}),(0,a.jsx)("tbody",{children:(0,o.DZ1)((function(n){return(0,a.jsx)("tr",{children:(0,o.DZ1)((function(e){var t=v.find((function(t){return t.row===n&&t.col===e}));return(0,a.jsx)("td",{className:"app_td",onDoubleClick:z(n,e),children:s(n,e,d)?(0,a.jsx)("span",{className:"app_black"}):(0,a.jsxs)(a.Fragment,{children:[x&&null!=t&&(0,a.jsx)("span",{className:"app_definition",children:t.order}),(0,a.jsx)("input",{className:"app_input",name:"input-".concat(n,"-").concat(e),type:"text",value:d[n][e],onChange:N(n,e),maxLength:1,ref:Z(n,e),onKeyDown:C(n,e),onKeyUp:R(n,e),autoComplete:"off"})]})},"".concat(n,"-").concat(e))}),m)},n)}),p)})]}),x&&(0,a.jsxs)("div",{className:"app_definitions",children:[b.length&&(0,a.jsxs)("div",{className:"app_directionDefinitions",children:[(0,a.jsx)("h2",{children:"Orizzontali"}),(0,a.jsx)("ol",{children:b.map((function(n,e){return(0,a.jsx)("li",{value:n.order,children:(0,a.jsx)("input",{className:"app_definitionInput",name:"h-".concat(n.order),type:"text",value:n.horizontalDefinition,onChange:_(n,"h")})},"h-".concat(n.order,"-").concat(e))}))})]}),k.length&&(0,a.jsxs)("div",{className:"app_directionDefinitions",children:[(0,a.jsx)("h2",{children:"Verticali"}),(0,a.jsx)("ol",{children:k.map((function(n,e){return(0,a.jsx)("li",{value:n.order,children:(0,a.jsx)("input",{className:"app_definitionInput",name:"v-".concat(n.order),type:"text",value:n.verticalDefinition,onChange:_(n,"v")})},"v-".concat(n.order,"-").concat(e))}))})]})]})]}),V=(0,a.jsx)("form",{onSubmit:function(n){var e,t,r,i;n.preventDefault();var l=parseInt(null!==(e=null===(t=g.current)||void 0===t?void 0:t.value)&&void 0!==e?e:""),u=parseInt(null!==(r=null===(i=D.current)||void 0===i?void 0:i.value)&&void 0!==r?r:"");j.current=(0,o.DZ1)((function(){return(0,o.rx1)(null,u)}),l),w({type:"setSize",rows:isNaN(l)||l<2?12:l,cols:isNaN(u)||u<2?22:u})},children:(0,a.jsxs)("fieldset",{children:[(0,a.jsx)("legend",{children:"Opzioni"}),(0,a.jsx)("label",{htmlFor:"rows",children:"Numero di righe:"})," ",(0,a.jsx)("input",{name:"rows",defaultValue:p,ref:g,type:"number"})," ",(0,a.jsx)("label",{htmlFor:"cols",children:"Numero di colonne:"})," ",(0,a.jsx)("input",{name:"cols",defaultValue:m,ref:D,type:"number"})," ",(0,a.jsx)("button",{type:"submit",children:"Update"}),(0,a.jsx)("br",{}),(0,a.jsx)("input",{id:"showDefs",name:"showDefs",checked:x,onChange:function(n){w({type:"setShowDefs",showDefs:n.target.checked})},type:"checkbox",value:"showDefs"}),(0,a.jsx)("label",{htmlFor:"showDefs",children:"Mostra definizioni"})]})});return(0,a.jsxs)("div",{children:[(0,a.jsx)(c.Z,{children:"# Cruciverba\n\nAn implementation of the crosswords schema with automatic calculation of\ndefinitions number. Definitely not suitable for mobile devices, it will\nfrustrate you soooo much."}),A,V]})}},1611:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(7313),i=t(7973),l=t(6417),o=(0,r.memo)((function(n){var e=n.children;return(0,l.jsx)(i.D,{components:{h1:function(){return(0,r.createElement)(r.Fragment)}},children:e})}))}}]);