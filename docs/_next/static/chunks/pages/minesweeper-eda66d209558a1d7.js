(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[720],{7484:function(e){var t,i,n,s,r,l,a,u,o,h,d,c,f,p,g,m,_,S,M,T,E;e.exports=(t="millisecond",i="second",n="minute",s="hour",r="week",l="month",a="quarter",u="year",o="date",h="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,c=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(e,t,i){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(i)+e},(g={})[p="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],i=e%100;return"["+e+(t[(i-20)%10]||t[i]||"th")+"]"}},m=function(e){return e instanceof T},_=function e(t,i,n){var s;if(!t)return p;if("string"==typeof t){var r=t.toLowerCase();g[r]&&(s=r),i&&(g[r]=i,s=r);var l=t.split("-");if(!s&&l.length>1)return e(l[0])}else{var a=t.name;g[a]=t,s=a}return!n&&s&&(p=s),s||!n&&p},S=function(e,t){if(m(e))return e.clone();var i="object"==typeof t?t:{};return i.date=e,i.args=arguments,new T(i)},(M={s:f,z:function(e){var t=-e.utcOffset(),i=Math.abs(t);return(t<=0?"+":"-")+f(Math.floor(i/60),2,"0")+":"+f(i%60,2,"0")},m:function e(t,i){if(t.date()<i.date())return-e(i,t);var n=12*(i.year()-t.year())+(i.month()-t.month()),s=t.clone().add(n,l),r=i-s<0,a=t.clone().add(n+(r?-1:1),l);return+(-(n+(i-s)/(r?s-a:a-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return({M:l,y:u,w:r,d:"day",D:o,h:s,m:n,s:i,ms:t,Q:a})[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}}).l=_,M.i=m,M.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})},E=(T=function(){function e(e){this.$L=_(e.locale,null,!0),this.parse(e)}var f=e.prototype;return f.parse=function(e){this.$d=function(e){var t=e.date,i=e.utc;if(null===t)return new Date(NaN);if(M.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(d);if(n){var s=n[2]-1||0,r=(n[7]||"0").substring(0,3);return i?new Date(Date.UTC(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,r)):new Date(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,r)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return M},f.isValid=function(){return this.$d.toString()!==h},f.isSame=function(e,t){var i=S(e);return this.startOf(t)<=i&&i<=this.endOf(t)},f.isAfter=function(e,t){return S(e)<this.startOf(t)},f.isBefore=function(e,t){return this.endOf(t)<S(e)},f.$g=function(e,t,i){return M.u(e)?this[t]:this.set(i,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,t){var a=this,h=!!M.u(t)||t,d=M.p(e),c=function(e,t){var i=M.w(a.$u?Date.UTC(a.$y,t,e):new Date(a.$y,t,e),a);return h?i:i.endOf("day")},f=function(e,t){return M.w(a.toDate()[e].apply(a.toDate("s"),(h?[0,0,0,0]:[23,59,59,999]).slice(t)),a)},p=this.$W,g=this.$M,m=this.$D,_="set"+(this.$u?"UTC":"");switch(d){case u:return h?c(1,0):c(31,11);case l:return h?c(1,g):c(0,g+1);case r:var S=this.$locale().weekStart||0,T=(p<S?p+7:p)-S;return c(h?m-T:m+(6-T),g);case"day":case o:return f(_+"Hours",0);case s:return f(_+"Minutes",1);case n:return f(_+"Seconds",2);case i:return f(_+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(e,r){var a,h=M.p(e),d="set"+(this.$u?"UTC":""),c=((a={}).day=d+"Date",a[o]=d+"Date",a[l]=d+"Month",a[u]=d+"FullYear",a[s]=d+"Hours",a[n]=d+"Minutes",a[i]=d+"Seconds",a[t]=d+"Milliseconds",a)[h],f="day"===h?this.$D+(r-this.$W):r;if(h===l||h===u){var p=this.clone().set(o,1);p.$d[c](f),p.init(),this.$d=p.set(o,Math.min(this.$D,p.daysInMonth())).$d}else c&&this.$d[c](f);return this.init(),this},f.set=function(e,t){return this.clone().$set(e,t)},f.get=function(e){return this[M.p(e)]()},f.add=function(e,t){var a,o=this;e=Number(e);var h=M.p(t),d=function(t){var i=S(o);return M.w(i.date(i.date()+Math.round(t*e)),o)};if(h===l)return this.set(l,this.$M+e);if(h===u)return this.set(u,this.$y+e);if("day"===h)return d(1);if(h===r)return d(7);var c=((a={})[n]=6e4,a[s]=36e5,a[i]=1e3,a)[h]||1,f=this.$d.getTime()+e*c;return M.w(f,this)},f.subtract=function(e,t){return this.add(-1*e,t)},f.format=function(e){var t=this,i=this.$locale();if(!this.isValid())return i.invalidDate||h;var n=e||"YYYY-MM-DDTHH:mm:ssZ",s=M.z(this),r=this.$H,l=this.$m,a=this.$M,u=i.weekdays,o=i.months,d=function(e,i,s,r){return e&&(e[i]||e(t,n))||s[i].slice(0,r)},f=function(e){return M.s(r%12||12,e,"0")},p=i.meridiem||function(e,t,i){var n=e<12?"AM":"PM";return i?n.toLowerCase():n},g={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:M.s(a+1,2,"0"),MMM:d(i.monthsShort,a,o,3),MMMM:d(o,a),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:d(i.weekdaysMin,this.$W,u,2),ddd:d(i.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(r),HH:M.s(r,2,"0"),h:f(1),hh:f(2),a:p(r,l,!0),A:p(r,l,!1),m:String(l),mm:M.s(l,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:s};return n.replace(c,function(e,t){return t||g[e]||s.replace(":","")})},f.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},f.diff=function(e,t,o){var h,d=M.p(t),c=S(e),f=(c.utcOffset()-this.utcOffset())*6e4,p=this-c,g=M.m(this,c);return g=((h={})[u]=g/12,h[l]=g,h[a]=g/3,h[r]=(p-f)/6048e5,h.day=(p-f)/864e5,h[s]=p/36e5,h[n]=p/6e4,h[i]=p/1e3,h)[d]||p,o?g:M.a(g)},f.daysInMonth=function(){return this.endOf(l).$D},f.$locale=function(){return g[this.$L]},f.locale=function(e,t){if(!e)return this.$L;var i=this.clone(),n=_(e,t,!0);return n&&(i.$L=n),i},f.clone=function(){return M.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},e}()).prototype,S.prototype=E,[["$ms",t],["$s",i],["$m",n],["$H",s],["$W","day"],["$M",l],["$y",u],["$D",o]].forEach(function(e){E[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),S.extend=function(e,t){return e.$i||(e(t,T,S),e.$i=!0),S},S.locale=_,S.isDayjs=m,S.unix=function(e){return S(1e3*e)},S.en=g[p],S.Ls=g,S.p={},S)},9510:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/minesweeper",function(){return i(7277)}])},5135:function(e,t,i){"use strict";var n=i(7484),s=i.n(n),r=i(7294);let l=()=>{let[e,t]=(0,r.useReducer)((e,t)=>{switch(t){case"start":if(null!=e.started)return e;{let i=s()();return{started:i,current:i,elapsed:0}}case"stop":return{...e,started:null,current:null};case"reset":return{started:null,current:null,elapsed:0};default:var n,r;let l=s()();return{...e,current:l,elapsed:null!==(r=null===(n=e.current)||void 0===n?void 0:n.diff(e.started,"s"))&&void 0!==r?r:0}}},{started:null,current:null,elapsed:0}),i=(0,r.useMemo)(()=>({start:()=>t("start"),stop:()=>t("stop"),reset:()=>t("reset")}),[]);return(0,r.useEffect)(()=>{if(null!=e.started){let i=setInterval(()=>{t("update")},1e3);return()=>{clearTimeout(i)}}},[e.started]),(0,r.useMemo)(()=>({...e,...i}),[i,e])};t.Z=l},7277:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return y},default:function(){return $}});var n=i(5893),s=i(4184),r=i.n(s),l=i(4824),a=i(7294),u=i(5135),o=i(4930),h=i(7187),d=i.n(h),c=i(7943),f=i.n(c);class p{static getMinesweeperEnum(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return t.reduce((e,t)=>({...e,[t]:Symbol(t)}),{})}getStatus(){return this.status}setStatus(e){this.status=e,this.emit(p.EVENT.STATUS,this.status)}reset(e){null!=e&&(this.options={...this.options,...e}),this.initializeEmptyMinefield(),this.setStatus(p.STATUS.UNINITIALIZED)}initializeEmptyMinefield(){this.tiles=f()(this.options.height,e=>f()(this.options.width,t=>({isFlag:!1,isMine:!1,isSteppedOn:!1,surroundingMines:0,x:t,y:e})))}stepOn(e,t){let{isFlag:i,isSteppedOn:n,isMine:s}=this.tiles[t][e];!i&&(n?this.isTileSurroundingFlaggedMines(e,t)&&(this.setStatus(p.STATUS.IN_GAME),this.stepOnSurroundingTiles(e,t)):(this.status===p.STATUS.UNINITIALIZED&&(this.initializeMinefield(e,t),this.setStatus(p.STATUS.IN_GAME)),this.tiles[t][e].isSteppedOn=!0,s?this.setStatus(p.STATUS.GAME_OVER):this.isTileEmpty(e,t)&&(this.startChainReaction(e,t),this.setStatus(p.STATUS.IN_GAME)))),this.emit(p.EVENT.STEP),this.isMinefieldComplete()&&this.setStatus(p.STATUS.COMPLETE)}stepOnSurroundingTiles(e,t){this.callSurroundingTiles(e,t,(e,t)=>{let{isMine:i,isFlag:n}=this.tiles[t][e];this.tiles[t][e].isSteppedOn||(this.isTileEmpty(e,t)?(this.tiles[t][e].isSteppedOn=!0,this.startChainReaction(e,t)):p.xor(i,n)?this.setStatus(p.STATUS.GAME_OVER):n||(this.tiles[t][e].isSteppedOn=!0))})}isTileSurroundingFlaggedMines(e,t){let{isFlag:i,isMine:n,isSteppedOn:s,surroundingMines:r}=this.tiles[t][e];if(!i&&!n&&s&&r>0){let l=0;if(this.callSurroundingTiles(e,t,(e,t)=>{this.tiles[t][e].isFlag&&(l+=1)}),l===r)return!0}return!1}isTileEmpty(e,t){let{isFlag:i,isMine:n,surroundingMines:s}=this.tiles[t][e];return!(i||n||s>0)}startChainReaction(e,t){this.callSurroundingTiles(e,t,(e,t)=>{this.tiles[t][e].isSteppedOn||this.tiles[t][e].isFlag||(this.isTileEmpty(e,t)?(this.tiles[t][e].isSteppedOn=!0,this.startChainReaction(e,t)):this.tiles[t][e].surroundingMines>0&&(this.tiles[t][e].isSteppedOn=!0))})}initializeMinefield(e,t){let i=this.options.mines>this.options.width*this.options.height-this.getSurroundingTileArea(e,t),n=0;for(;n<this.options.mines;){let s=Math.floor(Math.random()*this.options.width),r=Math.floor(Math.random()*this.options.height),l=i&&(s===e||r===t)||!i&&this.isTileInArea(e,t,s,r);l||this.tiles[r][s].isMine||(this.tiles[r][s].isMine=!0,n+=1)}for(let a=0;a<this.options.height;a+=1)for(let u=0;u<this.options.width;u+=1)this.tiles[a][u].isMine||this.callSurroundingTiles(u,a,(e,t)=>{this.tiles[t][e].isMine&&(this.tiles[a][u].surroundingMines+=1)})}getSurroundingTileArea(e,t){let{minX:i,maxX:n,minY:s,maxY:r}=this.getSurroundingTileLimits(e,t);return(n+1-i)*(r+1-s)}isTileInArea(e,t,i,n){let{minX:s,maxX:r,minY:l,maxY:a}=this.getSurroundingTileLimits(e,t);return i>=s&&i<=r&&n>=l&&n<=a}getSurroundingTileLimits(e,t){let i=Math.min(this.options.height-1,t+1),n=Math.min(this.options.width-1,e+1);return{minX:Math.max(0,e-1),maxX:n,minY:Math.max(0,t-1),maxY:i}}callSurroundingTiles(e,t,i){let{minX:n,maxX:s,minY:r,maxY:l}=this.getSurroundingTileLimits(e,t);for(let a=r;a<=l;a+=1)for(let u=n;u<=s;u+=1)(u!==e||a!==t)&&i(u,a)}toggleFlag(e,t){this.tiles[t][e].isSteppedOn||(this.tiles[t][e].isFlag=!this.tiles[t][e].isFlag,this.emit(p.EVENT.STEP))}isMinefieldComplete(){return this.tiles.reduce((e,t)=>e&&t.reduce((e,t)=>{let{isSteppedOn:i,isMine:n}=t;return e&&p.xor(i,n)},!0),!0)}static xor(e,t){return e&&!t||!e&&t}getMinefield(){return this.tiles.map(e=>({...e}))}getFlaggedMines(){return this.tiles.reduce((e,t)=>e+t.reduce((e,t)=>e+(t.isFlag?1:0),0),0)}constructor(e){this.options={...p.DIFFICULTY[p.DEFAULT_DIFFICULTY]},this.tiles=[],this.status=p.STATUS.UNINITIALIZED,this.eventEmitter=new(d()),this.on=this.eventEmitter.on.bind(this.eventEmitter),this.off=this.eventEmitter.off.bind(this.eventEmitter),this.emit=this.eventEmitter.emit.bind(this.eventEmitter),this.reset(e)}}p.DIFFICULTY={EASY:{width:9,height:9,mines:10},MEDIUM:{width:16,height:16,mines:40},HARD:{width:30,height:16,mines:99}},p.DEFAULT_DIFFICULTY="EASY",p.STATUS=p.getMinesweeperEnum("UNINITIALIZED","IN_GAME","GAME_OVER","COMPLETE"),p.EVENT=p.getMinesweeperEnum("START","STEP","STATUS");var g=i(5454),m=i.n(g);let _=(e,t)=>({width:"calc(var(--minesweeper-tile-width) * ".concat(e,")"),height:"calc(var(--minesweeper-tile-height) * ".concat(t,")")}),S=e=>!0===e.isSteppedOn&&!1===e.isMine&&!1===e.isFlag&&e.surroundingMines>0,M=e=>!0===e.isSteppedOn&&!1===e.isMine&&!1===e.isFlag&&0===e.surroundingMines;var T=i(1151);function E(e){let t=Object.assign({p:"p",h2:"h2",h3:"h3",em:"em"},(0,T.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"That's it. I don't have anything else to do. Well, I know there's a lot to\nfix and optimize but now I'm too tired."}),"\n",(0,n.jsx)(t.h2,{children:"How it works"}),"\n",(0,n.jsx)(t.p,{children:"I tried to replicate the original game but there are some things I had to change\nto make it work in mobile and with dark theme. There are two modes, Click mode and Flag mode."}),"\n",(0,n.jsx)(t.h3,{children:"Click mode"}),"\n",(0,n.jsxs)(t.p,{children:["When in click mode you can click on every tile. By clicking an empty uncoverd tile you will go to\n",(0,n.jsx)(t.em,{children:"Flag mode"}),". By clicking a number you will expose all the tiles around (only if there are the number's\namount of tiles flagged). By pressing ",(0,n.jsx)(t.em,{children:"command"})," on ",(0,n.jsx)(t.em,{children:"macOS"})," and ",(0,n.jsx)(t.em,{children:"alt"})," on other O.S. and clicking on an\nuncovered tile you will toggle the flag over the selected cell. By right-clicking a covered tile\nyou will toggle the flag over the selected cell."]}),"\n",(0,n.jsx)(t.h3,{children:"Flag mode"}),"\n",(0,n.jsxs)(t.p,{children:["When in flag mode you can only flag uncovered tiles. No more, no less (well you can still click\nempty uncovered tiles and go back to ",(0,n.jsx)(t.em,{children:"Click mode"}),")."]})]})}var v=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,T.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(E,e)})):E(e)};let w=()=>{let[e,t]=(0,a.useState)(p.DIFFICULTY[p.DEFAULT_DIFFICULTY]),i=(0,a.useRef)(new p(e)),[s,h]=(0,a.useState)(i.current.getMinefield()),[d,c]=(0,a.useState)(i.current.getStatus()),[f,g]=(0,a.useState)(e.mines-i.current.getFlaggedMines()),[T,E]=(0,a.useState)(!0),{reset:w,start:y,stop:$,elapsed:b}=(0,u.Z)();(0,a.useEffect)(()=>{i.current.reset(e),h(i.current.getMinefield()),g(e.mines-i.current.getFlaggedMines()),c(i.current.getStatus()),E(!0),w()},[e,w]),(0,a.useEffect)(()=>{let t=()=>{h(i.current.getMinefield()),g(e.mines-i.current.getFlaggedMines())};i.current.on(p.EVENT.STEP,t);let n=e=>{switch(c(e),e){case p.STATUS.UNINITIALIZED:t(),w();break;case p.STATUS.IN_GAME:y();break;case p.STATUS.COMPLETE:case p.STATUS.GAME_OVER:$()}};return i.current.on(p.EVENT.STATUS,n),()=>{i.current.off(p.EVENT.STEP,t),i.current.off(p.EVENT.STATUS,n)}},[e,w,y,$]),(0,a.useEffect)(()=>{let e=e=>{e===p.STATUS.COMPLETE&&(0,o.B)({action:"minesweeper"})};return i.current.on(p.EVENT.STATUS,e),()=>{i.current.off(p.EVENT.STATUS,e)}},[e,w,y,$]);let A=(e,t,n)=>s=>{s.preventDefault();let r=M(n);r?E(e=>!e):!(T||S(n))||s.metaKey||2===s.button?i.current.toggleFlag(e,t):i.current.stepOn(e,t)},I=(0,a.useCallback)((e,t)=>{if(null!=t){let i={[m().tile]:!0,[m().tile__stepped]:t.isSteppedOn,[m().tile__flag]:t.isFlag,[m()["tile__number".concat(t.surroundingMines)]]:!t.isFlag&&t.isSteppedOn&&t.surroundingMines>0},s=(0,n.jsx)(n.Fragment,{children:"\xa0"});switch(!t.isFlag&&(T||t.isSteppedOn||d===p.STATUS.COMPLETE||d===p.STATUS.GAME_OVER)?t.isSteppedOn&&t.surroundingMines>0&&(s="".concat(t.surroundingMines)):s="\uD83C\uDFF4",d){case p.STATUS.UNINITIALIZED:case p.STATUS.IN_GAME:return(0,a.cloneElement)(e,{className:r()({...i,[m().tile__flagMode]:!T&&!t.isSteppedOn&&!t.isFlag})},s);case p.STATUS.COMPLETE:return(0,a.cloneElement)(e,{className:r()(i),onMouseUp:void 0},s);case p.STATUS.GAME_OVER:return!t.isFlag&&t.isMine?s="\uD83D\uDCA3":!t.isSteppedOn&&t.isFlag&&t.isMine?s="\uD83C\uDFF4":t.isFlag&&!t.isMine&&(s="❌"),(0,a.cloneElement)(e,{className:r()({...i,[m().tile__mine]:!t.isSteppedOn&&!t.isFlag&&t.isMine,[m().tile__steppedOnMine]:t.isSteppedOn&&!t.isFlag&&t.isMine,[m().tile__flag]:!t.isSteppedOn&&t.isFlag&&t.isMine,[m().tile__falseFlag]:t.isFlag&&!t.isMine}),onMouseUp:void 0},s)}}return e},[T,d]),D=(0,l.bBJ)(e=>{t({...e})}),x=()=>{i.current.reset(),E(!0),w()},F=(0,l.bBJ)(E),{width:O,height:U}=e,N=e=>{e.preventDefault();let i=e.target.width.value,n=e.target.height.value,s=e.target.mines.value,r=parseInt(i),l=parseInt(n),a=parseInt(s);(isNaN(r)||r<3)&&(r=3),(isNaN(l)||l<3)&&(l=3),isNaN(a)?a=Math.floor(.15*r*l):a<1?a=1:a>=r*l&&(a=r*l-1),t({width:r,height:l,mines:a})},j=e=>e.preventDefault();return(0,n.jsxs)("div",{children:[(0,n.jsx)(v,{}),(0,n.jsx)("div",{className:m().scrollable,children:(0,n.jsx)("table",{className:m().table,style:_(O,U),onContextMenu:j,children:(0,n.jsx)("tbody",{children:(0,l.DZ1)(e=>(0,n.jsx)("tr",{children:(0,l.DZ1)(t=>{var i;return(null==s?void 0:null===(i=s[e])||void 0===i?void 0:i[t])!=null&&I((0,n.jsx)("td",{className:r()({[m().tile]:!0}),onMouseUp:A(t,e,s[e][t]),children:"\xa0"},"tile-x-".concat(t,"-y-").concat(e)),s[e][t])},O)},"row-".concat(e)),U)})})}),(0,n.jsxs)("div",{children:[d===p.STATUS.UNINITIALIZED&&(0,n.jsx)("p",{children:"Ready..."}),d===p.STATUS.IN_GAME&&(0,n.jsxs)("p",{children:["After ",b,"s you still have to flag ",f," mines to finish.",f<0&&(0,n.jsx)(n.Fragment,{children:" Wait, what!?"})]}),d===p.STATUS.GAME_OVER&&(0,n.jsx)("p",{children:"Oops!"}),d===p.STATUS.COMPLETE&&(0,n.jsxs)("p",{children:["Bravo! Hooray! You sweeped all mines in ",b,"s!"]})]}),(0,n.jsx)("div",{children:(0,n.jsxs)("fieldset",{children:[(0,n.jsx)("legend",{children:"Mode"}),(0,n.jsx)("input",{type:"radio",name:"stepMode",id:"setStepModeStep",value:"step",onChange:F(!0),checked:T}),(0,n.jsx)("label",{htmlFor:"setStepModeStep",children:"Click"})," ",(0,n.jsx)("input",{type:"radio",name:"stepMode",id:"setStepModeFlag",value:"flag",onChange:F(!1),checked:!T}),(0,n.jsx)("label",{htmlFor:"setStepModeFlag",children:"Flag"})]})}),(0,n.jsx)("div",{children:(0,n.jsxs)("fieldset",{children:[(0,n.jsx)("legend",{children:"Choose your density (ehm... destiny)"}),(0,n.jsx)("button",{type:"button",onClick:x,children:"New game"})," ",(0,n.jsx)("button",{type:"button",onClick:D(p.DIFFICULTY.EASY),children:"Easy"})," ",(0,n.jsx)("button",{type:"button",onClick:D(p.DIFFICULTY.MEDIUM),children:"Medium"})," ",(0,n.jsx)("button",{type:"button",onClick:D(p.DIFFICULTY.HARD),children:"Hard"}),(0,n.jsxs)("form",{onSubmit:N,children:[(0,n.jsx)("label",{htmlFor:"width",children:"Width"})," ",(0,n.jsx)("input",{id:"width",name:"width",type:"number",defaultValue:O,min:3})," ",(0,n.jsx)("label",{htmlFor:"height",children:"Height"})," ",(0,n.jsx)("input",{id:"height",name:"height",type:"number",defaultValue:U,min:3})," ",(0,n.jsx)("label",{htmlFor:"mines",children:"Mines"})," ",(0,n.jsx)("input",{id:"mines",name:"mines",type:"number",defaultValue:f,min:1})," ",(0,n.jsx)("button",{type:"submit",children:"Custom"})]})]})})]})};var y=!0,$=w},5454:function(e){e.exports={scrollable:"Minesweeper_scrollable__8UBoh",table:"Minesweeper_table__RTOD0",tile:"Minesweeper_tile__M7sfh",tile__steppedOnMine:"Minesweeper_tile__steppedOnMine__D4s6W",tile__flag:"Minesweeper_tile__flag__dvKHe",tile__falseFlag:"Minesweeper_tile__falseFlag__uiPl9",tile__flagMode:"Minesweeper_tile__flagMode__60QBa",tile__mine:"Minesweeper_tile__mine__fxPNB",tile__stepped:"Minesweeper_tile__stepped__tvv7R",tile__number1:"Minesweeper_tile__number1__Zp_V2",tile__number2:"Minesweeper_tile__number2__Kbv28",tile__number3:"Minesweeper_tile__number3__v8EIN",tile__number4:"Minesweeper_tile__number4__t9TIE",tile__number5:"Minesweeper_tile__number5__I9Wb0",tile__number6:"Minesweeper_tile__number6__cNWcw",tile__number7:"Minesweeper_tile__number7__nZrZp",tile__number8:"Minesweeper_tile__number8__r2w5V"}}},function(e){e.O(0,[493,774,888,179],function(){return e(e.s=9510)}),_N_E=e.O()}]);