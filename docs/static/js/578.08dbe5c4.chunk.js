"use strict";(self.webpackChunkminkiele_github_io=self.webpackChunkminkiele_github_io||[]).push([[578],{7578:function(e,n,t){t.r(n),t.d(n,{default:function(){return l}});var r=t(885),a=t(7363),u=t(969),c=t(6417);function i(e){const n=Object.assign({p:"p"},e.components);return(0,c.jsx)(n.p,{children:"Enunciate a number in italian language. I tried to put down in code the way I think we enunciate\nthe numbers in Italy. This demo will generate a pseudo-random number between 1 and 10^30,\nbut it could really go up wherever you want."})}var o=function(e={}){const{wrapper:n}=e.components||{};return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(i,e)})):i(e)},s=function(){var e=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:32,n=Math.floor(Math.random()*e)+1,t="";t.length<n;){var r=Math.floor(10*Math.random());(1===n||t.length>0||0!==r)&&(t+=r)}return t}();return{inNumero:e,aParole:(0,u.UT)(e)}},l=function(){var e=(0,a.useState)(),n=(0,r.Z)(e,2),t=n[0],u=n[1],i=function(){u(s())};return(0,a.useEffect)((function(){i()}),[]),(0,c.jsxs)("div",{children:[(0,c.jsx)(o,{}),null!=t&&(0,c.jsxs)("h2",{children:[t.aParole," (",(0,c.jsx)("small",{children:t.inNumero}),")"]}),(0,c.jsx)("button",{onClick:i,children:"Prossimo numero"})]})}},969:function(e,n,t){t.d(n,{UT:function(){return i},sk:function(){return h}});var r=function(e){switch(e){case 1:return"uno";case 2:return"due";case 3:return"tre";case 4:return"quattro";case 5:return"cinque";case 6:return"sei";case 7:return"sette";case 8:return"otto";case 9:return"nove";default:return""}},a=function(e,n){return 1===n||8===n?"":e},u=function e(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];switch(n){case 0:return"";case 1:return t?" mille":"mila ";case 2:return t?" un milione":" milioni ";case 3:return t?" un miliardo":" miliardi ";default:var r=["",e(n-3),"miliardi",""];return n>4&&r.splice(2,0,"di"),r.join(" ")}},c=function(e,n){var t=parseInt(e[0]),c=parseInt(e[1]),i=parseInt(e[2]),o=[];return"000"===e?"":("001"===e&&n>0?o.push(u(n,!0)):(o.push(function(e){switch(e){case 0:return"";case 1:return"cento";default:return"".concat(r(e),"cento")}}(t)),o.push(function(e,n){switch(e){case 0:return r(n);case 1:switch(n){case 0:return"dieci";case 1:return"undici";case 2:return"dodici";case 3:return"tredici";case 4:return"quattordici";case 5:return"quindici";case 6:return"sedici";case 7:return"diciassette";case 8:return"diciotto";case 9:return"diciannove";default:return""}case 2:return"vent".concat(a("i",n)).concat(r(n));case 3:return"trent".concat(a("a",n)).concat(r(n));case 4:return"quarant".concat(a("a",n)).concat(r(n));case 5:return"cinquant".concat(a("a",n)).concat(r(n));case 6:return"sessant".concat(a("a",n)).concat(r(n));case 7:return"settant".concat(a("a",n)).concat(r(n));case 8:return"ottant".concat(a("a",n)).concat(r(n));case 9:return"novant".concat(a("a",n)).concat(r(n));default:return""}}(c,i)),o.push(u(n))),o.join(""))},i=function(e){var n,t,r="-"===(e=e.toString())[0],a=e.replace("-","");if("0"===a)return"zero";var i,o=9*Math.ceil(a.length/9)-a.length,s=null===(n="".concat((i=o,Array(i).fill(0).join(""))).concat(a).match(/\d{3}/g))||void 0===n?void 0:n.reduce((function(e,n,t){var r=Math.floor(t/3);return null==e[r]&&(e[r]=[]),(r>0||e[r].length>0||"000"!==n)&&e[r].push(n),e}),[]),l=null!==(t=null===s||void 0===s?void 0:s.map((function(e,n,t){return function(e,n){if(1===e.length&&"001"===e[0]&&n>0)return u(3*n,!0);var t=[];return t.push(e.map((function(n,t){return c(n,e.length-t-1)})).join(" ")),e.every((function(e){return"000"===e}))||t.push(u(3*n)),t.join("")}(e,(null===t||void 0===t?void 0:t.length)-n-1)})))&&void 0!==t?t:[];r&&l.unshift("meno");var d=l.join(" ").trim();return"3"!==a&&/3$/.test(a)?d.replace(/tre$/,"tr\xe9"):d},o=function(e){var n=e.getHours(),t=e.getMinutes(),r=e.getSeconds(),a=[];switch(a.push(0===n||1===n||12===n?"\xe8":"sono le"),n){case 0:a.push("mezzanotte");break;case 1:a.push("l'una");break;case 12:a.push("mezzogiorno");break;default:a.push(i(n))}switch(t>0&&r>0?a.push(","):t>0&&a.push("e"),t){case 0:break;case 1:a.push("un minuto");break;default:a.push("".concat(i(t)," minuti"))}switch(r>0&&a.push("e"),r){case 0:break;case 1:a.push("un secondo");break;default:a.push("".concat(i(r)," secondi"))}return a.join(" ").replace(" ,",",")},s=function(e){switch(e){case 0:return"Domenica";case 1:return"Luned\xec";case 2:return"Marted\xec";case 3:return"Mercoled\xec";case 4:return"Gioved\xec";case 5:return"Venerd\xec";case 6:return"Sabato";default:return""}},l=function(e){switch(e){case 0:return"Gennaio";case 1:return"Febbraio";case 2:return"Marzo";case 3:return"Aprile";case 4:return"Maggio";case 5:return"Giugno";case 6:return"Luglio";case 7:return"Agosto";case 8:return"Settembre";case 9:return"Ottobre";case 10:return"Novembre";case 11:return"Dicembre";default:return""}},d=function(e){return["oggi \xe8",s(e.getDay()),i(e.getDate()),l(e.getMonth()),i(e.getFullYear()).replace(/\s+/,"")].join(" ")},h=function(e){var n=[d(e),o(e)],t=e.getHours();return n.splice(1,0,"e".concat(t<2||12===t?"d":"")),n.join(" ")}}}]);