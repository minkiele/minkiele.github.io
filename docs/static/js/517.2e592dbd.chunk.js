"use strict";(self.webpackChunkminkiele_github_io=self.webpackChunkminkiele_github_io||[]).push([[517],{517:function(e,i,t){t.r(i),t.d(i,{default:function(){return y}});var n=t(413),s=t(942),l=t(885),r=t(123),u=t.n(r),a=t(575),o=t(363),c=t(671),h=t(144),d=t(41),g=t.n(d),p=t(436),m=t.n(p),f=function(){function e(i){(0,c.Z)(this,e),this.options=(0,n.Z)({},e.DIFFICULTY[e.DEFAULT_DIFFICULTY]),this.tiles=[],this.status=e.STATUS.UNINITIALIZED,this.eventEmitter=new(g()),this.reset(i)}return(0,h.Z)(e,[{key:"getStatus",value:function(){return this.status}},{key:"setStatus",value:function(i){this.status=i,this.emit(e.EVENT.STATUS,this.status)}},{key:"reset",value:function(i){null!=i&&(this.options=(0,n.Z)((0,n.Z)({},this.options),i)),this.initializeEmptyMinefield(),this.setStatus(e.STATUS.UNINITIALIZED)}},{key:"initializeEmptyMinefield",value:function(){var e=this;this.tiles=m()(this.options.height,(function(i){return m()(e.options.width,(function(e){return{isFlag:!1,isMine:!1,isSteppedOn:!1,surroundingMines:0,x:e,y:i}}))}))}},{key:"stepOn",value:function(i,t){var n=this.tiles[t][i],s=n.isFlag,l=n.isSteppedOn,r=n.isMine;s||(l?this.isTileSurroundingFlaggedMines(i,t)&&(this.setStatus(e.STATUS.IN_GAME),this.stepOnSurroundingTiles(i,t)):(this.status===e.STATUS.UNINITIALIZED&&(this.initializeMinefield(i,t),this.setStatus(e.STATUS.IN_GAME)),this.tiles[t][i].isSteppedOn=!0,r?this.setStatus(e.STATUS.GAME_OVER):this.isTileEmpty(i,t)&&(this.startChainReaction(i,t),this.setStatus(e.STATUS.IN_GAME)))),this.emit(e.EVENT.STEP),this.isMinefieldComplete()&&this.setStatus(e.STATUS.COMPLETE)}},{key:"stepOnSurroundingTiles",value:function(i,t){var n=this;this.callSurroundingTiles(i,t,(function(i,t){var s=n.tiles[t][i],l=s.isMine,r=s.isFlag;n.tiles[t][i].isSteppedOn||(n.isTileEmpty(i,t)?(n.tiles[t][i].isSteppedOn=!0,n.startChainReaction(i,t)):e.xor(l,r)?n.setStatus(e.STATUS.GAME_OVER):r||(n.tiles[t][i].isSteppedOn=!0))}))}},{key:"isTileSurroundingFlaggedMines",value:function(e,i){var t=this,n=this.tiles[i][e],s=n.isFlag,l=n.isMine,r=n.isSteppedOn,u=n.surroundingMines;if(!s&&!l&&r&&u>0){var a=0;if(this.callSurroundingTiles(e,i,(function(e,i){t.tiles[i][e].isFlag&&(a+=1)})),a===u)return!0}return!1}},{key:"isTileEmpty",value:function(e,i){var t=this.tiles[i][e],n=t.isFlag,s=t.isMine,l=t.surroundingMines;return!(n||s||l>0)}},{key:"startChainReaction",value:function(e,i){var t=this;this.callSurroundingTiles(e,i,(function(e,i){t.tiles[i][e].isSteppedOn||t.tiles[i][e].isFlag||(t.isTileEmpty(e,i)?(t.tiles[i][e].isSteppedOn=!0,t.startChainReaction(e,i)):t.tiles[i][e].surroundingMines>0&&(t.tiles[i][e].isSteppedOn=!0))}))}},{key:"initializeMinefield",value:function(e,i){for(var t=this,n=this.options.mines>this.options.width*this.options.height-this.getSurroundingTileArea(e,i),s=0;s<this.options.mines;){var l=Math.floor(Math.random()*this.options.width),r=Math.floor(Math.random()*this.options.height);n&&(l===e||r===i)||!n&&this.isTileInArea(e,i,l,r)||this.tiles[r][l].isMine||(this.tiles[r][l].isMine=!0,s+=1)}for(var u=function(e){for(var i=function(i){t.tiles[e][i].isMine||t.callSurroundingTiles(i,e,(function(n,s){t.tiles[s][n].isMine&&(t.tiles[e][i].surroundingMines+=1)}))},n=0;n<t.options.width;n+=1)i(n)},a=0;a<this.options.height;a+=1)u(a)}},{key:"getSurroundingTileArea",value:function(e,i){var t=this.getSurroundingTileLimits(e,i),n=t.minX,s=t.maxX,l=t.minY;return(s+1-n)*(t.maxY+1-l)}},{key:"isTileInArea",value:function(e,i,t,n){var s=this.getSurroundingTileLimits(e,i),l=s.minX,r=s.maxX,u=s.minY,a=s.maxY;return t>=l&&t<=r&&n>=u&&n<=a}},{key:"getSurroundingTileLimits",value:function(e,i){var t=Math.max(0,i-1),n=Math.min(this.options.height-1,i+1);return{minX:Math.max(0,e-1),maxX:Math.min(this.options.width-1,e+1),minY:t,maxY:n}}},{key:"callSurroundingTiles",value:function(e,i,t){for(var n=this.getSurroundingTileLimits(e,i),s=n.minX,l=n.maxX,r=n.minY,u=n.maxY,a=r;a<=u;a+=1)for(var o=s;o<=l;o+=1)o===e&&a===i||t(o,a)}},{key:"toggleFlag",value:function(i,t){this.tiles[t][i].isSteppedOn||(this.tiles[t][i].isFlag=!this.tiles[t][i].isFlag,this.emit(e.EVENT.STEP))}},{key:"on",value:function(e,i){this.eventEmitter.on(e,i)}},{key:"off",value:function(e,i){this.eventEmitter.off(e,i)}},{key:"emit",value:function(e){for(var i,t=arguments.length,n=new Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];(i=this.eventEmitter).emit.apply(i,[e].concat(n))}},{key:"isMinefieldComplete",value:function(){return this.tiles.reduce((function(i,t){return i&&t.reduce((function(i,t){var n=t.isSteppedOn,s=t.isMine;return i&&e.xor(n,s)}),!0)}),!0)}},{key:"getMinefield",value:function(){return this.tiles.map((function(e){return(0,n.Z)({},e)}))}},{key:"getFlaggedMines",value:function(){return this.tiles.reduce((function(e,i){return e+i.reduce((function(e,i){return e+(i.isFlag?1:0)}),0)}),0)}}],[{key:"getMinesweeperEnum",value:function(){for(var e=arguments.length,i=new Array(e),t=0;t<e;t++)i[t]=arguments[t];return i.reduce((function(e,i){return(0,n.Z)((0,n.Z)({},e),{},(0,s.Z)({},i,Symbol(i)))}),{})}},{key:"xor",value:function(e,i){return e&&!i||!e&&i}}]),e}();f.DIFFICULTY={EASY:{width:9,height:9,mines:10},MEDIUM:{width:16,height:16,mines:40},HARD:{width:30,height:16,mines:99}},f.DEFAULT_DIFFICULTY="EASY",f.STATUS=f.getMinesweeperEnum("UNINITIALIZED","IN_GAME","GAME_OVER","COMPLETE"),f.EVENT=f.getMinesweeperEnum("START","STEP","STATUS");var S={scrollable:"wVfPL",table:"_5qNUG",tile:"B5Dcs",tile__steppedOnMine:"S5Ktl",tile__flag:"j7E+k",tile__falseFlag:"uQKLj",tile__flagMode:"zAl+s",tile__mine:"ER+67",tile__stepped:"_7pOHx",tile__number1:"XufkA",tile__number2:"DY0+q",tile__number3:"vQE4q",tile__number4:"UWYqv",tile__number5:"v2Qcf",tile__number6:"UlC5-",tile__number7:"Th9Ky",tile__number8:"qsIjN"},T=function(e,i){return{width:"calc(var(--minesweeper-tile-width) * ".concat(e,")"),height:"calc(var(--minesweeper-tile-height) * ".concat(i,")")}},M=t(417);function v(e){const i=Object.assign({p:"p",h2:"h2",h3:"h3",em:"em"},e.components);return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(i.p,{children:"That's it. I don't have anything else to do. Well, I know there's a lot to\nfix and optimize but now I'm too tired."}),"\n",(0,M.jsx)(i.h2,{children:"How it works"}),"\n",(0,M.jsx)(i.p,{children:"I tried to replicate the original game but there are some things I had to change\nto make it work in mobile and with dark theme. There are two modes, Click mode and Flag mode."}),"\n",(0,M.jsx)(i.h3,{children:"Click mode"}),"\n",(0,M.jsxs)(i.p,{children:["When in click mode you can click on every tile. By clicking an empty uncoverd tile you will go to\n",(0,M.jsx)(i.em,{children:"Flag mode"}),". By clicking a number you will expose all the tiles around (only if there are the number's\namount of tiles flagged). By pressing ",(0,M.jsx)(i.em,{children:"command"})," on ",(0,M.jsx)(i.em,{children:"macOS"})," and ",(0,M.jsx)(i.em,{children:"alt"})," on other O.S. and clicking on an\nuncovered tile you will toggle the flag over the selected cell. By right-clicking a covered tile\nyou will toggle the flag over the selected cell."]}),"\n",(0,M.jsx)(i.h3,{children:"Flag mode"}),"\n",(0,M.jsxs)(i.p,{children:["When in flag mode you can only flag uncovered tiles. No more, no less (well you can still click\nempty uncovered tiles and go back to ",(0,M.jsx)(i.em,{children:"Click mode"}),")."]})]})}var E=function(e={}){const{wrapper:i}=e.components||{};return i?(0,M.jsx)(i,Object.assign({},e,{children:(0,M.jsx)(v,e)})):v(e)},y=function(){var e=(0,o.useState)(f.DIFFICULTY[f.DEFAULT_DIFFICULTY]),i=(0,l.Z)(e,2),t=i[0],r=i[1],c=(0,o.useRef)(new f(t)),h=(0,o.useState)(c.current.getMinefield()),d=(0,l.Z)(h,2),g=d[0],p=d[1],m=(0,o.useState)(c.current.getStatus()),v=(0,l.Z)(m,2),y=v[0],x=v[1],F=(0,o.useState)(t.mines-c.current.getFlaggedMines()),I=(0,l.Z)(F,2),_=I[0],A=I[1],j=(0,o.useState)(!0),k=(0,l.Z)(j,2),b=k[0],U=k[1];(0,o.useEffect)((function(){c.current.reset(t),p(c.current.getMinefield()),A(t.mines-c.current.getFlaggedMines()),x(c.current.getStatus())}),[t]),(0,o.useEffect)((function(){var e=function(){p(c.current.getMinefield()),A(t.mines-c.current.getFlaggedMines())};c.current.on(f.EVENT.STEP,e);var i=function(i){x(i),i===f.STATUS.UNINITIALIZED&&e()};return c.current.on(f.EVENT.STATUS,i),function(){c.current.off(f.EVENT.STEP,e),c.current.off(f.EVENT.STATUS,i)}}),[t]);var O=function(e,i,t){return function(n){n.preventDefault();var s=function(e){return!0===e.isSteppedOn&&!1===e.isMine&&!1===e.isFlag&&0===e.surroundingMines}(t);s?U((function(e){return!e})):!b&&!function(e){return!0===e.isSteppedOn&&!1===e.isMine&&!1===e.isFlag&&e.surroundingMines>0}(t)||n.metaKey||2===n.button?c.current.toggleFlag(e,i):c.current.stepOn(e,i)}},w=(0,o.useCallback)((function(e,i){if(null!=i){var t,l=(t={},(0,s.Z)(t,S.tile,!0),(0,s.Z)(t,S.tile__stepped,i.isSteppedOn),(0,s.Z)(t,S.tile__flag,i.isFlag),(0,s.Z)(t,S["tile__number".concat(i.surroundingMines)],!i.isFlag&&i.isSteppedOn&&i.surroundingMines>0),t),r=(0,M.jsx)(M.Fragment,{children:"\xa0"});switch(i.isFlag||!b&&!i.isSteppedOn&&y!==f.STATUS.GAME_OVER?r="\ud83c\udff4":i.isSteppedOn&&i.surroundingMines>0&&(r="".concat(i.surroundingMines)),y){case f.STATUS.UNINITIALIZED:case f.STATUS.IN_GAME:return(0,o.cloneElement)(e,{className:u()((0,n.Z)((0,n.Z)({},l),{},(0,s.Z)({},S.tile__flagMode,!b&&!i.isSteppedOn&&!i.isFlag)))},r);case f.STATUS.COMPLETE:return(0,o.cloneElement)(e,{className:u()(l),onMouseUp:void 0},r);case f.STATUS.GAME_OVER:var a;return!i.isFlag&&i.isMine?r="\ud83d\udca3":!i.isSteppedOn&&i.isFlag&&i.isMine?r="\ud83c\udff4":i.isFlag&&!i.isMine&&(r="\u274c"),(0,o.cloneElement)(e,{className:u()((0,n.Z)((0,n.Z)({},l),{},(a={},(0,s.Z)(a,S.tile__mine,!i.isSteppedOn&&!i.isFlag&&i.isMine),(0,s.Z)(a,S.tile__steppedOnMine,i.isSteppedOn&&!i.isFlag&&i.isMine),(0,s.Z)(a,S.tile__flag,!i.isSteppedOn&&i.isFlag&&i.isMine),(0,s.Z)(a,S.tile__falseFlag,i.isFlag&&!i.isMine),a))),onMouseUp:void 0},r)}}return e}),[b,y]),N=(0,a.bBJ)((function(e){r((0,n.Z)({},e))})),Z=(0,a.bBJ)(U),C=t.width,D=t.height;return(0,M.jsxs)("div",{children:[(0,M.jsx)(E,{}),(0,M.jsx)("div",{className:S.scrollable,children:(0,M.jsx)("table",{className:S.table,style:T(C,D),onContextMenu:function(e){return e.preventDefault()},children:(0,M.jsx)("tbody",{children:(0,a.DZ1)((function(e){return(0,M.jsx)("tr",{children:(0,a.DZ1)((function(i){var t;return null!=(null===g||void 0===g||null===(t=g[e])||void 0===t?void 0:t[i])&&w((0,M.jsx)("td",{className:u()((0,s.Z)({},S.tile,!0)),onMouseUp:O(i,e,g[e][i]),children:"\xa0"},"tile-x-".concat(i,"-y-").concat(e)),g[e][i])}),C)},"row-".concat(e))}),D)})})}),(0,M.jsxs)("div",{children:[y===f.STATUS.UNINITIALIZED&&(0,M.jsx)("p",{children:"Ready..."}),y===f.STATUS.IN_GAME&&(0,M.jsxs)("p",{children:["You must flag ",_," mines to finish"]}),y===f.STATUS.GAME_OVER&&(0,M.jsx)("p",{children:"Oops!"}),y===f.STATUS.COMPLETE&&(0,M.jsx)("p",{children:"Bravo! Hooray!"})]}),(0,M.jsx)("div",{children:(0,M.jsxs)("fieldset",{children:[(0,M.jsx)("legend",{children:"Mode"}),(0,M.jsx)("input",{type:"radio",name:"stepMode",id:"setStepModeStep",value:"step",onChange:Z(!0),checked:b}),(0,M.jsx)("label",{htmlFor:"setStepModeStep",children:"Click"})," ",(0,M.jsx)("input",{type:"radio",name:"stepMode",id:"setStepModeFlag",value:"flag",onChange:Z(!1),checked:!b}),(0,M.jsx)("label",{htmlFor:"setStepModeFlag",children:"Flag"})]})}),(0,M.jsx)("div",{children:(0,M.jsxs)("fieldset",{children:[(0,M.jsx)("legend",{children:"Choose your density (ehm... destiny)"}),(0,M.jsx)("button",{type:"button",onClick:function(){c.current.reset()},children:"Reset"})," ",(0,M.jsx)("button",{type:"button",onClick:N(f.DIFFICULTY.EASY),children:"Easy"})," ",(0,M.jsx)("button",{type:"button",onClick:N(f.DIFFICULTY.MEDIUM),children:"Medium"})," ",(0,M.jsx)("button",{type:"button",onClick:N(f.DIFFICULTY.HARD),children:"Hard"}),(0,M.jsxs)("form",{onSubmit:function(e){e.preventDefault();var i=e.target.width.value,t=e.target.height.value,n=e.target.mines.value,s=parseInt(i),l=parseInt(t),u=parseInt(n);(isNaN(s)||s<3)&&(s=3),(isNaN(l)||l<3)&&(l=3),isNaN(u)?u=Math.floor(.15*s*l):u<1?u=1:u>=s*l&&(u=s*l-1),r({width:s,height:l,mines:u})},children:[(0,M.jsx)("label",{htmlFor:"width",children:"Width"})," ",(0,M.jsx)("input",{id:"width",name:"width",type:"number",defaultValue:C,min:3})," ",(0,M.jsx)("label",{htmlFor:"height",children:"Height"})," ",(0,M.jsx)("input",{id:"height",name:"height",type:"number",defaultValue:D,min:3})," ",(0,M.jsx)("label",{htmlFor:"mines",children:"Mines"})," ",(0,M.jsx)("input",{id:"mines",name:"mines",type:"number",defaultValue:_,min:1})," ",(0,M.jsx)("button",{type:"submit",children:"Custom"})]})]})})]})}}}]);