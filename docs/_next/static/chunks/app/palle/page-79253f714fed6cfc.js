(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[602],{7517:function(e,t,r){Promise.resolve().then(r.bind(r,1726))},1726:function(e,t,r){"use strict";r.d(t,{default:function(){return j}});var n=r(7573),a=r(7653),c=r(1933),s=r.n(c);let i=e=>e%4==0&&(e%100!=0||e%4e3==0),l=(e,t)=>{switch(e){case 1:return i(t)?29:28;case 3:case 5:case 8:case 10:return 30;default:return 31}},o=e=>((e+6)%7+1)/7,u=(e,t,r)=>e/l(t,r),d=e=>(e+1)/12,h=e=>e/24,f=e=>e/60,m=(e,t,r)=>{let n=e;for(let e=0;e<t;e+=1)n+=l(e,r);return n},p=e=>({day:o(e.getDay()),date:u(e.getDate(),e.getMonth(),e.getFullYear()),month:d(e.getMonth()),hour:h(e.getHours()),minute:f(e.getMinutes()),second:f(e.getSeconds()),dayOfYear:m(e.getDate(),e.getMonth(),e.getFullYear()),fullHour:e.getHours()}),_=e=>{let t=100*e**.5;return{width:"".concat(t,"%"),height:"".concat(t,"%")}},g=["day","date","month","hour","minute","second"];var v=r(9429);function y(e){let t=Object.assign({p:"p"},(0,v.ah)(),e.components);return(0,n.jsx)(t.p,{children:"This is a full clock that renders all the date and time parameters that can be limited into a range.\nCircles are filled in relation to the area, not the radius, and that's a curious effect because you don't expect\nhow the same area occupied at the start of a period is free at the end of said period. Also date and time colors\nare statically interpolated and are set for every hour and every day."})}var C=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,v.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(y,e)})):y(e)};let x=()=>p(new Date);var j=()=>{let[e,t]=(0,a.useState)();(0,a.useEffect)(()=>{t(x());let e=setInterval(()=>{t(x())},1e3);return()=>{clearInterval(e)}},[]);let r=(0,a.useCallback)((e,t)=>"date"===e||"day"===e||"month"===e?t:void 0,[]),c=(0,a.useCallback)((e,t)=>"hour"===e||"minute"===e||"second"===e?t:void 0,[]),i=null!=e&&(0,n.jsx)("div",{className:s().circles,children:g.map(t=>(0,n.jsx)("div",{className:s().circles_circleContainer,children:(0,n.jsx)("div",{className:s().circles_circle,"data-doy":r(t,e.dayOfYear),"data-h":c(t,e.fullHour),style:_(e[t])})},t))});return(0,n.jsxs)("div",{children:[(0,n.jsx)(C,{}),i]})}},1933:function(e){e.exports={circles:"Circles_circles__pe7Vm",circles_circleContainer:"Circles_circles_circleContainer__RVCpu",circles_circle:"Circles_circles_circle__1BEmM"}},9429:function(e,t,r){"use strict";r.d(t,{ah:function(){return c}});var n=r(7653);let a=n.createContext({});function c(e){let t=n.useContext(a);return n.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}}},function(e){e.O(0,[3388,1293,286,1744],function(){return e(e.s=7517)}),_N_E=e.O()}]);