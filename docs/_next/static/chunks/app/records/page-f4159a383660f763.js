(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[834],{3805:function(e,t,n){Promise.resolve().then(n.bind(n,3922)),Promise.resolve().then(n.bind(n,4288))},537:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7653),i=n(1301);let l=n.n(i)().className;var s=n(288),c=n.n(s);function a(e){let{children:t}=e;return(0,r.createElement)("span",{className:"".concat(l," ").concat(c().emoji)},t)}},3922:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(7573),i=n(7653);let l=Symbol("IDLE"),s=Symbol("PLAY"),c=Symbol("GAMEOVER"),a=Symbol("WINNER");var o=n(1569),d=n.n(o),u=n(6072),f=n.n(u),p=n(537);function m(e){let{source:t}=e,{status:n,left:o,cards:u,matched:m,flip:h,isFlipped:_,reset:g}=function(e){let[{cards:t,matched:n,flipped:r,status:o,left:d,wait:u},f]=(0,i.useReducer)((e,t)=>{switch(t.type){case"reset":return{...e,cards:t.cards,flipped:[],left:t.left,matched:[],status:s,wait:t.wait};case"flip":if(e.status===s){if(0===e.flipped.length)return{...e,flipped:[t.index]};if(e.cards[e.flipped[0]]===e.cards[t.index]){let t={...e,flipped:[],matched:[...e.matched,e.cards[e.flipped[0]].id]};if((e.matched.length+1)*2===e.cards.length)return{...t,status:a};return t}{let n={...e,flipped:[...e.flipped,t.index]};if(e.left>0)return n;return{...n,flipped:[...e.flipped,t.index],left:0,status:c}}}return e;case"cover":return{...e,flipped:[],left:e.left-1}}},{cards:[],matched:[],flipped:[],status:l,left:-1,wait:-1}),p=(0,i.useCallback)(function(){let{size:t=12,left:n=3,wait:r=1500}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};f({type:"reset",cards:function(e,t){let n=[],r=Array.from({length:e}).fill(void 0);for(;n.length<e/2;){let e=t[Math.floor(Math.random()*t.length)];n.some(t=>t.id===e.id)||n.push(e)}for(let e=0;e<n.length;e+=1){let t=0;for(;t<2;){let i=Math.floor(Math.random()*r.length);null==r[i]&&(r[i]=n[e],t+=1)}}return r}(t,e),left:n,wait:r})},[e]);(0,i.useEffect)(()=>{p()},[p]),(0,i.useEffect)(()=>{if(r.length>1&&d>0){let e=setTimeout(()=>{f({type:"cover"})},u);return()=>{clearTimeout(e)}}},[r,d,u]);let m=(0,i.useCallback)(e=>{r.length<2&&f({type:"flip",index:e})},[r]),h=(0,i.useCallback)(e=>o===c||r.includes(e)||n.includes(t[e].id),[o,r,t,n]);return(0,i.useMemo)(()=>({cards:t,matched:n,flipped:r,status:o,left:d,reset:p,flip:m,isFlipped:h}),[t,n,r,o,d,p,m,h])}(t);return(0,r.jsxs)("div",{children:[(0,r.jsx)("ol",{className:d().list,children:u.map((e,t)=>{let i=_(t),l=n===c||m.includes(e.id);return(0,r.jsxs)("li",{className:d().list_item,children:[(0,r.jsx)("span",{className:d().imageWrapper,children:i?(0,r.jsx)(f(),{src:e.thumb,alt:"Cover image",fill:!0,className:d().image,priority:t<4}):(0,r.jsx)("button",{type:"button",className:d().cover,onClick:()=>{h(t)},children:(0,r.jsx)(p.Z,{children:"\uD83D\uDE05"})})}),l&&(0,r.jsxs)("span",{children:[(0,r.jsx)("strong",{children:e.artist}),": ",e.title," (",e.medium,")"]})]},"".concat(e.id,"-").concat(t))})}),n===s&&(0,r.jsxs)("p",{children:["You have ",o," tries left."]}),n===c&&(0,r.jsx)("p",{children:"Sorry, game over."}),n===a&&(0,r.jsx)("p",{children:"You won!"}),(0,r.jsx)("div",{children:(0,r.jsxs)("fieldset",{children:[(0,r.jsx)("legend",{children:"Commands"}),(0,r.jsx)("button",{type:"button",onClick:()=>{g()},children:"New game"})]})})]})}},4288:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(7653),i=n(5505),l=n(7953);function s(e){let t=Object.assign({p:"p"},(0,l.ah)(),e.components);return(0,i.jsx)(t.p,{children:"A little Memory game where the cards are my records collection."})}var c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(s,e)})):s(e)};function a(){return(0,r.createElement)(c)}},288:function(e){e.exports={emoji:"Emoji_emoji__KdCI2"}},1569:function(e){e.exports={list:"Records_list__G7bAn",list_item:"Records_list_item__WfYnG",imageWrapper:"Records_imageWrapper__v6e08",image:"Records_image__xn4a5",cover:"Records_cover__baXEy"}}},function(e){e.O(0,[663,293,16,744],function(){return e(e.s=3805)}),_N_E=e.O()}]);