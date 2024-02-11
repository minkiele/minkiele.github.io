(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[834],{7556:function(e,t,i){Promise.resolve().then(i.bind(i,1268)),Promise.resolve().then(i.bind(i,4288))},537:function(e,t,i){"use strict";i.d(t,{Z:function(){return c}});var n=i(7653),l=i(1301);let r=i.n(l)().className;var s=i(288),a=i.n(s);function c(e){let{children:t}=e;return(0,n.createElement)("span",{className:"".concat(r," ").concat(a().emoji)},t)}},1268:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return j}});var n=i(7573),l=i(7653);let r=Symbol("IDLE"),s=Symbol("PLAY"),a=Symbol("GAMEOVER"),c=Symbol("WINNER");var o=i(1569),p=i.n(o),d=i(6072),u=i.n(d),f=i(537),h=i(7197),m=i.n(h),_=i(8815);let F={enter:m().startFlip,enterActive:m().startFlipActive,enterDone:m().startFlipDone,exit:m().finishFlip,exitActive:m().finishFlipActive,exitDone:m().finishFlipDone},x={enter:m().startFlipBack,enterActive:m().startFlipBackActive,enterDone:m().startFlipBackDone,exit:m().finishFlipBack,exitActive:m().finishFlipBackActive,exitDone:m().finishFlipBackDone};function v(e){let{children:t,className:i,isFlipped:r=!1}=e,s=(0,l.useRef)(null),[a,c]=(0,l.useState)(0);return(0,l.useEffect)(()=>{r&&0===a?c(1):r||2!==a||c(3)},[r,a]),(0,l.useEffect)(()=>{4===a&&c(0)},[a]),(0,n.jsx)(_.Z,{in:1===a||3===a,nodeRef:s,onEntered:()=>{c(e=>e+1)},timeout:150,classNames:a<3?F:x,children:(0,n.jsx)("span",{ref:s,className:i,children:"function"==typeof t?t({isFront:2===a||3===a,isBack:a<2||4===a}):t})})}var b=i(446),g=i.n(b);function j(e){let{deck:t}=e,{status:i,left:o,cards:d,matched:h,flip:m,isFlipped:_,flipped:F,reset:x}=function(e){let[{cards:t,matched:i,flipped:n,status:o,left:p,wait:d},u]=(0,l.useReducer)((e,t)=>{switch(t.type){case"reset":return{...e,cards:t.cards,flipped:[],left:t.left,matched:[],status:s,wait:t.wait};case"flip":if(e.status===s){if(0===e.flipped.length)return{...e,flipped:[t.index]};if(e.flipped[0]!==t.index&&e.cards[e.flipped[0]]===e.cards[t.index]){let t={...e,flipped:[],matched:[...e.matched,e.cards[e.flipped[0]].id]};if((e.matched.length+1)*2===e.cards.length)return{...t,status:c};return t}{let i={...e,flipped:[...e.flipped,t.index]};if(e.left>0)return i;return{...i,flipped:[...e.flipped,t.index],left:0,status:a}}}return e;case"cover":return{...e,flipped:[],left:e.left-1}}},{cards:[],matched:[],flipped:[],status:r,left:-1,wait:-1}),f=(0,l.useCallback)(function(){let{size:t=12,left:i=3,wait:n=1500}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};u({type:"reset",cards:function(e,t){var i;let n=e>=(i=t.length)?i%2==0?i:i-1:e%2==0?e:e+1,l=[],r=Array.from({length:n}).fill(void 0);for(;l.length<n/2;){let e=t[Math.floor(Math.random()*t.length)];l.some(t=>t.id===e.id)||l.push(e)}for(let e=0;e<l.length;e+=1){let t=0;for(;t<2;){let i=Math.floor(Math.random()*r.length);null==r[i]&&(r[i]=l[e],t+=1)}}return r}(t,e),left:i,wait:n})},[e]);(0,l.useEffect)(()=>{f()},[f]),(0,l.useEffect)(()=>{if(n.length>1&&p>0){let e=setTimeout(()=>{u({type:"cover"})},d);return()=>{clearTimeout(e)}}},[n,p,d]);let h=(0,l.useCallback)(e=>{n.length<2&&u({type:"flip",index:e})},[n]),m=(0,l.useCallback)(e=>o===a||n.includes(e)||i.includes(t[e].id),[o,n,t,i]);return(0,l.useMemo)(()=>({cards:t,matched:i,flipped:n,status:o,left:p,reset:f,flip:h,isFlipped:m}),[t,i,n,o,p,f,h,m])}(t),b=function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return()=>{x(...t),window.scrollTo({top:0,left:0,behavior:"smooth"})}};return(0,n.jsxs)("div",{children:[(0,n.jsx)("ol",{className:p().list,children:d.map((e,t)=>{let l=_(t),r=i===a||h.includes(e.id),s=e=>()=>{m(e)};return(0,n.jsxs)("li",{className:p().list_item,children:[(0,n.jsx)(v,{isFlipped:l,className:p().imageWrapper,children:i=>{let{isBack:l}=i;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u(),{src:e.thumb,alt:"Cover image",fill:!0,className:g()(p().image,{[p().image__hidden]:l}),priority:t<12}),l&&(0,n.jsx)("button",{type:"button",className:p().cover,onClick:s(t),children:(0,n.jsx)(f.Z,{children:"\uD83D\uDE05"})})]})}}),r&&(0,n.jsxs)("span",{children:[(0,n.jsx)("strong",{children:e.artist}),": ",e.title," (",e.medium,")"]})]},"".concat(e.id,"-").concat(t))})}),i===s&&(0,n.jsxs)("p",{children:["You have ",o," tries left."]}),i===a&&(0,n.jsx)("p",{children:"Sorry, game over."}),i===c&&(0,n.jsx)("p",{children:"You won!"}),(0,n.jsx)("div",{children:(0,n.jsxs)("fieldset",{children:[(0,n.jsx)("legend",{children:"Commands"}),(0,n.jsx)("button",{type:"button",onClick:b(),children:"New game"})," ",(0,n.jsx)("button",{type:"button",onClick:b({size:16,left:5}),children:"New game slightly bigger"})," ",(0,n.jsx)("button",{type:"button",onClick:b({size:24,left:8}),children:"New game double"}),(0,n.jsxs)("form",{onSubmit:e=>{e.preventDefault();let t=e.target,i=Math.abs(parseInt(t.tries.value)),n=Math.abs(parseInt(t.size.value)),l=Math.abs(parseInt(t.wait.value));x({left:t.infiniteTries.checked?1/0:isNaN(i)?3:i,size:isNaN(n)?12:n%2==0?n:n+1,wait:isNaN(l)?1500:l})},children:[(0,n.jsx)("label",{htmlFor:"tries",children:"Tries"})," ",(0,n.jsx)("input",{id:"tries",name:"tries",type:"number",defaultValue:3,min:1})," ",(0,n.jsx)("input",{id:"infiniteTries",name:"infiniteTries",type:"checkbox",value:"infiniteTries"})," ",(0,n.jsx)("label",{htmlFor:"infiniteTries",children:"Infinite tries"})," ",(0,n.jsx)("label",{htmlFor:"size",children:"Size"})," ",(0,n.jsx)("input",{id:"size",name:"size",type:"number",defaultValue:12,min:4,max:t.length,step:2})," ",(0,n.jsx)("label",{htmlFor:"wait",children:"Waiting time before"})," ",(0,n.jsx)("input",{id:"wait",name:"wait",type:"number",defaultValue:1500,min:0})," ",(0,n.jsx)("button",{type:"submit",children:"New game with custom options"})]})]})})]})}},4288:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return c}});var n=i(7653),l=i(5505),r=i(7953);function s(e){let t=Object.assign({p:"p"},(0,r.ah)(),e.components);return(0,l.jsx)(t.p,{children:"A little Memory game where the cards are my records collection."})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,l.jsx)(t,Object.assign({},e,{children:(0,l.jsx)(s,e)})):s(e)};function c(){return(0,n.createElement)(a)}},288:function(e){e.exports={emoji:"Emoji_emoji__KdCI2"}},1569:function(e){e.exports={list:"Records_list__G7bAn",list_item:"Records_list_item__WfYnG",imageWrapper:"Records_imageWrapper__v6e08",image:"Records_image__xn4a5",image__hidden:"Records_image__hidden__i7I7O",cover:"Records_cover__baXEy"}},7197:function(e){e.exports={startFlip:"FlipCard_startFlip__W8iSP",startFlipActive:"FlipCard_startFlipActive___jwK4",startFlipDone:"FlipCard_startFlipDone__0E3aP",finishFlip:"FlipCard_finishFlip__qBl7c",finishFlipActive:"FlipCard_finishFlipActive__yXNV2",finishFlipDone:"FlipCard_finishFlipDone__Ff_Rt",startFlipBack:"FlipCard_startFlipBack__NllcR",startFlipBackActive:"FlipCard_startFlipBackActive__n6Jvz",startFlipBackDone:"FlipCard_startFlipBackDone__BbIty",finishFlipBack:"FlipCard_finishFlipBack__XlDxU",finishFlipBackActive:"FlipCard_finishFlipBackActive__tv17_",finishFlipBackDone:"FlipCard_finishFlipBackDone__wC3cq"}}},function(e){e.O(0,[762,293,16,744],function(){return e(e.s=7556)}),_N_E=e.O()}]);