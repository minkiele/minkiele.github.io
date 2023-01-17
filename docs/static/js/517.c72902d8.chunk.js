"use strict";(self.webpackChunkminkiele_github_io=self.webpackChunkminkiele_github_io||[]).push([[517],{6517:function(e,t,i){i.r(t),i.d(t,{default:function(){return y}});var n=i(1413),s=i(4942),r=i(885),l=i(6123),u=i.n(l),a=i(2793),o=i(7363),c=i(1981),d=i(5671),h=i(3144),g=i(8041),p=i.n(g),m=i(7436),f=i.n(m),S=function(){function e(t){(0,d.Z)(this,e),this.options=(0,n.Z)({},e.DIFFICULTY[e.DEFAULT_DIFFICULTY]),this.tiles=[],this.status=e.STATUS.UNINITIALIZED,this.eventEmitter=new(p()),this.on=this.eventEmitter.on.bind(this.eventEmitter),this.off=this.eventEmitter.off.bind(this.eventEmitter),this.emit=this.eventEmitter.emit.bind(this.eventEmitter),this.reset(t)}return(0,h.Z)(e,[{key:"getStatus",value:function(){return this.status}},{key:"setStatus",value:function(t){this.status=t,this.emit(e.EVENT.STATUS,this.status)}},{key:"reset",value:function(t){null!=t&&(this.options=(0,n.Z)((0,n.Z)({},this.options),t)),this.initializeEmptyMinefield(),this.setStatus(e.STATUS.UNINITIALIZED)}},{key:"initializeEmptyMinefield",value:function(){var e=this;this.tiles=f()(this.options.height,(function(t){return f()(e.options.width,(function(e){return{isFlag:!1,isMine:!1,isSteppedOn:!1,surroundingMines:0,x:e,y:t}}))}))}},{key:"stepOn",value:function(t,i){var n=this.tiles[i][t],s=n.isFlag,r=n.isSteppedOn,l=n.isMine;s||(r?this.isTileSurroundingFlaggedMines(t,i)&&(this.setStatus(e.STATUS.IN_GAME),this.stepOnSurroundingTiles(t,i)):(this.status===e.STATUS.UNINITIALIZED&&(this.initializeMinefield(t,i),this.setStatus(e.STATUS.IN_GAME)),this.tiles[i][t].isSteppedOn=!0,l?this.setStatus(e.STATUS.GAME_OVER):this.isTileEmpty(t,i)&&(this.startChainReaction(t,i),this.setStatus(e.STATUS.IN_GAME)))),this.emit(e.EVENT.STEP),this.isMinefieldComplete()&&this.setStatus(e.STATUS.COMPLETE)}},{key:"stepOnSurroundingTiles",value:function(t,i){var n=this;this.callSurroundingTiles(t,i,(function(t,i){var s=n.tiles[i][t],r=s.isMine,l=s.isFlag;n.tiles[i][t].isSteppedOn||(n.isTileEmpty(t,i)?(n.tiles[i][t].isSteppedOn=!0,n.startChainReaction(t,i)):e.xor(r,l)?n.setStatus(e.STATUS.GAME_OVER):l||(n.tiles[i][t].isSteppedOn=!0))}))}},{key:"isTileSurroundingFlaggedMines",value:function(e,t){var i=this,n=this.tiles[t][e],s=n.isFlag,r=n.isMine,l=n.isSteppedOn,u=n.surroundingMines;if(!s&&!r&&l&&u>0){var a=0;if(this.callSurroundingTiles(e,t,(function(e,t){i.tiles[t][e].isFlag&&(a+=1)})),a===u)return!0}return!1}},{key:"isTileEmpty",value:function(e,t){var i=this.tiles[t][e],n=i.isFlag,s=i.isMine,r=i.surroundingMines;return!(n||s||r>0)}},{key:"startChainReaction",value:function(e,t){var i=this;this.callSurroundingTiles(e,t,(function(e,t){i.tiles[t][e].isSteppedOn||i.tiles[t][e].isFlag||(i.isTileEmpty(e,t)?(i.tiles[t][e].isSteppedOn=!0,i.startChainReaction(e,t)):i.tiles[t][e].surroundingMines>0&&(i.tiles[t][e].isSteppedOn=!0))}))}},{key:"initializeMinefield",value:function(e,t){for(var i=this,n=this.options.mines>this.options.width*this.options.height-this.getSurroundingTileArea(e,t),s=0;s<this.options.mines;){var r=Math.floor(Math.random()*this.options.width),l=Math.floor(Math.random()*this.options.height);n&&(r===e||l===t)||!n&&this.isTileInArea(e,t,r,l)||this.tiles[l][r].isMine||(this.tiles[l][r].isMine=!0,s+=1)}for(var u=function(e){for(var t=function(t){i.tiles[e][t].isMine||i.callSurroundingTiles(t,e,(function(n,s){i.tiles[s][n].isMine&&(i.tiles[e][t].surroundingMines+=1)}))},n=0;n<i.options.width;n+=1)t(n)},a=0;a<this.options.height;a+=1)u(a)}},{key:"getSurroundingTileArea",value:function(e,t){var i=this.getSurroundingTileLimits(e,t),n=i.minX,s=i.maxX,r=i.minY;return(s+1-n)*(i.maxY+1-r)}},{key:"isTileInArea",value:function(e,t,i,n){var s=this.getSurroundingTileLimits(e,t),r=s.minX,l=s.maxX,u=s.minY,a=s.maxY;return i>=r&&i<=l&&n>=u&&n<=a}},{key:"getSurroundingTileLimits",value:function(e,t){var i=Math.max(0,t-1),n=Math.min(this.options.height-1,t+1);return{minX:Math.max(0,e-1),maxX:Math.min(this.options.width-1,e+1),minY:i,maxY:n}}},{key:"callSurroundingTiles",value:function(e,t,i){for(var n=this.getSurroundingTileLimits(e,t),s=n.minX,r=n.maxX,l=n.minY,u=n.maxY,a=l;a<=u;a+=1)for(var o=s;o<=r;o+=1)o===e&&a===t||i(o,a)}},{key:"toggleFlag",value:function(t,i){this.tiles[i][t].isSteppedOn||(this.tiles[i][t].isFlag=!this.tiles[i][t].isFlag,this.emit(e.EVENT.STEP))}},{key:"isMinefieldComplete",value:function(){return this.tiles.reduce((function(t,i){return t&&i.reduce((function(t,i){var n=i.isSteppedOn,s=i.isMine;return t&&e.xor(n,s)}),!0)}),!0)}},{key:"getMinefield",value:function(){return this.tiles.map((function(e){return(0,n.Z)({},e)}))}},{key:"getFlaggedMines",value:function(){return this.tiles.reduce((function(e,t){return e+t.reduce((function(e,t){return e+(t.isFlag?1:0)}),0)}),0)}}],[{key:"getMinesweeperEnum",value:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return t.reduce((function(e,t){return(0,n.Z)((0,n.Z)({},e),{},(0,s.Z)({},t,Symbol(t)))}),{})}},{key:"xor",value:function(e,t){return e&&!t||!e&&t}}]),e}();S.DIFFICULTY={EASY:{width:9,height:9,mines:10},MEDIUM:{width:16,height:16,mines:40},HARD:{width:30,height:16,mines:99}},S.DEFAULT_DIFFICULTY="EASY",S.STATUS=S.getMinesweeperEnum("UNINITIALIZED","IN_GAME","GAME_OVER","COMPLETE"),S.EVENT=S.getMinesweeperEnum("START","STEP","STATUS");var T={scrollable:"wVfPL",table:"_5qNUG",tile:"B5Dcs",tile__steppedOnMine:"S5Ktl",tile__flag:"j7E+k",tile__falseFlag:"uQKLj",tile__flagMode:"zAl+s",tile__mine:"ER+67",tile__stepped:"_7pOHx",tile__number1:"XufkA",tile__number2:"DY0+q",tile__number3:"vQE4q",tile__number4:"UWYqv",tile__number5:"v2Qcf",tile__number6:"UlC5-",tile__number7:"Th9Ky",tile__number8:"qsIjN"},v=function(e,t){return{width:"calc(var(--minesweeper-tile-width) * ".concat(e,")"),height:"calc(var(--minesweeper-tile-height) * ".concat(t,")")}},M=i(6417);function E(e){const t=Object.assign({p:"p",h2:"h2",h3:"h3",em:"em"},e.components);return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(t.p,{children:"That's it. I don't have anything else to do. Well, I know there's a lot to\nfix and optimize but now I'm too tired."}),"\n",(0,M.jsx)(t.h2,{children:"How it works"}),"\n",(0,M.jsx)(t.p,{children:"I tried to replicate the original game but there are some things I had to change\nto make it work in mobile and with dark theme. There are two modes, Click mode and Flag mode."}),"\n",(0,M.jsx)(t.h3,{children:"Click mode"}),"\n",(0,M.jsxs)(t.p,{children:["When in click mode you can click on every tile. By clicking an empty uncoverd tile you will go to\n",(0,M.jsx)(t.em,{children:"Flag mode"}),". By clicking a number you will expose all the tiles around (only if there are the number's\namount of tiles flagged). By pressing ",(0,M.jsx)(t.em,{children:"command"})," on ",(0,M.jsx)(t.em,{children:"macOS"})," and ",(0,M.jsx)(t.em,{children:"alt"})," on other O.S. and clicking on an\nuncovered tile you will toggle the flag over the selected cell. By right-clicking a covered tile\nyou will toggle the flag over the selected cell."]}),"\n",(0,M.jsx)(t.h3,{children:"Flag mode"}),"\n",(0,M.jsxs)(t.p,{children:["When in flag mode you can only flag uncovered tiles. No more, no less (well you can still click\nempty uncovered tiles and go back to ",(0,M.jsx)(t.em,{children:"Click mode"}),")."]})]})}var x=function(e={}){const{wrapper:t}=e.components||{};return t?(0,M.jsx)(t,Object.assign({},e,{children:(0,M.jsx)(E,e)})):E(e)},y=function(){var e=(0,o.useState)(S.DIFFICULTY[S.DEFAULT_DIFFICULTY]),t=(0,r.Z)(e,2),i=t[0],l=t[1],d=(0,o.useRef)(new S(i)),h=(0,o.useState)(d.current.getMinefield()),g=(0,r.Z)(h,2),p=g[0],m=g[1],f=(0,o.useState)(d.current.getStatus()),E=(0,r.Z)(f,2),y=E[0],F=E[1],I=(0,o.useState)(i.mines-d.current.getFlaggedMines()),_=(0,r.Z)(I,2),A=_[0],b=_[1],j=(0,o.useState)(!0),U=(0,r.Z)(j,2),k=U[0],O=U[1],w=(0,c.Z)(),Z=w.reset,N=w.start,C=w.stop,L=w.elapsed;(0,o.useEffect)((function(){d.current.reset(i),m(d.current.getMinefield()),b(i.mines-d.current.getFlaggedMines()),F(d.current.getStatus()),O(!0),Z()}),[i,Z]),(0,o.useEffect)((function(){var e=function(){m(d.current.getMinefield()),b(i.mines-d.current.getFlaggedMines())};d.current.on(S.EVENT.STEP,e);var t=function(t){switch(F(t),t){case S.STATUS.UNINITIALIZED:e(),Z();break;case S.STATUS.IN_GAME:N();break;case S.STATUS.COMPLETE:case S.STATUS.GAME_OVER:C()}};return d.current.on(S.EVENT.STATUS,t),function(){d.current.off(S.EVENT.STEP,e),d.current.off(S.EVENT.STATUS,t)}}),[i,Z,N,C]);var D=function(e,t,i){return function(n){n.preventDefault();var s=function(e){return!0===e.isSteppedOn&&!1===e.isMine&&!1===e.isFlag&&0===e.surroundingMines}(i);s?O((function(e){return!e})):!k&&!function(e){return!0===e.isSteppedOn&&!1===e.isMine&&!1===e.isFlag&&e.surroundingMines>0}(i)||n.metaKey||2===n.button?d.current.toggleFlag(e,t):d.current.stepOn(e,t)}},Y=(0,o.useCallback)((function(e,t){if(null!=t){var i,r=(i={},(0,s.Z)(i,T.tile,!0),(0,s.Z)(i,T.tile__stepped,t.isSteppedOn),(0,s.Z)(i,T.tile__flag,t.isFlag),(0,s.Z)(i,T["tile__number".concat(t.surroundingMines)],!t.isFlag&&t.isSteppedOn&&t.surroundingMines>0),i),l=(0,M.jsx)(M.Fragment,{children:"\xa0"});switch(t.isFlag||!k&&!t.isSteppedOn&&y!==S.STATUS.COMPLETE&&y!==S.STATUS.GAME_OVER?l="\ud83c\udff4":t.isSteppedOn&&t.surroundingMines>0&&(l="".concat(t.surroundingMines)),y){case S.STATUS.UNINITIALIZED:case S.STATUS.IN_GAME:return(0,o.cloneElement)(e,{className:u()((0,n.Z)((0,n.Z)({},r),{},(0,s.Z)({},T.tile__flagMode,!k&&!t.isSteppedOn&&!t.isFlag)))},l);case S.STATUS.COMPLETE:return(0,o.cloneElement)(e,{className:u()(r),onMouseUp:void 0},l);case S.STATUS.GAME_OVER:var a;return!t.isFlag&&t.isMine?l="\ud83d\udca3":!t.isSteppedOn&&t.isFlag&&t.isMine?l="\ud83c\udff4":t.isFlag&&!t.isMine&&(l="\u274c"),(0,o.cloneElement)(e,{className:u()((0,n.Z)((0,n.Z)({},r),{},(a={},(0,s.Z)(a,T.tile__mine,!t.isSteppedOn&&!t.isFlag&&t.isMine),(0,s.Z)(a,T.tile__steppedOnMine,t.isSteppedOn&&!t.isFlag&&t.isMine),(0,s.Z)(a,T.tile__flag,!t.isSteppedOn&&t.isFlag&&t.isMine),(0,s.Z)(a,T.tile__falseFlag,t.isFlag&&!t.isMine),a))),onMouseUp:void 0},l)}}return e}),[k,y]),V=(0,a.bBJ)((function(e){l((0,n.Z)({},e))})),R=(0,a.bBJ)(O),G=i.width,P=i.height;return(0,M.jsxs)("div",{children:[(0,M.jsx)(x,{}),(0,M.jsx)("div",{className:T.scrollable,children:(0,M.jsx)("table",{className:T.table,style:v(G,P),onContextMenu:function(e){return e.preventDefault()},children:(0,M.jsx)("tbody",{children:(0,a.DZ1)((function(e){return(0,M.jsx)("tr",{children:(0,a.DZ1)((function(t){var i;return null!=(null===p||void 0===p||null===(i=p[e])||void 0===i?void 0:i[t])&&Y((0,M.jsx)("td",{className:u()((0,s.Z)({},T.tile,!0)),onMouseUp:D(t,e,p[e][t]),children:"\xa0"},"tile-x-".concat(t,"-y-").concat(e)),p[e][t])}),G)},"row-".concat(e))}),P)})})}),(0,M.jsxs)("div",{children:[y===S.STATUS.UNINITIALIZED&&(0,M.jsx)("p",{children:"Ready..."}),y===S.STATUS.IN_GAME&&(0,M.jsxs)("p",{children:["After ",L,"s you still have to flag ",A," mines to finish.",A<0&&(0,M.jsx)(M.Fragment,{children:" Wait, what!?"})]}),y===S.STATUS.GAME_OVER&&(0,M.jsx)("p",{children:"Oops!"}),y===S.STATUS.COMPLETE&&(0,M.jsxs)("p",{children:["Bravo! Hooray! You sweeped all mines in ",L,"s!"]})]}),(0,M.jsx)("div",{children:(0,M.jsxs)("fieldset",{children:[(0,M.jsx)("legend",{children:"Mode"}),(0,M.jsx)("input",{type:"radio",name:"stepMode",id:"setStepModeStep",value:"step",onChange:R(!0),checked:k}),(0,M.jsx)("label",{htmlFor:"setStepModeStep",children:"Click"})," ",(0,M.jsx)("input",{type:"radio",name:"stepMode",id:"setStepModeFlag",value:"flag",onChange:R(!1),checked:!k}),(0,M.jsx)("label",{htmlFor:"setStepModeFlag",children:"Flag"})]})}),(0,M.jsx)("div",{children:(0,M.jsxs)("fieldset",{children:[(0,M.jsx)("legend",{children:"Choose your density (ehm... destiny)"}),(0,M.jsx)("button",{type:"button",onClick:function(){d.current.reset(),O(!0),Z()},children:"New game"})," ",(0,M.jsx)("button",{type:"button",onClick:V(S.DIFFICULTY.EASY),children:"Easy"})," ",(0,M.jsx)("button",{type:"button",onClick:V(S.DIFFICULTY.MEDIUM),children:"Medium"})," ",(0,M.jsx)("button",{type:"button",onClick:V(S.DIFFICULTY.HARD),children:"Hard"}),(0,M.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target.width.value,i=e.target.height.value,n=e.target.mines.value,s=parseInt(t),r=parseInt(i),u=parseInt(n);(isNaN(s)||s<3)&&(s=3),(isNaN(r)||r<3)&&(r=3),isNaN(u)?u=Math.floor(.15*s*r):u<1?u=1:u>=s*r&&(u=s*r-1),l({width:s,height:r,mines:u})},children:[(0,M.jsx)("label",{htmlFor:"width",children:"Width"})," ",(0,M.jsx)("input",{id:"width",name:"width",type:"number",defaultValue:G,min:3})," ",(0,M.jsx)("label",{htmlFor:"height",children:"Height"})," ",(0,M.jsx)("input",{id:"height",name:"height",type:"number",defaultValue:P,min:3})," ",(0,M.jsx)("label",{htmlFor:"mines",children:"Mines"})," ",(0,M.jsx)("input",{id:"mines",name:"mines",type:"number",defaultValue:A,min:1})," ",(0,M.jsx)("button",{type:"submit",children:"Custom"})]})]})})]})}},1981:function(e,t,i){var n=i(1413),s=i(885),r=i(658),l=i.n(r),u=i(7363);t.Z=function(){var e=(0,u.useReducer)((function(e,t){var i,s;switch(t){case"start":if(null==e.started){var r=l()();return{started:r,current:r,elapsed:0}}return e;case"stop":return(0,n.Z)((0,n.Z)({},e),{},{started:null,current:null});case"reset":return{started:null,current:null,elapsed:0};default:var u=l()();return(0,n.Z)((0,n.Z)({},e),{},{current:u,elapsed:null!==(i=null===(s=e.current)||void 0===s?void 0:s.diff(e.started,"s"))&&void 0!==i?i:0})}}),{started:null,current:null,elapsed:0}),t=(0,s.Z)(e,2),i=t[0],r=t[1],a=(0,u.useMemo)((function(){return{start:function(){return r("start")},stop:function(){return r("stop")},reset:function(){return r("reset")}}}),[]);return(0,u.useEffect)((function(){if(null!=i.started){var e=setInterval((function(){r("update")}),1e3);return function(){clearTimeout(e)}}}),[i.started]),(0,u.useMemo)((function(){return(0,n.Z)((0,n.Z)({},i),a)}),[a,i])}}}]);