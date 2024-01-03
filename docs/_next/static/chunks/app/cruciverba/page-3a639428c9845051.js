(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[188],{446:function(e,n){var t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function classNames(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var i=typeof t;if("string"===i||"number"===i)e.push(t);else if(Array.isArray(t)){if(t.length){var o=classNames.apply(null,t);o&&e.push(o)}}else if("object"===i){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var l in t)r.call(t,l)&&t[l]&&e.push(l)}}}return e.join(" ")}e.exports?(classNames.default=classNames,e.exports=classNames):void 0!==(t=(function(){return classNames}).apply(n,[]))&&(e.exports=t)}()},9208:function(e,n,t){Promise.resolve().then(t.bind(t,4254))},4254:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Cruciverba_Cruciverba}});var r=t(7573),i=t(4262),o=(0,t(2916).Z)(function(e){return null!=e&&"function"==typeof e.clone?e.clone():(0,i.Z)(e,[],[],!0)}),l=t(6349),c=t(3401),a=(0,t(3373).Z)(function(e,n){return!!(!e^!n)}),s=t(7653),u=t(5505),d=t(7953);function _createMdxContent(e){let n=Object.assign({p:"p",h2:"h2",ul:"ul",li:"li",em:"em"},(0,d.ah)(),e.components);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(n.p,{children:"An implementation of the crosswords schema with automatic calculation of\ndefinitions number."}),"\n",(0,u.jsx)(n.h2,{children:"Instructions"}),"\n",(0,u.jsxs)(n.ul,{children:["\n",(0,u.jsx)(n.li,{children:"Click (or tap) on cells to activate the input. After providing a valid input\nyou're automatically moved to the next horizontal cell."}),"\n",(0,u.jsxs)(n.li,{children:["By double clicking a cell or pressing ",(0,u.jsx)(n.em,{children:"spacebar"})," you toggle the block.\nOn mobile devices it can be hard to toggle the block, you may have to focus\non an input and then ",(0,u.jsx)(n.em,{children:"very rapidly"})," double tap the cell."]}),"\n"]}),"\n",(0,u.jsxs)(n.p,{children:["You should try the ",(0,u.jsx)(n.em,{children:"Incroci Obbligati"})," mode, it seriously helped me to\nsolve some scheme that were ",(0,u.jsx)(n.em,{children:"DOOOOMED"})," on paper. Inspired by that I added\nsome other recurring schemes in the ",(0,u.jsx)(n.em,{children:"Settimana Enigmistica"}),"."]})]})}var README=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.ah)(),e.components);return n?(0,u.jsx)(n,Object.assign({},e,{children:(0,u.jsx)(_createMdxContent,e)})):_createMdxContent(e)},p=t(6692),h=t.n(p),f=t(446),m=t.n(f);let shouldBeBlack=(e,n,t)=>{if(null==t[e][n])return!0;let r=0===e||null==t[e-1][n],i=0===n||null==t[e][n-1],o=e===t.length-1||null==t[e+1][n],l=n===t[e].length-1||null==t[e][n+1];return r&&i&&o&&l},getDefinitions=e=>{let n=[];for(let t=0;t<e.length;t+=1)for(let r=0;r<e[t].length;r+=1)if(null!=e[t][r]){let i=0===t||null==e[t-1][r],o=0===r||null==e[t][r-1],l=t<e.length-1&&null!=e[t+1][r],c=r<e[t].length-1&&null!=e[t][r+1],a=i&&l,s=o&&c;(s||a)&&n.push({order:n.length+1,row:t,col:r,isHorizontal:s,isVertical:a,horizontalDefinition:"",verticalDefinition:""})}return n},dumpMatrix=(e,n)=>{for(let t=0;t<n.length;t+=1)for(let r=0;r<n[t].length;r+=1)t<e.length&&r<e[t].length&&(n[t][r]=e[t][r])},initReducer=e=>{let n,{rows:t,cols:r,showDefs:i=!0,showNumbers:o=!0,direction:a="H",oldState:s}=e,u=(0,c.Z)(()=>(0,l.Z)("",r),t);return null==s?n=getDefinitions(u):(dumpMatrix(s.matrix,u),n=getDefinitions(s.matrix)),{matrix:u,definitions:n,rows:t,cols:r,showDefs:i,showNumbers:o,direction:a}},isGreyRow=(e,n,t)=>e&&(n%2==1&&(t>=n&&t<13-n||t>=13-n-1&&t<13-(13-n-1))||t%2==1&&(n>=t&&n<13-t||n>=13-t-1&&n<13-(13-t-1)));var Cruciverba_Cruciverba=function(){let[{matrix:e,definitions:n,rows:t,cols:i,showDefs:l,showNumbers:u,direction:d},p]=(0,s.useReducer)((e,n)=>{switch(n.type){case"setValue":{let t=o(e.matrix);return t[n.row][n.col]=n.value,{...e,matrix:t}}case"toggleBlack":{let t=o(e.matrix);return t[n.row][n.col]=null==t[n.row][n.col]?"":null,{...e,matrix:t,definitions:getDefinitions(t)}}case"setSize":return initReducer({rows:n.rows,cols:n.cols,showDefs:e.showDefs,showNumbers:e.showNumbers,oldState:e});case"setDefinition":return{...e,definitions:e.definitions.reduce((e,t)=>[...e,{...t,...t.row===n.row&&t.col===n.col&&{horizontalDefinition:n.horizontalDefinition,verticalDefinition:n.verticalDefinition}}],[])};case"setShowDefs":return{...e,showDefs:n.showDefs};case"setShowNumbers":return{...e,showNumbers:n.showNumbers};case"setIncrociObbligatiMode":return initReducer({rows:13,cols:9,showDefs:!1,showNumbers:!1});case"setRicercaMode":{let e=initReducer({rows:12,cols:14,showDefs:!1,showNumbers:!0});for(let n=0;n<3;n+=1)e.matrix[0][n]=null;return{...e,definitions:getDefinitions(e.matrix)}}case"wipe":{let n=e.matrix.map(e=>e.map(e=>null==e?null:""));return initReducer({rows:e.rows,cols:e.cols,showDefs:e.showDefs,showNumbers:e.showNumbers,oldState:{...e,matrix:n,definitions:getDefinitions(n)}})}case"setCorniciConcentricheMode":{let e=initReducer({rows:13,cols:13,showDefs:!1,showNumbers:!1});return e.matrix[Math.floor(6.5)][Math.floor(6.5)]=null,{...e,definitions:getDefinitions(e.matrix)}}case"setDirection":return{...e,direction:n.direction}}},{rows:12,cols:22,showDefs:!1,showNumbers:!0,direction:"H"},initReducer),f=(0,s.useRef)(null),v=(0,s.useRef)(null),_=(0,s.useRef)([]);(0,s.useMemo)(()=>{_.current=(0,c.Z)(e=>(0,c.Z)(n=>{var t,r;return null===(r=_.current)||void 0===r?void 0:null===(t=r[e])||void 0===t?void 0:t[n]},i),t)},[t,i]);let setRefCallbackFactory=(e,n)=>t=>{e<_.current.length&&n<_.current[e].length&&(_.current[e][n]=t)},{h:y,v:g}=(0,s.useMemo)(()=>n.reduce((e,n)=>({...e,...n.isHorizontal&&{h:[...e.h,n]},...n.isVertical&&{v:[...e.v,n]}}),{h:[],v:[]}),[n]),handleChangeFactory=(e,n)=>t=>{let r=t.target.value.toUpperCase();/^[A-Z]?$/.test(r)&&p({type:"setValue",row:e,col:n,value:r})},handleToggleBlackFactory=(e,n)=>()=>{p({type:"toggleBlack",row:e,col:n})},handleDefinitionFactory=(e,n)=>t=>{p({type:"setDefinition",row:e.row,col:e.col,horizontalDefinition:"h"===n?t.target.value:e.horizontalDefinition,verticalDefinition:"v"===n?t.target.value:e.verticalDefinition})},handleChangeDirection=e=>{p({type:"setDirection",direction:e.target.value})},handleSimpleAction=e=>()=>{p({type:e})},handleKeyDownNavigateFactory=(n,t)=>r=>{var i,o,l,c,a,s,u;" "===r.key&&(r.preventDefault(),p({type:"toggleBlack",row:n,col:t})),"ArrowUp"===r.key&&n>0&&(null===(o=_.current.reduceRight((e,r,i)=>null==e&&i<n&&null!=r[t]?r[t]:e,null))||void 0===o||o.focus()),"ArrowDown"===r.key&&n<e.length-1&&(null===(l=_.current.reduce((e,r,i)=>null==e&&i>n&&null!=r[t]?r[t]:e,null))||void 0===l||l.focus()),"ArrowLeft"===r.key&&t>0&&(null===(c=_.current[n].reduceRight((e,n,r)=>null==e&&r<t&&null!=n?n:e,null))||void 0===c||c.focus()),"ArrowRight"===r.key&&t<e[n].length-1&&(null===(a=_.current[n].reduce((e,n,r)=>null==e&&r>t&&null!=n?n:e,null))||void 0===a||a.focus()),"Backspace"===r.key&&0===(null===(i=_.current[n][t])||void 0===i?void 0:i.value).length&&("H"===d&&t>0?null===(s=_.current[n].reduceRight((e,n,r)=>null==e&&r<t&&null!=n?n:e,null))||void 0===s||s.focus():"V"===d&&n>0&&(null===(u=_.current.reduceRight((e,r,i)=>null==e&&i<n&&null!=r[t]?r[t]:e,null))||void 0===u||u.focus()))},handleKeyUpNavigateFactory=(n,t)=>r=>{if(/^[a-zA-Z]$/.test(r.key)){var i,o;"H"===d&&t<e[n].length-1?null===(i=_.current[n].reduce((e,n,r)=>null==e&&r>t&&null!=n?n:e,null))||void 0===i||i.focus():"V"===d&&n<e.length-1&&(null===(o=_.current.reduce((e,r,i)=>null==e&&i>n&&null!=r[t]?r[t]:e,null))||void 0===o||o.focus())}},b=13===t&&9===i&&!1===l&&!1===u,x=12===t&&14===i&&!1===l&&!0===u&&null==e[0][0]&&null==e[0][1]&&null==e[0][2],w=(0,s.useMemo)(()=>13===t&&13===i&&!1===l&&!1===u&&e.every((e,n)=>e.every((e,t)=>a(n===Math.floor(6.5)&&t===Math.floor(6.5),null!=e))),[e,i,t,l,u]);(0,s.useEffect)(()=>{null!=f.current&&(f.current.value="".concat(t)),null!=v.current&&(v.current.value="".concat(i))},[t,i]);let j=(0,r.jsxs)("div",{className:h().app,children:[(0,r.jsxs)("table",{className:h().app_table,children:[(0,r.jsx)("caption",{className:h().app_caption,children:b?"Incroci Obbligati":x?"Ricerca di Parole Crociate":w?"Cornici Concentriche":"Parole Crociate"}),(0,r.jsx)("tbody",{children:(0,c.Z)(t=>(0,r.jsx)("tr",{children:(0,c.Z)(i=>{let o=n.find(e=>e.row===t&&e.col===i);return(0,r.jsx)("td",{className:m()({[h().app_td]:!0,[h().app_td__grey]:isGreyRow(w,t,i)}),onDoubleClick:handleToggleBlackFactory(t,i),children:shouldBeBlack(t,i,e)?(0,r.jsx)("span",{className:h().app_black}):(0,r.jsxs)(r.Fragment,{children:[u&&null!=o&&(0,r.jsx)("span",{className:h().app_definition,children:o.order}),(0,r.jsx)("input",{className:h().app_input,name:"input-".concat(t,"-").concat(i),type:"text",value:e[t][i],onChange:handleChangeFactory(t,i),maxLength:1,ref:setRefCallbackFactory(t,i),onKeyDown:handleKeyDownNavigateFactory(t,i),onKeyUp:handleKeyUpNavigateFactory(t,i),autoComplete:"off"})]})},"".concat(t,"-").concat(i))},i)},t),t)})]}),l&&(0,r.jsxs)("div",{className:h().app_definitions,children:[y.length&&(0,r.jsxs)("div",{className:h().app_directionDefinitions,children:[(0,r.jsx)("h2",{children:"Orizzontali"}),(0,r.jsx)("ol",{children:y.map((e,n)=>(0,r.jsx)("li",{value:e.order,children:(0,r.jsx)("input",{className:h().app_definitionInput,name:"h-".concat(e.order),type:"text",value:e.horizontalDefinition,onChange:handleDefinitionFactory(e,"h")})},"h-".concat(e.order,"-").concat(n)))})]}),g.length&&(0,r.jsxs)("div",{className:h().app_directionDefinitions,children:[(0,r.jsx)("h2",{children:"Verticali"}),(0,r.jsx)("ol",{children:g.map((e,n)=>(0,r.jsx)("li",{value:e.order,children:(0,r.jsx)("input",{className:h().app_definitionInput,name:"v-".concat(e.order),type:"text",value:e.verticalDefinition,onChange:handleDefinitionFactory(e,"v")})},"v-".concat(e.order,"-").concat(n)))})]})]})]}),D=(0,r.jsx)("form",{onSubmit:e=>{var n,t,r,i;e.preventDefault();let o=parseInt(null!==(r=null===(n=f.current)||void 0===n?void 0:n.value)&&void 0!==r?r:""),l=parseInt(null!==(i=null===(t=v.current)||void 0===t?void 0:t.value)&&void 0!==i?i:"");p({type:"setSize",rows:isNaN(o)||o<2?12:o,cols:isNaN(l)||l<2?22:l})},children:(0,r.jsxs)("fieldset",{children:[(0,r.jsx)("legend",{children:"Opzioni"}),(0,r.jsx)("label",{htmlFor:"rows",children:"Numero di righe:"})," ",(0,r.jsx)("input",{name:"rows",defaultValue:t,ref:f,type:"number"})," ",(0,r.jsx)("label",{htmlFor:"cols",children:"Numero di colonne:"})," ",(0,r.jsx)("input",{name:"cols",defaultValue:i,ref:v,type:"number"})," ",(0,r.jsx)("button",{type:"submit",children:"Update"}),(0,r.jsx)("br",{}),(0,r.jsx)("input",{id:"showDefs",name:"showDefs",checked:l,onChange:e=>{p({type:"setShowDefs",showDefs:e.target.checked})},type:"checkbox",value:"showDefs"}),(0,r.jsx)("label",{htmlFor:"showDefs",children:"Mostra definizioni"}),(0,r.jsx)("br",{}),(0,r.jsx)("input",{id:"showNumbers",name:"showNumbers",checked:u,onChange:e=>{p({type:"setShowNumbers",showNumbers:e.target.checked})},type:"checkbox",value:"showNumbers"}),(0,r.jsx)("label",{htmlFor:"showNumbers",children:"Mostra numeri"}),(0,r.jsx)("br",{}),(0,r.jsx)("input",{id:"directionHorizontal",name:"direction",checked:"H"===d,onChange:handleChangeDirection,type:"radio",value:"H"}),(0,r.jsx)("label",{htmlFor:"directionHorizontal",children:"Muoviti in orizzontale"})," ",(0,r.jsx)("input",{id:"directionVertical",name:"direction",checked:"V"===d,onChange:handleChangeDirection,type:"radio",value:"V"}),(0,r.jsx)("label",{htmlFor:"directionVertical",children:"Muoviti in verticale"}),(0,r.jsx)("br",{}),(0,r.jsxs)("button",{onClick:handleSimpleAction("setIncrociObbligatiMode"),type:"button",children:[(0,r.jsx)("em",{children:"Incroci obbligati"})," mode"]})," ",(0,r.jsxs)("button",{onClick:handleSimpleAction("setRicercaMode"),type:"button",children:[(0,r.jsx)("em",{children:"Ricerca di Parole Crociate"})," mode"]})," ",(0,r.jsxs)("button",{onClick:handleSimpleAction("setCorniciConcentricheMode"),type:"button",children:[(0,r.jsx)("em",{children:"Cornici Concentriche"})," mode"]})," ",(0,r.jsx)("button",{onClick:handleSimpleAction("wipe"),type:"button",children:"Wipe"})]})});return(0,r.jsxs)("div",{children:[(0,r.jsx)(README,{}),(0,r.jsx)("div",{className:h().app_wrapper,children:j}),D]})}},6692:function(e){e.exports={app:"Cruciverba_app__u5eEw",app_table:"Cruciverba_app_table__o4zrp",app_td:"Cruciverba_app_td__gJ3AK",app_td__grey:"Cruciverba_app_td__grey__ROaCo",app_input:"Cruciverba_app_input__Wycwo",app_definition:"Cruciverba_app_definition__r7cX9",app_black:"Cruciverba_app_black__tGblG",app_caption:"Cruciverba_app_caption__3n9kA",app_definitions:"Cruciverba_app_definitions__AuKDC",app_directionDefinitions:"Cruciverba_app_directionDefinitions__XnQTI",app_definitionInput:"Cruciverba_app_definitionInput__K8pjn",app_wrapper:"Cruciverba_app_wrapper__N4Rd2"}},8294:function(e,n,t){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=t(7653),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function q(e,n,t){var r,o={},s=null,u=null;for(r in void 0!==t&&(s=""+t),void 0!==n.key&&(s=""+n.key),void 0!==n.ref&&(u=n.ref),n)l.call(n,r)&&!a.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:i,type:e,key:s,ref:u,props:o,_owner:c.current}}n.Fragment=o,n.jsx=q,n.jsxs=q},7573:function(e,n,t){"use strict";e.exports=t(8294)},4223:function(e,n,t){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=t(7653),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function q(e,n,t){var r,o={},s=null,u=null;for(r in void 0!==t&&(s=""+t),void 0!==n.key&&(s=""+n.key),void 0!==n.ref&&(u=n.ref),n)l.call(n,r)&&!a.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:i,type:e,key:s,ref:u,props:o,_owner:c.current}}n.Fragment=o,n.jsx=q,n.jsxs=q},5505:function(e,n,t){"use strict";e.exports=t(4223)},7953:function(e,n,t){"use strict";t.d(n,{ah:function(){return useMDXComponents}});var r=t(7653);let i=r.createContext({});function useMDXComponents(e){let n=r.useContext(i);return r.useMemo(()=>"function"==typeof e?e(n):{...n,...e},[n,e])}},4262:function(e,n,t){"use strict";t.d(n,{Z:function(){return function _clone(e,n,t,i){var copy=function(r){for(var o=n.length,l=0;l<o;){if(e===n[l])return t[l];l+=1}for(var c in n[l]=e,t[l]=r,e)e.hasOwnProperty(c)&&(r[c]=i?_clone(e[c],n,t,!0):e[c]);return r};switch((0,r.Z)(e)){case"Object":return copy(Object.create(Object.getPrototypeOf(e)));case"Array":return copy([]);case"Date":return new Date(e.valueOf());case"RegExp":return new RegExp(e.source,(e.global?"g":"")+(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.sticky?"y":"")+(e.unicode?"u":""));case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":return e.slice();default:return e}}}});var r=t(5126)},2916:function(e,n,t){"use strict";t.d(n,{Z:function(){return _curry1}});var r=t(5884);function _curry1(e){return function f1(n){return 0==arguments.length||(0,r.Z)(n)?f1:e.apply(this,arguments)}}},3373:function(e,n,t){"use strict";t.d(n,{Z:function(){return _curry2}});var r=t(2916),i=t(5884);function _curry2(e){return function f2(n,t){switch(arguments.length){case 0:return f2;case 1:return(0,i.Z)(n)?f2:(0,r.Z)(function(t){return e(n,t)});default:return(0,i.Z)(n)&&(0,i.Z)(t)?f2:(0,i.Z)(n)?(0,r.Z)(function(n){return e(n,t)}):(0,i.Z)(t)?(0,r.Z)(function(t){return e(n,t)}):e(n,t)}}}},5884:function(e,n,t){"use strict";function _isPlaceholder(e){return null!=e&&"object"==typeof e&&!0===e["@@functional/placeholder"]}t.d(n,{Z:function(){return _isPlaceholder}})},6349:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(3373),i=(0,t(2916).Z)(function(e){return function(){return e}}),o=t(3401),l=(0,r.Z)(function(e,n){return(0,o.Z)(i(e),n)})},3401:function(e,n,t){"use strict";var r=(0,t(3373).Z)(function(e,n){var t,r=Number(n),i=0;if(r<0||isNaN(r))throw RangeError("n must be a non-negative number");for(t=Array(r);i<r;)t[i]=e(i),i+=1;return t});n.Z=r},5126:function(e,n,t){"use strict";var r=(0,t(2916).Z)(function(e){return null===e?"Null":void 0===e?"Undefined":Object.prototype.toString.call(e).slice(8,-1)});n.Z=r}},function(e){e.O(0,[293,197,744],function(){return e(e.s=9208)}),_N_E=e.O()}]);