(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[834],{7556:function(e,t,i){Promise.resolve().then(i.bind(i,5362)),Promise.resolve().then(i.bind(i,4288))},537:function(e,t,i){"use strict";i.d(t,{Z:function(){return o}});var n=i(7653),l=i(1301);let r=i.n(l)().className;var s=i(288),a=i.n(s);function o(e){let{children:t}=e;return(0,n.createElement)("span",{className:"".concat(r," ").concat(a().emoji)},t)}},5362:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return y}});var n=i(7573),l=i(7653),r=i(2706),s=i(7907);let a=Symbol("IDLE"),o=Symbol("PLAY"),c=Symbol("GAMEOVER"),d=Symbol("WINNER"),p=(0,r.Ue)()((0,s.n)(e=>({cards:[],matched:[],flipped:[],status:a,left:-1,wait:-1,redeem:!1,reset:t=>{e({cards:t.cards,flipped:[],left:t.left,matched:[],status:o,wait:t.wait,redeem:t.redeem})},flip:t=>e(e=>{e.status===o&&(0===e.flipped.length?e.flipped=[t.index]:e.flipped[0]!==t.index&&e.cards[e.flipped[0]].id===e.cards[t.index].id?(e.matched.push(e.cards[e.flipped[0]].id),e.flipped=[],2*e.matched.length===e.cards.length?e.status=d:e.redeem&&(e.left+=1)):(e.flipped.push(t.index),0===e.left&&(e.status=c)))}),cover:()=>e(e=>{e.flipped=[],e.left-=1})})));var u=i(1569),h=i.n(u),f=i(8618),_=i(537),m=i(7197),g=i.n(m),x=i(5162);let v={enter:g().startFlip,enterActive:g().startFlipActive,enterDone:g().startFlipDone,exit:g().finishFlip,exitActive:g().finishFlipActive,exitDone:g().finishFlipDone},F={enter:g().startFlipBack,enterActive:g().startFlipBackActive,enterDone:g().startFlipBackDone,exit:g().finishFlipBack,exitActive:g().finishFlipBackActive,exitDone:g().finishFlipBackDone};function b(e){let{children:t,className:i,isFlipped:r=!1}=e,s=(0,l.useRef)(null),[a,o]=(0,l.useState)(0);return(0,l.useEffect)(()=>{r&&0===a?o(1):r||2!==a||o(3)},[r,a]),(0,l.useEffect)(()=>{4===a&&o(0)},[a]),(0,n.jsx)(x.Z,{in:1===a||3===a,nodeRef:s,onEntered:()=>{o(e=>e+1)},timeout:150,classNames:a<3?v:F,children:(0,n.jsx)("span",{ref:s,className:i,children:"function"==typeof t?t({isFront:2===a||3===a,isBack:a<2||4===a}):t})})}var j=i(7129),k=i.n(j),N=e=>{let{children:t,className:i,show:r,onToggle:s}=e,[a,o]=(0,l.useState)(!1),c=(0,l.useCallback)(()=>o(e=>!e),[]),d=null==r||null==s;return(0,l.useEffect)(()=>{null!=r&&o(r)},[r]),(0,n.jsxs)("div",{className:k()(h().toggler,i,{[h().toggler__show]:a}),children:[d&&(0,n.jsx)("div",{className:h().toggler_control,children:(0,n.jsx)("span",{role:"button",onClick:e=>{null==s||s(e,a),e.isDefaultPrevented()||c()},className:h().toggler_controlButton,children:a?"-":"+"})}),(0,n.jsx)("div",{className:h().toggler_content,children:t})]})},w=i(9774);function y(e){let{deck:t}=e,{status:i,left:s,cards:a,matched:u,flip:m,isFlipped:g,reset:x}=function(e){let{cards:t,matched:i,flipped:n,status:s,left:a,wait:o,reset:d,cover:u,flip:h}=(0,r.oR)(p),f=(0,l.useCallback)(function(){let{size:t=12,left:i=3,wait:n=1500,redeem:l=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};d({cards:function(e,t){var i;let n=e>=(i=t.length)?i%2==0?i:i-1:e%2==0?e:e+1,l=[],r=Array.from({length:n}).fill(void 0);for(;l.length<n/2;){let e=t[Math.floor(Math.random()*t.length)];l.some(t=>t.id===e.id)||l.push(e)}for(let e=0;e<l.length;e+=1){let t=0;for(;t<2;){let i=Math.floor(Math.random()*r.length);null==r[i]&&(r[i]=l[e],t+=1)}}return r}(t,e),left:i,wait:n,redeem:l})},[e,d]);(0,l.useEffect)(()=>{f()},[f]),(0,l.useEffect)(()=>{if(n.length>1&&a>0){let e=setTimeout(()=>{u()},o);return()=>{clearTimeout(e)}}},[n,a,o,u]);let _=(0,l.useCallback)(e=>{n.length<2&&h({index:e})},[n,h]),m=(0,l.useCallback)(e=>s===c||n.includes(e)||i.includes(t[e].id),[s,n,t,i]);return(0,l.useMemo)(()=>({cards:t,matched:i,flipped:n,status:s,left:a,reset:f,flip:_,isFlipped:m}),[t,i,n,s,a,f,_,m])}(t),v=function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return()=>{x(...t),window.scrollTo({top:0,left:0,behavior:"smooth"})}};return(0,n.jsxs)("div",{children:[(0,n.jsx)("ol",{className:h().list,children:a.map((e,t)=>{let l=g(t),r=i===c||u.includes(e.id),s=e=>()=>{m(e)};return(0,n.jsxs)("li",{className:h().list_item,children:[(0,n.jsx)(b,{isFlipped:l,className:h().imageWrapper,children:i=>{let{isBack:l}=i;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f.default,{src:e.thumb,alt:"Cover image",fill:!0,className:k()(h().image,{[h().image__hidden]:l}),priority:t<12}),l&&(0,n.jsx)("button",{type:"button",className:h().cover,onClick:s(t),children:(0,n.jsx)(_.Z,{children:"\uD83D\uDE05"})})]})}}),r&&(0,n.jsx)(N,{show:i===d||i===c||void 0,onToggle:i===d||i===c?w.Z:void 0,children:(0,n.jsxs)("span",{className:h().recordDescription,children:[(0,n.jsx)("strong",{children:e.artist}),": ",e.title," (",e.medium,")"]})})]},"".concat(e.id,"-").concat(t))})}),i===o&&(0,n.jsxs)("p",{children:["You have ",s," tries left."]}),i===c&&(0,n.jsx)("p",{children:"Sorry, game over."}),i===d&&(0,n.jsx)("p",{children:"You won!"}),(0,n.jsx)("div",{children:(0,n.jsxs)("fieldset",{children:[(0,n.jsx)("legend",{children:"Commands"}),(0,n.jsx)("button",{type:"button",onClick:v(),children:"New game"})," ",(0,n.jsx)("button",{type:"button",onClick:v({size:16,left:5}),children:"New game slightly bigger"})," ",(0,n.jsx)("button",{type:"button",onClick:v({size:24,left:8}),children:"New game double"})," ",(0,n.jsx)("button",{type:"button",onClick:v({size:2*t.length,left:1/0,wait:750}),children:"New game Avengers"}),(0,n.jsxs)("form",{onSubmit:e=>{e.preventDefault();let t=e.target,i=Math.abs(parseInt(t.tries.value)),n=Math.abs(parseInt(t.size.value)),l=Math.abs(parseInt(t.wait.value)),r=t.infiniteTries.checked?1/0:isNaN(i)?void 0:i;x({left:r,size:isNaN(n)?void 0:Math.max(4,n-n%4),wait:isNaN(l)?void 0:l,redeem:t.redeem.checked})},children:[(0,n.jsx)("label",{htmlFor:"tries",children:"Tries"})," ",(0,n.jsx)("input",{id:"tries",name:"tries",type:"number",defaultValue:3,min:1})," ",(0,n.jsx)("input",{id:"infiniteTries",name:"infiniteTries",type:"checkbox",value:"infiniteTries"})," ",(0,n.jsx)("label",{htmlFor:"infiniteTries",children:"Infinite tries"})," ",(0,n.jsx)("label",{htmlFor:"size",children:"Size"})," ",(0,n.jsx)("input",{id:"size",name:"size",type:"number",defaultValue:12,min:4,max:2*t.length,step:4})," ",(0,n.jsx)("label",{htmlFor:"wait",children:"Waiting time before"})," ",(0,n.jsx)("input",{id:"wait",name:"wait",type:"number",defaultValue:1500,min:0})," ",(0,n.jsx)("input",{id:"redeem",name:"redeem",type:"checkbox",value:"redeem"})," ",(0,n.jsx)("label",{htmlFor:"redeem",children:"Get one more try for every match"})," ",(0,n.jsx)("button",{type:"submit",children:"New game with custom options"})]})]})})]})}},4288:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return o}});var n=i(7653),l=i(5001),r=i(58);function s(e){let t=Object.assign({p:"p"},(0,r.ah)(),e.components);return(0,l.jsx)(t.p,{children:"A little Memory game where the cards are my records collection."})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,l.jsx)(t,Object.assign({},e,{children:(0,l.jsx)(s,e)})):s(e)};function o(){return(0,n.createElement)(a)}},288:function(e){e.exports={emoji:"Emoji_emoji__KdCI2"}},1569:function(e){e.exports={list:"Records_list__G7bAn",list_item:"Records_list_item__WfYnG",imageWrapper:"Records_imageWrapper__v6e08",image:"Records_image__xn4a5",image__hidden:"Records_image__hidden__i7I7O",cover:"Records_cover__baXEy",toggler:"Records_toggler__eWc38",toggler_control:"Records_toggler_control__1oU_Y",toggler_controlButton:"Records_toggler_controlButton__IoNVx",toggler_content:"Records_toggler_content__TAH4Z",toggler__show:"Records_toggler__show__2XYwb",recordDescription:"Records_recordDescription__KwoKk"}},7197:function(e){e.exports={startFlip:"FlipCard_startFlip__W8iSP",startFlipActive:"FlipCard_startFlipActive___jwK4",startFlipDone:"FlipCard_startFlipDone__0E3aP",finishFlip:"FlipCard_finishFlip__qBl7c",finishFlipActive:"FlipCard_finishFlipActive__yXNV2",finishFlipDone:"FlipCard_finishFlipDone__Ff_Rt",startFlipBack:"FlipCard_startFlipBack__NllcR",startFlipBackActive:"FlipCard_startFlipBackActive__n6Jvz",startFlipBackDone:"FlipCard_startFlipBackDone__BbIty",finishFlipBack:"FlipCard_finishFlipBack__XlDxU",finishFlipBackActive:"FlipCard_finishFlipBackActive__tv17_",finishFlipBackDone:"FlipCard_finishFlipBackDone__wC3cq"}}},function(e){e.O(0,[868,909,293,997,744],function(){return e(e.s=7556)}),_N_E=e.O()}]);