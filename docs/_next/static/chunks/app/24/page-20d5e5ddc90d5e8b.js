(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[106],{446:function(t,e){var i;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function _(){for(var t=[],e=0;e<arguments.length;e++){var i=arguments[e];if(i){var n=typeof i;if("string"===n||"number"===n)t.push(i);else if(Array.isArray(i)){if(i.length){var o=_.apply(null,i);o&&t.push(o)}}else if("object"===n){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){t.push(i.toString());continue}for(var a in i)r.call(i,a)&&i[a]&&t.push(a)}}}return t.join(" ")}t.exports?(_.default=_,t.exports=_):void 0!==(i=(function(){return _}).apply(e,[]))&&(t.exports=i)}()},7676:function(t,e,i){Promise.resolve().then(i.bind(i,5887))},5887:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return x}});var r=i(7573),_=i(446),n=i.n(_),o=i(7653),a=i(2297),l=i.n(a),c=i(5505),s=i(7953);function d(t){let e=Object.assign({p:"p",ol:"ol",li:"li"},(0,s.ah)(),t.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.p,{children:"The following takes place between 3pm and 5pm on a lazy summer saturday afternoon.\nThere are 3 different controllers that light up the digits:"}),"\n",(0,c.jsxs)(e.ol,{children:["\n",(0,c.jsx)(e.li,{children:"The full controller, used to control the hour, minute and second units"}),"\n",(0,c.jsx)(e.li,{children:"The simple controller, used only to show digits from 0 to 5 on the tens of minutes and seconds"}),"\n",(0,c.jsx)(e.li,{children:"The hour controller, used only to show digits from 0 to 2 on the tens of hours"}),"\n"]}),"\n",(0,c.jsx)(e.p,{children:"Obviously I'm not an electronic engineer and with a little more thought I could simplify\nthe logic, because the full controller has more logic gates than I like."})]})}var u=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,s.ah)(),t.components);return e?(0,c.jsx)(e,Object.assign({},t,{children:(0,c.jsx)(d,t)})):d(t)};let b=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(t>>e&1)==1},g=t=>{let e=b(t,3),i=b(t,2),r=b(t,1),_=b(t,0),n=i&&!r,o=r&&!_,a=!i&&r,l=!r&&!_,c=!i&&!_;return{L0:e||n||o||a,L1:!i||l||r&&_,L2:e||r||c||i&&_,L3:e||l||n||i&&!_,L4:c||o,L5:e||a||c||o||n&&_,L6:!r||i||_}},f=t=>{let e=b(t,2),i=b(t,1),r=b(t,0),_=!e&&!r,n=i||_||e&&r;return{L0:e||i,L1:!e||!r,L2:n,L3:e||!i&&!r,L4:_,L5:n,L6:!i||r}},y=t=>{let e=b(t,1),i=b(t,0),r=!i;return{L0:e,L1:!0,L2:r,L3:!e&&!i,L4:r,L5:r,L6:!e}},p=t=>{let{digit:e,controller:i}=t,{L0:_,L1:o,L2:a,L3:c,L4:s,L5:d,L6:u}=i(e);return(0,r.jsxs)("div",{className:l().digit,children:[(0,r.jsx)("div",{className:n()(l().digit_bar,l().digit_bar__h,l().digit_bar__c,l().digit_bar__0,{[l().digit_bar__active]:_})}),(0,r.jsx)("div",{className:n()(l().digit_bar,l().digit_bar__v,l().digit_bar__vcl,l().digit_bar__1,{[l().digit_bar__active]:o})}),(0,r.jsx)("div",{className:n()(l().digit_bar,l().digit_bar__h,l().digit_bar__hcb,l().digit_bar__2,{[l().digit_bar__active]:a})}),(0,r.jsx)("div",{className:n()(l().digit_bar,l().digit_bar__v,l().digit_bar__vcr,l().digit_bar__3,{[l().digit_bar__active]:c})}),(0,r.jsx)("div",{className:n()(l().digit_bar,l().digit_bar__v,l().digit_bar__vcr,l().digit_bar__4,{[l().digit_bar__active]:s})}),(0,r.jsx)("div",{className:n()(l().digit_bar,l().digit_bar__h,l().digit_bar__hct,l().digit_bar__5,{[l().digit_bar__active]:d})}),(0,r.jsx)("div",{className:n()(l().digit_bar,l().digit_bar__v,l().digit_bar__vcl,l().digit_bar__6,{[l().digit_bar__active]:u})})]})},h=t=>(0,o.createElement)(p,{...t,controller:g}),v=t=>(0,o.createElement)(p,{...t,controller:f}),k=t=>(0,o.createElement)(p,{...t,controller:y}),m=t=>{let{blink:e}=t;return(0,r.jsxs)("div",{className:n()(l().blinker,{[l().blinker__blink]:e}),children:[(0,r.jsx)("div",{className:l().blinker_dot}),(0,r.jsx)("div",{className:"".concat(l().blinker_dot," ").concat(l().blinker_dot__1)})]})};var x=()=>{let[{H1:t,H0:e,M1:i,M0:_,S1:n,S0:a},c]=(0,o.useState)({H1:0,H0:0,M1:0,M0:0,S1:0,S0:0}),[s,d]=(0,o.useState)(!0),[{autoplay:b,syncAutoplay:g,audioLoaded:f},y]=(0,o.useState)({autoplay:!1,syncAutoplay:!1,audioLoaded:!1}),p=(0,o.useRef)();(0,o.useEffect)(()=>{let t=()=>{y(t=>({...t,audioLoaded:!0}))},e=p.current=new Audio("/assets/24clock64kbpsVar.mp3");e.loop=!0,e.addEventListener("canplay",t);let i=()=>{var t,e;let i=new Date,r=i.getHours(),_=i.getMinutes(),n=i.getSeconds();c({H1:Math.floor(r/10),H0:r%10,M1:Math.floor(_/10),M0:_%10,S1:Math.floor(n/10),S0:n%10}),d(n%2==0);let o=(null==p?void 0:null===(t=p.current)||void 0===t?void 0:t.readyState)===4;y(t=>({...t,audioLoaded:o,syncAutoplay:t.autoplay&&o}))};i();let r=setInterval(i,1e3);return()=>{clearInterval(r),e.removeEventListener("canplay",t)}},[]),(0,o.useEffect)(()=>{f&&null!=p.current&&(g?p.current.play():(p.current.pause(),p.current.currentTime=0))},[g,f]);let x=t=>()=>{y(e=>({...e,autoplay:t,syncAutoplay:t&&e.syncAutoplay}))};return(0,r.jsxs)("div",{children:[(0,r.jsx)(u,{}),(0,r.jsxs)("div",{className:l().clock,children:[(0,r.jsx)(k,{digit:t}),(0,r.jsx)(h,{digit:e}),(0,r.jsx)(m,{blink:s}),(0,r.jsx)(v,{digit:i}),(0,r.jsx)(h,{digit:_}),(0,r.jsx)(m,{blink:s}),(0,r.jsx)(v,{digit:n}),(0,r.jsx)(h,{digit:a})]}),(0,r.jsxs)("fieldset",{children:[(0,r.jsx)("legend",{children:"Settings"}),(0,r.jsx)("input",{type:"radio",name:"autoplay",id:"autoplayOn",value:"on",onChange:x(!0),checked:b}),(0,r.jsx)("label",{htmlFor:"autoplayOn",children:"I love the sound of inevitability"})," ",(0,r.jsx)("input",{type:"radio",name:"autoplay",id:"autoplayOff",value:"off",onChange:x(!1),checked:!b}),(0,r.jsx)("label",{htmlFor:"autoplayOff",children:"It kinda upsets me."})]})]})}},2297:function(t){t.exports={digit:"TwentyFourClock_digit__MDzNc",digit_bar:"TwentyFourClock_digit_bar__msuyx",digit_bar__active:"TwentyFourClock_digit_bar__active__1byTK",digit_bar__h:"TwentyFourClock_digit_bar__h__qFJEz",digit_bar__v:"TwentyFourClock_digit_bar__v__fBty6",digit_bar__0:"TwentyFourClock_digit_bar__0__C4M1s",digit_bar__1:"TwentyFourClock_digit_bar__1__bvbd6",digit_bar__2:"TwentyFourClock_digit_bar__2__QKBe6",digit_bar__3:"TwentyFourClock_digit_bar__3__PwTm7",digit_bar__4:"TwentyFourClock_digit_bar__4__9bdhH",digit_bar__5:"TwentyFourClock_digit_bar__5__Y6dUB",digit_bar__6:"TwentyFourClock_digit_bar__6__yCo9y",digit_bar__c:"TwentyFourClock_digit_bar__c__LIa0T",digit_bar__vcl:"TwentyFourClock_digit_bar__vcl__BMAmz",digit_bar__vcr:"TwentyFourClock_digit_bar__vcr__wz_C3",digit_bar__hct:"TwentyFourClock_digit_bar__hct__JGpaV",digit_bar__hcb:"TwentyFourClock_digit_bar__hcb__E93cb",clock:"TwentyFourClock_clock__074e5",blinker:"TwentyFourClock_blinker__dWSOH",blinker_dot:"TwentyFourClock_blinker_dot__pDS2g",blinker_dot__1:"TwentyFourClock_blinker_dot__1__CysiQ",blinker__blink:"TwentyFourClock_blinker__blink__A9U2P"}},8294:function(t,e,i){"use strict";var r=i(7653),_=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(t,e,i){var r,n={},c=null,s=null;for(r in void 0!==i&&(c=""+i),void 0!==e.key&&(c=""+e.key),void 0!==e.ref&&(s=e.ref),e)o.call(e,r)&&!l.hasOwnProperty(r)&&(n[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps)void 0===n[r]&&(n[r]=e[r]);return{$$typeof:_,type:t,key:c,ref:s,props:n,_owner:a.current}}e.Fragment=n,e.jsx=c,e.jsxs=c},7573:function(t,e,i){"use strict";t.exports=i(8294)},4223:function(t,e,i){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=i(7653),_=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(t,e,i){var r,n={},c=null,s=null;for(r in void 0!==i&&(c=""+i),void 0!==e.key&&(c=""+e.key),void 0!==e.ref&&(s=e.ref),e)o.call(e,r)&&!l.hasOwnProperty(r)&&(n[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps)void 0===n[r]&&(n[r]=e[r]);return{$$typeof:_,type:t,key:c,ref:s,props:n,_owner:a.current}}e.Fragment=n,e.jsx=c,e.jsxs=c},5505:function(t,e,i){"use strict";t.exports=i(4223)},7953:function(t,e,i){"use strict";i.d(e,{ah:function(){return n}});var r=i(7653);let _=r.createContext({});function n(t){let e=r.useContext(_);return r.useMemo(()=>"function"==typeof t?t(e):{...e,...t},[e,t])}}},function(t){t.O(0,[293,16,744],function(){return t(t.s=7676)}),_N_E=t.O()}]);