"use strict";(self.webpackChunkminkiele_github_io_x=self.webpackChunkminkiele_github_io_x||[]).push([[5],{5:function(e,n,t){t.r(n);var r=t(885),c=t(791),u=t(453),a=t(184),i=function(){return(0,u.sk)(new Date)};n.default=function(){var e=(0,c.useState)(i()),n=(0,r.Z)(e,2),t=n[0],u=n[1];return(0,c.useEffect)((function(){var e=setInterval((function(){u(i())}),1e3);return function(){clearInterval(e)}}),[]),(0,a.jsx)("div",{children:(0,a.jsx)("h2",{children:t})})}},453:function(e,n,t){t.d(n,{UT:function(){return i},sk:function(){return h}});var r=function(e){switch(e){case 1:return"uno";case 2:return"due";case 3:return"tre";case 4:return"quattro";case 5:return"cinque";case 6:return"sei";case 7:return"sette";case 8:return"otto";case 9:return"nove";default:return""}},c=function(e,n){return 1===n||8===n?"":e},u=function e(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];switch(n){case 0:return"";case 1:return t?" mille":"mila ";case 2:return t?" un milione":" milioni ";case 3:return t?" un miliardo":" miliardi ";default:var r=["",e(n-3),"miliardi",""];return n>4&&r.splice(2,0,"di"),r.join(" ")}},a=function(e,n){var t=parseInt(e[0]),a=parseInt(e[1]),i=parseInt(e[2]),s=[];return"000"===e?"":("001"===e&&n>0?s.push(u(n,!0)):(s.push(function(e){switch(e){case 0:return"";case 1:return"cento";default:return"".concat(r(e),"cento")}}(t)),s.push(function(e,n){switch(e){case 0:return r(n);case 1:switch(n){case 0:return"dieci";case 1:return"undici";case 2:return"dodici";case 3:return"tredici";case 4:return"quattordici";case 5:return"quindici";case 6:return"sedici";case 7:return"diciassette";case 8:return"diciotto";case 9:return"diciannove";default:return""}case 2:return"vent".concat(c("i",n)).concat(r(n));case 3:return"trent".concat(c("a",n)).concat(r(n));case 4:return"quarant".concat(c("a",n)).concat(r(n));case 5:return"cinquant".concat(c("a",n)).concat(r(n));case 6:return"sessant".concat(c("a",n)).concat(r(n));case 7:return"settant".concat(c("a",n)).concat(r(n));case 8:return"ottant".concat(c("a",n)).concat(r(n));case 9:return"novant".concat(c("a",n)).concat(r(n));default:return""}}(a,i)),s.push(u(n))),s.join(""))},i=function(e){var n,t,r="-"===(e=e.toString())[0],c=e.replace("-","");if("0"===c)return"zero";var i,s=9*Math.ceil(c.length/9)-c.length,o=null===(n="".concat((i=s,Array(i).fill(0).join(""))).concat(c).match(/\d{3}/g))||void 0===n?void 0:n.reduce((function(e,n,t){var r=Math.floor(t/3);return null==e[r]&&(e[r]=[]),(r>0||e[r].length>0||"000"!==n)&&e[r].push(n),e}),[]),l=null!==(t=null===o||void 0===o?void 0:o.map((function(e,n,t){return function(e,n){if(1===e.length&&"001"===e[0]&&n>0)return u(3*n,!0);var t=[];return t.push(e.map((function(n,t){return a(n,e.length-t-1)})).join(" ")),e.every((function(e){return"000"===e}))||t.push(u(3*n)),t.join("")}(e,(null===t||void 0===t?void 0:t.length)-n-1)})))&&void 0!==t?t:[];r&&l.unshift("meno");var d=l.join(" ").trim();return"3"!==c&&/3$/.test(c)?d.replace(/tre$/,"tr\xe9"):d},s=function(e){var n=e.getHours(),t=e.getMinutes(),r=e.getSeconds(),c=[];switch(c.push(0===n||1===n||12===n?"\xe8":"sono le"),n){case 0:c.push("mezzanotte");break;case 1:c.push("l'una");break;case 12:c.push("mezzogiorno");break;default:c.push(i(n))}switch(t>0&&r>0?c.push(","):t>0&&c.push("e"),t){case 0:break;case 1:c.push("un minuto");break;default:c.push("".concat(i(t)," minuti"))}switch(r>0&&c.push("e"),r){case 0:break;case 1:c.push("un secondo");break;default:c.push("".concat(i(r)," secondi"))}return c.join(" ").replace(" ,",",")},o=function(e){switch(e){case 0:return"Domenica";case 1:return"Luned\xec";case 2:return"Marted\xec";case 3:return"Mercoled\xec";case 4:return"Gioved\xec";case 5:return"Venerd\xec";case 6:return"Sabato";default:return""}},l=function(e){switch(e){case 0:return"Gennaio";case 1:return"Febbraio";case 2:return"Marzo";case 3:return"Aprile";case 4:return"Maggio";case 5:return"Giugno";case 6:return"Luglio";case 7:return"Agosto";case 8:return"Settembre";case 9:return"Ottobre";case 10:return"Novembre";case 11:return"Dicembre";default:return""}},d=function(e){return["oggi \xe8",o(e.getDay()),i(e.getDate()),l(e.getMonth()),i(e.getFullYear()).replace(/\s+/,"")].join(" ")},h=function(e){var n=[d(e),s(e)],t=e.getHours();return n.splice(1,0,"e".concat(t<2||12===t?"d":"")),n.join(" ")}}}]);
//# sourceMappingURL=5.442e734a.chunk.js.map