"use strict";(self.webpackChunkminkiele_github_io=self.webpackChunkminkiele_github_io||[]).push([[651],{9651:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r=n(9439),a=n(7363),u=n(1611),i="rlRZi",o="_4adpf",c="TivyK",s=function(e,t){switch(e){case 1:return function(e){return e%4===0&&(e%100!==0||e%4e3===0)}(t)?29:28;case 3:case 5:case 8:case 10:return 30;default:return 31}},d=function(e,t,n){return e/s(t,n)},l=function(e){return e/60},f=function(e,t,n){for(var r=e,a=0;a<t;a+=1)r+=s(a,n);return r},h=function(e){var t=100*Math.pow(e,.5);return{width:"".concat(t,"%"),height:"".concat(t,"%")}},m=["day","date","month","hour","minute","second"],v=n(6417),g=function(){return function(e){return{day:(r=e.getDay(),((r+6)%7+1)/7),date:d(e.getDate(),e.getMonth(),e.getFullYear()),month:(n=e.getMonth(),(n+1)/12),hour:(t=e.getHours(),t/24),minute:l(e.getMinutes()),second:l(e.getSeconds()),dayOfYear:f(e.getDate(),e.getMonth(),e.getFullYear()),fullHour:e.getHours()};var t,n,r}(new Date)},y=function(){var e=(0,a.useState)(g()),t=(0,r.Z)(e,2),n=t[0],s=t[1];(0,a.useEffect)((function(){var e=setInterval((function(){s(g())}),1e3);return function(){clearInterval(e)}}),[]);var d=(0,a.useCallback)((function(e,t){return"date"===e||"day"===e||"month"===e?t:void 0}),[]),l=(0,a.useCallback)((function(e,t){return"hour"===e||"minute"===e||"second"===e?t:void 0}),[]),f=(0,v.jsx)("div",{className:i,children:m.map((function(e){return(0,v.jsx)("div",{className:o,children:(0,v.jsx)("div",{className:c,"data-doy":d(e,n.dayOfYear),"data-h":l(e,n.fullHour),style:h(n[e])})},e)}))});return(0,v.jsxs)("div",{children:[(0,v.jsx)(u.Z,{children:"# Circles\n\nThis is a full clock that renders all the date and time parameters that can be limited into a range.\nCircles are filled in relation to the area, not the radius, and that's a curious effect because you don't expect\nhow the same area occupied at the start of a period is free at the end of said period. Also date and time colors\nare statically interpolated and are set for every hour and every day."}),f]})}},1611:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7363),a=n(7973),u=n(6417),i=(0,r.memo)((function(e){var t=e.children;return(0,u.jsx)(a.D,{components:{h1:function(){return(0,r.createElement)(r.Fragment)}},children:t})}))}}]);