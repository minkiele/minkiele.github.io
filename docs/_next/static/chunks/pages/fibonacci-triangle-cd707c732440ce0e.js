(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[224],{831:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/fibonacci-triangle",function(){return t(5079)}])},5079:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return _},default:function(){return v}});var r=t(2322),i=t(2784);let l=Symbol("P"),s=Symbol("D"),o=[];function u(e){let n=[s];if(e.length){let t=e[e.length-1];for(let r=0;r<t.length-1;r+=1)n.push(t[r]===t[r+1]?l:s);n.push(s)}e.push(n)}for(let c=0;c<256;c+=1)u(o);var a=t(5320),h=t.n(a),d=t(5392);function f(e){let n=Object.assign({p:"p"},(0,d.ah)(),e.components);return(0,r.jsx)(n.p,{children:"This is a graphic representation of the Fibonacci sequence, where the\nfillings are odd numbers and the void are even numbers. Using 2^n steps\nhelps rendering full triangles."})}var g=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,d.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(f,e)})):f(e)};let p=()=>{let[e,n]=(0,i.useState)(4),t=e=>{let t=parseInt(e.target.value);t>=0&&n(t)},l=(0,i.useMemo)(()=>(function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"*";return(function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"*";return e.map(e=>(function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"*";return e.map(e=>e===s?t:n).join("")})(e,n,t))})(e,n,t).join("\n")})(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:256,n=[];for(let t=0;t<e;t+=1)u(n);return n}(2**e)," ","*"),[e]);return(0,r.jsxs)("div",{children:[(0,r.jsx)(g,{}),(0,r.jsxs)("fieldset",{children:[(0,r.jsx)("legend",{children:"Generator controls"}),(0,r.jsxs)("label",{htmlFor:"newTriangles",children:["This will generate 2",(0,r.jsx)("sup",{children:e})," (",2**e,") rows"]})," ",(0,r.jsx)("input",{id:"newTriangles",type:"number",onChange:t,value:e})]}),(0,r.jsx)("pre",{className:h().triangles_render,children:l})]})};var _=!0,v=p},5320:function(e){e.exports={triangles_render:"Triangles_triangles_render__cFnW8"}},5392:function(e,n,t){"use strict";t.d(n,{ah:function(){return l}});var r=t(2784);let i=r.createContext({});function l(e){let n=r.useContext(i);return r.useMemo(()=>"function"==typeof e?e(n):{...n,...e},[n,e])}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=831)}),_N_E=e.O()}]);