"use strict";(self.webpackChunkminkiele_github_io=self.webpackChunkminkiele_github_io||[]).push([[517],{517:function(e,i,t){t.r(i),t.d(i,{default:function(){return y}});var n=t(413),s=t(942),r=t(885),l=t(123),u=t.n(l),o=t(575),a=t(363),c=t(671),h=t(144),d=t(41),g=t.n(d),p=t(436),m=t.n(p),S=function(){function e(i){(0,c.Z)(this,e),this.options=(0,n.Z)({},e.DIFFICULTY[e.DEFAULT_DIFFICULTY]),this.tiles=[],this.status=e.STATUS.UNINITIALIZED,this.eventEmitter=new(g()),this.reset(i)}return(0,h.Z)(e,[{key:"getStatus",value:function(){return this.status}},{key:"setStatus",value:function(i){this.status=i,this.emit(e.EVENT.STATUS,this.status)}},{key:"reset",value:function(i){null!=i&&(this.options=(0,n.Z)((0,n.Z)({},this.options),i)),this.initializeEmptyMinefield(),this.setStatus(e.STATUS.UNINITIALIZED)}},{key:"initializeEmptyMinefield",value:function(){var e=this;this.tiles=m()(this.options.height,(function(i){return m()(e.options.width,(function(e){return{isFlag:!1,isMine:!1,isSteppedOn:!1,surroundingMines:0,x:e,y:i}}))}))}},{key:"stepOn",value:function(i,t){var n=this.tiles[t][i],s=n.isFlag,r=n.isSteppedOn,l=n.isMine;s||(r?this.isTileSurroundingFlaggedMines(i,t)&&(this.setStatus(e.STATUS.IN_GAME),this.stepOnSurroundingTiles(i,t)):(this.status===e.STATUS.UNINITIALIZED&&(this.initializeMinefield(i,t),this.setStatus(e.STATUS.IN_GAME)),this.tiles[t][i].isSteppedOn=!0,l?this.setStatus(e.STATUS.GAME_OVER):this.isTileEmpty(i,t)&&(this.startChainReaction(i,t),this.setStatus(e.STATUS.IN_GAME)))),this.emit(e.EVENT.STEP),this.isMinefieldComplete()&&this.setStatus(e.STATUS.COMPLETE)}},{key:"stepOnSurroundingTiles",value:function(i,t){var n=this;this.callSurroundingTiles(i,t,(function(i,t){var s=n.tiles[t][i],r=s.isMine,l=s.isFlag;n.tiles[t][i].isSteppedOn||(n.isTileEmpty(i,t)?(n.tiles[t][i].isSteppedOn=!0,n.startChainReaction(i,t)):e.xor(r,l)?n.setStatus(e.STATUS.GAME_OVER):l||(n.tiles[t][i].isSteppedOn=!0))}))}},{key:"isTileSurroundingFlaggedMines",value:function(e,i){var t=this,n=this.tiles[i][e],s=n.isFlag,r=n.isMine,l=n.isSteppedOn,u=n.surroundingMines;if(!s&&!r&&l&&u>0){var o=0;if(this.callSurroundingTiles(e,i,(function(e,i){t.tiles[i][e].isFlag&&(o+=1)})),o===u)return!0}return!1}},{key:"isTileEmpty",value:function(e,i){var t=this.tiles[i][e],n=t.isFlag,s=t.isMine,r=t.surroundingMines;return!(n||s||r>0)}},{key:"startChainReaction",value:function(e,i){var t=this;this.callSurroundingTiles(e,i,(function(e,i){t.tiles[i][e].isSteppedOn||t.tiles[i][e].isFlag||(t.isTileEmpty(e,i)?(t.tiles[i][e].isSteppedOn=!0,t.startChainReaction(e,i)):t.tiles[i][e].surroundingMines>0&&(t.tiles[i][e].isSteppedOn=!0))}))}},{key:"initializeMinefield",value:function(e,i){for(var t=this,n=this.options.mines>this.options.width*this.options.height-this.getSurroundingTileArea(e,i),s=0;s<this.options.mines;){var r=Math.floor(Math.random()*this.options.width),l=Math.floor(Math.random()*this.options.height);n&&(r===e||l===i)||!n&&this.isTileInArea(e,i,r,l)||this.tiles[l][r].isMine||(this.tiles[l][r].isMine=!0,s+=1)}for(var u=function(e){for(var i=function(i){t.tiles[e][i].isMine||t.callSurroundingTiles(i,e,(function(n,s){t.tiles[s][n].isMine&&(t.tiles[e][i].surroundingMines+=1)}))},n=0;n<t.options.width;n+=1)i(n)},o=0;o<this.options.height;o+=1)u(o)}},{key:"getSurroundingTileArea",value:function(e,i){var t=this.getSurroundingTileLimits(e,i),n=t.minX,s=t.maxX,r=t.minY;return(s+1-n)*(t.maxY+1-r)}},{key:"isTileInArea",value:function(e,i,t,n){var s=this.getSurroundingTileLimits(e,i),r=s.minX,l=s.maxX,u=s.minY,o=s.maxY;return t>=r&&t<=l&&n>=u&&n<=o}},{key:"getSurroundingTileLimits",value:function(e,i){var t=Math.max(0,i-1),n=Math.min(this.options.height-1,i+1);return{minX:Math.max(0,e-1),maxX:Math.min(this.options.width-1,e+1),minY:t,maxY:n}}},{key:"callSurroundingTiles",value:function(e,i,t){for(var n=this.getSurroundingTileLimits(e,i),s=n.minX,r=n.maxX,l=n.minY,u=n.maxY,o=l;o<=u;o+=1)for(var a=s;a<=r;a+=1)a===e&&o===i||t(a,o)}},{key:"toggleFlag",value:function(i,t){this.tiles[t][i].isSteppedOn||(this.tiles[t][i].isFlag=!this.tiles[t][i].isFlag,this.emit(e.EVENT.STEP))}},{key:"on",value:function(e,i){this.eventEmitter.on(e,i)}},{key:"off",value:function(e,i){this.eventEmitter.off(e,i)}},{key:"emit",value:function(e){for(var i,t=arguments.length,n=new Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];(i=this.eventEmitter).emit.apply(i,[e].concat(n))}},{key:"isMinefieldComplete",value:function(){return this.tiles.reduce((function(i,t){return i&&t.reduce((function(i,t){var n=t.isSteppedOn,s=t.isMine;return i&&e.xor(n,s)}),!0)}),!0)}},{key:"getMinefield",value:function(){return this.tiles.map((function(e){return(0,n.Z)({},e)}))}},{key:"getFlaggedMines",value:function(){return this.tiles.reduce((function(e,i){return e+i.reduce((function(e,i){return e+(i.isFlag?1:0)}),0)}),0)}}],[{key:"getMinesweeperEnum",value:function(){for(var e=arguments.length,i=new Array(e),t=0;t<e;t++)i[t]=arguments[t];return i.reduce((function(e,i){return(0,n.Z)((0,n.Z)({},e),{},(0,s.Z)({},i,Symbol(i)))}),{})}},{key:"xor",value:function(e,i){return e&&!i||!e&&i}}]),e}();S.DIFFICULTY={EASY:{width:9,height:9,mines:10},MEDIUM:{width:16,height:16,mines:40},HARD:{width:30,height:16,mines:99}},S.DEFAULT_DIFFICULTY="EASY",S.STATUS=S.getMinesweeperEnum("UNINITIALIZED","IN_GAME","GAME_OVER","COMPLETE"),S.EVENT=S.getMinesweeperEnum("START","STEP","STATUS");var f={scrollable:"wVfPL",table:"_5qNUG",tile:"B5Dcs",tile__steppedOnMine:"S5Ktl",tile__flag:"j7E+k",tile__falseFlag:"uQKLj",tile__mine:"ER+67",tile__stepped:"_7pOHx",tile__number1:"XufkA",tile__number2:"DY0+q",tile__number3:"vQE4q",tile__number4:"UWYqv",tile__number5:"v2Qcf",tile__number6:"UlC5-",tile__number7:"Th9Ky",tile__number8:"qsIjN"},T=function(e,i){return{width:"calc(var(--minesweeper-tile-width) * ".concat(e,")"),height:"calc(var(--minesweeper-tile-height) * ".concat(i,")")}},M=t(417);function v(e){const i=Object.assign({p:"p",h2:"h2",h3:"h3",em:"em"},e.components);return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(i.p,{children:"That's it. I don't have anything else to do. Well, I know there's a lot to\nfix and optimize but now I'm too tired."}),"\n",(0,M.jsx)(i.h2,{children:"How it works"}),"\n",(0,M.jsx)(i.p,{children:"I tried to replicate the original game but there are some things I had to change\nto make it work in mobile and with dark theme. There are two modes, Click mode and Flag mode."}),"\n",(0,M.jsx)(i.h3,{children:"Click mode"}),"\n",(0,M.jsxs)(i.p,{children:["When in click mode you can click on every tile. By clicking an empty uncoverd tile you will go to\n",(0,M.jsx)(i.em,{children:"Flag mode"}),". By clicking a number you will expose all the tiles around (only if there are the number's\namount of tiles flagged). By pressing ",(0,M.jsx)(i.em,{children:"command"})," on ",(0,M.jsx)(i.em,{children:"macOS"})," and ",(0,M.jsx)(i.em,{children:"alt"})," on other O.S. on an\nuncovered tile you will flag it."]}),"\n",(0,M.jsx)(i.h3,{children:"Flag mode"}),"\n",(0,M.jsxs)(i.p,{children:["When in flag mode you can only flag uncovered tiles. No more, no less (well you can still click\nempty uncovered tiles and go back to ",(0,M.jsx)(i.em,{children:"Click mode"}),")."]})]})}var E=function(e={}){const{wrapper:i}=e.components||{};return i?(0,M.jsx)(i,Object.assign({},e,{children:(0,M.jsx)(v,e)})):v(e)},y=function(){var e=(0,a.useState)(S.DIFFICULTY[S.DEFAULT_DIFFICULTY]),i=(0,r.Z)(e,2),t=i[0],l=i[1],c=(0,a.useRef)(new S(t)),h=(0,a.useState)(c.current.getMinefield()),d=(0,r.Z)(h,2),g=d[0],p=d[1],m=(0,a.useState)(c.current.getStatus()),v=(0,r.Z)(m,2),y=v[0],F=v[1],I=(0,a.useState)(t.mines-c.current.getFlaggedMines()),_=(0,r.Z)(I,2),x=_[0],A=_[1],k=(0,a.useState)(!0),U=(0,r.Z)(k,2),j=U[0],O=U[1];(0,a.useEffect)((function(){c.current.reset(t),p(c.current.getMinefield()),A(t.mines-c.current.getFlaggedMines()),F(c.current.getStatus())}),[t]),(0,a.useEffect)((function(){var e=function(){p(c.current.getMinefield()),A(t.mines-c.current.getFlaggedMines())};c.current.on(S.EVENT.STEP,e);var i=function(i){F(i),i===S.STATUS.UNINITIALIZED&&e()};return c.current.on(S.EVENT.STATUS,i),function(){c.current.off(S.EVENT.STEP,e),c.current.off(S.EVENT.STATUS,i)}}),[t]);var b=function(e,i,t){var n=t.isSteppedOn,s=t.surroundingMines,r=t.isMine,l=t.isFlag;return function(t){n&&!r&&!l&&0===s?O((function(e){return!e})):!j||t.metaKey||2===t.button?c.current.toggleFlag(e,i):c.current.stepOn(e,i)}},w=(0,o.bBJ)((function(e){l((0,n.Z)({},e))})),N=(0,o.bBJ)(O),Z=t.width,C=t.height;return(0,M.jsxs)("div",{children:[(0,M.jsx)(E,{}),(0,M.jsx)("div",{className:f.scrollable,children:(0,M.jsx)("table",{className:f.table,style:T(Z,C),children:(0,M.jsx)("tbody",{children:(0,o.DZ1)((function(e){return(0,M.jsx)("tr",{children:(0,o.DZ1)((function(i){var t;return null!=(null===g||void 0===g||null===(t=g[e])||void 0===t?void 0:t[i])&&function(e,i){if(null!=i){var t,r=(t={},(0,s.Z)(t,f.tile,!0),(0,s.Z)(t,f.tile__unstepped,!i.isSteppedOn),(0,s.Z)(t,f.tile__stepped,i.isSteppedOn),(0,s.Z)(t,f.tile__flag,i.isFlag),(0,s.Z)(t,f["tile__number".concat(i.surroundingMines)],!i.isFlag&&i.isSteppedOn&&i.surroundingMines>0),t),l=(0,M.jsx)(M.Fragment,{children:"\xa0"});switch(i.isFlag?l="\ud83c\udff4":i.isSteppedOn&&i.surroundingMines>0&&(l="".concat(i.surroundingMines)),y){case S.STATUS.UNINITIALIZED:case S.STATUS.IN_GAME:return(0,a.cloneElement)(e,{className:u()(r)},l);case S.STATUS.COMPLETE:return(0,a.cloneElement)(e,{className:u()(r),onMouseUp:void 0},l);case S.STATUS.GAME_OVER:var o;return!i.isFlag&&i.isMine?l="\ud83d\udca3":!i.isSteppedOn&&i.isFlag&&i.isMine?l="\ud83c\udff4":i.isFlag&&!i.isMine&&(l="\u274c"),(0,a.cloneElement)(e,{className:u()((0,n.Z)((0,n.Z)({},r),{},(o={},(0,s.Z)(o,f.tile__mine,!i.isSteppedOn&&!i.isFlag&&i.isMine),(0,s.Z)(o,f.tile__steppedOnMine,i.isSteppedOn&&!i.isFlag&&i.isMine),(0,s.Z)(o,f.tile__flag,!i.isSteppedOn&&i.isFlag&&i.isMine),(0,s.Z)(o,f.tile__falseFlag,i.isFlag&&!i.isMine),o))),onMouseUp:void 0},l)}}return e}((0,M.jsx)("td",{className:u()((0,s.Z)({},f.tile,!0)),onMouseUp:b(i,e,g[e][i]),children:"\xa0"},"tile-x-".concat(i,"-y-").concat(e)),g[e][i])}),Z)},"row-".concat(e))}),C)})})}),(0,M.jsxs)("div",{children:[y===S.STATUS.UNINITIALIZED&&(0,M.jsx)("p",{children:"Ready..."}),y===S.STATUS.IN_GAME&&(0,M.jsxs)("p",{children:["You must flag ",x," mines to finish"]}),y===S.STATUS.GAME_OVER&&(0,M.jsx)("p",{children:"Oops!"}),y===S.STATUS.COMPLETE&&(0,M.jsx)("p",{children:"Bravo! Hooray!"})]}),(0,M.jsx)("div",{children:(0,M.jsxs)("fieldset",{children:[(0,M.jsx)("legend",{children:"Mode"}),(0,M.jsx)("input",{type:"radio",name:"stepMode",id:"setStepModeStep",value:"step",onChange:N(!0),checked:j}),(0,M.jsx)("label",{htmlFor:"setStepModeStep",children:"Click"})," ",(0,M.jsx)("input",{type:"radio",name:"stepMode",id:"setStepModeFlag",value:"flag",onChange:N(!1),checked:!j}),(0,M.jsx)("label",{htmlFor:"setStepModeFlag",children:"Flag"})]})}),(0,M.jsx)("div",{children:(0,M.jsxs)("fieldset",{children:[(0,M.jsx)("legend",{children:"Choose your destiny"}),(0,M.jsx)("button",{type:"button",onClick:w(S.DIFFICULTY.EASY),children:"Easy"})," ",(0,M.jsx)("button",{type:"button",onClick:w(S.DIFFICULTY.MEDIUM),children:"Medium"})," ",(0,M.jsx)("button",{type:"button",onClick:w(S.DIFFICULTY.HARD),children:"Hard"})," ",(0,M.jsx)("button",{type:"button",onClick:function(){c.current.reset()},children:"Reset"})]})})]})}}}]);