(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[942],{2779:function(t,e){var i;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var t=[],e=0;e<arguments.length;e++){var i=arguments[e];if(i){var _=typeof i;if("string"===_||"number"===_)t.push(i);else if(Array.isArray(i)){if(i.length){var a=n.apply(null,i);a&&t.push(a)}}else if("object"===_){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){t.push(i.toString());continue}for(var o in i)r.call(i,o)&&i[o]&&t.push(o)}}}return t.join(" ")}t.exports?(n.default=n,t.exports=n):void 0!==(i=(function(){return n}).apply(e,[]))&&(t.exports=i)}()},1827:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/24",function(){return i(8965)}])},8965:function(t,e,i){"use strict";i.r(e),i.d(e,{__N_SSG:function(){return x},default:function(){return m}});var r=i(2322),n=i(2779),_=i.n(n),a=i(2784),o=i(2887),l=i.n(o),s=i(5392);function d(t){let e=Object.assign({p:"p",ol:"ol",li:"li"},(0,s.ah)(),t.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"The following takes place between 3pm and 5pm on a lazy summer saturday afternoon.\nThere are 3 different controllers that light up the digits:"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"The full controller, used to control the hour, minute and second units"}),"\n",(0,r.jsx)(e.li,{children:"The simple controller, used only to show digits from 0 to 5 on the tens of minutes and seconds"}),"\n",(0,r.jsx)(e.li,{children:"The hour controller, used only to show digits from 0 to 2 on the tens of hours"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"Obviously I'm not an electronic engineer and with a little more thought I could simplify\nthe logic, because the full controller has more logic gates than I like."})]})}var c=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,s.ah)(),t.components);return e?(0,r.jsx)(e,Object.assign({},t,{children:(0,r.jsx)(d,t)})):d(t)};let u=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(t>>e&1)==1},g=t=>{let e=u(t,3),i=u(t,2),r=u(t,1),n=u(t,0),_=i&&!r,a=r&&!n,o=!i&&r,l=!r&&!n,s=!i&&!n;return{L0:e||_||a||o,L1:!i||l||r&&n,L2:e||r||s||i&&n,L3:e||l||_||i&&!n,L4:s||a,L5:e||o||s||a||_&&n,L6:!r||i||n}},b=t=>{let e=u(t,2),i=u(t,1),r=u(t,0),n=!e&&!r,_=i||n||e&&r;return{L0:e||i,L1:!e||!r,L2:_,L3:e||!i&&!r,L4:n,L5:_,L6:!i||r}},h=t=>{let e=u(t,1),i=u(t,0),r=!i;return{L0:e,L1:!0,L2:r,L3:!e&&!i,L4:r,L5:r,L6:!e}},f=t=>{let{digit:e,controller:i}=t,{L0:n,L1:a,L2:o,L3:s,L4:d,L5:c,L6:u}=i(e);return(0,r.jsxs)("div",{className:l().digit,children:[(0,r.jsx)("div",{className:_()(l().digit_bar,l().digit_bar__h,l().digit_bar__0,{[l().digit_bar__active]:n})}),(0,r.jsx)("div",{className:_()(l().digit_bar,l().digit_bar__v,l().digit_bar__1,{[l().digit_bar__active]:a})}),(0,r.jsx)("div",{className:_()(l().digit_bar,l().digit_bar__h,l().digit_bar__2,{[l().digit_bar__active]:o})}),(0,r.jsx)("div",{className:_()(l().digit_bar,l().digit_bar__v,l().digit_bar__3,{[l().digit_bar__active]:s})}),(0,r.jsx)("div",{className:_()(l().digit_bar,l().digit_bar__v,l().digit_bar__4,{[l().digit_bar__active]:d})}),(0,r.jsx)("div",{className:_()(l().digit_bar,l().digit_bar__h,l().digit_bar__5,{[l().digit_bar__active]:c})}),(0,r.jsx)("div",{className:_()(l().digit_bar,l().digit_bar__v,l().digit_bar__6,{[l().digit_bar__active]:u})})]})},p=t=>(0,a.createElement)(f,{...t,controller:g}),v=t=>(0,a.createElement)(f,{...t,controller:b}),y=t=>(0,a.createElement)(f,{...t,controller:h}),k=t=>{let{blink:e}=t;return(0,r.jsxs)("div",{className:_()(l().blinker,{[l().blinker__blink]:e}),children:[(0,r.jsx)("div",{className:l().blinker_dot}),(0,r.jsx)("div",{className:"".concat(l().blinker_dot," ").concat(l().blinker_dot__1)})]})},j=()=>{let[{H1:t,H0:e,M1:i,M0:n,S1:_,S0:o},s]=(0,a.useState)({H1:0,H0:0,M1:0,M0:0,S1:0,S0:0}),[d,u]=(0,a.useState)(!0),[{autoplay:g,syncAutoplay:b,audioLoaded:h},f]=(0,a.useState)({autoplay:!1,syncAutoplay:!1,audioLoaded:!1}),j=(0,a.useRef)();(0,a.useEffect)(()=>{let t=()=>{f(t=>({...t,audioLoaded:!0}))},e=j.current=new Audio("/assets/24clock64kbpsVar.mp3");e.loop=!0,e.addEventListener("canplay",t);let i=()=>{var t,e;let i=new Date,r=i.getHours(),n=i.getMinutes(),_=i.getSeconds();s({H1:Math.floor(r/10),H0:r%10,M1:Math.floor(n/10),M0:n%10,S1:Math.floor(_/10),S0:_%10}),u(_%2==0);let a=(null==j?void 0:null===(t=j.current)||void 0===t?void 0:t.readyState)===4;f(t=>({...t,audioLoaded:a,syncAutoplay:t.autoplay&&a}))};i();let r=setInterval(i,1e3);return()=>{clearInterval(r),e.removeEventListener("canplay",t)}},[]),(0,a.useEffect)(()=>{h&&null!=j.current&&(b?j.current.play():(j.current.pause(),j.current.currentTime=0))},[b,h]);let x=t=>()=>{f(e=>({...e,autoplay:t,syncAutoplay:t&&e.syncAutoplay}))};return(0,r.jsxs)("div",{children:[(0,r.jsx)(c,{}),(0,r.jsxs)("div",{className:l().clock,children:[(0,r.jsx)(y,{digit:t}),(0,r.jsx)(p,{digit:e}),(0,r.jsx)(k,{blink:d}),(0,r.jsx)(v,{digit:i}),(0,r.jsx)(p,{digit:n}),(0,r.jsx)(k,{blink:d}),(0,r.jsx)(v,{digit:_}),(0,r.jsx)(p,{digit:o})]}),(0,r.jsxs)("fieldset",{children:[(0,r.jsx)("legend",{children:"Settings"}),(0,r.jsx)("input",{type:"radio",name:"autoplay",id:"autoplayOn",value:"on",onChange:x(!0),checked:g}),(0,r.jsx)("label",{htmlFor:"autoplayOn",children:"I love the sound of inevitability"})," ",(0,r.jsx)("input",{type:"radio",name:"autoplay",id:"autoplayOff",value:"off",onChange:x(!1),checked:!g}),(0,r.jsx)("label",{htmlFor:"autoplayOff",children:"It kinda upsets me."})]})]})};var x=!0,m=j},2887:function(t){t.exports={digit:"TwentyFourClock_digit__Si_IY",digit_bar:"TwentyFourClock_digit_bar__yHbbB",digit_bar__active:"TwentyFourClock_digit_bar__active__CPvim",digit_bar__h:"TwentyFourClock_digit_bar__h__O2j54",digit_bar__v:"TwentyFourClock_digit_bar__v__EakFv",digit_bar__0:"TwentyFourClock_digit_bar__0__dysIl",digit_bar__1:"TwentyFourClock_digit_bar__1__ubS_Q",digit_bar__4:"TwentyFourClock_digit_bar__4__uQyev",digit_bar__5:"TwentyFourClock_digit_bar__5__TXtX8",digit_bar__6:"TwentyFourClock_digit_bar__6___C9or",clock:"TwentyFourClock_clock__NVCDa",blinker:"TwentyFourClock_blinker__hA6tj",blinker_dot:"TwentyFourClock_blinker_dot__tbTnY",blinker_dot__1:"TwentyFourClock_blinker_dot__1__kY_ri",blinker__blink:"TwentyFourClock_blinker__blink__KKHUU"}},5392:function(t,e,i){"use strict";i.d(e,{ah:function(){return _}});var r=i(2784);let n=r.createContext({});function _(t){let e=r.useContext(n);return r.useMemo(()=>"function"==typeof t?t(e):{...e,...t},[e,t])}}},function(t){t.O(0,[774,888,179],function(){return t(t.s=1827)}),_N_E=t.O()}]);