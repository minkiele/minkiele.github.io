(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[489],{3241:function(e,t,a){Promise.resolve().then(a.bind(a,2515))},2515:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return Template}});var r=a(7573),n=a(7653),l=a(2859),o=a(7610);let useGoogleAnalyticsPageviews=()=>{let e=(0,l.usePathname)(),t=(0,l.useSearchParams)();(0,n.useEffect)(()=>{(0,o.L)("".concat(e,"?").concat(t))},[e,t])};function UseGoogleAnalyticsPageviews(){return useGoogleAnalyticsPageviews(),null}let c="io.github.minkiele.theme",i="dark";"light"!==i&&"dark"!==i&&(i=void 0);var hooks_useTheme=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,[t,a]=(0,n.useState)(),r=(0,n.useCallback)(t=>{a(null!=t?t:e)},[e]);return(0,n.useEffect)(()=>{var t;let r=null!==(t=localStorage.getItem(c))&&void 0!==t?t:void 0;(null==r||"light"!=r&&"dark"!=r)&&(r=e),a(r)},[e]),(0,n.useEffect)(()=>{let a=null!=t?t:e;null==a?localStorage.removeItem(c):localStorage.setItem(c,a)},[t,e]),(0,n.useEffect)(()=>{var e;null===(e=document.querySelector("html"))||void 0===e||e.classList.toggle("dark","dark"===t)},[t]),{theme:t,setTheme:r}},u=a(8296),s=a(2875),h=a(4306),m=a.n(h),ThemeSelector_ThemeSelector=e=>{var t;let{theme:a,onChange:n}=e;return(0,r.jsxs)("div",{className:m().themeSelector,children:[(0,r.jsxs)("p",{className:"sr-only",children:["Current theme: ","dark"===a?"dark":"light"]}),(0,r.jsx)("button",{"aria-label":"Change theme to ".concat("dark"===a?"light":"dark"),className:m().themeSelector_switch,onClick:(t="dark"===a?"light":"dark",()=>{n(t)}),children:"\uD83D\uDD26"})]})};function Template(e){let{children:t}=e,{theme:a,setTheme:l}=hooks_useTheme();return(0,r.jsxs)("div",{className:"App",children:[(0,r.jsxs)("aside",{children:[(0,r.jsx)(u.Z,{menu:s.IT}),(0,r.jsx)(ThemeSelector_ThemeSelector,{onChange:l,theme:a})]}),(0,r.jsx)("article",{id:"main-article",children:t}),(0,r.jsx)(n.Suspense,{fallback:null,children:(0,r.jsx)(UseGoogleAnalyticsPageviews,{})})]})}},7610:function(e,t,a){"use strict";a.d(t,{B:function(){return event},L:function(){return pageview}});let pageview=e=>{var t,a;null===(t=(a=window).gtag)||void 0===t||t.call(a,"config","G-97E9ECN60Y",{page_path:e})},event=e=>{var t,a;let{action:r,category:n,label:l,value:o}=e;null===(a=window)||void 0===a||null===(t=a.gtag)||void 0===t||t.call(a,"event",r,{event_category:n,event_label:l,value:o})}},2875:function(e,t,a){"use strict";a.d(t,{IT:function(){return n},j0:function(){return l}});let r=[{route:"/",name:"Minkiele",setTitle:!1},{route:"/snake",name:"Snake"},{route:"/minesweeper",name:"Minesweeper"},{route:"/tictactoe",name:"Tic Tac Toe"},{route:"/vietnam",name:"Vietnam"},{route:"/24",name:"24 Clock",archived:!0},{route:"/sudoku",name:"Sudoku",archived:!0},{route:"/anagrammator",name:"Anagrammator"},{route:"/cruciverba",name:"Cruciverba"},{route:"/numeri-a-caso",name:"Numeri a caso",archived:!0},{route:"/parole",name:"Ora a parole"},{route:"/palle",name:"Ora a palla",archived:!0},{route:"/jump-matrix",name:"Jumps",archived:!0},{route:"/tartaglia-triangle",name:"Tartaglia's triangle",archived:!0},{route:"/dragon-fractal",name:"The Dragon Fractal"},{route:"/demodogs",name:"Demo Dogs",archived:!0},{route:"/folypo",name:"Folypo",archived:!0},{route:"/factorize",name:"Factorizer",archived:!0},{route:"/three",name:"Three",archived:!0},{route:"/soundpad",name:"SoundPad",prefetch:!1,archived:!0},{route:"/md2html",name:"MD2HTML",prefetch:!1,archived:!0},{route:"/archive",name:"The Archive",prefetch:!1}],n=r.filter(e=>!0!==e.archived),l=r.filter(e=>!0===e.archived)},8296:function(e,t,a){"use strict";var r=a(7573),n=a(2056),l=a.n(n);let o="#main-article";t.Z=e=>{let{menu:t,className:a,skipToContent:n=!0}=e;return(0,r.jsx)("nav",{className:a,children:(0,r.jsxs)("ul",{children:[n&&(0,r.jsx)("li",{children:(0,r.jsx)(l(),{href:o,className:"sr-only-focusable",onClick:()=>{var e,t;null===(e=null===(t=document.querySelector(o))||void 0===t?void 0:t.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'))||void 0===e||e.focus()},children:"Skip to content"})}),t.map(e=>{let{name:t,route:a,prefetch:n,archived:o}=e;return(0,r.jsx)("li",{children:(0,r.jsx)(l(),{href:a,prefetch:!1!==n&&!0!==o&&void 0,children:t})},a)})]})})}},4306:function(e){e.exports={themeSelector:"ThemeSelector_themeSelector__z14wm",themeSelector_switch:"ThemeSelector_themeSelector_switch__QMzrt"}},2859:function(e,t,a){e.exports=a(7699)}},function(e){e.O(0,[342,56,293,197,744],function(){return e(e.s=3241)}),_N_E=e.O()}]);