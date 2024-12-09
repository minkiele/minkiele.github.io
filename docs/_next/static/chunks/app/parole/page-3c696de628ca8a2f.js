(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1350],{5596:function(e,t,n){Promise.resolve().then(n.bind(n,5528))},5528:function(e,t,n){"use strict";n.d(t,{default:function(){return l}});var r=n(7573),c=n(7653),a=n(6957),u=n(9429);function s(e){let t=Object.assign({p:"p"},(0,u.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Here a full date is enunciated in italian. I had to accomodate some exceptions for the name of the hours."}),"\n",(0,r.jsx)(t.p,{children:"##\xa0A note on accessibility"}),"\n",(0,r.jsx)(t.p,{children:"Since this is a live clock it will announce the time every 30 seconds."})]})}var i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,u.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(s,e)})):s(e)};let o=()=>{let e=new Date;return{now:e,time:(0,a.sk)(e)}};var l=()=>{let[{time:e,now:t},n]=(0,c.useState)({});(0,c.useEffect)(()=>{n(o());let e=setInterval(()=>{n(o())},1e3);return()=>{clearInterval(e)}},[]);let a=(0,c.useMemo)(()=>{var e;return(null!==(e=null==t?void 0:t.getSeconds())&&void 0!==e?e:1)%30==0},[t]);return(0,r.jsxs)("div",{children:[(0,r.jsx)(i,{}),(0,r.jsx)("h2",{"aria-live":a?"polite":"off",children:e})]})}},6957:function(e,t,n){"use strict";n.d(t,{UT:function(){return d},sk:function(){return g}});let r=e=>{switch(e){case 1:return"uno";case 2:return"due";case 3:return"tre";case 4:return"quattro";case 5:return"cinque";case 6:return"sei";case 7:return"sette";case 8:return"otto";case 9:return"nove";default:return""}},c=e=>{switch(e){case 0:return"";case 1:return"cento";default:return"".concat(r(e),"cento")}},a=(e,t)=>1===t||8===t?"":e,u=(e,t)=>{switch(e){case 0:return r(t);case 1:switch(t){case 0:return"dieci";case 1:return"undici";case 2:return"dodici";case 3:return"tredici";case 4:return"quattordici";case 5:return"quindici";case 6:return"sedici";case 7:return"diciassette";case 8:return"diciotto";case 9:return"diciannove";default:return""}case 2:return"vent".concat(a("i",t)).concat(r(t));case 3:return"trent".concat(a("a",t)).concat(r(t));case 4:return"quarant".concat(a("a",t)).concat(r(t));case 5:return"cinquant".concat(a("a",t)).concat(r(t));case 6:return"sessant".concat(a("a",t)).concat(r(t));case 7:return"settant".concat(a("a",t)).concat(r(t));case 8:return"ottant".concat(a("a",t)).concat(r(t));case 9:return"novant".concat(a("a",t)).concat(r(t));default:return""}},s=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];switch(e){case 0:return"";case 1:return t?" mille":"mila ";case 2:return t?" un milione":" milioni ";case 3:return t?" un miliardo":" miliardi ";default:{let t=["",s(e-3),"miliardi",""];return e>4&&t.splice(2,0,"di"),t.join(" ")}}},i=(e,t)=>{let n=parseInt(e[0]),r=parseInt(e[1]),a=parseInt(e[2]),i=[];return"000"===e?"":("001"===e&&t>0?i.push(s(t,!0)):(i.push(c(n)),i.push(u(r,a)),i.push(s(t))),i.join(""))},o=(e,t)=>{if(1===e.length&&"001"===e[0]&&t>0)return s(3*t,!0);{let n=[];return n.push(e.map((t,n)=>i(t,e.length-n-1)).join(" ")),e.every(e=>"000"===e)||n.push(s(3*t)),n.join("")}},l=e=>Array(e).fill(0).join(""),d=e=>{var t,n;let r="-"===(e=e.toString())[0],c=e.replace("-","");if("0"===c)return"zero";let a=9*Math.ceil(c.length/9)-c.length,u=null===(t="".concat(l(a)).concat(c).match(/\d{3}/g))||void 0===t?void 0:t.reduce((e,t,n)=>{let r=Math.floor(n/3);return null==e[r]&&(e[r]=[]),(r>0||e[r].length>0||"000"!==t)&&e[r].push(t),e},[]),s=null!==(n=null==u?void 0:u.map((e,t,n)=>o(e,(null==n?void 0:n.length)-t-1)))&&void 0!==n?n:[];r&&s.unshift("meno");let i=s.join(" ").trim();return"3"!==c&&/3$/.test(c)?i.replace(/tre$/,"tr\xe9"):i},h=e=>{let t=e.getHours(),n=e.getMinutes(),r=e.getSeconds(),c=[];switch(c.push(0===t||1===t||12===t?"\xe8":"sono le"),t){case 0:c.push("mezzanotte");break;case 1:c.push("l'una");break;case 12:c.push("mezzogiorno");break;default:c.push(d(t))}switch(n>0&&r>0?c.push(","):n>0&&c.push("e"),n){case 0:break;case 1:c.push("un minuto");break;default:c.push("".concat(d(n)," minuti"))}switch(r>0&&c.push("e"),r){case 0:break;case 1:c.push("un secondo");break;default:c.push("".concat(d(r)," secondi"))}return c.join(" ").replace(" ,",",")},p=e=>{switch(e){case 0:return"Domenica";case 1:return"Luned\xec";case 2:return"Marted\xec";case 3:return"Mercoled\xec";case 4:return"Gioved\xec";case 5:return"Venerd\xec";case 6:return"Sabato";default:return""}},f=e=>{switch(e){case 0:return"Gennaio";case 1:return"Febbraio";case 2:return"Marzo";case 3:return"Aprile";case 4:return"Maggio";case 5:return"Giugno";case 6:return"Luglio";case 7:return"Agosto";case 8:return"Settembre";case 9:return"Ottobre";case 10:return"Novembre";case 11:return"Dicembre";default:return""}},m=e=>["oggi \xe8",p(e.getDay()),d(e.getDate()),f(e.getMonth()),d(e.getFullYear()).replace(/\s+/,"")].join(" "),g=e=>{let t=[m(e),h(e)],n=e.getHours();return t.splice(1,0,"e".concat(n<2||12===n?"d":"")),t.join(" ")}},9429:function(e,t,n){"use strict";n.d(t,{ah:function(){return a}});var r=n(7653);let c=r.createContext({});function a(e){let t=r.useContext(c);return r.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}}},function(e){e.O(0,[1293,286,1744],function(){return e(e.s=5596)}),_N_E=e.O()}]);