(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3687],{905:function(t,e,n){Promise.resolve().then(n.bind(n,4914))},9102:function(t,e){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var s=typeof n;if("string"===s||"number"===s)t.push(n);else if(Array.isArray(n)){if(n.length){var o=i.apply(null,n);o&&t.push(o)}}else if("object"===s){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){t.push(n.toString());continue}for(var u in n)r.call(n,u)&&n[u]&&t.push(u)}}}return t.join(" ")}t.exports?(i.default=i,t.exports=i):void 0!==(n=(function(){return i}).apply(e,[]))&&(t.exports=n)}()},6161:function(t){var e;e=function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="week",s="month",o="quarter",u="year",a="date",c="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},d="en",m={};m[d]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||"th")+"]"}};var p=function(t){return t instanceof $},v=function t(e,n,r){var i;if(!e)return d;if("string"==typeof e){var s=e.toLowerCase();m[s]&&(i=s),n&&(m[s]=n,i=s);var o=e.split("-");if(!i&&o.length>1)return t(o[0])}else{var u=e.name;m[u]=e,i=u}return!r&&i&&(d=i),i||!r&&d},y=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new $(n)},g={s:f,z:function(t){var e=-t.utcOffset(),n=Math.abs(e);return(e<=0?"+":"-")+f(Math.floor(n/60),2,"0")+":"+f(n%60,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,s),o=n-i<0,u=e.clone().add(r+(o?-1:1),s);return+(-(r+(n-i)/(o?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(c){return({M:s,y:u,w:i,d:"day",D:a,h:r,m:n,s:e,ms:t,Q:o})[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}};g.l=v,g.i=p,g.w=function(t,e){return y(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var $=function(){function f(t){this.$L=v(t.locale,null,!0),this.parse(t)}var d=f.prototype;return d.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},d.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},d.$utils=function(){return g},d.isValid=function(){return this.$d.toString()!==c},d.isSame=function(t,e){var n=y(t);return this.startOf(e)<=n&&n<=this.endOf(e)},d.isAfter=function(t,e){return y(t)<this.startOf(e)},d.isBefore=function(t,e){return this.endOf(e)<y(t)},d.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,o){var c=this,l=!!g.u(o)||o,h=g.p(t),f=function(t,e){var n=g.w(c.$u?Date.UTC(c.$y,e,t):new Date(c.$y,e,t),c);return l?n:n.endOf("day")},d=function(t,e){return g.w(c.toDate()[t].apply(c.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),c)},m=this.$W,p=this.$M,v=this.$D,y="set"+(this.$u?"UTC":"");switch(h){case u:return l?f(1,0):f(31,11);case s:return l?f(1,p):f(0,p+1);case i:var $=this.$locale().weekStart||0,b=(m<$?m+7:m)-$;return f(l?v-b:v+(6-b),p);case"day":case a:return d(y+"Hours",0);case r:return d(y+"Minutes",1);case n:return d(y+"Seconds",2);case e:return d(y+"Milliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(i,o){var c,l=g.p(i),h="set"+(this.$u?"UTC":""),f=((c={}).day=h+"Date",c[a]=h+"Date",c[s]=h+"Month",c[u]=h+"FullYear",c[r]=h+"Hours",c[n]=h+"Minutes",c[e]=h+"Seconds",c[t]=h+"Milliseconds",c)[l],d="day"===l?this.$D+(o-this.$W):o;if(l===s||l===u){var m=this.clone().set(a,1);m.$d[f](d),m.init(),this.$d=m.set(a,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](d);return this.init(),this},d.set=function(t,e){return this.clone().$set(t,e)},d.get=function(t){return this[g.p(t)]()},d.add=function(t,o){var a,c=this;t=Number(t);var l=g.p(o),h=function(e){var n=y(c);return g.w(n.date(n.date()+Math.round(e*t)),c)};if(l===s)return this.set(s,this.$M+t);if(l===u)return this.set(u,this.$y+t);if("day"===l)return h(1);if(l===i)return h(7);var f=((a={})[n]=6e4,a[r]=36e5,a[e]=1e3,a)[l]||1,d=this.$d.getTime()+t*f;return g.w(d,this)},d.subtract=function(t,e){return this.add(-1*t,e)},d.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||c;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=g.z(this),s=this.$H,o=this.$m,u=this.$M,a=n.weekdays,l=n.months,f=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return g.s(s%12||12,t,"0")},m=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:g.s(u+1,2,"0"),MMM:f(n.monthsShort,u,l,3),MMMM:f(l,u),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:f(n.weekdaysMin,this.$W,a,2),ddd:f(n.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:m(s,o,!0),A:m(s,o,!1),m:String(o),mm:g.s(o,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:i};return r.replace(h,function(t,e){return e||p[t]||i.replace(":","")})},d.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},d.diff=function(t,a,c){var l,h=g.p(a),f=y(t),d=(f.utcOffset()-this.utcOffset())*6e4,m=this-f,p=g.m(this,f);return p=((l={})[u]=p/12,l[s]=p,l[o]=p/3,l[i]=(m-d)/6048e5,l.day=(m-d)/864e5,l[r]=m/36e5,l[n]=m/6e4,l[e]=m/1e3,l)[h]||m,c?p:g.a(p)},d.daysInMonth=function(){return this.endOf(s).$D},d.$locale=function(){return m[this.$L]},d.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=v(t,e,!0);return r&&(n.$L=r),n},d.clone=function(){return g.w(this.$d,this)},d.toDate=function(){return new Date(this.valueOf())},d.toJSON=function(){return this.isValid()?this.toISOString():null},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},f}(),b=$.prototype;return y.prototype=b,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W","day"],["$M",s],["$y",u],["$D",a]].forEach(function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),y.extend=function(t,e){return t.$i||(t(e,$,y),t.$i=!0),y},y.locale=v,y.isDayjs=p,y.unix=function(t){return y(1e3*t)},y.en=m[d],y.Ls=m,y.p={},y},t.exports=e()},4914:function(t,e,n){"use strict";n.d(e,{default:function(){return w}});var r=n(7573),i=n(7653),s=n(5615),o=n.n(s);function u(t){return"[object Number]"===Object.prototype.toString.call(t)}var a=(0,n(5709).Z)(function(t,e){if(!(u(t)&&u(e)))throw TypeError("Both arguments to range must be numbers");for(var n=[],r=t;r<e;)n.push(r),r+=1;return n});let c=t=>({size:t,board:{left:a(1,t+1),center:[],right:[]},isValid:!1,moves:0}),l=t=>{let[e,n]=(0,i.useReducer)((t,e)=>{switch(e.type){case"move":if(e.from!==e.to&&t.board[e.from].length>0&&(0===t.board[e.to].length||t.board[e.from][0]<t.board[e.to][0])){let n={...t.board,[e.from]:t.board[e.from].slice(1),[e.to]:[t.board[e.from][0],...t.board[e.to]]},r=n.center.length===t.size||n.right.length===t.size;return{...t,board:n,isValid:r,moves:t.moves+1}}return t;case"setSize":return c(e.size);case"reset":return c(t.size)}},{size:t,board:{left:a(1,t+1),center:[],right:[]},isValid:!1,moves:0}),r=(0,i.useCallback)(t=>n({type:"setSize",size:t}),[]),s=(0,i.useCallback)((t,e)=>n({type:"move",from:t,to:e}),[]),o=(0,i.useCallback)(()=>n({type:"reset"}),[]);return(0,i.useEffect)(()=>{r(t)},[t,r]),(0,i.useMemo)(()=>({...e,setSize:r,move:s,reset:o}),[e,r,s,o])},h=function(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:30;return{width:"calc(".concat(n,"% + ").concat((100-n)/Math.max(1,e-1)*(t-1),"%)")}},f=(t,e)=>{switch(t){case"left":return"right"===e?"center":"right";case"center":return"right"===e?"left":"right";case"right":return"left"===e?"center":"left"}},d=(t,e,n)=>{let r=[],i=f(e,n);return t>1&&r.push(...d(t-1,e,i)),r.push({stone:t,from:e,to:n}),t>1&&r.push(...d(t-1,i,n)),r},m=t=>{let[e,n]=(0,i.useState)([]);(0,i.useEffect)(()=>{2===e.length&&(t(e[0],e[1]),n([]))},[e,t]);let r=(0,i.useCallback)(t=>{n(e=>[...e,t])},[]);return(0,i.useMemo)(()=>({touchSelected:e,touchSelect:r}),[e,r])};var p=n(9429);function v(t){let e=Object.assign({p:"p",strong:"strong",ol:"ol",li:"li"},(0,p.ah)(),t.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:["A very basic implementation of the ",(0,r.jsx)(e.strong,{children:"Tower of Hanoi"}),". To solve it you must\nmove the pile from the left column to one of the others, but you can\nmove a smaller stone over a bigger one (or to an empty column). To move\na pile of n stones the minimum amount of moves is 2^n - 1, so to move\na 10 stones pile you'll take at least 1023 moves to make it properly."]}),"\n",(0,r.jsx)(e.p,{children:"Once you understand how it works it becomes a very repetitive task, and\nthe challenge becomes remembering where are you during the move, often\nyou'll forget which \"sub-pile\" you're taking down and which one you're\nbuilding up."}),"\n",(0,r.jsx)(e.p,{children:"The procedure to solve a Tower of Hanoi can be boiled down to a very\nsimple recursive algorithm, so to move a stack of size n from one column\nto another you must:"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"Move a sub-stack of size n - 1 to the third column;"}),"\n",(0,r.jsx)(e.li,{children:"Move the last stone to the second column;"}),"\n",(0,r.jsx)(e.li,{children:"Move the sub-stack of size n - 1 from the third to the second column;"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"Apply recursively this sequence to any sub stack you're trying to move."}),"\n",(0,r.jsx)(e.p,{children:"To play on desktop drag & drop the top stones where you need them; to\nplay on mobile tap the stack you're taking the stone from then tap the\ncolumn where you're leaving it."})]})}var y=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,p.ah)(),t.components);return e?(0,r.jsx)(e,Object.assign({},t,{children:(0,r.jsx)(v,t)})):v(t)},g=n(6058),$=n(9102),b=n.n($),M=n(2305);let x=["left","center","right"];var w=()=>{let{board:t,moves:e,isValid:n,size:s,setSize:u,move:a,reset:c}=l(3),{touchSelected:f,touchSelect:p}=m(a),v=(0,i.useRef)(),{start:$,stop:w,reset:S,elapsed:_}=(0,M.Z)(),[j,D]=(0,i.useState)([]),Z=t=>e=>{e.dataTransfer.setData("text/plain",t)},O=t=>{t.preventDefault()},k=t=>e=>{e.preventDefault(),a(e.dataTransfer.getData("text/plain"),t)},T=()=>{null!=v.current&&clearInterval(v.current)},C=()=>{c(),T(),S()},z=t=>{D(d(t,"left","right"))},N=(0,g.Z)(p);return(0,i.useEffect)(()=>{n?w():e>0&&$()},[$,w,n,e]),(0,r.jsxs)("div",{children:[(0,r.jsx)(y,{}),(0,r.jsx)("div",{className:o().vietnam,children:x.map(e=>(0,r.jsx)("div",{className:b()({[o().vietnam_column]:!0,[o().vietnam_column__touchSelected]:f.includes(e)}),onDragOver:O,onDrop:k(e),onTouchEnd:N(e),children:t[e].map((t,n)=>(0,r.jsx)("div",{className:o().vietnam_stone,style:h(t,s,30),draggable:0===n,onDragStart:Z(e),children:t},"".concat(e,"-").concat(t)))},e))}),(0,r.jsxs)("p",{children:["To move this tower you'll need 2",(0,r.jsx)("sup",{children:s})," - 1 = ",2**s-1," moves, so far you made ",e," moves in ",_,"s."]}),n&&(e===2**s-1?(0,r.jsxs)("p",{children:["You solved it with maximum effort in ",_,"s!"]}):(0,r.jsxs)("p",{children:["You solved it, but you can do better in ",_,"s."]})),(0,r.jsx)("div",{children:(0,r.jsxs)("fieldset",{children:[(0,r.jsx)("legend",{children:"Controls"}),(0,r.jsx)("label",{htmlFor:"setSize",children:"Size of the tower:"})," ",(0,r.jsx)("input",{id:"setSize",type:"number",onChange:t=>{let e=parseInt(t.target.value),n=Math.max(1,isNaN(e)?1:e);u(n),T(),j.length>0&&z(n)},value:s})," ",(0,r.jsx)("button",{type:"button",onClick:C,children:"Reset"})," ",(0,r.jsx)("button",{type:"button",onClick:()=>{C();let t=d(s,"left","right"),e=s>1?1e3/(3*Math.log2(s)):0;v.current=setInterval(()=>{if(t.length>0){let{from:e,to:n}=t.shift();a(e,n)}else T()},e)},children:"Solve"})," ",(0,r.jsx)("button",{type:"button",onClick:()=>{z(s)},children:"Show me the money"})]})}),j.length>0&&(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:"The money"}),(0,r.jsx)("ol",{children:i.Children.toArray(j.map(t=>{let{stone:e,to:n}=t;return(0,r.jsxs)("li",{children:["Move stone ",e," to the ",n]})}))})]})]})}},2305:function(t,e,n){"use strict";var r=n(6161),i=n.n(r),s=n(7653);e.Z=()=>{let[t,e]=(0,s.useReducer)((t,e)=>{switch(e){case"start":if(null!=t.started)return t;{let t=i()();return{started:t,current:t,elapsed:0}}case"stop":return{...t,started:null,current:null};case"reset":return{started:null,current:null,elapsed:0};default:var n,r;let s=i()();return{...t,current:s,elapsed:null!==(r=null===(n=t.current)||void 0===n?void 0:n.diff(t.started,"s"))&&void 0!==r?r:0}}},{started:null,current:null,elapsed:0}),n=(0,s.useMemo)(()=>({start:()=>e("start"),stop:()=>e("stop"),reset:()=>e("reset")}),[]);return(0,s.useEffect)(()=>{if(null!=t.started){let t=setInterval(()=>{e("update")},1e3);return()=>{clearTimeout(t)}}},[t.started]),(0,s.useMemo)(()=>({...t,...n}),[n,t])}},5615:function(t){t.exports={vietnam:"Vietnam_vietnam__1NeKC",vietnam_column:"Vietnam_vietnam_column__ssxIi",vietnam_column__touchSelected:"Vietnam_vietnam_column__touchSelected__lOFZk",vietnam_stone:"Vietnam_vietnam_stone__mF1cJ"}},9429:function(t,e,n){"use strict";n.d(e,{ah:function(){return s}});var r=n(7653);let i=r.createContext({});function s(t){let e=r.useContext(i);return r.useMemo(()=>"function"==typeof t?t(e):{...e,...t},[e,t])}},7045:function(t,e,n){"use strict";var r=n(2323),i=n(4076),s=n(5709),o=n(6541),u=(0,s.Z)(function(t,e){return 1===t?(0,i.Z)(e):(0,r.Z)(t,(0,o.Z)(t,[],e))});e.Z=u},2323:function(t,e,n){"use strict";function r(t,e){switch(t){case 0:return function(){return e.apply(this,arguments)};case 1:return function(t){return e.apply(this,arguments)};case 2:return function(t,n){return e.apply(this,arguments)};case 3:return function(t,n,r){return e.apply(this,arguments)};case 4:return function(t,n,r,i){return e.apply(this,arguments)};case 5:return function(t,n,r,i,s){return e.apply(this,arguments)};case 6:return function(t,n,r,i,s,o){return e.apply(this,arguments)};case 7:return function(t,n,r,i,s,o,u){return e.apply(this,arguments)};case 8:return function(t,n,r,i,s,o,u,a){return e.apply(this,arguments)};case 9:return function(t,n,r,i,s,o,u,a,c){return e.apply(this,arguments)};case 10:return function(t,n,r,i,s,o,u,a,c,l){return e.apply(this,arguments)};default:throw Error("First argument to _arity must be a non-negative integer no greater than ten")}}n.d(e,{Z:function(){return r}})},4076:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=n(8866);function i(t){return function e(n){return 0==arguments.length||(0,r.Z)(n)?e:t.apply(this,arguments)}}},5709:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var r=n(4076),i=n(8866);function s(t){return function e(n,s){switch(arguments.length){case 0:return e;case 1:return(0,i.Z)(n)?e:(0,r.Z)(function(e){return t(n,e)});default:return(0,i.Z)(n)&&(0,i.Z)(s)?e:(0,i.Z)(n)?(0,r.Z)(function(e){return t(e,s)}):(0,i.Z)(s)?(0,r.Z)(function(e){return t(n,e)}):t(n,s)}}}},6541:function(t,e,n){"use strict";n.d(e,{Z:function(){return function t(e,n,s){return function(){for(var o,u=[],a=0,c=e,l=0;l<n.length||a<arguments.length;)l<n.length&&(!(0,i.Z)(n[l])||a>=arguments.length)?o=n[l]:(o=arguments[a],a+=1),u[l]=o,(0,i.Z)(o)||(c-=1),l+=1;return c<=0?s.apply(this,u):(0,r.Z)(c,t(e,u,s))}}}});var r=n(2323),i=n(8866)},8866:function(t,e,n){"use strict";function r(t){return null!=t&&"object"==typeof t&&!0===t["@@functional/placeholder"]}n.d(e,{Z:function(){return r}})},6058:function(t,e,n){"use strict";var r=n(7045),i=(0,n(4076).Z)(function(t){return(0,r.Z)(t.length,function(){var e=arguments;return function(){return t.apply(this,e)}})});e.Z=i}},function(t){t.O(0,[5740,1293,286,1744],function(){return t(t.s=905)}),_N_E=t.O()}]);