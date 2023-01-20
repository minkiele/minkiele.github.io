(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[153],{4184:function(e,n){var t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var s={}.hasOwnProperty;function i(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var o=typeof t;if("string"===o||"number"===o)e.push(t);else if(Array.isArray(t)){if(t.length){var r=i.apply(null,t);r&&e.push(r)}}else if("object"===o){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var l in t)s.call(t,l)&&t[l]&&e.push(l)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0!==(t=(function(){return i}).apply(n,[]))&&(e.exports=t)}()},6951:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/folypo",function(){return t(8003)}])},8003:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return j},default:function(){return b}});var s=t(5893),i=t(7294),o=t(4184),r=t.n(o),l=t(3940),a=t(2647),u=t.n(a);let c=(0,i.memo)(e=>{let{sides:n,side:t}=e,i=Math.PI/n,o=n%2==0;return(0,s.jsx)("div",{className:r()({[u().slice]:!0,[u().slice__even]:o,[u().slice__odd]:!o}),style:{width:"".concat(100*Math.sin(i),"%"),height:"".concat(50*Math.cos(i)*(o?2:1),"%"),transform:"translateX(-50%) rotate(".concat(2*i*t,"rad)")}})});c.displayName="Slice";var d=t(5235),p=t.n(d);let _=(0,i.memo)(e=>{let{sides:n,radius:t,className:i}=e;return(0,s.jsx)("div",{className:r()({[p().polygon]:!0,[p().polygon__aspectRatio]:null==t,[i]:i}),style:null==t?void 0:{width:2*t,height:2*t},children:(0,l.DZ1)(e=>(0,s.jsx)(c,{radius:t,sides:n,side:e},e),n%2==0?n/2:n)})});_.displayName="Polygon";var h=t(5618),f=t.n(h),g=t(1151);function y(e){let n=Object.assign({p:"p"},(0,g.ah)(),e.components);return(0,s.jsx)(n.p,{children:"Simple engine to print regular polygons using HTML. For fun I turned on\nshadows to see what was drawn inside, because above 20 sides they looked\npretty much all the same."})}var v=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,g.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(y,e)})):y(e)};let m=(e,n)=>{let t=parseInt(e);return isNaN(t)?n:Math.max(t,n)},x=()=>{let[{sides:e,radius:n},t]=(0,i.useState)({sides:4,radius:128}),o=e=>{t(n=>({...n,sides:m(e.target.value,2)}))},r=e=>{t(n=>({...n,radius:m(e.target.value,1)}))},l=(0,s.jsxs)("div",{children:[(0,s.jsx)(_,{sides:e,radius:n,className:f().polypo_polygon}),(0,s.jsxs)("fieldset",{children:[(0,s.jsx)("legend",{children:"Generator configuration"}),(0,s.jsx)("label",{htmlFor:"sides",children:"Number of sides:"})," ",(0,s.jsx)("input",{name:"sides",id:"sides",value:e,onChange:o,type:"number"}),(0,s.jsx)("br",{}),(0,s.jsx)("label",{htmlFor:"radius",children:"Radius of the surrounding circle: "})," ",(0,s.jsx)("input",{name:"sides",id:"sides",value:n,onChange:r,type:"number"})]})]});return(0,s.jsxs)("div",{children:[(0,s.jsx)(v,{}),l]})};var j=!0,b=x},5618:function(e){e.exports={polypo_polygon:"Polypo_polypo_polygon__6SqnU"}},5235:function(e){e.exports={polygon:"Polygon_polygon__Nt1_t"}},2647:function(e){e.exports={slice:"Slice_slice__0Y29r",slice__even:"Slice_slice__even__hkN5X",slice__odd:"Slice_slice__odd__st2w7"}}},function(e){e.O(0,[407,774,888,179],function(){return e(e.s=6951)}),_N_E=e.O()}]);