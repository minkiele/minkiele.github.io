(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[336],{4184:function(t,e){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var s=typeof n;if("string"===s||"number"===s)t.push(n);else if(Array.isArray(n)){if(n.length){var u=i.apply(null,n);u&&t.push(u)}}else if("object"===s){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){t.push(n.toString());continue}for(var o in n)r.call(n,o)&&n[o]&&t.push(o)}}}return t.join(" ")}t.exports?(i.default=i,t.exports=i):void 0!==(n=(function(){return i}).apply(e,[]))&&(t.exports=n)}()},7484:function(t){var e,n,r,i,s,u,o,a,l,c,h,d,f,p,m,v,y,g,$,w,S;t.exports=(e="millisecond",n="second",r="minute",i="hour",s="week",u="month",o="quarter",a="year",l="date",c="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},(m={})[p="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||"th")+"]"}},v=function(t){return t instanceof w},y=function t(e,n,r){var i;if(!e)return p;if("string"==typeof e){var s=e.toLowerCase();m[s]&&(i=s),n&&(m[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var o=e.name;m[o]=e,i=o}return!r&&i&&(p=i),i||!r&&p},g=function(t,e){if(v(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new w(n)},($={s:f,z:function(t){var e=-t.utcOffset(),n=Math.abs(e);return(e<=0?"+":"-")+f(Math.floor(n/60),2,"0")+":"+f(n%60,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,o=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return({M:u,y:a,w:s,d:"day",D:l,h:i,m:r,s:n,ms:e,Q:o})[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}}).l=y,$.i=v,$.w=function(t,e){return g(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})},S=(w=function(){function t(t){this.$L=y(t.locale,null,!0),this.parse(t)}var f=t.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if($.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return $},f.isValid=function(){return this.$d.toString()!==c},f.isSame=function(t,e){var n=g(t);return this.startOf(e)<=n&&n<=this.endOf(e)},f.isAfter=function(t,e){return g(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<g(t)},f.$g=function(t,e,n){return $.u(t)?this[e]:this.set(n,t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,e){var o=this,c=!!$.u(e)||e,h=$.p(t),d=function(t,e){var n=$.w(o.$u?Date.UTC(o.$y,e,t):new Date(o.$y,e,t),o);return c?n:n.endOf("day")},f=function(t,e){return $.w(o.toDate()[t].apply(o.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),o)},p=this.$W,m=this.$M,v=this.$D,y="set"+(this.$u?"UTC":"");switch(h){case a:return c?d(1,0):d(31,11);case u:return c?d(1,m):d(0,m+1);case s:var g=this.$locale().weekStart||0,w=(p<g?p+7:p)-g;return d(c?v-w:v+(6-w),m);case"day":case l:return f(y+"Hours",0);case i:return f(y+"Minutes",1);case r:return f(y+"Seconds",2);case n:return f(y+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(t,s){var o,c=$.p(t),h="set"+(this.$u?"UTC":""),d=((o={}).day=h+"Date",o[l]=h+"Date",o[u]=h+"Month",o[a]=h+"FullYear",o[i]=h+"Hours",o[r]=h+"Minutes",o[n]=h+"Seconds",o[e]=h+"Milliseconds",o)[c],f="day"===c?this.$D+(s-this.$W):s;if(c===u||c===a){var p=this.clone().set(l,1);p.$d[d](f),p.init(),this.$d=p.set(l,Math.min(this.$D,p.daysInMonth())).$d}else d&&this.$d[d](f);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[$.p(t)]()},f.add=function(t,e){var o,l=this;t=Number(t);var c=$.p(e),h=function(e){var n=g(l);return $.w(n.date(n.date()+Math.round(e*t)),l)};if(c===u)return this.set(u,this.$M+t);if(c===a)return this.set(a,this.$y+t);if("day"===c)return h(1);if(c===s)return h(7);var d=((o={})[r]=6e4,o[i]=36e5,o[n]=1e3,o)[c]||1,f=this.$d.getTime()+t*d;return $.w(f,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||c;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=$.z(this),s=this.$H,u=this.$m,o=this.$M,a=n.weekdays,l=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},f=function(t){return $.s(s%12||12,t,"0")},p=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:$.s(o+1,2,"0"),MMM:h(n.monthsShort,o,l,3),MMMM:h(l,o),D:this.$D,DD:$.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,a,2),ddd:h(n.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(s),HH:$.s(s,2,"0"),h:f(1),hh:f(2),a:p(s,u,!0),A:p(s,u,!1),m:String(u),mm:$.s(u,2,"0"),s:String(this.$s),ss:$.s(this.$s,2,"0"),SSS:$.s(this.$ms,3,"0"),Z:i};return r.replace(d,function(t,e){return e||m[t]||i.replace(":","")})},f.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},f.diff=function(t,e,l){var c,h=$.p(e),d=g(t),f=(d.utcOffset()-this.utcOffset())*6e4,p=this-d,m=$.m(this,d);return m=((c={})[a]=m/12,c[u]=m,c[o]=m/3,c[s]=(p-f)/6048e5,c.day=(p-f)/864e5,c[i]=p/36e5,c[r]=p/6e4,c[n]=p/1e3,c)[h]||p,l?m:$.a(m)},f.daysInMonth=function(){return this.endOf(u).$D},f.$locale=function(){return m[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=y(t,e,!0);return r&&(n.$L=r),n},f.clone=function(){return $.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},t}()).prototype,g.prototype=S,[["$ms",e],["$s",n],["$m",r],["$H",i],["$W","day"],["$M",u],["$y",a],["$D",l]].forEach(function(t){S[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),g.extend=function(t,e){return t.$i||(t(e,w,g),t.$i=!0),g},g.locale=y,g.isDayjs=v,g.unix=function(t){return g(1e3*t)},g.en=m[p],g.Ls=m,g.p={},g)},4780:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sudoku",function(){return n(9811)}])},5135:function(t,e,n){"use strict";var r=n(7484),i=n.n(r),s=n(7294);let u=()=>{let[t,e]=(0,s.useReducer)((t,e)=>{switch(e){case"start":if(null!=t.started)return t;{let n=i()();return{started:n,current:n,elapsed:0}}case"stop":return{...t,started:null,current:null};case"reset":return{started:null,current:null,elapsed:0};default:var r,s;let u=i()();return{...t,current:u,elapsed:null!==(s=null===(r=t.current)||void 0===r?void 0:r.diff(t.started,"s"))&&void 0!==s?s:0}}},{started:null,current:null,elapsed:0}),n=(0,s.useMemo)(()=>({start:()=>e("start"),stop:()=>e("stop"),reset:()=>e("reset")}),[]);return(0,s.useEffect)(()=>{if(null!=t.started){let n=setInterval(()=>{e("update")},1e3);return()=>{clearTimeout(n)}}},[t.started]),(0,s.useMemo)(()=>({...t,...n}),[n,t])};e.Z=u},9811:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return j},default:function(){return O}});var r=n(5893),i=n(3940),s=n(7294),u=n(4184),o=n.n(u)(),a=n(1798),l=n.n(a),c=n(1151);function h(t){let e=Object.assign({p:"p",em:"em"},(0,c.ah)(),t.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:["Simple Sudoku matrix. This whole application was born to actually\nintegrate yet another library I wrote to check the correctness of the\nsudoku, then I added a sudoku generator. First by generating the matrix\nwhere I found that with a high probability the 6th row would never complete,\nadding a reset switch that would completely restart the generation in that case,\nand second by adding some masks I copied from the ",(0,r.jsx)(e.em,{children:"Settimana Enigmistica"}),". With\na little bit of good will I'll add other masks as I have plenty of those.\n(It's kind of boring as you have to copy 81 values from a piece of paper)."]}),"\n",(0,r.jsx)(e.p,{children:"I really don't know if the masks are enough to provide solvability to the\nSudoku, I didn't do any research on the Sudoku theoretics, I just\npieced together things I already knew by completing dozens and dozens of them."})]})}var d=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,c.ah)(),t.components);return e?(0,r.jsx)(e,Object.assign({},t,{children:(0,r.jsx)(h,t)})):h(t)},f=n(5135);let p=(t,e)=>Array.from({length:e}).map((e,n)=>t(n)),m=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return p(t=>e+t*n,t)},v=()=>Math.random()-.5,y=(t,e,n)=>n[e].includes(t),g=(t,e,n)=>n.some(n=>n[e]===t),$=(t,e,n,r)=>r.slice(e-e%3,e-e%3+3).some(e=>e.slice(n-n%3,n-n%3+3).some(e=>e===t)),w=()=>m(9,1).sort(v),S=()=>p(t=>0===t?w():p(()=>void 0,9),9),b=()=>{let t=S();for(let e=1;e<9;e+=1)for(let n=0;n<9;n+=1){let r=m(9,1).sort(v);for(;r.length>0;){let i=r.shift();if(!y(i,e,t)&&!g(i,n,t)&&!$(i,e,n,t)){t[e][n]=i;break}}if(null==t[e][n]){if(5===e){t=S(),e=0;break}t[e]=p(()=>void 0,9),n=-1}}return t},M=[[[!0,!1,!1,!1,!1,!1,!0,!1,!1],[!1,!0,!1,!0,!1,!0,!1,!0,!1],[!1,!1,!0,!1,!1,!1,!0,!1,!0],[!1,!0,!1,!0,!1,!0,!1,!0,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!0,!1,!0,!1,!0,!1,!0,!1],[!0,!1,!0,!1,!1,!1,!0,!1,!1],[!1,!0,!1,!0,!1,!0,!1,!0,!1],[!1,!1,!0,!1,!1,!1,!1,!1,!0]],[[!1,!0,!1,!1,!1,!0,!1,!1,!1],[!0,!1,!0,!1,!0,!1,!0,!1,!1],[!1,!0,!1,!0,!1,!0,!1,!0,!1],[!0,!1,!1,!0,!1,!1,!1,!1,!1],[!1,!0,!1,!1,!0,!1,!1,!0,!1],[!1,!1,!1,!1,!1,!0,!1,!0,!1],[!1,!0,!1,!0,!1,!0,!1,!0,!1],[!1,!1,!0,!1,!0,!1,!0,!1,!0],[!1,!1,!1,!0,!1,!1,!1,!0,!1]],[[!0,!0,!0,!0,!1,!1,!1,!1,!1],[!0,!1,!1,!1,!1,!1,!1,!1,!1],[!0,!1,!1,!1,!1,!0,!0,!1,!1],[!0,!1,!1,!1,!1,!0,!0,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!0,!0,!1,!1,!1,!1,!0],[!1,!1,!0,!0,!1,!1,!1,!1,!0],[!1,!1,!1,!1,!1,!1,!1,!1,!0],[!1,!1,!1,!1,!1,!0,!0,!0,!0]]],D=()=>M[Math.floor(Math.random()*M.length)],_=()=>{let t=b(),e=D(),n=[];for(let r=0;r<9;r+=1){n[r]=[];for(let i=0;i<9;i+=1)n[r][i]=e[r][i]?"".concat(t[r][i]):""}return n},k="io.github.minkiele.SudokuUI.matrix",x=t=>t.map(t=>t.map(t=>{let e=parseInt(t);return isNaN(e)?null:e}));var j=!0,O=function(){let t=t=>{let e=Number(t);return isNaN(e)||e<1||e>9?"":"".concat(e)},[e,u]=(0,s.useState)(_()),a=e=>{let{row:n,col:r,value:s}=e;return u(e=>(0,i.uhR)([n,r],t(s),e))},[c,h]=(0,s.useState)(!1),p=(0,s.useRef)(n.e(567).then(n.t.bind(n,4567,23)).then(t=>{let{SudokuMatrix:e}=t;return e}));(0,s.useEffect)(()=>{p.current.then(t=>{let n=new t(x(e));h(n.isValid())})},[e]);let{start:m,stop:v,reset:y,elapsed:g}=(0,f.Z)();(0,s.useEffect)(()=>{c&&v()},[c,v]);let $=(0,s.useRef)((0,i.DZ1)(()=>(0,i.rx1)(null,9),9)),w=(t,e)=>n=>{a({row:t,col:e,value:n.target.value}),m()},S=(t,e)=>n=>{$.current[t][e]=n},b=(0,s.useRef)(),M=(t,e)=>()=>{var n;b.current=null===(n=$.current[t][e])||void 0===n?void 0:n.selectionStart},D=(t,e)=>n=>{var r,i,s,u;switch(n.key){case"ArrowUp":t>0&&(null===(r=$.current[t-1][e])||void 0===r||r.focus());break;case"ArrowDown":t<8&&(null===(i=$.current[t+1][e])||void 0===i||i.focus());break;case"ArrowLeft":e>0&&!b.current&&(null===(s=$.current[t][e-1])||void 0===s||s.focus());break;case"ArrowRight":e<8&&(b.current||!n.currentTarget.value.length)&&(null===(u=$.current[t][e+1])||void 0===u||u.focus())}},j=()=>{localStorage.setItem(k,JSON.stringify(e))},O=()=>{let t=localStorage.getItem(k);if(null!=t)try{let e=JSON.parse(t);u(e),y()}catch(n){}},I=()=>{u((0,i.DZ1)(()=>(0,i.rx1)("",9),9)),y()},N=()=>{u(_()),y()};return(0,r.jsxs)("div",{children:[(0,r.jsx)(d,{}),(0,r.jsxs)("table",{className:l().table,children:[(0,r.jsxs)("caption",{children:[g,"s ",c&&(0,r.jsx)("span",{children:"Bravo, the sudoku is valid!"})]}),(0,r.jsx)("tbody",{children:(0,i.DZ1)(t=>(0,r.jsx)("tr",{children:(0,i.DZ1)(n=>(0,r.jsx)("td",{className:o({[l().cell]:!0}),children:(0,r.jsx)("input",{type:"tel",id:"input-".concat(t,"-").concat(n),value:e[t][n],onChange:w(t,n),className:l().input,ref:S(t,n),onKeyDown:M(t,n),onKeyUp:D(t,n),autoComplete:"off"})},"col-".concat(t,"-").concat(n)),9)},"row-".concat(t)),9)})]}),(0,r.jsxs)("fieldset",{children:[(0,r.jsx)("legend",{children:"Controls"}),(0,r.jsx)("button",{type:"button",onClick:N,children:"New"})," ",(0,r.jsx)("button",{type:"button",onClick:j,children:"Store"})," ",(0,r.jsx)("button",{type:"button",onClick:O,children:"Restore"})," ",(0,r.jsx)("button",{type:"button",onClick:I,children:"Empty"})]})]})}},1798:function(t){t.exports={cell:"SudokuUI_cell__kqDLR",input:"SudokuUI_input__RguoQ",table:"SudokuUI_table__I1r8r"}}},function(t){t.O(0,[407,774,888,179],function(){return t(t.s=4780)}),_N_E=t.O()}]);