(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[942],{2779:function(t,i){var e;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var _={}.hasOwnProperty;function classNames(){for(var t=[],i=0;i<arguments.length;i++){var e=arguments[i];if(e){var r=typeof e;if("string"===r||"number"===r)t.push(e);else if(Array.isArray(e)){if(e.length){var n=classNames.apply(null,e);n&&t.push(n)}}else if("object"===r){if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]")){t.push(e.toString());continue}for(var a in e)_.call(e,a)&&e[a]&&t.push(a)}}}return t.join(" ")}t.exports?(classNames.default=classNames,t.exports=classNames):void 0!==(e=(function(){return classNames}).apply(i,[]))&&(t.exports=e)}()},1827:function(t,i,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/24",function(){return e(3513)}])},3513:function(t,i,e){"use strict";e.r(i),e.d(i,{__N_SSG:function(){return c},default:function(){return _24}});var _=e(2322),r=e(2779),n=e.n(r),a=e(2784),l=e(2060),o=e.n(l),s=e(5392);function _createMdxContent(t){let i=Object.assign({p:"p",ol:"ol",li:"li"},(0,s.ah)(),t.components);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(i.p,{children:"The following takes place between 3pm and 5pm on a lazy summer saturday afternoon.\nThere are 3 different controllers that light up the digits:"}),"\n",(0,_.jsxs)(i.ol,{children:["\n",(0,_.jsx)(i.li,{children:"The full controller, used to control the hour, minute and second units"}),"\n",(0,_.jsx)(i.li,{children:"The simple controller, used only to show digits from 0 to 5 on the tens of minutes and seconds"}),"\n",(0,_.jsx)(i.li,{children:"The hour controller, used only to show digits from 0 to 2 on the tens of hours"}),"\n"]}),"\n",(0,_.jsx)(i.p,{children:"Obviously I'm not an electronic engineer and with a little more thought I could simplify\nthe logic, because the full controller has more logic gates than I like."})]})}var README=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:i}=Object.assign({},(0,s.ah)(),t.components);return i?(0,_.jsx)(i,Object.assign({},t,{children:(0,_.jsx)(_createMdxContent,t)})):_createMdxContent(t)};let getBit=function(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(t>>i&1)==1},fullController=t=>{let i=getBit(t,3),e=getBit(t,2),_=getBit(t,1),r=getBit(t,0),n=e&&!_,a=_&&!r,l=!e&&_,o=!_&&!r,s=!e&&!r;return{L0:i||n||a||l,L1:!e||o||_&&r,L2:i||_||s||e&&r,L3:i||o||n||e&&!r,L4:s||a,L5:i||l||s||a||n&&r,L6:!_||e||r}},simpleController=t=>{let i=getBit(t,2),e=getBit(t,1),_=getBit(t,0),r=!i&&!_,n=e||r||i&&_;return{L0:i||e,L1:!i||!_,L2:n,L3:i||!e&&!_,L4:r,L5:n,L6:!e||_}},hourController=t=>{let i=getBit(t,1),e=getBit(t,0),_=!e;return{L0:i,L1:!0,L2:_,L3:!i&&!e,L4:_,L5:_,L6:!i}},LogiclessDigit=t=>{let{digit:i,controller:e}=t,{L0:r,L1:a,L2:l,L3:s,L4:c,L5:d,L6:u}=e(i);return(0,_.jsxs)("div",{className:o().digit,children:[(0,_.jsx)("div",{className:n()(o().digit_bar,o().digit_bar__h,o().digit_bar__c,o().digit_bar__0,{[o().digit_bar__active]:r})}),(0,_.jsx)("div",{className:n()(o().digit_bar,o().digit_bar__v,o().digit_bar__vcl,o().digit_bar__1,{[o().digit_bar__active]:a})}),(0,_.jsx)("div",{className:n()(o().digit_bar,o().digit_bar__h,o().digit_bar__hcb,o().digit_bar__2,{[o().digit_bar__active]:l})}),(0,_.jsx)("div",{className:n()(o().digit_bar,o().digit_bar__v,o().digit_bar__vcr,o().digit_bar__3,{[o().digit_bar__active]:s})}),(0,_.jsx)("div",{className:n()(o().digit_bar,o().digit_bar__v,o().digit_bar__vcr,o().digit_bar__4,{[o().digit_bar__active]:c})}),(0,_.jsx)("div",{className:n()(o().digit_bar,o().digit_bar__h,o().digit_bar__hct,o().digit_bar__5,{[o().digit_bar__active]:d})}),(0,_.jsx)("div",{className:n()(o().digit_bar,o().digit_bar__v,o().digit_bar__vcl,o().digit_bar__6,{[o().digit_bar__active]:u})})]})},Digit=t=>(0,a.createElement)(LogiclessDigit,{...t,controller:fullController}),SimpleDigit=t=>(0,a.createElement)(LogiclessDigit,{...t,controller:simpleController}),HourDigit=t=>(0,a.createElement)(LogiclessDigit,{...t,controller:hourController}),Blinker=t=>{let{blink:i}=t;return(0,_.jsxs)("div",{className:n()(o().blinker,{[o().blinker__blink]:i}),children:[(0,_.jsx)("div",{className:o().blinker_dot}),(0,_.jsx)("div",{className:"".concat(o().blinker_dot," ").concat(o().blinker_dot__1)})]})};var c=!0,_24=()=>{let[{H1:t,H0:i,M1:e,M0:r,S1:n,S0:l},s]=(0,a.useState)({H1:0,H0:0,M1:0,M0:0,S1:0,S0:0}),[c,d]=(0,a.useState)(!0),[{autoplay:u,syncAutoplay:g,audioLoaded:b},h]=(0,a.useState)({autoplay:!1,syncAutoplay:!1,audioLoaded:!1}),p=(0,a.useRef)();(0,a.useEffect)(()=>{let handleAudioLoad=()=>{h(t=>({...t,audioLoaded:!0}))},t=p.current=new Audio("/assets/24clock64kbpsVar.mp3");t.loop=!0,t.addEventListener("canplay",handleAudioLoad);let callback=()=>{var t,i;let e=new Date,_=e.getHours(),r=e.getMinutes(),n=e.getSeconds();s({H1:Math.floor(_/10),H0:_%10,M1:Math.floor(r/10),M0:r%10,S1:Math.floor(n/10),S0:n%10}),d(n%2==0);let a=(null==p?void 0:null===(t=p.current)||void 0===t?void 0:t.readyState)===4;h(t=>({...t,audioLoaded:a,syncAutoplay:t.autoplay&&a}))};callback();let i=setInterval(callback,1e3);return()=>{clearInterval(i),t.removeEventListener("canplay",handleAudioLoad)}},[]),(0,a.useEffect)(()=>{b&&null!=p.current&&(g?p.current.play():(p.current.pause(),p.current.currentTime=0))},[g,b]);let handleAutoplay=t=>()=>{h(i=>({...i,autoplay:t,syncAutoplay:t&&i.syncAutoplay}))};return(0,_.jsxs)("div",{children:[(0,_.jsx)(README,{}),(0,_.jsxs)("div",{className:o().clock,children:[(0,_.jsx)(HourDigit,{digit:t}),(0,_.jsx)(Digit,{digit:i}),(0,_.jsx)(Blinker,{blink:c}),(0,_.jsx)(SimpleDigit,{digit:e}),(0,_.jsx)(Digit,{digit:r}),(0,_.jsx)(Blinker,{blink:c}),(0,_.jsx)(SimpleDigit,{digit:n}),(0,_.jsx)(Digit,{digit:l})]}),(0,_.jsxs)("fieldset",{children:[(0,_.jsx)("legend",{children:"Settings"}),(0,_.jsx)("input",{type:"radio",name:"autoplay",id:"autoplayOn",value:"on",onChange:handleAutoplay(!0),checked:u}),(0,_.jsx)("label",{htmlFor:"autoplayOn",children:"I love the sound of inevitability"})," ",(0,_.jsx)("input",{type:"radio",name:"autoplay",id:"autoplayOff",value:"off",onChange:handleAutoplay(!1),checked:!u}),(0,_.jsx)("label",{htmlFor:"autoplayOff",children:"It kinda upsets me."})]})]})}},2060:function(t){t.exports={digit:"TwentyFourClock_digit__MDzNc",digit_bar:"TwentyFourClock_digit_bar__msuyx",digit_bar__active:"TwentyFourClock_digit_bar__active__1byTK",digit_bar__h:"TwentyFourClock_digit_bar__h__qFJEz",digit_bar__v:"TwentyFourClock_digit_bar__v__fBty6",digit_bar__0:"TwentyFourClock_digit_bar__0__C4M1s",digit_bar__1:"TwentyFourClock_digit_bar__1__bvbd6",digit_bar__2:"TwentyFourClock_digit_bar__2__QKBe6",digit_bar__3:"TwentyFourClock_digit_bar__3__PwTm7",digit_bar__4:"TwentyFourClock_digit_bar__4__9bdhH",digit_bar__5:"TwentyFourClock_digit_bar__5__Y6dUB",digit_bar__6:"TwentyFourClock_digit_bar__6__yCo9y",digit_bar__c:"TwentyFourClock_digit_bar__c__LIa0T",digit_bar__vcl:"TwentyFourClock_digit_bar__vcl__BMAmz",digit_bar__vcr:"TwentyFourClock_digit_bar__vcr__wz_C3",digit_bar__hct:"TwentyFourClock_digit_bar__hct__JGpaV",digit_bar__hcb:"TwentyFourClock_digit_bar__hcb__E93cb",clock:"TwentyFourClock_clock__074e5",blinker:"TwentyFourClock_blinker__dWSOH",blinker_dot:"TwentyFourClock_blinker_dot__pDS2g",blinker_dot__1:"TwentyFourClock_blinker_dot__1__CysiQ",blinker__blink:"TwentyFourClock_blinker__blink__A9U2P"}},5392:function(t,i,e){"use strict";e.d(i,{ah:function(){return useMDXComponents}});var _=e(2784);let r=_.createContext({});function useMDXComponents(t){let i=_.useContext(r);return _.useMemo(()=>"function"==typeof t?t(i):{...i,...t},[i,t])}}},function(t){t.O(0,[774,888,179],function(){return t(t.s=1827)}),_N_E=t.O()}]);