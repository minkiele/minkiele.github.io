(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[489],{3241:function(e,t,r){Promise.resolve().then(r.bind(r,849))},849:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var a=r(7573),n=r(772),l=r(7653);let o="io.github.minkiele.theme",c="dark";"light"!==c&&"dark"!==c&&(c=void 0);var i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,[t,r]=(0,l.useState)(),a=(0,l.useCallback)(t=>{r(null!=t?t:e)},[e]);return(0,l.useEffect)(()=>{var t;let a=null!==(t=localStorage.getItem(o))&&void 0!==t?t:void 0;(null==a||"light"!=a&&"dark"!=a)&&(a=e),r(a)},[e]),(0,l.useEffect)(()=>{let r=null!=t?t:e;null==r?localStorage.removeItem(o):localStorage.setItem(o,r)},[t,e]),(0,l.useEffect)(()=>{var e;null===(e=document.querySelector("html"))||void 0===e||e.classList.toggle("dark","dark"===t)},[t]),{theme:t,setTheme:a}},u=r(8375),s=r(7033),d=r(2205),m=r.n(d);let h=(0,r(3399).H)(["themeSelector_switch"],m());var v=e=>{var t;let{theme:r,onChange:n}=e;return(0,a.jsxs)("div",{className:m().themeSelector,children:[(0,a.jsxs)("p",{className:"sr-only",children:["Current theme: ","dark"===r?"dark":"light"]}),(0,a.jsx)("button",{"aria-label":"Change theme to ".concat("dark"===r?"light":"dark"),className:h.themeSelector_switch,onClick:(t="dark"===r?"light":"dark",()=>{n(t)}),children:"\uD83D\uDD26"})]})};function f(e){let{children:t}=e,{theme:r,setTheme:o}=i();return(0,a.jsxs)("div",{className:"App",children:[(0,a.jsxs)("aside",{children:[(0,a.jsx)(u.Z,{menu:s.IT}),(0,a.jsx)(v,{onChange:o,theme:r})]}),(0,a.jsx)("article",{id:"main-article",children:t}),(0,a.jsx)(l.Suspense,{fallback:null,children:(0,a.jsx)(n.Su,{})})]})}},772:function(e,t,r){"use strict";r.d(t,{B:function(){return o},Su:function(){return i}});var a=r(7653),n=r(2859);let l=e=>{var t,r;null===(t=(r=window).gtag)||void 0===t||t.call(r,"config","G-97E9ECN60Y",{page_path:e})},o=e=>{var t,r;let{action:a,category:n,label:l,value:o}=e;null===(r=window)||void 0===r||null===(t=r.gtag)||void 0===t||t.call(r,"event",a,{event_category:n,event_label:l,value:o})},c=()=>{let e=(0,n.usePathname)(),t=(0,n.useSearchParams)();(0,a.useEffect)(()=>{l("".concat(e,"?").concat(t))},[e,t])};function i(){return c(),null}},3399:function(e,t,r){"use strict";r.d(t,{H:function(){return l}});var a=r(2368),n=r.n(a);let l=(e,t)=>e.reduce((e,r)=>({...e,[r]:"".concat(t[r]," ").concat(n().className)}),{})},7033:function(e,t,r){"use strict";r.d(t,{IT:function(){return n},j0:function(){return l}});let a=[{route:"/",name:"Minkiele",setTitle:!1},{route:"/snake",name:"Snake"},{route:"/minesweeper",name:"Minesweeper"},{route:"/tictactoe",name:"Tic Tac Toe"},{route:"/vietnam",name:"Vietnam"},{route:"/24",name:"24 Clock",archived:!0},{route:"/sudoku",name:"Sudoku",archived:!0},{route:"/anagrammator",name:"Anagrammator"},{route:"/cruciverba",name:"Cruciverba"},{route:"/numeri-a-caso",name:"Numeri a caso",archived:!0},{route:"/parole",name:"Ora a parole"},{route:"/palle",name:"Ora a palla",archived:!0},{route:"/jump-matrix",name:"Jumps",archived:!0},{route:"/tartaglia-triangle",name:"Tartaglia's triangle",archived:!0},{route:"/dragon-fractal",name:"The Dragon Fractal"},{route:"/demodogs",name:"Demo Dogs",archived:!0},{route:"/folypo",name:"Folypo",archived:!0},{route:"/factorize",name:"Factorizer",archived:!0},{route:"/three",name:"Three",archived:!0},{route:"/soundpad",name:"SoundPad",prefetch:!1,archived:!0},{route:"/md2html",name:"MD2HTML",prefetch:!1,archived:!0},{route:"/archive",name:"The Archive",prefetch:!1}],n=a.filter(e=>!0!==e.archived),l=a.filter(e=>!0===e.archived)},8375:function(e,t,r){"use strict";var a=r(7573),n=r(2056),l=r.n(n);let o="#main-article";t.Z=e=>{let{menu:t,className:r,skipToContent:n=!0}=e;return(0,a.jsx)("nav",{className:r,children:(0,a.jsxs)("ul",{children:[n&&(0,a.jsx)("li",{children:(0,a.jsx)(l(),{href:o,className:"sr-only-focusable",onClick:()=>{var e,t;null===(e=null===(t=document.querySelector(o))||void 0===t?void 0:t.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'))||void 0===e||e.focus()},children:"Skip to content"})}),t.map(e=>{let{name:t,route:r,prefetch:n,archived:o}=e;return(0,a.jsx)("li",{children:(0,a.jsx)(l(),{href:r,prefetch:!1!==n&&!0!==o&&void 0,children:t})},r)})]})})}},2205:function(e){e.exports={themeSelector:"ThemeSelector_themeSelector__z14wm",themeSelector_switch:"ThemeSelector_themeSelector_switch__QMzrt"}},2368:function(e){e.exports={style:{fontFamily:"'__Noto_Emoji_b4d0e0', '__Noto_Emoji_Fallback_b4d0e0'",fontStyle:"normal"},className:"__className_b4d0e0"}},2859:function(e,t,r){e.exports=r(2988)}},function(e){e.O(0,[274,293,16,744],function(){return e(e.s=3241)}),_N_E=e.O()}]);