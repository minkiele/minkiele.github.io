(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[153],{2779:function(e,n){var t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var s={}.hasOwnProperty;function classNames(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var o=typeof t;if("string"===o||"number"===o)e.push(t);else if(Array.isArray(t)){if(t.length){var r=classNames.apply(null,t);r&&e.push(r)}}else if("object"===o){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var i in t)s.call(t,i)&&t[i]&&e.push(i)}}}return e.join(" ")}e.exports?(classNames.default=classNames,e.exports=classNames):void 0!==(t=(function(){return classNames}).apply(n,[]))&&(e.exports=t)}()},8391:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/folypo",function(){return t(9602)}])},9602:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return g},default:function(){return folypo}});var s=t(2111),o=t(2784),r=t(2779),i=t.n(r),a=t(2034),l=t(2667),u=t.n(l);let c=(0,o.memo)(e=>{let{sides:n,side:t}=e,o=Math.PI/n,r=n%2==0;return(0,s.jsx)("div",{className:i()({[u().slice]:!0,[u().slice__even]:r,[u().slice__odd]:!r}),style:{width:"".concat(100*Math.sin(o),"%"),height:"".concat(50*Math.cos(o)*(r?2:1),"%"),transform:"translateX(-50%) rotate(".concat(2*o*t,"rad)")}})});c.displayName="Slice";var d=t(992),p=t.n(d);let _=(0,o.memo)(e=>{let{sides:n,radius:t,className:o}=e;return(0,s.jsx)("div",{className:i()({[p().polygon]:!0,[p().polygon__aspectRatio]:null==t,[o]:o}),style:null==t?void 0:{width:2*t,height:2*t},children:(0,a.Z)(e=>(0,s.jsx)(c,{radius:t,sides:n,side:e},e),n%2==0?n/2:n)})});_.displayName="Polygon";var f=t(9776),h=t.n(f),m=t(5392);function _createMdxContent(e){let n=Object.assign({p:"p"},(0,m.ah)(),e.components);return(0,s.jsx)(n.p,{children:"Simple engine to print regular polygons using HTML. For fun I turned on\nshadows to see what was drawn inside, because above 20 sides they looked\npretty much all the same."})}var README=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,m.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(_createMdxContent,e)})):_createMdxContent(e)};let castInput=(e,n)=>{let t=parseInt(e);return isNaN(t)?n:Math.max(t,n)};var g=!0,folypo=()=>{let[{sides:e,radius:n},t]=(0,o.useState)({sides:4,radius:128}),r=(0,s.jsxs)("div",{children:[(0,s.jsx)(_,{sides:e,radius:n,className:h().polypo_polygon}),(0,s.jsxs)("fieldset",{children:[(0,s.jsx)("legend",{children:"Generator configuration"}),(0,s.jsx)("label",{htmlFor:"sides",children:"Number of sides:"})," ",(0,s.jsx)("input",{name:"sides",id:"sides",value:e,onChange:e=>{t(n=>({...n,sides:castInput(e.target.value,2)}))},type:"number"}),(0,s.jsx)("br",{}),(0,s.jsx)("label",{htmlFor:"radius",children:"Radius of the surrounding circle: "})," ",(0,s.jsx)("input",{name:"sides",id:"sides",value:n,onChange:e=>{t(n=>({...n,radius:castInput(e.target.value,1)}))},type:"number"})]})]});return(0,s.jsxs)("div",{children:[(0,s.jsx)(README,{}),r]})}},9776:function(e){e.exports={polypo_polygon:"Polypo_polypo_polygon__nB807"}},992:function(e){e.exports={polygon:"Polygon_polygon__8PoWf"}},2667:function(e){e.exports={slice:"Slice_slice__ACSpy",slice__even:"Slice_slice__even__KfQo_",slice__odd:"Slice_slice__odd__TsZ6m"}},5392:function(e,n,t){"use strict";t.d(n,{ah:function(){return useMDXComponents}});var s=t(2784);let o=s.createContext({});function useMDXComponents(e){let n=s.useContext(o);return s.useMemo(()=>"function"==typeof e?e(n):{...n,...e},[n,e])}},2034:function(e,n,t){"use strict";var s=(0,t(5652).Z)(function(e,n){var t,s=Number(n),o=0;if(s<0||isNaN(s))throw RangeError("n must be a non-negative number");for(t=Array(s);o<s;)t[o]=e(o),o+=1;return t});n.Z=s}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8391)}),_N_E=e.O()}]);