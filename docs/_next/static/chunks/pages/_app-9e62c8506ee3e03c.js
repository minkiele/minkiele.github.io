(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3542:function(e,t,n){"use strict";var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(2351)},6570:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(3939)}])},4441:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return u},ACTION_RESTORE:function(){return a},ACTION_SERVER_PATCH:function(){return c},ACTION_PREFETCH:function(){return i},ACTION_FAST_REFRESH:function(){return l},ACTION_SERVER_ACTION:function(){return s}});let o="refresh",u="navigate",a="restore",c="server-patch",i="prefetch",l="fast-refresh",s="server-action";(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7361:function(e,t,n){"use strict";function getDomainLocale(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),n(6213),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9938:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return v}});let r=n(3219),o=r._(n(2784)),u=n(38),a=n(5571),c=n(8613),i=n(8318),l=n(4077),s=n(9994),f=n(6415),p=n(9190),d=n(7361),h=n(5299),y=n(4441),m=new Set;function prefetch(e,t,n,r,o,u){if(!u&&!(0,a.isLocalURL)(t))return;if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,u=t+"%"+n+"%"+o;if(m.has(u))return;m.add(u)}let c=u?e.prefetch(t,o):e.prefetch(t,n,r);Promise.resolve(c).catch(e=>{})}function formatStringOrUrl(e){return"string"==typeof e?e:(0,c.formatUrl)(e)}let g=o.default.forwardRef(function(e,t){let n,r;let{href:c,as:m,children:g,prefetch:v=null,passHref:_,replace:b,shallow:j,scroll:T,locale:w,onClick:A,onMouseEnter:S,onTouchStart:Z,legacyBehavior:O=!1,...E}=e;n=g,O&&("string"==typeof n||"number"==typeof n)&&(n=o.default.createElement("a",null,n));let x=o.default.useContext(s.RouterContext),C=o.default.useContext(f.AppRouterContext),I=null!=x?x:C,k=!x,P=!1!==v,N=null===v?y.PrefetchKind.AUTO:y.PrefetchKind.FULL,{href:L,as:M}=o.default.useMemo(()=>{if(!x){let e=formatStringOrUrl(c);return{href:e,as:m?formatStringOrUrl(m):e}}let[e,t]=(0,u.resolveHref)(x,c,!0);return{href:e,as:m?(0,u.resolveHref)(x,m):t||e}},[x,c,m]),R=o.default.useRef(L),q=o.default.useRef(M);O&&(r=o.default.Children.only(n));let U=O?r&&"object"==typeof r&&r.ref:t,[D,F,X]=(0,p.useIntersection)({rootMargin:"200px"}),B=o.default.useCallback(e=>{(q.current!==M||R.current!==L)&&(X(),q.current=M,R.current=L),D(e),U&&("function"==typeof U?U(e):"object"==typeof U&&(U.current=e))},[M,U,L,X,D]);o.default.useEffect(()=>{I&&F&&P&&prefetch(I,L,M,{locale:w},{kind:N},k)},[M,L,F,w,P,null==x?void 0:x.locale,I,k,N]);let z={ref:B,onClick(e){O||"function"!=typeof A||A(e),O&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,n,r,u,c,i,l,s,f){let{nodeName:p}=e.currentTarget,d="A"===p.toUpperCase();if(d&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!s&&!(0,a.isLocalURL)(n)))return;e.preventDefault();let navigate=()=>{let e=null==i||i;"beforePopState"in t?t[u?"replace":"push"](n,r,{shallow:c,locale:l,scroll:e}):t[u?"replace":"push"](r||n,{forceOptimisticNavigation:!f,scroll:e})};s?o.default.startTransition(navigate):navigate()}(e,I,L,M,b,j,T,w,k,P)},onMouseEnter(e){O||"function"!=typeof S||S(e),O&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),I&&(P||!k)&&prefetch(I,L,M,{locale:w,priority:!0,bypassPrefetchedCheck:!0},{kind:N},k)},onTouchStart(e){O||"function"!=typeof Z||Z(e),O&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),I&&(P||!k)&&prefetch(I,L,M,{locale:w,priority:!0,bypassPrefetchedCheck:!0},{kind:N},k)}};if((0,i.isAbsoluteUrl)(M))z.href=M;else if(!O||_||"a"===r.type&&!("href"in r.props)){let e=void 0!==w?w:null==x?void 0:x.locale,t=(null==x?void 0:x.isLocaleDomain)&&(0,d.getDomainLocale)(M,e,null==x?void 0:x.locales,null==x?void 0:x.domainLocales);z.href=t||(0,h.addBasePath)((0,l.addLocale)(M,e,null==x?void 0:x.defaultLocale))}return O?o.default.cloneElement(r,z):o.default.createElement("a",{...E,...z},n)}),v=g;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});let r=n(2784),o=n(2120),u="function"==typeof IntersectionObserver,a=new Map,c=[];function useIntersection(e){let{rootRef:t,rootMargin:n,disabled:i}=e,l=i||!u,[s,f]=(0,r.useState)(!1),p=(0,r.useRef)(null),d=(0,r.useCallback)(e=>{p.current=e},[]);(0,r.useEffect)(()=>{if(u){if(l||s)return;let e=p.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:o,elements:u}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=c.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=a.get(r)))return t;let o=new Map,u=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:u,elements:o},c.push(n),a.set(n,t),t}(n);return u.set(e,t),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),a.delete(r);let e=c.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&c.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!s){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[l,n,t,s,p.current]);let h=(0,r.useCallback)(()=>{f(!1)},[]);return[d,s,h]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5783:function(e,t,n){"use strict";n.d(t,{IT:function(){return o}});let r=[{route:"/",name:"Minkiele",setTitle:!1},{route:"/snake",name:"Snake"},{route:"/minesweeper",name:"Minesweeper"},{route:"/tictactoe",name:"Tic Tac Toe"},{route:"/vietnam",name:"Vietnam"},{route:"/24",name:"24 Clock",archived:!0},{route:"/sudoku",name:"Sudoku",archived:!0},{route:"/anagrammator",name:"Anagrammator"},{route:"/cruciverba",name:"Cruciverba"},{route:"/numeri-a-caso",name:"Numeri a caso",archived:!0},{route:"/parole",name:"Ora a parole"},{route:"/palle",name:"Ora a palla",archived:!0},{route:"/jump-matrix",name:"Jumps",archived:!0},{route:"/tartaglia-triangle",name:"Tartaglia's triangle",archived:!0},{route:"/dragon-fractal",name:"The Dragon Fractal"},{route:"/demodogs",name:"Demo Dogs",archived:!0},{route:"/folypo",name:"Folypo",archived:!0},{route:"/factorize",name:"Factorizer",archived:!0},{route:"/three",name:"Three",archived:!0},{route:"/soundpad",name:"SoundPad",prefetch:!1,archived:!0},{route:"/md2html",name:"MD2HTML",prefetch:!1,archived:!0},{route:"/archive",name:"The Archive",prefetch:!1}],o=r.filter(e=>!0!==e.archived);r.filter(e=>!0===e.archived)},4067:function(e,t,n){"use strict";n.d(t,{B:function(){return App_utils_event},sX:function(){return getRedirect},Ew:function(){return L},hC:function(){return useGoogleAnalyticsPageviews}});var r=n(5632),o=n(5652),u=n(9757),a=n(7226),c=n(8478),i=n(9371),l=function(){function XMap(e,t){this.xf=t,this.f=e}return XMap.prototype["@@transducer/init"]=i.Z.init,XMap.prototype["@@transducer/result"]=i.Z.result,XMap.prototype["@@transducer/step"]=function(e,t){return this.xf["@@transducer/step"](e,this.f(t))},XMap}(),s=(0,o.Z)(function(e,t){return new l(e,t)}),f=n(7616),p=n(766),d=Object.prototype.toString,h=function(){return"[object Arguments]"===d.call(arguments)?function(e){return"[object Arguments]"===d.call(e)}:function(e){return(0,p.Z)("callee",e)}}(),y=!({toString:null}).propertyIsEnumerable("toString"),m=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],g=function(){return arguments.propertyIsEnumerable("length")}(),contains=function(e,t){for(var n=0;n<e.length;){if(e[n]===t)return!0;n+=1}return!1},v="function"!=typeof Object.keys||g?(0,u.Z)(function(e){if(Object(e)!==e)return[];var t,n,r=[],o=g&&h(e);for(t in e)(0,p.Z)(t,e)&&(!o||"length"!==t)&&(r[r.length]=t);if(y)for(n=m.length-1;n>=0;)t=m[n],(0,p.Z)(t,e)&&!contains(r,t)&&(r[r.length]=t),n-=1;return r}):(0,u.Z)(function(e){return Object(e)!==e?[]:Object.keys(e)}),_=(0,o.Z)((0,c.Z)(["fantasy-land/map","map"],s,function(e,t){switch(Object.prototype.toString.call(t)){case"[object Function]":return(0,f.Z)(t.length,function(){return e.call(this,t.apply(this,arguments))});case"[object Object]":return(0,a.Z)(function(n,r){return n[r]=e(t[r]),n},{},v(t));default:return function(e,t){for(var n=0,r=t.length,o=Array(r);n<r;)o[n]=e(t[n]),n+=1;return o}(e,t)}})),b=(0,o.Z)(function(e,t){return"function"==typeof t["fantasy-land/ap"]?t["fantasy-land/ap"](e):"function"==typeof e.ap?e.ap(t):"function"==typeof e?function(n){return e(n)(t(n))}:(0,a.Z)(function(e,n){return function(e,t){t=t||[];var n,r=(e=e||[]).length,o=t.length,u=[];for(n=0;n<r;)u[u.length]=e[n],n+=1;for(n=0;n<o;)u[u.length]=t[n],n+=1;return u}(e,_(n,t))},[],e)}),j=(0,o.Z)(function(e,t){var n=(0,f.Z)(e,t);return(0,f.Z)(e,function(){return(0,a.Z)(b,_(n,arguments[0]),Array.prototype.slice.call(arguments,1))})}),T=(0,u.Z)(function(e){return j(e.length,e)}),w=(0,o.Z)(function(e,t){return e||t}),A=(0,o.Z)(function(e,t){var n;return"[object Function]"===(n=Object.prototype.toString.call(e))||"[object AsyncFunction]"===n||"[object GeneratorFunction]"===n||"[object AsyncGeneratorFunction]"===n?function(){return e.apply(this,arguments)||t.apply(this,arguments)}:T(w)(e,t)}),S=n(704),Z=n(7747),O=(0,u.Z)(function(e){var t;return null!=e&&"function"==typeof e["fantasy-land/empty"]?e["fantasy-land/empty"]():null!=e&&null!=e.constructor&&"function"==typeof e.constructor["fantasy-land/empty"]?e.constructor["fantasy-land/empty"]():null!=e&&"function"==typeof e.empty?e.empty():null!=e&&null!=e.constructor&&"function"==typeof e.constructor.empty?e.constructor.empty():(0,S.Z)(e)?[]:(0,Z.Z)(e)?"":"[object Object]"===Object.prototype.toString.call(e)?{}:h(e)?function(){return arguments}():"[object Uint8ClampedArray]"===(t=Object.prototype.toString.call(e))||"[object Int8Array]"===t||"[object Uint8Array]"===t||"[object Int16Array]"===t||"[object Uint16Array]"===t||"[object Int32Array]"===t||"[object Uint32Array]"===t||"[object Float32Array]"===t||"[object Float64Array]"===t||"[object BigInt64Array]"===t||"[object BigUint64Array]"===t?e.constructor.from(""):void 0});function _arrayFromIterator(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}function _includesWith(e,t,n){for(var r=0,o=n.length;r<o;){if(e(t,n[r]))return!0;r+=1}return!1}var E="function"==typeof Object.is?Object.is:function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t},x=n(2406);function _uniqContentEquals(e,t,n,r){var o=_arrayFromIterator(e);function eq(e,t){return _equals(e,t,n.slice(),r.slice())}return!_includesWith(function(e,t){return!_includesWith(eq,t,e)},_arrayFromIterator(t),o)}function _equals(e,t,n,r){if(E(e,t))return!0;var o,u=(0,x.Z)(e);if(u!==(0,x.Z)(t))return!1;if("function"==typeof e["fantasy-land/equals"]||"function"==typeof t["fantasy-land/equals"])return"function"==typeof e["fantasy-land/equals"]&&e["fantasy-land/equals"](t)&&"function"==typeof t["fantasy-land/equals"]&&t["fantasy-land/equals"](e);if("function"==typeof e.equals||"function"==typeof t.equals)return"function"==typeof e.equals&&e.equals(t)&&"function"==typeof t.equals&&t.equals(e);switch(u){case"Arguments":case"Array":case"Object":if("function"==typeof e.constructor&&"Promise"===(null==(o=String(e.constructor).match(/^function (\w*)/))?"":o[1]))return e===t;break;case"Boolean":case"Number":case"String":if(!(typeof e==typeof t&&E(e.valueOf(),t.valueOf())))return!1;break;case"Date":if(!E(e.valueOf(),t.valueOf()))return!1;break;case"Error":return e.name===t.name&&e.message===t.message;case"RegExp":if(!(e.source===t.source&&e.global===t.global&&e.ignoreCase===t.ignoreCase&&e.multiline===t.multiline&&e.sticky===t.sticky&&e.unicode===t.unicode))return!1}for(var a=n.length-1;a>=0;){if(n[a]===e)return r[a]===t;a-=1}switch(u){case"Map":if(e.size!==t.size)return!1;return _uniqContentEquals(e.entries(),t.entries(),n.concat([e]),r.concat([t]));case"Set":if(e.size!==t.size)return!1;return _uniqContentEquals(e.values(),t.values(),n.concat([e]),r.concat([t]));case"Arguments":case"Array":case"Object":case"Boolean":case"Number":case"String":case"Date":case"Error":case"RegExp":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var c=v(e);if(c.length!==v(t).length)return!1;var i=n.concat([e]),l=r.concat([t]);for(a=c.length-1;a>=0;){var s=c[a];if(!((0,p.Z)(s,t)&&_equals(t[s],e[s],i,l)))return!1;a-=1}return!0}var C=(0,o.Z)(function(e,t){return _equals(e,t,[],[])}),I=(0,u.Z)(function(e){return null!=e&&C(e,O(e))}),k=n(7596),P=n(2784);n(5783);var N=n(3542);let pageview=e=>{var t,n;null===(t=(n=window).gtag)||void 0===t||t.call(n,"config",N.env.NEXT_PUBLIC_ANALYTICS_ID,{page_path:e})},App_utils_event=e=>{var t,n;let{action:r,category:o,label:u,value:a}=e;null===(n=window)||void 0===n||null===(t=n.gtag)||void 0===t||t.call(n,"event",r,{event_category:o,event_label:u,value:a})},useGoogleAnalyticsPageviews=()=>{let e=(0,r.useRouter)();(0,P.useEffect)(()=>(e.events.on("routeChangeComplete",pageview),()=>{e.events.off("routeChangeComplete",pageview)}),[e.events])},L=A(k.Z,I),getRedirect=e=>()=>{let{replace:t}=(0,r.useRouter)();return(0,P.useEffect)(()=>{t(e)},[t]),null}},1394:function(e,t,n){"use strict";var r=n(2322),o=n(9097),u=n.n(o);let a="#main-article";t.Z=e=>{let{menu:t,className:n,skipToContent:o=!0}=e;return(0,r.jsx)("nav",{className:n,children:(0,r.jsxs)("ul",{children:[o&&(0,r.jsx)("li",{children:(0,r.jsx)(u(),{href:a,className:"sr-only-focusable",onClick:()=>{var e,t;null===(e=null===(t=document.querySelector(a))||void 0===t?void 0:t.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'))||void 0===e||e.focus()},children:"Skip to content"})}),t.map(e=>{let{name:t,route:n,prefetch:o,archived:a}=e;return(0,r.jsx)("li",{children:(0,r.jsx)(u(),{href:n,prefetch:!1!==o&&!0!==a&&void 0,children:t})},n)})]})})}},3939:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _app_App}});var r=n(2322);n(850),n(1453);var o=n(1394),u=n(5783),a=n(7729),c=n.n(a),i=n(3534),l=n.n(i),s=n(4067),f=n(2784);let p="io.github.minkiele.theme",d="dark";"light"!==d&&"dark"!==d&&(d=void 0);var hooks_useTheme=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,[t,n]=(0,f.useState)(),r=(0,f.useCallback)(t=>{n(null!=t?t:e)},[e]);return(0,f.useEffect)(()=>{var t;let r=null!==(t=localStorage.getItem(p))&&void 0!==t?t:void 0;(null==r||"light"!=r&&"dark"!=r)&&(r=e),n(r)},[e]),(0,f.useEffect)(()=>{let n=null!=t?t:e;null==n?localStorage.removeItem(p):localStorage.setItem(p,n)},[t,e]),(0,f.useEffect)(()=>{var e;null===(e=document.querySelector("html"))||void 0===e||e.classList.toggle("dark","dark"===t)},[t]),{theme:t,setTheme:r}},h=n(176),y=n.n(h),ThemeSelector_ThemeSelector=e=>{var t;let{theme:n,onChange:o}=e;return(0,r.jsxs)("div",{className:y().themeSelector,children:[(0,r.jsxs)("p",{className:"sr-only",children:["Current theme: ","dark"===n?"dark":"light"]}),(0,r.jsx)("button",{"aria-label":"Change theme to ".concat("dark"===n?"light":"dark"),className:y().themeSelector_switch,onClick:(t="dark"===n?"light":"dark",()=>{o(t)}),children:"\uD83D\uDD26"})]})},m=n(3542);function _app_App(e){let{Component:t,pageProps:n}=e,{theme:a,setTheme:i}=hooks_useTheme();return(0,s.hC)(),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(c(),{children:[(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, interactive-widget=overlays-content"}),(0,r.jsx)("title",{children:"Minkiele - The wrong website, by definition."+(!1!==n.setTitle?" - #".concat(n.name):"")})]}),!(0,s.Ew)(m.env.NEXT_PUBLIC_ANALYTICS_ID)&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l(),{dangerouslySetInnerHTML:{__html:"window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n\n            gtag('config', '".concat(m.env.NEXT_PUBLIC_ANALYTICS_ID,"');")},id:"googleAnalyticsSetup"}),(0,r.jsx)(l(),{src:"https://www.googletagmanager.com/gtag/js?id=".concat(m.env.NEXT_PUBLIC_ANALYTICS_ID)})]}),!(0,s.Ew)(m.env.NEXT_PUBLIC_GTM_ID)&&(0,r.jsx)(l(),{dangerouslySetInnerHTML:{__html:"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n          })(window,document,'script','dataLayer','".concat(m.env.NEXT_PUBLIC_GTM_ID,"');")},id:"googleTagManagerSetup"}),!(0,s.Ew)(m.env.NEXT_PUBLIC_ANALYTICS_ID)&&(0,r.jsx)(l(),{src:"https://www.googleoptimize.com/optimize.js?id=".concat(m.env.NEXT_PUBLIC_OPTIMIZE_ID)}),(0,r.jsxs)("div",{className:"App",children:[(0,r.jsxs)("aside",{children:[(0,r.jsx)(o.Z,{menu:u.IT}),(0,r.jsx)(ThemeSelector_ThemeSelector,{onChange:i,theme:a})]}),(0,r.jsxs)("article",{id:"main-article",children:[(0,r.jsx)("h1",{children:n.name}),(0,r.jsx)(t,{...n})]})]})]})}},1453:function(){},850:function(){},176:function(e){e.exports={themeSelector:"ThemeSelector_themeSelector__z14wm",themeSelector_switch:"ThemeSelector_themeSelector_switch__QMzrt"}},2351:function(e){!function(){var t={229:function(e){var t,n,r,o=e.exports={};function defaultSetTimout(){throw Error("setTimeout has not been defined")}function defaultClearTimeout(){throw Error("clearTimeout has not been defined")}function runTimeout(e){if(t===setTimeout)return setTimeout(e,0);if((t===defaultSetTimout||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(e){t=defaultSetTimout}try{n="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(e){n=defaultClearTimeout}}();var u=[],a=!1,c=-1;function cleanUpNextTick(){a&&r&&(a=!1,r.length?u=r.concat(u):c=-1,u.length&&drainQueue())}function drainQueue(){if(!a){var e=runTimeout(cleanUpNextTick);a=!0;for(var t=u.length;t;){for(r=u,u=[];++c<t;)r&&r[c].run();c=-1,t=u.length}r=null,a=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===defaultClearTimeout||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function Item(e,t){this.fun=e,this.array=t}function noop(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new Item(e,t)),1!==u.length||a||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=noop,o.addListener=noop,o.once=noop,o.off=noop,o.removeListener=noop,o.removeAllListeners=noop,o.emit=noop,o.prependListener=noop,o.prependOnceListener=noop,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},n={};function __nccwpck_require__(e){var r=n[e];if(void 0!==r)return r.exports;var o=n[e]={exports:{}},u=!0;try{t[e](o,o.exports,__nccwpck_require__),u=!1}finally{u&&delete n[e]}return o.exports}__nccwpck_require__.ab="//";var r=__nccwpck_require__(229);e.exports=r}()},7729:function(e,t,n){e.exports=n(5487)},9097:function(e,t,n){e.exports=n(9938)},5632:function(e,t,n){e.exports=n(5123)},3534:function(e,t,n){e.exports=n(2898)},7616:function(e,t,n){"use strict";var r=n(6391),o=n(9757),u=n(5652),a=n(3680),c=(0,u.Z)(function(e,t){return 1===e?(0,o.Z)(t):(0,r.Z)(e,(0,a.Z)(e,[],t))});t.Z=c},6391:function(e,t,n){"use strict";function _arity(e,t){switch(e){case 0:return function(){return t.apply(this,arguments)};case 1:return function(e){return t.apply(this,arguments)};case 2:return function(e,n){return t.apply(this,arguments)};case 3:return function(e,n,r){return t.apply(this,arguments)};case 4:return function(e,n,r,o){return t.apply(this,arguments)};case 5:return function(e,n,r,o,u){return t.apply(this,arguments)};case 6:return function(e,n,r,o,u,a){return t.apply(this,arguments)};case 7:return function(e,n,r,o,u,a,c){return t.apply(this,arguments)};case 8:return function(e,n,r,o,u,a,c,i){return t.apply(this,arguments)};case 9:return function(e,n,r,o,u,a,c,i,l){return t.apply(this,arguments)};case 10:return function(e,n,r,o,u,a,c,i,l,s){return t.apply(this,arguments)};default:throw Error("First argument to _arity must be a non-negative integer no greater than ten")}}n.d(t,{Z:function(){return _arity}})},9757:function(e,t,n){"use strict";n.d(t,{Z:function(){return _curry1}});var r=n(8471);function _curry1(e){return function f1(t){return 0==arguments.length||(0,r.Z)(t)?f1:e.apply(this,arguments)}}},5652:function(e,t,n){"use strict";n.d(t,{Z:function(){return _curry2}});var r=n(9757),o=n(8471);function _curry2(e){return function f2(t,n){switch(arguments.length){case 0:return f2;case 1:return(0,o.Z)(t)?f2:(0,r.Z)(function(n){return e(t,n)});default:return(0,o.Z)(t)&&(0,o.Z)(n)?f2:(0,o.Z)(t)?(0,r.Z)(function(t){return e(t,n)}):(0,o.Z)(n)?(0,r.Z)(function(n){return e(t,n)}):e(t,n)}}}},3680:function(e,t,n){"use strict";n.d(t,{Z:function(){return function _curryN(e,t,n){return function(){for(var u,a=[],c=0,i=e,l=0;l<t.length||c<arguments.length;)l<t.length&&(!(0,o.Z)(t[l])||c>=arguments.length)?u=t[l]:(u=arguments[c],c+=1),a[l]=u,(0,o.Z)(u)||(i-=1),l+=1;return i<=0?n.apply(this,a):(0,r.Z)(i,_curryN(e,a,n))}}}});var r=n(6391),o=n(8471)},8478:function(e,t,n){"use strict";n.d(t,{Z:function(){return _dispatchable}});var r=n(704);function _dispatchable(e,t,n){return function(){if(0==arguments.length)return n();var o=arguments[arguments.length-1];if(!(0,r.Z)(o)){for(var u=0;u<e.length;){if("function"==typeof o[e[u]])return o[e[u]].apply(o,Array.prototype.slice.call(arguments,0,-1));u+=1}if(null!=o&&"function"==typeof o["@@transducer/step"]){var a=t.apply(null,Array.prototype.slice.call(arguments,0,-1));return a(o)}}return n.apply(this,arguments)}}},766:function(e,t,n){"use strict";function _has(e,t){return Object.prototype.hasOwnProperty.call(t,e)}n.d(t,{Z:function(){return _has}})},704:function(e,t){"use strict";t.Z=Array.isArray||function(e){return null!=e&&e.length>=0&&"[object Array]"===Object.prototype.toString.call(e)}},8471:function(e,t,n){"use strict";function _isPlaceholder(e){return null!=e&&"object"==typeof e&&!0===e["@@functional/placeholder"]}n.d(t,{Z:function(){return _isPlaceholder}})},7747:function(e,t,n){"use strict";function _isString(e){return"[object String]"===Object.prototype.toString.call(e)}n.d(t,{Z:function(){return _isString}})},7226:function(e,t,n){"use strict";n.d(t,{Z:function(){return _reduce}});var r=n(9757),o=n(704),u=n(7747),a=(0,r.Z)(function(e){return!!(0,o.Z)(e)||!(!e||"object"!=typeof e||(0,u.Z)(e))&&(0===e.length||e.length>0&&e.hasOwnProperty(0)&&e.hasOwnProperty(e.length-1))}),c=function(){function XWrap(e){this.f=e}return XWrap.prototype["@@transducer/init"]=function(){throw Error("init not implemented on XWrap")},XWrap.prototype["@@transducer/result"]=function(e){return e},XWrap.prototype["@@transducer/step"]=function(e,t){return this.f(e,t)},XWrap}(),i=n(6391),l=(0,n(5652).Z)(function(e,t){return(0,i.Z)(e.length,function(){return e.apply(t,arguments)})});function _iterableReduce(e,t,n){for(var r=n.next();!r.done;){if((t=e["@@transducer/step"](t,r.value))&&t["@@transducer/reduced"]){t=t["@@transducer/value"];break}r=n.next()}return e["@@transducer/result"](t)}function _methodReduce(e,t,n,r){return e["@@transducer/result"](n[r](l(e["@@transducer/step"],e),t))}var s="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";function _reduce(e,t,n){if("function"==typeof e){var r;r=e,e=new c(r)}if(a(n))return function(e,t,n){for(var r=0,o=n.length;r<o;){if((t=e["@@transducer/step"](t,n[r]))&&t["@@transducer/reduced"]){t=t["@@transducer/value"];break}r+=1}return e["@@transducer/result"](t)}(e,t,n);if("function"==typeof n["fantasy-land/reduce"])return _methodReduce(e,t,n,"fantasy-land/reduce");if(null!=n[s])return _iterableReduce(e,t,n[s]());if("function"==typeof n.next)return _iterableReduce(e,t,n);if("function"==typeof n.reduce)return _methodReduce(e,t,n,"reduce");throw TypeError("reduce: list must be array or iterable")}},9371:function(e,t){"use strict";t.Z={init:function(){return this.xf["@@transducer/init"]()},result:function(e){return this.xf["@@transducer/result"](e)}}},7596:function(e,t,n){"use strict";var r=(0,n(9757).Z)(function(e){return null==e});t.Z=r},2406:function(e,t,n){"use strict";var r=(0,n(9757).Z)(function(e){return null===e?"Null":void 0===e?"Undefined":Object.prototype.toString.call(e).slice(8,-1)});t.Z=r}},function(e){var __webpack_exec__=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return __webpack_exec__(6570),__webpack_exec__(5123)}),_N_E=e.O()}]);