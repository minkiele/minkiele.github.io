(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2053],{4311:function(e,n,t){Promise.resolve().then(t.bind(t,224))},224:function(e,n,t){"use strict";t.d(n,{default:function(){return l}});var c=t(7573),r=t(7653),u=t(9429);function s(e){let n=Object.assign({p:"p"},(0,u.ah)(),e.components);return(0,c.jsx)(n.p,{children:"A little soundpad. Sounds will be added in time."})}var i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,u.ah)(),e.components);return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(s,e)})):s(e)},o=t(9042),a=t.n(o),l=()=>{let e=(0,r.useMemo)(()=>[{label:"Dragnet",value:"dragnet.mp3"}],[]),n=(0,r.useRef)();(0,r.useEffect)(()=>{n.current=new Audio},[]);let t=()=>{let e=n.current;e.pause(),e.currentTime=0},u=e=>()=>{t();let c=n.current;c.src="/assets/".concat(e),c.play()};return(0,c.jsxs)("div",{children:[(0,c.jsx)(i,{}),(0,c.jsx)("div",{children:e.map((e,n)=>{let{label:t,value:r}=e;return(0,c.jsx)("div",{className:a().sound,children:(0,c.jsx)("button",{onClick:u(r),children:t})},"".concat(t,"-").concat(r,"-").concat(n))})})]})}},9042:function(){},9429:function(e,n,t){"use strict";t.d(n,{ah:function(){return u}});var c=t(7653);let r=c.createContext({});function u(e){let n=c.useContext(r);return c.useMemo(()=>"function"==typeof e?e(n):{...n,...e},[n,e])}}},function(e){e.O(0,[5700,1293,286,1744],function(){return e(e.s=4311)}),_N_E=e.O()}]);